import { generateMetadata } from "@/lib/metadata";
import Rates from "@/pages/Pricing";

export const metadata = generateMetadata("/rates");

export default function Page() {
  return <Rates />;
}
