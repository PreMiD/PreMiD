import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Keresés",
      sortBy: false,
      searchPresence: "Presence keresése",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Minden",
        anime: "Anime",
        games: "Játék",
        music: "Zene",
        other: "Egyéb",
        socials: "Közösségi",
        videos: "Videók és Közvetítések"
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
      close: "Bezárás",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Közreműködők",
      downloads: "Letöltések",
      features: "Funkciók",
      store: "Áruház"
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
        title: "Kezdőlap"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Zene",
        videos: "Videók",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Kezdő lépések",
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
      title: "Közreműködők",
      presenceDevelopers: false,
      staff: "Csapat",
      supporters: "Támogatók",
      translators: "Fordítók",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Letöltések",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Ideje felvágni.",
          description: "Használd a PreMiD-et most és oszd meg másokkal, amit éppen csinálsz, így talán hasonló érdeklődésű személyeket is felfedezhetsz.",
          getStarted: "Kezdő lépések",
          extension: "Bővítmény"
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
      title: "Áruház",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Leírás",
          information: "Információ"
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
        categories: "Kategóriák",
        search: "Presence keresése"
      }
    }
  },
  footer: {
    partners: "Partnerek",
    followUs: false,
    supportUs: "Támogass minket",
    more: "Továbbiak",
    legal: false,
    supportList: {
      donate: "Támogatás",
      contribute: "Hozzájárulás",
      translate: "Fordítás"
    },
    moreList: {
      faq: false,
      documentation: "Dokumentáció",
      status: "Állapot"
    },
    legalList: {
      privacyPolicy: "Adatvédelmi irányelvek",
      termsOfService: false,
      cookiePolicy: "Cookie irányelvek"
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