_function validator(pass) {
  /*(?=.*[  ]) searches pass for value between brackets
    a-z will search for at least 1 lower case A-Z for upper case
    
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/ searches:
      -at least 1 upper case, 1 lower case, 1 digit, and at least 6 characters long "{6,}"
    make changes to adjust what you want to validate for including requirements in last pair of [ ]
  */
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass);
}
