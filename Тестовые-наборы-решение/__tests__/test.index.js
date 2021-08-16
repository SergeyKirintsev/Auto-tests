const { isValidEmail, isValidPassword, validateUserInput } = require('../index.js');

// Эти данные должны проходить проверку
const dataValid = { email: 'bob@yandex.ru', password: '1amAp0k3m0n%'  };

// Эти данные не должны проходить проверку
const dataInvalidPassword = { email: 'bob@yandex.ru', password: '123456' };
const dataInvalidEmail = { email: 'bob', password: '1amAp0k3m0n%'  };
const dataInvalidCredentials = { email: 'bob', password: '12345'  };

// Ваши тесты здесь

describe('Валидация пользовательских данных', () => {
  it('#isValidEmail должна проверять, что email валиден', () => {
    expect(isValidEmail(dataValid.email)).toBeTruthy();
    expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
  });

  it('#isValidPassword должна проверять, что пароль валиден', () => {
    expect(isValidPassword(dataValid.password)).toBeTruthy();
    expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();
  });

  it('#validateUserInput должна возвращать message, если данные верны, и не возвращать ошибку', () => {
    expect(validateUserInput(dataValid).isValidated).toBeTruthy();
    expect(validateUserInput(dataValid).error).toBeNull();
    expect(validateUserInput(dataValid).message).toBe('Пользователь успешно cоздан!');
  });

  it('#validateUserInput должна возвращать ошибку об email, если email неверный', () => {
    expect(validateUserInput(dataInvalidEmail).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidEmail).error).toBe('Email неправильный');
    expect(validateUserInput(dataInvalidEmail).message).toBeNull();
  });

  it('#validateUserInput должна возвращать ошибку о пароле, если пароль неверный', () => {
    expect(validateUserInput(dataInvalidPassword).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidPassword).error).toBe('Пароль неправильный');
    expect(validateUserInput(dataInvalidPassword).message).toBeNull();
  });

  it('#validateUserInput должна возвращать общую ошибку, если все данные неверные', () => {
    expect(validateUserInput(dataInvalidCredentials).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidCredentials).error).toBe('Данные не верны');
    expect(validateUserInput(dataInvalidCredentials).message).toBeNull();
  });
});