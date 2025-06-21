// Get users from localStorage or initialize empty array HI I AM MOIN

let users = JSON.parse(localStorage.getItem('users')) || [];



// Handle form submission

const userForm = document.getElementById('userForm');

if (userForm) {

  userForm.addEventListener('submit', function(e) {

    e.preventDefault();

    

    // Get form values

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const userId = document.getElementById('userId').value;

    

    // Create user object

    const user = {

      name: name,

      email: email,

      id: userId

    };

    

    // Add to users array

    users.push(user);

    

    // Save to localStorage

    localStorage.setItem('users', JSON.stringify(users));

    

    // Clear form

    userForm.reset();

    

    // Redirect to users page

    window.location.href = 'users.html';

  });

}



// Display users in table

const userTableBody = document.getElementById('userTableBody');

if (userTableBody) {

  // Clear existing table content

  userTableBody.innerHTML = '';

  

  // Add each user to the table

  users.forEach(user => {

    const row = document.createElement('tr');

    row.innerHTML = `

      <td>${user.name}</td>

      <td>${user.email}</td>

      <td>${user.id}</td>

    `;

    userTableBody.appendChild(row);

  });

}
