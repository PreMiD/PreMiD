import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "่ค้นหา",
      sortBy: false,
      searchPresence: "ค้นหา Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "ทั้งหมด",
        anime: "อนิเมะ",
        games: "เกม",
        music: "เพลง",
        other: "อื่นๆ",
        socials: "โซเชียล",
        videos: "วีดีโอและสตรีมมิ่ง"
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
      close: "ปิด",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "ผู้พัฒนา",
      downloads: "ดาวน์โหลด",
      features: "ฟีเจอร์",
      store: "ร้านค้า"
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
        title: "หน้าหลัก"
      },
      title: false,
      subtitle: false,
      words: {
        music: "เพลง",
        videos: "วีดีโอ",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "เริ่มใช้งาน",
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
      title: "ผู้พัฒนา",
      presenceDevelopers: false,
      staff: "ทีมงาน",
      supporters: "ผู้สนับสนุน",
      translators: "แปลภาษา",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "ดาวน์โหลด",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "ถึงเวลาเฉิดฉายแล้ว!",
          description: "เริ่มต้นการใช้ PreMiD ตอนนี้และบอกให้คนอื่นรู้ว่าคุณกำลังดูหรือฟังอะไรอยู่ เผื่อว่าคุณอาจจะเจอที่ถูกคอกันก็ได้นะ",
          getStarted: "เริ่มใช้งาน",
          extension: "ส่วนขยาย"
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
      title: "ร้านค้า",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "คำอธิบาย",
          information: "ข้อมูล"
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
        categories: "หมวดหมู่",
        search: "ค้นหา Presence"
      }
    }
  },
  footer: {
    partners: "ผู้ร่วมมือ",
    followUs: false,
    supportUs: "สนับสนุนเรา",
    more: "อื่น ๆ",
    legal: false,
    supportList: {
      donate: "บริจาค",
      contribute: "เว็บไซต์",
      translate: "แปลภาษา"
    },
    moreList: {
      faq: false,
      documentation: "เอกสาร",
      status: "สถานะ"
    },
    legalList: {
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      termsOfService: false,
      cookiePolicy: "นโยบายเกี่ยวกับคุกกี้"
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