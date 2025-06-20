import { Router } from "express";
import { ProductController } from "../controllers/product.js";

export const ProductRouter = Router();

ProductRouter.get("/favicon.ico", (req, res) => res.status(204).end()); // saca la request de fabian con...

ProductRouter.get("/", async (req, res) => {
  const response = await ProductController.Get();

  res.status(response.code).json(response);
});

ProductRouter.get("/:product", async (req, res, next) => {
  const { product } = req.params;

  const response = await ProductController.GetByProduct(product);

  res.status(response.code).json(response);
});

ProductRouter.get("/:product/:id", async (req, res) => {
  const { product, id } = req.params;

  const response = await ProductController.GetProductByID(product, id);

  res.status(response.code).json(response);
});

ProductRouter.post("/:product", async (req, res) => {
  const { product } = req.params;
  const item = req.body;
  const response = await ProductController.PostProductByCategory(product, item);
  res.status(response.code).json(response);
});

ProductRouter.patch("/:product/:id", async (req, res) => {
  const { product, id } = req.params;
  const item = req.body;
  const response = await ProductController.PatchProduct(product, id, item);
  res.status(response.code).json(response);
});

ProductRouter.delete("/:product/:id", async (req, res) => {
  const { product, id } = req.params;
  const response = await ProductController.DeleteProduct(product, id);
  res.status(response.code).json(response);
});
