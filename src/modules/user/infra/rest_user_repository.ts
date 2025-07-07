import { User } from "@/domain/entities/user/user";
import { err, ok, Result } from "neverthrow";
import { IUserRepository } from "../../../domain/repositories/user_repository";
import { api } from "@/shared/config/axios";
import { ApiNetwork } from "@/shared/constants/api_network";

export class RestUserRepository implements IUserRepository {
  async getUsers(): Promise<Result<User[], Error>> {
    try {
      const response = await api.get<User[]>(ApiNetwork.user);

      if (response.status >= 200 && response.status < 300) {
        return ok(response.data);
      }
      throw new Error(`Request failed with status code ${response.status}`);
    } catch (error) {
      return err(error instanceof Error ? error : new Error("Unknown error occurred"));
    }
  }
}