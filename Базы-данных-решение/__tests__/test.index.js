const mongoose = require('mongoose');
const User = require('../models/user');
const fixtures = require('../fixtures');

const MONGO_URL = 'mongodb://localhost:27017/mestodb-14';

beforeAll(() => {
  return mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
});

afterAll(() => {
  return mongoose.disconnect();
});

describe('Database tests', () => {
  beforeEach(() => {
    const { name, about, avatar, email, password } = fixtures.user;

    return User.create({
      name,
      about,
      avatar,
      email,
      password,
    });
  });

  afterEach(() => User.deleteOne({ email: fixtures.user.email }));

  it('Пользователь должен быть', () => {
    return User.findOne({ email: fixtures.user.email })
      .then((user) => {
        expect(user).toBeDefined();
        expect(user.email).toBe(fixtures.user.email);
        expect(user.name).toBe(fixtures.user.name);
      });
  });
});