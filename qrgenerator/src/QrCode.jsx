
export const QrCode = () => {
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        <img src="vite.svg" className="qr-code-image"  />
        <div>
            <label htmlFor="dataInput" className="input-label"> Data for QR Code: </label>
            <input type="text" id="dataInput" placeholder="Enter Data for QR Code" />

            <label htmlFor="sizeInput" className="input-label"> Image Size(e.g., 150): </label>
            <input type="text" id="sizeInput" placeholder="Enter Image Size " />

            <button className="generate-button">Generate QR Code</button>
            <button className="download-button">DOwnload QR Code</button>
        </div>
        <p className="footer">
            Designed by <a href="#">Krishnamoorthy Selvaraj</a>
        </p>
    </div>
  )
}
