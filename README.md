# キャリアナビ（CareerNavi）

転職・求人情報サイトのランディングページ。求職者に「信頼感」と「次のアクション」を届けることをテーマに制作したポートフォリオ作品。

---

## デモ

🔗 **[ライブデモを見る](https://toa30773-debu.github.io/job-change-lp/)**

**LP（メインページ）**
| PC版（1440px） | SP版（375px） |
|---|---|
| ![LP PC版](images/ss_lp_pc.png) | ![LP SP版](images/ss_lp_sp.png) |

**会員登録ページ**
| PC版 | SP版 |
|---|---|
| ![登録 PC版](images/ss_register_pc.png) | ![登録 SP版](images/ss_register_sp.png) |

**登録完了ページ**
| PC版 | SP版 |
|---|---|
| ![完了 PC版](images/ss_complete_pc.png) | ![完了 SP版](images/ss_complete_sp.png) |

---

## 制作の背景・コンセプト

doda・マイナビなど主要転職サイトのUI/UXを分析し、共通する設計パターンを抽出した上でデザインに落とし込みました。

- **数字で信頼を訴求**（120,000件・500,000人・93%）
- **検索体験を最前面に**（FVに検索バーを配置）
- **登録誘導の反復**（FV・クロージングCTA・各セクション末尾）

---

## 制作フロー

```
仕様書作成（.md）
  ↓
Figmaでデザイン（Claude Codeを使用）
  ↓
レビュー・修正（複数回）
  ↓
コーディング（Claude Codeを使用）
  ↓
ブラウザ確認・調整
  ↓
GitHub Pages 公開
```

> **仕様書.mdについて：** リポジトリ内の `careernavi_lp_spec.md` などは制作前に作成したFigmaデザイン用の仕様書です。実際のコードはレビューと修正を経て仕様書から改善されている箇所があります。

> **AI活用について：** デザイン生成・コーディングに Claude Code（Anthropic）を活用しています。プロンプト設計・レビュー・修正指示はすべて自身で行っています。

---

## ページ構成

| ページ | ファイル | 内容 |
|--------|----------|------|
| LP（メイン） | `index.html` | FV・特集・求人・カテゴリ・ノウハウ |
| 会員登録 | `register.html` | 登録フォーム・登録メリット |
| 登録完了 | `complete.html` | ステップ案内・次のアクション誘導 |

---

## こだわりポイント

**デザイン**
- ネイビー × ゴールドの配色で「信頼感 × 行動喚起」を両立
- FVにフルワイド背景画像＋グラデーションオーバーレイ
- Figmaで PC（1440px）・SP（375px）のフレームを別途制作

**コーディング**
- CSS変数（カスタムプロパティ）でデザイントークンを一元管理
- モバイルファーストのレスポンシブ設計（ブレークポイント: 768px）
- 特集スライダーのドラッグスクロール（PC・SP両対応）
- カテゴリタブ切り替え（職種別・業種別・エリア別）
- フォームバリデーション（メール形式・パスワード強度・必須チェック）

---

## 使用技術

| 技術 | 用途 |
|------|------|
| HTML5 | マークアップ |
| CSS3 | スタイリング（Grid・Flexbox・カスタムプロパティ） |
| Vanilla JavaScript | タブ・スライダー・バリデーション |
| Google Fonts | Noto Sans JP / Inter |
| Figma | UIデザイン（PC・SPフレーム） |
| Claude Code | デザイン生成・コーディング支援 |
| GitHub Pages | ホスティング |

---

## ファイル構成

```
careernavi-lp/
  ├── index.html
  ├── register.html
  ├── complete.html
  ├── css/
  │   ├── reset.css
  │   ├── variables.css
  │   ├── common.css
  │   ├── index.css
  │   ├── register.css
  │   └── complete.css
  ├── js/
  │   ├── common.js
  │   └── index.js
  └── images/
```

---

## ローカルで確認する

サーバー不要。`index.html` をブラウザで直接開くだけで動作します。

```bash
# VS Code Live Server を使う場合
# index.html を右クリック → Open with Live Server
```

---

*© 2026 Portfolio Work by toa*
