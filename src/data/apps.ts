import type { App } from '../types'; // em apps.ts


export const apps: App[] = [
    {
    name: 'PeerTube',
    description: 'Plataforma de vídeos parecida com o YouTube, mas sem centralização e com streaming entre instâncias.',
    longDescription: 'PeerTube é uma plataforma de vídeos que funciona de forma descentralizada. Em vez de um único site como o YouTube, existem várias instâncias independentes que hospedam vídeos e se conectam entre si. Você pode assistir, comentar e até se inscrever em canais de outras instâncias. Um diferencial do PeerTube é o uso de tecnologia P2P (ponto a ponto) para ajudar no carregamento dos vídeos, especialmente em momentos com muitos acessos. Ele é ideal para quem quer compartilhar vídeos com mais liberdade e menos rastreamento.',
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
      src: './apps/icons/peertube.svg',
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
    longDescription: 'Mastodon é uma rede social de microblog onde você pode publicar textos, imagens, vídeos e enquetes. Ele funciona por meio de várias instâncias independentes que se conectam entre si. Você escolhe em qual instância quer entrar, ou pode criar a sua. O feed é sempre cronológico, sem algoritmos nem anúncios, e cada comunidade tem suas próprias regras. Tudo isso faz do Mastodon uma rede mais aberta, tranquila e com foco na experiência do usuário.',
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
    longDescription: 'Nextcloud é uma plataforma completa para guardar e acessar seus arquivos pela internet, como se fosse um Google Drive privado. Com ele, você pode enviar documentos, fotos e vídeos, organizar pastas, compartilhar links e sincronizar tudo entre seus dispositivos. Também é possível ativar recursos extras como calendário, contatos, chat, vídeo chamadas e edição colaborativa de documentos. Tudo isso no seu próprio servidor, com total controle e sem depender de empresas terceiras.',
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
      src: './apps/icons/nextcloud.svg',
      alt: 'Ícone do Nextcloud'
    },
    modalBanner: {
      src: './apps/logos/nextcloud.png',
      alt: 'Logo do Nextcloud'
    }
},
{
  name: 'Vaultwarden',
  description: 'Gerenciador de senhas compatível com o Bitwarden, leve e fácil de auto-hospedar.',
  longDescription: 'Vaultwarden é uma alternativa leve ao Bitwarden, um dos gerenciadores de senhas mais populares. Com ele, você pode guardar senhas, logins, notas seguras e outras informações de forma criptografada, acessando tudo pelo navegador ou pelo app oficial do Bitwarden. A grande vantagem do Vaultwarden é que ele consome poucos recursos e é muito simples de instalar, ideal para quem quer controlar suas senhas em um servidor próprio, sem depender da nuvem de terceiros.',
  features: [
    'Compatível com os apps oficiais do Bitwarden',
    'Criptografia de ponta a ponta para senhas e dados sensíveis',
    'Consome poucos recursos e roda bem até em servidores simples'
  ],
  links: [
    { label: 'Código Fonte', url: 'https://github.com/dani-garcia/vaultwarden' },
    { label: 'Auto-hospede o Vaultwarden', url: 'https://github.com/dani-garcia/vaultwarden/wiki/Installation' },
  ],
  categories: ['tools'],
  alternatives: ['Google Password Manager'],
  banner: {
    src: './apps/icons/vaultwarden.png',
    alt: 'Ícone do Vaultwarden'
  },
  modalBanner: {
    src: './apps/logos/vaultwarden.png',
    alt: 'Logo do Vaultwarden'
  }
},
{
  name: 'Passbolt',
  description: 'Gerenciador de senhas focado em uso colaborativo por equipes e empresas.',
  longDescription: 'Passbolt é um gerenciador de senhas feito especialmente para times. Ele permite compartilhar senhas com segurança entre colegas de equipe, com controle de permissões e registro de atividades. Todas as senhas são criptografadas de ponta a ponta, e o acesso é feito pelo navegador usando uma extensão. É uma boa escolha para empresas ou grupos que precisam gerenciar credenciais em conjunto, mas ainda assim com total controle por estar rodando no seu próprio servidor.',
  features: [
    'Compartilhamento seguro de senhas entre membros da equipe',
    'Controle de permissões e registros de acesso',
    'Interface web com autenticação por chave privada'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.passbolt.com/' },
    { label: 'Código Fonte', url: 'https://github.com/passbolt/passbolt_api' },
    { label: 'Auto-hospede o Passbolt', url: 'https://www.passbolt.com/help/tech/install' },
  ],
  categories: ['tools'],
  alternatives: ['Google Password Manager'],
  banner: {
    src: './apps/icons/passbolt.svg',
    alt: 'Ícone do Passbolt'
  },
  modalBanner: {
    src: './apps/logos/passbolt.png',
    alt: 'Logo do Passbolt'
  }
},

{
  name: 'Element',
  description: 'Aplicativo de mensagens seguro e descentralizado, baseado no protocolo Matrix.',
  longDescription: 'Element é um app de mensagens parecido com o WhatsApp ou o Telegram, mas com uma grande diferença: ele usa o protocolo aberto Matrix, que permite comunicação entre servidores diferentes. Você pode criar salas públicas ou privadas, enviar arquivos, fazer chamadas de voz e vídeo, e até conversar com pessoas em outros serviços (como Slack, Discord ou Telegram via ponte). O Element pode ser usado em servidores públicos ou no seu próprio, oferecendo privacidade e controle total sobre os dados.',
  features: [
    'Mensagens, arquivos, chamadas de voz e vídeo',
    'Criação de salas públicas ou privadas',
    'Compatível com Telegram, Discord, Slack, etc via ponte (bridges)'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://element.io/' },
    { label: 'Código Fonte', url: 'https://github.com/vector-im/element-web' },
    { label: 'Auto-hospede o Element', url: 'https://element.io/help/install' },
  ],
  categories: ['messaging'],
  alternatives: ['WhatsApp', 'Telegram', 'Slack'],
  protocol: ['Matrix'],
  banner: {
    src: './apps/icons/element.svg',
    alt: 'Ícone do Element'
  },
  modalBanner: {
    src: './apps/logos/element.png',
    alt: 'Logo do Element'
  }
},
{
  name: 'Lemmy',
  description: 'Plataforma de fóruns e comunidades, parecida com o Reddit, mas descentralizada e sem rastreamento.',
  longDescription: 'Lemmy é uma rede de fóruns em formato de comunidades temáticas, onde qualquer pessoa pode postar links, textos e iniciar discussões. Ele funciona de forma federada, com várias instâncias que se conectam entre si, como no Mastodon. Cada instância pode ter suas próprias regras, mas você pode participar de comunidades de outras instâncias sem precisar criar várias contas. É uma ótima alternativa ao Reddit para quem busca mais privacidade e liberdade.',
  features: [
    'Comunidades temáticas com votação por votos positivos ou negativos',
    'Federação entre instâncias via ActivityPub',
    'Interface simples, leve e sem rastreadores'
  ],
  links: [
    { label: 'Veja uma instância', url: 'https://join-lemmy.org/instances' },
    { label: 'Código Fonte', url: 'https://github.com/LemmyNet/lemmy' },
    { label: 'Auto-hospede o Lemmy', url: 'https://join-lemmy.org/docs/en/administration/install/' },
  ],
  categories: ['social'],
  alternatives: ['Reddit', 'Hacker News'],
  protocol: ['ActivityPub', 'Fediverso'],
  banner: {
    src: './apps/icons/lemmy.svg',
    alt: 'Ícone do Lemmy'
  },
  modalBanner: {
    src: './apps/logos/lemmy.png',
    alt: 'Logo do Lemmy'
  }
},

{
  name: 'Jitsi Meet',
  description: 'Ferramenta de videoconferência segura e sem necessidade de cadastro, ideal para reuniões rápidas.',
  longDescription: 'Jitsi Meet é uma plataforma de chamadas de vídeo que funciona direto do navegador, sem precisar instalar nada ou criar conta. É uma alternativa ao Zoom e ao Google Meet, com foco em privacidade e facilidade de uso. Você pode hospedar sua própria instância para ter total controle das reuniões. Ele permite compartilhar a tela, conversar por chat, gravar reuniões e proteger salas com senha. É ideal para equipes, aulas e reuniões online.',
  features: [
    'Chamadas de vídeo e áudio direto no navegador',
    'Compartilhamento de tela e chat integrado',
    'Salas protegidas por senha, sem cadastro obrigatório'
  ],
  links: [
    { label: 'Use no site oficial', url: 'https://meet.jit.si/' },
    { label: 'Código Fonte', url: 'https://github.com/jitsi/jitsi-meet' },
    { label: 'Auto-hospede o Jitsi Meet', url: 'https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart' },
  ],
  categories: ['tools'],
  alternatives: ['Zoom', 'Google Meet'],
  protocol: ['WebRTC'],
  banner: {
    src: './apps/icons/jitsi.png',
    alt: 'Ícone do Jitsi Meet'
  },
  modalBanner: {
    src: './apps/logos/jitsi.png',
    alt: 'Logo do Jitsi Meet'
  }
},

{
  name: 'BookStack',
  description: 'Plataforma de documentação e anotações em formato de livros e páginas, ideal para equipes ou uso pessoal.',
  longDescription: 'BookStack é uma ferramenta para organizar conhecimento em formato de livros, capítulos e páginas. Pode ser usada para criar manuais, wikis, documentações técnicas ou anotações pessoais. A interface é simples e funciona direto no navegador, com suporte a permissões por usuário, histórico de edições e editor visual. Por ser auto-hospedado, você tem controle total sobre o conteúdo e pode adaptar para uso individual ou em equipe.',
  features: [
    'Organização por livros, capítulos e páginas',
    'Editor visual com histórico de alterações',
    'Controle de acesso por usuários e permissões'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.bookstackapp.com/' },
    { label: 'Código Fonte', url: 'https://github.com/BookStackApp/BookStack' },
    { label: 'Auto-hospede o BookStack', url: 'https://www.bookstackapp.com/docs/admin/installation/' },
  ],
  categories: ['tools'],
  alternatives: ['Confluence', 'Notion', 'MediaWiki'],
  banner: {
    src: './apps/icons/bookstack.svg',
    alt: 'Ícone do BookStack'
  },
  modalBanner: {
    src: './apps/logos/bookstack.png',
    alt: 'Logo do BookStack'
  }
},
{
  name: 'RSSHub',
  description: 'Gerador de feeds RSS para sites que não oferecem suporte nativo, ideal para acompanhar tudo em um só lugar.',
  longDescription: 'RSSHub permite criar feeds RSS de praticamente qualquer site, mesmo aqueles que não oferecem essa função. Com ele, você pode acompanhar atualizações de redes sociais, blogs, fóruns, lojas online e muito mais, tudo em um leitor de RSS. É uma ótima ferramenta para centralizar notícias e evitar o uso de redes sociais para se manter informado. Por ser auto-hospedado, você tem controle sobre quais fontes seguir e pode evitar rastreadores.',
  features: [
    'Cria feeds RSS para sites que não têm suporte nativo',
    'Funciona com redes sociais, e-commerces, blogs e fóruns',
    'Permite personalizar e filtrar os conteúdos recebidos'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://rsshub.app/' },
    { label: 'Código Fonte', url: 'https://github.com/DIYgod/RSSHub' },
    { label: 'Auto-hospede o RSSHub', url: 'https://docs.rsshub.app/install/' },
  ],
  categories: ['tools'],
  alternatives: ['Newsletters'],
  protocol: ['RSS'],
  banner: {
    src: './apps/icons/rsshub.svg',
    alt: 'Ícone do RSSHub'
  },
  modalBanner: {
    src: './apps/logos/rsshub.png',
    alt: 'Logo do RSSHub'
  }
},
{
  name: 'Discourse',
  description: 'Plataforma moderna de fóruns, com suporte a login social, notificações e interface parecida com apps de chat.',
  longDescription: 'Discourse é uma ferramenta de fórum com visual moderno e recursos atuais. Pode ser usada para criar comunidades, grupos de suporte, áreas de discussão interna e muito mais. Ele suporta login com redes sociais, envio de notificações por e-mail, sistema de menções e organização por categorias. Além disso, é responsivo, funcionando bem em celulares. Como é auto-hospedado, você pode configurar do seu jeito, com regras próprias e controle total da base de usuários.',
  features: [
    'Fóruns organizados por categorias e com sistema de reputação',
    'Interface moderna com suporte a menções, markdown e notificações',
    'Funciona bem em celulares e permite login social (opcional)'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.discourse.org/' },
    { label: 'Código Fonte', url: 'https://github.com/discourse/discourse' },
    { label: 'Auto-hospede o Discourse', url: 'https://github.com/discourse/discourse/blob/main/docs/INSTALL-cloud.md' },
  ],
  categories: ['social', 'tools'],
  alternatives: ['Reddit', 'Facebook Groups'],
  banner: {
    src: './apps/icons/discourse.svg',
    alt: 'Ícone do Discourse'
  },
  modalBanner: {
    src: './apps/logos/discourse.png',
    alt: 'Logo do Discourse'
  }
},

{
  name: 'Pixelfed',
  description: 'Rede social para compartilhar fotos, parecida com o Instagram, mas sem anúncios nem rastreamento.',
  longDescription: 'Pixelfed é uma rede social para fotos e vídeos curtos, pensada para quem quer compartilhar imagens com privacidade e controle. Ele tem um visual parecido com o Instagram, com feed, curtidas e comentários, mas sem algoritmos nem publicidade. Assim como o Mastodon, o Pixelfed funciona em várias instâncias que se comunicam entre si. Você pode seguir e ser seguido por pessoas de outras instâncias do Fediverso, tudo com código aberto e sem depender de empresas centralizadas.',
  features: [
    'Feed de fotos com curtidas, comentários e stories',
    'Sem anúncios, rastreadores ou algoritmo de recomendação',
    'Funciona em várias instâncias que se conectam entre si'
  ],
  links: [
    { label: 'Veja uma instância', url: 'https://pixelfed.org/instances' },
    { label: 'Código Fonte', url: 'https://github.com/pixelfed/pixelfed' },
    { label: 'Auto-hospede o Pixelfed', url: 'https://docs.pixelfed.org/install/' },
  ],
  categories: ['social'],
  alternatives: ['Instagram'],
  protocol: ['ActivityPub', 'Fediverso'],
  banner: {
    src: './apps/icons/pixelfed.svg',
    alt: 'Ícone do Pixelfed'
  },
  modalBanner: {
    src: './apps/logos/pixelfed.png',
    alt: 'Logo do Pixelfed'
  }
},

{
  name: 'Signal',
  description: 'Mensageiro com foco em privacidade, com criptografia de ponta a ponta e sem rastreamento.',
  longDescription: 'Signal é um aplicativo de mensagens que prioriza a segurança e a privacidade. Todas as conversas são protegidas por criptografia de ponta a ponta, e nenhum dado é armazenado além do necessário. Você pode trocar mensagens, fazer chamadas de voz e vídeo, criar grupos e enviar arquivos. O app oficial usa servidores da própria organização, mas também é possível hospedar seu próprio servidor Signal para ter controle total sobre os dados. É usado por pessoas e organizações que valorizam a confidencialidade.',
  features: [
    'Criptografia de ponta a ponta por padrão',
    'Chamadas de voz e vídeo seguras',
    'Sem anúncios, rastreamento ou coleta de dados pessoais'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://signal.org/' },
    { label: 'Código Fonte', url: 'https://github.com/signalapp' },
    { label: 'Auto-hospede o Signal', url: 'https://github.com/signalapp/Signal-Server' },
  ],
  categories: ['messaging'],
  alternatives: ['WhatsApp', 'Telegram'],
  protocol: ['Signal Protocol'],
  banner: {
    src: './apps/icons/signal.svg',
    alt: 'Ícone do Signal'
  },
  modalBanner: {
    src: './apps/logos/signal.png',
    alt: 'Logo do Signal'
  }
},
{
  name: 'Stirling-PDF',
  description: 'Ferramenta completa para editar e converter arquivos PDF no navegador, direto do seu servidor.',
  longDescription: 'Stirling-PDF é um aplicativo web que permite fazer várias operações com arquivos PDF, como juntar, dividir, girar, converter, proteger com senha, extrair texto e muito mais. Tudo funciona direto no navegador, sem precisar enviar seus arquivos para serviços externos. Ele é ideal para quem quer uma solução prática, local e segura para lidar com PDFs no dia a dia, seja no trabalho ou uso pessoal.',
  features: [
    'Juntar, dividir, girar e converter arquivos PDF',
    'Proteger com senha, extrair texto e imagens',
    'Tudo funciona no navegador, sem envio para a nuvem'
  ],
  links: [
    { label: 'Código Fonte', url: 'https://github.com/Stirling-Tools/Stirling-PDF' },
    { label: 'Auto-hospede o Stirling-PDF', url: 'https://github.com/Stirling-Tools/Stirling-PDF/wiki/Docker-Install' },
  ],
  categories: ['tools'],
  alternatives: ['iLovePDF', 'SmallPDF'],
  banner: {
    src: './apps/icons/stirling-pdf.png',
    alt: 'Ícone do Stirling-PDF'
  },
  modalBanner: {
    src: './apps/logos/stirling-pdf.png',
    alt: 'Logo do Stirling-PDF'
  }
},
{
  name: 'ActivityPub',
  description: 'Protocolo aberto que permite que diferentes plataformas se comuniquem entre si no Fediverso.',
  longDescription: 'ActivityPub é um protocolo de comunicação usado para conectar diferentes plataformas federadas. Ele permite que uma pessoa em um site (como o Mastodon) interaja com outra em um serviço diferente (como o PeerTube ou o Pixelfed), como se estivessem na mesma rede. Com isso, cada servidor pode ter suas próprias regras e foco, mas ainda assim conversar com os outros. É a base do que chamamos de Fediverso - um conjunto de serviços livres que funcionam juntos.',
  features: [
    'Permite a federação entre diferentes serviços',
    'Base de redes como Mastodon, PeerTube, Pixelfed e Lemmy',
    'Desenvolvido como padrão aberto pelo W3C'
  ],
  links: [
    { label: 'Conheça o Fediverso', url: 'https://viniciusghise.com.br/blog/fediverso-o-que-e/' },
    { label: 'Especificação oficial (W3C)', url: 'https://www.w3.org/TR/activitypub/' },
    { label: 'Lista de apps que usam ActivityPub', url: 'https://fediverse.party/en/fediverse/' },
  ],
  categories: ['protocols'],
  alternatives: ['OStatus', 'Zot'],
  banner: {
    src: './apps/icons/activitypub.svg',
    alt: 'Ícone do ActivityPub'
  },
  modalBanner: {
    src: './apps/logos/activitypub.png',
    alt: 'Logo do ActivityPub'
  }
},

{
  name: 'Matrix',
  description: 'Protocolo aberto de comunicação em tempo real, usado por apps como o Element.',
  longDescription: 'Matrix é um protocolo que permite a troca de mensagens, chamadas e arquivos entre diferentes servidores. Ele foi criado para ser seguro, descentralizado e interoperável. Com ele, você pode usar um app como o Element para se comunicar com pessoas de outros servidores Matrix, ou até mesmo integrar com serviços como Slack e Telegram por meio de pontes (bridges). É uma base sólida para quem quer ter controle total sobre sua comunicação online.',
  features: [
    'Mensagens, chamadas e compartilhamento de arquivos',
    'Funciona entre servidores diferentes (federação)',
    'Suporte a integrações com outros serviços por ponte'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://matrix.org/' },
    { label: 'Especificação técnica', url: 'https://spec.matrix.org/' },
    { label: 'Lista de apps compatíveis', url: 'https://matrix.org/ecosystem/clients/' },
  ],
  categories: ['protocols'],
  alternatives: ['XMPP', 'Signal Protocol'],
  banner: {
    src: './apps/icons/matrix.svg',
    alt: 'Ícone do Matrix'
  },
  modalBanner: {
    src: './apps/logos/matrix.png',
    alt: 'Logo do Matrix'
  }
},
{
  name: 'XMPP',
  description: 'Protocolo aberto de mensagens instantâneas, usado há décadas em serviços livres e federados.',
  longDescription: 'XMPP (Extensible Messaging and Presence Protocol) é um protocolo de mensagens criado em 1999, muito antes dos mensageiros modernos. Ele permite trocar mensagens, arquivos e até fazer chamadas, tudo de forma descentralizada. Existem muitos servidores e clientes XMPP, e você pode escolher livremente com quem se conectar. Mesmo sendo antigo, ele continua sendo mantido, com foco em simplicidade, privacidade e liberdade.',
  features: [
    'Mensagens instantâneas e presença (online/offline)',
    'Totalmente federado, com vários clientes e servidores disponíveis',
    'Simples, leve e ideal para uso em dispositivos diversos',
    'É o protocolo usado pelo WhatsApp',
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://xmpp.org/' },
    { label: 'Especificação técnica', url: 'https://xmpp.org/about/technology-overview.html' },
    { label: 'Lista de apps e servidores', url: 'https://xmpp.org/software/' },
  ],
  categories: ['protocols'],
  alternatives: ['Matrix', 'Signal Protocol'],
  banner: {
    src: './apps/icons/xmpp.svg',
    alt: 'Ícone do XMPP'
  },
  modalBanner: {
    src: './apps/logos/xmpp.png',
    alt: 'Logo do XMPP'
  }
},
{
  name: 'Email',
  description: 'Protocolo clássico de comunicação digital, descentralizado por natureza e amplamente compatível.',
  longDescription: 'E-mail é uma das formas mais antigas e universais de comunicação na internet. Ele funciona com base em protocolos abertos como SMTP, IMAP e POP3, o que permite que diferentes provedores e servidores troquem mensagens entre si. Ao contrário de redes sociais e mensageiros modernos, o e-mail já nasceu descentralizado: qualquer pessoa pode hospedar seu próprio servidor e ter controle completo sobre suas mensagens. É compatível com praticamente todos os sistemas e dispositivos.',
  features: [
    'Baseado em protocolos abertos',
    'Totalmente descentralizado: qualquer um pode rodar seu servidor',
    'Funciona em qualquer lugar, com milhares de apps e clientes compatíveis'
  ],
  links: [
    // { label: 'Guia para auto-hospedar e-mail', url: 'https://sovereinia.org/como-auto-hospedar-seu-proprio-servidor-de-email/' },
    { label: 'Especificação SMTP (IETF)', url: 'https://datatracker.ietf.org/doc/html/rfc5321' },
    { label: 'Lista de softwares de e-mail', url: 'https://github.com/Kickball/awesome-selfhosted#email' },
  ],
  categories: ['protocols'],
  protocol: ['SMTP', 'IMAP', 'POP3'],
  banner: {
    src: './apps/icons/email.svg',
    alt: 'Ícone de Email'
  },
  modalBanner: {
    src: './apps/logos/email.png',
    alt: 'Logo de Email'
  }
},
{
  name: 'Ghost',
  description: 'Plataforma leve para blogs e sites, com editor moderno e foco em desempenho.',
  longDescription: 'Ghost é uma plataforma de publicação pensada para quem quer criar blogs, sites pessoais ou páginas de projeto com foco em simplicidade e velocidade. Ele tem um editor moderno, suporte a temas, SEO nativo e até integração com newsletters. É uma alternativa mais leve e direta ao WordPress, ideal para quem quer escrever e publicar sem complicação. Por ser auto-hospedado, você tem controle total sobre o conteúdo e o visual do site.',
  features: [
    'Editor moderno com suporte a Markdown e blocos',
    'Visual limpo, com temas personalizáveis',
    'Ótimo desempenho, SEO nativo e integração com newsletter',
    'É usado no Blog da Sovereinia'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://ghost.org/' },
    { label: 'Código Fonte', url: 'https://github.com/TryGhost/Ghost' },
    { label: 'Auto-hospede o Ghost', url: 'https://ghost.org/docs/install/' },
  ],
  categories: ['tools'],
  alternatives: ['WordPress', 'Medium'],
  banner: {
    src: './apps/icons/ghost.png',
    alt: 'Ícone do Ghost'
  },
  modalBanner: {
    src: './apps/logos/ghost.png',
    alt: 'Logo do Ghost'
  }
},

{
  name: 'Misskey',
  description: 'Rede social divertida e personalizável, com posts, reações e timeline federada.',
  longDescription: 'Misskey é uma rede social descentralizada parecida com o Mastodon, mas com mais foco em personalização e interações. Ele permite postar textos, imagens, vídeos e até “notas” com estilos variados. Tem suporte a reações (como emojis personalizados), widgets, temas e outras funções que deixam a experiência mais leve e divertida. Assim como outras plataformas do Fediverso, o Misskey funciona por meio de instâncias federadas usando o protocolo ActivityPub.',
  features: [
    'Postagens com reações, emojis e widgets interativos',
    'Altamente personalizável, com suporte a temas e extensões',
    'Comunicação federada com outras redes do Fediverso',
    'Desenvolvido e muito utilizada no Japão',
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://misskey-hub.net/' },
    { label: 'Código Fonte', url: 'https://github.com/misskey-dev/misskey' },
    { label: 'Auto-hospede o Misskey', url: 'https://misskey-hub.net/docs/install/' },
  ],
  categories: ['social'],
  alternatives: ['Twitter', 'X.com'],
  protocol: ['ActivityPub', 'Fediverso'],
  banner: {
    src: './apps/icons/misskey.svg',
    alt: 'Ícone do Misskey'
  },
  modalBanner: {
    src: './apps/logos/misskey.png',
    alt: 'Logo do Misskey'
  }
},
{
  name: 'Rocket.Chat',
  description: 'Plataforma de mensagens para equipes, parecida com o Slack, mas com controle total dos dados.',
  longDescription: 'Rocket.Chat é um app de mensagens voltado para comunicação em equipe, ideal para empresas, grupos de trabalho e comunidades. Ele permite trocar mensagens em tempo real, criar canais públicos ou privados, fazer chamadas de voz e vídeo, enviar arquivos e integrar com outras ferramentas. A grande vantagem é que você pode rodar tudo no seu próprio servidor, garantindo privacidade e segurança sem depender de serviços externos.',
  features: [
    'Canais, mensagens diretas, chamadas de voz e vídeo',
    'Controle de usuários, permissões e integrações',
    'Interface moderna e app para desktop e celular'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.rocket.chat/' },
    { label: 'Código Fonte', url: 'https://github.com/RocketChat/Rocket.Chat' },
    { label: 'Auto-hospede o Rocket.Chat', url: 'https://docs.rocket.chat/installation/' },
  ],
  categories: ['messaging', 'tools'],
  alternatives: ['Slack', 'Microsoft Teams', 'Zendesk'],
  banner: {
    src: './apps/icons/rocketchat.svg',
    alt: 'Ícone do Rocket.Chat'
  },
  modalBanner: {
    src: './apps/logos/rocketchat.png',
    alt: 'Logo do Rocket.Chat'
  }
},
{
  name: 'Plane',
  description: 'Ferramenta de gestão de tarefas e projetos, com visual moderno e focada em equipes auto-organizadas.',
  longDescription: 'Plane é um app de código aberto para organizar tarefas, bugs, ideias e projetos em equipe. Ele tem um visual parecido com o Linear ou o Jira, com suporte a quadros Kanban, status personalizados, prioridades e etiquetas. É ideal para times de desenvolvimento, mas também funciona bem para qualquer grupo que queira acompanhar o andamento de tarefas com mais clareza. Pode ser auto-hospedado para garantir controle total dos dados da equipe.',
  features: [
    'Quadros Kanban, status e prioridades personalizadas',
    'Organização por projetos, sprints, ciclos ou equipes',
    'Interface rápida, moderna e fácil de usar'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://plane.so/' },
    { label: 'Código Fonte', url: 'https://github.com/makeplane/plane' },
    { label: 'Auto-hospede o Plane', url: 'https://docs.plane.so/' },
  ],
  categories: ['tools'],
  alternatives: ['Trello', 'Jira'],
  banner: {
    src: './apps/icons/plane.svg',
    alt: 'Ícone do Plane'
  },
  modalBanner: {
    src: './apps/logos/plane.png',
    alt: 'Logo do Plane'
  }
},
{
  name: 'IPFS',
  description: 'Protocolo para armazenar e compartilhar arquivos de forma distribuída, sem depender de servidores centrais.',
  longDescription: 'IPFS (InterPlanetary File System) é um protocolo que permite armazenar e acessar arquivos de forma descentralizada, parecida com o funcionamento de torrents. Em vez de depender de um servidor fixo, os arquivos são distribuídos entre os computadores da rede. Isso torna o acesso mais resistente a falhas, censura e apagamentos. Ele é usado para sites, imagens, vídeos e outros conteúdos que precisam ficar disponíveis de forma mais segura e permanente. Vale lembrar que o IPFS não substitui sozinho um sistema de indexação ou nomeação. Para isso, utiliza-se o IPNS ou outras camadas adicionais.',
  features: [
    'Armazenamento e acesso a arquivos sem servidores centrais',
    'Conteúdo é identificado por seu código (hash), não por endereço fixo',
    'Resistente a censura e falhas de servidores'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://ipfs.tech/' },
    { label: 'Código Fonte', url: 'https://github.com/ipfs/kubo' },
    { label: 'Como usar o IPFS', url: 'https://docs.ipfs.tech/install/' },
  ],
  categories: ['protocols'],
  alternatives: ['HTTP', 'BitTorrent'],
  banner: {
    src: './apps/icons/ipfs.svg',
    alt: 'Ícone do IPFS'
  },
  modalBanner: {
    src: './apps/logos/ipfs.png',
    alt: 'Logo do IPFS'
  }
},
{
  name: 'Bitwarden',
  description: 'Gerenciador de senhas seguro e completo, com apps oficiais e opção de auto-hospedagem.',
  longDescription: 'Bitwarden é um gerenciador de senhas que permite salvar logins, notas seguras, cartões e outros dados de forma criptografada. Ele pode ser acessado pelo navegador, celular ou aplicativo de desktop, e também oferece preenchimento automático e geração de senhas fortes. É uma alternativa confiável aos gerenciadores de senhas pagos e, diferente da maioria, pode ser auto-hospedado para quem quer controle total sobre seus dados.',
  features: [
    'Criptografia de ponta a ponta para senhas e dados sensíveis',
    'Apps para navegador, celular e desktop',
    'Pode ser usado na nuvem oficial ou em servidor próprio'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://bitwarden.com/' },
    { label: 'Código Fonte', url: 'https://github.com/bitwarden/server' },
    { label: 'Auto-hospede o Bitwarden', url: 'https://bitwarden.com/help/install-on-premise/' },
  ],
  categories: ['tools'],
  alternatives: ['Google Password Manager'],
  banner: {
    src: './apps/icons/bitwarden.svg',
    alt: 'Ícone do Bitwarden'
  },
  modalBanner: {
    src: './apps/logos/bitwarden.png',
    alt: 'Logo do Bitwarden'
  }
},

{
  name: 'Diaspora*',
  description: 'Rede social descentralizada com foco em privacidade, sem anúncios nem rastreamento.',
  longDescription: 'Diaspora* é uma rede social que funciona por meio de "pods", servidores independentes que se conectam entre si. Você pode escolher um pod para criar sua conta ou hospedar o seu próprio. O sistema permite seguir pessoas, publicar textos, imagens, curtir e comentar, tudo com foco em controle do usuário e privacidade. Ele foi um dos primeiros projetos a propor uma alternativa livre às redes sociais centralizadas como o Facebook. Diferente do Mastodon ou do Friendica, o protocolo usado pelo Diaspora* não é compatível com o ActivityPub, o que limita a comunicação direta com outras redes do Fediverso.',
  features: [
    'Rede descentralizada com foco em privacidade',
    'Publicações com texto, links e imagens',
    'Controle sobre quem pode ver cada post (aspectos)'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://diasporafoundation.org/' },
    { label: 'Código Fonte', url: 'https://github.com/diaspora/diaspora' },
    { label: 'Auto-hospede o Diaspora*', url: 'https://wiki.diasporafoundation.org/Installation' },
  ],
  categories: ['social'],
  alternatives: ['Facebook'],
  protocol: ['Diaspora protocol'],
  banner: {
    src: './apps/icons/diaspora.svg',
    alt: 'Ícone do Diaspora*'
  },
  modalBanner: {
    src: './apps/logos/diaspora.png',
    alt: 'Logo do Diaspora*'
  }
},
{
  name: 'Jellyfin',
  description: 'Servidor de mídia para organizar e assistir seus filmes, séries e músicas em qualquer lugar.',
  longDescription: 'Jellyfin é uma plataforma de streaming pessoal que permite organizar e acessar sua coleção de filmes, séries, músicas e fotos a partir de qualquer dispositivo. Ele funciona como um “Netflix caseiro”, com interface bonita, apps para TV, celular e navegador. Tudo é hospedado por você, sem rastreamento, sem assinatura e com total controle sobre seus arquivos. É uma ótima opção para quem quer montar seu próprio servidor de mídia.',
  features: [
    'Streaming de filmes, séries, músicas e fotos',
    'Interface moderna com apps para web, celular e TV',
    'Totalmente gratuito, sem rastreadores nem limites artificiais'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://jellyfin.org/' },
    { label: 'Código Fonte', url: 'https://github.com/jellyfin/jellyfin' },
    { label: 'Auto-hospede o Jellyfin', url: 'https://jellyfin.org/docs/general/administration/installing/' },
  ],
  categories: ['tools'],
  alternatives: ['Plex'],
  banner: {
    src: './apps/icons/jellyfin.svg',
    alt: 'Ícone do Jellyfin'
  },
  modalBanner: {
    src: './apps/logos/jellyfin.png',
    alt: 'Logo do Jellyfin'
  }
},
{
  name: 'Zulip',
  description: 'App de mensagens em equipe que combina o estilo de chat com a organização de um fórum.',
  longDescription: 'Zulip é um app de mensagens para equipes que organiza as conversas por tópicos dentro de canais, o que facilita acompanhar várias discussões ao mesmo tempo sem se perder. Ele é ideal para times que trabalham de forma assíncrona, onde nem todo mundo responde na hora. Oferece mensagens em tempo real, suporte a arquivos, emojis, integrações com outras ferramentas e pode ser auto-hospedado para quem busca controle total sobre a comunicação.',
  features: [
    'Conversas organizadas por tópicos dentro dos canais',
    'Ideal para equipes que trabalham de forma assíncrona',
    'Apps para desktop, celular e navegador'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://zulip.com/' },
    { label: 'Código Fonte', url: 'https://github.com/zulip/zulip' },
    { label: 'Auto-hospede o Zulip', url: 'https://zulip.readthedocs.io/en/latest/production/install.html' },
  ],
  categories: ['messaging', 'tools'],
  alternatives: ['Slack', 'Microsoft Teams', 'Discord'],
  banner: {
    src: './apps/icons/zulip.svg',
    alt: 'Ícone do Zulip'
  },
  modalBanner: {
    src: './apps/logos/zulip.png',
    alt: 'Logo do Zulip'
  }
},
{
  name: 'osTicket',
  description: 'Sistema de suporte por tickets, ideal para organizar atendimentos técnicos ou de clientes.',
  longDescription: 'osTicket é uma plataforma de helpdesk que permite receber, organizar e responder chamados (tickets) de forma eficiente. Ele é usado por equipes de suporte técnico, atendimento ao cliente ou setores internos de empresas. Com ele, é possível centralizar e acompanhar todos os pedidos de ajuda, com histórico, prioridades e atribuição por agente. É totalmente auto-hospedado e pode ser personalizado de acordo com as necessidades da equipe.',
  features: [
    'Recebimento e organização de chamados por e-mail ou formulário',
    'Acompanhamento por status, prioridade e agente responsável',
    'Histórico completo das conversas e personalização de campos'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://osticket.com/' },
    { label: 'Código Fonte', url: 'https://github.com/osTicket/osTicket' },
    { label: 'Auto-hospede o osTicket', url: 'https://docs.osticket.com/en/latest/' },
  ],
  categories: ['tools'],
  alternatives: ['Zendesk', 'Freshdesk', 'Help Scout'],
  banner: {
    src: './apps/icons/osticket.png',
    alt: 'Ícone do osTicket'
  },
  modalBanner: {
    src: './apps/logos/osticket.png',
    alt: 'Logo do osTicket'
  }
},
{
  name: 'Friendica',
  description: 'Rede social federada com foco em compatibilidade e integração com outras redes.',
  longDescription: 'Friendica é uma rede social descentralizada que permite postar textos, imagens, curtir, comentar e interagir com pessoas de outras redes como Mastodon, Diaspora* e até contas de e-mail. Um dos seus maiores diferenciais é a compatibilidade com vários protocolos, facilitando a conexão entre plataformas diferentes. Ele tem um visual mais simples e lembra as redes sociais clássicas, com foco em acessibilidade e integração.',
  features: [
    'Compatível com diversas redes do Fediverso e até com e-mail',
    'Postagens com texto, links, imagens e vídeos',
    'Permite criar grupos, fóruns e listas de contatos'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://friendi.ca/' },
    { label: 'Código Fonte', url: 'https://github.com/friendica/friendica' },
    { label: 'Auto-hospede o Friendica', url: 'https://wiki.friendi.ca/docs/admin/installation' },
  ],
  categories: ['social'],
  alternatives: ['Facebook', 'Mastodon', 'Diaspora*'],
  protocol: ['ActivityPub', 'Diaspora protocol', 'OStatus'],
  banner: {
    src: './apps/icons/friendica.svg',
    alt: 'Ícone do Friendica'
  },
  modalBanner: {
    src: './apps/logos/friendica.png',
    alt: 'Logo do Friendica'
  }
},

{
  name: 'Pleroma',
  description: 'Rede social federada leve e personalizável, ideal para servidores pequenos.',
  longDescription: 'Pleroma é uma plataforma de microblog como o Mastodon, mas com foco em leveza e desempenho. Ele é ideal para quem quer rodar sua própria instância em servidores com poucos recursos. Tem suporte ao protocolo ActivityPub, permitindo interagir com usuários de outras redes como Mastodon, Misskey e Pixelfed. Sua interface pode ser personalizada, e também é possível usar outras interfaces feitas pela comunidade.',
  features: [
    'Leve e ideal para rodar em servidores com poucos recursos',
    'Compatível com outras redes do Fediverso via ActivityPub',
    'Interface personalizável e suporte a temas'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://pleroma.social/' },
    { label: 'Código Fonte', url: 'https://akkoma.dev/AkkomaGang/pleroma' },
    { label: 'Auto-hospede o Pleroma', url: 'https://docs-develop.pleroma.social/backend/installation/' },
  ],
  categories: ['social'],
  alternatives: ['Mastodon', 'Misskey'],
  protocol: ['ActivityPub', 'Fediverso'],
  banner: {
    src: './apps/icons/pleroma.svg',
    alt: 'Ícone do Pleroma'
  },
  modalBanner: {
    src: './apps/logos/pleroma.png',
    alt: 'Logo do Pleroma'
  }
},
{
  name: 'Hubzilla',
  description: 'Rede social federada com foco em identidade portátil e múltiplos recursos em um só lugar.',
  longDescription: 'Hubzilla é uma plataforma federada que vai além de uma rede social comum. Além de posts e interações sociais, ele permite criar blogs, wikis, fóruns e até páginas pessoais. Seu maior diferencial é o recurso de identidade portátil: você pode se mover entre servidores (hubs) sem perder seu perfil ou seus dados. Isso oferece um nível de autonomia muito maior dentro do Fediverso.',
  features: [
    'Identidade portátil entre servidores (Zot protocol)',
    'Postagens, fóruns, blogs e wikis no mesmo lugar',
    'Controle avançado de permissões e privacidade',
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://hubzilla.org/' },
    { label: 'Código Fonte', url: 'https://framagit.org/hubzilla/core' },
    { label: 'Auto-hospede o Hubzilla', url: 'https://project.hubzilla.org/help/Install' },
  ],
  categories: ['social', 'tools'],
  alternatives: ['Facebook', 'Diaspora*', 'Mastodon'],
  protocol: ['Zot', 'ActivityPub'],
  banner: {
    src: './apps/icons/hubzilla.svg',
    alt: 'Ícone do Hubzilla'
  },
  modalBanner: {
    src: './apps/logos/hubzilla.png',
    alt: 'Logo do Hubzilla'
  }
},
{
  name: 'Mattermost',
  description: 'Plataforma de mensagens para equipes, parecida com o Slack, com foco em privacidade e integração.',
  longDescription: 'Mattermost é um app de mensagens para times que permite comunicação em tempo real por canais, mensagens diretas e integrações com outras ferramentas. Ele é ideal para empresas, equipes técnicas e organizações que querem ter controle total sobre sua comunicação. Pode ser auto-hospedado e tem recursos como compartilhamento de arquivos, chamadas por plugin, suporte a webhooks e integração com Git, CI/CD e mais.',
  features: [
    'Mensagens por canais, grupos e conversas privadas',
    'Integrações com ferramentas como GitLab, Jira e CI/CD',
    'Foco em segurança, controle e uso corporativo'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://mattermost.com/' },
    { label: 'Código Fonte', url: 'https://github.com/mattermost/mattermost-server' },
    { label: 'Auto-hospede o Mattermost', url: 'https://docs.mattermost.com/install/self-managed.html' },
  ],
  categories: ['messaging', 'tools'],
  alternatives: ['Slack', 'Microsoft Teams', 'Rocket.Chat', 'GitLab'],
  banner: {
    src: './apps/icons/mattermost.svg',
    alt: 'Ícone do Mattermost'
  },
  modalBanner: {
    src: './apps/logos/mattermost.png',
    alt: 'Logo do Mattermost'
  }
},
{
  name: 'BigBlueButton',
  description: 'Plataforma de videoconferência voltada para ensino online, com recursos como quadro branco e salas de aula.',
  longDescription: 'BigBlueButton é uma ferramenta de videoconferência pensada para educação a distância. Ele permite criar salas de aula virtuais com vídeo, áudio, chat, apresentações, quadro branco colaborativo e até enquetes. Professores podem gravar aulas, dividir os participantes em grupos menores e acompanhar a interação em tempo real. Tudo pode ser hospedado em seu próprio servidor, garantindo controle e privacidade.',
  features: [
    'Videoconferência com quadro branco e compartilhamento de tela',
    'Salas de aula com chat, enquetes e grupos de trabalho',
    'Recursos de gravação e moderação para ensino online'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://bigbluebutton.org/' },
    { label: 'Código Fonte', url: 'https://github.com/bigbluebutton/bigbluebutton' },
    { label: 'Auto-hospede o BigBlueButton', url: 'https://bigbluebutton.org/hosting/' },
  ],
  categories: ['tools'],
  alternatives: ['Zoom', 'Google Meet', 'Microsoft Teams'],
  protocol: ['WebRTC'],
  banner: {
    src: './apps/icons/bigbluebutton.svg',
    alt: 'Ícone do BigBlueButton'
  },
  modalBanner: {
    src: './apps/logos/bigbluebutton.png',
    alt: 'Logo do BigBlueButton'
  }
},
{
  name: 'GitLab',
  description: 'Plataforma completa de desenvolvimento colaborativo, com controle de código, CI/CD e gestão de projetos.',
  longDescription: 'GitLab é uma ferramenta tudo-em-um para equipes de desenvolvimento. Além do controle de versão com Git, ele oferece recursos como repositórios privados, gestão de issues, merge requests, CI/CD, wiki e controle de acesso por permissões. Pode ser usado na nuvem oficial ou hospedado por você, garantindo total controle sobre seus projetos e dados. É uma alternativa robusta ao GitHub, com foco em privacidade e colaboração.',
  features: [
    'Repositórios Git com controle de acesso e histórico',
    'Integração nativa com CI/CD e pipelines automatizados',
    'Gestão de issues, merge requests, wikis e mais'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://about.gitlab.com/' },
    { label: 'Código Fonte', url: 'https://gitlab.com/gitlab-org/gitlab' },
    { label: 'Auto-hospede o GitLab', url: 'https://about.gitlab.com/install/' },
  ],
  categories: ['tools'],
  alternatives: ['GitHub', 'Bitbucket', 'Gitea'],
  protocol: ['Git'],
  banner: {
    src: './apps/icons/gitlab.svg',
    alt: 'Ícone do GitLab'
  },
  modalBanner: {
    src: './apps/logos/gitlab.png',
    alt: 'Logo do GitLab'
  }
},
{
  name: 'Gitea',
  description: 'Plataforma leve de hospedagem de código, com interface simples e ideal para servidores próprios.',
  longDescription: 'Gitea é uma alternativa leve e rápida ao GitHub e ao GitLab, perfeita para quem quer hospedar seus próprios repositórios Git. Ele oferece os recursos essenciais como issues, wiki, pull requests, CI via integração, controle de acesso e uma interface amigável. Por ser muito leve, funciona bem até em servidores modestos, sendo ideal para times pequenos, projetos pessoais ou organizações que querem mais controle com menos complexidade.',
  features: [
    'Hospedagem de repositórios Git com web interface',
    'Suporte a issues, wikis, pull requests e permissões',
    'Leve e fácil de instalar, ideal para servidores pequenos'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://gitea.io/' },
    { label: 'Código Fonte', url: 'https://github.com/go-gitea/gitea' },
    { label: 'Auto-hospede o Gitea', url: 'https://docs.gitea.io/en-us/install-from-binary/' },
  ],
  categories: ['tools'],
  alternatives: ['GitHub', 'GitLab'],
  protocol: ['Git'],
  banner: {
    src: './apps/icons/gitea.svg',
    alt: 'Ícone do Gitea'
  },
  modalBanner: {
    src: './apps/logos/gitea.png',
    alt: 'Logo do Gitea'
  }
},
{
  name: 'OpenProject',
  description: 'Ferramenta completa para gestão de projetos e tarefas, ideal para equipes organizadas.',
  longDescription: 'OpenProject é uma plataforma de gerenciamento de projetos que permite planejar, acompanhar e colaborar em tarefas de forma eficiente. Ele oferece suporte a cronogramas (Gantt), quadros ágeis, acompanhamento de tempo, wikis e muito mais. Pode ser usado em equipes de qualquer tamanho, com controle de permissões e personalização. É uma ótima alternativa ao Jira e Trello, especialmente para quem prefere uma solução auto-hospedada.',
  features: [
    'Gestão de tarefas com cronogramas, listas e quadros ágeis',
    'Controle de tempo, wikis e colaboração em equipe',
    'Interface web moderna e controle de permissões por projeto'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.openproject.org/' },
    { label: 'Código Fonte', url: 'https://github.com/opf/openproject' },
    { label: 'Auto-hospede o OpenProject', url: 'https://www.openproject.org/docs/installation-and-operations/installation/' },
  ],
  categories: ['tools'],
  alternatives: ['Jira', 'Trello', 'Asana'],
  banner: {
    src: './apps/icons/openproject.svg',
    alt: 'Ícone do OpenProject'
  },
  modalBanner: {
    src: './apps/logos/openproject.png',
    alt: 'Logo do OpenProject'
  }
},
{
  name: 'Uptime Kuma',
  description: 'Monitor de sites e serviços que avisa quando algo sai do ar, com painel bonito e fácil de usar.',
  longDescription: 'Uptime Kuma é uma ferramenta para monitorar se seus sites, servidores ou serviços estão online. Ele verifica periodicamente os endereços que você configurar e envia alertas se algum deles ficar fora do ar. Você pode receber notificações por e-mail, Telegram, Discord e outros. O painel é simples, bonito e mostra o tempo de atividade (uptime) com gráficos e históricos. Tudo isso pode ser hospedado no seu próprio servidor, sem depender de serviços externos.',
  features: [
    'Monitoramento de sites, servidores e serviços com alertas',
    'Notificações por e-mail, Telegram, Discord, Webhook e mais',
    'Painel com histórico, gráficos e status em tempo real'
  ],
  links: [
    { label: 'Código Fonte', url: 'https://github.com/louislam/uptime-kuma' },
    { label: 'Auto-hospede o Uptime Kuma', url: 'https://github.com/louislam/uptime-kuma/wiki' },
  ],
  categories: ['tools'],
  alternatives: [''],
  banner: {
    src: './apps/icons/uptimekuma.svg',
    alt: 'Ícone do Uptime Kuma'
  },
  modalBanner: {
    src: './apps/logos/uptimekuma.png',
    alt: 'Logo do Uptime Kuma'
  }
},
{
  name: 'Plex',
  description: 'Servidor de mídia para organizar e assistir seus filmes, séries e músicas com visual profissional.',
  longDescription: 'Plex é uma plataforma de streaming pessoal que permite organizar sua coleção de filmes, séries, músicas e fotos, e acessá-los de qualquer lugar. Ele tem uma interface polida, apps para celular, smart TVs e navegador. Embora tenha recursos pagos e funcione com uma conta na nuvem, também pode ser auto-hospedado para uso local. É ideal para quem busca uma experiência parecida com a Netflix, mas com sua própria biblioteca.',
  features: [
    'Streaming de mídia pessoal com interface moderna',
    'Apps para celular, navegador, smart TVs e consoles',
    'Funciona localmente ou com acesso remoto via conta Plex'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.plex.tv/' },
    { label: 'Código Fonte (parcial)', url: 'https://github.com/plexinc' },
    { label: 'Como auto-hospedar o Plex', url: 'https://support.plex.tv/articles/200264746-installation/' },
  ],
  categories: ['tools'],
  alternatives: ['Jellyfin', 'Emby', 'Kodi'],
  banner: {
    src: './apps/icons/plex.svg',
    alt: 'Ícone do Plex'
  },
  modalBanner: {
    src: './apps/logos/plex.png',
    alt: 'Logo do Plex'
  }
},
{
  name: 'LanguageTool',
  description: 'Ferramenta de correção gramatical e ortográfica com suporte a vários idiomas, inclusive português.',
  longDescription: 'LanguageTool é um corretor de texto inteligente que ajuda a revisar ortografia, gramática e estilo de escrita. Ele funciona em português e diversos outros idiomas, e pode ser usado como extensão no navegador, editor online ou integrado em apps como LibreOffice. Para quem prefere não depender da nuvem, é possível hospedar sua própria instância e manter a correção local e privada.',
  features: [
    'Correção de ortografia, gramática e estilo de texto',
    'Suporte a vários idiomas, incluindo português do Brasil',
    'Extensões para navegador, integração com LibreOffice e API'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://languagetool.org/' },
    { label: 'Código Fonte', url: 'https://github.com/languagetool-org/languagetool' },
    { label: 'Auto-hospede o LanguageTool', url: 'https://dev.languagetool.org/http-server' },
  ],
  categories: ['tools'],
  alternatives: ['Grammarly', 'Microsoft Editor'],
  banner: {
    src: './apps/icons/languagetool.png',
    alt: 'Ícone do LanguageTool'
  },
  modalBanner: {
    src: './apps/logos/languagetool.png',
    alt: 'Logo do LanguageTool'
  }
},
{
  name: 'Owncast',
  description: 'Plataforma de streaming ao vivo auto-hospedada, ideal para criadores que querem independência.',
  longDescription: 'Owncast permite fazer transmissões ao vivo diretamente do seu servidor, sem depender de plataformas centralizadas como Twitch ou YouTube. Você pode usar softwares comuns de streaming (como OBS) e transmitir para seu próprio site, com chat ao vivo e personalização visual. É uma ótima opção para quem quer mais controle, privacidade e liberdade no conteúdo transmitido.',
  features: [
    'Streaming ao vivo com chat integrado e personalização visual',
    'Compatível com OBS e outras ferramentas de transmissão',
    'Funciona no seu próprio servidor, sem anúncios nem rastreamento'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://owncast.online/' },
    { label: 'Código Fonte', url: 'https://github.com/owncast/owncast' },
    { label: 'Auto-hospede o Owncast', url: 'https://owncast.online/docs/quickstart/' },
  ],
  categories: ['tools'],
  alternatives: ['Twitch', 'YouTube Live', 'Facebook Live'],
  banner: {
    src: './apps/icons/owncast.svg',
    alt: 'Ícone do Owncast'
  },
  modalBanner: {
    src: './apps/logos/owncast.png',
    alt: 'Logo do Owncast'
  }
},
{
  name: 'AzuraCast',
  description: 'Sistema completo para criar e gerenciar uma rádio online, com streaming, agendamento e estatísticas.',
  longDescription: 'AzuraCast é uma plataforma auto-hospedada que permite transmitir áudio ao vivo ou programado como uma rádio online. Ele inclui tudo o que você precisa: painel de controle, gerenciamento de músicas, playlists, agendamento de transmissões, estatísticas de ouvintes e suporte a streaming ao vivo. É ideal para rádios comunitárias, projetos independentes ou quem quer explorar o mundo da transmissão de áudio pela internet com total controle.',
  features: [
    'Gerenciamento de estações, playlists e transmissões ao vivo',
    'Agendamento de programação automática com base em horários',
    'Dashboard completo com estatísticas de audiência e logs'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.azuracast.com/' },
    { label: 'Código Fonte', url: 'https://github.com/AzuraCast/AzuraCast' },
    { label: 'Auto-hospede o AzuraCast', url: 'https://www.azuracast.com/install/' },
  ],
  categories: ['tools'],
  alternatives: ['Radio.co', 'Shoutcast'],
  banner: {
    src: './apps/icons/azuracast.svg',
    alt: 'Ícone do AzuraCast'
  },
  modalBanner: {
    src: './apps/logos/azuracast.png',
    alt: 'Logo do AzuraCast'
  }
},
{
  name: 'Keycloak',
  description: 'Sistema de login centralizado, com autenticação única (SSO), permissões e integração com outros serviços.',
  longDescription: 'Keycloak é uma ferramenta de gerenciamento de identidade e acesso (IAM) que permite centralizar logins de vários sistemas em um só lugar. Com ele, é possível oferecer login único (SSO), autenticação com redes sociais, dois fatores (2FA) e controle de permissões por grupo ou função. Ele é ideal para equipes, empresas ou projetos que usam vários serviços e querem facilitar o acesso de forma segura. Tudo pode ser auto-hospedado, sem depender de soluções externas.',
  features: [
    'Login único (SSO) para múltiplos sistemas',
    'Autenticação com redes sociais, LDAP, 2FA e mais',
    'Painel completo de gestão de usuários, grupos e permissões'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.keycloak.org/' },
    { label: 'Código Fonte', url: 'https://github.com/keycloak/keycloak' },
    { label: 'Auto-hospede o Keycloak', url: 'https://www.keycloak.org/getting-started/' },
  ],
  categories: ['tools'],
  alternatives: ['Auth0', 'Okta', 'Firebase Auth'],
  protocol: ['OIDC', 'SAML', 'OAuth2'],
  banner: {
    src: './apps/icons/keycloak.svg',
    alt: 'Ícone do Keycloak'
  },
  modalBanner: {
    src: './apps/logos/keycloak.png',
    alt: 'Logo do Keycloak'
  }
},
{
  name: 'WordPress',
  description: 'Plataforma popular para criação de sites e blogs, com milhares de plugins e temas disponíveis.',
  longDescription: 'WordPress é uma das ferramentas mais usadas no mundo para criar sites, blogs e lojas online. Com ele, você pode montar desde uma página simples até um portal completo, usando temas prontos e plugins para adicionar funções. Apesar de ser oferecido como serviço por empresas como WordPress.com, ele também pode ser auto-hospedado, dando a você total controle sobre o conteúdo e a personalização.',
  features: [
    'Criação de sites e blogs com temas e plugins',
    'Painel de administração intuitivo e traduzido para o português',
    'Grande comunidade e documentação acessível'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://wordpress.org/' },
    { label: 'Código Fonte', url: 'https://github.com/WordPress/WordPress' },
    { label: 'Auto-hospede o WordPress', url: 'https://wordpress.org/support/article/how-to-install-wordpress/' },
  ],
  categories: ['tools'],
  alternatives: ['Ghost', 'Wix', 'Squarespace'],
  banner: {
    src: './apps/icons/wordpress.svg',
    alt: 'Ícone do WordPress'
  },
  modalBanner: {
    src: './apps/logos/wordpress.png',
    alt: 'Logo do WordPress'
  }
},
{
  name: 'AT Protocol',
  description: 'Protocolo criado para redes sociais descentralizadas, mas por enquanto limitado ao uso no Bluesky.',
  longDescription: 'AT Protocol foi desenvolvido para ser a base técnica do Bluesky, uma rede social descentralizada que surgiu como alternativa ao Twitter. Ele promete oferecer controle de identidade, portabilidade de dados e interoperabilidade. No entanto, até agora só é usado pelo próprio Bluesky e ainda não está totalmente aberto para uso por terceiros. Por isso, embora seja apresentado como protocolo aberto, ainda não é possível utilizá-lo fora do ecossistema do Bluesky, nem auto-hospedar serviços compatíveis.',
  features: [
    'Foco em redes sociais descentralizadas com identidade portátil',
    'Desenvolvido junto com a plataforma Bluesky',
    'Ainda não amplamente adotado nem implementado fora do Bluesky'
  ],
  links: [
    { label: 'Site oficial do AT Protocol', url: 'https://atproto.com/' },
    { label: 'Código Fonte', url: 'https://github.com/bluesky-social/atproto' },
    { label: 'Sobre o Bluesky', url: 'https://blueskyweb.xyz/' },
  ],
  categories: ['protocols'],
  alternatives: ['ActivityPub', 'Diaspora protocol'],
  banner: {
    src: './apps/icons/atprotocol.svg',
    alt: 'Ícone do AT Protocol'
  },
  modalBanner: {
    src: './apps/logos/atprotocol.png',
    alt: 'Logo do AT Protocol'
  }
},

{
  name: 'Bluesky',
  description: 'Rede social baseada no AT Protocol, com proposta descentralizada, mas ainda bastante centralizada na prática.',
  longDescription: 'Bluesky é uma rede social que se apresenta como uma alternativa descentralizada ao Twitter. Ele funciona sobre o AT Protocol, que promete portabilidade de identidade e interoperabilidade entre servidores. No entanto, atualmente o Bluesky ainda depende de uma instância central (bsky.social), com acesso controlado e sem suporte real a federação nem auto-hospedagem. Apesar do discurso de descentralização, o ecossistema ainda está fechado e restrito à infraestrutura do próprio projeto.',
  features: [
    'Interface parecida com o Twitter, com postagens, curtidas e reposts',
    'Protocolo próprio (AT Protocol), mas com uso limitado',
    'Promessa de descentralização ainda não concretizada'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://blueskyweb.xyz/' },
    { label: 'Código Fonte (cliente e protocolo)', url: 'https://github.com/bluesky-social' },
    { label: 'Saiba mais sobre o AT Protocol', url: 'https://atproto.com/' },
  ],
  categories: ['social'],
  alternatives: ['Twitter'],
  protocol: ['AT Protocol'],
  banner: {
    src: './apps/icons/bluesky.svg',
    alt: 'Ícone do Bluesky'
  },
  modalBanner: {
    src: './apps/logos/bluesky.png',
    alt: 'Logo do Bluesky'
  }
},
{
  name: 'RSS',
  description: 'Protocolo aberto para seguir atualizações de sites e blogs, sem depender de algoritmos ou redes sociais.',
  longDescription: 'RSS é um protocolo simples que permite acompanhar as novidades de sites, blogs, podcasts e canais de vídeo em um só lugar. Você usa um leitor de RSS para reunir os conteúdos em formato de feed, de forma limpa, sem anúncios, algoritmos ou rastreadores. É uma das formas mais antigas e confiáveis de seguir conteúdos na web, e continua sendo usado por quem busca mais autonomia e menos distrações.',
  features: [
    'Atualizações automáticas de sites, blogs, podcasts e mais',
    'Funciona com qualquer leitor de RSS, online ou auto-hospedado',
    'Sem algoritmos, sem rastreio, só o conteúdo que você escolhe'
  ],
  links: [
    { label: 'que é RSS?', url: 'https://www.mozilla.org/pt-BR/firefox/live-bookmarks/' },
    { label: 'Leitores de RSS recomendados', url: 'https://github.com/Kickball/awesome-selfhosted#feed-readers' },
    { label: 'Gere feeds com o RSSHub', url: 'https://rsshub.app/' },
  ],
  categories: ['protocols'],
  alternatives: ['Newsletters', 'Atom'],
  banner: {
    src: './apps/icons/rss.svg',
    alt: 'Ícone do RSS'
  },
  modalBanner: {
    src: './apps/logos/rss.png',
    alt: 'Logo do RSS'
  }
},
{
  name: 'Atom',
  description: 'Formato aberto de feed, similar ao RSS, criado para ser mais flexível e moderno.',
  longDescription: 'Atom é um formato de feed criado como alternativa ao RSS, oferecendo mais padronização e extensibilidade. Assim como o RSS, ele permite acompanhar atualizações de sites, blogs e outros conteúdos diretamente em um leitor de feeds. Embora seja menos comum, muitos sites ainda oferecem suporte ao Atom, e a maioria dos leitores modernos é compatível com os dois formatos. É mais uma opção para quem quer acompanhar a web sem depender de redes sociais.',
  features: [
    'Permite seguir atualizações de sites e blogs em tempo real',
    'Compatível com a maioria dos leitores de RSS',
    'Mais estruturado e extensível que o RSS, com padrão oficial (IETF)'
  ],
  links: [
    { label: 'que é Atom?', url: 'https://tools.ietf.org/html/rfc4287' },
    { label: 'Leitores de feed compatíveis', url: 'https://github.com/Kickball/awesome-selfhosted#feed-readers' },
    { label: 'Gere feeds com o RSSHub', url: 'https://rsshub.app/' },
  ],
  categories: ['protocols'],
  alternatives: ['RSS', 'Newsletters'],
  banner: {
    src: './apps/icons/atom.svg',
    alt: 'Ícone do Atom'
  },
  modalBanner: {
    src: './apps/logos/atom.png',
    alt: 'Logo do Atom'
  }
},
{
  name: 'BitTorrent',
  description: 'Protocolo descentralizado para compartilhar arquivos entre usuários, sem depender de servidores centrais.',
  longDescription: 'BitTorrent é um protocolo usado para distribuir arquivos grandes pela internet de forma eficiente e descentralizada. Em vez de baixar de um servidor único, os arquivos são divididos em partes e compartilhados entre todos que estão baixando ou já baixaram. Isso reduz o custo para quem distribui e torna o sistema mais resistente a censura e falhas. É usado em diversos contextos, de distribuição de software livre a arquivos pessoais.',
  features: [
    'Compartilhamento direto entre usuários (peer-to-peer)',
    'Descentralizado e resistente a falhas e censura',
    'Usado para distribuir software, vídeos, músicas e outros arquivos'
  ],
  links: [
    { label: 'que é BitTorrent?', url: 'https://www.bittorrent.com/pt-br/' },
    { label: 'Clientes recomendados', url: 'https://github.com/Kickball/awesome-selfhosted#file-sharing' },
    { label: 'Código do protocolo (BEPs)', url: 'https://www.bittorrent.org/beps/bep_0000.html' },
  ],
  categories: ['protocols'],
  alternatives: ['IPFS', 'HTTP', 'Resilio Sync'],
  banner: {
    src: './apps/icons/bittorrent.svg',
    alt: 'Ícone do BitTorrent'
  },
  modalBanner: {
    src: './apps/logos/bittorrent.png',
    alt: 'Logo do BitTorrent'
  }
},
{
  name: 'Nostr',
  description: 'Protocolo experimental para redes sociais descentralizadas, baseado em chaves públicas e relays.',
  longDescription: 'Nostr (Notes and Other Stuff Transmitted by Relays) é um protocolo criado para redes sociais descentralizadas, simples e resistente à censura. Ele usa chaves criptográficas para identificar usuários e servidores chamados relays para transmitir mensagens. Qualquer pessoa pode rodar um relay ou cliente, mas o ecossistema ainda está em fase experimental, com poucas aplicações maduras e limitações de usabilidade. É popular entre entusiastas da descentralização e do Bitcoin, mas ainda longe de adoção ampla.',
  features: [
    'Baseado em criptografia de chave pública (sem e-mail ou senha)',
    'Mensagens são transmitidas por relays públicos ou privados',
    'Foco em resistência à censura e simplicidade técnica'
  ],
  links: [
    { label: 'Site oficial do Nostr', url: 'https://nostr.com/' },
    { label: 'Lista de clientes e relays', url: 'https://github.com/aljazceru/awesome-nostr' },
    { label: 'Código do protocolo', url: 'https://github.com/nostr-protocol/nostr' },
  ],
  categories: ['protocols'],
  alternatives: ['ActivityPub', 'AT Protocol'],
  banner: {
    src: './apps/icons/nostr.svg',
    alt: 'Ícone do Nostr'
  },
  modalBanner: {
    src: './apps/logos/nostr.png',
    alt: 'Logo do Nostr'
  }
},
{
  name: 'Tor',
  description: 'Rede anônima que protege sua identidade e permite acessar sites .onion fora da internet tradicional.',
  longDescription: 'Tor (The Onion Router) é um protocolo que permite navegar na internet de forma anônima, escondendo seu endereço IP e localização. Ele funciona roteando o tráfego por uma rede distribuída de servidores voluntários, dificultando rastreamento e vigilância. Além disso, permite acessar serviços ocultos com endereços .onion, que não estão disponíveis pela web convencional. O Tor é usado por jornalistas, ativistas, pesquisadores e qualquer pessoa que queira mais privacidade online.',
  features: [
    'Navegação anônima e proteção contra rastreamento',
    'Acesso a serviços e sites .onion fora da web comum',
    'Funciona com o Navegador Tor e pode ser integrado a apps e servidores'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://www.torproject.org/' },
    { label: 'Código Fonte', url: 'https://gitweb.torproject.org/' },
    { label: 'Como usar o Tor', url: 'https://support.torproject.org/pt-BR/' },
  ],
  categories: ['protocols'],
  alternatives: ['VPN', 'I2P', 'Proxy'],
  banner: {
    src: './apps/icons/tor.svg',
    alt: 'Ícone do Tor'
  },
  modalBanner: {
    src: './apps/logos/tor.png',
    alt: 'Logo do Tor'
  }
},
{
  name: 'Grafana',
  description: 'Ferramenta para criar dashboards e visualizar métricas de sistemas, servidores e aplicações.',
  longDescription: 'Grafana é uma plataforma de visualização de dados usada para monitorar servidores, aplicações, bancos de dados e qualquer outra fonte de métricas. Ele permite criar painéis interativos com gráficos, alertas e consultas personalizadas. Pode ser integrado com Prometheus, InfluxDB, Loki, PostgreSQL e muitos outros. É muito usado por equipes de infraestrutura e desenvolvimento, e pode ser auto-hospedado para manter o controle total das informações.',
  features: [
    'Dashboards interativos com gráficos e métricas em tempo real',
    'Alertas personalizáveis e suporte a várias fontes de dados',
    'Integração com Prometheus, Loki, InfluxDB, PostgreSQL e mais'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://grafana.com/' },
    { label: 'Código Fonte', url: 'https://github.com/grafana/grafana' },
    { label: 'Auto-hospede o Grafana', url: 'https://grafana.com/docs/grafana/latest/setup/' },
  ],
  categories: ['tools'],
  alternatives: ['Kibana', 'Datadog', 'Tableau'],
  banner: {
    src: './apps/icons/grafana.svg',
    alt: 'Ícone do Grafana'
  },
  modalBanner: {
    src: './apps/logos/grafana.png',
    alt: 'Logo do Grafana'
  }
},
{
  name: 'Prometheus',
  description: 'Sistema de monitoramento e coleta de métricas, usado para acompanhar a saúde de servidores e aplicações.',
  longDescription: 'Prometheus é uma ferramenta de monitoramento que coleta, armazena e consulta métricas de sistemas, aplicações, containers e serviços. Ele usa um modelo de dados baseado em séries temporais e uma linguagem própria (PromQL) para criar alertas e análises. É muito usado em ambientes com Docker e Kubernetes, e pode ser integrado ao Grafana para visualização. Por ser auto-hospedado, você tem total controle sobre as métricas e alertas do seu ambiente.',
  features: [
    'Coleta automática de métricas em formato de séries temporais',
    'Sistema de alertas com regras personalizadas',
    'Integração com Grafana para visualização de dashboards'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://prometheus.io/' },
    { label: 'Código Fonte', url: 'https://github.com/prometheus/prometheus' },
    { label: 'Auto-hospede o Prometheus', url: 'https://prometheus.io/docs/prometheus/latest/installation/' },
  ],
  categories: ['tools'],
  alternatives: ['Zabbix', 'Datadog'],
  banner: {
    src: './apps/icons/prometheus.svg',
    alt: 'Ícone do Prometheus'
  },
  modalBanner: {
    src: './apps/logos/prometheus.png',
    alt: 'Logo do Prometheus'
  }
},
{
  name: 'Funkwhale',
  description: 'Plataforma descentralizada para ouvir e compartilhar músicas, parecida com um Spotify federado.',
  longDescription: 'Funkwhale é uma plataforma de streaming de áudio que permite hospedar, organizar e compartilhar músicas de forma descentralizada. Ele funciona com instâncias federadas usando ActivityPub, o que permite seguir e ouvir conteúdo de outras instâncias, como no Mastodon. Pode ser usado para coleções pessoais, rádios comunitárias ou catálogos colaborativos. É uma ótima alternativa ao Spotify, mas com foco em liberdade e controle dos dados.',
  features: [
    'Streaming de áudio com interface web e suporte a coleções pessoais',
    'Integração com o Fediverso via ActivityPub',
    'Ideal para rádios comunitárias, artistas independentes ou uso pessoal'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://funkwhale.audio/' },
    { label: 'Código Fonte', url: 'https://dev.funkwhale.audio/funkwhale/funkwhale' },
    { label: 'Auto-hospede o Funkwhale', url: 'https://docs.funkwhale.audio/administrator/installation/index.html' },
  ],
  categories: ['tools'],
  alternatives: ['Spotify', 'SoundCloud'],
  protocol: ['ActivityPub', 'Fediverso'],
  banner: {
    src: './apps/icons/funkwhale.svg',
    alt: 'Ícone do Funkwhale'
  },
  modalBanner: {
    src: './apps/logos/funkwhale.png',
    alt: 'Logo do Funkwhale'
  }
},

{
  name: 'IRC',
  description: 'Protocolo clássico de chat em tempo real, usado desde os primórdios da internet para conversas em grupo.',
  longDescription: 'IRC (Internet Relay Chat) é um dos protocolos de comunicação mais antigos da internet, criado para bate-papo em tempo real. Ele permite que pessoas entrem em canais (salas de conversa) ou troquem mensagens diretas em servidores públicos ou privados. Apesar da idade, o IRC ainda é usado por muitas comunidades técnicas e projetos de software livre. É leve, simples, funciona em qualquer lugar e pode ser hospedado por você para manter controle total.',
  features: [
    'Salas de bate-papo em tempo real (canais) e mensagens diretas',
    'Leve, rápido e funciona até em conexões lentas',
    'Pode ser auto-hospedado e integrado a bots e scripts'
  ],
  links: [
    { label: 'que é IRC?', url: 'https://pt.wikipedia.org/wiki/Internet_Relay_Chat' },
    { label: 'Clientes e servidores recomendados', url: 'https://github.com/Kickball/awesome-selfhosted#irc' },
    { label: 'Documentação do protocolo', url: 'https://tools.ietf.org/html/rfc1459' },
  ],
  categories: ['protocols'],
  alternatives: ['Matrix', 'XMPP'],
  banner: {
    src: './apps/icons/irc.svg',
    alt: 'Ícone do IRC'
  },
  modalBanner: {
    src: './apps/logos/irc.png',
    alt: 'Logo do IRC'
  }
},
{
  name: 'The Lounge',
  description: 'Cliente web moderno para IRC, com interface amigável e acesso contínuo às conversas.',
  longDescription: 'The Lounge é um cliente de IRC que roda no navegador e mantém você sempre conectado aos canais, mesmo quando fecha a aba. Ele é ideal para quem quer usar IRC com uma interface moderna e prática, parecida com Slack ou Discord, mas mantendo a leveza e descentralização do protocolo IRC. É auto-hospedável e pode ser acessado de qualquer dispositivo, com histórico persistente e suporte a múltiplas redes.',
  features: [
    'Interface web bonita e responsiva, inspirada em apps modernos',
    'Conexão contínua: você não perde mensagens quando está offline',
    'Suporte a múltiplos servidores e histórico completo de conversas'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://thelounge.chat/' },
    { label: 'Código Fonte', url: 'https://github.com/thelounge/thelounge' },
    { label: 'Auto-hospede o The Lounge', url: 'https://thelounge.chat/docs/install-and-upgrade/' },
  ],
  categories: ['tools'],
  alternatives: ['Slack', 'Discord', 'Telegram', 'WhatsApp'],
  protocol: ['IRC'],
  banner: {
    src: './apps/icons/thelounge.svg',
    alt: 'Ícone do The Lounge'
  },
  modalBanner: {
    src: './apps/logos/thelounge.png',
    alt: 'Logo do The Lounge'
  }
},
{
  name: 'La Suite',
  description: 'Conjunto de ferramentas online de escritório mantido pelo governo francês, com foco em soberania digital.',
  longDescription: 'La Suite é uma suíte de aplicativos online voltada para comunicação e produtividade, criada e mantida por instituições públicas da França. Ela inclui e-mail, agenda, editor de documentos, videoconferência e outros serviços colaborativos. O objetivo do projeto é oferecer uma alternativa segura, soberana e de código aberto a plataformas como Google Workspace e Microsoft 365, promovendo independência tecnológica nas instituições públicas.',
  features: [
    'Editor de documentos, planilhas e apresentações online',
    'E-mail, agenda, chat e videoconferência integrados',
    'Baseada em software livre, com foco em privacidade e controle institucional'
  ],
  links: [
    { label: 'Acesse o site oficial', url: 'https://suite.numerique.gouv.fr/' },
    { label: 'Sobre o projeto', url: 'https://www.numerique.gouv.fr/' },
    { label: 'Código Fonte (parcial)', url: 'https://github.com/ministere-numerique' },
  ],
  categories: ['tools'],
  alternatives: ['Google Workspace', 'Microsoft 365', 'Zoho Workplace'],
  protocol: [''],
  banner: {
    src: './apps/icons/lasuite.svg',
    alt: 'Ícone da La Suite'
  },
  modalBanner: {
    src: './apps/logos/lasuite.png',
    alt: 'Logo da La Suite'
  }
},





];
