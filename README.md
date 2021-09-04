# starton-hackathon
### start flask-backend
start from flask-backend directory

initiate and activate python venv from `environment.yml` first
```
conda env create -f ./environment.yml
conda activate starton-hackathon
```

run flask server
```
flask run
```

### start react-frontend
start from react-frontend directory

initiate node env
```
npm install
```

start react-electron app
```
npm run dev
```

if you want to run the program via browser and desktop app, edit `.env` file and remove `BROWSER=none` env variable
