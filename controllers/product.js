import { ProductModel } from "../models/product.js";
// import { cpuSchema } from "../schemas/cpu.js";
import { ProductSchemas } from "../schemas/product.js";
import { CreateResponse } from "../utils/response.js";

export class ProductController {
  // Método para obtener todos los cpu
  static async Get() {
    let response;
    const data = await ProductModel.Get(); // Llama al modelo para obtener los datos

    // Crea una respuesta dependiendo si se obtuvo data o no
    if (data) {
      response = CreateResponse("GET", product, data);
    } else {
      response = CreateResponse("GET", product, null);
    }

    return response;
  }

  static async GetByProduct(product) {
    let response;
    const data = await ProductModel.GetByProduct(product);

    if (data) {
      response = CreateResponse("GET", product, data);
    } else {
      response = CreateResponse("GET", product, null);
    }

    return response;
  }
  static async GetProductByID(product, id) {
    let response;
    const data = await ProductModel.GetProductByID(product, id);

    if (data) {
      response = CreateResponse("GET", product, data);
    } else {
      response = CreateResponse("GET", product, null);
    }

    return response;
  }
  static async PostProductByCategory(product, body) {
    const validationBody = ProductSchemas[product]?.safeParse(body);

    if (!validationBody.success) {
      return CreateResponse("POST", product, null);
    }
    const data = await ProductModel.PostProductByCategory(product, body);
    return CreateResponse("POST", product, data);
  }

  static async PatchProduct(product, id, body) {
    const validationBody = ProductSchemas[product]?.safeParse(body);

    if (!validationBody.success) {
      return CreateResponse("PATCH", product, null);
    }
    const data = await ProductModel.PatchProduct(product, id, body);
    return CreateResponse("PATCH", product, data);
  }

  static async DeleteProduct(product, id) {
    const data = await ProductModel.DeleteProduct(product, id);
    return CreateResponse("DELETE", product, data);
  }
}
