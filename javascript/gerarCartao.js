

function clickCartao(){
 
    var gerar = Math.floor(Math.random() *9999) + 1000;

    return alert(`O numero gerado foi: ${gerar}`);
}

var clicks = document.getElementById("gerarCartao");

clicks.addEventListener('click', event => {
    console.log(event.target);
    alert('O elemento clicado foi o ' + event.target.innerHTML);
})
