
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCU3_gutYtNQsdXjAi8r_nAeTwTuYHoWA4",
    authDomain: "testea-9bd6b.firebaseapp.com",
    databaseURL: "https://testea-9bd6b.firebaseio.com",
    storageBucket: "testea-9bd6b.appspot.com",
    messagingSenderId: "311371820232"
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

