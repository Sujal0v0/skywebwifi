import { generateMetadata } from "@/lib/metadata";
import Accommodations from "@/pages/Accommodations";

export const metadata = generateMetadata("/accommodations");

export default function Page() {
  return <Accommodations />;
}
