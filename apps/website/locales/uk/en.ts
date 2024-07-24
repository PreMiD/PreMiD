import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Пошук",
      sortBy: false,
      searchPresence: "Шукати Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Усе",
        anime: "Аніме",
        games: "Ігри",
        music: "Музика",
        other: "Інше",
        socials: "Соц. мережі",
        videos: "Відео і прямі трансляції"
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
      close: "Закрити",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Учасники проєкту",
      downloads: "Завантаження",
      features: "Особливості",
      store: "Магазин"
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
        title: "Домашній екран"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Музика",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Розпочати",
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
      title: "Учасники проєкту",
      presenceDevelopers: false,
      staff: "Штат",
      supporters: false,
      translators: "Перекладачі",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Завантаження",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Час показати.",
          description: "Використовуйте PreMiD зараз і покажіть вашим друзям, що ви робите, мабуть, ви знайдете когось зі схожими інтересами.",
          getStarted: "Розпочати",
          extension: "Розширення"
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
      title: "Магазин",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Опис",
          information: "Інформація"
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
        categories: "Категорії",
        search: "Шукати Presence"
      }
    }
  },
  footer: {
    partners: "Партнери",
    followUs: false,
    supportUs: "Підтримайте нас",
    more: "Більше",
    legal: false,
    supportList: {
      donate: "Пожертвувати",
      contribute: "Зробити внесок",
      translate: "Перекласти"
    },
    moreList: {
      faq: false,
      documentation: "Документація",
      status: "Статус"
    },
    legalList: {
      privacyPolicy: "Політика конфіденційності",
      termsOfService: false,
      cookiePolicy: "Політика використання Cookie"
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