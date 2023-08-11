import { ContactController } from "../controllers/ContactController";
import { ContactRepository } from "../repositories/ContactRepository";
import { ContactUseCase } from "../usecases/ContactUseCases";

const contactRepository = new ContactRepository();
const contactUseCase = new ContactUseCase(contactRepository);
const contactController = new ContactController(contactUseCase);

export { contactController };
