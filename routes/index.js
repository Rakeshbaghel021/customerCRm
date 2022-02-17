const express = require("express");
const {
  gellAllCustomers,
  createCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/CustomerContrl");

const router = express.Router();

router.get("/customers", gellAllCustomers);
router.post("/customer", createCustomers);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);

module.exports = router;
