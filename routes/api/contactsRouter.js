const express = require("express");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const {
  createContactSchema,
  updateFavoriteSchema,
  updateContactSchema,
} = require("../../schemas/contactsSchemas.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../../controllers/contactsControllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrlWrapper(getAllContacts));

contactsRouter.get(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(getContactById)
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(deleteContact)
);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

module.exports = contactsRouter;
