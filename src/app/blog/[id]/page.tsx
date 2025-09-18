import BlogPost from "@/components/blog/BlogPost";

export default function Blogs({ params }: { params: { id: string } }) {
  console.log(params);
  return <BlogPost params={params} />;
}
