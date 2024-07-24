import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Otsi",
      sortBy: false,
      searchPresence: "Otsi Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Kõik",
        anime: "Anime",
        games: "Mängud",
        music: "Muusika",
        other: "Muud",
        socials: "Sotsiaalmeedia",
        videos: "Videod & Otseülekanded"
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
      close: "Sule",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Abilised",
      downloads: "Allalaadimised",
      features: "Funktsioonid",
      store: "Pood"
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
        title: "Avaleht"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Muusika",
        videos: "Videod",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Alusta",
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
      title: "Abilised",
      presenceDevelopers: false,
      staff: "Meeskond",
      supporters: "Toetajad",
      translators: "Tõlkijad",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Allalaadimised",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Aeg eputada.",
          description: "Kasutage PreMiD-i kohe ja näidake sõpradele, millega tegelete. Võib-olla leiate kellegi, kellel on samad huvid.",
          getStarted: "Alusta",
          extension: "Lisa"
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
      title: "Pood",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Kirjeldus",
          information: "Informatsioon"
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
        categories: "Kategooriad",
        search: "Otsi Presence"
      }
    }
  },
  footer: {
    partners: "Partnerid",
    followUs: false,
    supportUs: "Toeta meid",
    more: "Veel",
    legal: false,
    supportList: {
      donate: "Anneta",
      contribute: "Aita kaasa",
      translate: "Tõlgi"
    },
    moreList: {
      faq: false,
      documentation: "Dokumendid",
      status: "Staatus"
    },
    legalList: {
      privacyPolicy: "Privaatsuspoliitika",
      termsOfService: false,
      cookiePolicy: "Küpsise poliitika"
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