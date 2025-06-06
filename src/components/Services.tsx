
import { Mic, Heart, Brain, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice Companion",
      description: "24/7 empathetic AI support through natural voice conversations in your preferred language.",
      color: "from-waridi-purple to-waridi-purple-dark"
    },
    {
      icon: Heart,
      title: "Cultural Awareness",
      description: "Rooted in African values and understanding, respecting your cultural context and community.",
      color: "from-waridi-pink to-waridi-pink-dark"
    },
    {
      icon: Brain,
      title: "Mindfulness Sessions",
      description: "Guided breathing exercises, meditation, and wellness practices tailored to your needs.",
      color: "from-waridi-green to-waridi-green-dark"
    },
    {
      icon: Shield,
      title: "Crisis Support",
      description: "Immediate help when you need it most, with connections to local mental health resources.",
      color: "from-waridi-yellow to-waridi-yellow-dark"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voice Rafiki <span className="bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience mental wellness support designed with African communities in mind, powered by compassionate AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
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
