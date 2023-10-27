const express = require("express");
const router = express.Router();

const Users = require("../data/Users.json");

router.get("/", async (req, res) => {
  res.json(Users);
});

router.get("/search", async (req, res) => {
  const { zipcode, username } = req.query;

  let result = Users;

  if (zipcode) {
    result = result.filter((user) => user.address.zipcode === zipcode);
  }
  if (username) {
    result = result.filter((user) => user.username === username);
  }

  res.json(result);
});

module.exports = router;
