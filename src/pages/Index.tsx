
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/ContentSection";
import { ImaginationCard } from "@/components/ImaginationsCard";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 container max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            I Don't Have the Answers. <br className="hidden md:block" />
            But I'm Asking Questions.
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium">I'm Ryan.</p>
            <p className="text-lg text-muted-foreground">
              I build things, often break things and sometimes even fix things.
              <br />
              Lately, I've become obsessed with how agents will shape the world beyond what the headlines say. For communities. For families. For individuals trying to get by.
            </p>
          </div>
          
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <ContentSection id="intro" title="Asking Better Questions" className="bg-muted/50">
        <p>
          I'm not here to pitch a product. I don't think I know the future. But I am looking hard at what's happening and wondering:
        </p>
        
        <ul className="list-disc pl-6 pt-2 space-y-2">
          <li>What's actually working in enterprise?</li>
          <li>What's really working at the local level?</li>
          <li>What's helping small business owners thrive?</li>
          <li>What's helping real people live better lives?</li>
          <li>What might come next?</li>
        </ul>
        
        <p className="pt-2">
          If you know the answers - or even better, if you've lived through something worth sharing - I want to connect with you.
        </p>
      </ContentSection>
      
      {/* Serious Side Projects Section */}
      <ContentSection id="serious-projects" title="Serious Side Projects I Care About" emoji="💡">
        <p className="mb-8">
          Here are some of the serious side projects I'm currently focusing on:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <h3 className="font-semibold">Preserving Local History</h3>
            <p className="text-muted-foreground">
              Actively working to digitize and ensure the long-term accessibility of vital Florissant, Missouri City Council records (1857-1973), currently vulnerable on microfilm.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Building OpenDMS</h3>
            <p className="text-muted-foreground">
              Developing an open-source debris management system to provide a transparent, efficient, and cost-effective alternative to proprietary solutions, aiming to deliver greater value for taxpayers.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">AI in Education</h3>
            <p className="text-muted-foreground">
              Focused on developing AI applications that enhance cognitive skills like thinking, memory, and focus, and exploring the potential of AI as a continuous learning companion.
            </p>
          </li>
        </ul>
      </ContentSection>

      {/* Personal Projects Section */}
      <ContentSection id="personal-projects" title="In my personal life, I'm working on..." emoji="❤️">
        <p className="mb-8">
          my daughters education, legacy work, and my own development.
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <h3 className="font-semibold">AI-Enhanced Learning</h3>
            <p className="text-muted-foreground">
              Using AI to create dynamic lesson plans and gather feedback with my daughters, fostering a more engaging learning experience.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Disaster Response Engagement</h3>
            <p className="text-muted-foreground">
              Staying active in disaster recovery to keep skills sharp and build a diverse professional network.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Building Sustainable Ventures</h3>
            <p className="text-muted-foreground">
              Developing tools and leveraging tech skills to create sustainable income streams.
            </p>
          </li>
        </ul>
      </ContentSection>
      
      {/* Challenge Section */}
      <ContentSection id="challenge" title="Challenge Me - or Help Me Build" emoji="🙋" className="bg-muted/50">
        <p>
          I don't want to work in isolation. I want to be wrong, early and often - and then make it better.
          So if you disagree, show me where.
          If you know how to make one of these ideas work better, I'm all ears.
          If you're building something similar, maybe we can help each other.
        </p>
        
      </ContentSection>
      
      {/* Thank You Section */}
      <ContentSection id="thank-you" title="Thank You" emoji="💌">
        <div className="space-y-6">
          <p>
            To the mentors, friends, critics, and strangers who've challenged my thinking or encouraged me to keep going - thank you.
          </p>
          
          <p className="flex items-center">
            <span className="mr-2">💬</span>
            To the open-source communities, thinkers who share freely, and everyone creating in public - you've made it possible for people like me to even try.
          </p>
          
          <div className="pt-6 border-t border-border/50">
            <p className="italic">
              This is not a polished brand. It's not a company pitch.
              <br />
              It's just a place to ask better questions, together.
            </p>
          </div>
        </div>
      </ContentSection>
      
      <div className="flex-grow" id="footer"></div>
      <Footer />
    </div>
  );
};

export default Index;
