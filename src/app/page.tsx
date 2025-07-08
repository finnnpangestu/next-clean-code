"use client";

import { UserCard } from "@/modules/user/components/user_card";
import { useUsers } from "@/modules/user/hooks/useUsers";


export default function Home() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
