"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroBackgroundProps {
  overlayOpacity?: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ overlayOpacity = 0.3 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const frameCount = 80;
  const currentFrameRef = useRef(0);
  const lastTimeRef = useRef(0);
  const fps = 24;
  const frameInterval = 1000 / fps;

  useEffect(() => {
    // Preload images progressively
    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/img/video_criando_${frameIndex}.jpg`;
        img.onload = () => {
          if (i === 0) {
            setFirstFrameLoaded(true);
          }
        };
        imagesRef.current[i] = img;
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!firstFrameLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (time: number) => {
      const deltaTime = time - lastTimeRef.current;

      if (deltaTime > frameInterval) {
        lastTimeRef.current = time - (deltaTime % frameInterval);

        const img = imagesRef.current[currentFrameRef.current];
        if (img && img.complete && img.naturalWidth !== 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const canvasAspect = canvas.width / canvas.height;
          const imgAspect = img.width / img.height;
          let drawWidth, drawHeight, offsetX, offsetY;

          if (canvasAspect > imgAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawWidth = canvas.height * imgAspect;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          currentFrameRef.current = (currentFrameRef.current + 1) % frameCount;
        }
      }

      requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [firstFrameLoaded]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ filter: "brightness(0.85) contrast(1.05)" }}
      />
      {/* Dynamic overlay controlled by props */}
      <div 
        className="absolute inset-0 bg-slate-900" 
        style={{ opacity: overlayOpacity }}
      />
      {/* Subtle radial gradient for central focus without making it too dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      {/* Subtle bottom gradient to blend with the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
    </div>
  );
};

export default HeroBackground;
