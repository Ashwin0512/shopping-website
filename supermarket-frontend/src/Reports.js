import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf'
import axios from 'axios';

const PdfGenerator = (props) => {

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    loadOrderData()
  },[])

  const loadOrderData = async () => {
    const res = await axios.get("http://localhost:8080/orders")
    console.log(res.data)
    setOrderData(res.data)
  }

  const jsPdfGenerator = () => {
    var doc = new jsPDF('p','pt');

    for(let i=1; i<=orderData.length;i++){
      doc.text(10,i*20, JSON.stringify(orderData[i-1]));
    }
    doc.save('generated.pdf');
  }

  return (
    <button onClick={jsPdfGenerator}>Generate PDF</button>
  );
}

export default PdfGenerator;
