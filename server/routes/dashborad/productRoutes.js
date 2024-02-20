const router = require("express").Router();
const { authMiddleware } = require("../../middleware/authMiddleware");
const productControllers = require("../../controllers/dashboard/productControllers");

router.post("/product-add", authMiddleware, productControllers.add_product);

router.get("/products-get", authMiddleware, productControllers.products_get);
router.get(
  "/product-get/:productId",
  authMiddleware,
  productControllers.product_get
);
router.post(
  "/product-update",
  authMiddleware,
  productControllers.product_update
);
router.post(
  "/product-image-update",
  authMiddleware,
  productControllers.product_image_update
);

module.exports = router;
