const express = require("express");
const validateBody = require("../middlewares/validateBody.js");
const isValidId = require("../middlewares/isValidId.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");

const {
  createContactSchema,
  updateFavoriteSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../controllers/contactsControllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrlWrapper(getAllContacts));

contactsRouter.get("/:id", isValidId, ctrlWrapper(getContactById));

contactsRouter.delete("/:id", isValidId, ctrlWrapper(deleteContact));

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

module.exports = contactsRouter;
