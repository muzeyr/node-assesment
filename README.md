# node-assesment
Node assesment

A RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## TAble of Contents
- [Setting up the project](#setting-up)
- [Install express](#express-install)
- [Install Dotenv](#dotenv-install)
- [Install nodemon](#nodemon-install)
- [Swagger ](#swagger-install)
- [Mongo ](#mongodb-install)


### Setting up the project:
```bash
npm init -y
```
### Express 
```bash
npm install --save express
npm install -save-dev @types/express

```
### Dotenv 
```bash
npm install dotenv
```
### Nodemon 
```bash
npm install -g nodemon
```

### Swagger 
```bash
npm install swagger-ui-express --save
```

### Mongoose 
```bash
npm install mongoose
```

### Eslint Install
```bash
npm install --save-dev eslint
npx eslint --init
```


## Commands


* ### Installation
```bash
- git clone https://github.com/muzeyr/node-assesment
  cd getir-assesment
```

* ### Edit .env file
Set the  [ environment variables](#environment-variables) 

```bash
# open .env and modify the environment variables 
cp .env.example .env
```

* ### Demo data
Use `http://localhost:3000/api/search` address via Postman `post` method, copy all in `node_assigment.postman_collection.json` file.
