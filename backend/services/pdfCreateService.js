const { jsPDF, AcroFormEditBox, AcroFormTextField } = require("jspdf");
const { messanger } = require("./messangerService");

class pdfCreateService {
  constructor(options = {}) {
    this.doc = new jsPDF();
    this.formBox = new AcroFormEditBox();
    this.textField = new AcroFormTextField();
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.age = options.age;
    this.address = options.address;
    this.city = options.city;
    this.country = options.country;
    this.phoneNumber = options.phoneNumber;
    this.email = options.email;
    this.jobTitle = options.jobTitle;
  }

  drawInputBox() {
    // this.doc.text("TextField:", 10, 145);

    this.doc.rect = [10, 50, 30, 10];
    this.textField.multiline = true;
    this.textField.value =
      "The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse"; //
    this.textField.fieldName = "TestTextBox";

    //SET FONT SIZE
    this.textField.maxFontSize = 40;

    this.doc.addField(this.textField);
  }

  writeFirstname() {
    this.doc.text("Firstname:", 10, 10);
    this.doc.text(this.firstName, 75, 10);
  }
  writeLastname() {
    this.doc.text("Lastname:", 10, 20);
    this.doc.text(this.lastName, 75, 20);
  }
  writeAge() {
    this.doc.text("Age:", 10, 30);
    this.doc.text(String(this.age), 75, 30);
  }
  writeAddress() {
    this.doc.text("Address:", 10, 40);
    this.doc.text(this.address, 75, 40);
  }
  writeCity() {
    this.doc.text("City:", 10, 50);
    this.doc.text(this.city, 75, 50);
  }
  writeCountry() {
    this.doc.text("Country:", 10, 60);
    this.doc.text(this.country, 75, 60);
  }
  writePhonenumber() {
    this.doc.text("Phone Number:", 10, 70);
    this.doc.text(this.phoneNumber, 75, 70);
  }
  writeEmail() {
    this.doc.text("Email:", 10, 80);
    this.doc.text(this.email, 75, 80);
  }
  writeJobTitle() {
    this.doc.text("Job Title:", 10, 90);
    this.doc.text(this.jobTitle, 75, 90);
  }
  createDoc() {
    this.writeFirstname();
    this.writeLastname();
    this.writeAddress();
    this.writeCity();
    this.writeCountry();
    this.writeAge();
    this.writeJobTitle();
    this.writePhonenumber();
    this.writeEmail();
    // this.drawInputBox()
  }
  saveDoc() {
    this.doc.save("./temp/test.pdf");
  }

  async uploadDoc() {
    await messanger();
  }
}

module.exports = pdfCreateService;
