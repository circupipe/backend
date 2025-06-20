import { PostModel } from "../models/post.js";
import { postSchema } from "../schemas/post.js";
import { CreateResponse } from "../utils/response.js";

export class PostController {
  static async Get() {
    let response;
    const data = await PostModel.Get();

    if (data) {
      response = CreateResponse("GET", "post", data);
    } else {
      response = CreateResponse("GET", "post", null);
    }

    return response;
  }

  static async GetByID(id) {
    let response;
    const data = await PostModel.GetByID(id);

    if (data) {
      response = CreateResponse("GET", "post", data);
    } else {
      response = CreateResponse("GET", "post", null);
    }

    return response;
  }

  static async Post(data) {
    const validationBody = postSchema.safeParse(data);

    if (!validationBody.success) {
      return CreateResponse("POST", "post", null);
    }

    const body = await PostModel.Post(data);

    return CreateResponse("POST", "post", body);
  }

  static async UpdateByID(id, body) {
    const validationBody = postSchema.safeParse(body);

    if (!validationBody.success) {
      return CreateResponse("PUT", "post", null);
    }

    const data = await PostModel.UpdateByID(id, body);

    return CreateResponse("PUT", "post", data);
  }

  static async ModifyByID(id, body) {
    const post = await PostModel.GetByID(id);
    const bodyPost = post[0];

    const newPost = { ...bodyPost, ...body };

    const validationBody = postSchema.safeParse(newPost);

    const postCompared =
      Object.keys(bodyPost).length === Object.keys(newPost).length &&
      Object.keys(bodyPost).every(
        (key, index) => key === Object.keys(newPost)[index]
      );

    if (!validationBody.success || !postCompared) {
      return CreateResponse("PATCH", "post", null);
    } else {
      const data = await PostModel.ModifyByID(id, body);
      return CreateResponse("PATCH", "post", newPost);
    }
  }
  static async DeleteByID(id) {
    let response;

    const data = await PostModel.DeleteByID(id);

    return (response = CreateResponse("DELETE", "post", data));
  }
}
