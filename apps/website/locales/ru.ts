import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Поиск",
      sortBy: false,
      searchPresence: "Поиск Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Всё",
        anime: "Аниме",
        games: "Игры",
        music: "Музыка",
        other: "Прочее",
        socials: "Соц. сети",
        videos: "Видео и стримы"
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
      close: "Закрыть",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Участники",
      downloads: "Загрузки ",
      features: "Возможности",
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
        title: "Главная страница"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Музыка",
        videos: "Видеоролики",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Давайте начнём",
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
      title: "Участники",
      presenceDevelopers: "Разработчики Presence",
      staff: "Персонал",
      supporters: "Спонсоры",
      translators: "Переводчики",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Загрузки ",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Время шоу.",
          description: "Начните использовать PreMiD сейчас и покажите своим друзьям, чем вы занимаетесь, может быть, вы найдете кого-нибудь со схожими интересами.",
          getStarted: "Давайте начнём",
          extension: "Установить расширение"
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
        search: "Поиск Presence"
      }
    }
  },
  footer: {
    partners: "Партнеры",
    followUs: false,
    supportUs: "Поддержите нас",
    more: "Больше",
    legal: false,
    supportList: {
      donate: "Пожертвовать",
      contribute: "Внести вклад",
      translate: "Перевести"
    },
    moreList: {
      faq: false,
      documentation: "Документация",
      status: "Состояние"
    },
    legalList: {
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: false,
      cookiePolicy: "Политика куки"
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