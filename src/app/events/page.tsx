import { generateMetadata } from "@/lib/metadata";
import Events from "@/pages/Events";

export const metadata = generateMetadata("/events");

export default function Page() {
  return <Events />;
}
