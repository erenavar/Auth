import axios from "axios";

const API_KEY = "AIzaSyBdFYdkNQEYvyaQkAqkLxzc8cwEfhKzNQw";

export async function createUser(email, password) {
  const response = await axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
    .catch((error) => console.log(error.response.request._response));
}
