function clickCartao(){
 
    let gerar = Math.floor(Math.random() *9999) + 1000;

    console.log(gerar);

    return alert(`O seu cartão de acesso é: ${gerar}`);
}

const form = document.querySelector('.formulario');

form.addEventListener('click', function(evento){
    evento.this.disable = true

})




