import { User } from "@/domain/entities/user/user";
import { Result } from "neverthrow";

export interface IUserRepository {
  getUsers(): Promise<Result<User[], Error>>;
}