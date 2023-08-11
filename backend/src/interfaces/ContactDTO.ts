export interface ISubject {
  title: string;
  content: string;
}

export interface IContactDTO {
  name: string;
  email: string;
  number: string;
  subject: ISubject;
}
