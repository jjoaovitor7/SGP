const config = {
};

const app = firebase.initializeApp(config);
const database = firebase.firestore(app);

document.getElementById("btn-delete").addEventListener("click", function () {
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    database
      .collection("Usuarios")
      .doc(firebaseUser.uid)
      .collection("Projetos")
      .doc(document.getElementById("nomeProjeto").value)
      .delete();
  });
});