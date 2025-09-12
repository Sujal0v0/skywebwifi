import { generateMetadata } from "@/lib/metadata";
import Amenities from "@/pages/Amenities";

export const metadata = generateMetadata("/amenities");

export default function Page() {
  return <Amenities />;
}
