import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Por favor, apóyanos deshabilitando tu bloqueador de anuncios."
    }
  },
  component: {
    searchBar: {
      search: "Buscar",
      sortBy: "Ordenar por",
      searchPresence: "Buscar presence",
      sort: {
        mostUsed: "Más Usado",
        alphabetical: "Alfabético"
      },
      categories: {
        all: "Todo",
        anime: "Anime",
        games: "Juegos",
        music: "Música",
        other: "Otros",
        socials: "Sociales",
        videos: "Videos y Streams"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: "Estamos trabajando en la compatibilidad con Safari, ¡mantente atento!"
      }
    },
    userChip: {
      loading: "Cargando..."
    },
    storeCard: {
      addPresence: "Añadir",
      removePresence: "Eliminar"
    },
    donationModal: {
      title: "Un favor rápido...",
      description: "Esperamos que te encante PreMiD! Si te hace sonreír, ¿por qué no le devuelves un poco de amor? Nuestro equipo de voluntarios se esfuerzan al máximo para que sea increíble sólo para ti!",
      continue: "Continuar",
      close: "Cerrar",
      patreon: "Soporte en {name}",
      github: "Sponsor en {name}",
      holdTight: "Agárrate fuerte... cargando el botón mágico..."
    }
  },
  header: {
    links: {
      contributors: "Contribuidores",
      downloads: "Descargas",
      features: "Características",
      store: "Tienda"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "Error",
          description: "Tenemos problemas para cargar este usuario... Por favor, inténtalo más tarde."
        }
      }
    },
    home: {
      meta: {
        title: "Inicio"
      },
      title: "Mejora tu presencia en línea con PreMiD",
      subtitle: false,
      words: {
        music: "Música",
        videos: "Videos",
        streams: "Streams",
        media: "Multimedia"
      },
      description: false,
      getStarted: "Empecemos",
      sections: {
        feature: {
          title: false,
          feature1: {
            title: "Control de privacidad",
            description: false
          },
          feature2: {
            title: false,
            description: false
          },
          feature3: {
            title: false,
            description: false
          },
          feature4: {
            title: false,
            description: false
          },
          feature5: {
            title: false,
            description: false
          },
          feature6: {
            title: false,
            description: false
          }
        },
        howItWorks: {
          title: false,
          step1: {
            title: false,
            description: false
          },
          step2: {
            title: false,
            description: false
          },
          step3: {
            title: false,
            description: false
          },
          step4: {
            title: false,
            description: false
          }
        },
        callToAction: {
          title: false,
          description: false,
          button: false
        }
      }
    },
    contributors: {
      title: "Contribuidores",
      presenceDevelopers: "Desarrolladores de Presences",
      staff: "Personal",
      supporters: "Donadores",
      translators: "Traductores",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Descargas",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Hora de presumir.",
          description: "Empieza a usar PreMiD ahora mismo y presúmele a tus amigos que estás haciendo, tal vez encuentres a alguien con tus mismos intereses.",
          getStarted: "Empecemos",
          extension: "Extensión"
        }
      },
      browser: {
        your: false,
        other: false,
        based: false
      },
      mobile: {
        title: false,
        description: false
      },
      alphaAccess: {
        title: false,
        description: false,
        callToAction: false
      },
      faq: false,
      faqs: {
        q1: {
          question: false,
          answer: false
        },
        q2: {
          question: false,
          answer: false
        },
        q3: {
          question: false,
          answer: false
        },
        q4: {
          question: false,
          answer: false
        },
        q5: {
          question: false,
          answer: false
        },
        q6: {
          question: false,
          answer: false
        },
        q7: {
          question: false,
          answer: false
        },
        q8: {
          question: false,
          answer: false
        },
        q9: {
          question: false,
          answer: false
        }
      }
    },
    store: {
      title: "Tienda",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Descripción",
          information: "Información"
        },
        informationSection: {
          contributors: false,
          version: false,
          users: false,
          tags: false,
          supportedUrls: false
        }
      },
      header: {
        categories: "Categorías",
        search: "Buscar presence"
      }
    }
  },
  footer: {
    partners: "Socios",
    followUs: false,
    supportUs: "Apóyanos",
    more: "Más",
    legal: false,
    supportList: {
      donate: "Donar",
      contribute: "Contribuir",
      translate: "Traducir"
    },
    moreList: {
      faq: false,
      documentation: "Documentación",
      status: "Estado"
    },
    legalList: {
      privacyPolicy: "Política de Privacidad",
      termsOfService: false,
      cookiePolicy: "Política de cookies"
    },
    withLoveBy: false,
    by: false,
    copyright: false
  },
  error: {
    404: {
      title: false,
      message: false
    },
    500: {
      title: false,
      message: false
    },
    default: {
      title: "Error",
      message: false,
      button: false
    }
  }
}));