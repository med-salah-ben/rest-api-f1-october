const express = require("express");
const router = express.Router();
const contactControllers = require('../controllers/contactControllers')

//--add contact
router.post("/",contactControllers.postContact);
//---get all contacts
router.get("/",contactControllers.getContacts);
//---get contact by id
router.get("/:id",contactControllers.getContact);
//---update contact by id
router.put("/:id",contactControllers.updateContact);
//---delete contact by id
router.delete("/:id",contactControllers.deleteContact);
module.exports = router