import Breadcrumb from "@/components/commons/Breadcrumbs";
import ProfileFavoriteDoctorsMain from "@/components/dashboard/ProfileFavoriteDoctorsMain";

export default function DoctoresFavoritos() {
    return (
        <div>
              <Breadcrumb name="Mis doctores favoritos" />
              <ProfileFavoriteDoctorsMain />
        </div>
    );
}