import type { App } from '../types'; // em apps.ts


export const apps: App[] = [
  {
    name: 'Mastodon',
    description: 'Uma rede social parecida com o Twitter, mas sem anúncios, sem algoritmo e com mais controle para quem usa.',
    longDescription: 'O Mastodon é uma rede social de microblog onde você pode publicar textos, imagens, vídeos e enquetes. Ele funciona por meio de várias instâncias independentes que se conectam entre si. Você escolhe em qual instância quer entrar, ou pode criar a sua. O feed é sempre cronológico, sem algoritmos nem anúncios, e cada comunidade tem suas próprias regras. Tudo isso faz do Mastodon uma rede mais aberta, tranquila e com foco na experiência do usuário.',
    features: [
      'Sem algoritmo: o feed é sempre cronológico',
      'Postagens com texto, imagens, vídeos e enquetes',
      'Você escolhe sua instância (ou pode criar a sua)'
    ],
    links: [
      { label: 'Crie sua conta', url: 'https://sovereinia.org/como-criar-uma-conta-no-mastodon/' },
      { label: 'Código Fonte', url: 'https://github.com/mastodon/mastodon' },
      { label: 'Auto-hospede o Mastodon', url: 'https://sovereinia.org/como-auto-hospedar-sua-propria-instancia-do-mastodon/' },
    ],
    categories: ['social'],
    alternatives: ['Twitter', 'X.com'],
    protocol: ['ActivityPub', 'Fediverso'],
    banner: {
      src: './apps/icons/mastodon.png',
      alt: 'Ícone do Mastodon'
    },
    modalBanner: {
      src: './apps/logos/mastodon.png',
      alt: 'Logo do Mastodon'
    }
  },


];
