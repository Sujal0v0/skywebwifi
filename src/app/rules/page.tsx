import { generateMetadata } from "@/lib/metadata";
import AboutRules from "@/pages/AboutRules";

export const metadata = generateMetadata("/rules");

export default function Page() {
  return <AboutRules />;
}
