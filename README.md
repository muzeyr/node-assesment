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
- [Swagger URL ](#swagger-url)
- [Response Payload ](#response-payload)
- [Request Payload](#request-payload)



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
Use `http://localhost:3000/api/search` address via Postman `post` method, copy all in `node.postman_collection.json` file.



https://muzeyr-assigment.herokuapp.com/docs/

### Swagger URL

* [https://muzeyr-assigment.herokuapp.com/docs/](https://muzeyr-assigment.herokuapp.com/docs/)



### Request Payload
```
The request payload will include a JSON with 4 fields.

   - “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”
   - “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.
   
POST /api/search
Content-Type: application/json
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Response Payload

```

The request payload will include a JSON with 4 fields.

   - “code” is for status of the request. 0 means success. Other values may be used for errors that you define.
   - “msg”  is for description of the code. You can set it to “success” for successful requests. For unsuccessful requests, you should use explanatory messages.
   - “records”  will include all the filtered items according to the request. This array should include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document. 

{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "z753d2ahecyew7",
      "createdAt": "2017-01-28T01:22:14.398Z",
      "totalCount": 2800
    },
    {
      "key": "VrdwQtsaq7621r",
      "createdAt": "2017-01-27T08:19:14.135Z",
      "totalCount": 2900
    },
  ]
}
```
