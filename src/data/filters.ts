// src/data/filters.ts

import type { FiltersByCategory } from '@/types';


const baseFilters: Omit<FiltersByCategory, 'all'> = {
  social: [
    {
      id: 'proposito',
      name: 'Proposito de uso',
      items: [
        { id: 'microblogging', name: 'Microblogging' },
        { id: 'foto', name: 'Compartilhar fotos' },
        { id: 'video', name: 'Compartilhar vídeos' },
        { id: 'forum', name: 'Forum e discussões' },
        { id: 'social', name: 'Socialização' },
        { id: 'multi', name: 'Tudo em um só lugar' },
      ]
    },
    {
      id: 'interoperabilidade',
      name: 'Conexões inter-instância',
      items: [
        { id: 'fediverso', name: 'Fediverso' },
      ]
    },
    {
      id: 'funcoes',
      name: 'Funções',
      items: [
        { id: 'PostsEnfeidos', name: 'Posts enfeitdos'},
        { id: 'enquetes', name: 'Enquetes' },
        { id: 'reacoes', name: 'Reações' },
        { id: 'emoji', name: 'Emoji' },
        { id: 'minimalismo', name: 'Minimalismo' },
        { id: 'customizacao', name: 'Experiência customizável' },
        { id: 'forum', name: 'Modelo de forum e discussõs' },
      ]
    },
    {
      id: 'tipoDeInteracao',
      name: 'Tipo de Interação',
      items: [
        { id: 'seguidores', name: 'Seguidores' },
        { id: 'grupo', name: 'Discussões em grupo ou comunidade' },
        { id: 'amigos', name: 'Amizades' },
      ]
    },
    {
      id: 'audiencia',
      name: 'Audiência',
      items: [
        { id: 'publico', name: 'Posts públicos' },
        { id: 'privado', name: 'Controle de visibilidade' },
      ]
    },
    {
      id: 'privacidade',
      name: 'Privacidade',
      items: [
        { id: 'privado', name: 'Foco em privacidade e psudônimos' },
        { id: 'publico', name: 'Identidade portátil' },
      ]
    },
    {
      id: 'externsoes',
      name: 'Extensões',
      items: [
        { id: 'calendario', name: 'Calendário' },
        { id: 'compartilha-arquivos', name: 'Compartilhamento de arquivos' },
        { id: 'grupos', name: 'Grupos' },
      ]
    },
    {
      id: 'popularidade',
      name: 'Popularidade',
      items: [
        { id: 'grande', name: 'Maiores redes' },
        { id: 'emergente', name: 'Comunidades emergentes' },
        { id: 'ativo', name: 'Pequeno mas ativo' },
      ]
    },
  ],
  messaging: [
    {
      id: 'tipo',
      name: 'Tipo',
      items: [
        { id: 'mensagens', name: 'Mensagens' },
        { id: 'voz', name: 'Voz' },
        { id: 'video', name: 'Vídeo' },
      ]
    },
    {
      id: 'criptografia',
      name: 'Criptografia',
      items: [
        { id: 'end_to_end', name: 'Ponta a ponta' },
        { id: 'servidor', name: 'Servidor' }
      ]
    }
  ],
  tools: [],
  protocols: [],
};

// Combina todos os filtros sem duplicar grupos pelo id
const allFilters = Object.values(baseFilters)
  .flat()
  .reduce((acc: Record<string, any>, filter) => {
    if (!acc[filter.id]) {
      acc[filter.id] = { ...filter, items: [...filter.items] };
    } else {
      const existingIds = new Set(acc[filter.id].items.map((i: any) => i.id));
      const newItems = filter.items.filter((i: any) => !existingIds.has(i.id));
      acc[filter.id].items.push(...newItems);
    }
    return acc;
  }, {});

export const filtersByCategory: FiltersByCategory = {
  ...baseFilters,
  all: Object.values(allFilters)
};
