// SLIDES PÁGINA PRINCIPAL

let slides = document.querySelectorAll(".slide_container");
let index = 0;

function next(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev(){
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

setInterval(next, 5000);

// VALIDAÇÃO FORMULARIO
function validar(){

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var msg = document.getElementById("msg");

    if (nome.value == ""){
        alert("Nome não informado");
        
    nome.focus();
    return;
    }
    if (email.value == ""){
        alert("E-mail não informado");
        email.focus();
        return;
    }
    if (telefone.value == ""){
        alert("Telefone não informado");
        telefone.focus();
        return;
    }
    if (msg.value == ""){
        alert("Deixe sua mensagem!!");
        msg.focus();
        return;
    }
    alert("Mensagem Enviada");
}
//LOGIN
