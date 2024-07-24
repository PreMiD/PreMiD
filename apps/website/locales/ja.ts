import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "検索",
      sortBy: false,
      searchPresence: "プレゼンスを探す",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "すべて",
        anime: "アニメ",
        games: "ゲーム",
        music: "音楽",
        other: "その他",
        socials: "SNS",
        videos: "動画と配信"
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
      close: false,
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "貢献者",
      downloads: "ダウンロード",
      features: "機能を見る",
      store: "ストア"
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
        title: "ホーム"
      },
      title: false,
      subtitle: false,
      words: {
        music: "音楽",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "はじめよう",
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
      title: "貢献者",
      presenceDevelopers: false,
      staff: "スタッフ",
      supporters: false,
      translators: "翻訳者",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "ダウンロード",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "自己紹介のお時間です。",
          description: "PreMiDを使って、見ているものや聞いているものを他の人に見せびらかしましょう。同じ趣味を持った人を見つけられるかも…？",
          getStarted: "はじめよう",
          extension: "拡張機能のダウンロード"
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
      title: "ストア",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "概要",
          information: "インフォメーション"
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
        categories: "カテゴリー",
        search: "プレゼンスを探す"
      }
    }
  },
  footer: {
    partners: "パートナー",
    followUs: false,
    supportUs: "PreMiDを支援",
    more: "もっと",
    legal: false,
    supportList: {
      donate: "寄付",
      contribute: "コントリビュート",
      translate: "翻訳"
    },
    moreList: {
      faq: false,
      documentation: "ドキュメント",
      status: "ステータス"
    },
    legalList: {
      privacyPolicy: "プライバシーポリシー",
      termsOfService: false,
      cookiePolicy: "Cookie のポリシー"
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