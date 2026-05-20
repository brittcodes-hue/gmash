import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Phone, Home as HomeIcon, Wrench, Building, Hammer, Star } from 'lucide-react';
import { ServiceCard, TestimonialCard, BlogCard, TrustBadge } from '@/components/Cards';
import { ContactForm } from '@/components/ContactForm';
import { ROUTE_PATHS, CONTACT_INFO } from '@/lib/index';
import { services, testimonials, blogPosts } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Home() {
  const iconMap: Record<string, React.ReactNode> = {
    Hammer: <Hammer className="w-8 h-8" />,
    Home: <HomeIcon className="w-8 h-8" />,
    Wrench: <Wrench className="w-8 h-8" />,
    Building: <Building className="w-8 h-8" />,
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.RENOVATION_HERO_1}
            alt="Modern home renovation showcasing GMASH transformation expertise"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              We Buy, Fix, and Transform Homes Across Colorado
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Expert fix and flip investing, foreclosure relief, and renovation
              consulting — helping homeowners and investors maximize value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-6"
              >
                <a href="#services">See Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Shield className="w-6 h-6" />}
                text="Licensed Investors"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<HomeIcon className="w-6 h-6" />}
                text="Colorado Based"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Users className="w-6 h-6" />}
                text="Hundreds of Homes Helped"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Award className="w-6 h-6" />}
                text="Free Consultations"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions for homeowners and investors
              across Colorado
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={iconMap[service.icon]}
                  link={service.link}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <img
                src={IMAGES.DENVER_SKYLINE_2}
                alt="Denver Colorado skyline with mountains representing GMASH local expertise"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl md:text-5xl font-bold">About GMASH</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GMASH is the amalgamation of two trusted Denver real estate
                partners: Colorado Real Estate Partners and Hackett Home Co.
                Together, we bring decades of combined experience in property
                investment, renovation, and community-focused real estate
                services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: help homeowners preserve their homes,
                reduce debt, and increase property value through expert
                consultation and hands-on investment services. Whether you're
                facing foreclosure, planning a renovation, or exploring
                investment opportunities, we're here to guide you with integrity
                and care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every homeowner deserves dignity, every property has
                potential, and every community is strengthened when we invest in
                its future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from Colorado homeowners and investors we've helped
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.slice(0, 3).map((testimonial) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={ROUTE_PATHS.REVIEWS}>Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips on real estate investing, foreclosure help, and home
              renovations
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.slice(0, 3).map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  image={post.image}
                  slug={post.slug}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={ROUTE_PATHS.BLOG}>View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get Your Free Consultation
                </h2>
                <p className="text-xl text-muted-foreground">
                  Whether you're facing foreclosure, planning a renovation, or
                  exploring investment opportunities, we're here to help. No
                  obligation, just honest guidance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Call Us Directly
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={IMAGES.HAPPY_FAMILY_2}
                    alt="Happy family in their home after GMASH helped them avoid foreclosure"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
