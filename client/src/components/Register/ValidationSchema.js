import * as yup from 'yup'

// const emailRegExp = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i'
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$
const phoneRegExp =/^((\[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/


export const ValidationSchema = yup.object().shape({
  firstName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: yup.number()
    .integer()
    .min(18, 'You are not of legal age!')
    .required('Required'),
  jobTitle: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  city: yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  country: yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  phoneNumber: yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Required'),
  email: yup.string()
    .email('Invalid email')
    .required('Required')
})
