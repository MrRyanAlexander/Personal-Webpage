
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/ContentSection";
import { ImaginationCard } from "@/components/ImaginationsCard";
import { ContactSection } from "@/components/ContactSection";
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
              I build things, often break things and sometimes I fix things.
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
          If you know the answers — or even better, if you've lived through something worth sharing — I want to connect with you.
        </p>
      </ContentSection>
      
      {/* Imaginations Section */}
      <ContentSection id="imaginations" title="Imaginations Made Real" emoji="🧠">
        <p className="mb-8">
          I've been sketching, testing, and prototyping different ideas. Tiny tools. Strange use cases. Radical helpers for real life.
          Here are a few:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImaginationCard title="A chatbot that helps your city explain its rules in plain English" />
          <ImaginationCard title="A preparedness assistant that rewards families for completing home safety tasks" />
          <ImaginationCard title="An agent that can track and flag waste in government workflows" />
          <ImaginationCard title="A virtual neighborhood guide that explains local history through storytelling" />
        </div>
        
        <p className="mt-8">
          I'm sharing these not as polished solutions, but as open invitations. You might have a better idea. I hope you do.
        </p>
      </ContentSection>
      
      {/* Challenge Section */}
      <ContentSection id="challenge" title="Challenge Me — or Help Me Build" emoji="🙋" className="bg-muted/50">
        <p>
          I don't want to work in isolation. I want to be wrong, early and often — and then make it better.
          So if you disagree, show me where.
          If you know how to make one of these ideas work better, I'm all ears.
          If you're building something similar, maybe we can help each other.
        </p>
        
      </ContentSection>
      
      {/* Thank You Section */}
      <ContentSection id="thank-you" title="Thank You" emoji="💌">
        <div className="space-y-6">
          <p>
            To the mentors, friends, critics, and strangers who've challenged my thinking or encouraged me to keep going — thank you.
          </p>
          
          <p className="flex items-center">
            <span className="mr-2">💬</span>
            To the open-source communities, thinkers who share freely, and everyone creating in public — you've made it possible for people like me to even try.
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
