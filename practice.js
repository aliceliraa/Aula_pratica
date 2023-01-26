
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
   apiKey: "AIzaSyBc8rdHg4pa_2azCz27XzrvoL0rJyvYAWo",
   authDomain: "aula-pratica-be373.firebaseapp.com",
   databaseURL: "https://aula-pratica-be373-default-rtdb.firebaseio.com",
   projectId: "aula-pratica-be373",
   storageBucket: "aula-pratica-be373.appspot.com",
   messagingSenderId: "799937203406",
   appId: "1:799937203406:web:10970f5ebbfa6378ca149f"
 };


// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuá

function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
   });
}