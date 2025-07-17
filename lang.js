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
    hot: "暑い",
    cold: "寒い",
    detailMessage: "詳細メッセージ",
    messagePlaceholder: "例：寒いので温度を上げてほしい",
    sendRequest: "リクエストを送信する",
    sendAlert: "リクエストを送信しました",
    content: "内容",
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
    home: "Home",
    request: "Request",
    seatSelectTitle: "Seat Selection",
    seatLabel: "Seat",
    seatLeft: "Left",
    seatCenter: "Center",
    seatRight: "Right",
    nextButton: "Next",
    hot: "Hot",
    cold: "Cold",
    detailMessage: "Detailed Message",
    messagePlaceholder: "e.g. It's cold, please increase the temperature.",
    sendRequest: "Send Request",
    sendAlert: "Request sent",
    content: "Content",
    successMessage: "Thank you for your inquiry!",
  },
  zh: {
    settingsTitle: "设置",
    languageLabel: "语言:",
    contactButton: "联系我们",
    accountButton: "账户信息",
    contactFormTitle: "联系表单",
    nameLabel: "姓名",
    emailLabel: "电子邮件",
    messageLabel: "内容",
    submitButton: "提交",
    home: "首页",
    request: "请求",
    seatSelectTitle: "座位选择",
    seatLabel: "座位",
    seatLeft: "左",
    seatCenter: "中",
    seatRight: "右",
    nextButton: "下一步",
    hot: "热",
    cold: "冷",
    detailMessage: "详细内容",
    messagePlaceholder: "例如：太冷了，请调高温度",
    sendRequest: "发送请求",
    sendAlert: "请求已发送",
    content: "内容",
    successMessage: "感谢您的联系！",
  },
  es: {
    settingsTitle: "Configuración",
    languageLabel: "Idioma:",
    contactButton: "Contáctenos",
    accountButton: "Información de la cuenta",
    contactFormTitle: "Formulario de contacto",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    submitButton: "Enviar",
    home: "Inicio",
    request: "Solicitud",
    seatSelectTitle: "Selección de asiento",
    seatLabel: "Asiento",
    seatLeft: "Izquierda",
    seatCenter: "Centro",
    seatRight: "Derecha",
    nextButton: "Siguiente",
    hot: "Calor",
    cold: "Frío",
    detailMessage: "Mensaje detallado",
    messagePlaceholder: "Ej: Hace frío, por favor sube la temperatura",
    sendRequest: "Enviar solicitud",
    sendAlert: "Solicitud enviada",
    content: "Contenido",
    successMessage: "¡Gracias por su consulta!",
  }
};

// 現在の言語を取得
function getCurrentLang() {
  return localStorage.getItem("lang") || "ja";
}

// ページに翻訳を適用
function applyTranslation(lang) {
  const t = translations[lang] || translations.ja;

  // IDによる直接翻訳
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }

  // data-i18n属性を利用した汎用的な翻訳
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}
