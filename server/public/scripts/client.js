console.log('js');

function getKoalas() {
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log('getKoalas() was called')
    renderKoala(response.data)
  }).catch(function (error) {
    console.log('error in GET', error);
  });
}

function saveKoala(event) {
  console.log('in saveKoala');
  // axios call to server to get koalas

  event.preventDefault();
  // Create our request body
  let koalaObject = {
    name: document.querySelector('#nameIn').value,
    favorite_color: document.querySelector('#colorIn').value,
    age: document.querySelector('#ageIn').value,
    ready_to_transfer: document.querySelector('#readyForTransferIn').value,
    notes: document.querySelector('#notesIn').value
  }
  // Send the new song to the server
  axios.post('/koalas', koalaObject).then((response) => {
    getKoalas()
  }).catch((error) => {
    console.log('Error', error);
    alert('Something went wrong');
  });
}

function updateKoala(koalaId) {

  axios.put(`/koalas/${koalaId}`).then(response => {
    getKoalas();

  }).catch((error) => {
    console.log('Error', error);
    alert('Something went wrong');
  });
}

getKoalas();


function renderKoala(koalaList) {
  let koalaTableBody = document.querySelector("#viewKoalas")
  koalaTableBody.innerHTML = '';
  // Loop over each song and append data to the DOM
  for (let koala of koalaList) {

    if (koala.ready_to_transfer === false) {
      koalaTableBody.innerHTML += `
    <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td> ${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
         <td>
            <button onClick="updateKoala(${koala.id})">Ready for Transfer</button>
        </td>
        <td>
            <button type="button" class="deleteButton" onClick="deleteKoala(${koala.id})">Delete</button>
        </td>
    </tr>
`;

    } else {
      koalaTableBody.innerHTML += `
    <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td> ${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button style = "visibility: hidden"></button></td>
        <td>
            <button type="button" class="deleteButton" onClick="deleteKoala(${koala.id})">Delete</button>
        </td>
    </tr>
`;
    }
  }
}






















function deleteKoala(koalaId) {
  Swal.fire({
    title: 'Are you sure you want to delete this poor koala?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', '', 'success')
      axios.delete(`/koalas/${koalaId}`).then((response) => {
        getKoalas();
      }).catch((error) => {
        console.log('Error', error);
        alert('Something went wrong');
      });
    } else if (result.isDenied) {
    }
  })
}