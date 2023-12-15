// INICIO
let usersNoSistema = localStorage.getItem('users');

if (usersNoSistema) {
    let usersExistente = JSON.parse(usersNoSistema);

    users = users.concat(usersExistente)
}

let botaoLogin = document.querySelector('button');
let loginUser = document.querySelector('.user');
let loginSenha = document.querySelector('.password');
let mensagem = document.querySelector('.msg');
let criar = document.querySelector('.new--acount .criar');
let label = document.querySelectorAll('label');
let olho = document.querySelector('.olho');

// EVENTOS
botaoLogin.addEventListener('click', verificar);
criar.addEventListener('click', () => {
    window.location.href = './assets/html/create.html';
});

olho.addEventListener('click', () => {
    let tipoAtual = loginSenha.getAttribute('type');
    if (tipoAtual === 'password') {
        loginSenha.setAttribute('type','text');
    } else {
        loginSenha.setAttribute('type','password');
    }
})

// FUNCOES
function verificar() {
    let inputs = document.querySelectorAll('label input');

    let todosPreenchidos = true;

    for (let i =0; i < inputs.length; i++) {
        if (inputs[i].value !== '') {
            label[i].style.border = '1px solid #ccc';
            mensagem.innerHTML = '';
        } else {
            label[i].style.border = '1px solid red';
            todosPreenchidos = false;
        }
    }

    if (todosPreenchidos) {
        validarUser();
    } else {
        mensagem.innerHTML = 'Preencha todos os Campos';
    }
}

function validarUser() {
    let usuarioDigitado = loginUser.value;
    let senhaDigitada = loginSenha.value;
    let usuarioEncontrado = false;
    
    for (let i =0; i < users.length; i++) {
        if ((usuarioDigitado === users[i].usuario || usuarioDigitado === users[i].email) && senhaDigitada === users[i].senha) {
            usuarioEncontrado = true;
            redirect(users[i].nome)
            break;
        }    
    }

    if (!usuarioEncontrado) {
        mensagem.innerHTML = 'Não encontramos seus dados verifique e tente novamente';
    }
}

function redirect(usuarioAtual) {
    localStorage.setItem('usuario',JSON.stringify(usuarioAtual))
    window.location.href = './assets/html/pg.html';
}