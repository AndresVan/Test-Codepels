/* 
Project: Developer Technical test CODEPELS
Developed by: Andrés Vanegas
Date: 21/06/2023
*/

// -- Related  variables with DOM -- //
var title = document.querySelector("#title").value;
var description = document.querySelector("#description").value;
const framePdf = document.querySelector("#displayPdf");

var visible = false;      // Flag variable (view pdf display)

//-- 
function convertirAPdf(visible){

    window.jsPDF = window.jspdf.jsPDF; //Allows define jsPDF - Library's author fixed compatibility -

    var doc = new jsPDF('portrait');
    doc.text (title,100,20, align="center"); //Los parámetros indican: texto a convertir, y posición del texto en el pdf (X y Y)

    const docWidth = doc.internal.pageSize.getWidth();
    const splitDescription = doc.splitTextToSize(
        description,
        docWidth - 30
      );
      doc.text(splitDescription, 15, 40);

    if (visible == false){
    doc.save(title+".pdf");
    }else{
        console.log('The pdf file was created');
        framePdf.src = doc.output('bloburl');   //Carga la src a partir del objeto doc y su tipo output
    }
    
}