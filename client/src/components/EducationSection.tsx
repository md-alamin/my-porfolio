import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      institution: "BRAC University",
      degree: "B.Sc. in Electrical and Electronics Engineering",
      year: "2016",
    },
    {
      institution: "Maple Leaf International School",
      degree: "A Levels",
      year: "2011",
    },
    {
      institution: "Maple Leaf International School",
      degree: "O Levels",
      year: "2009",
    },
  ];

  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
