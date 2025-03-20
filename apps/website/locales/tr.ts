import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Lütfen reklam engelleyicinizi devre dışı bırakarak bizi destekleyiniz."
    }
  },
  component: {
    searchBar: {
      search: "Ara",
      sortBy: "Sırala",
      searchPresence: "Servis ara",
      sort: {
        mostUsed: "En Çok Kullanılan",
        alphabetical: "Alfabetik"
      },
      categories: {
        all: "Tümü",
        anime: "Anime",
        games: "Oyun",
        music: "Müzik",
        other: "Diğer",
        socials: "Sosyal",
        videos: "Video & Yayın"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: false
      }
    },
    userChip: {
      loading: "Yükleniyor..."
    },
    storeCard: {
      addPresence: false,
      removePresence: false
    },
    donationModal: {
      title: false,
      description: false,
      continue: false,
      close: "İptal",
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Katkıda Bulunanlar",
      downloads: "İndir",
      features: "Özellikler",
      store: "Mağaza"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "Hata",
          description: false
        }
      }
    },
    home: {
      meta: {
        title: "Ana Sayfa"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Müzik",
        videos: "Videolar",
        streams: false,
        media: "Medya"
      },
      description: false,
      getStarted: "Başlayın",
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
            title: "Kişiselleştirilebilir Ayarlar",
            description: false
          },
          feature4: {
            title: "Kolay Kurulum",
            description: false
          },
          feature5: {
            title: "Discord'un Hizmet Koşulları ile uyumlu.",
            description: false
          },
          feature6: {
            title: false,
            description: false
          }
        },
        howItWorks: {
          title: "Nasıl Çalışıyor?",
          step1: {
            title: "Uzantıyı yükleyin.",
            description: "Tarayıcınıza PreMiD uzantısını kurun."
          },
          step2: {
            title: "Discord ile oturum açın.",
            description: "PreMiD'i Discord hesabınız ile bağlayın."
          },
          step3: {
            title: "Servisleri ekleyin.",
            description: false
          },
          step4: {
            title: "Keyfini çıkarın!",
            description: false
          }
        },
        callToAction: {
          title: "Başlamaya hazır mısınız?",
          description: "Hâlihazırda PreMiD'i sevmiş {count} kullanıcının arasına katıl!",
          button: "Şimdi başlayın!"
        }
      }
    },
    contributors: {
      title: "Katkıda Bulunanlar",
      presenceDevelopers: "Servis Geliştiricileri",
      staff: "Ekip",
      supporters: "Destekçiler",
      translators: "Çevirmenler",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "İndir",
      steps: {
        install: false,
        login: "Discord ile oturum açın.",
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Gösteri zamanı.",
          description: "PreMiD kullanmaya başlayın ve diğerlerine ne yaptığınızı gösterin, belki aynı zevkleri paylaştığınız bir kaç arkadaş edinirsiniz.",
          getStarted: "Başlayın",
          extension: "Eklenti"
        }
      },
      browser: {
        your: "Tarayıcın",
        other: "Diğer tarayıcılar",
        based: "{browser} tabanlı"
      },
      mobile: {
        title: "Kötü haber!",
        description: "PreMiD mobil cihazlarda mevcut değildir, özür dileriz!"
      },
      alphaAccess: {
        title: false,
        description: false,
        callToAction: false
      },
      faq: "Sıkça Sorulan Sorular",
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
      title: "Mağaza",
      noPresence: false,
      presence: {
        button: {
          reportIssue: "Bir sorun bildir.",
          suggestFeature: "Bir özellik öner.",
          viewCode: "Kaynak Kodunu Görüntüle"
        },
        title: {
          description: "Açıklama",
          information: "Bilgi"
        },
        informationSection: {
          contributors: "Katkıda Bulunanlar:",
          version: "Sürüm: {version}",
          users: "Kullanıcılar: {users}",
          tags: "Etiketler:",
          supportedUrls: "Desteklenen URL'ler:"
        }
      },
      header: {
        categories: "Kategoriler",
        search: "Servis ara"
      }
    }
  },
  footer: {
    partners: "Partnerler",
    followUs: "Bizi takip et!",
    supportUs: "Destek ol",
    more: "Dahası",
    legal: "Yasal",
    supportList: {
      donate: "Bağış Yap",
      contribute: "Katkıda Bulun",
      translate: "Çeviri"
    },
    moreList: {
      faq: false,
      documentation: "Dokümantasyon",
      status: "PreMiD Durumu"
    },
    legalList: {
      privacyPolicy: "Gizlilik Politikası",
      termsOfService: "Hizmet Koşulları",
      cookiePolicy: "Çerez Politikası"
    },
    withLoveBy: false,
    by: false,
    copyright: false
  },
  error: {
    404: {
      title: false,
      message: "Aradığınız sayfa mevcut değil."
    },
    500: {
      title: false,
      message: false
    },
    default: {
      title: "Hata",
      message: false,
      button: "Geri dön."
    }
  }
}));