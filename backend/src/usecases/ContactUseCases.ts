import { IContactDTO } from "../interfaces/ContactDTO";
import { IContactRepository } from "../interfaces/IRepositories";

export class ContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute(data: IContactDTO) {
    if (!data.name || !data.email || !data.number || !data.subject) {
      throw new Error("Preencha todos os campos!");
    }

    await this.contactRepository.save(data);
  }
}
