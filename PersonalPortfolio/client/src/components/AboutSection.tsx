import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground">
              Seeking a rewarding career that fosters mutual growth and prosperity for both myself and the company. I bring strong analytical skills, proficiency in English communication, and extensive experience in customer service and technical roles.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
