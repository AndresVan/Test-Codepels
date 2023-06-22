/* 
Project: Developer Technical test CODEPELS
Developed by: Andrés Vanegas
Date: 21/06/2023
*/

// -- Related  variables with DOM -- //
var title = document.querySelector("#title").value;
var description = document.querySelector("#description").value;
const framePdf = document.querySelector("#displayPdf");

var visible = false;                             // Flag variable (view pdf display)

// -- Function for refresh the page -- //
function refresh(){                             
    location.reload();
}

//-- Function to convert text to pdf -- //
function convertirAPdf(visible){
    
    window.jsPDF = window.jspdf.jsPDF;          //Allows to define jsPDF - Library's author fixed compatibility -

    var doc = new jsPDF('portrait');            //The object is instantiated, the parameter is portrait for orientation of the doc
    doc.text (title,100,20, align="center");    //The parameters are: text to convert and text position inside the pdf file (X and Y)

    // -- style for the pdf file -- //
    const docWidth = doc.internal.pageSize.getWidth();
    const splitDescription = doc.splitTextToSize(description, docWidth - 30);
    doc.text(splitDescription, 15, 40);

    if (visible == false){                      //Validation of pdf download and/or display
        doc.save(title+".pdf");
    }else{
        console.log('The pdf file was created');
        framePdf.src = doc.output('bloburl');   //Load the src field of frame from the "doc" object and "output" feature.
    }
    
}