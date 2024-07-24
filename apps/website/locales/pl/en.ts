import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Szukaj",
      sortBy: false,
      searchPresence: "Szukaj Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Wszystkie",
        anime: "Anime",
        games: "Gry",
        music: "Muzyka",
        other: "Inne",
        socials: "Media Społecznościowe",
        videos: "Filmy i transmisje"
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
      close: "Zamknij",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Współtwórcy",
      downloads: "Pliki do pobrania",
      features: "Funkcje",
      store: "Sklep"
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
        title: "Strona główna"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Muzyka",
        videos: "Wideo",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Jak rozpocząć",
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
      title: "Współtwórcy",
      presenceDevelopers: "Twórcy Presence",
      staff: "Administracja",
      supporters: "Wspierający",
      translators: "Tłumacze",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Pliki do pobrania",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Czas się pochwalić.",
          description: "Użyj PreMiD teraz i zacznij się chwalić znajomym, co robisz. Być może znajdziesz kogoś o takich samych zainteresowaniach.",
          getStarted: "Jak rozpocząć",
          extension: "Rozszerzenie"
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
      title: "Sklep",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Opis",
          information: "Informacje"
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
        categories: "Kategorie",
        search: "Szukaj Presence"
      }
    }
  },
  footer: {
    partners: "Partnerzy",
    followUs: false,
    supportUs: "Wesprzyj nas",
    more: "Więcej",
    legal: false,
    supportList: {
      donate: "Wesprzyj",
      contribute: "Przyczyń się",
      translate: "Przetłumacz"
    },
    moreList: {
      faq: false,
      documentation: "Dokumentacja",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Polityka Prywatności",
      termsOfService: false,
      cookiePolicy: "Polityka plików cookies"
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