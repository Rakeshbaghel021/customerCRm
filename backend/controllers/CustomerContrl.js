const Customer = require("../models/Customer");

const gellAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createCustomers = async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, country } = req.body;
    const customer = new Customer({
      firstName,
      lastName,
      mobile,
      email,
      country,
    });
    await customer.save();
    const customers = await Customer.find();
    res.json({ customer, customers, msg: "created a student" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, country } = req.body;
    await Customer.findByIdAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        mobile,
        email,
        country,
      }
    );
    const customers = await Customer.find();
    res.json({ msg: "updated a student", customers });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    const customers = await Customer.find();

    res.json({ customers, msg: "Deleted a student" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  gellAllCustomers,
  createCustomers,
  updateCustomer,
  deleteCustomer,
};
