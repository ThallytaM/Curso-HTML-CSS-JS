const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado("Peso inválido!", false);
        return
    }else if(!altura){
        setResultado("Altura inválida!", false);
        return
    }

    const imc = getImc(peso,altura);
    const nivel = getNivel(imc);

    setResultado(nivel,true);

    })
function getNivel(imc){
    if(imc<17) return "Muito abaixo do peso";

    if(imc<18.49) return "Abaixo do peso";
    if(imc<24.99) return "Peso normal";
    if(imc<29.99) return "Acima do peso";
    if(imc<34.99) return "Obesidade I";
    if(imc<39.99) return "Obesidade II (severa)";
    else return "Obesidade III (móbida)";

   
}    

function getImc(peso, altura){
    const imc = peso / altura **2
    return imc.toFixed(2);

}    

function setResultado(msg, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = document.createElement('p');
    p.innerHTML = msg;
    if(valido){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('paragrafo-bad');
    }
    resultado.appendChild(p);

}