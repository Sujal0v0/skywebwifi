import BlogPost from "@/components/blog/BlogPost";

export default function Blogs({ params }: { params: { id: string } }) {
  return <BlogPost params={params} />;
}
