import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "لطفا با غیرفعال کردن مسدود کننده تبلیغات از ما حمایت کنید."
    }
  },
  component: {
    searchBar: {
      search: "جستجو",
      sortBy: false,
      searchPresence: "جستجوی Presence",
      sort: {
        mostUsed: "بیشترین استفاده شده",
        alphabetical: "الفبايی"
      },
      categories: {
        all: "همه",
        anime: "انیمه",
        games: "بازی‌ها",
        music: "موسیقی",
        other: "ديگر",
        socials: "شبکه های اجتماعی",
        videos: "ویدیو ها و پخش های زنده"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: false
      }
    },
    userChip: {
      loading: "بارگیری..."
    },
    storeCard: {
      addPresence: "افزودن",
      removePresence: "حذف کردن"
    },
    donationModal: {
      title: false,
      description: false,
      continue: "ادامه",
      close: "بستن",
      patreon: "حمایت در {name}",
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "مشارکت‌کنندگان",
      downloads: "دانلود ها",
      features: "ویژگی‌ها",
      store: "فروشگاه"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "خطا",
          description: false
        }
      }
    },
    home: {
      meta: {
        title: "خانه"
      },
      title: false,
      subtitle: false,
      words: {
        music: "موسیقی",
        videos: "ویدیوها",
        streams: false,
        media: "رسانه"
      },
      description: false,
      getStarted: "شروع کنید",
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
          title: "چگونه کار میکند",
          step1: {
            title: false,
            description: false
          },
          step2: {
            title: "ورود با Discord",
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
      title: "مشارکت‌کنندگان",
      presenceDevelopers: "توسعه دهندگان Presence",
      staff: "کارکنان",
      supporters: "حامیان",
      translators: "مترجمان",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "دانلود ها",
      steps: {
        install: false,
        login: "ورود با Discord",
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "وقت نمایشه.",
          description: "از PreMiD استفاده کنید و به دوستانتان نشان دهید که دارید چه می کنید، شاید شما هم کسی را با علایق مشابه پیدا کردید.",
          getStarted: "شروع کنید",
          extension: "افزونه"
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
      title: "فروشگاه",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "شرح",
          information: "اطلاعات"
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
        categories: "دسته‌‎بندی‎ها",
        search: "جستجوی Presence"
      }
    }
  },
  footer: {
    partners: "همکاران",
    followUs: false,
    supportUs: "از ما حمایت کنید",
    more: "بيشتر",
    legal: false,
    supportList: {
      donate: "حمایت",
      contribute: "مشارکت",
      translate: "ترجمه"
    },
    moreList: {
      faq: false,
      documentation: "مستندات",
      status: "وضعیت"
    },
    legalList: {
      privacyPolicy: "سیاست حفظ حریم خصوصی",
      termsOfService: false,
      cookiePolicy: "سیاست کوکی‌ ها"
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
      title: "خطا",
      message: false,
      button: false
    }
  }
}));