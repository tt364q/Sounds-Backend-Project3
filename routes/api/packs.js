const express = require('express');
const router = express.Router();
const packsCtrl = require('../../controllers/packs');

router.get('/', packsCtrl.getAllPacks);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, packsCtrl.create);
// router.post('/:id/update', checkAuth, packsCtrl.update);
// router.post('/:id/delete', checkAuth, packsCtrl.delete);

function checkAuth(req, res, next) {
    if(req.user)return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;