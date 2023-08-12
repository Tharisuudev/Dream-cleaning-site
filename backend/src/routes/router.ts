import { Router } from "express";
import { contactController } from "../implementations";

const router = Router();

router.post("/send", (req, res) => {
  return contactController.handle(req, res);
});

export { router };
