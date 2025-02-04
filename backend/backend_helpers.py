import json
from pathlib import Path
import random
from typing import Any
from pendulum import Date

import pandas as pd
from sqlalchemy import Boolean, Column, Engine, Integer, MetaData, String, Table, text


def read_config(config_path: Path | None = None):
    if config_path is None:
        config_path = Path(__file__).parent / "config.json"

    with open(config_path) as f:
        return json.load(f)


def get_preset_data(preset_data_path: Path | None = None) -> list[dict[str, Any]]:
    if preset_data_path is None:
        preset_data_path = Path(__file__).parent / "presets" / "AllTheBeans.json"

    with open(preset_data_path) as f:
        return json.load(f)


def beans_schema(metadata: MetaData) -> None:
    Table(
        "beans",
        metadata,
        Column("_id", String, primary_key=True),
        Column("_index", Integer),
        Column("isBOTD", Boolean),
        Column("Cost", String),
        Column("Image", String),
        Column("colour", String),
        Column("Name", String),
        Column("Description", String),
        Column("Country", String),
    )


def set_table_state(
    engine: Engine, table_name: str, data: list[dict[str, Any]]
) -> None:
    metadata = MetaData()
    beans_schema(metadata)

    with engine.connect() as connection:
        connection.execute(text(f"drop table {table_name}"))
        metadata.create_all(engine)

        insert_query = text(
            f"INSERT INTO {table_name} VALUES "
            "(:_id, :index, :isBOTD, :Cost, :Image, :colour, :Name, :Description, :Country)"
        )
        connection.execute(insert_query, parameters=data)

        connection.commit()


def set_botd(data: pd.DataFrame, date: Date) -> pd.DataFrame:
    seed = 5 * date.year + 3 * date.month + 2 * date.day
    random.seed(seed)
    botd_index = random.randint(0, len(data))

    yesterday = date.subtract(days=1)
    seed = 5 * yesterday.year + 3 * yesterday.month + 2 * yesterday.day
    random.seed(seed)
    yesterday_index = random.randint(0, len(data))

    if botd_index == yesterday_index:
        if yesterday_index > len(data) / 2:
            botd_index -= 1
        else:
            botd_index += 1

    data["isBOTD"] = False
    data.loc[botd_index, "isBOTD"] = True
    return data
