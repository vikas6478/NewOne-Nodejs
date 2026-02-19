const empModel = require("../models/stumodel");

const stuSave = async (req, res) => {
  const { empno, name, designation, salary } = req.body;

  const employee = await empModel.create({
    empno: empno,
    name: name,
    designation: designation,
    salary: salary,
  });
  res.send("data mil gaya");
};

const empDisplay = async (req, res) => {
  const employee = await empModel.find();
  res.send(employee);
};

const empDelete = async (req, res) => {
  const id = req.params.id;
  const employee = await empModel.findByIdAndDelete(id);

  console.log(req.params.id);
  res.send("delete successfully!");
};

const empUpdategetOne = async (req, res) => {
  const employee = await empModel.findById(req.params.id);
  res.send(employee);
};

const empUpdate = async (req, res) => {
  const id = req.params.id;

  await empModel.findByIdAndUpdate(id, req.body);

  res.send("Data Updated Successfully!");
};

const empSearch = async (req, res) => {
  const { empno } = req.query;
  const employee = await empModel.find({ empno: empno });
  console.log(employee);
  res.send(employee);
};

module.exports = {
  stuSave,
  empDisplay,
  empDelete,
  empUpdategetOne,
  empUpdate,
  empSearch,
};
