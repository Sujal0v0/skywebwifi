import { generateMetadata } from "@/lib/metadata";
import GalleryActivities from "@/pages/GalleryActivities";

export const metadata = generateMetadata("/gallery/activities");

export default function Page() {
  return <GalleryActivities />;
}
