const pdfCreateService = require("../services/pdfCreateService");

const resolvers = {
  Mutation: {
    formRegister: async (_, { args }, { req }) => {
      const doc = new pdfCreateService(args);
      // doc.drawInputBox()
      // doc.drawInputBox(75, 10, 5, 7)
      doc.createDoc()
      doc.saveDoc();
      await doc.uploadDoc()
      return args;
    },
  },
};

module.exports = resolvers;
