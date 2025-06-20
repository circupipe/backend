import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "hardware",
  charset: "utf8mb4",
};

const connection = await mysql.createConnection(config);

export class ProductModel {
  static async GetByProduct(product) {
    console.log("Buscando producto:", product);

    const [post] = await connection.query(`SELECT * FROM ${product};`);

    return post;
  }

  static async GetProductByID(product, id) {
    const [post] = await connection.query(
      `SELECT * FROM ${product} WHERE id = ?;`,
      [id]
    );

    return post;
  }

  static async PostProductByCategory(product, body) {
    const keys = Object.keys(body);

    const values = Object.values(body);

    const columns = keys.join(", ");

    const placeholders = keys.map(() => "?").join(", ");

    const query = `INSERT INTO ${product} (${columns}) VALUES (${placeholders})`;

    const [result] = await connection.query(query, values); //

    return result;
  }

  static async PatchProduct(product, id, body) {
    const keys = Object.keys(body);
    const values = Object.values(body);
    const setClause = keys.map((key) => `${key} = ?`).join(", ");

    const query = `UPDATE ${product} SET ${setClause} WHERE id = ?`;

    const [result] = await connection.query(query, [...values, id]);

    return result;
  }

  static async DeleteProduct(product, id) {
    const [result] = await connection.query(
      `DELETE FROM ${product} WHERE id = ?;`,
      [id]
    );

    return result;
  }
}
