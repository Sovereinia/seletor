import { ref, watchEffect } from 'vue'

export interface SEOData {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  robots?: string
}

const defaultSEO: SEOData = {
  title: 'Sovereinia | Guia de Apps',
  description: 'Apps descentralizados que funcionam sem um único dono, com redes independentes, mais liberdade, privacidade e controle para quem participa.',
  keywords: 'Sovereinia, Seletor, Guia, Guia de Apps, Apps Descentralizados, Auto-hospedagem, Apps Alternativos, Redes Sociais, Ferramentas de Trabalho, Protocolos Abertos',
  ogTitle: 'Sovereinia | Guia de Apps',
  ogDescription: 'Apps descentralizados que funcionam sem um único dono, com redes independentes, mais liberdade, privacidade e controle para quem participa.',
  ogImage: 'https://sovereinia.org/guia/og-image.png',
  ogUrl: 'https://sovereinia.org/guia/',
  twitterTitle: 'Sovereinia | Guia de Apps',
  twitterDescription: 'Apps descentralizados que funcionam sem um único dono, com redes independentes, mais liberdade, privacidade e controle para quem participa.',
  twitterImage: 'https://sovereinia.org/guia/og-image.png',
  canonical: 'https://sovereinia.org/guia/',
  robots: 'index, follow'
}

export function useSEO() {
  const currentSEO = ref<SEOData>({ ...defaultSEO })

  const updateSEO = (seoData: Partial<SEOData>) => {
    currentSEO.value = { ...currentSEO.value, ...seoData }
  }

  const resetSEO = () => {
    currentSEO.value = { ...defaultSEO }
  }

  const setMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
    let meta = document.querySelector(selector) as HTMLMetaElement

    if (!meta) {
      meta = document.createElement('meta')
      if (property) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', content)
  }

  const setLinkTag = (rel: string, href: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement

    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', rel)
      document.head.appendChild(link)
    }

    link.setAttribute('href', href)
  }

  watchEffect(() => {
    const seo = currentSEO.value

    // Update title
    if (seo.title) {
      document.title = seo.title
    }

    // Update meta tags
    if (seo.description) {
      setMetaTag('description', seo.description)
    }

    if (seo.keywords) {
      setMetaTag('keywords', seo.keywords)
    }

    if (seo.robots) {
      setMetaTag('robots', seo.robots)
    }

    // Update Open Graph tags
    if (seo.ogTitle) {
      setMetaTag('og:title', seo.ogTitle, true)
    }

    if (seo.ogDescription) {
      setMetaTag('og:description', seo.ogDescription, true)
    }

    if (seo.ogImage) {
      setMetaTag('og:image', seo.ogImage, true)
    }

    if (seo.ogUrl) {
      setMetaTag('og:url', seo.ogUrl, true)
    }

    // Update Twitter Card tags
    if (seo.twitterTitle) {
      setMetaTag('twitter:title', seo.twitterTitle)
    }

    if (seo.twitterDescription) {
      setMetaTag('twitter:description', seo.twitterDescription)
    }

    if (seo.twitterImage) {
      setMetaTag('twitter:image', seo.twitterImage)
    }

    // Update canonical URL
    if (seo.canonical) {
      setLinkTag('canonical', seo.canonical)
    }
  })

  return {
    currentSEO,
    updateSEO,
    resetSEO
  }
}
