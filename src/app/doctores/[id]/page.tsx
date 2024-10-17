// import { useRouter } from "next/router";

import Breadcrumb from "@/components/commons/Breadcrumbs";
import DoctorProfile from "@/components/dashboard/DoctorProfile";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Breadcrumb
        name="Perfil del doctor"
      />
      <DoctorProfile doctorId={params.id} />
    </div>
  );
}
