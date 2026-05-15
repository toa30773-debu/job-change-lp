# キャリアナビ LP コーディング作業指示書（Claude Code用）

> このプロジェクトのHTMLとCSSは既に完成しています。
> この指示書に従って、修正・仕上げ・GitHub公開まで対応してください。

---

## プロジェクト概要

**サービス名：** キャリアナビ（CareerNavi）
**種類：** 転職求人サイト LP（ランディングページ）
**ページ数：** 3ページ（LP・会員登録・登録完了）

---

## ファイル構成（既存）

```
careernavi/
  ├── index.html          ← LP（10セクション）
  ├── register.html       ← 会員登録ページ
  ├── complete.html       ← 登録完了ページ
  ├── css/
  │   ├── reset.css
  │   ├── variables.css   ← デザイントークン（CSS変数）
  │   ├── common.css      ← ヘッダー・フッター・ボタン共通
  │   ├── index.css       ← LP専用スタイル
  │   ├── register.css    ← 会員登録ページ専用
  │   └── complete.css    ← 登録完了ページ専用
  ├── js/
  │   ├── common.js       ← ヘッダースクロール・スムーズスクロール
  │   └── index.js        ← タブ切り替え・スライダー
  └── images/             ← 画像フォルダ（中身は後述）
```

---

## デザイントークン（参照用）

```css
--color-primary:   #1A3C6E  /* ネイビー */
--color-secondary: #2D7DD2  /* ブルー */
--color-accent:    #F4A623  /* ゴールド（CTA） */
--color-bg-light:  #F7F9FC  /* オフホワイト */
--color-text:      #1A1A2E  /* ダークネイビー */
--color-success:   #38A169  /* グリーン */
--color-error:     #E53E3E  /* レッド */
--color-border:    #E0E6EF  /* ライトグレー */
```

---

## ページ遷移フロー

```
index.html（LP）
  ↓ 「無料で会員登録する」ボタン
register.html（会員登録）
  ↓ フォーム送信（GET: action="complete.html"）
complete.html（登録完了）
  ↓ 「求人を探す」ボタン
index.html（LP）
```

---

## 作業タスク一覧

### タスク 1｜Figmaから画像をエクスポートして配置（最優先）

画像はFigmaフレーム「LP_CareerNavi_1440」にすでに配置されています。
FigmaのMCPを使って以下の画像をエクスポートし、`careernavi/images/` フォルダに保存してください。

#### エクスポートが必要な画像一覧

| 保存ファイル名 | Figmaの場所 | 用途 | 推奨サイズ・形式 |
|---|---|---|---|
| `hero-bg.jpg` | LP_CareerNavi_1440 → Section02（FV）の背景画像 | FVフルワイド背景 | 1440×800px / JPG |
| `feature-salary.jpg` | LP_CareerNavi_1440 → Section03 → 特集カード① | 特集スライダーカード | 360×160px / JPG |
| `feature-remote.jpg` | LP_CareerNavi_1440 → Section03 → 特集カード② | 特集スライダーカード | 360×160px / JPG |
| `feature-beginner.jpg` | LP_CareerNavi_1440 → Section03 → 特集カード③ | 特集スライダーカード | 360×160px / JPG |

#### Figma MCPでのエクスポート手順

```
1. Figma MCP で LP_CareerNavi_1440 フレームを開く
2. 各画像レイヤーを選択してエクスポート（JPG・2x 推奨）
3. careernavi/images/ フォルダに上記ファイル名で保存
```

#### エクスポート後の確認

`index.css` の `.fv` にすでに正しいパスが記述されています：
```css
.fv {
  background: url('../images/hero-bg.jpg') center / cover no-repeat;
}
```
画像を置くだけで自動的に表示されます。

#### 特集カードへの画像反映

`index.html` の特集カードの `.feature-card__img-placeholder` を `<img>` タグに差し替えてください：
```html
<!-- 変更前 -->
<div class="feature-card__img-placeholder" style="background: ...">💰</div>

<!-- 変更後 -->
<img class="feature-card__img" src="images/feature-salary.jpg" alt="年収アップ特集">
```

#### 画像が取得できない場合の代替（Figma MCPでエラーになった場合のみ）

```css
/* index.css の .fv を一時的に修正 */
.fv {
  background: linear-gradient(135deg, #1A3C6E 0%, #2D7DD2 60%, #1A3C6E 100%);
}
```

---

### タスク 2｜ブラウザ動作確認

各ファイルをブラウザで開いて以下を確認してください。

**確認項目（PC）：**
- [ ] ヘッダーが固定表示され、スクロール時にshadowがつく
- [ ] FVの検索バーが横並び（キーワード＋勤務地＋ボタン）になっている
- [ ] 特集スライダーが横スクロールできる（マウスドラッグ対応）
- [ ] カテゴリタブ（職種別・業種別・エリア別）が切り替わる
- [ ] LP → 会員登録ページ → 登録完了ページ の遷移が動作する

**確認項目（SP：ブラウザ開発者ツール 375px）：**
- [ ] ヘッダーが「ロゴ＋会員登録ボタン」のみになっている
- [ ] FVの検索バーが縦積みになっている
- [ ] ステップカード3枚が縦1列になっている
- [ ] 会員登録フォームの「姓・名」が縦積みになっている
- [ ] 就業状況ラジオボタンが縦1列になっている
- [ ] フッターリンクが2カラムになっている

---

### タスク 3｜軽微な修正・調整

確認後、以下の修正を加えてください。

#### 3-1. フォームバリデーション強化（register.html）

```html
<!-- 現状：action="complete.html" でそのまま遷移 -->
<!-- 修正後：JavaScript でバリデーションチェックを挟む -->
```

`register.html` の `</body>` 直前に以下を追加：

```html
<script>
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const workStatus = document.querySelector('input[name="workStatus"]:checked');
  const agree = document.querySelector('input[name="agree"]');

  // メールアドレス形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('メールアドレスの形式が正しくありません。');
    return;
  }

  // パスワード強度チェック
  if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert('パスワードは8文字以上で、英字と数字を含めてください。');
    return;
  }

  // 就業状況チェック
  if (!workStatus) {
    alert('現在の就業状況を選択してください。');
    return;
  }

  // 同意チェック
  if (!agree.checked) {
    alert('利用規約とプライバシーポリシーに同意してください。');
    return;
  }

  // 全チェック通過 → 登録完了ページへ
  window.location.href = 'complete.html';
});
</script>
```

#### 3-2. ヘッダーロゴのスタイル確認

`common.css` の `.header__logo` に以下が設定されているか確認：

```css
.header__logo {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1A3C6E;
}
```

---

### タスク 4｜README.md の作成

`careernavi/README.md` を以下の内容で作成してください。

```markdown
# キャリアナビ（CareerNavi）

転職求人サイトのランディングページ。HTMLとCSSのポートフォリオ作品。

## ページ構成

- index.html  ： LP（メインページ）
- register.html： 会員登録ページ
- complete.html ： 登録完了ページ

## 技術スタック

- HTML5 / CSS3（CSS変数・Grid・Flexbox）
- Vanilla JavaScript
- Google Fonts（Noto Sans JP / Inter）
- モバイルファースト設計（ブレークポイント: 768px）
- GitHub Pages でホスティング

## デザインシステム

| 役割 | HEX |
|------|-----|
| Primary（ネイビー） | #1A3C6E |
| Secondary（ブルー） | #2D7DD2 |
| Accent（ゴールド） | #F4A623 |
| Background | #F7F9FC |

## ローカル確認方法

ブラウザで `index.html` を直接開く（サーバー不要）

## デプロイ

GitHub Pages（main ブランチ / ルート）
```

---

### タスク 5｜GitHub Pages 公開

以下の手順でそのままデプロイできます。

```bash
# 1. GitHubで新規リポジトリ作成（careernavi-lp）

# 2. careernavi フォルダに移動
cd careernavi

# 3. git初期化
git init
git add .
git commit -m "feat: キャリアナビLP 初回コミット"

# 4. リモート追加してプッシュ
git remote add origin https://github.com/[ユーザー名]/careernavi-lp.git
git branch -M main
git push -u origin main

# 5. GitHub Pages 設定
# Settings → Pages → Source: Deploy from branch
# Branch: main / (root) → Save

# 6. 公開URL（数分後に有効）
# https://[ユーザー名].github.io/careernavi-lp/
```

---

## 参照仕様書（同フォルダ内）

必要であれば以下の仕様書も参照してください：

- `careernavi_lp_spec.md` ← LP Figmaデザイン仕様書
- `careernavi_register_spec.md` ← 会員登録ページ仕様書
- `careernavi_complete_spec.md` ← 登録完了ページ仕様書
- `careernavi_sp_spec.md` ← SPフレーム仕様書
- `careernavi_coding_spec.md` ← コーディング仕様書（詳細）

---

## 完了後の確認チェックリスト

- [ ] 全3ページがブラウザで正常に表示される
- [ ] PC（1440px）とSP（375px）でレスポンシブが機能している
- [ ] ページ遷移（LP → 登録 → 完了）が動作する
- [ ] GitHubに push 済み
- [ ] GitHub Pages で公開 URL が有効になっている
- [ ] 公開URLをコピーしてポートフォリオに記載する

---

*全作業完了後、公開URLを共有してください。*