// CustomCursor.js
import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setParticles((prevParticles) => [
        ...prevParticles,
        {
          id: Date.now(),
          x: mouseX,
          y: mouseY,
          binaryCode: generateBinaryCode(),
        },
      ]);
    };

    const updateParticles = () => {
      setParticles((prevParticles) => {
        const currentTime = Date.now();
        const updatedParticles = prevParticles.filter(
          (particle) => currentTime - particle.id < 500
        );
        return updatedParticles;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    const updateParticlesInterval = setInterval(updateParticles, 50);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(updateParticlesInterval);
    };
  }, []);

  const generateBinaryCode = () => {
    const binaryLength = 10; // Adjust the length of the binary code
    return Array.from({ length: binaryLength }, () =>
      Math.round(Math.random())
    ).join("");
  };

  return (
    <div className="custom-cursor">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `translate(-50%, -50%) scale(${calculateScale(particle.id)})`,
          }}
        >
          {particle.binaryCode}
        </div>
      ))}
    </div>
  );
};

const calculateScale = (particleId) => {
  const maxScale = 2; // Maximum scale factor
  const currentTime = Date.now();
  const elapsedTime = currentTime - particleId;
  const scale = 1 + (maxScale - 1) * (1 - Math.exp(-elapsedTime / 500)); // Adjust the decay speed
  return scale;
};

export default CustomCursor;
