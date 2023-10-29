const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/tokenCreate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log(admin, "admin");
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        console.log(match);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("access_token", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "login success" });
        } else {
          responseReturn(res, 404, { error: "password not match" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async(req, res)=>{
     const {id, role} = req;

     try {
      if(role === "admin"){
        const user = await adminModel.findById(id);
        responseReturn(res, 200, {userInfo: user});
      }else{
        console.log("serler info");
      }
      
     } catch (error) {
        console.log(error.message);
     }
  }


}

module.exports = new authControllers();
