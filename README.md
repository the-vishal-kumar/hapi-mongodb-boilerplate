# hapi-mongodb-template

A NodeJs application with Hapi framework, MongoDb as database, Mongoose as ODM. Application uses eslint, husky, and lint-staged for code-linting purposes.
Application contains a simple signup-login mechanism.

## Includes

- Node v12
- Hapi v18
- Swagger
- Mongoose v5

## Running it

> `npm i`

> `npm start`

## Contact Author
#### Email vishal194kumar@gmail.com
#### Follow https://twitter.com/the_vishalkr

### Folder Structure
    .
    ├──public
    |   ├──favicon.ico
    ├──src
    |   ├──app
    |   |   ├──db.js
    |   |   ├──index.js
    |   |   ├──server.js
    |   ├──config
    |   |   ├──dbConfig.js
    |   |   ├──index.js
    |   |   ├──plugin.js
    |   |   ├──serverConfig.js
    |   ├──constants
    |   |   ├──i18n.js
    |   |   ├──index.js
    |   ├──controllers
    |   ├──models
    |   ├──routes
    |   ├──services
    |   |   ├──index.js
    |   |   ├──wrapperService.js
    |   ├──util
    |   |   ├──bootstrap.js
    |   |   ├──index.js
    |   |   ├──rest.js
    |   |   ├──universalFunctions.js
    |   ├──index.js
    └──package.json