import { protocolIcons } from '@/data/protocols.ts';
import { alternativeIcons } from '@/data/alternatives';


export const sliceText = (text: string, length: number) => {
  if (text.length > length) {
    return text.slice(0, length) + '...';
  }
  return text;
};

export function getProtocolInfo(name: string) {
  const key = name.trim().toLowerCase();
  const foundKey = Object.keys(protocolIcons).find(
    k => k.toLowerCase() === key
  );

  if (!foundKey) return null;

  const base = import.meta.env.BASE_URL;
  const { src, url, alt } = protocolIcons[foundKey];

  return {
    src: `${base}${src}`,
    url,
    alt,
  };
}

export function getAlternativeIcon(name: string): string {
  const key = name.trim().toLowerCase();
  const foundKey = Object.keys(alternativeIcons).find(
    k => k.toLowerCase() === key
  );

  const base = import.meta.env.BASE_URL;
  const finalPath = foundKey
    ? `${base}${alternativeIcons[foundKey]}`
    : `${base}alternatives/default.png`;

  console.log(`Icon for ${name} →`, finalPath);
  return finalPath;
}
