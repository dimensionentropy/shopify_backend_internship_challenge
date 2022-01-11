# Shopify Backend Intern Challenge
This challenge is for applying for the backend intern [position](https://www.shopify.com/careers/backend-developer-intern-summer-2022-remote-us-canada_f29b717b-42d7-4d32-851b-e5b2c69a16c7)


## Online demo
- https://chu-yu-shopify-backend-intern.herokuapp.com/


## Or run locally

### Installation

- Install [Node.js](https://nodejs.dev/learn/how-to-install-nodejs)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Start MongoDB [(ref)](https://docs.mongodb.com/guides/server/install/#run-mongodb)
- Install packages
  - Execute ```npm install```
- Configure env variable
  - Execute ```cp .env.example .env```
  - Open .env file and change `MONGODB_URL=` to (default) `MONGODB_URL=mongodb://127.0.0.1:27017/shopify_backend_intern?retryWrites=true&w=majority`


### Get Started

- Execute ```node index.js```

#### Web

- http://localhost:3000/

#### Or Commend Line

- Create a category (For the advanced requirement: `Ability to assign/remove inventory items to a named group/collection`)
```shell
curl --location --request POST 'http://localhost:3000/categories' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "newCategory"
}'
```

- Create an inventory
```shell
curl --location --request POST 'http://localhost:3000/inventories' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Clock",
    "stock": 100,
    "categories": []
}'
```

- Get inventories
```shell
curl --location --request GET 'http://localhost:3000/inventories'
```

- Update an inventory (would have to change the objectId in url )
```shell
curl --location --request PATCH 'http://localhost:3000/inventories/61da5a2c86bc654dc3002785' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Alarm Clock",
    "created_at": "2020-12-23"
}'
```

- Delete an inventory (would have to change the objectId in url )
```shell
curl --location --request DELETE 'http://localhost:3000/inventories/61dbb44dcf9728a91c9fcdad'
```