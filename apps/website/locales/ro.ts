import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Vă rugăm să ne susțineți dezactivând sistemul de blocare a reclamelor."
    }
  },
  component: {
    searchBar: {
      search: "Caută",
      sortBy: "Sortează după",
      searchPresence: "Căutare Prezență",
      sort: {
        mostUsed: "Cele mai utilizate",
        alphabetical: "Alfabetic"
      },
      categories: {
        all: "Toate",
        anime: "Anime",
        games: "Jocuri",
        music: "Muzică",
        other: "Altele",
        socials: "Sociale",
        videos: "Video & Stream-uri"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "Lucrăm pentru a susține Safari, stai pe fază!"
      }
    },
    userChip: {
      loading: "Se încarcă..."
    },
    storeCard: {
      addPresence: "Adaugă",
      removePresence: "Șterge"
    },
    donationModal: {
      title: "O Favorită Rapidă...",
      description: "Sperăm că vei iubi PreMiD! Dacă îți aduce un zâmbet în față, de ce să nu împărtășești ceva dragoste înapoi? Echipa noastră de voluntari și-au pus inimile pentru a o face minunată doar pentru tine!",
      continue: "Continuă",
      close: "Închide",
      patreon: "Suport pentru {name}",
      github: "Sponsor pe {name}",
      holdTight: "Ține-te bine... se încarcă butonul magic..."
    }
  },
  header: {
    links: {
      contributors: "Contribuitori",
      downloads: "Descărcări",
      features: "Caracteristici",
      store: "Magazin"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Contribuții Prezență",
        error: {
          title: "Eroare",
          description: "Avem probleme cu încărcarea acestui utilizator... Vă rugăm să încercați din nou mai târziu."
        }
      }
    },
    home: {
      meta: {
        title: "Acasă"
      },
      title: "Îmbunătățește-ți prezența online cu PreMiD",
      subtitle: "Arătați-le prietenilor ce anume vă place {word}.",
      words: {
        music: "Muzică",
        videos: "Videoclipuri",
        streams: "Stream-uri",
        media: "Media"
      },
      description: "PreMiD este un instrument simplu, puternic, care vă permite să partajați activitatea dvs. media curentă pe mai multe platforme, cum ar fi YouTube, Disney+, Netflix și multe altele. Rămâi conectat și lasă-i pe prietenii tăi să vadă ce vizualizezi în timp real.",
      getStarted: "Începe",
      sections: {
        feature: {
          title: "De ce vei iubi PreMiD",
          feature1: {
            title: "Control confidențialitate",
            description: "Preia controlul setărilor tale de confidențialitate și decide ce activități împărtășești cu alții. Datele tale, regulile tale."
          },
          feature2: {
            title: "Dezvoltat de comunitate",
            description: "Experiență suport fără precedent pentru o multitudine de platforme, alimentată de o comunitate pasionată și dedicată."
          },
          feature3: {
            title: "Setări personalizate",
            description: "Ajustați experiența PreMiD cu opțiuni detaliate de personalizare pentru a se potrivi preferințelor și nevoilor dumneavoastră."
          },
          feature4: {
            title: "Ușor de configurat",
            description: "Pregătește-te și fi gata de PreMiD în cel mai scurt timp. Procesul nostru de configurare directă asigură un început fără complicații."
          },
          feature5: {
            title: "Conformitate cu Discord TsC",
            description: "Conformitate deplină cu Termenii de utilizare ai Discord, prin utilizarea criteriilor oficiale furnizate de Discord."
          },
          feature6: {
            title: "Caracteristici viitoare",
            description: "Rămâi conectat la noile caracteristici și îmbunătățiri captivante care îți vor îmbunătăți experiența PreMiD și mai mult."
          }
        },
        howItWorks: {
          title: "Cum funcționează",
          step1: {
            title: "Instalează Extensia",
            description: "Adaugă PreMiD browser-ului tău."
          },
          step2: {
            title: "Autentifică-te cu Discord",
            description: "Conectează PreMiD cu contul tău de Discord."
          },
          step3: {
            title: "Adaugă Servicii",
            description: "Alegeți serviciile pe care doriți să le afișați, cum ar fi YouTube, Disney+ și multe altele."
          },
          step4: {
            title: "Bucură-te",
            description: "Partajează-ți activitatea și bucură-te de preMiD."
          }
        },
        callToAction: {
          title: "Pregătit pentru a începe?",
          description: "Alătură-te celor {count} utilizatori care deja iubesc PreMiD.",
          button: "Începe acum"
        }
      }
    },
    contributors: {
      title: "Contribuitori",
      presenceDevelopers: "Dezvoltatorii Prezențelor",
      staff: "Personal",
      supporters: "Suporteri",
      translators: "Traducători",
      avatar: {
        tooltip: "Click pentru a copia avatarul lui {name}"
      }
    },
    downloads: {
      title: "Descărcări",
      steps: {
        install: "Instalează Extensia",
        login: "Autentifică-te cu Discord",
        add: "Adaugă Prezența",
        showoff: "Arată oprit!"
      },
      section: {
        heading: {
          title: "Timp de afișare dezactivat.",
          description: "Folosește PreMiD acum și arată-le prietenilor tăi ce folosești, probabil vei găsi pe cineva cu aceleași interese.",
          getStarted: "Începe",
          extension: "Extensie"
        }
      },
      browser: {
        your: "Browserul tău",
        other: "Alte browsere",
        based: "{browser} bazat"
      },
      mobile: {
        title: "Vești proaste!",
        description: "PreMiD nu este disponibil pentru dispozitivele mobile, ne pare rău!"
      },
      alphaAccess: {
        title: "Deblochează accesul exclusiv Alpha!",
        description: "Pășește în viitorul PreMiD devenind Patron sau sponsorizându-ne pe GitHub. Sprijinul dvs. nu numai că stimulează dezvoltarea, ci vă oferă acces exclusiv la cele mai inovatoare caracteristici pe care le elaborăm. Experimentează ceea ce PreMiD poate oferi și influența traiectoria sa cu feedback-ul tău. Nu e vorba doar de a fi primul, ci de a fi parte din ceva mai mare.",
        callToAction: "Află mai multe & Alătură-te inovării"
      },
      faq: "Întrebări frecvente",
      faqs: {
        q1: {
          question: "Ce este PreMiD?",
          answer: "PreMiD este o unealtă simplă, configurabilă care îți permite să arăți ceea ce faci pe web în starea de activitate Discord."
        },
        q2: {
          question: "Cum să folosesc PreMiD?",
          answer: "Poți folosi PreMiD instalând extensia și conectându-te cu contul tău Discord. Odată ce te-ai conectat, poți adăuga prezențe la profilul tău și să le arăți prietenilor tăi."
        },
        q3: {
          question: "Încalcă PreMid Termenii și Condițiile Discord?",
          answer: "Nu, PreMiD nu încalcă Termenii și Condițiile Discord. PreMiD folosește API-ul Discord-ului (inclusiv datele API furnizate de Discord) pentru a seta activitatea. Aceasta înseamnă că PreMiD este în deplină conformitate cu TsC Discord."
        },
        q4: {
          question: "Ce servicii suportă PreMiD?",
          answer: "PreMiD suportă numeroase servicii diferite, inclusiv YouTube, Twitter și Netflix. Lista serviciilor suportate este în continuă creștere. Puteți vedea lista completă de prezențe pe pagina noastră de magazin."
        },
        q5: {
          question: "Cum pot contribui la PreMiD?",
          answer: "Puteți contribui la PreMiD alăturându-vă comunității noastre pe GitHub. Puteți ajuta raportând probleme, sugerând funcționalități sau contribuind cu cod."
        },
        q6: {
          question: "Este PreMiD gratuit?",
          answer: "Da, PreMiD este gratis. Cu toate acestea, acceptăm donații prin Patreon și sponsorizări pe GitHub pentru a ajuta la dezvoltarea proiectului."
        },
        q7: {
          question: "Ce ar trebui să fac dacă întâlnesc o problemă cu PreMiD?",
          answer: "Dacă întâmpini orice problemă cu PreMiD, te poți alătura serverului nostru de Discord pentru suport. Avem, de asemenea, un ghid pentru probleme în documentația noastră."
        },
        q8: {
          question: "PreMiD nu acceptă xyz, îl puteți adăuga?",
          answer: "Așa numitele noastre prezențe sunt determinate de comunitate, nu avem resursele necesare pentru a adăuga fiecare platformă. Cu toate acestea, puteți adăuga propria prezență urmând instrucțiunile de pe documentația noastră."
        },
        q9: {
          question: "Cât de des este actualizat PreMiD?",
          answer: "Suntem un proiect bazat pe voluntariat. Dorim să actualizăm PreMiD cât mai des posibil, dar nu putem promite că vom fi întotdeauna pregătiți."
        }
      }
    },
    store: {
      title: "Magazin",
      noPresence: "Nicio prezență nu corespunde căutării tale...",
      presence: {
        button: {
          reportIssue: "Raportează o problemă",
          suggestFeature: "Sugerează o funcție nouă",
          viewCode: "Vezi codul"
        },
        title: {
          description: "Descriere",
          information: "Informații"
        },
        informationSection: {
          contributors: "Contribuitori:",
          version: "Versiune: {version}",
          users: "Utilizatori: {users}",
          tags: "Etichete:",
          supportedUrls: "URL-uri suportate:"
        }
      },
      header: {
        categories: "Categorii",
        search: "Căutare Prezență"
      }
    }
  },
  footer: {
    partners: "Parteneri",
    followUs: "Urmărește-ne",
    supportUs: "Susține-ne",
    more: "Mai multe",
    legal: "Aspecte juridice",
    supportList: {
      donate: "Donează ",
      contribute: "Contribuie",
      translate: "Tradu"
    },
    moreList: {
      faq: "Întrebări frecvente",
      documentation: "Documentație",
      status: "Statut"
    },
    legalList: {
      privacyPolicy: "Politică de confidenţialitate",
      termsOfService: "Condiţii de utilizare",
      cookiePolicy: "Politică Cookies"
    },
    withLoveBy: "Cu",
    by: "de",
    copyright: "©️ {year}-{currentYear} {company} Toate drepturile rezervate."
  },
  error: {
    404: {
      title: false,
      message: "Pagina pe care o cauți nu există."
    },
    500: {
      title: false,
      message: "Ceva nu a mers bine."
    },
    default: {
      title: "Eroare",
      message: "Ceva nu a mers bine.",
      button: "Înapoi"
    }
  }
}));