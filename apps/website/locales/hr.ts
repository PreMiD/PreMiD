import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Pretraži",
      sortBy: false,
      searchPresence: "Pretraži Statuse",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Sve",
        anime: "Anime",
        games: "Igrice",
        music: "Glazba",
        other: "Ostalo",
        socials: "Društvene mreže",
        videos: "Video i Streaming"
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
      close: "Zatvori",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Prinosnici",
      downloads: "Preuzimanja",
      features: "Značajke",
      store: "Trgovina"
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
        title: false
      },
      title: false,
      subtitle: false,
      words: {
        music: "Glazba",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Započnimo",
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
      title: "Prinosnici",
      presenceDevelopers: "Razvojni programeri prisutnosti",
      staff: "Osoblje",
      supporters: "Pristaše",
      translators: "Prevoditelji",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Preuzimanja",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Vrijeme da se pokažeš.",
          description: "Koristi PreMiD sada i pokaži svojim prijateljima što radš, možda pronađeš nekoga sa istim interestima.",
          getStarted: "Započnimo",
          extension: "Proširenje"
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
      title: "Trgovina",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Opis",
          information: "Informacije"
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
        categories: "Kategorije",
        search: "Pretraži Statuse"
      }
    }
  },
  footer: {
    partners: "Partneri",
    followUs: false,
    supportUs: "Podržite nas",
    more: "Više",
    legal: false,
    supportList: {
      donate: "Donirajte",
      contribute: "Pridonesite",
      translate: "Prevedi"
    },
    moreList: {
      faq: false,
      documentation: "Dokumentacija",
      status: "Stanje"
    },
    legalList: {
      privacyPolicy: "Privatnosti",
      termsOfService: false,
      cookiePolicy: "Pravila o kolačićima"
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