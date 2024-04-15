const {Router} = require('express')
const {
    getAuthors,
    getUser,
    editUser,
    loginuser,
    registerUser,
    changeAvatar,
  } = require('../controllers/userControllers')
  
const router = Router()



router.post('/register', registerUser)
router.post('/login', loginuser)
router.get('/:id', getUser)
router.post('/change-avatar', changeAvatar)
router.patch('/edit-user', editUser)
router.get('/',  getAuthors)

module.exports = router