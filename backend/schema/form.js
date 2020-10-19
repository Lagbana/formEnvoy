const { gql } = require("apollo-server-express");

const form = gql`
  type Form {
    firstName: String!
    lastName: String!
    age: Int!
    jobTitle: String!
    address: String!
    city: String!
    country: String!
    phoneNumber: String!
    email: String!
  }

  input FormInput {
    firstName: String!
    lastName: String!
    age: Int!
    jobTitle: String!
    address: String!
    city: String!
    country: String!
    phoneNumber: String!
    email: String!
  }

  type Mutation {
    formRegister(args: FormInput!): Form!
  }

  type Query {
    dummy: String
  }
`;
module.exports = form;
