import { getBusinessCardData } from "@/lib/service/aboutService";
import BusinessCard from "@/components/Card/BusinessCard";
import "./card.page.css"

export default async function Page() {
  const data = await getBusinessCardData();

  return (
    <div className="card-container">
      <BusinessCard data={data} />
    </div>
  );
}