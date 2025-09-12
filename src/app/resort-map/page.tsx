import { generateMetadata } from "@/lib/metadata";
import ResortMap from "@/pages/ResortMap";

export const metadata = generateMetadata("/resort-map");

export default function Page() {
  return <ResortMap />;
}
