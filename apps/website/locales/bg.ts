import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Търсене",
      sortBy: false,
      searchPresence: "Търсете presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Всичко",
        anime: "Аниме",
        games: "Игри",
        music: "Mузика",
        other: "Други",
        socials: "Социални",
        videos: "Видеоклипове и Стриймове"
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
      close: "Затвори",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Сътрудници",
      downloads: "Изтегляния",
      features: "Функции",
      store: "магазин"
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
        title: "Начало"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Mузика",
        videos: "Видеа",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Първи стъпки",
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
      title: "Сътрудници",
      presenceDevelopers: "Presence Разработчици",
      staff: "Персонал",
      supporters: "Поддръжници",
      translators: "Преводачи",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Изтегляния",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Време да покажем какво имаме.",
          description: "Използвай PreMiD сега и покажи на своите приятели какво правиш, може би ще намериш някого с същите интереси.",
          getStarted: "Първи стъпки",
          extension: "Разширение"
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
      title: "магазин",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Описание",
          information: "Информация"
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
        categories: "Категории",
        search: "Търсете presence"
      }
    }
  },
  footer: {
    partners: "Партньори",
    followUs: false,
    supportUs: "Подкрепи ни",
    more: "Още",
    legal: false,
    supportList: {
      donate: "Дарете",
      contribute: "Допринесете",
      translate: "Преведете"
    },
    moreList: {
      faq: false,
      documentation: "Документация",
      status: "Статус"
    },
    legalList: {
      privacyPolicy: "Политика за поверителност",
      termsOfService: false,
      cookiePolicy: "Политика за бисквитките"
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