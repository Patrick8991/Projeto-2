
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBeO9so3DUY3XDKc2ubxs1nD7acmmMyI4A",
    authDomain: "testeb-13d1e.firebaseapp.com",
    databaseURL: "https://testeb-13d1e.firebaseio.com",
    storageBucket: "testeb-13d1e.appspot.com",
    messagingSenderId: "63738426691"
  };
  firebase.initializeApp(config);
  
  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}

