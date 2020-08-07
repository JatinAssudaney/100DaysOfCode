const fs = require("fs");
const crypto = require("crypto");
// const { create } = require("domain");

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("To create file, Filename needs to be passed");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (error) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf-8",
      })
    );
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  async create(attrs) {
    attrs.id = this.randomId();
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => {
      return record.id === id;
    });
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => {
      return record.id !== id;
    });
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => {
      return record.id === id;
    });
    if (!record) {
      throw new Error(`Record with ${id} not found`);
    }
    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();
    for (let record of records) {
      let found = true;
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }
      if (found) {
        return record;
      }
    }
  }
}

module.exports = new UsersRepository("users.json");

/* 
// TESTING
const test = async () => {
  const repo = new UsersRepository("users.json");
  //   await repo.create({ email: "test@test.com", password: "password" });
  //   const users = await repo.getAll();
  //   console.log(users);

  //   const user = await repo.getOne("2fad83e6");
  //   console.log(user);
  //   repo.delete(user.id);
  //   const users = await repo.getAll();
  //   console.log(users);

  //   await repo.update("a4e74b92", { email: "newtest@test.com" });

  const user = await repo.getOneBy({ email: "test@test.com" });
  console.log(user);
};

test();
 */
