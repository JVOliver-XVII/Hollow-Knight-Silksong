import React from "react";
import Image, { StaticImageData } from "next/image";
import Divider from "@/src/components/ui/Divider";
import sectionsData from "./data/sections.json";
import promoImage from "./assets/promo.png";
import grottoImage from "./assets/01_grotto.png";
import laceImageFight from "./assets/11_lace.png";

interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

// Mapeamento de imagens
const imageMap: Record<string, StaticImageData> = {
  promo: promoImage,
  grotto: grottoImage, 
  lace: laceImageFight,
  // Adicione mais imagens conforme necessário
  // "placeholder-2": placeholder2Image,
  // "placeholder-3": placeholder3Image,
};

export default function MainSection() {
  return (
    <section className="px-32 py-16">
      <div className="max-w-7xl mx-auto space-y-24">
        {(sectionsData as Section[]).map((section, index) => (
          <React.Fragment key={section.id}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div
                className={`relative aspect-video overflow-hidden rounded-lg ${
                  section.imagePosition === "right" ? "order-1 md:order-2" : ""
                }`}>
                <Image
                  src={imageMap[section.image]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-radial z-10 pointer-events-none" />
              </div>

              <div
                className={`space-y-4 ${
                  section.imagePosition === "right" ? "order-2 md:order-1" : ""
                }`}>
                <h2 className="text-4xl font-bold text-(--text-color)">
                  {section.title}
                </h2>
                <p className="text-lg text-(--text-color) opacity-80 text-justify">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Divider entre seções, exceto a última */}
            {index < sectionsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
