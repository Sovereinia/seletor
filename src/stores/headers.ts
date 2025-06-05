import { defineStore } from 'pinia';

export const useHeadersStore = defineStore('headers', () => {
  const desktopHeaders = [
    'headers.desktop.0',
    'headers.desktop.1',
    'headers.desktop.2',
    'headers.desktop.3',
    'headers.desktop.4',
    'headers.desktop.5',
  ];

  const mobileHeaders = [
    'headers.mobile.0',
    'headers.mobile.1',
    'headers.mobile.2',
    'headers.mobile.3',
    'headers.mobile.4',
    'headers.mobile.5',
  ];

  return {
    desktopHeaders,
    mobileHeaders,
  };
}); 