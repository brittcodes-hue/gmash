import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Hammer,
  Users,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ROUTE_PATHS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import {
  springPresets,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { ContactForm } from "@/components/ContactForm";

const teamMembers = [
  {
    name: "Skyler",
    role: "Founder & Principal",
    image: IMAGES.HAPPY_FAMILY_1,
    bio: "Leading GMASH with over 15 years of real estate investment experience in Colorado.",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    image: IMAGES.HAPPY_FAMILY_2,
    bio: "Ensures every project runs smoothly from start to finish with meticulous attention to detail.",
  },
  {
    name: "Mike Thompson",
    role: "Head of Renovations",
    image: IMAGES.HAPPY_FAMILY_3,
    bio: "Expert contractor with 20+ years experience in high-end residential renovations.",
  },
  {
    name: "Jennifer Martinez",
    role: "Client Relations",
    image: IMAGES.HAPPY_FAMILY_4,
    bio: "Dedicated to providing exceptional service and support to every client.",
  },
];

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in every transaction and relationship.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we do, from property analysis to finished renovations.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community",
    description:
      "We believe in building equity and dignity for homeowners while creating value for investors.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We constantly seek creative solutions to help homeowners and maximize investment returns.",
  },
];

const stats = [
  { value: "500+", label: "Properties Transformed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$50M+", label: "Property Value Added" },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <motion.section
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={springPresets.gentle}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.RENOVATION_HERO_1}
            alt="GMASH Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              About GMASH
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Homes, Building Futures
            </h1>
            <p className="text-xl text-muted-foreground">
              Denver's trusted partner for fix and flip investing, foreclosure
              solutions, and quality renovations since 2011.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GMASH (Get Money And Stay Home) was founded with a simple
                  mission: help homeowners preserve their dignity while finding
                  solutions to their most challenging property situations.
                </p>
                <p>
                  What started as a foreclosure prevention company has grown
                  into a full-service real estate investment firm serving the
                  greater Denver metro area. We've helped hundreds of families
                  avoid foreclosure, transformed hundreds more distressed
                  properties into beautiful homes, and assisted investors in
                  building profitable portfolios.
                </p>
                <p>
                  Today, GMASH stands as a symbol of hope for homeowners facing
                  difficult circumstances and opportunity for investors seeking
                  strong returns in the Colorado real estate market.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, ...springPresets.gentle }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src={IMAGES.RENOVATION_HERO_2}
                  alt="Renovation project"
                  className="rounded-xl w-full h-48 object-cover"
                />
                <img
                  src={IMAGES.KITCHEN_RENOVATION_1}
                  alt="Kitchen renovation"
                  className="rounded-xl w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={IMAGES.INVESTMENT_PROPERTY_1}
                  alt="Investment property"
                  className="rounded-xl w-full h-32 object-cover"
                />
                <img
                  src={IMAGES.HAPPY_FAMILY_5}
                  alt="Happy family"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at GMASH
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              The dedicated professionals behind GMASH's success
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <Card className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose GMASH?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Licensed & Insured
                    </h3>
                    <p className="text-muted-foreground">
                      Fully licensed real estate investors and contractors. Your
                      project is protected with comprehensive insurance
                      coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Colorado-Based Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Deep knowledge of Denver metro market trends, regulations,
                      and neighborhoods. We live and work in the communities we
                      serve.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Proven Track Record
                    </h3>
                    <p className="text-muted-foreground">
                      Hundreds of homes transformed with years of proven success
                      in fix and flip projects, renovations, and property
                      investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Get In Touch
                </h3>
                <ContactForm defaultServiceType="general-inquiry" />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're facing foreclosure, planning a renovation, or
              looking to invest, GMASH is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to={ROUTE_PATHS.FORECLOSURE_HELP}>
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                  Call {CONTACT_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
