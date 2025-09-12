import { generateMetadata } from "@/lib/metadata";
import Reservations from "@/pages/Reservations";

export const metadata = generateMetadata("/reservations");

export default function Page() {
  return <Reservations />;
}
