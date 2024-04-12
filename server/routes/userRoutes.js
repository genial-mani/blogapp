const {Router} = require('express')
const {registerUser,loginUser,getUser,getAuthors,changeAvatar,edituser} = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')
const router = Router()


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/:id',getUser)
router.get('/',getAuthors)
router.post('/change-avatar',authMiddleware,changeAvatar)
router.patch('/edit-user',authMiddleware,edituser)


module.exports  = router