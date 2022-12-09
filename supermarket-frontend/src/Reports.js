import React, { useState } from 'react';
import jsPDF from 'jspdf'

const PdfGenerator = (props) => {
  // console.log(props.data)
  const [pdfData, setPdfData] = useState();
  // setPdfData(props.data);

  const jsPdfGenerator = () => {
    var doc = new jsPDF('p','pt');

    for(let i=1; i<=props.data.length;i++){
      doc.text(i*10,i*20, JSON.stringify(props.data[i-1]));
    }
    doc.save('generated.pdf');
  }

  return (
    <button onClick={jsPdfGenerator}>Generate PDF</button>
  );
}

export default PdfGenerator;
