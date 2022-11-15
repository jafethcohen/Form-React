const form= document.querySelector('.forms');
const lleno = [];
var mayores;

mayores = 0;
cntsexto = 0;
cntseptimo = 0;
cntoctavo = 0;
cntnoveno = 0;
cntdecimo = 0;
cntonce = 0;
cntm = 0;
cntf= 0; 
cntpv= 0;
cntplaya= 0;
cntmalambo= 0;
cntbarranquilla= 0;
cntgalapa = 0;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("res_mayores").innerHTML = "Mayores de edad";
    document.getElementById("ppcurso").innerHTML = "Personas por curso "
    document.getElementById("pgenero").innerHTML = "Personas por genero ";
    document.getElementById("pvulnerable").innerHTML = "Personas vulnerables";
    document.getElementById("p_ubicacion").innerHTML = "Personas por ubicacion"
     }
     function mostrar_mayores() {
        Swal.fire({
            title: "Mayores de edad",
            text: "Personas mayores de edad: " + mayores,

        })
        
    }
    function mostrar_por_curso(){
        Swal.fire({
            title: "Curso",
            html : "Sexto: " + cntsexto + "<br> " + "Septimo: " + cntseptimo + "<br>" + "Octavo: " + cntoctavo + "<br>" + "Noveno : " + cntnoveno +  "<br>" + "Decimo: " + cntdecimo  +  "<br>" + "Undecimo: " + cntonce  ,
 
        })

    }
    function mps() {
        Swal.fire({
            title: "Genero",
            html: "Masculino : " + cntm  + "<br>"  + "Femenino: " + cntf ,
        })

    }
    function mostrar_pvulnerable(){
        Swal.fire({
            title: "Poblacion Vulnerable",
            text: "Poblacion vulnerable : " + cntpv  ,
        })
    }
    function mostrar_ubicacion(){
        Swal.fire({
            title: "Personas Por Ubicacion",
            html: "La playa : " + cntplaya + "<br>" + "Malambo: " + cntmalambo + "<br>" + "Barranaquilla: " + cntbarranquilla + "<br>" +"Galapa: " + cntgalapa , 
        })
    }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function show(a, a2, a3=null) {
    let timerInterval;
        Swal.fire({
            title: a3,
            text: a,
            icon: a2,
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
            },
            willClose: () => {
            clearInterval(timerInterval)
            }
        }) 
    }

const validarFormulario = (e) =>{
    e.preventDefault();


    const nombre = document.querySelector('#Nombre').value;
    const apellido = document.querySelector('#Apellidos').value;
    const curso = document.querySelector('#curso').value;
    const edad = document.querySelector('#edad').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    if (sexo == null) {
        sexo = "";
    } else {
        sexo = sexo.value;
    }
    const estado = document.querySelector('#Estado_Civil').value;
    var pv = document.querySelector('input[name="pv"]:checked');
    if (pv == null) {
        pv = "";
    } else {
        pv = pv.value;
    }
    const ubicacion = document.querySelector('#ubicacion').value;

    if([nombre, apellido, curso, edad, sexo, estado, pv, ubicacion].includes("")){
        show("todos los campos deben estar completos","error","error");
        return;
    }

    // Paso la validacion de la
    show("Datos guardados","success", "Bien");

    const datos = {
        nombre,
        apellido,
        curso,
        edad,
        sexo,
        estado,
        pv,
        ubicacion
    };

    form.reset();
    lleno.push(datos);


    console.table(lleno);
    if (edad >= 18){
        mayores = mayores + 1

    }
    if (curso == "Sexto"){
        cntsexto = cntsexto + 1 
        }
    if (curso == "Septimo"){
        cntseptimo = cntseptimo +1
    }
    if (curso == "Octavo"){
        cntoctavo = cntoctavo +1
    }
    if (curso == "Noveno"){
        cntnoveno = cntnoveno +1
    }
    if (curso == "Decimo"){
        cntdecimo = cntdecimo +1
    }
    if (curso== "Undecimo"){
        cntonce = cntonce + 1
    }
    if (sexo == "masculino"){
        cntm = cntm +1
    }
    if (sexo == "femenino"){
        cntf = cntf+1
    }
    if (pv=="si"){
        cntpv = cntpv + 1
    }
    if (ubicacion == "La playa"){
        cntplaya = cntplaya + 1
    }
    if (ubicacion == "Malambo" ){
        cntmalambo = cntmalambo+ 1
    }
    if (ubicacion == "Barranquilla"){
        cntbarranquilla = cntbarranquilla + 1
    }
    if (ubicacion == "Galapa"){
        cntgalapa = cntgalapa + 1
    }
};

// Bloq Prgrama Principal
// Escuchador de eventos
form.addEventListener("submit", validarFormulario);

