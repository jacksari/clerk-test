import ProfileHome from "@/components/dashboard/ProfileHome";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      {user ? (
        <ProfileHome
          email={user.primaryEmailAddress?.emailAddress}
          name={user.fullName}
          url_profile={user.imageUrl}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
