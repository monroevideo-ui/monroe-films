import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Award, Camera, Sparkles } from "lucide-react";

export default function MonroeFilmsWebsite() {
  return (
    <div className="min-h-screen bg-black text-[#d4af37] font-serif">
      {/* HERO */}
      <section className="relative flex items-center justify-center h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl tracking-wide mb-6">
            MONROE FILMS
          </h1>
          <p className="text-lg md:text-xl text-[#f5e6b8] mb-8">
            Cinematic storytelling with a timeless soul
          </p>
          <p className="text-sm uppercase tracking-widest mb-10">
            Over 25 Years of Filmmaking Experience
          </p>
          <Button className="bg-[#d4af37] text-black hover:bg-[#f5e6b8] rounded-2xl px-8 py-6 text-lg">
            View Our Work
          </Button>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl mb-6">Our Story</h2>
            <p className="text-[#f5e6b8] leading-relaxed mb-4">
              Monroe Films was built on a love for classic cinema and modern visual
              storytelling. For over 25 years, we have captured moments with a
              nostalgic eye and a cinematic heart.
            </p>
            <p className="text-[#f5e6b8] leading-relaxed">
              With 14 years of dedicated wedding filmmaking, we understand how to
              tell real stories with elegance, emotion, and timeless beauty.
            </p>
          </div>
          <Card className="bg-neutral-900 border-[#d4af37]/30 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-4 text-[#f5e6b8]">
                <li className="flex items-center gap-3"><Award /> 25+ Years Filmmaking</li>
                <li className="flex items-center gap-3"><Film /> 14 Years Weddings</li>
                <li className="flex items-center gap-3"><Camera /> Cinematic Quality</li>
                <li className="flex items-center gap-3"><Sparkles /> Timeless Aesthetic</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-neutral-950 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-4">Our Services</h2>
          <p className="text-[#f5e6b8]">
            From intimate stories to bold productions
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {["Commercial", "Residential", "Sports", "Weddings"].map((service) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              className="border border-[#d4af37]/30 rounded-2xl p-6 text-center bg-black shadow-lg"
            >
              <h3 className="text-xl mb-2">{service}</h3>
              <p className="text-sm text-[#f5e6b8]">
                Cinematic visuals crafted with intention and story.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-6">Let’s Tell Your Story</h2>
          <p className="text-[#f5e6b8] mb-10">
            Reach out and let Monroe Films bring your vision to life.
          </p>
          <Button className="bg-[#d4af37] text-black hover:bg-[#f5e6b8] rounded-2xl px-10 py-6 text-lg">
            Contact Us
          </Button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#f5e6b8]/70 border-t border-[#d4af37]/20">
        © {new Date().getFullYear()} Monroe Films · Cinematic Storytelling
      </footer>
    </div>
  );
}
