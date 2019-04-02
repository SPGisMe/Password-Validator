_function validator(pass) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass);
}
