import UserInfo from "@/components/template/user-info/user-info.component";
import Button from "@/components/ui/button";
import service from "@/service";
import { IUsersGetResponse } from "@/types/interfaces";

const getUsers = async () => service.get<IUsersGetResponse>("/users");

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <div className="flex flex-wrap gap-2">
        {users.map((user) => (
          <UserInfo key={user.id} {...user} />
        ))}
      </div>
      <div className="flex gap-2">
        <Button type="default">Button Default</Button>
        <Button type="primary">Button Primary</Button>
      </div>
    </main>
  );
}
