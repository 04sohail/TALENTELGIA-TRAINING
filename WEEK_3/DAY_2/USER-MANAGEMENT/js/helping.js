import {LOADING_SCREEN} from "../js/constants.js"
import {API_URL_USERS} from "../network/api.js"



// CRUD OPERATIONS //
// GETTING USERS FROM API //
const getUser = async () => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_response = await fetch(API_URL_USERS);
    if (API_response.ok) {
      LOADING_SCREEN.style.display = "none";
    }
    const users = await API_response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

// POSTING USER TO API //
const postUser = async (user) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(API_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};
// PUTTING USER TO API //
const putUser = async (user) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(`${API_URL_USERS}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};

// DELETING USER FROM API //
const deleteUser = async (id) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(`${API_URL_USERS}/${id}`, {
      method: "DELETE",
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};




export { getUser, postUser, putUser, deleteUser};
