# API Documentation

# Introduction

This API provides endpoints to interact with the Book Store. It is built using Node.js and Express.js, and it communicates with a MySQL database to perform CRUD operations on books.

# Base URL

The base URL for all API endpoints is: http://localhost/books

# Authentication

Authentication is not required for the endpoints in this API.

# Endpoints

1. Get Books
   Get a list of all books.

URL: /books
Method: GET
Query Parameters:
offset (optional): The number of books to skip before returning results. Default value is 0.
Response:
Status Code: 200 OK
Body: JSON array of book objects with the following properties:
id (integer): The unique ID of the book.
title (string): The title of the book.
price (number): The price of the book.
discount (string): discount on the book.
quantity (number): number of books available.

URL: /books
Method: GET
Response:
Status Code: 200 OK
Body: JSON array of books

[
{
"id": 1,
"title": "레이블라우스",
"discountRate": 10,
"price": 57600,
"quantity": null
},
{
"id": 2,
"title": "레이블라우스",
"discountRate": 10,
"price": 57600,
"quantity": null
},
]

## Error Responses

Status Code: 500 Internal Server Error
Body: JSON object with an error message
{
"error": "Internal Server Error"
}

Status Code: 404 Not Found
Body: JSON object with an error message
{
"error": "Books not found"
}

2. Buy Book
   Buy a book and add it to the user's collection.

URL: /books/:bookId/buy/:userId
Method: POST
Parameters:
bookId: ID of the book to buy (integer)
userId: ID of the user making the purchase (integer)
Response:
Status Code: 200 OK
Body: JSON object confirming the purchase

{
"success": true
}
Error Responses
Status Code: 400 Bad Request
Body: JSON object with an error message

{
"error": "Invalid request"
}
Status Code: 404 Not Found
Body: JSON object with an error message

{
"error": "Book not found"
}
Status Code: 500 Internal Server Error
Body: JSON object with an error message

{
"error": "Internal server error"
}

# Rate Limiting

The API does not have rate limiting, so you can make as many requests as needed.

# Error Handling

The API returns standard HTTP status codes for different types of errors. Please refer to the Error Responses section for more details.

# Versioning

The API is not versioned, and all endpoints are available under the base URL /api.

# Notes

1. The API interacts with a MySQL database to fetch and update book information.
2. The BooksService class handles the business logic and communicates with the BooksRepository class to perform database operations.

# Usage

1. To use the API, make HTTP requests to the appropriate endpoints using a tool like cURL or Postman. For example:
2. To get all books, send a GET request to /books.
3. To buy a book, send a POST request to /books/:bookId/buy/:userId, where :bookId is the ID of the book you want to buy, and :userId is the ID of the user making the purchase.
4. Always include the appropriate request headers and parameters when making requests to the API.
