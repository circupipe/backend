export const CreateResponse = (method, resourse, data) => {
  let response;
  let errors = [];

  switch (method) {
    case "POST":
      if (!data) {
        errors.push(`No se puede ingresar ${resourse}`);
      }
      response = {
        code: data ? 201 : 400,
        status: data ? "Created" : "Bad Request",
        error: errors.length > 0 ? errors : null,
        data: data ? data : null,
      };
      break;

    case "GET":
      if (!data || data.length <= 0) {
        errors.push(`No se encuentra ${resourse}`);
        data = [];
      }
      response = {
        code: data.length > 0 ? 200 : 404,
        status: data.length > 0 ? "OK" : "Not Found",
        error: errors.length > 0 ? errors : null,
        data,
      };

      break;

    case "PATCH":
      if (!data) {
        errors.push(`No se pudo crear el ${resourse}`);
      }
      response = {
        code: data ? 214 : 304,
        status: data ? "Transformation Applied" : "Not Modified",
        data: data ? data : null,
        errors,
      };
      break;

    case "DELETE":
      if (data == 0) {
        errors.push(`No se pudo borrar ${resourse}`);
      }
      response = {
        code: data > 0 ? 202 : 400,
        status: data > 0 ? "Accepted" : "Bad Request",
        error: errors.length > 0 ? errors : null,
        data,
      };
      break;

    default:
      response = {
        code: 405,
        status: "Method Not Allowed",
        error: ["Método no soportado"],
      };
      break;
  }

  return response;
};
