# Hackfest 2024 Ciputra University

## Description

Lorem ipsum

## Team Members

Lorem ipsum

## Docs
1. [Auth API](#auth-api)
2. [Banner API](#banner-api)
3. [Ruangan](#ruangan)
4. [Pengaturan Awal](#pengaturan-awal)

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

Status Code: `200 OK`
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

### Ruangan

This ruangan API is used to get all ruangan.

#### Get All Ruangan Request

Request to get all ruangan.
```http
GET {{BASE_URL}}/ruangan
Accept: application/json
```

Response after successfully get all ruangan.

Status Code: `200 OK`
```json
{
  "message": "Ruangans retrieved",
  "data": [
    {
      "id": "14008517-e6da-4211-beb0-8d058af0bcd7",
      "name": "Ruang Tamu",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "36e81977-8775-4e2a-bb30-04969ee7b7be",
      "name": "Kolam Renang",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "5a83db6e-fbbf-4622-9676-187fc1187c47",
      "name": "Ruang Mandi",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "5aa84164-9e2d-404f-b685-b57e042c883c",
      "name": "Garasi",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "6adb5370-4824-4877-87f1-e742114ebc4e",
      "name": "Ruang Parkir",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "6b574201-fae1-4b2a-ade3-e33ce840f147",
      "name": "Ruang Keluarga",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "6bf79242-41ce-4247-8c4a-c239e9a3c9d8",
      "name": "Gudang",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "7ffeb9c9-33fd-4323-b735-4af562ab727d",
      "name": "Ruang Jemur",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "838a6553-b6a7-4d39-8462-5606406870c6",
      "name": "Ruang Kerja",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "94d76e4b-f6d8-4dc7-8451-e35ddd518486",
      "name": "Ruang Tidur",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "a79e8c64-a4a8-4cd2-81d1-5f916df8f935",
      "name": "Ruang Dapur",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "bf6dae4f-1584-4f9e-9ae2-4a55b0c1e00b",
      "name": "Ruang Fitness",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "c39f8f73-dcbb-4d9a-a8b2-70d0f9a0e5e9",
      "name": "Taman",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "c66ec70d-4ce7-4c2c-b529-f371c19e62a9",
      "name": "Ruang Musik",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "e494df55-c26b-4dc9-91d5-2ce7c31af1c3",
      "name": "Ruang Belajar",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "eb87c9dd-06c7-4388-9237-69c669975379",
      "name": "Ruang Makan",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    },
    {
      "id": "eccfe996-8a0f-452e-b7f5-d265769acb36",
      "name": "Ruang Cuci",
      "user_id": null,
      "created_at": "2024-04-26T17:40:31.000Z",
      "updated_at": "2024-04-26T17:40:31.000Z"
    }
  ]
}
```

### Pengaturan Awal

To complete user data for daily electricity use

#### Create pengaturan awal

Request body

```http
POST {{BASE_URL}}/informasi-listrik
Authorization: Bearer {{TOKEN}}
Accept: application/json
Content-Type: application/json

{
  "daya": "contoh_daya",
  "jenis_pembayaran": "contoh_jenis_pembayaran",
  "perangkat_listrik": [
    {
      "jenis_perangkat": "contoh_jenis_perangkat_1",
      "jenis_inverter": "contoh_jenis_inverter_1",
      "jumlah": 2,
      "daya_listrik": 100,
      "lama_pemakaian": 5
    },
    {
      "jenis_perangkat": "contoh_jenis_perangkat_2",
      "jenis_inverter": "contoh_jenis_inverter_2",
      "jumlah": 3,
      "daya_listrik": 200,
      "lama_pemakaian": 6
    }
  ]
}
```

Example Response

Status Code: `201 Created`
```json
{
  "message": "Informasi listrik created",
  "data": {
    "informasiListrik": {
      "id": "0daa6f2e-4c31-4a9c-8f70-f316617549d3",
      "daya": "contoh_daya",
      "jenis_pembayaran": "contoh_jenis_pembayaran",
      "user_id": "052afb61-e219-4dd9-9a9a-1f1d7a12485e",
      "updated_at": "2024-04-26T23:38:14.804Z",
      "created_at": "2024-04-26T23:38:14.804Z"
    },
    "perangkatListrik": [
      {
        "id": "e6020a03-66e3-483c-9923-d206ad34f836",
        "jenis_perangkat": "contoh_jenis_perangkat_1",
        "jenis_inverter": "contoh_jenis_inverter_1",
        "jumlah": 2,
        "daya_listrik": 100,
        "lama_pemakaian": 5,
        "user_id": "052afb61-e219-4dd9-9a9a-1f1d7a12485e",
        "created_at": "2024-04-26T23:38:14.816Z",
        "updated_at": "2024-04-26T23:38:14.816Z"
      },
      {
        "id": "80c6563e-1ce6-4af9-9b68-2f517ed58665",
        "jenis_perangkat": "contoh_jenis_perangkat_2",
        "jenis_inverter": "contoh_jenis_inverter_2",
        "jumlah": 3,
        "daya_listrik": 200,
        "lama_pemakaian": 6,
        "user_id": "052afb61-e219-4dd9-9a9a-1f1d7a12485e",
        "created_at": "2024-04-26T23:38:14.816Z",
        "updated_at": "2024-04-26T23:38:14.816Z"
      }
    ]
  }
}
```

