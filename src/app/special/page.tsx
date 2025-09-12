import { generateMetadata } from "@/lib/metadata";
import Special from "@/pages/Special";

export const metadata = generateMetadata("/special");

export default function Page() {
  return <Special />;
}
