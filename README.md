> **Archived.** Written in 2020–21 and kept as a record of earlier work. It is no longer maintained and its dependencies are outdated.
>
> ⚠️ **Security note:** this code stores passwords as unsalted double-MD5 hashes, which are trivially crackable. Do not use it as-is; hash passwords with bcrypt, scrypt or argon2 instead. For a current setup, see [nodejs-typescript-rest-boilerplate](https://github.com/the-vishal-kumar/nodejs-typescript-rest-boilerplate).

# hapi-mongodb-boilerplate

A NodeJs application with Hapi framework, MongoDb as database, Mongoose as ODM.  
It uses Joi for schema validation.  
It uses eslint, husky, and lint-staged for code-linting purposes.  
It contains a simple signup-login mechanism.

## Tech Stack

* [Node.js] - Free, open-sourced, cross-platform JavaScript run-time environment
* [Hapi] - Simple, Secure Framework Developers Trust
* [Mongoose] - Elegant MongoDB ODM for node.js
* [Joi] - Schema description language and data validator
* [Postman] - Collaboration Platform for API Development

**hapi-mongodb-boilerplate** itself is **open source** with a [public repository][hapi-mongodb-boilerplate] on GitHub.

## Running it

> `yarn`

> Copy *.env.sample* as **.env** to root directory, and put appropriate values in it. It is an optional step, application will run using default values if *.env* is not found.

> `yarn start` or `yarn run dev`

## Problem Statement

> Go to [Problem Statement]

## License

AGPL-3.0-or-later

## Meet The Maker
[Vishal Kumar] - Software Engineer 👨‍💻 and an Aspiring Entrepreneur👨‍💼

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

[Vishal Kumar]: <https://www.linkedin.com/in/the-vishal-kumar/>
[Node.js]: <https://nodejs.dev/>
[Hapi]: <https://hapi.dev/>
[Mongoose]: <https://mongoosejs.com/>
[Joi]: <https://joi.dev/>
[Postman]: <https://www.postman.com/>
[hapi-mongodb-boilerplate]: <https://github.com/the-vishal-kumar/hapi-mongodb-boilerplate>
[Problem Statement]: <./PROBLEM.md>