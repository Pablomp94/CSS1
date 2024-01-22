

window.addEventListener("load", function () {



    let barra = document.getElementsByClassName("progress-bar")[0];

    let tiempo = prompt("Introduce el tiempo a pasar para 1 porcentaje");

    async function cuenta(){

        barra.classList.add("progress-bar-striped");
        
        
        for(let i = 0; i <= 100; i ++){

            let promesa1 = new Promise((resolver) => {
                setTimeout(() => {resolver (i)},tiempo);
            })

            barra.style.width = i + "%";
            barra.innerHTML = i + "%";    

            let mensaje1 = i;
    
            mensaje1 = await promesa1;
            console.log(mensaje1);
        }
        }

    cuenta();

    

    let rojo = document.getElementById("rojo");
    let azul = document.getElementById("azul");


    rojo.addEventListener("click", cambrojo);
    azul.addEventListener("click", cambazul);

    function cambrojo(){
        barra.classList.add("bg-danger");
    }

    function cambazul(){
        try{
            barra.classList.remove("bg-danger");
        }catch{
            alert("Ya está en azul");
        }
    }


});
