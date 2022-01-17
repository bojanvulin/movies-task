# mistral-rask

## Installation

Create a Docker network used by services:
`docker network create imdb`

##### Auth service

Build and start auth service:
`docker-compose up -d`

##### Movies service

Build and start movies service:
`docker-compose build && docker-compose up -d`

##### Client service

Build and start client app
`yarn dev ` or `yarn build && yarn start`

##

There are postman collections in both Auth and Movies service, with which you can play with.