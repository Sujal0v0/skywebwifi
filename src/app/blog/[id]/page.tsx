"use client";
export const runtime = "edge";
import BlogPost from "@/components/blog/BlogPost";
import { useParams } from "next/navigation";

export default function Blogs() {
  const params = useParams<{ id: string }>();
  return <BlogPost params={params} />;
}
