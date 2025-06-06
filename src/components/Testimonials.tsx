
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Professional",
      content: "MindCare helped me navigate through my anxiety and depression. The therapist was incredibly understanding and provided practical tools that changed my life.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content: "The group sessions were exactly what I needed. Finding others who understood my struggles made all the difference in my recovery journey.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Teacher",
      content: "Professional, caring, and effective. The online platform made it so convenient to get the help I needed during a difficult time in my life.",
      avatar: "ED",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of Healing and Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people sharing their experiences with MindCare and how we've helped them on their mental health journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
