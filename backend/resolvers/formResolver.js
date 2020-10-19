const resolvers = {
  Mutation: {
    formRegister: (_, {args}, {req}) => {
      console.log(args)
      return args;
    },
  },
};

module.exports = resolvers;
