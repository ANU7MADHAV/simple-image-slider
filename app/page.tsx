"use client";

import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "20px auto",
      }}
    >
      <ImageSlider />
    </div>
  );
}
