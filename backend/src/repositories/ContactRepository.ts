import { IContactDTO } from "../interfaces/ContactDTO";
import { IContactRepository } from "../interfaces/IRepositories";
import { User } from "../models/User";

export class ContactRepository implements IContactRepository {
  async save(data: IContactDTO): Promise<void> {
    const user = new User({
      name: data.name,
      email: data.email,
      number: data.number,
      subject: {
        content: data.subject.content,
        title: data.subject.title,
      },
    });

    await user.save();
  }
}
