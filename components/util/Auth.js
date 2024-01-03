import axios from "axios";

const API_KEY = "AIzaSyBdFYdkNQEYvyaQkAqkLxzc8cwEfhKzNQw ";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
