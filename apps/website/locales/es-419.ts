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
      wip: "Trabajo en progreso",
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
        title: "Contribuidores de Presencia",
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
      subtitle: "Enseña a tus amigos que {word} estas disfrutando.",
      words: {
        music: "Música",
        videos: "Videos",
        streams: "Streams",
        media: "Multimedia"
      },
      description: "PreMiD es una herramienta simple y poderosa que te permite compartir tu actividad actual en medios a través de múltiples plataformas como YouTube, Disney+, Netflix y más. Mantente conectado y deja que tus amigos vean lo que estás haciendo en tiempo real.",
      getStarted: "Empecemos",
      sections: {
        feature: {
          title: "Porque te gustara PreMiD",
          feature1: {
            title: "Control de privacidad",
            description: "Toma el control de la configuración de tu privacidad y decide qué actividades compartes con otros. Tus datos, tus reglas."
          },
          feature2: {
            title: "Impulsado por la comunidad",
            description: "Experimenta un soporte incomparable para una multitud de plataformas, impulsado por una comunidad apasionada y dedicada."
          },
          feature3: {
            title: "Configuraciones personalizables",
            description: "Personaliza tu experiencia en PreMiD con amplias opciones de configuración para adaptarlas a tus preferencias y necesidades."
          },
          feature4: {
            title: "Configuracion facil",
            description: "Ponte en marcha con PreMiD en poco tiempo. Nuestro proceso de configuración sencillo garantiza un inicio sin complicaciones."
          },
          feature5: {
            title: "Cumple con los Términos de Servicio de Discord",
            description: "Totalmente compatible con los Términos de Servicio de Discord al utilizar los puntos finales oficiales proporcionados por Discord."
          },
          feature6: {
            title: "Características futuras",
            description: "Mantente atento a emocionantes nuevas características y mejoras que harán que tu experiencia con PreMiD sea aún mejor."
          }
        },
        howItWorks: {
          title: "Como funciona",
          step1: {
            title: "Instala la Extension",
            description: "Agrega PreMiD a tu navegador."
          },
          step2: {
            title: "Inicia sesion con Discord",
            description: "Conecta PreMiD a tu cuenta de discord."
          },
          step3: {
            title: "Agregar servicios",
            description: "Elije el servicio que quieres mostrar, como Youtube, Disney=, y mas."
          },
          step4: {
            title: "Disfruta",
            description: "Comparte tu actividad y disfruta usando PreMiD."
          }
        },
        callToAction: {
          title: "¿listo para empezar?",
          description: "Unete a los {count} de usuarios quienes ya aman a PreMiD.",
          button: "Empezar ya"
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
        tooltip: "Haz clic para copiar el avatar de {name}"
      }
    },
    downloads: {
      title: "Descargas",
      steps: {
        install: "Instala la Extension",
        login: "Inicia Sesion con Discord",
        add: "Agregar Prensencias",
        showoff: "¡Presumelo!"
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
        your: "Tu navegador",
        other: "Otros navegadores",
        based: "Basado en {browser}"
      },
      mobile: {
        title: "¡Malas noticias!",
        description: "PreMiD no esta disponible para celulares, ¡Perdon!"
      },
      alphaAccess: {
        title: "¡Desbloquea el acceso Alfa exclusivo!",
        description: "Da el siguiente paso al futuro de PreMiD convirtiéndote en un patrocinador o apoyándonos en GitHub. Tu apoyo no solo impulsa nuestro desarrollo, sino que también te otorga acceso exclusivo a las características más innovadoras que estamos creando. Vive lo último en lo que PreMiD tiene para ofrecer e influye en su rumbo con tus comentarios. No se trata solo de ser el primero, sino de ser parte de algo más grande.",
        callToAction: "Aprende más y únete a la innovación"
      },
      faq: "Preguntas frecuentes",
      faqs: {
        q1: {
          question: "¿Qué es PreMiD?",
          answer: "PreMiD es una utilidad sencilla y configurable que te permite mostrar lo que estás haciendo en la web en tu estado de actividad de Discord."
        },
        q2: {
          question: "¿Cómo puedo usarPreMiD?",
          answer: "Puedes utilizar PreMiD instalando la extensión e iniciando sesión con tu cuenta de Discord. Una vez hayas iniciado sesión, podrás añadir presences a tu perfil y presumir ante tus amigos."
        },
        q3: {
          question: "¿PreMiD va en contra de las condiciones de uso de Discord?",
          answer: "No, PreMiD no va en contra de los términos de servicio de Discord. PreMiD utiliza la API de Discord (incluidos los puntos finales de la API de acceso restringido proporcionados por Discord) para configurar su actividad. Esto significa que PreMiD cumple totalmente con los términos de servicio de Discord."
        },
        q4: {
          question: "¿Con qué servicios es compatible PreMiD?",
          answer: "PreMid es compatible con muchos servicios diferentes como YouTube, Twitch, y Netflitx. La lista de servicios con soporte crece constantemente. Puedes ver la lista completa de Presencias en nuestra página de la tienda."
        },
        q5: {
          question: false,
          answer: false
        },
        q6: {
          question: false,
          answer: "Sí, PreMid es de uso gratuito. Sin embargo, aceptamos donaciones a través de Patreon y Sponsors de GitHub para ayudar a apoyar el desarrollo del proyecto."
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