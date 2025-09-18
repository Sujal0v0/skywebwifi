import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "How to Find the MAC Address of Your Device",
    excerpt:
      "Step-by-step instructions for locating the MAC address on any device, from smartphones to smart TVs, to connect smoothly to Skyweb Wi-Fi.",
    content: `
      <p>Finding your device's MAC address is essential for connecting to Skyweb Wi-Fi securely and efficiently. Every device has a unique MAC address that identifies it on a network.</p>
      
      <h2>Finding MAC Address on Smartphones</h2>
      <p>For iOS devices:</p>
      <ul>
        <li>Go to Settings → General → About</li>
        <li>Scroll down to Wi-Fi Address to see the MAC</li>
      </ul>
      <p>For Android devices:</p>
      <ul>
        <li>Go to Settings → About Phone → Status → Wi-Fi MAC Address</li>
      </ul>
      
      <h2>Finding MAC Address on Computers</h2>
      <p>For Windows:</p>
      <ul>
        <li>Open Command Prompt and type <code>getmac</code></li>
        <li>Your Wi-Fi adapter MAC address will be displayed</li>
      </ul>
      <p>For macOS:</p>
      <ul>
        <li>Go to System Preferences → Network → Advanced → Wi-Fi</li>
        <li>The MAC address is listed as "Wi-Fi Address"</li>
      </ul>
      
      <h2>Other Devices</h2>
      <p>Smart TVs, gaming consoles, and IoT devices often display the MAC address in network settings. Always check the device manual if needed.</p>
      
      <h2>Why It Matters</h2>
      <p>Using the correct MAC address ensures a smooth connection, improves security, and helps manage devices on Skyweb Wi-Fi.</p>
    `,
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
    content: `
      <p>Slow Wi-Fi can be frustrating. Fortunately, there are several ways to boost your Skyweb Wi-Fi speed and ensure reliable connectivity for all your devices.</p>
      
      <h2>Optimize Router Placement</h2>
      <p>Place your router in a central location, away from walls and obstructions. Avoid placing it near other electronics that may cause interference.</p>
      
      <h2>Choose the Right Band</h2>
      <p>Use 5GHz for high-speed, short-range connections, and 2.4GHz for broader coverage. Modern routers often support dual-band connections for optimal performance.</p>
      
      <h2>Manage Connected Devices</h2>
      <p>Too many devices on a single network can slow down your Wi-Fi. Disconnect unused devices or use Quality of Service (QoS) settings to prioritize bandwidth.</p>
      
      <h2>Update Firmware</h2>
      <p>Keep your router firmware up-to-date to benefit from performance improvements, security patches, and bug fixes.</p>
    `,
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
    content: `
      <p>Even with the best Wi-Fi setup, issues may arise. Here’s a guide to troubleshoot common Skyweb Wi-Fi problems.</p>
      
      <h2>Slow Wi-Fi</h2>
      <ul>
        <li>Check for devices consuming high bandwidth</li>
        <li>Restart your router to refresh connections</li>
        <li>Ensure you are connected to the optimal frequency band</li>
      </ul>
      
      <h2>Dropped Connections</h2>
      <ul>
        <li>Move closer to the router for better signal</li>
        <li>Check for firmware updates</li>
        <li>Reset network settings on the device</li>
      </ul>
      
      <h2>Device Compatibility</h2>
      <ul>
        <li>Confirm your device supports the Wi-Fi frequency</li>
        <li>Use correct security protocols (WPA2/WPA3)</li>
        <li>Check MAC filtering settings on the router</li>
      </ul>
      
      <h2>Contact Support</h2>
      <p>If issues persist, contact Skyweb Support for personalized assistance.</p>
    `,
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
    content: `
      <p>Modern Wi-Fi routers often operate on two frequency bands: 2.4GHz and 5GHz. Understanding the differences can help you choose the best network for your needs.</p>
      
      <h2>2.4GHz Band</h2>
      <p>Pros:</p>
      <ul>
        <li>Longer range, better coverage</li>
        <li>Better through walls and obstacles</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Slower speeds</li>
        <li>More crowded with interference from other devices</li>
      </ul>
      
      <h2>5GHz Band</h2>
      <p>Pros:</p>
      <ul>
        <li>Faster speeds for high-bandwidth activities</li>
        <li>Less interference from other devices</li>
      </ul>
      <p>Cons:</p>
      <ul>
        <li>Shorter range</li>
        <li>Weaker through walls and obstacles</li>
      </ul>
      
      <h2>Choosing the Right Band</h2>
      <p>Use 2.4GHz for general browsing and smart home devices, and 5GHz for streaming, gaming, and large file transfers.</p>
    `,
    image: "/blogs/wifi-bands-explained.png",
    category: "Networking",
    author: "Skyweb Tech Expert",
    date: "Sep 10, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params; // <-- fix
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <Badge variant="outline" className="text-accent border-accent">
                  {post.category}
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 pb-6 border-b">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      Published on {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
