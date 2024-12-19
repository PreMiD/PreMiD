import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Prosimy o wsparcie nas poprzez wyłączenie blokowania reklam."
    }
  },
  component: {
    searchBar: {
      search: "Szukaj",
      sortBy: "Sortuj według",
      searchPresence: "Szukaj Presence",
      sort: {
        mostUsed: "Najczęściej używane",
        alphabetical: "Alfabetycznie"
      },
      categories: {
        all: "Wszystkie",
        anime: "Anime",
        games: "Gry",
        music: "Muzyka",
        other: "Inne",
        socials: "Media Społecznościowe",
        videos: "Filmy i transmisje"
      }
    },
    browserCard: {
      wip: "W budowie",
      support: {
        safari: "Pracujemy nad wsparciem Safari, czekajcie na nowe informacje!"
      }
    },
    userChip: {
      loading: "Wczytywanie..."
    },
    storeCard: {
      addPresence: "Dodaj",
      removePresence: "Usuń"
    },
    donationModal: {
      title: "Szybka przysługa...",
      description: "Mamy nadzieję, że pokochasz PreMiD! Jeśli sprawia to Tobie uśmiech na twarzy, to dlaczego nie podzielić się swoimi odczuciami? Nasz zespół składający się z ochotników włożył swoje serca w uczynienie go niesamowitym całkiem dla Was!",
      continue: "Kontynuuj",
      close: "Zamknij",
      patreon: "Wspieraj nas na {name}",
      github: "Sponsoruje nas na {name}",
      holdTight: "Jeszcze chwila... wczytuję magiczny przycisk..."
    }
  },
  header: {
    links: {
      contributors: "Współtwórcy",
      downloads: "Pliki do pobrania",
      features: "Funkcje",
      store: "Sklep"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Wkład w Presence",
        error: {
          title: "Błąd",
          description: "Mamy problem z wczytywaniem tego użytkownika... Spróbuj ponownie później."
        }
      }
    },
    home: {
      meta: {
        title: "Strona główna"
      },
      title: "Ulepsz swój status online z PreMiD",
      subtitle: "Pokaż swoim znajomym, że lubisz {word}.",
      words: {
        music: "Muzykę",
        videos: "Wideo",
        streams: "Streamy",
        media: "Media"
      },
      description: "PreMiD jest prostym, potężnym narzędziem, które pozwala Ci dzielić się aktualną aktywnością z mediów na wielu platformach, takich jak YouTube, Disney+, Netflix i nie tylko. Pozostań w kontakcie i pozwól swoim znajomym zobaczyć, co porabiasz w czasie rzeczywistym.",
      getStarted: "Jak rozpocząć",
      sections: {
        feature: {
          title: "Dlaczego pokochasz PreMiD",
          feature1: {
            title: "Kontrola prywatności",
            description: "Kontroluj własne ustawienia prywatności i decyduj którymi aktywnościami chcesz dzielić się z innymi. Twoje dane, twoje zasady."
          },
          feature2: {
            title: "Zasilany społecznością",
            description: "Doświadcz niespotykanego wsparcia dla wielu platform, tworzonego przez pasjonującą i oddaną społeczność."
          },
          feature3: {
            title: "Konfigurowalne ustawienia",
            description: "Dostosuj swoje doświadczenia z PreMiD z szeroką gamą opcji aby wpasować się do Twoich preferencji i potrzeb."
          },
          feature4: {
            title: "Łatwa Konfiguracja",
            description: "Skonfiguruj PreMiD w mgnieniu oka. Nasz prosty proces konfiguracji zapewnia bezproblemowy start."
          },
          feature5: {
            title: "Zgodność z warunkami korzystania z usługi Discorda",
            description: "Pełna zgodność z Regulaminem Discorda poprzez wykorzystanie oficjalnych punktów końcowych dostarczanych przez Discorda."
          },
          feature6: {
            title: "Przyszłe funkcje",
            description: "Oczekujcie nowych informacji o funkcjach i usprawnieniach, które ulepszą twoje doświadczenia z PreMiD."
          }
        },
        howItWorks: {
          title: "Jak to działa",
          step1: {
            title: "Zainstaluj rozszerzenie",
            description: "Dodaj PreMiD do swojej przeglądarki."
          },
          step2: {
            title: "Zaloguj się za pomocą Discorda",
            description: "Połącz PreMiD z kontem Discord."
          },
          step3: {
            title: "Dodaj usługi",
            description: "Wybierz usługi, które chcesz wyświetlać, takie jak YouTube, Disney+ i inne."
          },
          step4: {
            title: "Gotowe",
            description: "Podziel się swoją aktywnością i ciesz się z PreMiD."
          }
        },
        callToAction: {
          title: "Gotów, aby rozpocząć?",
          description: "Dołącz do {count} użytkowników, którzy pokochali PreMiD.",
          button: "Rozpocznij teraz"
        }
      }
    },
    contributors: {
      title: "Współtwórcy",
      presenceDevelopers: "Twórcy Presence",
      staff: "Administracja",
      supporters: "Wspierający",
      translators: "Tłumacze",
      avatar: {
        tooltip: "Kliknij, aby skopiować awatar {name}"
      }
    },
    downloads: {
      title: "Pliki do pobrania",
      steps: {
        install: "Zainstaluj rozszerzenie",
        login: "Zaloguj się za pomocą Discorda",
        add: "Dodaj Presence",
        showoff: "Pokaż się!"
      },
      section: {
        heading: {
          title: "Czas się pochwalić.",
          description: "Użyj PreMiD teraz i zacznij się chwalić znajomym, co robisz. Być może znajdziesz kogoś o takich samych zainteresowaniach.",
          getStarted: "Jak rozpocząć",
          extension: "Rozszerzenie"
        }
      },
      browser: {
        your: "Twoja przeglądarka",
        other: "Inne przeglądarki",
        based: "Oparte na {browser}"
      },
      mobile: {
        title: "Złe wieści!",
        description: "PreMiD nie jest dostępny dla urządzeń mobilnych, przepraszamy!"
      },
      alphaAccess: {
        title: "Uzyskaj ekskluzywny dostęp do wersji Alpha!",
        description: "Zajrzyj w przyszłość PreMiD poprzez zostanie Patronem lub sponsorem na GitHub. Twoje wsparcie nie tylko napędza rozwój aplikacji ale także zapewnia Tobie pierwszeństwo w poznawaniu innowacyjnych funkcji które tworzymy. Doświadcz najświeższych informacji o rozwoju PreMiD i wpłyń na jego ścieżkę dzięki Twoim wskazówkom. Nie chodzi tylko o bycie pierwszym—chodzi o bycie częścią czegoś większego.",
        callToAction: "Dowiedz się więcej i przyczyń się do innowacji"
      },
      faq: "Najczęściej zadawane pytania",
      faqs: {
        q1: {
          question: "Czym jest PreMiD?",
          answer: "PreMiD to proste, konfigurowalne narzędzie, pokazujące twoją aktywność w sieci jako status na Discordzie."
        },
        q2: {
          question: "Jak korzystać z PreMiD?",
          answer: "Możesz użyć PreMiD, instalując rozszerzenie i logując się na swoje konto Discord. Po zalogowaniu możesz dodać statusy do swojego profilu i pokazać się znajomym."
        },
        q3: {
          question: "Czy PreMiD łamie zasady Discorda?",
          answer: "Nie, PreMiD nie łamie zasad Discorda. PreMiD używa oficjalnego API (w tym kontrolowane punkty końcowe API dostarczane przez Discord) do ustawienia twojej aktywności. To oznacza, że PreMiD jest w pełni zgodny z zasadami Discorda."
        },
        q4: {
          question: "Jakie usługi wspiera PreMiD?",
          answer: "PreMiD obsługuje wiele różnych usług, w tym YouTube, Twitch i Netflix. Lista obsługiwanych usług stale rośnie. Możesz zobaczyć pełną listę na naszej stronie sklepu."
        },
        q5: {
          question: "Jak mogę wnieść wkład do PreMiD?",
          answer: "Możesz przyczynić się do rozwoju PreMiD, dołączając do naszej społeczności na GitHub. Możesz pomóc zgłaszając problemy, sugerując funkcje lub tworząc wkład w kod."
        },
        q6: {
          question: "Czy PreMiD jest darmowy?",
          answer: "Tak, PreMiD jest darmowy. Akceptujemy jednak darowizny za pośrednictwem Patreon i GitHub Sponsors w celu wsparcia rozwoju projektu."
        },
        q7: {
          question: "Co powinienem zrobić, jeśli napotkam problem z PreMiD?",
          answer: "Jeśli napotkasz jakiekolwiek problemy z PreMiD, możesz dołączyć do naszego serwera Discord, aby uzyskać wsparcie. Mamy również poradnik rozwiązywania problemów w naszej dokumentacji."
        },
        q8: {
          question: "PreMiD nie obsługuje xyz, czy możecie to dodać?",
          answer: "Nasze tak zwane Aktywności są tworzone przez społeczność, nie mamy zasobów, aby dodać każdą platformę. Jednak możesz dodać swoją aktywność zgodnie z instrukcjami zawartymi w naszej dokumentacji."
        },
        q9: {
          question: "Jak często PreMiD jest aktualizowany?",
          answer: "Jesteśmy małym projektem opartym na zespole ochotników, mamy na celu jak najczęstszą aktualizację PreMiD, ale nie możemy obiecać, że zawsze będziemy na bieżąco."
        }
      }
    },
    store: {
      title: "Sklep",
      noPresence: "Brak aktywności pasujących do Twojego wyszukiwania...",
      presence: {
        button: {
          reportIssue: "Zgłoś problem",
          suggestFeature: "Zaproponuj funkcję",
          viewCode: "Wyświetl kod"
        },
        title: {
          description: "Opis",
          information: "Informacje"
        },
        informationSection: {
          contributors: "Współtwórcy:",
          version: "Wersja: {version}",
          users: "Użytkownicy: {users}",
          tags: "Tagi:",
          supportedUrls: "Wspierane adresy URL:"
        }
      },
      header: {
        categories: "Kategorie",
        search: "Szukaj Presence"
      }
    }
  },
  footer: {
    partners: "Partnerzy",
    followUs: "Śledź nas",
    supportUs: "Wesprzyj nas",
    more: "Więcej",
    legal: "Informacje prawne",
    supportList: {
      donate: "Wesprzyj",
      contribute: "Przyczyń się",
      translate: "Przetłumacz"
    },
    moreList: {
      faq: "FAQ",
      documentation: "Dokumentacja",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Polityka Prywatności",
      termsOfService: "Warunki korzystania z usługi",
      cookiePolicy: "Polityka plików cookies"
    },
    withLoveBy: "Z",
    by: "przez",
    copyright: "©️ {year}-{currentYear} {company} Wszystkie prawa zastrzeżone."
  },
  error: {
    404: {
      title: false,
      message: "Strona której szukasz nie istnieje."
    },
    500: {
      title: false,
      message: "Coś poszło nie tak po naszej stronie."
    },
    default: {
      title: "Błąd",
      message: "Coś poszło nie tak po naszej stronie.",
      button: "Powrót"
    }
  }
}));