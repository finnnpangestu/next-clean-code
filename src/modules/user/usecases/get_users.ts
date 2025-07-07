import { Result } from "neverthrow";
import { IUserRepository } from "../../../domain/repositories/user_repository";
import { User } from "@/domain/entities/user/user";

export class GetUsers {
  constructor(private repository: IUserRepository) { }

  async execute(): Promise<Result<User[], Error>> {
    return this.repository.getUsers();
  }
}