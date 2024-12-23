const { Service } = require("egg");
class UserService extends Service {
  async create(user) {
    return await this.ctx.model.User.create(user);
  }
  async get(username) {
    return await this.ctx.model.User.findOne({ username });
  }
}
module.exports = UserService;
