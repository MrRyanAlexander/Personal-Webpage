
import { Github, Twitter, Linkedin, Globe, Link } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com/mrryana" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/mrryana" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/mrryana" },
    { name: "Website", icon: <Globe className="h-5 w-5" />, url: "https://linktr.ee/mrryana" },
  ];

  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={link.name}
            >
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">Built in St. Louis, dreaming wide.</p>
          <p className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} Ryan A.</p>
        </div>
      </div>
    </footer>
  );
}
