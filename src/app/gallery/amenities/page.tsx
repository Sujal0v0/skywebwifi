import { generateMetadata } from "@/lib/metadata";
import GalleryAmenities from "@/pages/GalleryAmenities";

export const metadata = generateMetadata("/gallery/amenities");

export default function Page() {
  return <GalleryAmenities />;
}
