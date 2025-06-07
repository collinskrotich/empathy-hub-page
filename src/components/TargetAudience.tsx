
import { GraduationCap, Briefcase, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TargetAudience = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "University and secondary school students navigating academic stress, relationships, and future uncertainties.",
      stats: "65% of students experience anxiety",
      color: "from-waridi-purple to-waridi-purple-dark"
    },
    {
      icon: Briefcase,
      title: "Young Professionals",
      description: "Early career individuals balancing work pressure, financial stress, and personal growth in urban environments.",
      stats: "Ages 22-35 most affected",
      color: "from-waridi-pink to-waridi-pink-dark"
    },
    {
      icon: Heart,
      title: "Caregivers",
      description: "Parents, family members, and community leaders caring for others while managing their own mental wellness.",
      stats: "70% of caregivers need support",
      color: "from-waridi-green to-waridi-green-dark"
    },
    {
      icon: Users,
      title: "Rural Communities",
      description: "Individuals in areas with limited access to mental health services, seeking culturally-relevant support.",
      stats: "80% lack mental health access",
      color: "from-waridi-yellow to-waridi-yellow-dark"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-waridi-green/10 via-white to-waridi-yellow/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We <span className="bg-gradient-to-r from-waridi-green-dark to-waridi-yellow-dark bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Voice Rafiki is designed for diverse Kenyan and African communities, 
            understanding the unique challenges each group faces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${audience.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {audience.description}
                </p>
                <div className="text-xs font-semibold text-waridi-purple-dark bg-waridi-purple/10 rounded-full px-3 py-1">
                  {audience.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Reaching Across <span className="text-waridi-purple-dark">Kenya & Africa</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From Nairobi to rural villages, from university campuses to family homes, 
              we're building bridges to mental wellness for every community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent mb-2">
                47 Counties
              </div>
              <div className="text-gray-600">Across Kenya</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-waridi-green-dark to-waridi-yellow-dark bg-clip-text text-transparent mb-2">
                2+ Languages
              </div>
              <div className="text-gray-600">Cultural Context</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-waridi-purple-dark to-waridi-pink-dark bg-clip-text text-transparent mb-2">
                24/7 Access
              </div>
              <div className="text-gray-600">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
