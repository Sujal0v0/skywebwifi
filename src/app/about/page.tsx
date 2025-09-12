import { generateMetadata } from "@/lib/metadata";
import About from "@/pages/About";

export const metadata = generateMetadata("/about");

export default function Page() {
  return <About />;
}
