const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const { schema } = require("../../schemas/contacts");
const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schema), ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", validateBody(schema), ctrl.updateContact);

module.exports = router;
