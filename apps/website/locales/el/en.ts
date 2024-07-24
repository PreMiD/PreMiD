import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: false
    }
  },
  component: {
    searchBar: {
      search: "Αναζήτηση",
      sortBy: false,
      searchPresence: "Αναζήτηση Presence",
      sort: {
        mostUsed: false,
        alphabetical: false
      },
      categories: {
        all: "Όλα",
        anime: "Άνιμε",
        games: "Βιντεοπαιχνίδια",
        music: "Μουσική",
        other: "Άλλα",
        socials: "Κοινωνικά Δίκτυα",
        videos: "Βίντεο & Μεταδόσεις"
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
      close: false,
      patreon: false,
      github: false,
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Συνεισφέροντες",
      downloads: "Λήψεις",
      features: "Λειτουργίες",
      store: "Κατάστημα"
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
        title: "Σπίτι"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Μουσική",
        videos: false,
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Ας Ξεκινήσουμε",
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
      title: "Συνεισφέροντες",
      presenceDevelopers: false,
      staff: "Προσωπικό",
      supporters: false,
      translators: "Μεταφραστές",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Λήψεις",
      steps: {
        install: false,
        login: false,
        add: false,
        showoff: false
      },
      section: {
        heading: {
          title: "Ώρα για εμφάνιση.",
          description: "Χρησιμοποιήστε το PreMiD τώρα και δείξτε στους φίλους σας τι κάνετε, ίσως βρείτε κάποιον με τα ίδια ενδιαφέροντα.",
          getStarted: "Ας Ξεκινήσουμε",
          extension: "Επέκταση"
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
      title: "Κατάστημα",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
          viewCode: false
        },
        title: {
          description: "Περιγραφή",
          information: "Πληροφορίες"
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
        categories: "Κατηγορίες",
        search: "Αναζήτηση Presence"
      }
    }
  },
  footer: {
    partners: "Συνεργάτες",
    followUs: false,
    supportUs: "Υποστηρίξτε μας",
    more: "Περισσότερα",
    legal: false,
    supportList: {
      donate: "Δωρήστε",
      contribute: "Συμβάλλετε",
      translate: "Μεταφράστε"
    },
    moreList: {
      faq: false,
      documentation: "Τεκμηρίωση",
      status: "Κατάσταση"
    },
    legalList: {
      privacyPolicy: false,
      termsOfService: false,
      cookiePolicy: false
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