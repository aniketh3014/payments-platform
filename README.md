# Payment App

This is a payment app with a backend built with Node.js, Express, and MongoDB, and a frontend built with React.

## Features

- User Authentication: Users can sign up and log in to the app. Authentication is handled using JSON Web Tokens (JWT).
- Account Management: Users can view their account balance.
- Money Transfer: Users can transfer money to other users.

## API Endpoints

- `POST /api/v1/user/signup`: Sign up a new user.
- `POST /api/v1/user/login`: Log in an existing user.
- `POST /api/v1/user/verify`: Verify a user's JWT.
- `POST /api/v1/account/transfer`: Transfer money from one user to another.

## How to Run

1. Clone the repository.
2. Install backend dependencies with `npm install`.
3. Navigate to the frontend directory and install dependencies with `npm install`.
4. Start the backend server with `node index.js`.
5. In a separate terminal, start the frontend with `npm run dev`.
6. The app will be available at `http://localhost:5137/` (or whatever port your React app runs on).

## Future Improvements

- Add more detailed error handling.
- Implement more features like transaction history, account settings, etc.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
