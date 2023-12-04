const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./utils/db");
require("dotenv").config();
const http = require("http");

//step - 3
const socket = require("socket.io");

const server = http.createServer(app);

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
//step- 4
const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

//step-8
var allCustomer = [];
var allSeller = [];

const addUser = (customerId, socketId, userInfo) => {
  const checkUser = allCustomer.some((u) => u.customerId === customerId);
  if (!checkUser) {
    allCustomer.push({
      customerId,
      socketId,
      userInfo,
    });
  }
};

const addSeller = (sellerId, socketId, userInfo) => {
  const chaeckSeller = allSeller.some((u) => u.sellerId === sellerId);
  if (!chaeckSeller) {
    allSeller.push({
      sellerId,
      socketId,
      userInfo,
    });
  }
};

const findCustomer = (customerId) => {
  return allCustomer.find((c) => c.customerId === customerId);
};

const findSeller = (sellerId) => {
  return allSeller.find((c) => c.sellerId === sellerId);
};

const remove = (socketId) => {
  allCustomer = allCustomer.filter((c) => c.socketId !== socketId);
  allSeller = allSeller.filter((c) => c.socketId !== socketId);
};
let admin = {};

const removeAdmin = (socketId) => {
  if (admin.socketId === socketId) {
    admin = {};
  }
};


//step -5
io.on('connection', (soc) => {
 console.log('socket server conn');
  
 //step- 7
 soc.on("add_user", (customerId, userInfo) => {
   addUser(customerId, soc.id, userInfo);
  //  console.log(customerId, soc.id, userInfo);
   io.emit("activeSeller", allSeller);
   io.emit("activeCustomer", allCustomer);
 });
 soc.on("add_seller", (sellerId, userInfo) => {
  // console.log(sellerId, userInfo);
   addSeller(sellerId, soc.id, userInfo);
   io.emit("activeSeller", allSeller);
   io.emit("activeCustomer", allCustomer);
   io.emit("activeAdmin", { status: true });
 });

 //admin dashboard
 soc.on("add_admin", (adminInfo) => {
   delete adminInfo.email;
   admin = adminInfo;
   admin.socketId = soc.id;
   io.emit("activeSeller", allSeller);
   io.emit("activeAdmin", { status: true });
 });

 soc.on("send_seller_message", (msg) => {
   const customer = findCustomer(msg.receverId);
  //  console.log(customer);
   if (customer !== undefined) {
     soc.to(customer.socketId).emit("seller_message", msg);
   }
 });
soc.on("send_customer_message", (msg) => {
  const seller = findSeller(msg.receverId);
  if (seller !== undefined) {
    soc.to(seller.socketId).emit("customer_message", msg);
  }
});

 soc.on("send_message_admin_to_seller", (msg) => {
  // console.log(msg);
   const seller = findSeller(msg.receverId);
   if (seller !== undefined) {
     soc.to(seller.socketId).emit("receved_admin_message", msg);
   }
 });

 soc.on("send_message_seller_to_admin", (msg) => {
   if (admin.socketId) {
     soc.to(admin.socketId).emit("receved_seller_message", msg);
   }
 });

  soc.on("disconnect", () => {
    console.log("user disconnect");
    remove(soc.id);
    removeAdmin(soc.id);
    io.emit("activeAdmin", { status: false });
    io.emit("activeSeller", allSeller);
    io.emit("activeCustomer", allCustomer);
  });
})



app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/api", require("./routes/chatRoutes"));

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashborad/categoryRoutes"));
app.use("/api", require("./routes/dashborad/productRoutes"));
app.use("/api", require("./routes/dashborad/sellerRoutes"));

//Client sever
app.use("/api/home", require("./routes/home/homeRoutes")); 
app.use("/api", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes")); 
app.use("/api", require("./routes/home/cardRoutes"));


app.get("/", (req, res) => res.send("shop is ready?!!!"));
const port = process.env.PORT || 5000;
dbConnect();
server.listen(port, () => console.log(`shop is listening on ${port}`));
