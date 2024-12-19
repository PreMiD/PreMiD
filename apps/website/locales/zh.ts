import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "搜索",
      sortBy: false,
      searchPresence: "搜索 Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "全部",
        anime: "动漫",
        games: "游戏",
        music: "音乐",
        other: "其他",
        socials: "社交",
        videos: "视频与直播"
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
      close: "关闭",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "贡献者",
      downloads: "下载",
      features: "功能",
      store: "Presence 市场"
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
        title: "首页"
      },
      title: false,
      subtitle: false,
      words: {
        music: "音乐",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "开始使用吧！",
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
      title: "贡献者",
      presenceDevelopers: false,
      staff: "工作人员",
      supporters: false,
      translators: "翻译人员",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "下载",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "是时候展现自己了！",
          description: "开始使用 PreMiD，并告诉其他人你在做什么，也许你会找到一个志同道合的朋友。",
          getStarted: "开始使用吧！",
          extension: "扩展程序"
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
      title: "Presence 市场",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "描述",
          information: "信息"
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
        categories: "分类",
        search: "搜索 Presence"
      }
    }
  },
  footer: {
    partners: "合作伙伴",
    followUs: false,
    supportUs: "支持我们",
    more: "更多",
    legal: false,
    supportList: {
      donate: "捐赠",
      contribute: "贡献",
      translate: "翻译"
    },
    moreList: {
      faq: false,
      documentation: "帮助文档",
      status: "服务器状态"
    },
    legalList: {
      privacyPolicy: "隐私条款",
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