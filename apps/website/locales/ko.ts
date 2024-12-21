import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "광고 차단기를 꺼서 저희를 지원해 주세요."
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
      wip: "작업 중",
      support: {
        safari: "Safari 지원을 위해 노력 중이니 계속 지켜봐 주세요!"
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
      title: "하나만 부탁드릴게요...",
      description: "PreMiD가 마음에 드셨으면 좋겠어요! 조금이라도 만족스러우셨다면, 다른 사람에게도 공유하시는 건 어떠신가요? 저희 자원봉사팀이 멋진 PreMiD를 만들기 위해 정성을 쏟았어요!",
      continue: "계속",
      close: "닫기",
      patreon: "{name}에서 지원하기",
      github: "{name}에서 스폰서되기",
      holdTight: "잠시만요... 마법의 버튼 불러오는 중..."
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
        title: "Presence 기여자",
        error: {
          title: "오류",
          description: "이 사용자를 불러오는 데 문제가 있습니다... 나중에 다시 시도해 주세요."
        }
      }
    },
    home: {
      meta: {
        title: "홈"
      },
      title: "PreMiD로 당신의 온라인 Presence를 강화하세요",
      subtitle: "친구에게 당신이 {word} 을(를) 즐기고 있는지 보여 주세요.",
      words: {
        music: "음악",
        videos: "동영상",
        streams: "방송",
        media: "미디어"
      },
      description: "PreMiD는 간단하고 강력한 도구로, 현재 미디어 활동을 YouTube, Disney+, Netflix 등 여러 플랫폼에서 공유할 수 있습니다. 연결 상태를 유지하고 친구들이 실시간으로 내 활동을 볼 수 있도록 하세요.",
      getStarted: "시작하기",
      sections: {
        feature: {
          title: "PreMiD를 좋아하게 될 이유",
          feature1: {
            title: "개인정보 제어",
            description: "개인정보 설정을 직접 관리하고 다른 사람들과 공유할 활동을 결정하세요. 내 데이터나 규칙 말이죠."
          },
          feature2: {
            title: "커뮤니티 중심",
            description: "열정적이고 헌신적인 커뮤니티가 제공하는 다양한 플랫폼에 대한 탁월한 지원을 경험해 보세요."
          },
          feature3: {
            title: "사용자 조정 가능한 설정",
            description: "다양한 사용자 지정 옵션을 통해 선호도와 필요에 맞게 PreMiD 환경을 맞춤 설정하실 수 있습니다."
          },
          feature4: {
            title: "간단 설정",
            description: "PreMiD로 바로 시작하고 실행하세요. 간단한 설정 프로세스를 통해 번거롭고 귀찮음 없이 바로 시작하실 수 있습니다."
          },
          feature5: {
            title: "Discord ToS 준수",
            description: "Discord에서 제공하는 공식 엔드포인트를 사용하여 Discord의 서비스 약관을 완전히 준수합니다."
          },
          feature6: {
            title: "미래의 기능",
            description: "PreMiD 경험을 더욱 향상시킬 새로운 기능과 개선 사항을 기대해 주세요."
          }
        },
        howItWorks: {
          title: "작동 원리",
          step1: {
            title: "확장 프로그램 설치",
            description: "내 브라우저에 PreMiD를 추가하세요."
          },
          step2: {
            title: "Discord로 로그인하기",
            description: "PreMiD를 Discord 계정과 연결하세요."
          },
          step3: {
            title: "서비스 추가",
            description: "YouTube, Disney+ 등과 같이 표시할 서비스를 선택하세요."
          },
          step4: {
            title: "즐기세요",
            description: "활동을 공유하고 PreMiD를 즐겨 보세요."
          }
        },
        callToAction: {
          title: "시작할 준비가 되셨나요?",
          description: "이미 PreMiD를 사랑하고 있으신 {count} 명의 사람들과 함께하세요.",
          button: "지금 시작하기"
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
        tooltip: "클릭해서 {name}의 프로필 사진을 복사해요"
      }
    },
    downloads: {
      title: "다운로드",
      steps: {
        install: "확장 프로그램 설치",
        login: "Discord로 로그인하기",
        add: "Presence 추가",
        showoff: "뽐내 보세요!"
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
        your: "당신의 브라우저",
        other: "다른 브라우저",
        based: "{browser} 기반"
      },
      mobile: {
        title: "나쁜 소식!",
        description: "PreMiD는 모바일 기기에 사용하실 수 없습니다. 죄송해요!"
      },
      alphaAccess: {
        title: "독점 알파 액세스를 잠금 해제하세요!",
        description: "Patron 혹은 GitHub에서 후원하여 PreMiD의 미래와 함께하세요. 여러분의 후원은 개발을 촉진할 뿐만 아니라 현재 개발 중인 가장 혁신적인 기능에 가장 먼저 액세스할 수 있는 권한을 부여합니다. PreMiD가 제공할 수 있는 최첨단 기능을 경험하고 피드백을 통해 그 궤도에 영향을 미치세요. 단순히 최초가 되는 것이 아니에요, 더 큰 무언가의 일부가 되는 거죠!",
        callToAction: "자세히 알아보고 혁신에 동참하기"
      },
      faq: "자주 묻는 질문",
      faqs: {
        q1: {
          question: "PreMiD가 무엇인가요?",
          answer: "PreMiD는 간단하게 설정할 수 있는 유틸리티로, 웹에서 하고 있는 일을 Discord 활동 상태에 표시해 주는 간단한 서비스 입니다."
        },
        q2: {
          question: "어떻게 PreMiD를 사용하나요?",
          answer: "확장 프로그램을 설치한 후 Discord 계정으로 로그인하여 PreMiD를 사용할 수 있습니다. 로그인한 후에는 프로필에 Presence를 추가하고 친구들에게 자랑하실 수도 있죠!"
        },
        q3: {
          question: "PreMiD는 Discord의 ToS에 위배되나요?",
          answer: "아니요, PreMiD는 Discord의 ToS에 위배되지 않습니다. PreMiD는 Discord의 API(Discord에서 제공하는 게이트 API 엔드포인트 포함) 를 사용하여 사용자의 활동을 설정합니다. 이는 PreMiD가 Discord의 ToS를 완전히 준수한다는 것을 의미합니다."
        },
        q4: {
          question: "PreMiD는 무슨 서비스를 제공하나요?",
          answer: "PreMiD는 YouTube, Twitch 및 Netflix 등 다양한 서비스를 지원합니다. 지원되는 서비스 목록은 지속적으로 늘어나고 있습니다. 전체 Presences 목록은 스토어 페이지에서 확인할 수 있습니다."
        },
        q5: {
          question: "어떻게 PreMiD에 기여할 수 있나요?",
          answer: "GitHub의 커뮤니티에 가입하여 PreMiD에 기여할 수 있습니다. 문제를 보고하거나 기능을 제안하거나 코드를 기여하여 도움을 줄 수 있습니다."
        },
        q6: {
          question: "PreMiD는 무료인가요?",
          answer: "네, PreMiD는 무료로 사용할 수 있습니다. 그러나 프로젝트 개발을 지원하기 위해 Patreon 및 GitHub 스폰서를 통해 기부를 받고 있습니다."
        },
        q7: {
          question: "PreMiD에 문제가 발생하면 어떻게 해야 하나요?",
          answer: "PreMiD에 문제가 발생하면 Discord 서버에 가입하여 지원을 받을 수 있습니다. 또한 문서에 문제 해결 가이드가 있습니다."
        },
        q8: {
          question: "PreMiD는 xyz를 지원하지 않는데 추가해 주실 수 있나요?",
          answer: "이른바 Presences는 커뮤니티 중심으로 작성되어 저희는 모든 플랫폼 하나 하나 다 추가할 수 있는 리소스가 없습니다. 허나, 안내에 따라 직접 Presences를 추가할 수 있습니다."
        },
        q9: {
          question: "얼마나 자주 PreMiD가 업데이트 되나요?",
          answer: "저희는 자원봉사자 중심의 소규모 프로젝트로서 가능한 한 자주 PreMiD를 업데이트하는 것을 목표로 하지만, 항상 최신 정보를 제공한다고 약속할 수는 없습니다."
        }
      }
    },
    store: {
      title: "스토어",
      noPresence: "검색어와 일치하는 Presence가 없어요...",
      presence: {
        button: {
          reportIssue: "문제 제보",
          suggestFeature: "기능 제안",
          viewCode: "코드 보기"
        },
        title: {
          description: "설명",
          information: "정보"
        },
        informationSection: {
          contributors: "기여자:",
          version: "버전: {version}",
          users: "사용자: {users}",
          tags: "태그:",
          supportedUrls: "지원하는 URL:"
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
    followUs: "팔로우",
    supportUs: "지원",
    more: "더 보기",
    legal: "법적 고지",
    supportList: {
      donate: "후원하기",
      contribute: "기여하기",
      translate: "번역하기"
    },
    moreList: {
      faq: "자주 묻는 질문",
      documentation: "문서",
      status: "상태"
    },
    legalList: {
      privacyPolicy: "개인정보 보호 정책",
      termsOfService: "서비스 이용 약관",
      cookiePolicy: "쿠키 정책"
    },
    withLoveBy: "님이 제작함",
    by: "사랑이 담긴",
    copyright: "© {year}-{currentYear} {company} All rights reserved."
  },
  error: {
    404: {
      title: false,
      message: "찾으시는 페이지가 존재하지 않아요."
    },
    500: {
      title: false,
      message: "저희 쪽에서 문제가 발생했어요."
    },
    default: {
      title: "오류",
      message: "저희 쪽에서 문제가 발생했어요.",
      button: "뒤로 가기"
    }
  }
}));