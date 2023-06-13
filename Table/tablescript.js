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
    //create a table row
    const row = document.createElement("tr");
    // fetching the above users val in table
    row.innerHTML = `
    
      <td>${user.firstname}</td>
      <td>${user.lastname}</td>
      <td>${user.email}</td>
      <td>${user.dob}</td>
      <td>${user.gender}</td>
      <td>${user.language}</td>
      <td>
      <button class="delete-button" onclick="deleteUser(${index})"><i class="fa fa-trash"></i></button>
    
      </td>
    `;
    tbody.appendChild(row);
  });
}

function addUser(event) {
  event.preventDefault();

  let form = document.querySelector("#userForm");
  let formData = new FormData(form);
  const newUser = {};
  // try with adding other arguments
  for (let [key, value] of formData) {
    newUser[key] = value;
  }

  users.push(newUser);

  document.querySelector("#userForm").reset();
  userTable();
}

function deleteUser(index) {
  users.splice(index, 1);
  userTable();
}

function searchUsers() {
  var searchInput = document.querySelector("#searchInput").value.toLowerCase();

  var searchFields = [
    "firstname",
    "lastname",
    "email",
    "dob",
    "gender",
    "language",
  ];

  var filteredUsers = users.filter(function (user) {
    return searchFields.some(function (field) {
      return user[field].toLowerCase().includes(searchInput);
    });
  });

  var tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";
  //if-else to display no users found if the searchbar doesnot match any users
  if (filteredUsers.length === 0) {
    const emptyusers = document.createElement("tr");
    emptyusers.innerHTML = `<td colspan="7">No users found</td>`;
    tbody.appendChild(emptyusers);
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
        <button class ="delete-button" onclick="deleteUser(${users.indexOf(
          user
        )})"><i class="fa fa-trash"></i></button>
          
        </td>
      `;
      tbody.appendChild(row);
    });
  }
}

//to get the form values from the form
document.addEventListener("DOMContentLoaded", function () {
  var formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    const tbody = document.querySelector("#users tbody");
    var row = tbody.insertRow();
    row.innerHTML = `
      <td>${formData.firstname}</td>
      <td>${formData.lastname}</td>
      <td>${formData.email}</td>
      <td>${formData.dob}</td>
      <td>${formData.gender}</td>
      <td>${formData.language}</td>
      <td>
        <button onclick="deleteUser(${users.indexOf(formData)})">Delete</button>
       
      </td>
      
    `;
  }

  localStorage.removeItem("formData");
});

var userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", addUser);

var searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", searchUsers);

userTable();
