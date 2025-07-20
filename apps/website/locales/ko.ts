import { defineI18nLocale } from "#i18n";
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
          description: "해당 사용자를 불러오는 데 문제가 발생했어요. 나중에 다시 시도해 주세요."
        }
      }
    },
    home: {
      meta: {
        title: "홈"
      },
      title: "PreMiD와 함께 온라인상 존재감을 높여봐요",
      subtitle: "친구에게 {word}을 보여주세요.",
      words: {
        music: "내가 듣는 음악",
        videos: "내가 보는 동영상",
        streams: "내가 좋아하는 방송",
        media: "내가 시청하는 미디어"
      },
      description: "PreMiD는 YouTube, Disney+, Netflix 등의 여러 플랫폼에서 미디어 활동을 공유할 수 있는 간명한 도구예요. 연결하고 나서 내가 무엇을 하는지 친구가 실시간으로 보도록 해 보세요.",
      getStarted: "시작하기",
      sections: {
        feature: {
          title: "PreMiD를 좋아하게 될 이유",
          feature1: {
            title: "개인정보 제어",
            description: "개인정보 설정을 도맡고 다른 사람과 공유할 활동을 결정하세요. 내가 정하는 나의 데이터."
          },
          feature2: {
            title: "커뮤니티 주도",
            description: "열정과 헌신이 가득한 커뮤니티에서 수많은 플랫폼의 전무후무한 지원을 경험하세요."
          },
          feature3: {
            title: "맞춤 가능한 설정",
            description: "폭넓은 맞춤형 선택지로 PreMiD 경험을 선호와 필요에 맞게 조정하세요."
          },
          feature4: {
            title: "간단 설정",
            description: "일어나서도 PreMiD를 실행해 보아요. 수월한 설정 과정으로 번거롭지 않게 해 드릴게요."
          },
          feature5: {
            title: "Discord 서비스 이용 약관 준수",
            description: "Discord의 공식 엔드포인트를 활용해 Discord 서비스 이용 약관을 완전히 준수한답니다."
          },
          feature6: {
            title: "향후 기능",
            description: "PreMiD 경험을 훨씬 높일 흥미로운 새로운 기능과 개선점을 기대해 주세요."
          }
        },
        howItWorks: {
          title: "작동 원리",
          step1: {
            title: "확장 프로그램 설치하기",
            description: "브라우저에 PreMiD를 추가하세요."
          },
          step2: {
            title: "Discord로 로그인하기",
            description: "PreMiD를 Discord 계정과 연결하세요."
          },
          step3: {
            title: "서비스 추가하기",
            description: "YouTube, Disney+ 등과 같이 표시하고 싶은 서비스를 고르세요."
          },
          step4: {
            title: "즐기기",
            description: "활동을 공유하고 PreMiD 사용을 마음껏해 보세요."
          }
        },
        callToAction: {
          title: "시작할 준비가 되셨나요?",
          description: "PreMiD에 푹 빠진 {count}명과 함께하세요.",
          button: "지금 시작하기"
        }
      }
    },
    contributors: {
      title: "기여자",
      presenceDevelopers: "Presence 개발자",
      staff: "관리자",
      supporters: "지원자",
      translators: "번역가",
      avatar: {
        tooltip: "눌러서 {name}님의 아바타를 복사해요"
      }
    },
    downloads: {
      title: "다운로드",
      steps: {
        install: "확장 프로그램 설치",
        login: "Discord로 로그인",
        add: "Presence 추가",
        showoff: "뽐내기!"
      },
      section: {
        heading: {
          title: "이제 뽐내 볼 시간이에요.",
          description: "PreMiD를 지금 사용해서 친구들에게 무엇을 하는지 뽐내보세요. 아마 같은 관심사를 가진 누군가를 찾을지도 몰라요.",
          getStarted: "시작하기",
          extension: "확장 프로그램"
        }
      },
      browser: {
        your: "내 브라우저",
        other: "다른 브라우저",
        based: "{browser} 기반"
      },
      mobile: {
        title: "유감스러운 소식",
        description: "PreMiD는 모바일 기기에서 사용하실 수 없습니다."
      },
      alphaAccess: {
        title: "독점 알파 액세스를 잠금 해제하세요!",
        description: "Patron 혹은 GitHub에서 후원하여 PreMiD의 미래와 함께하세요. 여러분의 후원은 저희가 개발하는 데 활력을 불어넣을 뿐만 아니라 현재 개발 중인 가장 혁신적인 기능을 제일 먼저 경험하실 수 있는 기회를 제공해요. 저희가 제공하는 최첨단 기능을 경험하고 피드백을 통해 저희의 발전 방향을 제시해 주세요. 단순히 최초가 되는 것이 아니에요, 더 큰 무언가의 일부가 되는 거죠.",
        callToAction: "자세히 알아보고 혁신에 동참하기"
      },
      faq: "자주 묻는 질문",
      faqs: {
        q1: {
          question: "PreMiD가 무엇인가요?",
          answer: "PreMiD는 간단하고, 구성 가능한 유용한 프로그램이에요. 웹에서 무엇을 하는지 Discord 활동 상태에 보여줄 수 있답니다."
        },
        q2: {
          question: "어떻게 PreMiD를 사용하나요?",
          answer: "확장 프로그램을 설치하고 Discord 계정에 로그인해 PreMiD를 사용할 수 있어요. 로그인한 후, 프로필에 Presence를 추가해서 친구들에게 뽐내실 수 있죠."
        },
        q3: {
          question: "PreMiD는 Discord의 서비스 이용 약관에 위배되나요?",
          answer: "아니요, PreMiD는 Discord의 서비스 이용 약관에 위배되지 않아요. PreMiD는 Discord의 API(Discord에서 제공하는 게이트된 API 엔드포인트 포함)를 사용해서 활동을 설정해요. PreMiD가 Discord의 서비스 이용 약관을 완전히 준수한다는 것을 의미하죠."
        },
        q4: {
          question: "PreMiD는 무슨 서비스를 지원하나요?",
          answer: "PreMiD는 YouTube, Twitch, Netflix 등의 다양한 서비스를 지원해요. 지원하는 서비스 목록은 계속 늘어나고 있어요. 모든 Presence 목록은 스토어 페이지에서 볼 수 있어요."
        },
        q5: {
          question: "어떻게 PreMiD에 기여할 수 있나요?",
          answer: "GitHub의 커뮤니티에 가입해서 PreMiD에 기여할 수 있어요. 문제를 제보하거나, 기능을 제안하거나, 코드에 기여해서 도움을 주실 수 있어요."
        },
        q6: {
          question: "PreMiD는 무료인가요?",
          answer: "네, PreMiD는 무료로 사용할 수 있어요. 그렇지만, 프로젝트 개발을 지원하기 위한 Patreon 및 GitHub 스폰서로 후원을 받고 있어요."
        },
        q7: {
          question: "PreMiD에 문제가 발생하면 어떻게 해야 하나요?",
          answer: "PreMiD에 문제가 발생하면, 지원용 Discord 서버에 참가할 수 있어요. 그리고 문서에 문제 해결 지침이 있어요."
        },
        q8: {
          question: "PreMiD가 지원하지 않는 것이 있는데, 추가해 주실 수 있나요?",
          answer: "Presence는 커뮤니티 중심이라, 모든 플랫폼을 추가할 여력이 없어요. 그렇지만, 문서의 지침을 따라서 직접 Presence를 추가하실 수는 있어요."
        },
        q9: {
          question: "얼마나 자주 PreMiD가 업데이트되나요?",
          answer: "저희는 자원봉사자 중심의 소규모 프로젝트로서 가능한 한 자주 PreMiD를 업데이트하는 것을 목표로 하지만, 항상 최신 정보를 제공할 여력이 없어요."
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
        categories: "분류",
        search: "Presence 검색"
      }
    }
  },
  footer: {
    partners: "파트너",
    followUs: "팔로우하기",
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
      title: "404",
      message: "찾으시는 페이지가 존재하지 않아요."
    },
    500: {
      title: "500",
      message: "저희 쪽에서 문제가 발생했어요."
    },
    default: {
      title: "오류",
      message: "저희 쪽에서 문제가 발생했어요.",
      button: "뒤로 가기"
    }
  }
}));