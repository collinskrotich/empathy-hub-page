import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  quote: string;
  image?: string;  // Add this line
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Gloria Bwari",
      role: "Chief Executive Officer",
      description:
        "A seasoned healthcare leader passionate about mental wellness and digital innovation. Dr. Bwari drives Waridi Wellness's mission to make compassionate, evidence-based mental health support accessible to everyone.",
      quote:
        "Mental wellness is the foundation of every thriving community.",
      image: "/team/gloria.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Collins Rotich",
      role: "Chief Technology Officer",
      description:
        "A visionary technologist committed to human-centered design, Collins leads the development of Waridi Wellness's AI infrastructure, ensuring secure, empathetic, and scalable digital mental health solutions.",
      quote:
        "Technology should listen before it speaks — that's how empathy begins in code.",
      image: "/team/collins.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Andrew Karanja",
      role: "Chief Data Officer",
      description:
        "A data strategist dedicated to using insights responsibly, Andrew ensures Waridi Wellness leverages analytics to understand patterns in mental health and enhance user outcomes through precision and care.",
      quote:
        "Data has meaning only when it leads to human understanding.",
      image: "/team/karanja.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Dr. Suzanne Orido",
      role: "Product Manager",
      description:
        "A creative innovator blending psychology and technology, Dr. Orido ensures Waridi Wellness delivers intuitive, relatable experiences that meet users where they are — with empathy and simplicity.",
      quote:
        "Design is empathy translated into experience.",
      image: "/team/suzanne.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Carlos Kisangi",
      role: "Backend & Data Systems Lead",
      description:
        "An expert in systems architecture and data flow, Carlos builds the resilient backbone that powers Waridi Wellness, ensuring reliability, privacy, and insight-driven functionality.",
      quote:
        "Behind every line of code lies an opportunity to care better.",
      image: "/team/carlos.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Nyabuti Mainye",
      role: "Lead AI Engineer",
      description:
        "An AI engineer passionate about ethical and compassionate artificial intelligence, Nyabuti leads the design of Waridi's conversational models that understand and support users in moments that matter most.",
      quote:
        "AI becomes powerful when it learns to understand the human heart.",
      image: "/team/nyabuti.jpeg",  // Add appropriate filename
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  ];
      

  return (
    <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines medical expertise, technology innovation, and deep community knowledge to transform maternal health in Kenya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-waridi-pink/20 flex items-center justify-center text-waridi-purple-dark">
                          Image
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-center">
                      {member.name}
                    </h2>
                    <p className="text-sm text-gray-600 text-center mb-2">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {member.description}
                  </p>
                  
                  <blockquote className="italic text-center text-waridi-purple-dark mb-4">
                    "{member.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-waridi-purple-dark"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-waridi-purple-dark"
                      >
                        <TwitterIcon className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-waridi-purple-dark"
                      >
                        <MailIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;