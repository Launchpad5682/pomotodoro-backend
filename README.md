<p align="center"><img src="https://yifgzyyqlpgydlzwcsaj.supabase.co/storage/v1/object/public/pomotodoro/pomotodoro.png" height="80"/></p>

<h1 align="center">Pomotodoro REST API</h1>

<h2 align="center"> A REST api for Pomotodoro app having authentication using JWT, CRUD functionalities.</h2>

<p align="center">
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
</p>

```

```

# Documentation

## Signup User

### Request

`POST` `https://localhost:3000/v1/signup` <br>
Body:

```
{
	"username": "launchpad96",
	"email": "launchpad96@gmail.com",
	"password": "qwerty1234"
}
```

## Login User

### Request

`POST` `http://localhost:3000/v1/login` <br>
Body:

```
{
    "email": "launchpad5682@gmail.com",
    "password": "qwerty1234"
}
```

### Response <br>

```
{
	"message": "Successfully authenticated",
	"body": {
		"userData": {
			"_id": "62f0b70da479bcb412945aaf",
			"username": "launchpad5682"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmYwYjcwZGE0NzliY2I0MTI5NDVhYWYiLCJpYXQiOjE2NjAxNTAzMTQsImV4cCI6MTY2MDIzNjcxNH0.phHbB7zwEBoBc2ut4TaxTJ4ziHmaLtB6nOCayeDLqXM"
	}
}
```

## Get All Todos

### Request

`GET` `http://localhost:3000/v1/todos/:username`
Body:

```

```

### Response

```

```

## Add Todo

### Request

`POST` `http://localhost:3000/v1/todo`
Body:

```

```

### Response

```

```

## Update Todo

### Request

`PUT` `http://localhost:3000/v1/todo`
Body:

```

```

### Response

```

```

## Delete Todo

### Request

`POST` `http://localhost:3000/v1/todo`
Body:

```

```

### Response

```

```

## Development Mode

- Clone the project.
- Use `npm install` to install all the required packages.
- Start project in `dev mode` with live server and hot-reload using `npm run dev`.

## Production mode

- Add the github link to any service provider like Heroku or while deploying using bare metal like AWS EC2 then add the following environment variables to the project.

```
JWT_SECRET="add secret here"
JWT_EXPIRES_IN="add expiration here"
MONGODB_URI="add mongoose uri here"
```
