
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Belinda Achieng",
      role: "University Student, Kisumu",
      location: "Kisumu, Kenya",
      content: "I felt heard for the first time in weeks. Waridi's voice rafiki gave me space to breathe and helped me manage my exam anxiety. Speaking in Dholuo made it feel like talking to family.",
      avatar: "AO",
      rating: 5
    },
    {
      name: "Brian Korir",
      role: "Software Developer, Nairobi",
      location: "Nairobi, Kenya",
      content: "As a young professional dealing with work stress, having a culturally-aware AI companion has been life-changing. The voice sessions fit perfectly into my daily routine.",
      avatar: "KA",
      rating: 5
    },
    {
      name: "Fatuma Hassan",
      role: "Community Health Worker, Garissa",
      location: "Garissa, Kenya",
      content: "Being a caregiver in my community, I often forgot to care for myself. Waridi reminds me that my mental health matters too. The support feels genuine and respectful of our values.",
      avatar: "FH",
      rating: 5
    },
    {
      name: "Jared Onyancha",
      role: "Teacher, Keroka",
      location: "Keroka, Kisii",
      content: "The breathing exercises and mindfulness sessions have helped me manage stress from teaching during difficult times. It's like having a wise friend always available.",
      avatar: "TM",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-waridi-pink/10 to-waridi-purple/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories of <span className="bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark bg-clip-text text-transparent">Healing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real voices from across Kenya and Africa sharing how Waridi Wellness has supported their mental health journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-waridi-yellow-dark fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-waridi-purple to-waridi-pink text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-waridi-purple-dark">{testimonial.location}</div>
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
