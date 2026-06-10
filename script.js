
function mostrarMensagem(){
    alert(
        "O Agro Forte busca unir produtividade e preservação ambiental para garantir um futuro sustentável."
    );
}

function calcularCO2(){

    let arvores = document.getElementById("arvores").value;

    if(arvores <= 0){
        document.getElementById("resultado").innerHTML =
        "Digite uma quantidade válida.";
        return;
    }

    let co2 = arvores * 21;

    document.getElementById("resultado").innerHTML =
    `🌳 ${arvores} árvores podem absorver aproximadamente ${co2} kg de CO₂ por ano.`;
}
