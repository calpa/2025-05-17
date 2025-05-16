---
theme: dracula
title: 用 ChatGPT + Apps Script 解放重複工作！
transition: fade
mdc: true
---

<LoadingScene />

---
layout: center
class: bg-[#172966] text-white font-mono
---

<div class="text-2xl">用 ChatGPT + Apps Script 解放重複工作！</div>

<div class="text-xs opacity-50">2025-05-17</div>

<div class="text-xs italic opacity-50">Calpa Liu</div>

---
layout: two-cols
class: flex flex-col h-full justify-center items-center gap-4
---

## 歡迎加入 Discord！

- 本場講座將在 Discord 上與大家互動
- 進入指定頻道可隨時發問
- 你也可以用 emoji 或貼圖來參與討論、表達想法

<div class="text-blue-400">https://discord.gg/Cb9F6MTC26</div>

::right::

![Discord QR Code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://discord.gg/Cb9F6MTC26&bgcolor=172966&color=ffffff)

---
layout: two-cols
class: flex flex-col h-full justify-center items-center gap-4
---

- 💻 熟悉 TypeScript, React, Node.js, Solidity
- 🛠️ 曾任職多家科技公司全端工程師
- 🥈 ETHGlobal Taipei 2025 1inch 賽道銀獎
- ChatGPT, Windsurf, Bolt.new 等 AI 工具重度使用者

::right::

<img src="https://assets.calpa.me/public/pfp.avif" class="rounded-full w-36 h-36 border-4 border-white shadow-lg" alt="Calpa Liu">

<div class="text-xl font-bold">Calpa Liu</div>

---
layout: two-cols
layoutClass: gap-4 bg-[#172966]
class: flex flex-col h-full justify-center gap-4 text-white
---

## 技術博客

- 持續分享前端、後端與 Web3 技術文章與實作心得，涵蓋 Astro、React.js、TypeScript 等主題
- 2025 年 3 月中開始每日一篇鐵人賽
- 2017 起累積 276 篇文章

<div class="text-blue-400">https://calpa.me/</div>

::right::

![Calpa 2025 Blog](https://assets.calpa.me/calpa-2025-blog.avif)

---
layout: two-cols
layoutClass: gap-4
class: flex flex-col h-full justify-center gap-4
---

## OrbitGO

- 🥈 榮獲 ETHGlobal Taipei 2025 黑客松 1inch 賽道第二名
- 整合 1inch Portfolio API，實作多鏈資產查詢與視覺化介面

<div class="text-blue-400">https://orbitgo.calpa.me/</div>

::right::

![1inch 賽道銀獎](https://assets.calpa.me/ethglobal-taipei-2025-1inch-best-portfolio-tracker.avif)

---
layout: two-cols
layoutClass: gap-4
class: flex flex-col h-full justify-center gap-4
---

## Urusai

你的數位噪音保護罩

- 📦 Github 76 ⭐️
- 利用隨機 HTTP/DNS 請求產生流量噪音
- 保護用戶瀏覽隱私，支援多平台與自定義規則
- 對抗網路監控的輕量級隱私工具
- 使用 Go 語言開發

<div class="text-blue-400">https://github.com/calpa/urusai</div>

::right::

![Urusai](https://i.imgur.com/KTPJizf.png)

---
layout: two-cols
layoutClass: gap-4
class: flex flex-col h-full gap-2
---

## 實際案例情境

你收到一個專案需求——幫一家公司規劃「2025 員工東京獎勵旅遊」，並開發一個旅遊行程助手 App，協助員工掌握行程、地點與注意事項。整體目標是簡化行政流程、強化參與體驗、提高交付效率。這位客戶提出了以下幾點需求：

<ul>
  <li v-click>需要一份完整的企劃書，包含活動簡介、日程安排與預算估算</li>
  <li v-click>希望具備線上報名功能，員工可以填寫基本資料與選擇偏好</li>
  <li v-click>所有報名資料應自動串接 Google Sheets 以利統一管理</li>
  <li v-click>報名成功後要自動寄出通知信件，確認資訊已收到</li>
  <li v-click>最後，還想有一個簡單 App，能查行程、看地圖、接收提醒</li>
</ul>


::right::

![Jakob Owens](https://assets.calpa.me/jakob-owens-e5tHWAAj8gA-unsplash.avif)

---
class: flex flex-col h-full justify-center items-center gap-4
---

<SDLC />

---
layout: center
class: bg-[#172966] text-white
---

## 為什麼要用 SDLC 來開頭？

- **很多專案、流程、甚至日常工作**，其實都經歷了「需求 → 規劃 → 實作 → 驗證 → 交付」等階段
- 很多看起來只是「填個表」「寫個提案」的小任務，背後其實都有清楚的流程可拆解、可複用

> 這次的實例，就是從「旅遊企劃」需求出發，沿著 SDLC 流程，一步步將想法變成真正能用的成果

---
layout: center
class: bg-[#172966] text-white
---

## 聚焦第一步

- 不是所有事情都要規劃到極致，但**多數事情有規劃，結果會好很多**
- 執行前花點時間想清楚，常能省下大量返工
- 很多專案問題，不在於「技術難題」，而在於「方向沒先弄明白」

> 🎯 這場分享不是只講 coding，更強調 **如何開始、如何規劃**

---
layout: two-cols
layoutClass: gap-4
class: flex flex-col h-full justify-center gap-4
---

## 我們要用 ChatGPT 做什麼？

- 分析需求 → 生出企劃草稿（有結構、有邏輯、有語氣）
- 無痛進入文件寫作的第一步
- 讓原本要花三天完成的提案，三分鐘就能搞定

> 🪄 這不只是「生成文字」，而是讓你擁有一個思路清晰的提案助理

::right::

![A close up of a computer screen with a menu on it](https://assets.calpa.me/emiliano-vittoriosi-fvxNerA8uk0-unsplash.avif)

---
layout: center
---

## ChatGPT Prompt

```md
請協助我產出一份 Google Docs 企劃書草稿，稍後我會用 Google Apps Script 自動套用格式。
根據以下資訊，請先列出條列式大綱，並針對每一段落撰寫專業且易於溝通的內容（避免過於學術或廣告口吻）：

- 主題：2025 員工日本大阪獎勵旅遊
- 目的：激勵員工、促進跨部門交流
- 必備內容：摘要、背景、解決方案、執行步驟、預期成效、預算概覽、注意事項
```

<div v-click>實戰示範：讓 ChatGPT 開始幫我們動手做！</div>

---
layout: center
---

## 我們請 ChatGPT 幫忙生草稿了，那接下來呢？

是時候讓另一位魔法助手——**Google Apps Script** 上場，  
幫我們把草稿變成一份真正能用的企劃書！


---
layout: center
---

## 那什麼是 Google Apps Script？

- Google 官方推出的雲端腳本語言
- 幫你自動控制 Google Docs、Sheets、Forms 等工具
- 語法接近 JavaScript，容易上手
- 支援**排程、觸發器、自動化**所有重複操作！
- Google Apps Script 幫你**一鍵排版、轉格式、寄信**

> 🧙‍♂️ 可以把它想像成幫你自動完成重複任務的 Google 魔法助手

> 🛠️ 是串起整套流程的自動化引擎，也是這場分享的主角之一！

---
layout: center
---
## 把草稿轉成程式：讓 Apps Script 幫你自動化

```markdown
請根據上述內容，協助我產生一段 Google Apps Script 程式碼，實現自動化產生 Google Docs 企劃書的功能，並根據指定章節與內容結構自動排版。
```

<div v-click>實戰示範：讓 ChatGPT 開始幫我們動手做！</div>

---
layout: center
---

## 現在，讓我們看看魔法怎麼施展 ✨

ChatGPT -> Google Apps Script -> Google Docs

---
layout: center
class: bg-[#172966] text-white
---

## Google Apps Script 還可以做什麼？

- 自動寄 Gmail
- 批次建立 Calendar 行程
- 接 webhook 自動產出 Google Sheet 報表
- 或串接 LINE Bot、自製小工具…

> ✅ 就像 Notion 有 API、Zapier 能連接一切，Apps Script 就是串起 Google 工具自動化的魔法引擎


---
layout: center
---

## 實作時間：打造能真正上線的報名系統

今天我們會動手打造一份真正會用上的報名表單，為下一場 AI × App 分享會做好準備！

- 用 ChatGPT 擬定表單內容
- 用 Apps Script 自動生成 Google Form + 串接 Sheets

🎯 真正落地的自動化工具，從今天開始寫下你的第一行！

---

````markdown
請幫我用 Google Apps Script 建立一份 Google Form，內容包含以下題目：

1. 姓名（必填）
2. Email（必填並驗證格式）
3. 程式經驗（單選：完全新手、有簡單經驗、熟悉前端、熟悉後端）
4. 訂閱意願（單選：願意，我對 AI 寫程式的內容很有興趣；暫時不需要，謝謝）
   並將回應自動串接到同名 Google Sheets。

請你參考以下的代碼，完成表單的建立和配置：

```javascript
function createOrEditBoltNewForm() {
  // 定義表單標題和對應的試算表標題
  const formTitle =
    "26/04/25 - AI 寫程式神器 bolt.new — 讓你開發效率提升 100 倍！";
  const sheetTitle = `${formTitle} 回應`;

  // 嘗試查找是否已存在同名表單
  const forms = DriveApp.getFilesByName(formTitle);
  let form;

  // 如果表單已存在，則打開它；否則創建新表單
  if (forms.hasNext()) {
    const file = forms.next();
    form = FormApp.openById(file.getId());
    Logger.log("已有表單，進行編輯：" + form.getEditUrl());
  } else {
    form = FormApp.create(formTitle);
    Logger.log("新建表單完成：" + form.getEditUrl());
  }

  // 設置表單描述，包括活動詳情和講者介紹
  form.setDescription(
    "感謝你有興趣參加本次免費線上講座！\n" +
      "我將介紹 AI 寫程式工具 bolt.new，並示範如何從 0 寫出完整 Web App，幫助你提升開發效率。\n\n" +
      "📅 活動時間：2025 年 4 月 26 日（星期六）下午 2:00 – 4:00\n" +
      "📍 活動地點：Jitsi Meet 線上會議\n" +
      "💡 活動完全免費，歡迎自由參加！\n\n" +
      "🎤 講者介紹 — Calpa Liu\n\n" +
      "- 全端工程師，曾獲 ETHGlobal Taipei 黑客松 1inch 賽道第二名\n" +
      "- 使用 AI 工具開發 Web3 儀表板 OrbitGO\n" +
      "- 專精 AI 寫程式工具，如 bolt.new、ChatGPT 等\n" +
      "- 擅長把開發知識用簡單語言分享給新手與工程師"
  );

  // 清除表單中的所有舊題目
  const items = form.getItems();
  for (let i = 0; i < items.length; i++) {
    form.deleteItem(items[i]);
  }

  // 添加新的表單題目
  // 姓名（必填文本題）
  form.addTextItem().setTitle("你的姓名是？").setRequired(true);

  // 程式經驗（必填單選題）
  form
    .addMultipleChoiceItem()
    .setTitle("你目前的程式經驗？")
    .setChoiceValues([
      "完全新手",
      "有寫過簡單網頁",
      "熟悉前端開發",
      "熟悉後端或全端開發",
    ])
    .setRequired(true);

  // 興趣點（必填複選題，可自定義其他選項）
  form
    .addCheckboxItem()
    .setTitle("你對這場講座最感興趣的是？")
    .setChoiceValues([
      "想了解 bolt.new 是什麼",
      "想看實際 AI 寫程式的操作示範",
      "想知道如何用 AI 加速 Side Project",
      "想學會如何下指令給 AI 工具",
      "對 AI 工具與開發整合的未來趨勢有興趣",
    ])
    .showOtherOption(true)
    .setRequired(true);

  // Email（必填，帶驗證的文本題）
  form
    .addTextItem()
    .setTitle("請留下你的 Email")
    .setValidation(FormApp.createTextValidation().requireTextIsEmail().build())
    .setRequired(true);

  // 訂閱意願（必填單選題）
  form
    .addMultipleChoiceItem()
    .setTitle("你是否願意日後收到更多關於 AI 寫程式的相關資訊、教學或文章？")
    .setChoiceValues(["願意，我對 AI 寫程式的內容很有興趣", "暫時不需要，謝謝"])
    .setRequired(true);

  // 檢查是否已有同名試算表，如果沒有則創建新的
  const spreadsheets = DriveApp.getFilesByName(sheetTitle);
  let sheet;
  if (spreadsheets.hasNext()) {
    const file = spreadsheets.next();
    sheet = SpreadsheetApp.openById(file.getId());
    Logger.log("已有試算表，使用現有的：" + sheet.getUrl());
  } else {
    sheet = SpreadsheetApp.create(sheetTitle);
    Logger.log("新建試算表完成：" + sheet.getUrl());
  }

  // 設定表單回應的目的地為試算表
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
}
````

---
layout: center
---

## 現在，讓我們再次施展魔法 ✨

ChatGPT -> Google Apps Script -> Google Form

---
layout: center
---

## Google Form 實際效果（你也能做出一模一樣的）

---
layout: center
---

## 我們完成了什麼？

- 從 0 到 1，打造一份結構清晰的企劃書草稿
- 一鍵自動生成 Google Docs 與表單，省去反覆排版與轉換
- 全流程自動化：報名 → 匯入 → 通知，全都不用再手動處理！

> 🎯 讓 AI 寫內容、Script 排版流程，表單同步管理

> 一站式完成 Google Docs + Google Form + 自動串接

---
layout: center
class: bg-[#172966] text-white
---

## 除了旅遊企劃書，這套系統還能...

- 🗓️ 自動建立 SOP、會議記錄、操作手冊
- 🧑‍🏫 教師教案、自動生成教材大綱
- 💼 行銷簡報、Pitch Deck、活動規劃書
- ⚖️ 合約草稿、自動補條款

> 📌 只要換一組 Prompt，AI 就能幫你快速生出雛形

---
layout: center
---

## Q&A

---
layout: two-cols
layoutClass: gap-4
class: flex flex-col h-full justify-center gap-4
---

## 接下來的計畫

- 30/5 台中 Vibe Coding 工作坊
- 1/6 台北《AI 煉金術》實體分享會
- 14/6 旅遊助手 App 實作分享會


::right::

![Train on Railway at Daytime](https://assets.calpa.me/b-k-HAl6CKxM3xU-unsplash.avif)

---
layout: two-cols
---

## 📍 5/30（台中）｜Vibe Coding 工作坊

🧪 半天帶你從 0 到部署，親手打造自己的第一個產品！

✨ 適合沒寫過程式、但想做產品的人

🛠 使用工具：Cursor + Supabase + Zeabur

👥 小組協作、當場實作與展示

🗓 時間：5/30（五）13:30 – 18:00

📍 地點：台中 Monospace（台灣大道二段2號16樓之2）

🎟 報名連結：
👉 https://www.accupass.com/event/2505100934043309165990

::right::

  <img src="./assets/2025-05-30.png" class="w-72 my-4 object-contain mx-auto" />


---

## 📍 6/1（台北）｜《AI 煉金術》實體分享會
從靈感到 Side Project，用 AI 工具煉出你的創作流程。

工具包含 ChatGPT、Firecrawl、Notion 等

分享我從 prompt → 文章 → 產品的完整流程

📅 時間：6/1（週日）15:00 – 18:00

📍 地點：台北捷運站附近

👥 已報名人數：17 / 30 人

🆓 免費參加

📌 報名表單：
👉 https://forms.gle/C5pu8w9qZaHEajZq9

---

## 📍 6/14（線上）｜旅遊助手 App 實作分享會

🛠️ 利用今天的企劃成果，親手打造一個完整的 App！

從 Google Docs 計畫 → ChatGPT Prompt → App 架構，一步步帶你實作

功能涵蓋表單填寫、地圖查詢、行程提醒等模組

適合希望快速將靈感變成產品的創作者

📅 時間：6/14（週六）14:00 – 16:00

📍 地點：Jitsi Meet 線上直播

💰 費用：$50 USD（填寫問卷可折抵 $10 USD）

---

## 謝謝大家

<img src="https://assets.calpa.me/感謝您讓我占用的寶貴時間.avif" class="w-2/3 my-4 object-contain mx-auto" />


- 🎯 今天，我們完成了從需求分析到報名系統的一條龍自動化流程
- 📩 有問題歡迎私訊，我會在 Discord 回應大家的提問！
