export const sliceText = (text: string, length: number) => {
  if (text.length > length) {
    return text.slice(0, length) + '...';
  }
  return text;
};

export function getAlternativeIcon(name: string): string {
  const key = name.trim().toLowerCase();

  const iconMap: Record<string, string> = {
    twitter: 'alternatives/twitter.png',
    'x.com': 'alternatives/xcom.png',
  };
  const base = import.meta.env.BASE_URL;

  const finalPath = iconMap[key] ? `${base}${iconMap[key]}` : `${base}alternatives/default.png`;
  console.log(`Icon for ${name} →`, finalPath);
  return finalPath;
}
