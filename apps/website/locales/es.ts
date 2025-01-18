import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Por favor, ayúdanos deshabilitando tu bloqueador de anuncios."
    }
  },
  component: {
    searchBar: {
      search: "Búsqueda",
      sortBy: "Ordenar por",
      searchPresence: "Buscar presence",
      sort: {
        mostUsed: "Más Usado",
        alphabetical: "Alfabético"
      },
      categories: {
        all: "Todas",
        anime: "Anime",
        games: "Juegos",
        music: "Música",
        other: "Otros",
        socials: "Sociales",
        videos: "Vídeos y Directos"
      }
    },
    browserCard: {
      wip: "Trabajo en curso",
      support: {
        safari: "Estamos trabajando en la compatibilidad con Safari, ¡estate atento!"
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
      title: "Un Favor rápido...",
      description: "Esperamos que te encante PreMiD. Si te hace sonreír, ¿por qué no le devuelves un poco de amor? Nuestro equipo de voluntarios se esfuerza al máximo para que sea increíble, ¡sólo para ti!",
      continue: "Continuar",
      close: "Cerrar",
      patreon: "Apóyanos en {name}",
      github: "Apóyanos en {name}",
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
        title: "Contribuciones de Presece",
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
      title: "Mejora tu Presence en línea con PreMiD",
      subtitle: "Enséñale a tus amigos qué {word} estás disfrutando.",
      words: {
        music: "Música",
        videos: "Vídeos",
        streams: "Reproducciones",
        media: "Multimedia"
      },
      description: "PreMiD es una herramienta sencilla y potente que te permite compartir tu actividad multimedia actual en múltiples plataformas como YouTube, Disney+, Netflix y muchas más. Mantente conectado y deja que tus amigos vean lo que estás haciendo en tiempo real.",
      getStarted: "Empecemos",
      sections: {
        feature: {
          title: "Por qué te gustará PreMiD",
          feature1: {
            title: "Control de privacidad",
            description: "Controla tu privacidad y decide qué actividades compartes con los demás. Tus datos, tus reglas."
          },
          feature2: {
            title: "Impulsado por la comunidad",
            description: "Disfruta de una asistencia inigualable para multitud de plataformas, impulsada por una comunidad apasionada y entregada."
          },
          feature3: {
            title: "Ajustes personalizables",
            description: "Adapta tu experiencia PreMiD con amplias opciones de personalización para satisfacer tus preferencias y necesidades."
          },
          feature4: {
            title: "Configuración sencilla",
            description: "Pon en marcha PreMiD en un abrir y cerrar de ojos. Nuestro sencillo proceso de configuración garantiza un inicio sin complicaciones."
          },
          feature5: {
            title: "Cumplimiento de las normas de uso de Discord",
            description: "Cumple plenamente las Condiciones de servicio de Discord utilizando los puntos finales oficiales proporcionados por Discord."
          },
          feature6: {
            title: "Funciones futuras",
            description: "Permanece atento a las nuevas funciones y mejoras que enriquecerán aún más tu experiencia con PreMiD."
          }
        },
        howItWorks: {
          title: "¿Cómo funciona?",
          step1: {
            title: "Instala la extensión",
            description: "Añade PreMiD a tu navegador."
          },
          step2: {
            title: "Inicia sesión con Discord",
            description: "Conecta PreMiD con tu cuenta de Discord."
          },
          step3: {
            title: "Añadir Servicios",
            description: "Elige los servicios que quieres mostrar, como YouTube, Disney+, etc."
          },
          step4: {
            title: "Disfruta",
            description: "Comparte tu actividad y disfruta utilizando PreMiD."
          }
        },
        callToAction: {
          title: "¿Todo listo para empezar?",
          description: "Únete a los {count} de usuarios que ya adoran PreMiD.",
          button: "Empezar ahora"
        }
      }
    },
    contributors: {
      title: "Contribuidores",
      presenceDevelopers: "Desarrolladores de Presences",
      staff: "Personal",
      supporters: "Colaboradores",
      translators: "Traductores",
      avatar: {
        tooltip: "Haz clic para copiar el avatar de {name}"
      }
    },
    downloads: {
      title: "Descargas",
      steps: {
        install: "Instalar la extensión",
        login: "Inicia sesión con Discord",
        add: "Añadir Presences",
        showoff: "¡Presume!"
      },
      section: {
        heading: {
          title: "Hora de presumir.",
          description: "Utiliza ahora PreMiD y presume a tus amigos de lo que haces, quizá encuentres a alguien con tu mismos intereses.",
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
        description: "PreMiD no está disponible para dispositivos móviles, ¡lo sentimos!"
      },
      alphaAccess: {
        title: "¡Desbloquea el acceso Alfa exclusivo!",
        description: "Entra en el futuro de PreMiD convirtiéndote en mecenas o patrocinándonos en GitHub. Tu apoyo no sólo impulsa nuestro desarrollo, sino que también te otorga el primer acceso a las características más innovadoras que estamos creando. Experimenta la vanguardia de lo que PreMiD puede ofrecer e influye en su trayectoria con tus comentarios. No se trata sólo de ser el primero, sino de formar parte de algo más grande.",
        callToAction: "Aprende más y únete a la innovación"
      },
      faq: "Preguntas frecuentes",
      faqs: {
        q1: {
          question: "¿Qué es PreMiD?",
          answer: "PreMiD es una utilidad sencilla y configurable que te permite mostrar lo que estás haciendo en la web en tu estado de actividad de Discord."
        },
        q2: {
          question: "¿Cómo uso PreMiD?",
          answer: "Puedes utilizar PreMiD instalando la extensión e iniciando sesión con tu cuenta de Discord. Una vez hayas iniciado sesión, podrás añadir presences a tu perfil y presumir ante tus amigos."
        },
        q3: {
          question: "¿PreMiD va en contra de las condiciones de uso de Discord?",
          answer: "No, PreMiD no va en contra de los términos de servicio de Discord. PreMiD utiliza la API de Discord (incluidos los puntos finales de la API de acceso restringido proporcionados por Discord) para configurar su actividad. Esto significa que PreMiD cumple totalmente con los términos de servicio de Discord."
        },
        q4: {
          question: "¿Con qué servicios es compatible PreMiD?",
          answer: "PreMiD es compatible con muchos servicios diferentes, como YouTube, Twitch y Netflix. La lista de servicios soportados está en constante crecimiento. Puedes ver la lista completa de Presences en nuestra página de la tienda."
        },
        q5: {
          question: "¿Cómo puedo contribuir a PreMiD?",
          answer: "Puedes contribuir a PreMiD uniéndote a nuestra comunidad en GitHub. Puedes ayudar informando de problemas, sugiriendo funciones o aportando código."
        },
        q6: {
          question: "¿Es gratuito el uso de PreMiD?",
          answer: "Sí, PreMiD es de uso gratuito. Sin embargo, aceptamos donaciones a través de Patreon y Patrocinios de GitHub para ayudar a apoyar el desarrollo del proyecto."
        },
        q7: {
          question: "¿Qué debo hacer si tengo un problema con PreMiD?",
          answer: "Si tienes algún problema con PreMiD, puedes unirte a nuestro servidor Discord para obtener ayuda. También tenemos una guía de solución de problemas en nuestra documentación."
        },
        q8: {
          question: "PreMiD no admite xyz, ¿podéis añadirlo?",
          answer: "Nuestras denominadas Presences están impulsadas por la comunidad, no disponemos de los recursos necesarios para añadir todas y cada una de las plataformas. Sin embargo, puedes añadir tu propia Presence siguiendo las instrucciones de nuestra documentación."
        },
        q9: {
          question: "¿Con qué frecuencia se actualiza PreMiD?",
          answer: "Somos un pequeño proyecto impulsado por voluntarios, nuestro objetivo es actualizar PreMiD con la mayor frecuencia posible, pero no podemos prometer que siempre estemos al día."
        }
      }
    },
    store: {
      title: "Tienda",
      noPresence: "Ninguna presence coincide con tu búsqueda...",
      presence: {
        button: {
          reportIssue: "Informar de un problema",
          suggestFeature: "Sugerir una función",
          viewCode: "Mostrar Código"
        },
        title: {
          description: "Descripción",
          information: "Información"
        },
        informationSection: {
          contributors: "Contribuidores:",
          version: "Versión: {version}",
          users: "Usuarios: {users}",
          tags: "Etiquetas:",
          supportedUrls: "URLs soportadas:"
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
      termsOfService: "Términos del Servicio",
      cookiePolicy: "Política de cookies"
    },
    withLoveBy: "Con",
    by: "por",
    copyright: "©️ {year}-{currentYear} {company} Todos los derechos reservados."
  },
  error: {
    404: {
      title: false,
      message: "La página que estás buscando no existe."
    },
    500: {
      title: false,
      message: "Se ha producido un error por nuestra parte."
    },
    default: {
      title: "Error",
      message: "Se ha producido un error por nuestra parte.",
      button: "Volver"
    }
  }
}));