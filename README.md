# mistral-rask

## Installation

Create a Docker network used by services:
`docker network create imdb`

##### Auth service

Service used for signup and obtaining JWTs.

Build and start auth service:
`yarn`
`docker-compose up -d`

##### Movies service

REST API with (scraped) movies.

Build and start movies service:
`yarn`
`docker-compose build && docker-compose up -d`

##### Client service

Build and start client app
`yarn`
`yarn dev ` or `yarn build && yarn start`

##

There are postman collections in both Auth and Movies service, which you can play with.
.env files are includes for your convenience.
