/**
 * conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiarunidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - el valor de los inputs de metros, yardas, pies o pulgadas
 * @return 
 */

function cambiarunidades(id, value) {
    if(isNaN(value)){
        alert("se ingreso un valor invalido");
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }else if(id=="metro") {
        document.lasunidades.unid_pulgada.value = 39.3701*value;
        document.lasunidades.unid_pie.value = 3.28084*value;
        document.lasunidades.unid_yarda.value = 1.09361*value;
    }else if(id=="pulgada") {
        document.lasunidades.unid_pulgada.value = 0.0254*value;
        document.lasunidades.unid_pie.value = 0.083333*value;
        document.lasunidades.unid_yarda.value = 0.0277778*value;
    }else if(id=="pie") {
        document.lasunidades.unid_pulgada.value = 0.3048*value;
        document.lasunidades.unid_pie.value = 12*value;
        document.lasunidades.unid_yarda.value = 0.33333*value;
    }
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados") {
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}