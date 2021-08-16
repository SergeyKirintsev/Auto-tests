
const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
};

const isValidEmail = (email) => {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return emailRegex.test(email);
};

const validateUserInput = ({ email, password }) => {
  const result = {
    isValidated: isValidPassword(password) && isValidEmail(email),
    message: null,
    error: null
  };

  if (isValidPassword(password) && isValidEmail(email)) {
    result.message = 'Пользователь успешно cоздан!';
  } else if (isValidEmail(email) && !isValidPassword(password)) {
    result.error = 'Пароль неправильный';
  } else if (!isValidEmail(email) && isValidPassword(password)) {
    result.error = 'Email неправильный';
  } else {
    result.error = 'Данные не верны';
  }

  return result
};

module.exports = {
  validateUserInput,
  isValidEmail,
  isValidPassword
};
