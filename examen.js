let matris = [[],[],[],[],[],[]];
let nombreinput = document.getElementById("nombre");
let Matrinput = document.getElementById("Matr");
let Matinput = document.getElementById("Mat");
let Inginput = document.getElementById("Ing");
let Quiminput = document.getElementById("Quim");
let Bioinput = document.getElementById("Bio");
let G = document.getElementById("G")
let i = 0;
let imprimir = document.getElementById("A")
let promedioA ;
let estadoAlumnos;
let sumprom = 0;
let promG ;
let estadoG;


function Guardar(){
    matris [0][i] = Matrinput.value;
    matris [1][i] = nombreinput.value;
    matris [2][i] = parseFloat(Matinput.value);
    matris [3][i] = parseFloat(Inginput.value);
    matris [4][i] = parseFloat(Quiminput.value);
    matris [5][i] = parseFloat(Bioinput.value);
    console.log(matris[1][i])
    i++;
    Matrinput.value = "";
    nombreinput.value = "";
    Matinput.value = "";
    Inginput.value = "";
    Quiminput.value = "";
    Bioinput.value = "";    
}

function mostrar(){
    
    for (let index = 0; index < matris[1].length; index++) {
        promedioA = (matris [2][index] + matris[3][index] + matris[4][index] + matris[5][index]) / 4;
        sumprom += promedioA;
        if(promedioA < 7){
            estadoAlumnos = " reprobado.";
        } 
        else if (promedioA >=7 && promedioA < 8.5 ){
            estadoAlumnos = " aprobo de forma regular.";
        }
        else  {
            estadoAlumnos = " aprobo de buena forma. "
        }


        imprimir.innerHTML += " Nombre: "+ matris[1][index]+ " Matricula: "+ matris[0][index] + " promedio: " +promedioA + estadoAlumnos + "---- ";
         

        
    }
    promG = sumprom / matris[1].length;
    if(promG < 7){
        estadoG = " reprobo el grupo.";
    } 
    else if (promG >=7 && promG < 8.5 ){
        estadoG = " aprobo de forma regular el grupo.";
    }
    else  {
        estadoG = " aprobo de buena forma el grupo. "
    }
    G.innerHTML =" El promedio del grupo fue: " + promG + estadoG;
} 






