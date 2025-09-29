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
          question: "¿Cómo puedo contribuir a PreMid?",
          answer: "Puedes contribuir a PreMid uniéndote a nuestra comunidad en GitHub. Puedes ayudar reportando problemas, sugiriendo funciones, o aportando código."
        },
        q6: {
          question: "¿PreMid es de uso gratuito?",
          answer: "Sí, PreMid es de uso gratuito. Sin embargo, aceptamos donaciones a través de Patreon y Sponsors de GitHub para ayudar a apoyar el desarrollo del proyecto."
        },
        q7: {
          question: "¿Qué debo hacer si tengo un problema con PreMid?",
          answer: "Si encuentras algún problema con PreMid, puedes unirte a nuestro servidor de Discord para obtener ayuda. También tenemos una guía de solución de problemas en nuestra documentación."
        },
        q8: {
          question: "PreMid no admite xyz, ¿pueden añadirlo?",
          answer: "Nuestras llamadas Presencias son impulsadas por la comunidad, no tenemos los recursos para añadirlas a todas las plataformas. Sin embargo, puedes añadir tu propia Presencia siguiendo las instrucciones en nuestra documentación."
        },
        q9: {
          question: "¿Cada cuánto se actualiza PreMid?",
          answer: "Somos un pequeño proyecto impulsado por voluntarios, nuestro objetivo es actualizar PreMid con la mayor frecuencia posible, pero no podemos prometer estar siempre al día."
        }
      }
    },
    store: {
      title: "Tienda",
      noPresence: "Ninguna Presencia coincide con tu búsqueda...",
      presence: {
        button: {
          reportIssue: "Informar de un problema",
          suggestFeature: "Sugerir una función",
          viewCode: "Ver código"
        },
        title: {
          description: "Descripción",
          information: "Información"
        },
        informationSection: {
          contributors: "Colaboradores:",
          version: "Version: {version}",
          users: "Users: {users}",
          tags: "Etiquetas:",
          supportedUrls: "URLs compatibles:"
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
    followUs: "Síguenos",
    supportUs: "Apóyanos",
    more: "Más",
    legal: "Legal",
    supportList: {
      donate: "Donar",
      contribute: "Contribuir",
      translate: "Traducir"
    },
    moreList: {
      faq: "Preguntas Frecuentes",
      documentation: "Documentación",
      status: "Estado"
    },
    legalList: {
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      cookiePolicy: "Política de cookies"
    },
    withLoveBy: "Con",
    by: "de",
    copyright: "© {year}-{currentYear} {company} Todos los derechos reservados."
  },
  error: {
    404: {
      title: false,
      message: "La página que estás buscando no existe."
    },
    500: {
      title: false,
      message: "Algo salió mal por nuestra parte."
    },
    default: {
      title: "Error",
      message: "Algo salió mal por nuestra parte.",
      button: "Volver"
    }
  }
}));