import Breadcrumb from "@/components/commons/Breadcrumbs";
import ClinicsListMain from "@/components/dashboard/ClinicsListMain";
import Head from "next/head";

export default function Clinicas() {
  return (
    <div>
      <Head>
        <title>Clinicas</title>
      </Head>
      <Breadcrumb name="Clinicas" />

      <ClinicsListMain />
    </div>
  );
}
