import { generateMetadata } from "@/lib/metadata";
import Rates from "@/pages/Rates";

export const metadata = generateMetadata("/rates");

export default function Page() {
  return <Rates />;
}
