const express = require('express');

const index = express();

const successMessage = 'success';
const userData = {
  name: 'Маша',
  email: 'developer@yandex.ru',
  isDeveloper: true,
  followersOnGithub: 12
};

index.get('/', (req, res) => {
  res.status(200).send('Hello World!')
});

index.post('/users', (req, res) => {
  res.status(201).send({
    message: successMessage,
    data: userData,
  });
});

module.exports = index;
