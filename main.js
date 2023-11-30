// Función personalizada para realizar la llamada a la API con async/await
async function myFetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Función para mostrar los usuarios en una tabla
  async function showUsers() {
    // Obtener los datos de los usuarios
    const users = await myFetch('https://jsonplaceholder.typicode.com/users');
  
    // Crear la tabla
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-centered');
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();
    const idHeader = headerRow.insertCell();
    const nameHeader = headerRow.insertCell();
    const cityHeader = headerRow.insertCell();
    idHeader.textContent = 'ID';
    nameHeader.textContent = 'Nombre';
    cityHeader.textContent = 'Ciudad';
  
    // Agregar los usuarios a la tabla
    users.forEach(user => {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const cityCell = row.insertCell();
      idCell.textContent = user.id;
      nameCell.textContent = user.name;
      cityCell.textContent = user.address.city;
    });
  
    // Agregar la tabla al documento
    document.getElementById('usersTable').appendChild(table);
  }
  
  // Función para solicitar los datos de un solo usuario por su ID
  async function getUserDataById() {
    const userId = document.getElementById('userId').value;
  
    // Obtener los datos del usuario solicitado
    const user = await myFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if (user) {
      // Mostrar el nombre y el teléfono del usuario solicitado
      const userDataContainer = document.getElementById('userData');
      userDataContainer.textContent = `Nombre: ${user.name}, Teléfono: ${user.phone}`;
    }
  }
  
  // Llamar a la función para mostrar los usuarios
  showUsers();
  