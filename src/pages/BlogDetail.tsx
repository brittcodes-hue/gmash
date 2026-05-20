import { IMAGES } from "@/assets/images";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/index";
import { fadeInUp, springPresets } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md text-center p-8">
          <CardHeader>
            <CardTitle className="text-2xl">Article Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  console.log(post);

  const postImage = IMAGES[post.image as keyof typeof IMAGES] ?? post.image;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <motion.section
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={springPresets.gentle}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={postImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                GMASH Team
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />5 min read
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.article
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl mb-8">
                <img
                  src={postImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="space-y-6 text-foreground">
                  {(() => {
                    const raw = (post.description ?? post.excerpt) as string;
                    const normalized = raw.replace(/\r\n/g, "\n").trim();
                    const paras = normalized
                      .split(/\n{2,}/)
                      .map((p) => p.replace(/\n+/g, " ").trim())
                      .filter(Boolean);
                    return paras.map((para, i) => <p key={i}>{para}</p>);
                  })()}
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                  <span className="text-muted-foreground">
                    Share this article:
                  </span>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>

            <motion.aside
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, ...springPresets.gentle }}
            >
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img
                            src={
                              IMAGES[related.image as keyof typeof IMAGES] ??
                              related.image
                            }
                            alt={related.title}
                            className="w-16 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(related.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.map((p) => p.category))).map(
                      (category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="cursor-pointer hover:bg-secondary"
                        >
                          {category}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this topic? Our team is here to help.
                  </p>
                  <ContactForm
                    defaultServiceType="general-inquiry"
                    className="space-y-3"
                  />
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Whether you're facing foreclosure, planning a renovation, or
              looking to invest, we're here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/foreclosure-help">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/renovation-services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
