import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "โปรดสนับสนุนทีมงานโดยการปิดตัวบล๊อกโฆษณา"
    }
  },
  component: {
    searchBar: {
      search: "ค้นหา",
      sortBy: "เรียงตาม",
      searchPresence: "ค้นหา Presence",
      sort: {
        mostUsed: "ใช้มากที่สุด",
        alphabetical: "ตามตัวอักษร"
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
      loading: "กำลังโหลด…..."
    },
    storeCard: {
      addPresence: "เพิ่ม",
      removePresence: "ลบ"
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
          title: "เกิดข้อผิดพลาด",
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
        streams: "สตรีม",
        media: "มีเดีย"
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
          title: "มันทำงานอย่างไร",
          step1: {
            title: "ติดตั้งส่วนขยาย",
            description: "เพิ่ม PreMiD ลงในเบราว์เซอร์ของคุณ"
          },
          step2: {
            title: "เข้าสู่ระบบด้วย Discord",
            description: "เชื่อมต่อ PreMiD กับบัญชี Discord ของคุณ"
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
      presenceDevelopers: "นักพัฒนา Presence",
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
        login: "เข้าสู่ระบบด้วย Discord",
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
          reportIssue: "รายงานปัญหา",
          suggestFeature: "เสนอแนะฟีเจอร์",
          viewCode: "ดูซอร์สโค้ด"
        },
        title: {
          description: "คำอธิบาย",
          information: "ข้อมูล"
        },
        informationSection: {
          contributors: "ผู้ร่วมพัฒนา:",
          version: "เวอร์ชั่น: {version}",
          users: "จำนวนผู้ใช้: {users}",
          tags: "แท็ก:",
          supportedUrls: "URL ที่รองรับ:"
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
    followUs: "ติดตามเรา",
    supportUs: "สนับสนุนเรา",
    more: "อื่น ๆ",
    legal: "กฎหมาย",
    supportList: {
      donate: "บริจาค",
      contribute: "เว็บไซต์",
      translate: "แปลภาษา"
    },
    moreList: {
      faq: "คำถามที่พบบ่อย",
      documentation: "เอกสารประกอบ",
      status: "สถานะ"
    },
    legalList: {
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      termsOfService: "เงื่อนไขการใช้บริการ",
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
      title: "เกิดข้อผิดพลาด",
      message: false,
      button: false
    }
  }
}));