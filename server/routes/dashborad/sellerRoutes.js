const router = require("express").Router();
const sellerController = require("../../controllers/dashboard/sellerController");
const { authMiddleware } = require("../../middleware/authMiddleware");

router.get(
  "/request-seller-get",
  authMiddleware,
  sellerController.get_seller_request
);
router.get('/get-seller/:sellerId',authMiddleware,sellerController.get_seller);
router.post(
  "/seller-status-update",
  authMiddleware,
  sellerController.seller_status_update
);

module.exports = router;