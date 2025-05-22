import type { App } from '../types'; // em apps.ts


export const apps: App[] = [
  {
    name: 'Mastodon',
    description: 'Rede social de microblog federada...',
    categories: ['social'],
    alternatives: ['Twitter', 'x.com', 'Tweetdeck'],
    banner: {
      src: './apps/Logo-Mastodon.png',
      alt: 'Banner do Mastodon'
    }
  },
  {
    name: 'Diaspora*',
    description: 'Rede descentralizada com foco em privacidade e controle pessoal.',
    categories: ['social'],
    alternatives: ['faTwitter', 'x.com', 'Tweetdeck'],
    banner: {
      src: './apps/Logo-Diaspora.png',
      alt: 'Banner do Diaspora*'
    }
  },
  {
    name: 'Friendica',
    description: 'Plataforma social com ampla integração entre redes e personalização.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Friendica.png',
      alt: 'Banner do Friendica'
    }
  },
  {
    name: 'Pixelfed',
    description: 'Rede social descentralizada para compartilhamento de fotos.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Pixelfed.svg',
      alt: 'Banner do Pixelfed'
    }
  },
  {
    name: 'PeerTube',
    description: 'Plataforma de vídeo descentralizada com instâncias federadas.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Peertube.png',
      alt: 'Banner do PeerTube'
    }
  },
  {
    name: 'Lemmy',
    description: 'Plataforma federada para discussão em comunidades e fóruns.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Lemmy.png',
      alt: 'Banner do Lemmy'
    }
  },
  {
    name: 'Misskey',
    description: 'Rede social federada com foco em interações ricas e customização.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Misskey.png',
      alt: 'Banner do Misskey'
    }
  },
  {
    name: 'Pleroma',
    description: 'Rede social leve e federada compatível com ActivityPub.',
    categories: ['social'],
    alternatives: ['Twitter', 'x.com', 'Tweetdeck'],
    banner: {
      src: './apps/Logo-Pleroma.png',
      alt: 'Banner do Pleroma'
    }
  },
  {
    name: 'Hubzilla',
    description: 'Plataforma tudo-em-um com controle de identidade e múltiplos serviços.',
    categories: ['social'],
    banner: {
      src: './apps/Logo-Hubzilla.svg',
      alt: 'Banner do Hubzilla'
    }
  },
  {
    name: 'Matrix',
    description: 'Protocolo aberto de mensagens...',
    categories: ['messaging', 'tools'],
    banner: {
      src: './apps/Logo-Matrix.svg',
      alt: 'Banner do Matrix'
    }
  },
  // ...
];
