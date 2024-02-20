const router = require("express").Router();
const bannerController = require("../controllers/bannerController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/banner/add" ,authMiddleware, bannerController.add_banner);
router.get("/banners/get" , bannerController.get_banners);
router.get("/banner/get/:productId" ,authMiddleware, bannerController.get_banner);
router.put("/banner/update/:bannerId" ,authMiddleware, bannerController.update_banner);
module.exports = router;
