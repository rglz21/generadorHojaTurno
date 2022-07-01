var doc = new jsPDF();

const boton = document.querySelector("#generar");

boton.addEventListener("click", function(evento){
    
    let fecha  = new Date(document.querySelector("#fecha").value);
    fecha.setDate(fecha.getDate() + 1)
    let horaI  = document.querySelector("#horaI");
    let entrega  = document.querySelector("#entrega");
    let recibe = document.querySelector("#recibe");
    let procesosE = document.querySelector("#procesosE");
    let indicacionesE = document.querySelector("#indicacionesE");
    let comentariosE = document.querySelector("#comentariosE");

    // Creacion de Margenes
    doc.setLineWidth(0.5);
    // vertical inicio, horizontal inicio, vertical final,horizontal final
    //lineas Verticales
    doc.line(10, 8, 10, 290);
    doc.line(200, 8, 200, 290);
    //lineas Horizontales
    doc.line(10, 8, 200, 8);
    doc.line(10,290, 200, 290);

//Fecha
    doc.setFont("Arial");
    doc.setFontSize(12);
    doc.setFontType("bold");
    doc.text(20, 20, 'Fecha: ');
    doc.setFontType("normal");
    doc.text(35, 20, fecha.toLocaleString('en-GB').split(",")[0]);
//Hora
    doc.setFontType("bold");
    doc.text(20, 30, 'Hora Entrega: ');
    doc.setFontType("normal");
    doc.text(50, 30, horaI.value);
//Entrega
    doc.setFontType("bold");
    doc.text(20,40, 'Entrega: ');
    doc.setFontType("normal");
    doc.text(38,40,entrega.value);
//Recibe
    doc.setFontType("bold");
    doc.text(20,50, 'Recibe: ');
    doc.setFontType("normal");
    doc.text(37,50,recibe.value);

    doc.setFontType("bold");
    doc.text(20,70, 'A) Procesos en ejecucion: ');
    doc.setFontType("normal");
    doc.text(20,80,procesosE.value);

    doc.setFontType("bold");
    doc.text(20,120, 'B) Indicaciones especiales: ');
    doc.setFontType("normal");
    doc.text(20,130,indicacionesE.value);

    doc.setFontType("bold");
    doc.text(20,170, 'C) Cometarios especiales: ');
    doc.setFontType("normal");
    doc.text(20,180,comentariosE.value);

   
    doc.save(`Hoja_de_Turno_${fecha.toLocaleString('en-GB').split(",")[0]}_${horaI.value}.pdf`);
  
});




