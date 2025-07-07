import { Result } from "neverthrow";
import { User } from "../entities/user/user";

export interface IUserRepository {
  getUsers(): Promise<Result<User[], Error>>;
}