import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation FormRegister($args: FormInput!) {
    formRegister(args: $args) {
      firstName
      lastName
      age
      jobTitle
      address
      city
      country
      phoneNumber
      email
    }
  }
`;
