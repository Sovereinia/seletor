import type { ProtocolInfo } from '../types';

export const protocolIcons: Record<string, ProtocolInfo> = {
  "ActivityPub": {
    src: '/protocols/activitypub.png',
    url: 'https://www.w3.org/TR/activitypub/',
    alt: 'Logo do protocolo ActivityPub',
  },
  "Fediverso": {
    src: '/protocols/fediverse.png',
    url: 'https://pt.wikipedia.org/wiki/Fediverse',
    alt: 'Logo do Fediverso',
  },
  "WebDAV": {
    src: '/protocols/webdav.png',
    url: 'https://pt.wikipedia.org/wiki/WebDAV',
    alt: 'Logo do WebDAV',
  },
  "Matrix": {
    src: '/protocols/matrix.png',
    url: 'https://pt.wikipedia.org/wiki/Matrix_(protocolo)',
    alt: 'Logo do protocolo Matrix',
  },
  "Signal Protocol": {
    src: '/protocols/signal-protocol.png',
    url: 'https://pt.wikipedia.org/wiki/Signal_Protocol',
    alt: 'Logo do Signal Protocol',
  },
  "Lemmyverso": {
    src: '/protocols/lemmyverse.png',
    url: 'https://join-lemmy.org/',
    alt: 'Logo do Lemmyverso',
  },
  "WebRTC": {
    src: '/protocols/webrtc.png',
    url: 'https://pt.wikipedia.org/wiki/WebRTC',
    alt: 'Logo do WebRTC',
  },
  "Diaspora protocol": {
    src: '/protocols/diaspora.png',
    url: 'https://pt.wikipedia.org/wiki/Diaspora_(rede_social)',
    alt: 'Logo do protocolo Diaspora',
  },
  "Zot": {
    src: '/protocols/zot.png',
    url: 'https://project.hubzilla.org/help/Zot',
    alt: 'Logo do protocolo Zot',
  },
  "Git": {
    src: '/protocols/git.png',
    url: 'https://pt.wikipedia.org/wiki/Git',
    alt: 'Logo do Git',
  },
  "OIDC": {
    src: '/protocols/oidc.png',
    url: 'https://pt.wikipedia.org/wiki/OpenID_Connect',
    alt: 'Logo do OIDC',
  },
  "SAML": {
    src: '/protocols/saml.png',
    url: 'https://pt.wikipedia.org/wiki/SAML_2.0',
    alt: 'Logo do SAML',
  },
  "OAuth2": {
    src: '/protocols/oauth2.png',
    url: 'https://pt.wikipedia.org/wiki/OAuth',
    alt: 'Logo do OAuth2',
  },
  "AT Protocol": {
    src: '/protocols/atprotocol.png',
    url: 'https://pt.wikipedia.org/wiki/Bluesky',
    alt: 'Logo do AT Protocol',
  },
  "RSS": {
    src: '/protocols/rss.png',
    url: 'https://pt.wikipedia.org/wiki/RSS',
    alt: 'Logo do protocolo RSS',
  },
  "BitTorrent": {
    src: '/protocols/bittorrent.png',
    url: 'https://pt.wikipedia.org/wiki/BitTorrent',
    alt: 'Logo do protocolo BitTorrent',
  },
  "Nostr": {
    src: '/protocols/nostr.png',
    url: 'https://nostr.com/', // sem link em português no momento
    alt: 'Logo do protocolo Nostr',
  },
  "Tor": {
    src: '/protocols/tor.png',
    url: 'https://pt.wikipedia.org/wiki/Tor_(rede_de_anonimato)',
    alt: 'Logo do Tor',
  },
  "XMPP": {
    src: '/protocols/xmpp.png',
    url: 'https://pt.wikipedia.org/wiki/XMPP',
    alt: 'Logo do protocolo XMPP',
  },
  "IMAP": {
  src: '/protocols/imap.png',
  url: 'https://pt.wikipedia.org/wiki/IMAP',
  alt: 'Logo do protocolo IMAP',
  },
  "SMTP": {
    src: '/protocols/smtp.png',
    url: 'https://pt.wikipedia.org/wiki/SMTP',
    alt: 'Logo do protocolo SMTP',
  },
  "POP3": {
    src: '/protocols/pop3.png',
    url: 'https://pt.wikipedia.org/wiki/Post_Office_Protocol',
    alt: 'Logo do protocolo POP3',
  },
};
//
 // protocol: ['SMTP', 'IMAP', 'POP3'],
  // If SVG is available, that's best
  // otherwise, PNG with the following dimensions:
  // - protocol logos: height best: 80px mminimum: 60px

