import { useEffect, useState, useMemo } from "react"
import { RestUserRepository } from "../infra/rest_user_repository";
import { GetUsers } from "../usecases/get_users";
import { User } from "@/domain/entities/user/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const usecase = useMemo(() => {
    const repo = new RestUserRepository();
    return new GetUsers(repo);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await usecase.execute();

        if (result.isOk()) {
          setUsers(result.value);
        } else {
          throw result.error;
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [usecase]);

  return {
    users,
    error,
    loading,
  };
}