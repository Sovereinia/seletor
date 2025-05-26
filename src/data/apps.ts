import type { App } from '../types'; // em apps.ts


export const apps: App[] = [
    {
    name: 'PeerTube',
    description: 'Plataforma de vídeos parecida com o YouTube, mas sem centralização e com streaming entre instâncias.',
    longDescription: 'O PeerTube é uma plataforma de vídeos que funciona de forma descentralizada. Em vez de um único site como o YouTube, existem várias instâncias independentes que hospedam vídeos e se conectam entre si. Você pode assistir, comentar e até se inscrever em canais de outras instâncias. Um diferencial do PeerTube é o uso de tecnologia P2P (ponto a ponto) para ajudar no carregamento dos vídeos, especialmente em momentos com muitos acessos. Ele é ideal para quem quer compartilhar vídeos com mais liberdade e menos rastreamento.',
    features: [
      'Cada instância faz a customização e moderação como preferir',
      'Você pode seguir canais de outras instâncias',
      'Sem anúncios, rastreadores ou algoritmos de recomendação'
    ],
    links: [
      { label: 'Veja um exemplo', url: 'https://crianca.sovereinia.org' },
      { label: 'Código Fonte', url: 'https://github.com/Chocobozzz/PeerTube' },
      { label: 'Auto-hospede o PeerTube', url: 'https://docs.joinpeertube.org/install-peer-to-peer-video-platform' },
    ],
    categories: ['social', 'tools'],
    alternatives: ['YouTube', 'Vimeo'],
    protocol: ['ActivityPub', 'Fediverso'],
    banner: {
      src: './apps/icons/peertube.png',
      alt: 'Ícone do PeerTube'
    },
    modalBanner: {
      src: './apps/logos/peertube.png',
      alt: 'Logo do PeerTube'
    }
  },
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
  {
    name: 'Nextcloud',
    description: 'Alternativa ao Google Drive que permite salvar, compartilhar e sincronizar arquivos em um servidor próprio.',
    longDescription: 'O Nextcloud é uma plataforma completa para guardar e acessar seus arquivos pela internet, como se fosse um Google Drive privado. Com ele, você pode enviar documentos, fotos e vídeos, organizar pastas, compartilhar links e sincronizar tudo entre seus dispositivos. Também é possível ativar recursos extras como calendário, contatos, chat, vídeo chamadas e edição colaborativa de documentos. Tudo isso no seu próprio servidor, com total controle e sem depender de empresas terceiras.',
    features: [
      'Armazenamento e sincronização de arquivos entre dispositivos',
      'Compartilhamento com links públicos ou protegidos por senha',
      'Recursos extras como calendário, contatos, chat e edição de documentos'
    ],
    links: [
      { label: 'Acesse o site oficial', url: 'https://nextcloud.com/' },
      { label: 'Código Fonte', url: 'https://github.com/nextcloud/server' },
      { label: 'Auto-hospede o Nextcloud', url: 'https://docs.nextcloud.com/server/latest/admin_manual/installation/' },
    ],
    categories: ['tools'],
    alternatives: ['Google Drive', 'OneDrive', 'Dropbox'],
    protocol: ['WebDAV'],
    banner: {
      src: './apps/icons/nextcloud.png',
      alt: 'Ícone do Nextcloud'
    },
    modalBanner: {
      src: './apps/logos/nextcloud.png',
      alt: 'Logo do Nextcloud'
    }
},




];
