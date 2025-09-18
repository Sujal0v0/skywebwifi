import { generateMetadata } from "@/lib/metadata";
import Contact from "@/pages/Contact";

export const metadata = generateMetadata("/reservations");

export default function Page() {
  return <Contact />;
}
