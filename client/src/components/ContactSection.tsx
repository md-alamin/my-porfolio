import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:md.alamin.madrista@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  md.alamin.madrista@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+8801684108961">
                  <Phone className="mr-2 h-4 w-4" />
                  +880 1684 108961
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://www.linkedin.com/in/mohammad-al-amin-584158102/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Mohammad Al-Amin
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}