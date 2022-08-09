const _ = require("lodash");
const catchError = require("../utils/catchError");
const bcrypt = require("bcrypt");
const { User } = require("../models/auth.model");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const secret = process.env.JWT_SECRET;

const signUpHandler = (req, res, next) => {
  catchError(next, async () => {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    let newUser = new User(user);
    try {
      newUser = await newUser.save();

      const token = jwt.sign({ _id: newUser._id }, secret, {
        expiresIn: "24h",
      });

      newUser = _.pick(newUser, ["_id", "username"]);

      res.status(201).json({
        message: "User created successfully",
        body: {
          userData: newUser,
          token,
        },
      });
    } catch (error) {
      if (error.code) {
        res.status(400).json({
          message: "User already exist",
        });
      } else {
        res.status(400).json({
          message: "Something went wrong",
        });
      }
    }
  });
};

const loginHandler = (req, res, next) => {
  catchError(next, async () => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      const user = await User.findOne({ email });
      console.log(user);
      if (user) {
        const validPassword = await bcrypt.compare(password, user.password);

        if (validPassword) {
          let userData = _.pick(user, ["_id", "username"]);

          const token = jwt.sign({ _id: user._id }, secret, {
            expiresIn: "24h",
          });

          res.status(200).json({
            message: "Successfully authenticated",
            body: {
              userData,
              token,
            },
          });
        } else {
          res.status(401).json({
            message: "Password invalid",
          });
        }
      }
      res.status(401).json({
        message: "User doesn't exist",
      });
    } catch (error) {
      res.status(401).json({
        message: "Something went wrong",
      });
    }
  });
};

module.exports = { signUpHandler, loginHandler };
