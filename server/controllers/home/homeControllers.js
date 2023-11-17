const categoryModal = require("../../models/categoryModal");
const { responseReturn } = require("../../utils/response");



class homeControllers {
  get_categorys = async (req, res) => {
    try {
      const categorys = await categoryModal.find({});
      responseReturn(res, 200, {
        categorys,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}


module.exports = new homeControllers();