const validate = (email, password) => {
  const emError = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passError = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!emError) return "Email ID is not valid !!";
  if (!passError)
    return "Password must be at least 8 characters and include uppercase, lowercase, and a digit.";

  return null;
};

export default validate;
