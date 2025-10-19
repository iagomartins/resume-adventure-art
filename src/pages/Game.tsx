import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { resumeData } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trophy } from "lucide-react";
import gameBg from "@/assets/game-bg.png";
import iagoPixel from "@/assets/iago_pixel.png";

interface Position {
  x: number;
  y: number;
}

interface Zone {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  content: string[];
}

const spriteWidth = 146;
const spriteHeight = 313;

const Game = () => {
  const navigate = useNavigate();
  const [playerPos, setPlayerPos] = useState<Position>({ x: 50, y: 50 });
  const [currentZone, setCurrentZone] = useState<string | null>(null);
  const [visitedZones, setVisitedZones] = useState<Set<string>>(new Set());
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<string>("idle");
  const [animationFrame, setAnimationFrame] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [spriteImage, setSpriteImage] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Define zones for different resume sections
  const zones: Zone[] = useMemo(
    () => [
      {
        id: "skills",
        x: 20,
        y: 30,
        width: 20,
        height: 15,
        title: "Skills & Technologies",
        content: resumeData.mainSkills,
      },
      {
        id: "experience",
        x: 60,
        y: 30,
        width: 20,
        height: 15,
        title: "Work Experience",
        content: resumeData.experiences.map(
          (exp) => `${exp.role} at ${exp.company} (${exp.period})`
        ),
      },
      {
        id: "certifications",
        x: 20,
        y: 70,
        width: 20,
        height: 15,
        title: "Certifications",
        content: resumeData.certifications,
      },
      {
        id: "complete",
        x: 60,
        y: 70,
        width: 20,
        height: 15,
        title: "🎉 Tour Complete!",
        content: [
          "You've explored my entire portfolio!",
          "Thank you for visiting!",
        ],
      },
    ],
    []
  );

  // Check if player is in a zone
  const checkZone = useCallback(
    (pos: Position) => {
      for (const zone of zones) {
        if (
          pos.x >= zone.x &&
          pos.x <= zone.x + zone.width &&
          pos.y >= zone.y &&
          pos.y <= zone.y + zone.height
        ) {
          setCurrentZone(zone.id);
          setVisitedZones((prev) => new Set([...prev, zone.id]));

          // Check if all zones except complete are visited
          if (zone.id === "complete" && visitedZones.size >= zones.length - 1) {
            setGameCompleted(true);
          }
          return;
        }
      }
      setCurrentZone(null);
    },
    [visitedZones, zones]
  );

  // Track pressed keys
  useEffect(() => {
    const pressedKeys = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        pressedKeys.add("up");
      }
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        pressedKeys.add("down");
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        pressedKeys.add("left");
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        pressedKeys.add("right");
      }

      updateMovement(pressedKeys);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        pressedKeys.delete("up");
      }
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        pressedKeys.delete("down");
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        pressedKeys.delete("left");
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        pressedKeys.delete("right");
      }

      updateMovement(pressedKeys);
    };

    const updateMovement = (keys: Set<string>) => {
      const speed = 3;
      let direction = "idle";
      let moving = false;

      setPlayerPos((prev) => {
        const newPos = { ...prev };

        // Determine direction based on key combination
        if (keys.has("right") && keys.has("up")) {
          direction = "right-up"; // Row 3 (Third Quadrant)
          newPos.x = Math.min(90, prev.x + speed);
          newPos.y = Math.max(5, prev.y - speed);
          moving = true;
        } else if (keys.has("right") && keys.has("down")) {
          direction = "right-down"; // Row 1 (Second Quadrant)
          newPos.x = Math.min(90, prev.x + speed);
          newPos.y = Math.min(90, prev.y + speed);
          moving = true;
        } else if (keys.has("left") && keys.has("down")) {
          direction = "left-down"; // Row 0 (First Quadrant)
          newPos.x = Math.max(5, prev.x - speed);
          newPos.y = Math.min(90, prev.y + speed);
          moving = true;
        } else if (keys.has("left") && keys.has("up")) {
          direction = "left-up"; // Row 2 (Fourth Quadrant)
          newPos.x = Math.max(5, prev.x - speed);
          newPos.y = Math.max(5, prev.y - speed);
          moving = true;
        } else if (keys.has("right")) {
          direction = "right-down";
          newPos.x = Math.min(90, prev.x + speed);
          moving = true;
        } else if (keys.has("left")) {
          direction = "left-down";
          newPos.x = Math.max(5, prev.x - speed);
          moving = true;
        } else if (keys.has("up")) {
          direction = "left-up";
          newPos.y = Math.max(5, prev.y - speed);
          moving = true;
        } else if (keys.has("down")) {
          direction = "right-down";
          newPos.y = Math.min(90, prev.y + speed);
          moving = true;
        } else {
          direction = "idle";
          moving = false;
        }

        setCurrentDirection(direction);
        setIsMoving(moving);
        checkZone(newPos);
        return newPos;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [checkZone]);

  // Load sprite image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      console.log("Sprite image loaded:", {
        width: img.width,
        height: img.height,
      });
      setSpriteImage(img);
    };
    img.onerror = (error) => {
      console.error("Failed to load sprite image:", error);
    };
    img.src = iagoPixel;
  }, []);

  // Animation frame cycling
  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        setAnimationFrame((prev) => (prev + 1) % 3);
      }, 200);
      return () => clearInterval(interval);
    } else {
      setAnimationFrame(0);
    }
  }, [isMoving]);

  // Draw sprite on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !spriteImage) {
      console.log("Canvas or sprite image not ready:", {
        canvas: !!canvas,
        spriteImage: !!spriteImage,
      });
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("Could not get 2D context");
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, spriteWidth, spriteHeight);

    // Get sprite position
    const spritePos = getSpritePosition(currentDirection, animationFrame);
    console.log("Drawing sprite:", {
      direction: currentDirection,
      frame: animationFrame,
      spritePos,
      imageSize: { width: spriteImage.width, height: spriteImage.height },
    });

    // Draw the sprite frame
    ctx.imageSmoothingEnabled = false; // For pixelated rendering
    ctx.drawImage(
      spriteImage,
      spritePos.x,
      spritePos.y,
      spriteWidth,
      spriteHeight, // Source rectangle
      0,
      0,
      spriteWidth,
      spriteHeight // Destination rectangle
    );
  }, [spriteImage, currentDirection, animationFrame]);

  // Calculate sprite position based on direction and frame
  const getSpritePosition = (direction: string, frame: number) => {
    let row = 0;

    switch (direction) {
      case "left-down": // Row 0 (First Quadrant)
        row = 0;
        break;
      case "right-down": // Row 0  (Second Quadrant)
        row = 2;
        break;
      case "left-up": // Row 1 (Fourth Quadrant)
        row = 1;
        break;
      case "right-up": // Row 1 (Third Quadrant)
        row = 3;
        break;
      case "idle":
      default:
        row = 2; // Default to first row when idle
        break;
    }

    return {
      x: frame * spriteWidth, // Positive coordinates
      y: row * spriteHeight, // Positive coordinates
    };
  };

  const currentZoneData = zones.find((z) => z.id === currentZone);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background scanlines">
      {/* Game Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${gameBg})` }}
      />

      {/* Back Button */}
      <Button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 z-20 bg-card border-2 border-primary text-primary glow-purple"
        size="sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Menu
      </Button>

      {/* Progress */}
      <div className="absolute top-4 right-4 z-20 bg-card border-2 border-secondary px-4 py-2 glow-cyan">
        <div className="flex items-center gap-2 text-xs">
          <Trophy className="h-4 w-4 text-accent" />
          <span>
            {visitedZones.size}/{zones.length} Zones
          </span>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-screen w-full">
        {/* Zones (invisible markers) */}
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="absolute border-2 border-dashed border-primary/30 transition-all"
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.width}%`,
              height: `${zone.height}%`,
              backgroundColor: visitedZones.has(zone.id)
                ? "hsl(var(--primary) / 0.1)"
                : "hsl(var(--muted) / 0.05)",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-xs text-muted-foreground">
                {zone.title}
              </span>
            </div>
          </div>
        ))}

        {/* Player Character */}
        <div
          className="absolute transition-all duration-100 z-10"
          style={{
            left: `${playerPos.x}%`,
            top: `${playerPos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <canvas
            ref={canvasRef}
            width={126}
            height={291}
            style={{
              backgroundPosition: `${
                getSpritePosition(currentDirection, animationFrame).x
              }px ${getSpritePosition(currentDirection, animationFrame).y}px`,
              backgroundSize: "1184px 864px", // Total sprite sheet size (3 frames × 4 rows)
              backgroundRepeat: "no-repeat",
              imageRendering: "crisp-edges",
            }}
          />
        </div>
      </div>

      {/* Info Panel */}
      {currentZoneData && (
        <Card className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl bg-card border-4 border-primary p-6 glow-purple z-20 animate-fade-in">
          <h2 className="text-xl mb-4 text-primary">{currentZoneData.title}</h2>
          <div className="space-y-2">
            {currentZoneData.content.map((item, index) => (
              <p key={index} className="text-xs text-foreground">
                • {item}
              </p>
            ))}
          </div>
        </Card>
      )}

      {/* Completion Message */}
      {gameCompleted && (
        <div className="fixed inset-0 bg-background/90 flex items-center justify-center z-30 animate-fade-in">
          <Card className="max-w-md bg-card border-4 border-accent p-8 text-center glow-purple">
            <Trophy className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl mb-4 text-accent">Quest Complete!</h2>
            <p className="text-sm mb-6 text-foreground">
              You've successfully explored my entire portfolio. Thank you for
              taking the time!
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Contact: {resumeData.email}</p>
              <p>LinkedIn: {resumeData.linkedin}</p>
              <p>GitHub: {resumeData.github}</p>
            </div>
            <Button
              onClick={() => navigate("/")}
              className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Back to Menu
            </Button>
          </Card>
        </div>
      )}

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 bg-card border-2 border-secondary px-4 py-2 text-xs glow-cyan z-20">
        <p>Use Arrow Keys or WASD to move</p>
      </div>
    </div>
  );
};

export default Game;
