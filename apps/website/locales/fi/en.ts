import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Etsi",
      sortBy: false,
      searchPresence: "Etsi presenceä",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Kaikki",
        anime: "Anime",
        games: "Pelit",
        music: "Musiikki",
        other: "Muut",
        socials: "Somet",
        videos: "Videot & Suoratoistot"
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
      close: "Sulje",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Osallistujat",
      downloads: "Lataukset",
      features: "Ominaisuudet",
      store: "Kauppa"
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
        title: "Etusivu"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Musiikki",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Aloita tästä",
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
      title: "Osallistujat",
      presenceDevelopers: false,
      staff: "Henkilökunta",
      supporters: false,
      translators: "Kääntäjät",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Lataukset",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Aika näyttää.",
          description: "Käytä PreMiDiä nyt ja näytä muille ihmisille mitä teet - ehkä löydät jonkun, jolla on samat kiinnostuksenkohteet kuin sinulla.",
          getStarted: "Aloita tästä",
          extension: "Selainlaajennus"
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
      title: "Kauppa",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Kuvaus",
          information: "Tietoja"
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
        categories: "Kategoriat",
        search: "Etsi presenceä"
      }
    }
  },
  footer: {
    partners: "Yhteistyökumppanit",
    followUs: false,
    supportUs: "Tue meitä",
    more: "Lisää",
    legal: false,
    supportList: {
      donate: "Lahjoita ",
      contribute: "Osallistu",
      translate: "Käännä"
    },
    moreList: {
      faq: false,
      documentation: "Ohjeet",
      status: "Tila"
    },
    legalList: {
      privacyPolicy: "Tietosuojakäytäntö",
      termsOfService: false,
      cookiePolicy: "Evästekäytäntö"
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