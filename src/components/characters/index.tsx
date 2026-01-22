import Image, { StaticImageData } from "next/image";
import charactersData from "./data/characters.json";
import carmelitaImg from "./assets/carmelita.png";
import chapelMaidImg from "./assets/chapel-maid.png";
import fleasImg from "./assets/fleas.png";
import forgeDaughterImg from "./assets/forge-daughter.png";
import garmondZazaImg from "./assets/garmond-zaza.png";
import grindleImg from "./assets/grindle.png";
import hornetImg from "./assets/boss_hornet.png";
import huntressImg from "./assets/huntress.png";
import laceImg from "./assets/lace.png";
import nuuImg from "./assets/nuu.png";
import phantomImg from "./assets/phantom.png";
import sethImg from "./assets/seth.png";
import shakraImg from "./assets/shakra.png";
import shermaImg from "./assets/sherma.png";
import trobbioImg from "./assets/trobbio.png";
import ornamentTop from "./assets/Dialogue_Top.webp";
import ornamentBottom from "./assets/Dialogue_Bottom.webp";

const imageMap = {
  hornet: hornetImg,
  lace: laceImg,
  seth: sethImg,
  sherma: shermaImg,
  shakra: shakraImg,
  nuu: nuuImg,
  huntress: huntressImg,
  grindle: grindleImg,
  "garmond-zaza": garmondZazaImg,
  "forge-daughter": forgeDaughterImg,
  fleas: fleasImg,
  "chapel-maid": chapelMaidImg,
  carmelita: carmelitaImg,
  phantom: phantomImg,
  trobbio: trobbioImg,
};

interface Character {
  id: number;
  name: string;
  role: "protagonist" | "boss" | "npc";
  description: string;
  image: string;
}

interface CharacterCardProps {
  id: number;
  name: string;
  characterImage: StaticImageData;
  ornamentTop: StaticImageData;
  ornamentBottom: StaticImageData;
}

function CharacterCard({
  id,
  name,
  characterImage,
  ornamentTop,
  ornamentBottom,
}: CharacterCardProps) {
  return (
    <a
      href={`/characters/${id}`}
      className="group flex flex-col items-center gap-8 cursor-pointer transition-transform hover:scale-105">
      <Image src={ornamentTop} alt="" className="w-full max-w-[320px] h-auto" />

      <div className="w-full flex flex-col items-center gap-9 relative">
        <div className="relative w-full aspect-square">
          <Image
            src={characterImage}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <h3 className="text-2xl font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </h3>
      </div>

      <Image
        src={ornamentBottom}
        alt=""
        className="w-full max-w-[320px] h-auto"
      />
    </a>
  );
}

export default function Characters() {
  const characters = charactersData as Character[];

  return (
    <main className="min-h-screen pt-32 px-8 pb-16">
      <h1 className="text-5xl font-bold text-center mb-16">Characters</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            characterImage={imageMap[character.image as keyof typeof imageMap]}
            ornamentTop={ornamentTop}
            ornamentBottom={ornamentBottom}
          />
        ))}
      </div>
    </main>
  );
}