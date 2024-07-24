import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "搜尋",
      sortBy: false,
      searchPresence: "搜尋 Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "全部",
        anime: "動漫",
        games: "遊戲",
        music: "音樂",
        other: "其它",
        socials: "社交",
        videos: "視訊或直播"
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
      close: "關閉",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "貢獻者",
      downloads: "下載",
      features: "功能",
      store: false
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
        title: "首頁"
      },
      title: false,
      subtitle: false,
      words: {
        music: "音樂",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "馬上開始",
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
      title: "貢獻者",
      presenceDevelopers: false,
      staff: "職員",
      supporters: false,
      translators: "翻譯員",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "下載",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "是時候展示你自己了!",
          description: "現在開始使用PreMiD,向其他人展示你在做什麼,可能你會找到志同道合的朋友。 ",
          getStarted: "馬上開始",
          extension: "擴展程序"
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
      title: false,
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "說明",
          information: "資訊"
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
        categories: "類別",
        search: "搜尋 Presence"
      }
    }
  },
  footer: {
    partners: "合作夥伴",
    followUs: false,
    supportUs: "支持我們",
    more: "更多",
    legal: false,
    supportList: {
      donate: "捐贈",
      contribute: "貢獻",
      translate: "翻譯"
    },
    moreList: {
      faq: false,
      documentation: "相關文章",
      status: "狀態"
    },
    legalList: {
      privacyPolicy: "隱私權政策",
      termsOfService: false,
      cookiePolicy: "Cookie 政策"
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