import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "검색",
      sortBy: "정렬 기준",
      searchPresence: "Presence 검색",
      sort: {
        mostUsed: "최다 사용순",
        alphabetical: "알파벳순"
      },
      categories: {
        all: "모두",
        anime: "애니메이션",
        games: "게임",
        music: "음악",
        other: "기타",
        socials: "소셜",
        videos: "동영상 및 방송"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: false
      }
    },
    userChip: {
      loading: "불러오는 중..."
    },
    storeCard: {
      addPresence: "추가",
      removePresence: "제거"
    },
    donationModal: {
      title: false,
      description: false,
      continue: "계속",
      close: "닫기",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "기여자",
      downloads: "다운로드",
      features: "기능",
      store: "스토어"
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
        title: "홈"
      },
      title: false,
      subtitle: false,
      words: {
        music: "음악",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "시작하기",
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
      title: "기여자",
      presenceDevelopers: "Presence 개발자",
      staff: "관리자",
      supporters: "후원자",
      translators: "번역가",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "다운로드",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "이제 뽐내볼 시간이에요.",
          description: "PreMiD를 지금 사용해서 내가 뭘 하는지 내 친구에게 뽐내보세요. 아마 같은 관심사를 가진 누군가를 찾을지도 몰라요.",
          getStarted: "시작하기",
          extension: "확장 프로그램"
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
      title: "스토어",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "설명",
          information: "정보"
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
        categories: "카테고리",
        search: "Presence 검색"
      }
    }
  },
  footer: {
    partners: "파트너",
    followUs: false,
    supportUs: "지원",
    more: "더 보기",
    legal: false,
    supportList: {
      donate: "후원하기",
      contribute: "기여하기",
      translate: "번역하기"
    },
    moreList: {
      faq: false,
      documentation: "문서",
      status: "상태"
    },
    legalList: {
      privacyPolicy: "개인정보 보호 정책",
      termsOfService: false,
      cookiePolicy: "쿠키 정책"
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