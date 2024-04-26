# Hackfest 2024 Ciputra University

## Description

Lorem ipsum

## Team Members

Lorem ipsum

## Docs
1. Auth API([here](#auth-api)
2. Banner API([here](#banner-api)

### Base Environment

Base environment for this http request is `http://localhost:3000`. You can change it to your own environment.

```http
@BASE_URL=http://localhost:3000
@TOKEN=your_token
```

### Auth API

This auth API is used to register and login user. The user will get a token after successfully login and the token will be used to access other API.

#### Register Request

Body request to login user.
```http
### Create a new user
POST {{BASE_URL}}/auth/register
Content-Type: application/json

{
  "email": "adityarizky1020@gmail.com",
  "password": "password123",
  "complete_name": "Aditya Rizky"
}
```

Response after successfully register user.

Status code: `201 Created`
```json
{
	"message": "User created",
	"data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTQxNDMwNzUsImV4cCI6MTcxNDIyOTQ3NX0.061xoYYecgOyvjQ0xtM-f6KHERNeWo1Pg_6IRL_I6tg"
}
```

#### Login Request

Body request to login user.
```http
### Login user
POST {{BASE_URL}}/auth/login
Content-Type: application/json

{
  "email": "adityarizky1020@gmail.com",
  "password": "password123"
}
```

Response after successfully login user.

Status code: `200 OK`
```json
{
  "message": "Login success",
  "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImlhdCI6MTcxNDE0NDUzNywiZXhwIjoxNzE0MjMwOTM3fQ.44YCK4aGhUyNO4HGZa1TxPrjXN3Sf4xGg3xvOON8mXQ"
}
```

### Banner API

This banner API is used to get all banners.

#### Get All Banners Request

Request to get all banners.
```http
GET {{BASE_URL}}/banner
Accept: application/json
```

Response after successfully get all banners.
```json
{
  "message": "Banners retrieved",
  "data": [
    {
      "id": "2b73e2a4-e8ac-4712-b815-16904e350969",
      "link": "https://is3.cloudhost.id/storage-foto/ciputra-banner/Item2.png"
    },
    {
      "id": "38a2b92c-f1a6-40ea-baca-0eb779f07131",
      "link": "https://is3.cloudhost.id/storage-foto/ciputra-banner/Item3.png"
    },
    {
      "id": "66e267ae-0955-455c-a567-9ca9f5013528",
      "link": "https://is3.cloudhost.id/storage-foto/ciputra-banner/Item1.png"
    }
  ]
}
```
