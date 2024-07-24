import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Caută",
      sortBy: false,
      searchPresence: "Căutare Prezență",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Toate",
        anime: "Anime",
        games: "Jocuri",
        music: "Muzică",
        other: "Altele",
        socials: "Sociale",
        videos: "Video & Stream-uri"
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
      close: "Închide",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Contribuitori",
      downloads: "Descărcări",
      features: "Caracteristici",
      store: "Magazin"
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
        title: "Acasă"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Muzică",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Începe",
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
      title: "Contribuitori",
      presenceDevelopers: false,
      staff: "Personal",
      supporters: "Suporteri",
      translators: "Traducători",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Descărcări",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Timp de afișare dezactivat.",
          description: "Folosește PreMiD acum și arată-le prietenilor tăi ce folosești, probabil vei găsi pe cineva cu aceleași interese.",
          getStarted: "Începe",
          extension: "Extensie"
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
      title: "Magazin",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Descriere",
          information: "Informații"
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
        categories: "Categorii",
        search: "Căutare Prezență"
      }
    }
  },
  footer: {
    partners: "Parteneri",
    followUs: false,
    supportUs: "Susține-ne",
    more: "Mai multe",
    legal: false,
    supportList: {
      donate: "Donează ",
      contribute: "Contribuie",
      translate: "Tradu"
    },
    moreList: {
      faq: false,
      documentation: "Documentație",
      status: "Statut"
    },
    legalList: {
      privacyPolicy: "Politică de confidenţialitate",
      termsOfService: false,
      cookiePolicy: "Politică Cookies"
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