const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

//@route  GET api/admins
//@desc   Register Admin
//@access  Public

router.post(
  "/",
  [
    check("restaurantname", "Restaurant Name is Required").not().isEmpty(),
    check("name", "Name of Owner is Required").not().isEmpty(),
    check("email", "Email is Required").isEmail(),
    check("password", "Password with 6 or more letters is Required").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {restaurantname, name, email, password } = req.body;

    try {
      // See if the admins exists
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Admin already exists" }] });
      }

      admin = new Admin({
        restaurantname,
        name,
        email,
        password,
      });
      // Encrypt Password using bcrypt
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      // Return JSON web token

      const payload = {
        admin: {
          id: admin.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.send(500).send("Server Error");
    }
  }
);

module.exports = router;
