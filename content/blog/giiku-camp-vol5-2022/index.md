---
title: 技育CAMPハッカソン vol.5 に参加しました
date: "2022-07-12T22:12:03"
---

技育 CAMP ハッカソンの参加は今回で 2 回目となります[^1]．前回は一人での参加でしたが，今回は研究室の先輩と二人での参加でした．おかげさまで，前回の「一人ユニット」というチーム名から「二人ユニット」という名前に昇格できて良かったです．

[^1]: [前回の成果物](https://github.com/ajfAfg/emojion)

何はともあれ，まずは成果物の発表スライドです．

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vThohr7TaWkSfmE0Fkqj9DVIBzGli7eFANHvUhdbsZNlsCVlbNTSGY9Uq8Ox64TqnaePWMarnbedali/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

……完成しませんでした！

<p style="text-align:right"><b>終</b></p>

## 弁明したい

初の参加記を終える前に，何が難しかったのか少し説明させてください！　なお，僕は Web フロントエンドの担当だったので，そちらの視点での難しさとなります．

### GraphQL を用いたイケイケな開発方法がよくわからない問題

ここでイケイケとは，クエリの記述時に自動補完が効き，そのクエリから型が自動生成でき，宣言的でかつ型安全に GraphQL で通信できることを指しています．何だか色んな条件が含まれていますが，ここの問題はこれらの条件を満たすためには選定すべき技術が多いといったものになります．

ここで言ってる内容を要約すると「初めて触る技術は考えることが多くて大変」となるので GraphQL に限った話じゃないやろって感じなんですが，まぁイケイケな開発方法を追い求めていたら時間が溶けていたという話です．ウワー！

### GraphQL のモックが期待通りに動いてくれない問題

GraphQL のモックライブラリとして [MSW](https://github.com/mswjs/msw) を利用していたのですが，期待通りに動いてくれなくて困っていました．Next.js を使っているために MSW が動くべき環境がブラウザとサーバで 2 つあり，どちらの環境でも動くような設定にできていなかった説が濃厚ですが，結局解決できずただ時間が消費されただけでした．ウワー！

### 睡眠が足りていない問題

致命的です．睡眠が足りていないと判断を誤ります．特にマズかったのが，Next.js で作っていたアプリを通常の React で作り直し始めたことです．当時起こっていた問題は，そのアプリを Amplify にデプロイすると ISR するページが 503 となる，というものでした．これではマズいので対処しなきゃなんですが，その対処法が最悪ですね．[この記事](https://zenn.dev/eringiv3/articles/5fa044cc92c3a3)によると今回問題になっていたのは ISR なので，最初から作り直すのではなく SSR にするだけで対処できたはずです．ウ，ウワー！！

↓ これは今回のハッカソンの一番の成果

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今回のハッカソンの1番の成果、研究室でいつでもわかんないっピができるようになったこと <a href="https://t.co/E8R9P09HlE">pic.twitter.com/E8R9P09HlE</a></p>&mdash; Show(暫定) (@ajfAfg) <a href="https://twitter.com/ajfAfg/status/1546073798008483840?ref_src=twsrc%5Etfw">July 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 時をかけられるのなら

最初から通常の React で作りたいです．僕がまだ Next.js を理解できていないことが原因ではあるのですが，プログラムがどの環境で実行されるのか意識しながらコードを書くのは難しいです．最初から通常の React で作っていたら，モックや 503 の問題を始めとする多くの問題に苦しまなくても良かったです．多分．

あと，挑戦する技術を GraphQL に絞っていたらよかったです．流石に詰め込みすぎた．ISR や DDD 難しかったです．

## それでも楽しいハッカソン

今回は大分しんどさの方が勝っていたけれども，やっぱり楽しかったです．大勢でわいわい開発するあの雰囲気が好きだし，すごい人ばかりで刺激されまくりです．また来月あたりに参加したいな．

<!-- ## まとめ

GraphQL かなり面白かったので，今後も使っていきたいです．今回は GraphQL のクライアントとして [Apollo Client](https://github.com/apollographql/apollo-client) を使ったけど，次は [Relay](https://github.com/facebook/relay) や [urql](https://github.com/FormidableLabs/urql) も使ってみたい．サーバも書きたい！ -->
