from contextlib import asynccontextmanager
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
from pendulum import now
from sqlalchemy import create_engine
from fastapi_utilities import repeat_at

from backend.Bean import Bean
from backend.backend_helpers import (
    get_preset_data,
    read_config,
    set_botd,
    set_table_state,
)

config = read_config()
df = pd.DataFrame()


@asynccontextmanager
async def lifespan(app: FastAPI):
    global df
    engine = create_engine(f"sqlite:///{config['sql_file_path']}")
    if config["reset_sql"]:
        set_table_state(engine, config["table_name"], get_preset_data())

    df = pd.read_sql(config["table_name"], engine).rename(columns={"_index": "index"})

    if config["set_random_botd"]:
        set_botd(df, now().date())

    yield

    set_table_state(engine, config["table_name"], df.to_dict(orient="records"))  # type: ignore


@repeat_at(cron="0 0 * * *")
async def update_botd():
    global df
    df = set_botd(df, now().date())


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    global df
    df.to_csv("test.csv",index=False)
    return df.to_dict(orient="records")


@app.post("/addBean")
async def add_bean(bean: Bean):
    global df
    if bean.id in df["_id"].unique():
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"reason": f"bean_id: {bean.id} already present, please use new bean id"},
        )
    
    df.loc[len(df)] = bean.to_dict()

    return {"status": "success"}


@app.post("/deleteBean")
async def delete_bean(bean_id: str):
    global df
    if bean_id not in df["_id"].unique():
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"reason": f"cannot find id: {bean_id}"},
        )

    df = df[df["_id"] != bean_id]

    return {"status": "success"}


@app.post("/updateBean")
async def update_bean(bean: Bean):
    global df
    if bean.id not in df["_id"].unique():
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"reason": f"cannot find id: {bean.id}"},
        )

    df.loc[df["_id"] == bean.id, bean.to_dict().keys()] = bean.to_dict().values()
    

    return {"status": "success"}
