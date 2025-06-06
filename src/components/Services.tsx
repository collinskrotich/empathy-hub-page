
import { Brain, Heart, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists specialized in various mental health areas.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Connect with others facing similar challenges in a supportive group environment.",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Couples Counseling",
      description: "Strengthen relationships and improve communication with professional guidance.",
      color: "text-red-500"
    },
    {
      icon: Lightbulb,
      title: "Wellness Programs",
      description: "Comprehensive programs focusing on mindfulness, stress management, and personal growth.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of evidence-based treatments and support services to help you achieve lasting mental wellness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 ${service.color} bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
