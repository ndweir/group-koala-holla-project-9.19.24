console.log( 'js' );

function getKoalas(){
      axios({
      method: 'GET',
      url: '/koalas'
    }).then(function(response) {
      console.log('getKoalas() was called')
    }).catch(function(error){
      console.log('error in GET', error);
    });
  }  

function saveKoala(event){
  console.log( 'in saveKoala' );
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

getKoalas();
