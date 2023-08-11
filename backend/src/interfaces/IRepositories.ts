import { IContactDTO } from "./ContactDTO";

export interface IContactRepository {
  save(data: IContactDTO): Promise<void>;
}
