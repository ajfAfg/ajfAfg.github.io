# 個人プロダクト

## GitHub Actions による Brainfuck インタプリタ

https://github.com/ajfAfg/brainfuck-by-github-actions

GitHub Actions のワークフローを用いて実装した Brainfuck インタプリタ。GitHub Actions はチューリング完全。[詳細はこちら。](https://zenn.dev/cybozu_ept/articles/github-actions-is-turing-complete)

**使用技術**

GitHub Actions

## bean

https://github.com/ajfAfg/bean

Erlang における、プロセス間の依存関係をもとに「最適」な監視ツリーを自動生成するツール。修士課程の研究の一環で開発した。絶対にバグを出したくなかったので、プロパティベーステストを始めとして自動テストに力を入れた。アルゴリズムの研究だったのでもちろん証明を書く必要があるが、簡易的な証明としてもプロパティベーステストを利用した（筋の悪いアルゴリズム・命題だと、何回かテストを回すと反例が見つかって便利）。[詳細（ってほどでもないが）はこちら。](/blog/sasaetesou-tech-no1)

**使用技術**

Erlang, Rebar3, PropEr

## かたぱ

https://katapa.app/

Calculus of inductive constructions を理論的基盤とする、Scratch 風の GUI で証明を記述可能な日本語定理証明支援系。技育展 2023 に出展した。Rocq（旧 Coq）の偉大さ、巨大さを実感した。[詳細はこちら。](/blog/geek-ten-2023)

**使用技術**

TypeScript, React, Vite, Vitest, fp-ts, vanilla-extract

## OCaml のサブセットのインタプリタ

https://github.com/ajfAfg/IoPLMaterials

京都大学工学部専門科目「プログラミング言語処理系」講義資料をもとに開発した、OCaml のサブセットのインタプリタ。講義資料の内容に加えて、言語機能を追加する際に既存機能を壊したくなかったため、複数のレイヤーに対して多くの自動テストを追加した。

**使用技術**

OCaml, Menhir, Alcotest, cram

## vscode-punched-card

https://github.com/ajfAfg/vscode-punched-card

技育 CAMP ハッカソン vol.5 で開発した、パンチカード風 GUI でファイルを編集可能な VSCode 拡張。VSCode 上で React を動かした。[詳細はこちら。](/blog/giiku-camp-vol7-2022)

**使用技術**

VSCode, TypeScript, React, webpack, Tailwind CSS

## Emojion

https://github.com/ajfAfg/emojion

技育 CAMP ハッカソン vol.3 で開発した、絵文字とテキストから画像を生成する Web アプリ。ハッカソン後もしばらく開発しており、古の Twitter API のために OAuth 1.0a クライアントを自作したり、Twitter API を経由して Twitter に画像を投稿していたが API が終焉したので OG 画像で表示するようにしたり、Twitter に振り回された。

**使用技術**

TypeScript, Next.js, daisyUI, Jest

## MIPS アセンブラ

https://github.com/ajfAfg/mips_assembler

大学の講義で開発する自作 CPU の仕様に適した MIPS アセンブラ。Elixir で開発しており、パイプライン演算子のフル活用をモチベにモナディックなパーサーを再発明した（後に Haskell を学んだときに気づいた）。また、字句解析と構文解析を分ける大切さを実感した。

**使用技術**

Elixir

## 心理学実験用の Web アプリ

（実験用なのでコードは非公開。）

大学のバイトとして開発した、各写真が参加者に与える感情に差異があるか調べる心理学実験用の Web アプリ。実験者の PC 上で Web アプリを動作させる必要があったため、Docker と Docker Compose を利用して Web アプリの環境作成を可能な限り楽にした。

**使用技術**

JavaScript, Vue 3, Express, Sequelize, MySQL, Docker, Docker Compose

## ベアメタルプログラミングされた、ラズパイと周辺機器上で動作するシューティングゲーム

（作ったのが大昔（大学 2 年）すぎてコードやバイナリは残っていない。）

警察のプレイヤーが泥棒を捕まえるというコンセプトのシューティングゲーム。大学の講義にて 5 人ほどで開発したゲームで、Show は全体設計・プログラミング・音楽制作に関わった。講義の制約により、8×8 ディスプレイやボタンが繋がったラズパイ上でベアメタルプログラミングする必要があった。ゲームなので並行処理する必要があるが難しいし間違えやすいので、関数を与えるだけでいい感じに裏で並行処理するライブラリ・ランタイムを作った。（音楽の話だが、）1 音しか出せなかったので、音程が大きく異なる音を一連のメロディとして知覚できない人間の特性を利用して、16 分くらいの単位で高音と低音を交互に鳴らして擬似的に 2 音聴こえる曲を作った。

**使用技術**

ARM, Raspberry Pi

## Unity 製の横スクロール型アクションパズルゲーム

（作ったのが大昔（大学 2 年）すぎてコードやバイナリは残っていない。）

めっちゃジャンプできる子とめっちゃ力持ちの子の双子を操作し、ステージのギミックを解き進めるアクションパズルゲーム。実質 2 人で開発したゲームで、Show はプログラミングと音楽制作に関わった（もう一人はイラストを描いてくれた）。このゲームはある養成講座を通して開発しており、Show のチームは最終バトルで上位 2 チームに入ったので特典として Tokyo Game Show 2019 に出展した（[第三者によるレポートはこちら](https://www.watch.impress.co.jp/kodomo_it/news/1211360.html)）。

**使用技術**

Unity, C#
