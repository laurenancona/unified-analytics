Built using [this](https://docs.google.com/spreadsheets/d/1Kz3wBGPhMqg0JcP2S5tCODsajpwXgjzyMaQmoNXIUcc/edit?usp=sharing) amazing resource by @analyticsftw

|  **Category** | **Param** | **Tag instruction** | **Tag attribute** | **Description** | **Default** | **Max Length (bytes)** | **Size (charsets: ISO, UTF-8)** | **Hit Type** | **Type** | **Old Name** |
|  ------ | ------ | ------ | ------ | ------ | :------: | ------ | ------ | ------ | ------ | ------ |
|  Applications | **an** | set |  | Application Name | None | 100 B | *100* | all | String |  |
|  Applications | **av** | set |  | Application Version | None | 100 B | *100* | all | String |  |
|  Basic | **aip** | set |  | Anonymize IP | None | None |  | all | Integer | *aip* |
|  Basic | **cid** | set | clientId | Client ID | None | None |  | all | String | *utmvid* |
|  Basic | **dr** | set |  | Document Referrer | None | 2048 B | *2048* | all | String | *utmr* |
|  Basic | **ni** | set |  | non-interaction Hit | None | 20 B | *20* | all | String | *utmni* |
|  Basic | **qt** | set |  | Queue Time | None | None |  | all | Integer |  |
|  Basic | **sc** | set |  | Session Control | None | None |  | all | TBC |  |
|  Basic | **t** | send | hitType | Hit Type | None | None |  | all | String | *utmt* |
|  Basic | **tid** |  |  | Web Property ID | None | None |  | all | String | *utmac* |
|  Basic | **v** |  |  | Protocol Version | None | None |  | all | String | *utmwv* |
|  Basic | **z** |  |  | Cache Buster | None | None |  | all | String | *utmn* |
|  Campaigns | **cc** |  |  | Campaign Content | None | 500 B | *500* | all | String | *utmcct* |
|  Campaigns | **ci** |  |  | Campaign ID | None | 100 B | *100* | all | String |  |
|  Campaigns | **ck** |  |  | Campaign Keyword | None | 500 B | *500* | all | String | *utmctr* |
|  Campaigns | **cm** |  |  | Campaign Medium | None | 50 B | *50* | all | String | *utmcmd* |
|  Campaigns | **cn** |  |  | CampaignName | None | 100 B | *100* | all | String | *utmccn* |
|  Campaigns | **cs** |  |  | Campaign Source | None | 100 B | *100* | all | String | *utmcsr* |
|  Campaigns | **dclid** |  |  | Google Display Ads ID | None | None |  | all | String |  |
|  Campaigns | **gclid** |  |  | Google Adwords ID | None | None |  | all | String |  |
|  Custom variables | **cd[0-9]+** | set | dimensionX | Custom Dimension | None | 150 B | *150* | all | String |  |
|  Custom variables | **cm[0-9]+** | set | metricX | Custom Metric | None | None |  | all | String |  |
|  eCommerce | **ic** | ecommerce:addItem |  | Item Code ( SKU ) | None | 500 B | *500* | item | String | *utmipc* |
|  eCommerce | **in** | ecommerce:addItem |  | Item Name | None | 500 B | *500* | item | String | *utmipn* |
|  eCommerce | **ip** | ecommerce:addItem |  | Items Price |  | None |  | item | Decimal | *utmipr* |
|  eCommerce | **iq** | ecommerce:addItem |  | Item Quantity |  | None |  | item | Integer | *utmiqt* |
|  eCommerce | **iv** | ecommerce:addItem |  | Item Category | None | 500 B | *500* | item | String | *utmiva* |
|  eCommerce | **ta** | ecommerce:addTransaction |  | Transaction Affiliation | None | 500 B | *500* | trans | String | *utmtst* |
|  eCommerce | **ti** | ecommerce:addTransaction |  | Transaction ID | None | 500 B | *500* | trans,item | String | *utmtid* |
|  eCommerce | **tr** | ecommerce:addTransaction |  | Transaction Revenue |  | None |  | trans | Decimal | *utmtto* |
|  eCommerce | **ts** | ecommerce:addTransaction |  | Transaction Shipping |  | None |  | trans | Decimal | *utmtsp* |
|  eCommerce | **tt** | ecommerce:addTransaction |  | Transaction Tax |  | None |  | trans | Decimal | *utmttx* |
|  Error handling | **exd** | set |  | Exception Description | None | 150 B | *150* | except | String |  |
|  Error handling | **exf** | set |  | Is Exception Fatal | 1 | None |  | except | String |  |
|  Events | **ea** | set | eventAction | Event Action | None | 500 B | *500* | event | String |  |
|  Events | **ec** | set | eventCategory | Event Category | None | 150 B | *150* | event | String |  |
|  Events | **el** | set | eventLabel | Event Label | None | 500 B | *500* | event | String |  |
|  Events | **ev** | set | eventValue | Event Value | None | None |  | event | Integer |  |
|  Page | **cd** | set |  | Content Description | None | 2048 B | *2048* | all | String |  |
|  Page | **cg[0-9]+** | set |  | Content Group | None | 100 B | *100* | all | String |  |
|  Page | **dp** | set | page | Document Path | None | 100 B | *100* | all | String | *utmp* |
|  Page | **dt** | set | title | Document Title | None | 1500 B | *1500* | all | String | *utmdt* |
|  Page | **ni** | set | nonInteraction | non-interaction Hit | None | 2048 B | *2048* | all | String | *utmni* |
|  Social | **sa** | set |  | Social Action | None | 50 B | *50* | social | String | *utmsa* |
|  Social | **sn** | set |  | Social Network | None | 50 B | *50* | social | String | *utmsn* |
|  Social | **st** | set |  | Social Action Target | None | 2048 B | *2048* | social | String | *utmsid* |
|  Tech / browser | **de** | set |  | Document Enconding | UTF-8 | 20 B | *20* | all | String | *utmcs* |
|  Tech / browser | **fl** | set |  | Flash Version | None | 20 B | *20* | all | String | *utmfl* |
|  Tech / browser | **je** | set |  | Java Enabled | None | None |  | all | String | *utmje* |
|  Tech / browser | **sd** | set |  | Screen Color Depth | None | 20 B | *20* | all | Integer | *utmsc* |
|  Tech / browser | **sr** | set |  | Screen Resolution | None | 20 B | *20* | all | String | *utmsr* |
|  Tech / browser | **ul** | set |  | User Language | None | 20 B | *20* | all | String | *utmul* |
|  Tech / browser | **vp** | set |  | Viewport Size | None | 20 B | *20* | all | String | *utmvp* |
|  Timing | **dns** | set |  | DNS lookup Time | None | None |  | timing | Integer |  |
|  Timing | **pdt** | set |  | Page Download Time | None | None |  | timing | Integer |  |
|  Timing | **plt** | set |  | Page Load Time | None | None |  | timing | Integer |  |
|  Timing | **rrt** | set |  | Rediret Response Time | None | None |  | timing | Integer |  |
|  Timing | **srt** | set |  | Server Response Time | None | None |  | timing | Integer |  |
|  Timing | **tcp** | set |  | TCP Connect Time | None | None |  | timing | Integer |  |
|  Timing | **utc** | set |  | User Timing Category | None | 150 B | *150* | timing | String |  |
|  Timing | **utl** | set |  | User Timing Label | None | 500 B | *500* | timing | String |  |
|  Timing | **utt** | set |  | User Timing Time | None | None |  | timing | Integer |  |
|  Timing | **utv** | set |  | User Timing Variable Name | None | 500 B | *500* | timing | String |  |
