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
      wip: "Yapım Aşamasında",
      support: {
        safari: "Safari desteği için çalışıyoruz, beklemede kalın!"
      }
    },
    userChip: {
      loading: "Yükleniyor..."
    },
    storeCard: {
      addPresence: "Ekle",
      removePresence: "Kaldır"
    },
    donationModal: {
      title: "Küçük bir iyilik...",
      description: "PreMiD'i seveceğini umuyorum! Eğer yüzüne bir gülümseme getirirse, neden biraz sevginizi göstermeyesiniz? Gönüllü ekibimiz, sadece sizlere harika bir şey yaratmak için tüm kalbini ortaya koydu!",
      continue: "Devam Et",
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
        title: "Presence Katkıları",
        error: {
          title: "Hata",
          description: "Bu kullanıcıyı yüklerken sorun yaşıyoruz... Lütfen daha sonra tekrar dene."
        }
      }
    },
    home: {
      meta: {
        title: "Ana Sayfa"
      },
      title: "",
      subtitle: false,
      words: {
        music: "Müzik",
        videos: "Videolar",
        streams: "Akışlar",
        media: "Medya"
      },
      description: false,
      getStarted: "Başlayın",
      sections: {
        feature: {
          title: "PreMiD'i neden seveceksiniz",
          feature1: {
            title: "Gizlilik Ayarları",
            description: "Gizlilik ayarlarınızı kontrol edin ve diğerleriyle hangi aktivitelerinizi paylaşacağınızı seçin. Sizin veriniz, sizin kurallarınız."
          },
          feature2: {
            title: "Topluluk Odaklı",
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
            title: "Gelecek Özellikler",
            description: "PreMiD deneyiminizi ileriye taşıyacak heyecan verici özellikler ve geliştirmeler için beklemede kalın."
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
            description: "Görüntülemek istediğiniz servisleri seçin! YouTube, Disney+ ve daha fazlası gibi..."
          },
          step4: {
            title: "Keyfini çıkarın!",
            description: "Etkinliğini paylaş ve PreMiD'i kullanmanın keyfini çıkar!"
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
        tooltip: "{name}'in avatarını kopyalamak için tıklayın"
      }
    },
    downloads: {
      title: "İndir",
      steps: {
        install: "Eklentiyi kur",
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
        title: "Özel Alpha sürümüne erişim sağla!",
        description: "Bize Patreon'dan veya Github üzerinden sponsor olarak PreMiD'in geleceğine adım atın. Desteğiniz sadece uygulamanın gelişimini desteklemekle kalmaz, ayrıca size üzerinde çalıştığımız en yenilikçi özelliklere erken erişim sunar. PreMiD'in en gelişmiş halini deneyimleyin ve geribildirimlerinizle geleceğine etki edin. Bu sadece ilk olmak demek değil, daha büyük bir şeyin parçası olmak demek.",
        callToAction: "Daha Fazla Öğren & Yeniliğe Katıl"
      },
      faq: "Sıkça Sorulan Sorular",
      faqs: {
        q1: {
          question: "PreMiD nedir?",
          answer: "PreMiD, tarayıcınız üzerinden yaptıklarınızı Discord aktiviteniz üzerinden göstermenizi sağlayan kullanımı kolay ve ayarlanabilir bir araçtır."
        },
        q2: {
          question: "PreMiD'i nasıl kullanırım?",
          answer: "PreMiD'i eklentiyi kurarak ve Discord hesabınız ile giriş yaparak kullanabilirsiniz. Giriş yaptıktan sonra servisleri profilinize ekleyerek arkadaşlarınıza gösterebilirsiniz."
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