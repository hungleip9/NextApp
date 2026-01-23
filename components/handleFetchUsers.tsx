import useFetchUsers from "@/api/useFetchUsers";

export default function HandleFetchUsers() {
  const { isLoading, error, data: users } = useFetchUsers();
  return (
    <>
      {isLoading ? (
        <p>Fetching users...</p>
      ) : error ? (
        <p>An error occurred while fetching users</p>
      ) : (
        users && (
          <ul className="overflow-auto max-h-[500px]">
            {users.map((user) => (
              <li key={user.login.uuid} className="border">
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}
