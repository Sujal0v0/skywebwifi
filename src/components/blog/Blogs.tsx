import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Find the MAC Address of Your Device",
      excerpt:
        "Step-by-step instructions for locating the MAC address on any device, from smartphones to smart TVs, to connect smoothly to Skyweb Wi-Fi.",
      image: "/blogs/mac-address-guide.png",
      category: "Wi-Fi Tips",
      author: "Skyweb Support Team",
      date: "Sep 18, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Boost Your Home Wi-Fi Speed: Tips and Tricks",
      excerpt:
        "Learn practical ways to improve your Skyweb Wi-Fi performance, from router placement to channel optimization and device management.",
      image: "/blogs/wifi-speed-tips.png",
      category: "Networking",
      author: "Skyweb Tech Expert",
      date: "Sep 15, 2025",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Troubleshooting Common Skyweb Wi-Fi Issues",
      excerpt:
        "A comprehensive guide to fixing the most common connectivity problems with Skyweb Wi-Fi, including slow speeds, dropped connections, and device compatibility.",
      image: "/blogs/wifi-troubleshooting.png",
      category: "Support",
      author: "Skyweb Support Team",
      date: "Sep 12, 2025",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Understanding 2.4GHz vs 5GHz Wi-Fi Networks",
      excerpt:
        "Learn the differences between 2.4GHz and 5GHz bands, and how to choose the best option for your devices to optimize your Skyweb Wi-Fi experience.",
      image: "/blogs/wifi-bands-explained.png",
      category: "Networking",
      author: "Skyweb Tech Expert",
      date: "Sep 10, 2025",
      readTime: "6 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Development",
    "Design",
    "Community",
  ];
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Stay updated with the latest tips, trends, and insights on Wi-Fi,
              connectivity, and revenue optimization for your property.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-balance">
                Latest Articles
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover insights, tutorials, and stories from our community of
                developers and designers.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <Badge
                            variant="outline"
                            className="text-primary border-primary"
                          >
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl leading-tight hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>{" "}
                        <Button variant="outline" asChild>
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Stay Updated</CardTitle>
                  <CardDescription className="text-black">
                    Get the latest articles delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your email address"
                    className="bg-primary-foreground text-foreground border-0"
                  />
                  <Button>Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
