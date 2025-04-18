import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Støt os venligst ved at deaktivere din annonce-blocker."
    }
  },
  component: {
    searchBar: {
      search: "Søg",
      sortBy: "Sorter efter",
      searchPresence: "Søg efter Presence",
      sort: {
        mostUsed: "Mest Brugt",
        alphabetical: "Alfabetisk"
      },
      categories: {
        all: "Alle",
        anime: "Anime",
        games: "Spil",
        music: "Musik",
        other: "Andet",
        socials: "Sociale Apps",
        videos: "Videoer & Streaming"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "Vi arbejder på at understøtte Safari, holde op!"
      }
    },
    userChip: {
      loading: "Indlæser..."
    },
    storeCard: {
      addPresence: "Tilføj",
      removePresence: "Fjern"
    },
    donationModal: {
      title: "En hurtig tjeneste...",
      description: "Vi håber, at du vil elske PreMiD! Hvis det bringer et smil til dit ansigt, hvorfor så ikke sprede nogle kærlighed tilbage? Vores team af frivillige sætter deres hjerter til at gøre det awesome bare for dig!",
      continue: "Fortsæt",
      close: "Luk",
      patreon: "Støtte på {name}",
      github: "Sponsor på {name}",
      holdTight: "Hold fast... indlæser den magiske knap..."
    }
  },
  header: {
    links: {
      contributors: "Bidragydere",
      downloads: "Installationer",
      features: "Funktioner",
      store: "Butik"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Presence Bidrag",
        error: {
          title: "Fejl",
          description: "Vi har problemer med at indlæse denne bruger... Prøv igen senere."
        }
      }
    },
    home: {
      meta: {
        title: "Hjem"
      },
      title: "Forbedre Din Online Tilstedeværelse Med PreMiD",
      subtitle: "Vis dine venner hvad {word} du nyder.",
      words: {
        music: "Musik",
        videos: "Videoer",
        streams: "Streams",
        media: "Medie"
      },
      description: "PreMiD er et simpelt, kraftfuldt værktøj, der giver dig mulighed for at dele din aktuelle medieaktivitet på tværs af flere platforme som YouTube, Disney +, Netflix og meget mere. Bliv forbundet og lad dine venner se, hvad du er op til i realtid.",
      getStarted: "Kom i gang",
      sections: {
        feature: {
          title: "Hvorfor Du Vil Elske PreMiD",
          feature1: {
            title: "Privatliv Kontrol",
            description: "Tag ansvaret for dine privatlivsindstillinger og beslut, hvilke aktiviteter du deler med andre. Dine data, dine regler."
          },
          feature2: {
            title: "Fællesskabsdrevet",
            description: "Oplev uovertruffen støtte til en lang række platforme, drevet af et lidenskabeligt og dedikeret fællesskab."
          },
          feature3: {
            title: "Brugerdefinerbare Indstillinger",
            description: "Skræddersy din PreMiD-oplevelse med omfattende tilpasningsmuligheder, der passer til dine præferencer og behov."
          },
          feature4: {
            title: "Nem Opsætning",
            description: "Kom i gang med PreMiD på ingen tid. Vores enkle opsætningsproces sikrer en problemfri start."
          },
          feature5: {
            title: "Discord ToS Compliant",
            description: "Fuldt kompatibel med Discord's Servicevilkår ved at udnytte officielle endpoints leveret af Discord."
          },
          feature6: {
            title: "Fremtidige Funktioner",
            description: "Hold øje med spændende nye funktioner og forbedringer, der vil forbedre din PreMiD oplevelse yderligere."
          }
        },
        howItWorks: {
          title: "Hvordan virker det",
          step1: {
            title: "Installer udvidelsen",
            description: "Hent PreMiD til din browser."
          },
          step2: {
            title: "Log ind med Discord",
            description: "Forbind PreMiD med din Discord konto."
          },
          step3: {
            title: "Tilføj tjenester",
            description: "Vælg de tjenester, du vil vise, som YouTube, Disney+, og meget mere."
          },
          step4: {
            title: "God fornøjelse",
            description: "Del din aktivitet og nyd at bruge PreMiD."
          }
        },
        callToAction: {
          title: "Klar Til At Komme I Gang?",
          description: "Deltag samme med de {count} brugere, der allerede elsker PreMiD.",
          button: "Start nu"
        }
      }
    },
    contributors: {
      title: "Bidragydere",
      presenceDevelopers: "Presence Udvikler",
      staff: "Personale",
      supporters: "Supportere",
      translators: "Oversættere",
      avatar: {
        tooltip: "Klik for at kopiere {name}'s avatar"
      }
    },
    downloads: {
      title: "Installationer",
      steps: {
        install: "Installér udvidelse",
        login: "Log ind med Discord",
        add: "Tilføj Presences",
        showoff: "Vis af!"
      },
      section: {
        heading: {
          title: "Tid til at vise sig.",
          description: "Brug PreMiD nu og vis dine venner, hvad du laver, måske finder du nogen med de samme interesser.",
          getStarted: "Kom i gang",
          extension: "Udvidelse"
        }
      },
      browser: {
        your: "Din browser",
        other: "Andre browsere",
        based: "{browser} baseret"
      },
      mobile: {
        title: "Dårlige nyheder!",
        description: "PreMiD er ikke tilgængelig for mobile enheder, beklager!"
      },
      alphaAccess: {
        title: "Lås op for Eksklusiv Alpha Access!",
        description: "Træd ind i fremtiden for PreMiD ved at blive patron eller sponsorere os på GitHub. Din støtte ikke kun driver vores udvikling, men giver dig også første adgang til de mest innovative funktioner, vi fremstiller. Oplev den banebrydende af hvad PreMiD kan tilbyde og påvirke sin bane med din feedback. Det handler ikke kun om at være først-det handler om at være en del af noget større.",
        callToAction: "Lær mere og vær med i innovation"
      },
      faq: "Ofte stillede spørgsmål (FAQ)",
      faqs: {
        q1: {
          question: "Hvad er PreMiD?",
          answer: "PreMiD er et simpelt, konfigurerbart værktøj, der giver dig mulighed for at vise, hvad du laver på nettet, i din Discord-status for afspilning nu."
        },
        q2: {
          question: "Hvordan bruger jeg PreMiD?",
          answer: "Du kan bruge PreMiD ved at installere udvidelsen og logge ind med din Discord konto. Når du er logget ind, kan du tilføje tilstedeværelse til din profil og vise dig til dine venner."
        },
        q3: {
          question: "Er PreMiD imod Discord's ToS?",
          answer: "Nej, PreMiD er ikke imod Discord's ToS. PreMiD bruger Discord's API (herunder gated API endpoints leveret af Discord) til at indstille din aktivitet. Det betyder, at PreMiD er i fuld overensstemmelse med Discord's ToS."
        },
        q4: {
          question: "Hvilke tjenester understøtter PreMiD?",
          answer: "PreMiD understøtter mange forskellige tjenester, herunder YouTube, Twitter og Netflix. Listen over understøttede tjenester er konstant stigende. Du kan se den komplette liste over tilstedeværelse på vores butiksside."
        },
        q5: {
          question: "Hvordan kan jeg bidrage til PreMiD?",
          answer: "Du kan bidrage til PreMiD ved at deltage i vores fællesskab på GitHub. Du kan hjælpe ved at rapportere problemer, foreslå funktioner eller bidrage kode."
        },
        q6: {
          question: "Er PreMiD gratis at bruge?",
          answer: "Ja, PreMiD kan frit bruge. Men vi accepterer donationer gennem Patreon og GitHub Sponsorer for at hjælpe med at støtte udviklingen af projektet."
        },
        q7: {
          question: "Hvad skal jeg gøre, hvis jeg støder på et problem med PreMiD?",
          answer: "Hvis du støder på problemer med PreMiD, kan du deltage i vores Discord server for support. Vi har også en fejlfindingsguide på vores dokumentation."
        },
        q8: {
          question: "PreMiD understøtter ikke xyz, kan du tilføje det?",
          answer: "Vores såkaldte Presences er community-drevet, vi har ikke ressourcer til at tilføje hver eneste platform. Du kan dog tilføje din egen Presence ved at følge instruktionerne i vores dokumentation."
        },
        q9: {
          question: "Hvor ofte opdateres PreMiD?",
          answer: "Vi er et lille frivilligt drevet projekt, vi sigter mod at opdatere PreMiD så ofte som muligt, men vi kan ikke love, at vi altid vil være på toppen af ting."
        }
      }
    },
    store: {
      title: "Butik",
      noPresence: "Ingen Presence matcher din søgning...",
      presence: {
        button: {
          reportIssue: "Rapportér et problem",
          suggestFeature: "Foreslå en funktion",
          viewCode: "Se kode"
        },
        title: {
          description: "Beskrivelse",
          information: "Information"
        },
        informationSection: {
          contributors: "Bidragydere:",
          version: "Version: {version}",
          users: "Brugere: {users}",
          tags: "Mærker:",
          supportedUrls: "Understøttede URL'er:"
        }
      },
      header: {
        categories: "Kategorier",
        search: "Søg efter Presence"
      }
    }
  },
  footer: {
    partners: "Partnere",
    followUs: "Følg os",
    supportUs: "Støt os",
    more: "Mere",
    legal: "Juridisk",
    supportList: {
      donate: "Doner",
      contribute: "Giv os en hjælpende hånd",
      translate: "Oversæt"
    },
    moreList: {
      faq: "FAQ",
      documentation: "Dokumentation",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Fortrolighedspolitik",
      termsOfService: "Servicevilkår",
      cookiePolicy: "Cookiepolitik"
    },
    withLoveBy: "Med",
    by: "af",
    copyright: "©️ {year}-{currentYear} {company} Alle rettigheder forbeholdes."
  },
  error: {
    404: {
      title: false,
      message: "Den side, du kigger efter, eksisterer ikke."
    },
    500: {
      title: false,
      message: "Noget gik galt hos os."
    },
    default: {
      title: "Fejl",
      message: "Noget gik galt hos os.",
      button: "Gå tilbage"
    }
  }
}));