const router = require('express').Router();
const { police_check } = require('../../middleware');
const tagsController = require('./controller');

router.get('/tags', tagsController.index);
router.post('/tags',  
    police_check('create', 'Tags'),    
    tagsController.store);
router.put('/tags/:id',  
    police_check('update', 'Tags'),    
    tagsController.update);
router.delete('/tags/:id', 
    police_check('delete', 'Tags'),    
    tagsController.destroy);

module.exports = router;