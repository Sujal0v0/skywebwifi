import { generateMetadata } from "@/lib/metadata";
import CancellationPolicy from "@/pages/CancellationPolicy";

export const metadata = generateMetadata("/cancellation");

export default function Page() {
  return <CancellationPolicy />;
}
