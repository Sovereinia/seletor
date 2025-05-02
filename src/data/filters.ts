const filters = [
  {
    id: 'type',
    title: 'Tipo',
    items: [
      {
        id: 'social_media',
        label: 'Rede Social',
      },
      {
        id: 'message',
        label: 'Mensagem',
      },
      {
        id: 'email',
        label: 'E-mail',
      },
      {
        id: 'browser',
        label: 'Navegador',
      },
      {
        id: 'communication',
        label: 'Comunicação',
      },
    ],
  },
  {
    id: 'features',
    title: 'Características',
    items: [
      {
        id: 'descentralized',
        label: 'Descentralizado',
      },
      {
        id: 'criptography',
        label: 'Criptografia',
      },
      {
        id: 'privacy',
        label: 'Privacidade',
      },
      {
        id: 'open_source',
        label: 'Código aberto',
      },
      {
        id: 'self_hosting',
        label: 'Auto-hospedagem',
      },
    ],
  },
  {
    id: 'devices',
    title: 'Dispositivos',
    items: [
      {
        id: 'web',
        label: 'Web',
      },
      {
        id: 'android',
        label: 'Android',
      },
      {
        id: 'ios',
        label: 'IOS',
      },
      {
        id: 'desktop',
        label: 'Desktop',
      },
      {
        id: 'linux',
        label: 'Linux',
      },
      {
        id: 'macos',
        label: 'MacOS',
      },
      {
        id: 'windows',
        label: 'Windows',
      },
    ],
  },
  {
    id: 'difficulty',
    text: 'Facilidade de uso',
    items: [
      {
        id: 'beginner',
        label: 'Iniciante',
      },
      {
        id: 'intermediate',
        label: 'Intermediário',
      },
      {
        id: 'advanced',
        label: 'Avançado',
      },
    ],
  },
];

export default filters;
