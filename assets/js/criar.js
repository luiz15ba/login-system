class usuario {
    constructor(nome,usuario,email,senha) {
        this.nome = nome;
        this.usuario = usuario;
        this.email = email;
        this.senha = senha;
    }
}

let nomeUser = document.querySelector('.nome');
let User = document.querySelector('.usuario');
let emailUser = document.querySelector('.email');
let senhaUser = document.querySelector('.senha');

document.querySelector('button').addEventListener('click',criarNovo)

function criarNovo() {
    let user = {
        nome: nomeUser.value,
        usuario: User.value,
        email: emailUser.value,
        senha: senhaUser.value
    };

    let jaExiste = false;
    
    let usersExistente = localStorage.getItem('users');
    let userArray = [];
    
    if (usersExistente) {
        userArray = JSON.parse(usersExistente);
    }

    userArray.forEach((i) => {
        if (i.usuario === user.usuario || i.email === user.email) {
            jaExiste = true;
        }
    })

    if (jaExiste === false) {
        userArray.push(user);
        localStorage.setItem('users',JSON.stringify(userArray));
        window.location = '../../index.html';
    } else {
        alert('Usuario já existe')
    }
    
}