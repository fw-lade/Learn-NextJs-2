import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = response.json();
        setUsers(data);
      } catch (err){
        if(err instanceof Error){
            setError(`Failed to fetch users: ${err.message}`);
        }
      }finally{
        setLoading(false)
      }
    }
    fetchUser()
  }, []);
  return <div>UsersClient</div>;
};

export default UsersClient;
