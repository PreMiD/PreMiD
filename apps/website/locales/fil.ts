import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Mag-search",
      sortBy: false,
      searchPresence: "Mag-search sa Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: false,
        anime: false,
        games: false,
        music: false,
        other: false,
        socials: false,
        videos: false
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: "Kami ay nagtatrabaho upang masuportahan ang Safari, mangyaring maghintay!"
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
      close: "Isara",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Mga contributor",
      downloads: "Mga download",
      features: "Mga feature",
      store: "Tindahan"
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
        music: false,
        videos: "Mga video",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Magsimula",
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
      title: "Mga contributor",
      presenceDevelopers: false,
      staff: "Ang Staff",
      supporters: false,
      translators: "Mga Translator",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Mga download",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Oras na para ipagmayabang.",
          description: "Gamitin na ngayon ang PreMiD at ipagmayabang sa mga kaibigan mo ano ang ginagawa mo, malay mo may mahanap ka na parehas ang interest.",
          getStarted: "Magsimula",
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
      title: "Tindahan",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Description",
          information: "Impormasyon"
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
        categories: "Mga Category",
        search: "Mag-search sa Presence"
      }
    }
  },
  footer: {
    partners: "Mga partner",
    followUs: false,
    supportUs: "Suportahan kami",
    more: "Marami pa",
    legal: false,
    supportList: {
      donate: false,
      contribute: "Mag-contribute",
      translate: "I-translate"
    },
    moreList: {
      faq: false,
      documentation: "Ang documentation",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Privacy Policy",
      termsOfService: false,
      cookiePolicy: "Cookie Policy"
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