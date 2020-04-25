const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/',async (req,res) => {
    await res.status(200).json({message:"Bukitech"});
})

router.post("/login", ctrl.auth.auth);
router.post("/form/call", ctrl.contacts.call);
router.post("/form/contact", ctrl.contacts.contactForm);


module.exports = router;