import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Støt os venligst ved at deaktivere din annonce-blocker."
    }
  },
  component: {
    searchBar: {
      search: "Søg",
      sortBy: "Sorter efter",
      searchPresence: "Søg efter Presence",
      sort: {
        mostUsed: "Mest Brugt",
        alphabetical: "Alfabetisk"
      },
      categories: {
        all: "Alle",
        anime: "Anime",
        games: "Spil",
        music: "Musik",
        other: "Andet",
        socials: "Sociale Apps",
        videos: "Videoer & Streaming"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "Vi arbejder på at understøtte Safari, holde op!"
      }
    },
    userChip: {
      loading: "Indlæser..."
    },
    storeCard: {
      addPresence: "Tilføj",
      removePresence: "Fjern"
    },
    donationModal: {
      title: "En hurtig tjeneste...",
      description: "Vi håber, at du vil elske PreMiD! Hvis det bringer et smil til dit ansigt, hvorfor så ikke sprede nogle kærlighed tilbage? Vores team af frivillige sætter deres hjerter til at gøre det awesome bare for dig!",
      continue: "Fortsæt",
      close: "Luk",
      patreon: "Støtte på {name}",
      github: "Sponsor på {name}",
      holdTight: "Hold stram... indlæser den magiske knap..."
    }
  },
  header: {
    links: {
      contributors: "Bidragydere",
      downloads: "Installationer",
      features: "Funktioner",
      store: "Butik"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Presence Bidrag",
        error: {
          title: "Fejl",
          description: "Vi har problemer med at indlæse denne bruger... Prøv igen senere."
        }
      }
    },
    home: {
      meta: {
        title: "Hjem"
      },
      title: "Forbedre Din Online Tilstedeværelse Med PreMiD",
      subtitle: "Vis dine venner hvad {word} du nyder.",
      words: {
        music: "Musik",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Kom i gang",
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
      title: "Bidragydere",
      presenceDevelopers: false,
      staff: "Personale",
      supporters: "Supportere",
      translators: "Oversættere",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Installationer",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Tid til at vise sig.",
          description: "Brug PreMiD nu og vis dine venner, hvad du laver, måske finder du nogen med de samme interesser.",
          getStarted: "Kom i gang",
          extension: "Udvidelse"
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
      title: "Butik",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Beskrivelse",
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
        categories: "Kategorier",
        search: "Søg efter Presence"
      }
    }
  },
  footer: {
    partners: "Partnere",
    followUs: false,
    supportUs: "Støt os",
    more: "Mere",
    legal: false,
    supportList: {
      donate: "Doner",
      contribute: "Giv os en hjælpende hånd",
      translate: "Oversæt"
    },
    moreList: {
      faq: false,
      documentation: "Dokumentation",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Fortrolighedspolitik",
      termsOfService: false,
      cookiePolicy: "Cookiepolitik"
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
      title: "Fejl",
      message: false,
      button: false
    }
  }
}));