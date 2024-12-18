import { useState } from "react";

export const QrCode = () => {
   const [img, setImg] = useState("");
   const [loading, setLoading] = useState(false);
   const [qrData, setQrData] = useState('https://www.google.com/');
   const [qrSize, setQrSize] = useState("150");

   async function generateQR() {
    setLoading(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
    }
    catch (error){
        console.log("Error generating QR code, error");
    }
    finally{
        setLoading(false);
    }
   }

   function downloadQR() {}
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
      { loading && <p>please wait ....</p> }
        { img && <img src= {img} className="qr-code-image" /> }
        <div>
            <label htmlFor="dataInput" className="input-label"> Data for QR Code: </label>
            <input type="text" value = {qrData} id="dataInput" placeholder="Enter Data for QR Code" onChange={(e) =>
                setQrData(e.target.value)
            } />

            <label htmlFor="sizeInput" className="input-label"> Image Size(e.g., 150): </label>
            <input type="text" value = {qrSize} id="sizeInput" placeholder="Enter Image Size "  onChange={(e) =>
                setQrSize(e.target.value)
            }/>

            <button className="generate-button" disabled = {loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button">DOwnload QR Code</button>
        </div>
        <p className="footer">
            Designed by <a href="#">Krishnamoorthy Selvaraj</a>
        </p>
    </div>
  )
}
