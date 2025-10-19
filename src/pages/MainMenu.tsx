import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resumeData";
import menuBg from "@/assets/menu-bg.png";

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden scanlines">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${menuBg})`,
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 p-8">
        {/* Title */}
        <div className="text-center animate-fade-in">
          <h1 className="mb-4 text-4xl md:text-6xl text-primary text-glow glow-purple">
            {resumeData.name}
          </h1>
          <p className="text-lg md:text-2xl text-secondary text-glow glow-cyan">
            {resumeData.title}
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="mb-4 text-center text-xl text-accent">Main Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {resumeData.mainSkills.slice(0, 6).map((skill, index) => (
              <div
                key={index}
                className="bg-card border-2 border-primary px-4 py-2 glow-purple"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="text-xs text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Play Button */}
        <Button
          onClick={() => navigate("/game")}
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 glow-purple border-4 border-primary/50 transition-all hover:scale-110 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          START GAME
        </Button>

        {/* Contact Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p>{resumeData.email}</p>
          <p>{resumeData.linkedin}</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
