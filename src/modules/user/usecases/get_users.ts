import { IUserRepository, User } from "@/domain";
import { Result } from "neverthrow";

export class GetUsers {
  constructor(private repository: IUserRepository) { }

  async execute(): Promise<Result<User[], Error>> {
    return this.repository.getUsers();
  }
}