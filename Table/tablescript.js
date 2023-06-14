var users = [
  {
    firstname: "Ram",
    lastname: "Kathmandu",
    email: "ram@gmail.com",
    dob: "2002-1-1",
    gender: "Male",
    language: "English",
  },
  {
    firstname: "Shyam",
    lastname: "Maharjan",
    email: "shyam@gmail.com",
    dob: "2002-8-1",
    gender: "Male",
    language: "Nepali",
  },
  {
    firstname: "Sita",
    lastname: "Shrestha",
    email: "sita@gmail.com",
    dob: "2000-8-2",
    gender: "Female",
    language: "Hindi",
  },
  {
    firstname: "Sanil",
    lastname: "Manandhar",
    email: "sanil@gmail.com",
    dob: "1998-1-1",
    gender: "Male",
    language: "English",
  },
];

function userTable() {
  const tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${user.firstname}</td>
          <td>${user.lastname}</td>
          <td>${user.email}</td>
          <td>${user.dob}</td>
          <td>${user.gender}</td>
          <td>${user.language}</td>
          <td>
            <div class="action-buttons">
              <button class="delete-button" onclick="deleteUser(${index})">
                <i class="fa fa-trash"></i>
              </button>
              <button class="edit-button" onclick="editUser(${index})">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        `;
    tbody.appendChild(row);
  });
}

let editUserIndex = -1;

function editUser(index) {
  const form = document.querySelector("#userForm");
  const addButton = document.querySelector("#addButton");

  editUserIndex = index;
  let user = users[index];

  form.firstname.value = user.firstname;
  form.lastname.value = user.lastname;
  form.email.value = user.email;
  form.dob.value = user.dob;
  form.gender.value = user.gender;
  form.language.value = user.language;

console.log("User to be edited:", user);

  addButton.innerHTML = "Update User";
  addButton.removeEventListener("click", addUser);
  addButton.addEventListener("click", updateUser);
}

//button change garna lai updateuser function
//copy of edit
function updateUser(event) {
  event.preventDefault();

  const form = document.querySelector("#userForm");
  const formData = new FormData(form);
  const updatedUser = {};

  for (let [key, value] of formData) {
    updatedUser[key] = value;

    
  }
 
  if (editUserIndex !== -1) {
    users[editUserIndex] = updatedUser;
    editUserIndex = -1;


  console.log("Updated User:", updatedUser);
    //if the data in the fields are updated then now the button is set to
    //the original state that is add user


    const addButton = document.querySelector("#addButton");
    addButton.innerHTML = "Add user";
    addButton.removeEventListener("click", updateUser);
    addButton.addEventListener("click", addUser);
  }

  form.reset();
  userTable();
}

function addUser(event) {
  event.preventDefault();

  const form = document.querySelector("#userForm");
  const formData = new FormData(form);
  const newUser = {};

  for (let [key, value] of formData) {
    newUser[key] = value;
  }

  if (editUserIndex !== -1) {
    users[editUserIndex] = newUser;
  } else {
    users.push(newUser);
  }
  form.reset();
  userTable();
}

function deleteUser(index) {
  users.splice(index, 1);
  userTable();
}

function searchUsers() {
  const searchInput = document
    .querySelector("#searchInput")
    .value.toLowerCase();
  const searchFields = [
    "firstname",
    "lastname",
    "email",
    "dob",
    "gender",
    "language",
  ];

  const filteredUsers = users.filter(function (user) {
    return searchFields.some(function (field) {
      return user[field].toLowerCase().includes(searchInput);
    });
  });

  const tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";

  if (filteredUsers.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="7">No users found</td>`;
    tbody.appendChild(emptyRow);
  } else {
    filteredUsers.forEach(function (user) {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            <td>${user.dob}</td>
            <td>${user.gender}</td>
            <td>${user.language}</td>
            <td>
              <button class="delete-button" onclick="deleteUser(${users.indexOf(
                user
              )})">
                <i class="fa fa-trash"></i>
              </button>
              <button class="edit-button" onclick="editUser(${users.indexOf(
                user
              )})">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </td>
          `;
      tbody.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    users.push(formData);
    localStorage.removeItem("formData");
  }

  userTable();
});

var userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", addUser);

var searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchUsers);



