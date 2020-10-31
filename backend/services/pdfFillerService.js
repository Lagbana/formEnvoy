const { PDFDocument } = require("pdf-lib");
const path = require("path");


const pdfFillerService = async (data) => {
  const values = {
    first_name: data.firstName,
    last_name: data.lastName,
    age: String(data.age),
    job_title: data.jobTitle,
    address: data.address,
    city: data.city,
    country: data.country,
    phone_number: data.phoneNumber,
    email: data.email,
  };
  
  const sourceFile = path.join(__dirname, "../../temp/PDFForm.pdf");
  // const existingPdfBytes = sourceFile.arrayBuffer();

  const pdfDoc = await PDFDocument.load(sourceFile);
  console.log(pdfDoc);
};

module.exports = pdfFillerService;
