# README
## How to run
To run you will need a working installation of npm and python (preferably 3.10+)

### Backend
- Navigate inside the backend folder
- run ``pip install requirements.txt``
- Then run ``fastapi run backend.py``

### Frontend
- Navigate inside the frontend folder
- run ``npm install``
- run ``npm run build``, followed by ``npm run preview``
- or run ``npm run dev``
- click on the url in the console

## Tech decisions
Most of the tech decisions were made due to familiarity, and size of project. Vite was chosen as the backend framework, due to being easy to start a project from, and the deprecation of create react app. For the backend a Fastapi python server was chosen, as the complexity doesn't extend much past hosting the db for operations. The RDBMS chosen was sqlite, due to ease of spinning up.