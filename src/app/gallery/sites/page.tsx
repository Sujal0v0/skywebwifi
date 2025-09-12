import { generateMetadata } from "@/lib/metadata";
import GallerySites from "@/pages/GallerySites";

export const metadata = generateMetadata("/gallery/sites");

export default function Page() {
  return <GallerySites />;
}
