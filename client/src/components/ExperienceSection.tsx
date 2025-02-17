import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "SEBPO",
      position: "Customer Service Officer",
      period: "March 2021 - Present",
    },
    {
      company: "Quantigo AI",
      position: "2nd Level Reviewer",
      period: "January 2020 - February 2021",
    },
    {
      company: "AugmedixBD",
      position: "Trainee Scribe",
      period: "November 2017 - May 2018",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{exp.position}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
