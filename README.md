<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Local pizza service bot</p>
    <p align="center">
    i uses  <a href="https://github.com/nestjs/nest">NestJS</a> and  <a href="https://github.com/telegraf/telegraf">Telegraf</a? for calling to telegram api without writing many api requests.


</p></p>
  
## clonning the app 
  
```bash
$ git clone https://github.com/0xc0000007b/pizza-bot
$ cd pizza-bot
 # for open this project use westorm 
$ webstorm .
 # or vscode
$ code .
 # or other web dev core editor
```

  
after clonning you need instal neccessary packages. Using npm or yarn for these

## Installation 

```bash
$ yarn install
# or npm
$ npm install
```

## Running the app

```bash
# development
$ yarn run start
# or
$ npm  start 



# watch mode
# by using  npm
$ npm run start --watch
$ npm run start:dev
  
# by using yarn
$ yarn run start:dev
$ yarn run start

# production mode
# by using npm
$ npm run start:prod
# by using yarn  
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

<span style="color:red;font-weight:700;font-size:20px">
 I USE LOCAL DATABASE
I YOU WANT TO USE DATABASE, USE XAMMP or PgAdmin, or MongoDB Compass for creating database locally</span>
additional link

<a href="https://www.apachefriends.org/ru/">Xammp</a>
<a href="https://www.pgadmin.org">PgAdmin</a>
<a href="https://www.mongodb.com/try/download/compass">MongoDB Compoass</a>


   THE MOST IMPORTANT ATTEMPTION
   I do not publish my database to this repository.
   You must create your own locally database copy 




with Xammp
1. open xammp
2. click to start Apache and MySQL
open phpmyadmin on localhost:3030

with compass
1. open compass
2. login on compass for now
3. create database
4. edit app.module.ts by replacimg database type an other data

with pgadmin
1. open app
2. login in app for now
3. create localserver and database
4. edit db connection config of app.module.ts

USIN WITH OCCURACY
THANKS YOU A LOT


