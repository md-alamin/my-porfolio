import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileDown } from "lucide-react";

const NameAnimation = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[#F5F5F5] inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/5 via-transparent to-[#00ffff]/5" />

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              Hi, I'm{" "}
              <NameAnimation text="Md. Al-Amin" />
            </h1>
            <p className="text-xl text-[#00ffff]/90 leading-relaxed">
              Highly enthusiastic, organized, and motivated individual with strong time management and organizational skills.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#ff00ff]/90 to-[#00ffff]/90 hover:from-[#ff00ff] hover:to-[#00ffff] transition-all duration-300" 
              asChild
            >
              <a href="mailto:md.alamin.madrista@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#00ffff]/50 hover:border-[#ff00ff]/50 transition-all duration-300" 
              asChild
            >
              <a href="https://www.linkedin.com/in/mohammad-al-amin-584158102/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#ff00ff]/50 hover:border-[#00ffff]/50 transition-all duration-300"
              asChild
            >
              <a href="/Md. Al-Amin.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="overflow-hidden shadow-2xl border-2 border-[#F5F5F5]/20">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5F5F5]/10 via-[#F5F5F5]/10 to-transparent" />
              <img
                src="/pro_pic.jpg"
                alt="Md. Al-Amin"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}