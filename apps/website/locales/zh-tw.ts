import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "希望您停用廣告攔截器來支持我們。"
    }
  },
  component: {
    searchBar: {
      search: "搜尋",
      sortBy: "排序",
      searchPresence: "搜尋 Presence",
      sort: {
        mostUsed: "最常使用",
        alphabetical: "依字母"
      },
      categories: {
        all: "全部",
        anime: "動漫",
        games: "遊戲",
        music: "音樂",
        other: "其它",
        socials: "社交",
        videos: "影片或直播"
      }
    },
    browserCard: {
      wip: "正在製作中(WIP)",
      support: {
        safari: "我們正在努力支援Safari瀏覽器中，敬請關注！"
      }
    },
    userChip: {
      loading: "讀取中…"
    },
    storeCard: {
      addPresence: "新增",
      removePresence: "移除"
    },
    donationModal: {
      title: false,
      description: false,
      continue: "下一步",
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
      store: "商店"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "錯誤",
          description: "我們在載入這個用戶時遇到問題... 請稍後再試。"
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
        videos: "影片",
        streams: "直播",
        media: "媒體"
      },
      description: false,
      getStarted: "開始使用",
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
      presenceDevelopers: "狀態開發者",
      staff: "職員",
      supporters: "贊助者",
      translators: "翻譯人員",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "下載",
      steps: {
        install: "安裝擴充功能",
        login: "使用 Discord 登入",
        add: "新增狀態",
        showoff: false
      },
      section: {
        heading: {
          title: "是時候展示你自己了!",
          description: "現在開始使用PreMiD,向其他人展示你在做什麼,可能你會找到志同道合的朋友。 ",
          getStarted: "馬上開始",
          extension: "擴充功能"
        }
      },
      browser: {
        your: "您的瀏覽器",
        other: "其他瀏覽器",
        based: false
      },
      mobile: {
        title: "壞消息!",
        description: "PreMiD 不支援行動裝置, 非常抱歉!"
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
      title: "商店",
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
      termsOfService: "服務條款",
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
      title: "錯誤",
      message: false,
      button: "返回"
    }
  }
}));