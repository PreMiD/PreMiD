import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Пожалуйста, поддержите нас, отключив свой блокировщик рекламы."
    }
  },
  component: {
    searchBar: {
      search: "Поиск",
      sortBy: "Сортировать по",
      searchPresence: "Поиск Presence",
      sort: {
        mostUsed: "Часто используемые",
        alphabetical: "По алфавиту"
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
      wip: "В разработке",
      support: {
        safari: "Мы работаем над поддержкой Safari, следите за обновлениями!"
      }
    },
    userChip: {
      loading: "Загрузка..."
    },
    storeCard: {
      addPresence: "Добавить",
      removePresence: "Удалить"
    },
    donationModal: {
      title: "Небольшое одолжение...",
      description: "Мы надеемся, что вам понравится PreMiD! Если это вызывает улыбку на вашем лице, почему бы не ответить взаимностью? Наша команда волонтёров вкладывает душу в то, чтобы сделать его потрясающим только для вас!",
      continue: "Продолжить",
      close: "Закрыть",
      patreon: "Поддержка на {name}",
      github: "Спонсор на {name}",
      holdTight: "Держитесь крепче... загружаем волшебную кнопку..."
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
          title: "Ошибка",
          description: "У нас возникла проблема с загрузкой этого пользователя... Пожалуйста, повторите попытку позже."
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
          title: "Пришло время покрасоваться.",
          description: "Начните использовать PreMiD сейчас и покажите своим друзьям, чем вы занимаетесь, может быть, вы найдете кого-нибудь со схожими интересами.",
          getStarted: "Давайте начнём",
          extension: "Установить расширение"
        }
      },
      browser: {
        your: "Ваш браузер",
        other: "Другие браузеры",
        based: "На основе {browser}"
      },
      mobile: {
        title: "Плохие новости!",
        description: "PreMiD недоступен для мобильных устройств, приносим извинения!"
      },
      alphaAccess: {
        title: "Разблокируйте эксклюзивный доступ к Альфа!",
        description: "Шагните в будущее PreMiD, став Patron'ом или спонсором на GitHub. Ваша поддержка не только продвигает нашу разработку, но и дает вам доступ к самым инновационным функциям, которые мы создаем. Ознакомьтесь с современными решениями, которые может предложить PreMiD, и повлияйте на его путь с вашим отзывом. Это не о том, чтобы просто быть первым, а о том, чтобы быть частью чего-то большего.",
        callToAction: "Узнайте больше и присоединитесь к инновациям"
      },
      faq: "Часто Задаваемые Вопросы (FAQ)",
      faqs: {
        q1: {
          question: "Что такое PreMiD?",
          answer: "PreMiD — это простая настраиваемая утилита, которая позволяет вам показывать в статусе своей активности в Discord, чем вы занимаетесь в сети."
        },
        q2: {
          question: "Как мне использовать PreMiD?",
          answer: "Вы можете использовать PreMiD, установив расширение и войдя в свою учетную запись Discord. После входа в систему вы можете добавлять Presence'ы в свой профиль и хвастаться ими перед друзьями."
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
      noPresence: "Не найдено Presence по вашему запросу...",
      presence: {
        button: {
          reportIssue: "Сообщить о проблеме",
          suggestFeature: "Предложить улучшение",
          viewCode: "Посмотреть код"
        },
        title: {
          description: "Описание",
          information: "Информация"
        },
        informationSection: {
          contributors: "Участники:",
          version: "Версия: {version}",
          users: "Пользователей: {users}",
          tags: "Метки:",
          supportedUrls: "Поддерживаемые ссылки:"
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
    followUs: "Подпишитесь на нас",
    supportUs: "Поддержите нас",
    more: "Подробнее",
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
      termsOfService: "Пользовательское Соглашение",
      cookiePolicy: "Политика куки"
    },
    withLoveBy: "С",
    by: "от",
    copyright: "© {year}-{currentYear} {company} Все права защищены."
  },
  error: {
    404: {
      title: false,
      message: "Страница, которую вы ищете, не существует."
    },
    500: {
      title: false,
      message: "Что-то пошло не так с нашей стороны."
    },
    default: {
      title: "Ошибка",
      message: "Что-то пошло не так с нашей стороны.",
      button: "Вернуться назад"
    }
  }
}));