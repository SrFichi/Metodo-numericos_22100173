
var MiEa = 0.0;
var miEr = 0.0;
var MiEp = 0.0;
var Imagen = document.querySelector(".Main_Principal_Section2_Principal_img_img");
var ElH3 = document.querySelector(".Main_Principal_Section2_Principal_h3p_h3");
var NewRespuest = document.querySelector(".Main_Principal_Section2_Principal_h3p_p");

function CalcularValorEa(ValorApro,ValorExacto)
{
    var Result = Math.abs(ValorApro-ValorExacto);
    return Result;
}
function CalcularValorEr(errorApro,ValorExacto)
{
    var Result = errorApro/ValorExacto;
    return Result;
}
function CalcularValorEp(errorRela)
{
    var Result = errorRela*100;
    return Result;
}
function DarResultado()
{
    if (!DetectarVacios()) 
    {
        OcultarPresentacion();
        var miVa = RecuperarVa();
        var miVe = RecuperarVe();
        MiEa = CalcularValorEa(miVa,miVe);
        miEr = CalcularValorEr(MiEa,miVe);
        MiEp = CalcularValorEp(miEr);
        DarNuevoTexto(MiEa,miEr,MiEp);
    } 
    else 
    {
        
    }
    
}
function RecuperarVa()
{
    var ValorVa  = document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input").value;
    return ValorVa;
   /* var miVa =  document.getElementById("VPB").value;
    var miVe =  document.getElementById("VLR").value;*/
}
function RecuperarVe()
{
    var ValorVe = document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input2").value;
    return ValorVe;
   /* var miVa =  document.getElementById("VPB").value;
    var miVe =  document.getElementById("VLR").value;*/
}
function DarNuevoTexto(ErrorA,ErrorR,ErrorP)
{
    
    NewRespuest.textContent = "El error absoluto es de: " + ErrorA + ".\nEl error relativo es de: " + ErrorR + ".\nEl error porcentual relativo es de: " + ErrorP + "%";
}
function OcultarPresentacion()
{
    Imagen.classList.remove("Aparecer");
    ElH3.classList.remove("Aparecer");
    Imagen.classList.add("Ocultar");
    ElH3.classList.add("Ocultar");
}
function AparecerPresentacion()
{
    Imagen.classList.remove("Ocultar");
    ElH3.classList.remove("Ocultar");
    Imagen.classList.add("Aparecer");
    ElH3.classList.add("Aparecer");
    NewRespuest.textContent = "Ingrese un valor para que se vea reflejado";
}
function ClearAll()
{
    document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input").value = "";
    document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input2").value = "";
    AparecerPresentacion();
}
function DetectarVacios()
{
    if (document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input").value == "" || document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input2").value == "") 
    {
        alert("No deje cuadros vacios!");
        return true;
    }
    if (document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input").value == 0 || document.querySelector(".Main_Principal_Section1_principal_Ingreso_Input2").value == 0) 
        {
            alert("Por favor ingrese un valor minimo de 0.1!");
            return true;
        }
        else
        {
            return false;
        }
}