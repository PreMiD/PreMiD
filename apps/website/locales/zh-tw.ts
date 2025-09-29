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
      title: "小小請求……",
      description: "我們真心希望你會喜歡 PreMiD！ 如果它讓你露出微笑，不妨也回饋一些愛吧？ 我們的志工團隊傾注了滿滿心力，只為打造出這份專屬於你的精彩體驗！",
      continue: "下一步",
      close: "關閉",
      patreon: "{name}",
      github: "在 {name} 上贊助我們",
      holdTight: "請稍候…正在載入神奇按鈕……"
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
        title: "獻出貢獻",
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
      title: "用 PreMiD 提升你的線上存在感",
      subtitle: "向朋友分享你正在享受的 {word}。",
      words: {
        music: "音樂",
        videos: "影片",
        streams: "直播",
        media: "媒體"
      },
      description: "PreMiD 是一款簡單強大的工具，能讓你在 YouTube、Disney+、Netflix 等多個平台上分享你目前的媒體活動。保持連線，讓朋友即時看到你的動態。",
      getStarted: "開始使用",
      sections: {
        feature: {
          title: "為什麼你將會喜歡 PreMiD",
          feature1: {
            title: "隱私控制",
            description: "掌控你的隱私設定，自由決定要分享哪些活動。你的資料，你做主。"
          },
          feature2: {
            title: "社群驅動",
            description: "由熱情且投入的社群驅動，支援眾多平台，帶來無與倫比的體驗。"
          },
          feature3: {
            title: "可自訂設定",
            description: "透過豐富的自訂選項，打造符合你偏好與需求的 PreMiD 使用體驗。"
          },
          feature4: {
            title: "快速設定",
            description: "快速開始使用 PreMiD，簡單的設定流程讓你輕鬆上手。"
          },
          feature5: {
            title: "符合 Discord 使用條款",
            description: "完全遵守 Discord 的使用條款，並使用其官方提供的端點。"
          },
          feature6: {
            title: "未來功能",
            description: "敬請期待更多令人興奮的新功能與改進，讓你的 PreMiD 體驗更上一層樓。"
          }
        },
        howItWorks: {
          title: "使用方法",
          step1: {
            title: "安裝擴充功能",
            description: "將PreMiD加入致你的瀏覽器。"
          },
          step2: {
            title: "使用 Discord 登入",
            description: "將您的 Discord 帳戶與 PreMiD 連接。"
          },
          step3: {
            title: "添加服務",
            description: "選擇您想要顯示的服務，如 YouTube、Disney+ 等。"
          },
          step4: {
            title: "享受",
            description: "分享您的活動並盡情享受使用 PreMiD。"
          }
        },
        callToAction: {
          title: "準備好開始使用了嗎？",
          description: "加入已經喜愛 PreMiD 的 {count} 名用戶。",
          button: "立即開始"
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
        tooltip: "點擊複製 {name} 的頭像圖片"
      }
    },
    downloads: {
      title: "下載",
      steps: {
        install: "安裝擴充功能",
        login: "使用 Discord 登入",
        add: "新增狀態",
        showoff: "展示一下！"
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
        based: "基於 {browser}"
      },
      mobile: {
        title: "壞消息!",
        description: "PreMiD 不支援行動裝置, 非常抱歉!"
      },
      alphaAccess: {
        title: "解鎖專屬 Alpha 訪問權限！",
        description: "通過成為 PreMiD 的贊助人或在 GitHub 上贊助我們，邁向未來！您的支持不僅推動了我們的開發，還能讓您率先體驗我們正在打造的最具創新性的功能。體驗 PreMiD 的前沿技術，並通過您的反饋影響它的發展軌跡。這不僅僅是關於成為第一，更是成為更大事業的一部分。",
        callToAction: "了解更多並加入創新行列"
      },
      faq: "常見問題",
      faqs: {
        q1: {
          question: "什麼是 PreMiD？",
          answer: "PreMiD 是一個簡單且可配置的工具，允許你在 Discord 活動狀態中顯示你在網頁上的活動。"
        },
        q2: {
          question: "我該如何使用 PreMiD？",
          answer: "你可以透過安裝擴展並使用你的 Discord 帳戶登入來使用 PreMiD。登入後你可以將活動狀態添加到你的個人資料中，並向朋友們炫耀。"
        },
        q3: {
          question: "PreMiD 是否違反了 Discord 的服務條款？",
          answer: "不，PreMiD 並不違反 Discord 的服務條款。PreMiD 使用 Discord 的 API（包括 Discord 提供的受限 API 端點）來設置你的活動狀態。這意味著 PreMiD 完全遵守 Discord 的服務條款。"
        },
        q4: {
          question: "PreMiD 支援哪些服務？",
          answer: "PreMiD 支援許多不同的服務，包括 YouTube、Twitch 和 Netflix。支援的服務列表不斷增長。你可以在我們的商店頁面查看完整的活動狀態列表。"
        },
        q5: {
          question: "我如何為 PreMiD 做出貢獻？",
          answer: "你可以通過加入我們在 GitHub 上的社區來為 PreMiD 做出貢獻。你可以通過報告問題、建議功能或貢獻代碼來幫助我們。"
        },
        q6: {
          question: "PreMiD 是免費使用的嗎？",
          answer: "是的，PreMiD 是免費使用的。然而，我們通過 Patreon 和 GitHub Sponsors 接受捐贈，以支持項目的開發。"
        },
        q7: {
          question: "如果我遇到 PreMiD 的問題，我該怎麼辦？",
          answer: "如果你遇到 PreMiD 的問題，可以加入我們的 Discord 伺服器尋求幫助。我們也在文檔中提供了故障排除指南。"
        },
        q8: {
          question: "PreMiD 不支援某個服務，您能添加嗎？",
          answer: "我們所謂的 Presence 是由社群驅動的，我們沒有資源加入每個平台。不過，您可以依照我們文件上的指示，新增您自己的 Presence。"
        },
        q9: {
          question: "PreMiD 多久會更新一次？",
          answer: "我們是由志工推動的小型計畫，我們的目標是儘可能頻繁地更新 PreMiD，但我們無法保證我們永遠都在最前線。"
        }
      }
    },
    store: {
      title: "商店",
      noPresence: "沒有符合您搜尋的 Presence...",
      presence: {
        button: {
          reportIssue: "報告問題",
          suggestFeature: "建議功能",
          viewCode: "查看代碼"
        },
        title: {
          description: "說明",
          information: "資訊"
        },
        informationSection: {
          contributors: "貢獻者：",
          version: "版本：{version}",
          users: "用戶：{users}",
          tags: "標籤：",
          supportedUrls: "支援 URL："
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
    followUs: "關注我們",
    supportUs: "支持我們",
    more: "更多",
    legal: "法律條款",
    supportList: {
      donate: "捐贈",
      contribute: "貢獻",
      translate: "翻譯"
    },
    moreList: {
      faq: "常見問題",
      documentation: "相關文章",
      status: "狀態"
    },
    legalList: {
      privacyPolicy: "隱私權政策",
      termsOfService: "服務條款",
      cookiePolicy: "Cookie 政策"
    },
    withLoveBy: "與",
    by: "由",
    copyright: "© {year}-{currentYear} {company} 版權所有。"
  },
  error: {
    404: {
      title: false,
      message: "您要找的頁面不存在。"
    },
    500: {
      title: false,
      message: "我們這邊發生了一些錯誤。"
    },
    default: {
      title: "錯誤",
      message: "我們這邊發生了一些錯誤。",
      button: "返回"
    }
  }
}));