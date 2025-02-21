// const API_URL = "https://jsonplaceholder.typicode.com/";
// const TABLE_ROW = document.getElementById("tableBody");

// let deletingId = null;
// const saveDeleteId = (deleteId) => {
//   deletingId = deleteId;
// };
// const handleDelete = () => {
//   deleteUser(deletingId);
//   getUsers();
// };

// // GET API HITS //
// const getUsers = async () => {
//   try {
//     const response = await fetch(`${API_URL}/users`);
//     if (!response.ok) {
//       throw new Error("NOT FOUND");
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (error) {
//     console.log(error, "ERROR FRO M CATCH");
//   }
// };
// // DELETE API HITS //
// const deleteUser = async (deleteId) => {
//   try {
//     const response = await fetch(`${API_URL}/users/1`, {
//       method: "DELETE",
//     });
//     console.log(response.status);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // GET API HANDLING
// getUsers().then((data) => {
//   data.forEach((singleUserData) => {
//     const tableRow = `<tr>
//                             <td>${singleUserData.id}</td>
//                             <td>${singleUserData.name}</td>
//                             <td>${singleUserData.email}</td>
//                             <td>${singleUserData.address.suite}, ${singleUserData.address.city}, ${singleUserData.address.street}, ${singleUserData.address.zipcode}</td>
//                             <td>${singleUserData.phone}</td>
//                             <td>${singleUserData.company.name}</td>
//                             <td>${singleUserData.website}</td>
//                             <td>
//                                 <a href="#editEmployeeModal" data-backdrop="static" data-keyboard="false" class="edit" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
//                                 <a href="#deleteEmployeeModal" data-backdrop="static" data-keyboard="false" class="delete" data-toggle="modal" onclick=saveDeleteId(${singleUserData.id})><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
//                             </td>
//                         </tr>`;
//     TABLE_ROW.innerHTML += tableRow;
//   });
// });

// console.log(getUsers());

fetch("https://crudcrud.com/api/c10102ddc5044612a3b9b217cc3cf20f", {
  mode: "no-cors",
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    name: "sk sohail",
    body: "fat",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
