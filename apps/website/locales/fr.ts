import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Rechercher",
      sortBy: false,
      searchPresence: "Rechercher une Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Tout",
        anime: "Animé",
        games: "Jeux",
        music: "Musique",
        other: "Autres",
        socials: "Réseaux Sociaux",
        videos: "Vidéos et Streams"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: false
      }
    },
    userChip: {
      loading: false
    },
    storeCard: {
      addPresence: false,
      removePresence: false
    },
    donationModal: {
      title: false,
      description: false,
      continue: false,
      close: "Fermer",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Contributeurs",
      downloads: "Téléchargements",
      features: "Fonctionnalités",
      store: "Boutique"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: false,
          description: false
        }
      }
    },
    home: {
      meta: {
        title: "Accueil"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Musique",
        videos: "Vidéos",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Commencer",
      sections: {
        feature: {
          title: false,
          feature1: {
            title: false,
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
      title: "Contributeurs",
      presenceDevelopers: false,
      staff: "Équipe",
      supporters: "Supporteurs",
      translators: "Traducteurs",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Téléchargements",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "C'est l'heure du show.",
          description: "Commencez à utiliser PreMiD dès maintenant et montrez à vos amis ce que vous êtes en train de faire, peut-être vous trouverez quelqu'un avec les mêmes centres d'intérêts.",
          getStarted: "Commencer",
          extension: "Extension"
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
      title: "Boutique",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Description",
          information: "Information"
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
        categories: "Catégories",
        search: "Rechercher une Presence"
      }
    }
  },
  footer: {
    partners: "Partenaires",
    followUs: false,
    supportUs: "Aidez-nous",
    more: "Plus",
    legal: false,
    supportList: {
      donate: "Faire un don",
      contribute: "Contribuer",
      translate: "Traduire"
    },
    moreList: {
      faq: false,
      documentation: "Documentation",
      status: "État"
    },
    legalList: {
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: false,
      cookiePolicy: "Politique de Cookies"
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
      title: false,
      message: false,
      button: false
    }
  }
}));