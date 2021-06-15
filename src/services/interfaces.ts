export interface IUser {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  token?:string;
  tokenExpires?:string;
  created_At?: Date;
  update_At?: Date;
}
