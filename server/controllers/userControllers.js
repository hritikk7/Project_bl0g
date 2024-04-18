const HttpError = require("../middlewares/errorMiddleware");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
// POST : api/users/register

const registerUser = async (req, res, next) => {
  //     console.log("called");
  //   res.json("registerUser");
  try {
    let { name, email, password, confirmPass } = req.body;
    console.log(name, email, password, confirmPass);
    let lowerCaseEmail = email.toLowerCase()

    if (!name || !lowerCaseEmail || !password || !confirmPass){
      return next(new HttpError("Fill all the fields", 422));
    }
    let user = await User.findOne({ email: lowerCaseEmail });
    if (user) {
      console.log("user exist");
      return res.status(400).json({ message: "User already exist" });
    }

    if (password.trim().length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast 6 charactes" });
    }

    if (password != confirmPass) {
      return res
        .status(400)
        .json({ message: "Password dosent match confirm password" });
    }

    const generatedSalt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, generatedSalt)
    console.log(hashedPass);
    const newUser = await User.create({
      name,
      email : lowerCaseEmail,
      password: hashedPass,
      posts : 0
    })

    res.status(201).json({newUser})

  } catch (err) {
    console.log(err);
    // res.status(401).json{message : "Internal server error"}
    let newError = new HttpError("user registrarion Failed");
    return next(newError, 422);
  }
};

// POST : api/users/login
const loginuser = (req, res, next) => {
  res.json("login");
};

// POST : api/users/:id
const getUser = (req, res, next) => {
  res.json("getUser");
};

// POST : api/users/chage-avatar
const changeAvatar = (req, res, next) => {
  res.json("changeAvatar");
};

// POST : api/users/edit-user
const editUser = (req, res, next) => {
  res.json("editUser");
};

// POST : api/users/authors
const getAuthors = (req, res, next) => {
  res.json("get all authors");
};

module.exports = {
  registerUser,
  getAuthors,
  getUser,
  editUser,
  loginuser,
  changeAvatar,
};
