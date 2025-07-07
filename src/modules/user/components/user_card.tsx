import { User } from "@/domain/entities/user/user";

type Props = { user: User };

export const UserCard = ({ user }: Props) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>
  );
}