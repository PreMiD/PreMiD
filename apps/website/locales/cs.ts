import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Hledat",
      sortBy: "Seřadit podle",
      searchPresence: "Hledat Presence",
      sort: {
        mostUsed: "Nejpoužívanější",
        alphabetical: "Abecedně"
      },
      categories: {
        all: "Vše",
        anime: "Anime",
        games: "Hry",
        music: "Hudba",
        other: "Ostatní",
        socials: "Sociální sítě",
        videos: "Videa & Streamy"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: false
      }
    },
    userChip: {
      loading: "Načítání..."
    },
    storeCard: {
      addPresence: "Přidat",
      removePresence: "Odebrat"
    },
    donationModal: {
      title: false,
      description: false,
      continue: "Pokračovat",
      close: "Zavřít",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Přispěvatelé",
      downloads: "Stáhnout",
      features: "Funkce",
      store: "Obchod"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "Chyba",
          description: false
        }
      }
    },
    home: {
      meta: {
        title: "Domů"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Hudba",
        videos: "Videa",
        streams: "Streamování",
        media: "Média"
      },
      description: false,
      getStarted: "Jak Začít",
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
            title: "Užívej si",
            description: false
          }
        },
        callToAction: {
          title: false,
          description: false,
          button: "Přidej Se"
        }
      }
    },
    contributors: {
      title: "Přispěvatelé",
      presenceDevelopers: false,
      staff: "Jadro týmu",
      supporters: "Podporovatelé",
      translators: "Překladatelé",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Stáhnout",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: "Předveď se!"
      },
      section: {
        heading: {
          title: "Čas se předvést.",
          description: "Použij PreMiD a ukaž svým přátelům, co děláš, možná najdeš někoho se stejnými zájmy.",
          getStarted: "Jak Začít",
          extension: "Rozšíření"
        }
      },
      browser: {
        your: false,
        other: false,
        based: false
      },
      mobile: {
        title: "Špatné zprávy!",
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
      title: "Obchod",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: "Zobrazit Kód"
        },
        title: {
          description: "Popis",
          information: "Informace"
        },
        informationSection: {
          contributors: false,
          version: false,
          users: false,
          tags: "Štítky:",
          supportedUrls: false
        }
      },
      header: {
        categories: "Kategorie",
        search: "Hledat Presence"
      }
    }
  },
  footer: {
    partners: "Partneři",
    followUs: "Sleduj nás",
    supportUs: "Podpoř nás",
    more: "Více",
    legal: false,
    supportList: {
      donate: "Podpořit",
      contribute: "Přispět",
      translate: "Přeložit"
    },
    moreList: {
      faq: "FAQ",
      documentation: "Dokumentace",
      status: "Stav"
    },
    legalList: {
      privacyPolicy: "Zásady ochrany osobních údajů",
      termsOfService: false,
      cookiePolicy: "Zásady používání souborů cookie"
    },
    withLoveBy: "S",
    by: "od",
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
      title: "Chyba",
      message: false,
      button: "Zpět"
    }
  }
}));