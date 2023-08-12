import { Request, Response } from "express";
import { ContactUseCase } from "../usecases/ContactUseCases";
import { sendMail } from "../services/Mail";

export class ContactController {
  constructor(private contactUseCase: ContactUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email, number, subject, content } = req.body;

    try {
      await this.contactUseCase.execute({
        name,
        email,
        number,
        subject: { title: subject, content },
      });

      await sendMail({ from: email, content: content, subject, name, number });

      res.status(201).send();
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
