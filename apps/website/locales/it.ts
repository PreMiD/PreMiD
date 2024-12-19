import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Cerca",
      sortBy: false,
      searchPresence: "Cerca Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Tutto",
        anime: "Anime",
        games: "Giochi",
        music: "Musica",
        other: "Altro",
        socials: "Social",
        videos: "Video & Dirette"
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
      close: "Chiudi",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Collaboratori",
      downloads: "Download",
      features: "Caratteristiche",
      store: "Store"
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
        title: "Homepage"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Musica",
        videos: "Video",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Inizia Ora",
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
      title: "Collaboratori",
      presenceDevelopers: false,
      staff: "Staff",
      supporters: "Sostenitori",
      translators: "Traduttori",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Download",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "È ora di mettersi in mostra.",
          description: "Inizia ad usare ora PreMiD e mostra ai tuoi amici cosa stai facendo, forse potrai trovare qualcuno con i tuoi stessi interessi.",
          getStarted: "Inizia Ora",
          extension: "Estensione"
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
      title: "Store",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Descrizione",
          information: "Informazione"
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
        categories: "Categorie",
        search: "Cerca Presence"
      }
    }
  },
  footer: {
    partners: "Partner",
    followUs: false,
    supportUs: "Supportaci",
    more: "Di più",
    legal: false,
    supportList: {
      donate: "Dona",
      contribute: "Contribuisci",
      translate: "Traduci"
    },
    moreList: {
      faq: false,
      documentation: "Documentazione",
      status: "Stato"
    },
    legalList: {
      privacyPolicy: "Politica sulla privacy",
      termsOfService: false,
      cookiePolicy: "Informativa sui Cookie"
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