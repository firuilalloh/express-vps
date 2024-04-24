const config = require("../config/app.config.json");
const mysql = new (require("../class/mysql.class.js"))(config.db);

class _index {
  async getMember() {
    try {
      const result = await mysql
        .query(`SELECT * FROM tb_test`)
        .then((result) => {
          return result;
        });

      return {
        status: true,
        data: result,
      };
    } catch (error) {
      console.error(error);
      return {
        status: false,
        error: "Internal server error",
      };
    }
  }
}

module.exports = new _index();
