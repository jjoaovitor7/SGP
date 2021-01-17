// ERROR
function showToastError() {
  M.toast({
    html: "Erro!",
    displayLength: 6000,
  });
}

// SIGNIN / SIGNOUT
function showToastLogout() {
  M.toast({
    html: "Deslogado!",
    displayLength: 6000,
  });
}

// USER
function showToastCreatedUser() {
  M.toast({ html: "Usuário cadastrado!", displayLength: 6000 });
}

function showToastEmailInUse() {
  M.toast({
    html: "Esse e-mail já está cadastrado no sistema.",
    displayLength: 6000,
  });
}

// PROJECT
function showToastCreatedProject() {
  M.toast({
    html: "Projeto cadastrado!",
    displayLength: 6000,
  });
}

function showToastProjectExists() {
  M.toast({
    html: "Já existe um projeto com esse nome!",
    displayLength: 6000,
  });
}

function showToastNameAndDescEmpty() {
  M.toast({
    html: "Os campos de nome e/ou descrição não podem ser vazio.",
    displayLength: 6000,
  });
}

function showToastDeletedProject() {
  M.toast({
    html: "Projeto deletado!",
    displayLength: 6000,
  });
}

function showToastProjectDontExists() {
  M.toast({
    html: "Projeto não existe!",
    displayLength: 6000,
  });
}

function showToastEditedProject() {
  M.toast({
    html: "Projeto editado!",
    displayLength: 6000,
  });
}

// TASK
function showToastCreatedTask() {
  M.toast({
    html: "Tarefa cadastrada!",
    displayLength: 6000,
  });
}