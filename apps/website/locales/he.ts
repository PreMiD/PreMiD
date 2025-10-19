import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "בבקשה תמוך בנו על ידי השבתת חוסם הפרסומות שלך."
    }
  },
  component: {
    searchBar: {
      search: "חיפוש",
      sortBy: "מיין לפי",
      searchPresence: "חפש Presence",
      sort: {
        mostUsed: "הכי בשימוש",
        alphabetical: "אלפביתי"
      },
      categories: {
        all: "הכל",
        anime: "אנימה",
        games: "משחקים",
        music: "מוזיקה",
        other: "אחר",
        socials: "חברתי",
        videos: "סרטונים & שידורים"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "אנחנו עובדים על תמיכה בדפדפן Safari, הישאר מעודכן!"
      }
    },
    userChip: {
      loading: "טוען..."
    },
    storeCard: {
      addPresence: "הוסף",
      removePresence: "הסר"
    },
    donationModal: {
      title: "חסד קטן ומהיר...",
      description: "אנחנו מקווים שתאהבו את PreMiD! אם זה גורם לכם לחייך, למה לא להפיץ קצת אהבה בחזרה? הצוות שלנו הוא מתנדבים ששמים את לבם כדי להפוך את זה למדהים במיוחד עבורכם!",
      continue: "המשך",
      close: "סגור",
      patreon: "תמוך ב-{name}",
      github: "חסות ב-{name}",
      holdTight: "החזק חזק... טוען את כפתור הקסם..."
    }
  },
  header: {
    links: {
      contributors: "תורמים",
      downloads: "הורדות",
      features: "אפשרויות",
      store: "חנות"
    }
  },
  page: {
    users: {
      userPage: {
        title: "תרומות נוכחות",
        error: {
          title: "שגיאה",
          description: "יש לנו שגיאה עם טעינת המשתמש הזה... אנא נסה שוב מאוחר יותר."
        }
      }
    },
    home: {
      meta: {
        title: "מסך הבית"
      },
      title: "שפר את הנוכחות המקוונת שלך עם PreMiD",
      subtitle: "הצג לחבריך את ה-{word} שמהם אתה נהנה.",
      words: {
        music: "מוזיקה",
        videos: "סרטונים",
        streams: "שידורים",
        media: "מדיה"
      },
      description: "PreMiD הוא כלי פשוט ועוצמתי שמאפשר לך לשתף את פעילות המדיה הנוכחית שלך במספר פלטפורמות כמו YouTube, Disney+, Netflix ועוד. הישאר מחובר ותן לחברים שלך לראות במה אתה עוסק בזמן אמת.",
      getStarted: "התחל",
      sections: {
        feature: {
          title: "למה אתה אוהב את PreMid?",
          feature1: {
            title: "שליטת פרטיות",
            description: "קח שליטה על הגדרות הפרטיות שלך והחליט אילו פעילויות אתה משתף עם אחרים. הנתונים שלך, הכללים שלך."
          },
          feature2: {
            title: "מונע על ידי הקהילה",
            description: "חוות תמיכה שאין כמוה עבור מגוון רחב של פלטפורמות, פועל בזכות קהילה נלהבת ומסורה."
          },
          feature3: {
            title: "הגדרות התאמה אישית",
            description: "התאימו את חוויית ה-PreMiD שלכם עם אפשרויות התאמה אישית נרחבות שיתאימו להעדפות ולצרכים שלכם."
          },
          feature4: {
            title: "הגדרה קלה",
            description: "התחל לעבוד עם PreMiD תוך זמן קצר. תהליך ההתקנה הפשוט שלנו מבטיח התחלה חלקה ללא מאמץ."
          },
          feature5: {
            title: "עומד בתנאי השימוש של Discord",
            description: "אנחנו עומדים באופן מלא בתנאי השירות של Discord על ידי שימוש בנקודות קצה רשמיות המסופקות על ידי Discord."
          },
          feature6: {
            title: "פיצ'רים עתידיים",
            description: "הישאר מעודכן לגבי תכונות ושיפורים חדשים ומרגשים שישפרו עוד יותר את חוויית PreMiD שלכם."
          }
        },
        howItWorks: {
          title: "איך זה עובד",
          step1: {
            title: "התקן את התוסף",
            description: "הוסף את PreMiD לדפדפן שלך."
          },
          step2: {
            title: "התחבר עם Discord",
            description: "חבר את PreMiD עם חשבון ה-Discord שלך."
          },
          step3: {
            title: "הוסף שירותים",
            description: "בחר את השירותים שאתה רוצה להציג, כמו YouTube, Disney+ ועוד."
          },
          step4: {
            title: "תהנה",
            description: "שתף את הפעילות שלך ותהנה עם PreMiD."
          }
        },
        callToAction: {
          title: "מוכן להתחיל?",
          description: "הצטרף ל-{count} משתמשים שכבר אוהבים את PreMid.",
          button: "התחל עכשיו"
        }
      }
    },
    contributors: {
      title: "תורמים",
      presenceDevelopers: "מפתחי נוכחות",
      staff: "צוות",
      supporters: "תומכים",
      translators: "מתרגמים",
      avatar: {
        tooltip: "לחץ כדי להעתיק את האווטאר של {name}"
      }
    },
    downloads: {
      title: "הורדות",
      steps: {
        install: "התקן תוסף",
        login: "התחבר עם Discord",
        add: "הוסף נוכחות",
        showoff: "התפאר!"
      },
      section: {
        heading: {
          title: "זמן להשוויץ.",
          description: "השתמש ב-PreMiD עכשיו והשוויץ בפני החברים שלך במה שאתה עושה, אולי תמצא מישהו עם אותם תחומי עניין.",
          getStarted: "התחל",
          extension: "תוסף"
        }
      },
      browser: {
        your: "הדפדפן שלך",
        other: "דפדפנים אחרים",
        based: "מבוסס על {browser}"
      },
      mobile: {
        title: "חדשות רעות!",
        description: "PreMiD לא זמין למכשירים ניידים, סליחה!"
      },
      alphaAccess: {
        title: "בטל את הנעילה לגישת אלפא בלעדית!",
        description: "היכנסו לעתיד של PreMiD על ידי כך שתהפכו ל-Patron או תתנו לנו חסות לנו ב-GitHub. התמיכה שלכם לא רק מקדמת את הפיתוח שלנו, אלא גם מעניקה לכם גישה ראשונה לתכונות החדשניות ביותר שאנו יוצרים. חוו את הטכנולוגיה המתקדמת ביותר ש-PreMiD יכולה להציע והשפיעו על מסלולה בעזרת המשוב שלכם. זה לא רק להיות ראשונים - זה להיות חלק ממשהו גדול יותר.",
        callToAction: "למד עוד והצטרף לחדשנות"
      },
      faq: "שאלות נפוצות",
      faqs: {
        q1: {
          question: "מה זה PreMiD?",
          answer: "PreMiD הוא כלי פשוט וניתן להגדרה המאפשר לך להציג את מה שאתה עושה באינטרנט בסטטוס הפעילות שלך ב-Discord."
        },
        q2: {
          question: "איך משתמשים ב-PreMiD?",
          answer: "ניתן להשתמש ב-PreMiD על ידי התקנת התוסף וכניסה לחשבון Discord שלכם. לאחר הכניסה, תוכלו להוסיף נוכחות לפרופיל שלכם ולהשוויץ בפני חבריכם."
        },
        q3: {
          question: "האם PreMiD נוגד את תנאי השימוש של דיסקורד?",
          answer: "לא, PreMiD אינו נוגד את תנאי השימוש של Discord. למעשה, PreMiD משתמש ב-API של Discord (כולל נקודות קצה של API מגודרות המסופקות על ידי Discord) כדי להגדיר את הפעילות שלך. משמעות הדבר היא ש-PreMiD תואם לחלוטין את תנאי השימוש של Discord."
        },
        q4: {
          question: "באילו שירותים PreMiD תומך?",
          answer: "PreMiD תומך בשירותים רבים ושונים, כולל YouTube, Twitch ו-Netflix. רשימת השירותים הנתמכים גדלה כל הזמן. ניתן לצפות ברשימה המלאה של השירותים הנתמכים בדף החנות שלנו."
        },
        q5: {
          question: "איך אני יכול לתרום ל-PreMiD?",
          answer: "אתם יכולים לתרום ל-PreMiD על ידי הצטרפות לקהילה שלנו ב-GitHub. אתם יכולים לעזור על ידי דיווח על בעיות, הצעת תכונות או תרומת קוד."
        },
        q6: {
          question: "האם PreMiD הוא חינמי לשימוש?",
          answer: "כן, PreMiD הוא חינמי לשימוש. על זאת, אנו מקבלים תרומות דרך ספונסרים של Patreon ו-GitHub כדי לסייע בפיתוח הפרויקט."
        },
        q7: {
          question: "מה עליי לעשות אם אני נתקל בבעיה עם PreMiD?",
          answer: "אם אתם נתקלים בבעיות כלשהן עם PreMiD, אתם מוזמנים להצטרף לשרת ה-Discord שלנו לקבלת תמיכה. יש לנו גם מדריך לפתרון בעיות במסמכים שלנו."
        },
        q8: {
          question: "PreMiD לא תומך ב-xyz, האם תוכלו להוסיף אותו?",
          answer: "הנוכחות שלנו מונעת על ידי הקהילה, כך שאין לנו את המשאבים להוסיף כל פלטפורמה בנפרד. עם זאת, ניתן להוסיף נוכחות משלכם על ידי ביצוע ההוראות במסמכים שלנו."
        },
        q9: {
          question: "באיזו תדירות PreMiD מתעדכן?",
          answer: "אנחנו פרויקט קטן המונע על ידי מתנדבים, אנו שואפים לעדכן את PreMiD לעתים קרובות ככל האפשר, אך איננו יכולים להבטיח שתמיד נהיה מעודכנים."
        }
      }
    },
    store: {
      title: "חנות",
      noPresence: "שום נוכחות לא תואמת את החיפוש שלך...",
      presence: {
        button: {
          reportIssue: "דווח על בעיה",
          suggestFeature: "הצע תכונה",
          viewCode: "ראה קוד"
        },
        title: {
          description: "תיאור",
          information: "מידע"
        },
        informationSection: {
          contributors: "תורמים:",
          version: "גרסה: {version}",
          users: "משתמשים: {users}",
          tags: "תגים:",
          supportedUrls: "קישורי URL תומכים:"
        }
      },
      header: {
        categories: "קטגוריות",
        search: "חפש Presence"
      }
    }
  },
  footer: {
    partners: "שותפים",
    followUs: "עקוב אחרינו",
    supportUs: "תמוך בנו",
    more: "עוד",
    legal: "חוקי",
    supportList: {
      donate: "תרום",
      contribute: "תרום",
      translate: "תרגם"
    },
    moreList: {
      faq: "שאלות נפוצות",
      documentation: "תיעוד",
      status: "סטטוס"
    },
    legalList: {
      privacyPolicy: "מדיניות פרטיות",
      termsOfService: "תנאים והגבלות",
      cookiePolicy: "מדיניות עוגיות"
    },
    withLoveBy: "עם",
    by: "על ידי",
    copyright: "© {year}-{currentYear} {company} כל הזכויות שמורות."
  },
  error: {
    404: {
      title: false,
      message: "הדף שחיפשת אינו קיים."
    },
    500: {
      title: false,
      message: "משהו השתבש בצד שלנו."
    },
    default: {
      title: "שגיאה",
      message: "משהו השתבש בצד שלנו.",
      button: "חזור אחורה"
    }
  }
}));