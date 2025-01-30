type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersServer = async () => {
  // delay data fetching
  // await new Promise((resolve) => setTimeout(resolve, 2000))
   
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <ul className="space-y-4 p-4">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersServer;
