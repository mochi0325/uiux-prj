// lang.js - 多言語定義と切替関数

const translations = {
  ja: {
    settingsTitle: "設定",
    languageLabel: "言語設定:",
    contactButton: "お問い合わせ",
    accountButton: "アカウント情報",
    contactFormTitle: "お問い合わせフォーム",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    messageLabel: "お問い合わせ内容",
    submitButton: "送信",
    home: "ホーム",
    request: "リクエスト",
    seatSelectTitle: "座席選択",
    seatLabel: "座席",
    seatLeft: "左",
    seatCenter: "中央",
    seatRight: "右",
    nextButton: "次へ進む",
    home: "ホーム",
    request: "リクエスト",
    settingsTitle: "設定",
    request: "リクエスト",
    home: "ホーム",
    settingsTitle: "設定",
    hot: "暑い",
    cold: "寒い",
    detailMessage: "詳細メッセージ",
    messageLabel: "メッセージ",
    messagePlaceholder: "例：寒いので温度を上げてほしい",
    sendRequest: "リクエストを送信する",
    sendAlert: "リクエストを送信しました",
    content: "内容",
    contactFormTitle: "お問い合わせ",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    messageLabel: "お問い合わせ内容",
    submitButton: "送信する",
    successMessage: "お問い合わせありがとうございました！",
  },
  en: {
    settingsTitle: "Settings",
    languageLabel: "Language:",
    contactButton: "Contact Us",
    accountButton: "Account Info",
    contactFormTitle: "Contact Form",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Submit",
    home: "home",
    request: "request",
    seatSelectTitle: "Seat Selection",
    seatLabel: "Seat",
    seatLeft: "Left",
    seatCenter: "Center",
    seatRight: "Right",
    nextButton: "Next",
    home: "Home",
    request: "Request",
    settingsTitle: "Settings",
    request: "Request",
    home: "Home",
    settingsTitle: "Settings",
    hot: "Hot",
    cold: "Cold",
    detailMessage: "Detailed Message",
    messageLabel: "Message",
    messagePlaceholder: "e.g. It's cold, please increase the temperature.",
    sendRequest: "Send Request",
    sendAlert: "Request sent",
    content: "Content",
    contactFormTitle: "Contact Us",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Submit",
    successMessage: "Thank you for your inquiry!",
  }
};

function getCurrentLang() {
  return localStorage.getItem("lang") || "ja";
}

function applyTranslation(lang) {
  const t = translations[lang];

  // IDベースの置換（1回だけ使われる要素）
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }

  // data-i18n属性に基づく複数要素の翻訳
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}
