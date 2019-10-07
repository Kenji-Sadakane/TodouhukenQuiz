# TodouhukenQuiz

#### 概要
表示される都道府県のシルエットが何県か４択で当てるクイズ。

#### 使用技術
* AWS
  * S3
  * CloudFront
  * Certification Manager
  * Route 53

#### 環境構築手順
* S3 静的Webサイトホスティング設定
  * S3バケット作成
  * S3 静的Webサイトホスティング設定
  * パブリックアクセス設定
  * 適当なindex.html配置
  * S3のURLでコンテンツにアクセスできることを確認
* ドメイン取得
  * freenomでドメイン取得(今回はtodouhukenquiz.ml)
* ドメインをAWSと紐付け
  * Route 53ホストゾーン作成(ネームサーバのドメイン名を控えておく)
  * freenomで取得したドメインにネームドメインを設定
  * Route 53にタイプAのレコードを新規作成(エイリアス先にS3のエンドポイント設定)
  * 新規ドメインのURL(http)でコンテンツにアクセスできることを確認
* SSL設定
  * Certification Manager(us-east-1)で証明書作成
  * CloudFront作成
  * Route 53のエイリアスをCloudFrontに変更
  * 新規ドメインのURL(https)でコンテンツにアクセスできることを確認
