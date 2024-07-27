import { getCurrentUserDetailsPublic } from "../../_functionality/ServerActions";

export default async function PublicProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  const userDetails = await getCurrentUserDetailsPublic(username);
  return (
    <main
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        display: "flex",
        height: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid var(--mg)",
          backgroundColor: "var(--bg)",
          borderRadius: "10px",
          fontSize: "50px",
          padding: "20px",
        }}
      >
        {userDetails ? (
          <div>
            <div>@{username}</div>
            <div>{userDetails.email}</div>
          </div>
        ) : (
          `There is no user with the username "@${username}"`
        )}
      </div>
    </main>
  );
}
