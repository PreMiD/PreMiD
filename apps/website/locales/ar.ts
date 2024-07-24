import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "إبحث",
      sortBy: false,
      searchPresence: "البحث على presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "الكل",
        anime: "أنمي",
        games: "ألعاب",
        music: "موسيقى",
        other: "آخر",
        socials: "التـواصل",
        videos: "فيديوات"
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
      close: "غلق",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "المساهمون",
      downloads: "تحميل",
      features: "الميزات",
      store: "المتجر"
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
        title: "الصفحة الرئيسية"
      },
      title: false,
      subtitle: false,
      words: {
        music: "موسيقى",
        videos: "فيديوهات",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "إبدء الان",
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
      title: "المساهمون",
      presenceDevelopers: false,
      staff: "الطاقم",
      supporters: "الداعمين",
      translators: "المترجمين",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "تحميل",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "حان الوقت الإظهار.",
          description: "استخدم PreMiD الآن وأظهر لأصدقائك ما تفعله ، ربما تجد شخصًا لديه نفس الاهتمامات.",
          getStarted: "إبدء الان",
          extension: "الملحق"
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
      title: "المتجر",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "الوصف",
          information: "معلومات"
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
        categories: "الفئات",
        search: "البحث على presence"
      }
    }
  },
  footer: {
    partners: "الشركاء",
    followUs: false,
    supportUs: "ادعمنا",
    more: "المزيد",
    legal: false,
    supportList: {
      donate: "التبرع",
      contribute: "ساهم",
      translate: "الترجمة"
    },
    moreList: {
      faq: false,
      documentation: "الوثائق",
      status: "الحالة"
    },
    legalList: {
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: false,
      cookiePolicy: "سياسة ملفات تعريف الإرتباط"
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