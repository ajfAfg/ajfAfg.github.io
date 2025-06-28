---
title: 技育CAMPハッカソン vol.7 に参加しました
date: "2022-08-15"
---

[技育 CAMP ハッカソン vol.7](https://talent.supporterz.jp/events/3207890b-4b45-46f6-881b-e761a919cbe1/)に参加しました．[前回](../giiku-camp-vol5-2022)から約 1 ヶ月ぶりの参加です．今回は個人での参加だったので，チーム名が二人ユニットから一人ユニットに退化してしまいました．かなしみ．

とりあえず成果物の発表スライド．

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUZaL9QFT-tDAP4fqaN_OGuckstUbYwyJhPw0mwrVSHZgaKR8iauKAD6S385s15vyYAUWRybojNPgo/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

**パンチカード**を作りました！！！　[Visual Studio マーケットプレイス](https://marketplace.visualstudio.com/items?itemName=ajfAfg.punched-card)にて公開中なのでぜひ遊んでみてください！

また，今回は[優秀賞](https://twitter.com/geek_pjt/status/1556208824687947776?s=21&t=hvh0cHoG8oOvWvENKLaToQ)をいただきました！　ありがとうございます！！

## 仕様

- 文字コードは ASCII コード
- 1 カラム 1 文字
- 40 字/枚

間違った箇所に穴を開けるともう戻せないのも仕様です（VSCode の Undo を使えば一応戻せる）．

## 動機

ウケ狙いです．

もう少し真面目に書くと，テーマとして無駄開発を選択したのは，これまで比較的真面目に作品を作ってきてて，そろそろふざけたかったからです．パンチカードというアイデアを採用したのは，プログラミング言語自体が好きなので，プログラミング言語と関連したアイデアで何か作りたかったからです．

### なんで VSCode の拡張機能として作ったの

最初は Jupyter Notebook のような形で実装し，ブラウザで動かすことを考えていました．しかし，特にファイルの同期を考え出すと結構しんどかったので，その辺りの面倒を見てくれる VSCode 上で動かすことにしました．VSCode の拡張機能だと本アプリを手元でお試ししやすいだろう，みたいな期待も少しあります．

## 技術的な話

今回のハッカソンで挑戦したことは，スライドにも書いた以下の 2 つです．

1. VSCode の拡張機能の開発
2. 拡張機能の中で React を動かす

ここでは 2 を少し深掘ってみます．

### Custom Editor

VSCode の拡張機能を作るための API がいくつか提供されているのですが，今回作ったものは主に [Custom Editor API](https://code.visualstudio.com/api/extension-guides/custom-editors) を使っています．Custom Editor API を使うことで，VSCode の中にもう一つのファイル編集ソフトを立ち上げるみたいなことができます．例えば，[このサンプル](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample)のように，画像に落書きする画面を作ったりできます．なお，この画面は HTML/CSS/JavaScript で作ります（詳細は [Webview API](https://code.visualstudio.com/api/extension-guides/webview#scripts-and-message-passing)）．拡張機能もまた JavaScript で記述されます．

### 直接 DOM を触りとうない

画面を HTML/CSS/JavaScript で作るということで，動的に画面を変更する場合は DOM をイジる必要があるのですが，React を知ってしまった今ではとてもそんなことできません．バグらせる自信しかない（React を使ってもバグらせるけど）．

という訳で VSCode の中でも React を動かしたいんですが，ビルドに少し難があります．というのも，全ての JavaScript ファイルを一つにまとめられないという問題があります．この理由は，拡張機能用の JavaScript ファイルが実行されたのちに，画面用の JavaScript ファイルが読み込まれる必要があるからです．以上から拡張機能用と画面用でそれぞれ分けてビルドする必要があり，Webpack の設定を頑張ってなんとかしました．一時沼りかけてたのでマジでなんとかなってよかった……

## Future Work

アイデアが結構気に入っているので，細かい部分を改善してきたいと考えています．例えば，今は本拡張機能をインストールしていると全ファイルが問答無用でパンチカード化されるというなかなか治安の悪い挙動をしているので，コマンドを実行した時などの特定のタイミングでのみパンチカード化したいです．

## まとめ

出オチ感満載の無駄作品を作れてとても満足です．「めちゃくちゃ無駄だね〜」と言われた時はもうすごい嬉しかったです．無駄開発最高！

でも裏目標の「最優秀賞を取る」が達成できなかったのは悔しいです．もっと精進せねば．夏の間で力をつけて次回こそは！
