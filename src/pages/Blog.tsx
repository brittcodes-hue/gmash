import { IMAGES } from "@/assets/images";
import { BlogCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/index";
import {
  fadeInUp,
  springPresets,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  Home,
  Search,
  Tag,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category)),
  );

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  console.log(filteredPosts);

  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <motion.section
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={springPresets.gentle}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.DENVER_SKYLINE_1}
            alt="Denver Colorado skyline with mountains"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate Investment Tips, Foreclosure Guides & Renovation
              Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore expert articles on fix and flip investing, project
              progress, foreclosure help in Colorado, and home renovation
              strategies from the GMASH team.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                All Articles
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <motion.div key={post.id} variants={staggerItem}>
                      <BlogCard
                        title={post.title}
                        excerpt={post.excerpt}
                        description={post.description}
                        category={post.category}
                        date={post.date}
                        image={post.image}
                        slug={post.slug}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">
                    No articles found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </Card>
              )}
            </motion.div>

            <motion.aside
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={springPresets.gentle}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    About GMASH
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    GMASH is a Denver-based real estate investment company
                    specializing in fix and flip projects, foreclosure
                    solutions, and property renovations. We help homeowners
                    preserve their homes and investors maximize value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Popular Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex gap-4">
                        <img
                          src={IMAGES[post.image as keyof typeof IMAGES]}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {post.category}
                          </Badge>
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm
                    defaultServiceType="general-inquiry"
                    className="space-y-4"
                  />
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={IMAGES.INVESTMENT_PROPERTY_1}
            alt="Real estate investment property"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're facing foreclosure, planning a renovation, or
              looking to invest, GMASH is here to help. Get your free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Call 720.663.7346
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
