import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  filename: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Blog posts data - you can expand this with more metadata
  const blogData: Omit<BlogPost, 'content'>[] = [
    {
      id: "caregiver-burnout",
      title: "Caregiver Burnout: When Caring for Others Leaves You Empty",
      filename: "Caregiver burnout Waridi.txt",
      date: "2024-01-15",
      readTime: "8 min read"
    },
    {
      id: "emotional-first-aid",
      title: "Emotional First Aid: The Simple Tricks to Stop Small Hurts From Becoming Big Scars",
      filename: "Emotional first aid Waridi .txt",
      date: "2024-01-12",
      readTime: "6 min read"
    },
    {
      id: "therapy-for-everyone",
      title: "Think Therapy Isn't for You? Here's Why Everyone Needs It (Yes, Even You)",
      filename: "Why therapy is for everyone .txt",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: "exercise-mental-health",
      title: "The Workout Secret No One Told You: How Exercise Can Heal Your Mind",
      filename: "Exercise Waridi.txt",
      date: "2024-01-08",
      readTime: "5 min read"
    },
    {
      id: "heartbreak-healing",
      title: "The Breakup Survival Kit: Mental Hacks to Heal a Broken Heart Faster",
      filename: "Heartbreak Waridi .txt",
      date: "2024-01-05",
      readTime: "6 min read"
    },
    {
      id: "loneliness-connection",
      title: "Feeling Lonely? Here's the Shocking Power of Community for Mental Health",
      filename: "Loneliness Waridi.txt",
      date: "2024-01-03",
      readTime: "5 min read"
    },
    {
      id: "sleep-deprivation",
      title: "Sleep Deprived? Your Brain Might Be Begging for Help",
      filename: "Sleep Deprivation Waridi .txt",
      date: "2024-01-01",
      readTime: "6 min read"
    },
    {
      id: "social-media-wellness",
      title: "Is Social Media Quietly Destroying Your Mental Health? Read This Before You Scroll Again",
      filename: "Social media Waridi .txt",
      date: "2023-12-28",
      readTime: "7 min read"
    },
    {
      id: "sunlight-mental-health",
      title: "Craving Happiness? The Sun Might Be the Antidepressant You're Missing",
      filename: "Sunlight for mental health .txt",
      date: "2023-12-25",
      readTime: "4 min read"
    },
    {
      id: "tiny-habits",
      title: "Tiny Habits That Quietly Rewire Your Brain for Happiness",
      filename: "Tiny habits Waridi .txt",
      date: "2023-12-22",
      readTime: "5 min read"
    }
  ];

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setError(null);
        const postsWithContent = await Promise.all(
          blogData.map(async (post) => {
            try {
              // Try to fetch from the public/blogs directory
              const response = await fetch(`/blogs/${encodeURIComponent(post.filename)}`);
              
              if (!response.ok) {
                throw new Error(`Failed to load ${post.filename}: ${response.status}`);
              }
              
              const content = await response.text();
              return {
                ...post,
                content: content.trim()
              };
            } catch (error) {
              console.error(`Error loading ${post.filename}:`, error);
              // Return a fallback content for this post
              return {
                ...post,
                content: `Content for "${post.title}" is currently unavailable. Please check back later.`
              };
            }
          })
        );
        setBlogPosts(postsWithContent);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setError("Failed to load blog posts. Please refresh the page to try again.");
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.trim() === '') return <br key={index} />;
        
        // Handle headers (lines that are all caps or start with specific patterns)
        if (line.match(/^[A-Z\s]+$/) && line.length > 10) {
          return <h2 key={index} className="text-2xl font-bold text-waridi-purple-dark mt-8 mb-4">{line}</h2>;
        }
        
        // Handle bullet points
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
          return <li key={index} className="ml-4 mb-2">{line.trim().substring(1).trim()}</li>;
        }
        
        // Handle numbered lists
        if (line.match(/^\d+\./)) {
          return <li key={index} className="ml-4 mb-2">{line.trim()}</li>;
        }
        
        // Handle separators
        if (line.trim() === '⸻') {
          return <hr key={index} className="my-6 border-waridi-pink/30" />;
        }
        
        // Regular paragraphs
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-waridi-purple-dark"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-waridi-pink-dark to-waridi-purple-dark hover:from-waridi-pink to-waridi-purple text-white"
          >
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              onClick={() => setSelectedPost(null)}
              variant="ghost"
              className="mb-6 text-waridi-purple-dark hover:text-waridi-purple"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            
            <article className="bg-white rounded-lg shadow-lg p-8">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedPost.readTime}
                  </div>
                </div>
              </header>
              
              <div className="prose prose-lg max-w-none">
                {formatContent(selectedPost.content)}
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-waridi-pink/20 via-white to-waridi-purple/20">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and stories to support your mental health and wellness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-600 text-sm space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.content.substring(0, 150)}...
                  </p>
                  <div className="mt-4">
                    <span className="text-waridi-purple-dark font-medium text-sm">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
