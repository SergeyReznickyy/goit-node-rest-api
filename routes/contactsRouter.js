// import express from "express";
const express = require("express");
// import contactsControllers from "../controllers/contactsControllers.js";
const contactsControllers = require("../controllers/contactsControllers.js");
// import validateBody from "../middlewares/validateBody.js";
const validateBody = require("../middlewares/validateBody.js");
const isValidId = require("../middlewares/isValidId.js");

const {
  createContactSchema,
  updateFavoriteSchema,
} = require("../schemas/contactsSchemas.js");

const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getContactById);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(createContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateFavorite
);

// export default contactsRouter;
module.exports = contactsRouter;
