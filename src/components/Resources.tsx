
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, Phone, ExternalLink } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      type: "Guide",
      title: "Managing Stress in Urban Kenya",
      description: "Practical strategies for young professionals dealing with city life pressures.",
      icon: BookOpen,
      action: "Download PDF",
      color: "from-waridi-purple to-waridi-purple-dark"
    },
    {
      type: "Exercise",
      title: "4-7-8 Breathing Technique",
      description: "Audio-guided breathing exercise in English, Kiswahili, and Dholuo.",
      icon: Download,
      action: "Try Exercise",
      color: "from-waridi-pink to-waridi-pink-dark"
    },
    {
      type: "Directory",
      title: "Kenya Mental Health Providers",
      description: "Comprehensive list of mental health professionals across all 47 counties.",
      icon: ExternalLink,
      action: "View Directory",
      color: "from-waridi-green to-waridi-green-dark"
    },
    {
      type: "Helpline",
      title: "Crisis Support Numbers",
      description: "24/7 emergency mental health contacts for immediate assistance.",
      icon: Phone,
      action: "Get Numbers",
      color: "from-waridi-yellow to-waridi-yellow-dark"
    }
  ];

  const blogPosts = [
    {
      title: "Why Voice-Based Therapy Works for African Communities",
      excerpt: "Exploring how oral traditions and storytelling enhance mental wellness support.",
      readTime: "5 min read",
      category: "Research"
    },
    {
      title: "Ubuntu and Mental Health: Community Care Practices",
      excerpt: "Traditional African values of community support in modern mental wellness.",
      readTime: "7 min read",
      category: "Culture"
    },
    {
      title: "Breaking Mental Health Stigma in Rural Kenya",
      excerpt: "Stories and strategies from community health workers making a difference.",
      readTime: "6 min read",
      category: "Community"
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wellness <span className="bg-gradient-to-r from-waridi-green-dark to-waridi-yellow-dark bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free mental health resources, guides, and tools to support your wellness journey and connect you with local help.
          </p>
        </div>
        
        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {resource.type}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {resource.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-waridi-purple text-waridi-purple-dark hover:bg-waridi-purple/10"
                >
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Section */}
        <div className="bg-gradient-to-br from-waridi-purple/5 to-waridi-pink/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Latest from Our <span className="text-waridi-purple-dark">Blog</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, stories, and research on mental wellness in African communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-waridi-purple-dark uppercase tracking-wide mb-2">
                    {post.category}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-waridi-purple-dark hover:bg-waridi-purple/10">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline"
              className="border-waridi-purple text-waridi-purple-dark hover:bg-waridi-purple/10"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
