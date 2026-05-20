import { IMAGES } from "@/assets/images";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hoverLift, springPresets } from "@/lib/motion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Link to={link} className="block h-full">
        <Card className="h-full transition-all duration-200 hover:shadow-lg border-border bg-card">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={springPresets.gentle}
    >
      <Card className="h-full bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">{name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {location}
              </CardDescription>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">{testimonial}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  description?: string;
  category: string;
  date: string;
  image: string;
  slug?: string;
}

export function BlogCard({
  title,
  excerpt,
  description,
  category,
  date,
  image,
  slug,
}: BlogCardProps) {
  const summary = description ?? excerpt;

  const content = (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg border-border bg-card">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={IMAGES[image as keyof typeof IMAGES] ?? image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3 text-muted-foreground">
            {summary}
          </CardDescription>
          <span className="mt-4 text-sm font-medium text-primary hover:underline inline-block">
            Read More →
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (slug) {
    return <Link to={`/blog/${slug}`}>{content}</Link>;
  }

  return content;
}

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={springPresets.snappy}
      className="flex flex-col items-center gap-3 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <p className="text-sm font-medium text-foreground">{text}</p>
    </motion.div>
  );
}
