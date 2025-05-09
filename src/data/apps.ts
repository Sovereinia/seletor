import type { App } from '../types'; // em apps.ts


export const apps: App[] = [
  {
    name: 'Mastodon',
    description: 'Rede social de microblog federada...',
    categories: ['social'],
    filters: {
      proposito: ['microblogging'],
      interoperabilidade: ['fediverso'],
      funcoes: ['minimalismo'],
      tipoDeInteracao: ['seguidores'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['grande'],
},
    banner: {
      src: './apps/Logo-Mastodon.png',
      alt: 'Banner do Mastodon'
    }
  },
  {
    name: 'Diaspora*',
    description: 'Rede descentralizada com foco em privacidade e controle pessoal.',
    categories: ['social'],
    filters: {
      proposito: ['social'],
      interoperabilidade: [],
      funcoes: ['minimalismo'],
      tipoDeInteracao: ['amigos'],
      audiencia: ['privado'],
      privacidade: ['privado'],
      externsoes: [],
      popularidade: ['ativo'],
},
    banner: {
      src: './apps/Logo-Diaspora.png',
      alt: 'Banner do Diaspora*'
    }
  },
  {
    name: 'Friendica',
    description: 'Plataforma social com ampla integração entre redes e personalização.',
    categories: ['social'],
    filters: {
      proposito: ['social', 'multi'],
      interoperabilidade: ['fediverso'],
      funcoes: ['customizacao'],
      tipoDeInteracao: ['amigos', 'grupo'],
      audiencia: ['privado'],
      privacidade: ['privado'],
      externsoes: ['alguns'],
      popularidade: ['ativo'],
},
    banner: {
      src: './apps/Logo-Friendica.png',
      alt: 'Banner do Friendica'
    }
  },
  {
    name: 'Pixelfed',
    description: 'Rede social descentralizada para compartilhamento de fotos.',
    categories: ['social'],
    filters: {
      proposito: ['foto'],
      interoperabilidade: ['fediverso'],
      funcoes: ['minimalismo'],
      tipoDeInteracao: ['seguidores'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['emergente'],
},
    banner: {
      src: './apps/Logo-Pixelfed.svg',
      alt: 'Banner do Pixelfed'
    }
  },
  {
    name: 'PeerTube',
    description: 'Plataforma de vídeo descentralizada com instâncias federadas.',
    categories: ['social'],
    filters: {
      proposito: ['video'],
      interoperabilidade: ['fediverso'],
      funcoes: [],
      tipoDeInteracao: ['seguidores'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['emergente'],
},
    banner: {
      src: './apps/Logo-Peertube.png',
      alt: 'Banner do PeerTube'
    }
  },
  {
    name: 'Lemmy',
    description: 'Plataforma federada para discussão em comunidades e fóruns.',
    categories: ['social'],
    filters: {
      proposito: ['forum'],
      interoperabilidade: ['fediverso'],
      funcoes: ['forum'],
      tipoDeInteracao: ['grupo'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['emergente'],
},
    banner: {
      src: './apps/Logo-Lemmy.png',
      alt: 'Banner do Lemmy'
    }
  },
  {
    name: 'Misskey',
    description: 'Rede social federada com foco em interações ricas e customização.',
    categories: ['social'],
    filters: {
      proposito: ['microblogging'],
      interoperabilidade: ['fediverso'],
      funcoes: ['midia-rica', 'customizacao'],
      tipoDeInteracao: ['seguidores'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['emergente'],
},
    banner: {
      src: './apps/Logo-Misskey.png',
      alt: 'Banner do Misskey'
    }
  },
  {
    name: 'Pleroma',
    description: 'Rede social leve e federada compatível com ActivityPub.',
    categories: ['social'],
    filters: {
      proposito: ['microblogging'],
      interoperabilidade: ['fediverso'],
      funcoes: ['customizacao'],
      tipoDeInteracao: ['seguidores'],
      audiencia: ['publico'],
      privacidade: ['publico'],
      externsoes: [],
      popularidade: ['ativo'],
},
    banner: {
      src: './apps/Logo-Pleroma.png',
      alt: 'Banner do Pleroma'
    }
  },
  {
    name: 'Hubzilla',
    description: 'Plataforma tudo-em-um com controle de identidade e múltiplos serviços.',
    categories: ['social'],
    filters: {
      proposito: ['multi', 'social'],
      interoperabilidade: ['fediverso'],
      funcoes: ['customizacao'],
      tipoDeInteracao: ['grupo', 'amigos'],
      audiencia: ['privado'],
      privacidade: ['publico', 'privado'],
      externsoes: ['alguns', 'publico'],
      popularidade: ['ativo'],
},
    banner: {
      src: './apps/Logo-Hubzilla.svg',
      alt: 'Banner do Hubzilla'
    }
  },
  {
    name: 'Matrix',
    description: 'Protocolo aberto de mensagens...',
    categories: ['messaging', 'tools'],
    filters: {
      tipo: ['mensagens'],
      dispositivos: ['todos'],
      uso: ['avançado']
    },
    banner: {
      src: './apps/Logo-Matrix.svg',
      alt: 'Banner do Matrix'
    }
  },
  // ...
];
