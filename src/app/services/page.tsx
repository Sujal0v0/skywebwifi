import { generateMetadata } from "@/lib/metadata";
import Services from "@/pages/Services";

export const metadata = generateMetadata("/amenities");

export default function Page() {
  return <Services />;
}
