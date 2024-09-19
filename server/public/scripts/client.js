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

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
