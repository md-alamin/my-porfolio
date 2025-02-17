import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Thesis Project</h3>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              "A portable device that will measure the macro-components available in soil using UV-Spectrophotometry technology"
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Supervisors:</span>
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Dr. Shamshad B. Quraishi (Chief Scientific Officer & Quality Manager, Atomic Energy Center)</li>
                <li>Dr. Md. Khalilur Rahman (Associate Professor, BRAC University)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
