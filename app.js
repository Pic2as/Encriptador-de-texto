
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");

/* Boton Encriptar*/        
btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
        let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
        if(texto == ""){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" El Campo de Texto no Puede Estar Vacio";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else if(texto !== txt){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" No Debe Tener Acentos Ni Caracteres Especiales";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else if( texto !== texto.toLowerCase()){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" El Texto Debe Ser Todo en Minusculas";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else{
            texto = texto.replace(/e/mg,"enter");
            texto = texto.replace(/i/mg,"imes");
            texto = texto.replace(/o/mg,"ober");
            texto = texto.replace(/u/mg,"ufat");
            texto = texto.replace(/a/mg,"ai");

            respuesta.innerHTML = texto;
            btnCopiar.style.visibility = "inherit";
            contenido.remove();
            txtEncriptar.value = '';
        }
});

/*Boton Desencriptar*/
btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
        let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
        if(texto == ""){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" El Campo de Texto no Puede Estar Vacio";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else if(texto !== txt){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" No Debe Tener Acentos Ni Caracteres Especiales";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else if( texto !== texto.toLowerCase()){
            aviso.style.background ="#0A3871";
            aviso.style.color ="#FFFF";
            aviso.style.fontweight ="800";
            aviso.textContent =" El Texto Debe Ser Todo en Minusculas";

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }
        else{
            texto = texto.replace(/ai/mg,"a");
            texto = texto.replace(/enter/mg,"e");
            texto = texto.replace(/imes/mg,"i");
            texto = texto.replace(/ober/mg,"o");
            texto = texto.replace(/ufat/mg,"u");

            respuesta.innerHTML = texto;
            btnCopiar.style.visibility = "inherit";
            contenido.remove();
            txtEncriptar.value = '';
        }
});

/* Boton Copiar*/
    btnCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
    copiar ="";
});