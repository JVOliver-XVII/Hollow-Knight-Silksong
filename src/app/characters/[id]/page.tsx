import Image from "next/image";
import charactersData from "../../../components/characters/data/characters.json";

// Importa TODAS as imagens dos personagens
import carmelitaImg from "../../../components/characters/assets/carmelita.png";
import chapelMaidImg from "../../../components/characters/assets/chapel-maid.png";
import fleasImg from "../../../components/characters/assets/fleas.png";
import forgeDaughterImg from "../../../components/characters/assets/forge-daughter.png";
import garmondZazaImg from "../../../components/characters/assets/garmond-zaza.png";
import grindleImg from "../../../components/characters/assets/grindle.png";
import hornetImg from "../../../components/characters/assets/hornet.png";
import huntressImg from "../../../components/characters/assets/huntress.png";
import laceImg from "../../../components/characters/assets/lace.png";
import nuuImg from "../../../components/characters/assets/nuu.png";
import phantomImg from "../../../components/characters/assets/phantom.png";
import sethImg from "../../../components/characters/assets/seth.png";
import shakraImg from "../../../components/characters/assets/shakra.png";
import shermaImg from "../../../components/characters/assets/sherma.png";
import trobbioImg from "../../../components/characters/assets/trobbio.png";

// Importa os ornamentos
import ornamentTop from "../../../components/characters/assets/Dialogue_Top.webp";
import ornamentBottom from "../../../components/characters/assets/Dialogue_Bottom.webp";

// Mapa de imagens
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

// Objeto que mapeia cada role para suas cores
const roleColors = {
  protagonist: "bg-yellow-500/20 text-yellow-300 border-yellow-500",
  boss: "bg-red-500/20 text-red-300 border-red-500",
  npc: "bg-blue-500/20 text-blue-300 border-blue-500",
};

const roleLabels = {
  protagonist: "Protagonist",
  boss: "Boss",
  npc: "NPC",
};

interface Ability {
  name: string;
  description: string;
}

interface ShopItem {
  name: string;
  description: string;
  currency: string;
  price: string | number;
}

interface Shop {
  items: ShopItem[];
}

interface Character {
  id: number;
  name: string;
  role: "protagonist" | "boss" | "npc";
  description: string;
  image: string;
  abilities?: Ability[];
  shop?: Shop;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const characters = charactersData as Character[];

  // Busca o personagem pelo ID
  const character = characters.find((c) => c.id === parseInt(id));

  // Se não encontrar, mostra mensagem de erro
  if (!character) {
    return (
      <main className="min-h-screen pt-32 px-8 pb-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Character not found</h1>
      </main>
    );
  }

  const characterImage = imageMap[character.image as keyof typeof imageMap];

  return (
    <main className="min-h-screen pt-32 px-8 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Seção superior: Imagem e Descrição */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Coluna da imagem com ornamentos */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
            {/* Ornamento superior */}
            <Image
              src={ornamentTop}
              alt=""
              className="w-full max-w-[400px] h-auto"
            />

            {/* Imagem do personagem */}
            <div className="relative w-full aspect-square">
              <Image
                src={characterImage}
                alt={character.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Ornamento inferior */}
            <Image
              src={ornamentBottom}
              alt=""
              className="w-full max-w-[400px] h-auto"
            />
          </div>

          {/* Informações do personagem */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 pt-8">
            {/* Nome */}
            <h1 className="text-5xl font-bold">{character.name}</h1>

            {/* Badge da role */}
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold border w-fit ${
                roleColors[character.role]
              }`}>
              {roleLabels[character.role]}
            </span>

            {/* Descrição */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {character.description}
            </p>

            {/* Botão para voltar */}
            <a
              href="/characters"
              className="mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors w-fit">
              ← Back to Characters
            </a>
          </div>
        </div>

        {/* Seção de Habilidades - agora abaixo */}
        {character.abilities && character.abilities.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-300 border-b-2 border-yellow-500/30 pb-2">
              ⚔️ Abilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {character.abilities.map((ability, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                    {ability.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {ability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Seção de Loja - agora abaixo */}
        {character.shop && character.shop.items.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-300 border-b-2 border-blue-500/30 pb-2">
              🛒 Shop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {character.shop.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/20 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-blue-200">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-green-300 whitespace-nowrap ml-4">
                      {item.price} {item.currency}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
