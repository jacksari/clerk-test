import Breadcrumb from "@/components/commons/Breadcrumbs";
import ProfileMain from "@/components/dashboard/ProfileMain";
import { currentUser } from "@clerk/nextjs/server";

export default async function MiPerfil() {
  const user = await currentUser();
  return (
    <div>
      <Breadcrumb name="Mi perfil" />
      {user ? (
        <ProfileMain
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
