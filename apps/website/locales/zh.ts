import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "请通过禁用广告拦截器来支持我们"
    }
  },
  component: {
    searchBar: {
      search: "搜索",
      sortBy: "排序方式",
      searchPresence: "搜索 Presence",
      sort: {
        mostUsed: "最常使用",
        alphabetical: "按字母顺序"
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
      wip: "制作中",
      support: {
        safari: "我们正在努力支持 Safari，敬请期待！"
      }
    },
    userChip: {
      loading: "加载中…"
    },
    storeCard: {
      addPresence: "添加",
      removePresence: "删除"
    },
    donationModal: {
      title: "一个小请求...",
      description: "我们希望您会喜欢 PreMiD！如果它让您感到开心，为什么不回馈一点爱心呢？我们的志愿者团队倾注心血为您打造精彩体验！",
      continue: "继续",
      close: "关闭",
      patreon: "在 {name} 上支持",
      github: "赞助 {name}",
      holdTight: "稍等片刻……正在加载神奇按钮……"
    }
  },
  header: {
    links: {
      contributors: "贡献者",
      downloads: "下载",
      features: "功能",
      store: "市场"
    }
  },
  page: {
    users: {
      userPage: {
        title: "状态贡献",
        error: {
          title: "错误",
          description: "我们无法加载该用户……请稍后再试。"
        }
      }
    },
    home: {
      meta: {
        title: "首页"
      },
      title: "提升您的在线状态，用 PreMiD 展现自己",
      subtitle: "向您的朋友展示您在享受的 {word}",
      words: {
        music: "音乐",
        videos: "视频",
        streams: "流媒体",
        media: "媒体"
      },
      description: "PreMiD 是一个简单而强大的工具，可让您在多个平台上共享当前的媒体活动，如 YouTube、Disney+、Netflix 等。保持连接，让朋友实时看到您的动态。",
      getStarted: "开始使用吧！",
      sections: {
        feature: {
          title: "为什么选择 PreMiD？",
          feature1: {
            title: "隐私控制",
            description: "掌控您的隐私设置，决定与他人共享的活动。您的数据，您做主。"
          },
          feature2: {
            title: "社区驱动",
            description: "通过充满激情和奉献的社区，体验对多平台的无与伦比支持。"
          },
          feature3: {
            title: "自定义设置",
            description: "通过丰富的自定义选项，根据您的偏好调整 PreMiD 体验。"
          },
          feature4: {
            title: "简单设置",
            description: "快速上手 PreMiD。简单的设置流程确保轻松开始。"
          },
          feature5: {
            title: "遵守 Discord ToS",
            description: "完全符合 Discord 的服务条款，使用官方提供的端点。"
          },
          feature6: {
            title: "未来功能",
            description: "敬请期待更多令人兴奋的新功能和改进，进一步提升您的 PreMiD 体验。"
          }
        },
        howItWorks: {
          title: "如何运作",
          step1: {
            title: "安装扩展程序",
            description: "将 PreMiD 添加到您的浏览器。"
          },
          step2: {
            title: "使用 Discord 登录",
            description: "将 PreMiD 连接到您的 Discord 账户。"
          },
          step3: {
            title: "添加服务",
            description: "选择您想显示的服务，例如 YouTube、Disney+ 等。"
          },
          step4: {
            title: "开始享受",
            description: "\"分享您的活动，享受使用 PreMiD 的乐趣。"
          }
        },
        callToAction: {
          title: "准备好开始了吗？",
          description: "\"加入已经爱上 PreMiD 的 {count} 名用户行列。",
          button: "立即开始"
        }
      }
    },
    contributors: {
      title: "贡献者",
      presenceDevelopers: "状态开发者",
      staff: "工作人员",
      supporters: "支持者",
      translators: "翻译人员",
      avatar: {
        tooltip: "点击复制 {name} 的头像"
      }
    },
    downloads: {
      title: "下载",
      steps: {
        install: "安装扩展程序",
        login: "使用 Discord 登录",
        add: "添加状态",
        showoff: "展示自己！"
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
        your: "您的浏览器",
        other: "其他浏览器",
        based: "基于 {browser}"
      },
      mobile: {
        title: "坏消息！",
        description: "PreMiD 不支持移动设备，很抱歉！"
      },
      alphaAccess: {
        title: "解锁独家 Alpha 访问权限！",
        description: "通过成为 Patreon 支持者或在 GitHub 上赞助我们，踏入 PreMiD 的未来。您的支持不仅推动了我们的开发，还让您能抢先体验我们正在打造的最创新功能。体验 PreMiD 的前沿技术，并通过您的反馈影响其发展方向。这不仅仅是抢先体验，更是成为更大事物的一部分。",
        callToAction: "了解更多并加入创新"
      },
      faq: "常见问题",
      faqs: {
        q1: {
          question: "PreMiD 是什么？",
          answer: "PreMiD 是一个简单、可配置的工具，可让您在 Discord 的活动状态中显示您在网络上的动态。"
        },
        q2: {
          question: "我该如何使用 PreMiD？",
          answer: "您可以通过安装扩展程序并使用 Discord 账户登录来使用 PreMiD。登录后，您可以将 Presences 添加到您的个人资料中，向朋友展示您的活动。"
        },
        q3: {
          question: "PreMiD 是否违反了 Discord 的服务条款？",
          answer: "不会，PreMiD 不违反 Discord 的服务条款。PreMiD 使用 Discord 的 API（包括 Discord 提供的受限 API 端点）来设置您的活动。这意味着 PreMiD 完全符合 Discord 的服务条款。"
        },
        q4: {
          question: "PreMiD 支持哪些服务？",
          answer: "PreMiD 支持许多不同的服务，包括 YouTube、Twitch 和 Netflix。支持的服务列表在不断增加。您可以在我们的商店页面查看完整的 Presences 列表。"
        },
        q5: {
          question: "我如何为 PreMiD 做贡献？",
          answer: "您可以通过加入我们在 GitHub 的社区为 PreMiD 做贡献。您可以通过报告问题、建议功能或贡献代码来帮助我们。"
        },
        q6: {
          question: "PreMiD 是免费使用的吗？",
          answer: "是的，PreMiD 是免费使用的。不过，我们接受通过 Patreon 和 GitHub Sponsors 的捐赠，以支持项目的开发。"
        },
        q7: {
          question: "如果我在使用 PreMiD 时遇到问题该怎么办？",
          answer: "如果您在使用 PreMiD 时遇到任何问题，可以加入我们的 Discord 服务器寻求支持。我们还在文档中提供了疑难解答指南。"
        },
        q8: {
          question: "PreMiD 不支持某个服务，您能添加吗？",
          answer: "我们所谓的 Presences 是社区驱动的，我们没有资源添加每个平台。然而，您可以按照我们文档中的说明，添加您自己的 Presence。"
        },
        q9: {
          question: "PreMiD 多久更新一次？",
          answer: "我们是一个由志愿者驱动的小型项目，我们的目标是尽可能频繁地更新 PreMiD，但不能保证我们始终能迅速跟进。"
        }
      }
    },
    store: {
      title: "市场",
      noPresence: "没有符合您搜索的 Presence...",
      presence: {
        button: {
          reportIssue: "报告问题",
          suggestFeature: "建议新功能",
          viewCode: "查看代码"
        },
        title: {
          description: "描述",
          information: "信息"
        },
        informationSection: {
          contributors: "贡献者：",
          version: "版本：{version}",
          users: "用户数：{users}",
          tags: "标签：",
          supportedUrls: "支持的 URL："
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
    followUs: "关注我们",
    supportUs: "支持我们",
    more: "更多",
    legal: "法律",
    supportList: {
      donate: "捐赠",
      contribute: "贡献",
      translate: "翻译"
    },
    moreList: {
      faq: "常见问题",
      documentation: "帮助文档",
      status: "服务器状态"
    },
    legalList: {
      privacyPolicy: "隐私条款",
      termsOfService: "服务条款",
      cookiePolicy: "Cookie 政策"
    },
    withLoveBy: "由爱驱动",
    by: "由",
    copyright: "© {year}-{currentYear} {company} 版权所有。"
  },
  error: {
    404: {
      title: false,
      message: "您正在寻找的页面不存在。"
    },
    500: {
      title: false,
      message: "我们这边出了点问题。"
    },
    default: {
      title: "错误",
      message: "我们这边出了点问题。",
      button: "返回"
    }
  }
}));