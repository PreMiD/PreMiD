import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "সার্চ",
      sortBy: false,
      searchPresence: "Presence সার্চ করো",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "সব",
        anime: "অ্যানিমে",
        games: "গেমস",
        music: "মিউজিক",
        other: "অন্যান্য",
        socials: "সোশ্যাল",
        videos: "ভিডিও & স্ট্রিম"
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
      close: "বন্ধ করো",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "অবদানকারীগণ",
      downloads: "ডাউনলোড",
      features: "ফিচার",
      store: "স্টোর"
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
        title: "হোম"
      },
      title: false,
      subtitle: false,
      words: {
        music: "মিউজিক",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "শুরু করা যাক",
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
      title: "অবদানকারীগণ",
      presenceDevelopers: "প্রেসেন্স ডেভেলপাররা ",
      staff: "স্টাফ",
      supporters: "সাপোর্টার",
      translators: "অনুবাদকগণ",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "ডাউনলোড",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "সময় এখন দেখানোর।",
          description: "এখনই ব্যবহার করো PreMiD এবং দেখাও তোমার বন্ধুদের তুমি কী করছ, হয়তো তুমি কাওকে পেয়ে যাবে একই ইন্টারেস্ট এর।",
          getStarted: "শুরু করা যাক",
          extension: "এক্সটেনশন"
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
      title: "স্টোর",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "ডেসক্রিপশন",
          information: "তথ্য"
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
        categories: "ক্যাটাগরি",
        search: "Presence সার্চ করো"
      }
    }
  },
  footer: {
    partners: "পার্টনার",
    followUs: false,
    supportUs: "সহযোগিতা করো আমাদের",
    more: "আরো",
    legal: false,
    supportList: {
      donate: "দান করো",
      contribute: "কনট্রিবিউট করো",
      translate: "অনুবাদ করো"
    },
    moreList: {
      faq: false,
      documentation: "ডকুমেন্টেশন",
      status: "স্ট্যাটাস"
    },
    legalList: {
      privacyPolicy: "গোপনীয়তা নীতি",
      termsOfService: false,
      cookiePolicy: "কুকি নীতি"
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