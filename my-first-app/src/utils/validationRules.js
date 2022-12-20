export const isRequired = (val) => ({
    hasPassed: !!val,
    message: 'Please fill in the field',
  });
  
  export const charLimit = (limit) => (val) => ({
    hasPassed: val.length <= limit,
    message: 'you have exceeded the limit',
  });
  
  export const emailValidation = (val) => ({
    hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
    message: 'Wrong email',
  });
  
  export const passwordValidation = (val) => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
    message: 'the password have to contain letterst and numbers',
  });