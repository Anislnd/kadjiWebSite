import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Computer, Briefcase, Building } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Administrative & Business",
      description:
        "Comprehensive training in business administration, management, and professional skills development.",
      features: ["Project Management", "Business Analysis", "Leadership Training", "Communication Skills"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced cybersecurity training covering modern threats, defense strategies, and security protocols.",
      features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Compliance"],
    },
    {
      icon: Computer,
      title: "Information Technology",
      description: "Cutting-edge IT training programs designed to meet industry demands and technological advancement.",
      features: ["Software Development", "Database Management", "Cloud Computing", "System Administration"],
    },
    {
      icon: Building,
      title: "Corporate Training",
      description: "Custom training programs designed specifically for company employees and professional development.",
      features: ["Team Building", "Skills Assessment", "Custom Curriculum", "On-site Training"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer certified professional training across multiple disciplines, designed to enhance your career
            prospects and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
