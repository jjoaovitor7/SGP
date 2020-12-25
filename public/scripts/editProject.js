const config = {
  apiKey: env.APIKEY,
  authDomain: env.AUTHDOMAIN,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID,
};

const app = firebase.initializeApp(config);
const database = firebase.firestore(app);

document.getElementById("btn-nome").addEventListener("click", function () {
  document.getElementById("nomeProjetoEdit").removeAttribute("hidden");
  document.getElementById("descProjetoEdit").setAttribute("hidden", true);
});
document.getElementById("btn-desc").addEventListener("click", function () {
  document.getElementById("descProjetoEdit").removeAttribute("hidden");
  document.getElementById("nomeProjetoEdit").setAttribute("hidden", true);
});

document.getElementById("btn-edit").addEventListener("click", function () {
  let auxNome = document.getElementById("nomeProjetoEdit");
  if (
    window.getComputedStyle(auxNome).visibility !== "hidden" &&
    auxNome.value != ""
  ) {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      database
        .collection("Projetos")
        .doc(document.getElementById("nomeProjeto").value)
        .get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
            database
              .collection("Projetos")
              .doc(document.getElementById("nomeProjeto").value)
              .update({
                nome: auxNome.value,
              })
              .then(() => {
                M.toast({
                  html: "Projeto editado!",
                  displayLength: 6000,
                });
              })
              .catch((error) => {
                console.error(error);
                M.toast({
                  html: "Não conseguimos atualizar o projeto =/",
                  displayLength: 6000,
                });
              });
          } else {
            M.toast({
              html: "Projeto não existe!",
              displayLength: 6000,
            });
          }
        });
    });
  }

  let auxDesc = document.getElementById("descProjetoEdit");
  if (
    window.getComputedStyle(auxDesc).visibility !== "hidden" &&
    auxDesc.value != ""
  ) {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      database
        .collection("Projetos")
        .doc(document.getElementById("nomeProjeto").value)
        .update({
          descricao: auxDesc.value,
        })
        .then(() => {
          M.toast({
            html: "Projeto editado!",
            displayLength: 6000,
          });
        })
        .catch((error) => {
          console.error(error);
          M.toast({
            html: "Não conseguimos atualizar o projeto =/",
            displayLength: 6000,
          });
        });
    });
  }
});
