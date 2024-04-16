const HttpError = require('../middlewares/errorMiddleware')

// POST : api/users/register
const registerUser = (req, res, next) => {
//     console.log("called");
//   res.json("registerUser");
    try{
        let {name, email, password, confirmPass } = req.body


    }catch(err){
        console.log(err)
        // res.status(401).json{message : "Internal server error"}
        let newError = new HttpError("user registrarion Failed") 
        return next(newError, 422)
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
