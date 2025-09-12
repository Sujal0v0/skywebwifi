import { generateMetadata } from "@/lib/metadata";
import Gallery from "@/pages/Gallery";

export const metadata = generateMetadata("/gallery");

export default function Page() {
  return <Gallery />;
}
