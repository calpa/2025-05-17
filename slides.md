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

- 本場講座採用 Discord 互動
- 進入指定頻道可隨時發問
- 也可用 emoji/貼圖參與互動

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

- 持續撰寫前端、後端、Web3 教學文章，涵蓋 Astro、React.js、TypeScript 等主題
- 2025 年 3 月中開始每日一篇鐵人賽
- 2017 起累積 276 篇文章

<div class="text-blue-400">https://calpa.me/</div>

::right::

![Calpa 2025 Blog](https://assets.calpa.me/calpa-2025-blog.avif)

---
layout: two-cols
layoutClass: gap-4 bg-[#172966]
class: flex flex-col h-full justify-center gap-4 text-white
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
class: flex flex-col h-full justify-center items-center gap-4
---

<SDLC />

---
layout: center
class: bg-[#172966] text-white
---

## 為什麼從 SDLC 開始？

- 每個 App 背後都有一套「需求 → 規劃 → 實作 → 交付」的流程  
- 很多看似簡單的請求，其實都能轉換成這樣的結構

> 今天的例子，就是從一個「旅行企劃需求」開始，逐步落地為一個完整系統

---

## 實際例子

一家公司需要找人外包做一個「2025 員工沖繩獎勵旅遊」的完整企劃，以及手機 APP。
需求如下：

- 必須有活動簡介、行程安排、預算估算
- 需要線上報名功能，方便同仁填寫個人資料
- 報名資料要自動匯入 Google Sheets，方便管理
- 報名後自動寄信通知員工，確認已收到申請

你要怎麼開始著手？有哪些細節要規劃？

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
layout: center
class: bg-[#172966] text-white
---

## 今天我們會走這樣一條路：

1. 找出問題：旅行企劃的需求
2. 釐清內容：用 ChatGPT 生出企劃草稿
3. 自動化排版：用 Apps Script 產出 Google Docs
4. 收集資料：打造 Google Form 串接 Sheets
5. 自動寄信：完成通知流程

> 🎯 我們從對話開始，走到一個完整的工具流程

---
layout: center
---

## ChatGPT

我們的第一位助理

---
layout: center
class: bg-[#172966] text-white
---

## 我們要用 ChatGPT 做什麼？

- 分析需求 → 生出企劃草稿（有結構、有邏輯、有語氣）
- 無痛進入文件寫作的第一步
- 把過去三天的工作，變成三分鐘完成

> 🪄 這不只是「生成文字」，而是讓你擁有一個思路清晰的提案助理

---
layout: center
---

## 如何提問才能讓 AI 更懂你？

```md
請協助我產出一份 Google Docs 企劃書草稿，稍後我會用 Google Apps Script 自動套用格式。
根據以下資訊，請先列出條列式大綱，並針對每一段落撰寫專業且易於溝通的內容（避免過於學術或廣告口吻）：

- 主題：2025 員工日本大阪獎勵旅遊
- 目的：激勵員工、促進跨部門交流
- 必備內容：摘要、背景、解決方案、執行步驟、預期成效、預算概覽、注意事項
```

<div v-click>ChatGPT DEMO 時間</div>

---
layout: center
---

## 那什麼是 Google Apps Script？

- Google 官方推出的雲端腳本語言
- 幫你自動控制 Google Docs、Sheets、Forms 等工具
- 語法接近 JavaScript，容易上手
- 支援**排程、觸發器、自動化**所有重複操作！

> 🧙‍♂️ 你可以把它想像成 Google 生態系裡的「魔法機器人」

---
layout: center
---

## 用白話來說，就是：

- Google Docs 幫你寫內容  
- Google Apps Script 幫你**一鍵排版、轉格式、寄信**

> 🛠️ 是串起整套流程的自動化引擎，也是這場分享的主角之一！

---
layout: center
---
## 把草稿轉成程式：讓 Apps Script 幫你自動化

```markdown
請根據上述內容，協助我產生一段 Google Apps Script 程式碼，實現自動化產生 Google Docs 企劃書的功能，並根據指定章節與內容結構自動排版。
```

<div v-click>ChatGPT DEMO 時間</div>

---
layout: center
---

## Google Apps Script 表演時間

---
layout: center
class: bg-[#172966] text-white
---

## 它還可以做什麼？

- 自動寄 Gmail
- 批次建立 Calendar 行程
- 接 webhook 自動產出 Google Sheet 報表
- 或串接 LINE Bot、自製小工具…

> ✅ 就像 Notion 有 API、Zapier 能連接一切，Apps Script 就是 Google 世界的底層魔法


---

## 利用 Bolt.new 製作獨一無二的 APP

這一次我們會製作 Google Form

---

## 報名表格

---

````markdown
請幫我用 Google Apps Script 建立一份 Google Form，內容包含以下題目：

1. 姓名（必填）
2. Email（必填並驗證格式）
3. 程式經驗（單選：完全新手、有簡單經驗、熟悉前端、熟悉後端）
4. 偏好講座語言（單選：粵語、國語、都可以）
5. 訂閱意願（單選：願意，我對 AI 寫程式的內容很有興趣；暫時不需要，謝謝）
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

## 自動製作 Google Form

---

## 自動製作 Google Sheets

---

## 我們完成了什麼？

- 一份從聊天轉換而來的企劃書
- 一個可用的 Google 表單系統

> 🎯 你已經完成了一份可以交付的成果

---
layout: center
class: bg-[#172966] text-white
---

## 除了旅遊企劃書，這套系統還能...

- 🗓️ 自動建立 SOP、會議記錄、操作手冊
- 🧑‍🏫 教師教案、自動生成教材大綱
- 💼 行銷簡報、Pitch Deck、活動規劃書
- ⚖️ 合約草稿、自動補條款

> 📌 你只需要換一組 Prompt，AI 就能幫你打樣出來

---

### 跟你說說我接下來的計畫

- 📍 **5/30（台中） & 6/1（台北）** 有兩場免費線下分享，歡迎報名
- 🧪 **6 月份將推出 AI × App 實戰密集課程**
  - 只要一小時，就能做出 2–3 個 App
  - 價格為 **50 USDT（報名今天現場送 10 USD 折扣碼）**

---

# 感謝參與！

🎯 今天我們一起完成了一份企劃書 + 報名表 + 自動化流程

🧩 想持續學更多？有幾種方式可以支持我：

- 加入 Discord 與我保持聯繫
- 追蹤我的部落格 👉 <https://calpa.me>
- 只要填寫今天的表單，下次課程就能立減 10 美元 🎁

📩 有問題也歡迎私訊我或留言，我會努力在 Discord 回答大家！

---
