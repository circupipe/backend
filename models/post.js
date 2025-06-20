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

export class PostModel {
  static async Get() {
    const [posts] = await connection.query("SELECT * FROM post");

    return posts;
  }

  static async GetByID(id) {
    const [post] = await connection.query("SELECT * FROM post WHERE id = ?", [
      id,
    ]);

    return post;
  }

  static async Post(body) {
    const [result] = await connection.query(
      "INSERT INTO post(title,description,content,video_link,tags,author,user_id,type_id) VALUES (?,?,?,?,?,?,?,?)",
      [
        body.title,
        body.description,
        body.content,
        body.video_link,
        body.tags,
        body.author,
        body.user_id,
        body.type_id,
      ]
    );

    return [result, { title: body.title }];
  }

  static async UpdateByID(id, body) {
    const [response] = await connection.query(
      "UPDATE post SET title = ?,description = ?,content = ?,video_link = ?,tags = ?,author = ?,user_id = ?,type_id = ? WHERE id = ?;",
      [
        body.title,
        body.description,
        body.content,
        body.video_link,
        body.tags,
        body.author,
        body.user_id,
        body.type_id,
        id,
      ]
    );

    if (response.affectedRows === 0) return [response];
    else {
      return [response, { id: id, title: body.title }];
    }
  }

  static async ModifyByID(id, body) {
    const keys = Object.keys(body);
    const values = Object.values(body);
    const fields = keys.map((key) => `${key} = ?`).join(", ");

    const query = `UPDATE post SET ${fields} WHERE id = ?`;

    const [result] = await connection.query(query, [...values, id]);

    return result;
  }

  static async DeleteByID(id) {
    const [data] = await connection.query("SELECT * FROM post WHERE id = ?", [
      id,
    ]);
    const [post] = await connection.query("DELETE FROM post WHERE id = ?", [
      id,
    ]);

    if (data.length === 0) {
      return [post, data];
    } else {
      return [post, { id: data[0].id, title: data[0].title }];
    }
  }
}
