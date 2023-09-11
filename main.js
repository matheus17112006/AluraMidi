function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas=document.querySelectorAll(".tecla")

//para
for(let contador=0;contador<listaDeTeclas.lenght;contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    const idAudio="#som_${instrumento}";//templante string

    tecla.onclick=function()[
        tocaSom(idAudio);
    ]
}