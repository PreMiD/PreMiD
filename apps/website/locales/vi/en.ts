import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Tìm kiếm",
      sortBy: false,
      searchPresence: "Tìm kiếm Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Tất cả",
        anime: "Anime",
        games: "Games",
        music: "Nhạc",
        other: "Khác",
        socials: "Xã hội",
        videos: "Video & Stream"
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
      close: "Đóng",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Đóng góp",
      downloads: "Tải về",
      features: "Tính năng",
      store: "Cửa hàng"
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
        title: "Trang chủ"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Nhạc",
        videos: "Video",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Bắt đầu",
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
      title: "Đóng góp",
      presenceDevelopers: false,
      staff: "Đội ngũ",
      supporters: false,
      translators: "Phiên dịch viên",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Tải về",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Đã đến lúc thể hiện.",
          description: "Sử dụng PreMiD ngay để bạn bè của bạn biết bạn đang làm gì, nó có thể giúp bạn tìm được những người chung sở thích.",
          getStarted: "Bắt đầu",
          extension: "Tiện ích mở rộng"
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
      title: "Cửa hàng",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Mô tả",
          information: "Thông tin"
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
        categories: "Danh mục",
        search: "Tìm kiếm Presence"
      }
    }
  },
  footer: {
    partners: "Đối tác",
    followUs: false,
    supportUs: "Hỗ trợ chúng tôi",
    more: "Thêm",
    legal: false,
    supportList: {
      donate: "Ủng hộ",
      contribute: "Đóng góp",
      translate: "Dịch thuật"
    },
    moreList: {
      faq: false,
      documentation: "Tài liệu",
      status: "Trạng thái"
    },
    legalList: {
      privacyPolicy: "Chính sách bảo mật",
      termsOfService: false,
      cookiePolicy: "Chính sách về Cookie"
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