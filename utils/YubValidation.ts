import * as Yup from "yup";


 export const validationSchemaSigIn = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    // password: Yup.string().required('Password is required')

  })

  
  export const validationSchemaSignUp = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    userName: Yup.string().required("User name is required"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required")
    // password: Yup.string()
    // .required('Password contain atleast 8 - 12 characters')
    // .min(8, 'Password must be at least 8 characters long').max(12,"Password can not exceed 12 characters long")
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

  export const validationResetPassword = Yup.object().shape({
    newPassword: Yup.string().required("Password is required"),
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


  

  export const validationSchemaTransfer = Yup.object().shape({
    userTag: Yup.string().required("User Tag is required"),
    amount: Yup.string().required('Amount is required'),

  })
  export const validationSchemaWidthDraw = Yup.object().shape({
    bankName: Yup.string().required("Bank name is required"),
    accountNumber: Yup.string().required("Account number is required"),
    amount: Yup.string().required('Amount is required'),

  })
  export const validationSchemaWidthDrawCrypto = Yup.object().shape({
    walletAddress: Yup.string().required("Wallet address is required"),
    amount: Yup.string().required('Amount is required'),

  })


  export const validationSchemaUserProfile = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    skillGap:Yup.string().required("Your skill gap tag is required"),
    twitter:Yup.string().notRequired(),
    tikTok:Yup.string().notRequired(),
    facebook:Yup.string().notRequired(),
    youtube:Yup.string().notRequired()
  })


  export const validationSchemaBlockUser = Yup.object().shape({
    blockUser: Yup.string().required("This Skill gap tag was incorrect or does not exist on our database."),
  })



  //arena section starts


  export const validationSchemaArenaCreateContest = Yup.object().shape({
    skillGapTag: Yup.string().required("Skill gap tag is required."),
    stake: Yup.string().required("Stake amount is required."),
    category: Yup.string().required("Category is required."),
    termsAndDescription: Yup.string().required("Contest terms and conditions is required."),
  })
  export const validationSchemaArenaCreateContest2 = Yup.object().shape({
    stake: Yup.string().required("Stake amount is required."),
    category: Yup.string().required("Category is required."),
    termsAndDescription: Yup.string().required("Contest terms and conditions is required."),
  })
  
  
// arena section ends
  