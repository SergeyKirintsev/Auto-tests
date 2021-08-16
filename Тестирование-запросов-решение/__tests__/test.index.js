const supertest = require('supertest');
const app = require('../app.js');

const request = supertest(app);

describe('Тестируем эндпоинты приложения', () => {
  it('GET "/" должен возвращать "Hello World!" и корректный статус', () => {
    return request.get('/').then((response) => {
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!');
    })
  });

  it('POST "/users" должен возвращать корректные данные пользователя в json-формате и корректный статус', () => {
    return request.post('/users').then((response) => {
      expect(response.status).toBe(201);
      expect(response.headers['content-type']).toMatch('application/json');
      expect(response.body.message).toBe('success');
      expect(response.body.data.isDeveloper).toBeTruthy();
      expect(response.body.data.followersOnGithub).toBeGreaterThan(10);
    });
  });
});