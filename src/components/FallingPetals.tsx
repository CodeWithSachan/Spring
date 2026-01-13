"use client";

export default function FallingPetals() {
  return (
    <>
      <div className="petal" style={{ left: "10%", animationDuration: "12s" }}>🌸</div>
      <div className="petal" style={{ left: "30%", animationDuration: "10s", animationDelay: "2s" }}>🌸</div>
      <div className="petal" style={{ left: "50%", animationDuration: "14s", animationDelay: "6s" }}>🌸</div>
      <div className="petal" style={{ left: "70%", animationDuration: "11s", animationDelay: "4s" }}>🌸</div>
      <div className="petal" style={{ left: "90%", animationDuration: "13s", animationDelay: "1s" }}>🌸</div>
    </>
  );
}
