import { User } from "@/domain/entities/user/user";
import { IUserRepository } from "@/domain/repositories/user_repository";
import { Result } from "neverthrow";

export class GetUsers {
  constructor(private repository: IUserRepository) { }

  async execute(): Promise<Result<User[], Error>> {
    return this.repository.getUsers();
  }
}