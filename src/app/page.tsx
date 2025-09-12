import { generateMetadata } from "@/lib/metadata";
import Home from "@/pages/Home";

export const metadata = generateMetadata("/");

export default function Page() {
  return <Home />;
}
