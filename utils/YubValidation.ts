import * as Yup from "yup";


 export const validationSchemaSigIn = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required('Password is required')

  })

  
  export const validationSchemaSignUp = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string().required("Email is required"),
    password: Yup.string()
    .required('Password contain atleast 8 - 12 characters')
    .min(8, 'Password must be at least 8 characters long').max(12,"Password can not exceed 12 characters long")
  })


    
  export const validationUserProfile = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    // kinsName: Yup.string().required("Full name is required"),
    userName: Yup.string().required("User name is required"),
    DOB: Yup.string().required("Full name is required"),
    email: Yup.string().email().required("Email is required"),
    // kinsemail: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
    // kinsphoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
    date: Yup.date().typeError('Invalid date format').required('Date of birth is required')
    
  })

  export const validationPasswordChange = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Please confirm your password'),
   
  })


  export const CartAddress = Yup.object().shape({
    name: Yup.string().required("Full Name is Required"),
    phoneMunber: Yup.string().required("Phone Number is required"),
    state: Yup.string().required("State is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
   
  })