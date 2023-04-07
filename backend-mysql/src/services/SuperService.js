module.exports = class SuperService {
  constructor(model) {
    this.model = model;
  }

  async create(objContent) {
    const result = await this.model.create(objContent);
    return result || null;
  }

  async findAll(obj) {
    const result = await this.model.findAll({ ...obj, raw: false });
    if (!result) return null;
    return result.map((item) => item.toJSON());
  }

  async findOne(objToSearch) {
    const result = await this.model.findOne({ where: objToSearch });
    if (!result) return null;
    return result;
  }

  async update(objContent, objWhere) {
    const result = await this.model.update(objContent, objWhere);
    return result;
  }

  async delete(id = 9999999) {
    const result = await this.model.delete({ where: { id } });
    return result;
  }
};
