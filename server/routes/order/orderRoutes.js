const orderController = require("../../controllers/order/orderController");

const router = require("express").Router();

//----customer
router.post("/home/order/palce-order", orderController.place_order);
router.get(
  "/home/customer/gat-dashboard-data/:userId",
  orderController.get_customer_databorad_data
);
router.get(
  "/home/customer/gat-orders/:customerId/:status",
  orderController.get_orders
);
router.get("/home/customer/gat-order/:orderId", orderController.get_order);

// --- admin
router.get("/admin/orders", orderController.get_admin_orders);
router.get("/admin/order/:orderId", orderController.get_admin_order);
router.put(
  "/admin/order-status/update/:orderId",
  orderController.admin_order_status_update
);
// ---seller

router.get("/seller/orders/:sellerId", orderController.get_seller_orders);
router.get("/seller/order/:orderId", orderController.get_seller_order);
router.put(
  "/seller/order-status/update/:orderId",
  orderController.seller_order_status_update
);

module.exports = router;