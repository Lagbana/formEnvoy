const pdfCreateService = require("../services/pdfCreateService");
const pdfFillerService = require("../services/pdfFillerService")

const resolvers = {
  Mutation: {
    formRegister: async (_, { args }, { req }) => {
      // const doc = new pdfCreateService(args);
      // doc.createDoc()
      // doc.saveDoc();
      // await doc.uploadDoc()
      pdfFillerService(args)
      return args;
    },
  },
};

module.exports = resolvers;
