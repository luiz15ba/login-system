
let usuarioAtual = JSON.parse(localStorage.getItem('usuario'));

if (usuarioAtual) {
    let nome = document.querySelector('.nome');
    
    let atualUser = usuarioAtual;
    
    nome.innerHTML = atualUser;
} else {
    window.location = '../../index.html';
}

