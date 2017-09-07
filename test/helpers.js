const User = appRequire("models/user");
const AuthService = appRequire("lib/authentication/service");
const UserService = appRequire("lib/users/service");

const newUser = {
  email_address: "julcol03@gmail.com",
  password: "12345678",
};

const generateUser = () => UserService.createUser(newUser);

const getSignedToken = user => AuthService.signToken(user);

module.exports = {
  generateUser,
  getSignedToken,
};
