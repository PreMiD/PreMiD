import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "支援のために広告ブロッカーを無効化してください。"
    }
  },
  component: {
    searchBar: {
      search: "検索",
      sortBy: "並び順",
      searchPresence: "プレゼンスを探す",
      sort: {
        mostUsed: "使用数",
        alphabetical: "ABC順"
      },
      categories: {
        all: "すべて",
        anime: "アニメ",
        games: "ゲーム",
        music: "音楽",
        other: "その他",
        socials: "SNS",
        videos: "動画と配信"
      }
    },
    browserCard: {
      wip: "作業中",
      support: {
        safari: "Safariのサポートに向け取り組んでいます。お待ちください！"
      }
    },
    userChip: {
      loading: "読み込み中..."
    },
    storeCard: {
      addPresence: "追加",
      removePresence: "削除"
    },
    donationModal: {
      title: "ちょっとしたお願いがあります...",
      description: "PreMiDを気に入っていただけると嬉しいです！もし少しでも笑顔になれたなら、ぜひその愛を広めてください。ボランティアのチームが、あなたのために全力で素晴らしいものを作り上げました！",
      continue: "続ける",
      close: "閉じる",
      patreon: "{name}でサポートする",
      github: "{name}でスポンサーになる",
      holdTight: "そのままお待ちください... 魔法のボタンを読み込んでいます..."
    }
  },
  header: {
    links: {
      contributors: "貢献者",
      downloads: "ダウンロード",
      features: "機能を見る",
      store: "ストア"
    }
  },
  page: {
    users: {
      userPage: {
        title: "アクティビティの貢献者",
        error: {
          title: "エラー",
          description: "このユーザーの読み込みに問題が発生しています… 後でもう一度お試しください。"
        }
      }
    },
    home: {
      meta: {
        title: "ホーム"
      },
      title: "PreMiDでオンラインプレゼンスを強化しましょう",
      subtitle: "{word}を楽しんでいることを友達に見せましょう。",
      words: {
        music: "音楽",
        videos: "動画",
        streams: "配信",
        media: "メディア"
      },
      description: "PreMiDは、YouTube、Disney+、Netflixなど、複数のプラットフォームで現在のメディアアクティビティを共有できるシンプルで強力なツールです。リアルタイムでつながり、友達にあなたの活動を見てもらいましょう。",
      getStarted: "はじめよう",
      sections: {
        feature: {
          title: "PreMiDを愛する理由",
          feature1: {
            title: "プライバシー管理",
            description: "プライバシー設定を管理し、どのアクティビティを他人と共有するかを決めましょう。あなたのデータはあなたのルールで守られます。"
          },
          feature2: {
            title: "コミュニティ主導",
            description: "情熱的で献身的なコミュニティによって支えられた、多数のプラットフォームに対応する比類なきサポートを体験してください。"
          },
          feature3: {
            title: "カスタマイズ可能な設定",
            description: "豊富なカスタマイズオプションで、あなたの好みやニーズに合わせたPreMiD体験を作りましょう。"
          },
          feature4: {
            title: "簡単なセットアップ",
            description: "PreMiDはあっという間に始められます。シンプルなセットアッププロセスで、ストレスのないスタートをお約束します。"
          },
          feature5: {
            title: "Discordの利用規約に準拠",
            description: "Discordが提供する公式エンドポイントを使用し、Discordの利用規約に完全に準拠しています。"
          },
          feature6: {
            title: "今後の機能",
            description: "今後のPreMiD体験をさらに向上させるエキサイティングな新機能や改良をお楽しみに！"
          }
        },
        howItWorks: {
          title: "使い方",
          step1: {
            title: "拡張機能をインストールする",
            description: "PreMiDをブラウザに追加しましょう。"
          },
          step2: {
            title: "Discordでログインする",
            description: "PreMiDをDiscordアカウントと接続しましょう。"
          },
          step3: {
            title: "サービスを追加する",
            description: "YouTubeやDisney+など、表示したいサービスを選択しましょう。"
          },
          step4: {
            title: "楽しむ",
            description: "アクティビティを共有し、PreMiDを楽しみましょう。"
          }
        },
        callToAction: {
          title: "準備はできましたか？",
          description: "すでに{count}人のユーザーがPreMiDを愛用しています。あなたも仲間入りしませんか？",
          button: "今すぐ始める"
        }
      }
    },
    contributors: {
      title: "貢献者",
      presenceDevelopers: "プレゼンス開発者",
      staff: "スタッフ",
      supporters: "サポーター",
      translators: "翻訳者",
      avatar: {
        tooltip: "クリックして{name}のアバターをコピー"
      }
    },
    downloads: {
      title: "ダウンロード",
      steps: {
        install: "拡張機能をインストールする",
        login: "Discordでログインする",
        add: "プレゼンスを追加する",
        showoff: "自慢しよう！"
      },
      section: {
        heading: {
          title: "自己紹介のお時間です。",
          description: "PreMiDを使って、見ているものや聞いているものを他の人に見せびらかしましょう。同じ趣味を持った人を見つけられるかも…？",
          getStarted: "はじめよう",
          extension: "拡張機能のダウンロード"
        }
      },
      browser: {
        your: "お使いのブラウザ",
        other: "その他のブラウザ",
        based: "{browser}ベース"
      },
      mobile: {
        title: "残念なお知らせです！",
        description: "申し訳ありませんが、PreMiDはモバイルデバイスでは利用できません！"
      },
      alphaAccess: {
        title: "限定アルファ版アクセスをアンロック！",
        description: "PreMiDの未来を一足先に体験しませんか？Patronになるか、GitHubでスポンサーシップを通じてサポートしてください。あなたの支援は開発を加速させるだけでなく、私たちが作り上げている最先端の機能への最速アクセスを提供します。PreMiDの革新を体験し、フィードバックを通じてその進化に影響を与えることができます。それは単に最初に体験することだけでなく、より大きな何かの一部になることなのです。",
        callToAction: "詳細を確認して、革新に参加しましょう"
      },
      faq: "よくある質問",
      faqs: {
        q1: {
          question: "PreMiDとは何ですか？",
          answer: "PreMiDは、ウェブ上での活動をDiscordのアクティビティステータスに表示できる、シンプルでカスタマイズ可能なユーティリティです。"
        },
        q2: {
          question: "PreMiDはどのように使いますか？",
          answer: "PreMiDを使用するには、拡張機能をインストールし、Discordアカウントでログインします。ログイン後、プレゼンスをプロフィールに追加して、友達にアクティビティを共有できます。"
        },
        q3: {
          question: "PreMiDはDiscordの利用規約に違反しますか？",
          answer: "いいえ、PreMiDはDiscordの利用規約に違反しません。PreMiDはDiscordのAPI(Discordが提供するゲート付きAPIエンドポイントを含む)を使用してアクティビティを設定しています。これにより、PreMiDはDiscordの利用規約を完全に遵守しています。"
        },
        q4: {
          question: "PreMiDはどのサービスをサポートしていますか？",
          answer: "PreMiDは、YouTube、Twitch、Netflixなど、多くのさまざまなサービスをサポートしています。サポートされているサービスのリストは常に拡大中です。対応しているすべてのプレゼンスのリストは、ストアページでご確認いただけます。"
        },
        q5: {
          question: "PreMiDに貢献するにはどうすればよいですか？",
          answer: "PreMiDに貢献するには、GitHub上のコミュニティに参加してください。問題の報告、機能の提案、コードの提供などで協力することができます。"
        },
        q6: {
          question: "PreMiDは無料で使用できますか？",
          answer: "はい、PreMiDは無料で使用できます。ただし、プロジェクトの開発を支援するために、PatreonやGitHub Sponsorsを通じた寄付を受け付けています。"
        },
        q7: {
          question: "PreMiDで問題が発生した場合はどうすればいいですか？",
          answer: "PreMiDで問題が発生した場合は、サポートを受けるためにDiscordサーバーに参加してください。また、ドキュメントにはトラブルシューティングガイドも用意されていますので、そちらもご確認ください。"
        },
        q8: {
          question: "PreMiDがxyzをサポートしていません。追加してもらえますか？",
          answer: "私たちの「プレゼンス」はコミュニティ主導で作られています。そのため、すべてのプラットフォームを追加するリソースはありません。しかし、ドキュメントの手順に従えば、独自のプレゼンスを追加することができます。"
        },
        q9: {
          question: "PreMiDはどのくらいの頻度で更新されますか？",
          answer: "私たちは小さなボランティア主導のプロジェクトですので、できるだけ頻繁にPreMiDを更新することを目指していますが、常にすべてに対応できるわけではないことをご理解ください。"
        }
      }
    },
    store: {
      title: "ストア",
      noPresence: "検索に一致するプレゼンスはありません...",
      presence: {
        button: {
          reportIssue: "問題を報告する",
          suggestFeature: "機能を提案する",
          viewCode: "コードを見る"
        },
        title: {
          description: "概要",
          information: "インフォメーション"
        },
        informationSection: {
          contributors: "貢献者:",
          version: "バージョン: {version}",
          users: "ユーザー数: {users}",
          tags: "タグ:",
          supportedUrls: "サポートされているURL:"
        }
      },
      header: {
        categories: "カテゴリー",
        search: "プレゼンスを探す"
      }
    }
  },
  footer: {
    partners: "パートナー",
    followUs: "フォローする",
    supportUs: "PreMiDを支援",
    more: "もっと",
    legal: "法的事項",
    supportList: {
      donate: "寄付",
      contribute: "コントリビュート",
      translate: "翻訳"
    },
    moreList: {
      faq: "よくある質問",
      documentation: "ドキュメント",
      status: "ステータス"
    },
    legalList: {
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約",
      cookiePolicy: "Cookie のポリシー"
    },
    withLoveBy: "一緒",
    by: "によって",
    copyright: "© {year}-{currentYear} {company} All rights reserved."
  },
  error: {
    404: {
      title: false,
      message: "お探しのページは存在しません。"
    },
    500: {
      title: false,
      message: "こちら側で何か問題が発生しました。"
    },
    default: {
      title: "エラー",
      message: "こちら側で何か問題が発生しました。",
      button: "戻る"
    }
  }
}));