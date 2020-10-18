import { gql } from '@apollo/client'

export const REGISTER_MUTATION = gql`
    mutation FormRegister($args: FORM!) {
        formRegister(args: $args){
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

`