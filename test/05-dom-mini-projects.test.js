import { describe, it, expect } from "vitest";
import {
  createCounterButton,
  createThemeToggle,
  createStatusBadge,
  createTodoItem,
  createAccordion,
  createToastAlert,
  createCopyButton,
  createProductCard,
  createTabsComponent,
  createPasswordStrengthMeter,
  createShowPasswordToggle,
  createColorPalettePicker,
  createCharCounter,
  createModalDialog,
  createFilterableList,
  createBreadcrumbsNav,
  createAvatarWithInitials,
  createStarRating,
  createPaginationBar,
  createProgressBarWidget,
  createTagInputComponent,
  highlightSearchTermsInElement,
  createTipCalculatorWidget,
  createTableFromData,
  createPricingPlanSwitcher,
  createStepperInput,
  createAlertBanner,
  createCodeSnippetBlock,
  createLikeCounterWidget,
  createLiveSearchHighlight,
  createNotificationBadge,
  createInlineTextEditor,
  createSkeletonLoader,
  createValidationFeedbackInput,
  createImageCarousel,
  createCollapsiblePanel,
  createSearchableDropdown,
  createScrollToTopButton,
  createCountdownTimerWidget,
  createMiniFormValidator
} from "../src/05-dom-mini-projects.js";

describe("Частина 5: DOM Міні-проекти (Інтерактивні компоненти та HTML/CSS)", () => {
  describe("5.1 createCounterButton - DOM: Кнопка-лічильник кліків (Counter Button)", () => {
    it("тест 1: (() => { const btn = createCounterButton(5); const t1 = btn.textContent; btn.click(); const t2 = btn.textContent; return [t1, t2]; })()", () => {
      expect((() => { const btn = createCounterButton(5); const t1 = btn.textContent; btn.click(); const t2 = btn.textContent; return [t1, t2]; })()).toEqual(["Кліків: 5","Кліків: 6"]);
    });
  });

  describe("5.2 createThemeToggle - DOM: Перемикач темної теми (Theme Toggle Switch)", () => {
    it("тест 1: (() => { const div = document.createElement('div'); const btn = createThemeToggle(div); btn.click(); const hasDark = div.classList.contains('dark-theme'); const txt = btn.textContent; return { hasDark, txt }; })()", () => {
      expect((() => { const div = document.createElement('div'); const btn = createThemeToggle(div); btn.click(); const hasDark = div.classList.contains('dark-theme'); const txt = btn.textContent; return { hasDark, txt }; })()).toEqual({"hasDark":true,"txt":"☀️ Світла тема"});
    });
  });

  describe("5.3 createStatusBadge - DOM: Кастомний бейдж статусу (Status Badge)", () => {
    it("тест 1: (() => { const b = createStatusBadge('success', 'Активно'); return { tag: b.tagName.toLowerCase(), cls: b.className, txt: b.textContent }; })()", () => {
      expect((() => { const b = createStatusBadge('success', 'Активно'); return { tag: b.tagName.toLowerCase(), cls: b.className, txt: b.textContent }; })()).toEqual({"tag":"span","cls":"badge badge-success","txt":"Активно"});
    });
  });

  describe("5.4 createTodoItem - DOM: Елемент списку задач (Todo Item)", () => {
    it("тест 1: (() => { let toggled = null; let deleted = false; const item = createTodoItem('Вивчити DOM', c => { toggled = c; }, () => { deleted = true; }); const cb = item.querySelector('input'); cb.checked = true; cb.dispatchEvent(new Event('change')); const delBtn = item.querySelector('.btn-delete'); delBtn.click(); return { txt: item.querySelector('span').textContent, toggled, deleted }; })()", () => {
      expect((() => { let toggled = null; let deleted = false; const item = createTodoItem('Вивчити DOM', c => { toggled = c; }, () => { deleted = true; }); const cb = item.querySelector('input'); cb.checked = true; cb.dispatchEvent(new Event('change')); const delBtn = item.querySelector('.btn-delete'); delBtn.click(); return { txt: item.querySelector('span').textContent, toggled, deleted }; })()).toEqual({"txt":"Вивчити DOM","toggled":true,"deleted":true});
    });
  });

  describe("5.5 createAccordion - DOM: Акордеон / Спойлер (Collapsible Accordion)", () => {
    it("тест 1: (() => { const acc = createAccordion('Питання 1', 'Відповідь'); const body = acc.querySelector('.accordion-body'); const d1 = body.style.display; acc.querySelector('.accordion-header').click(); const d2 = body.style.display; return [d1, d2]; })()", () => {
      expect((() => { const acc = createAccordion('Питання 1', 'Відповідь'); const body = acc.querySelector('.accordion-body'); const d1 = body.style.display; acc.querySelector('.accordion-header').click(); const d2 = body.style.display; return [d1, d2]; })()).toEqual(["none","block"]);
    });
  });

  describe("5.6 createToastAlert - DOM: Спливаюче повідомлення (Toast Notification)", () => {
    it("тест 1: (() => { const t = createToastAlert('Дані збережено!', 'success'); const parent = document.createElement('div'); parent.appendChild(t); t.querySelector('.toast-close').click(); return parent.children.length; })()", () => {
      expect((() => { const t = createToastAlert('Дані збережено!', 'success'); const parent = document.createElement('div'); parent.appendChild(t); t.querySelector('.toast-close').click(); return parent.children.length; })()).toEqual(0);
    });
  });

  describe("5.7 createCopyButton - DOM: Кнопка копіювання в буфер (Copy Button)", () => {
    it("тест 1: (() => { let copiedText = ''; const btn = createCopyButton('secret_api_key_123', t => { copiedText = t; }); btn.click(); return { text: btn.textContent, copiedText }; })()", () => {
      expect((() => { let copiedText = ''; const btn = createCopyButton('secret_api_key_123', t => { copiedText = t; }); btn.click(); return { text: btn.textContent, copiedText }; })()).toEqual({"text":"✓ Скопійовано!","copiedText":"secret_api_key_123"});
    });
  });

  describe("5.8 createProductCard - DOM: Картка товару (Product Card Component)", () => {
    it("тест 1: (() => { const card = createProductCard({ title: 'Книга JS', price: 400, discountPercent: 20 }); const title = card.querySelector('h3').textContent; const price = card.querySelector('.final-price').textContent; return { title, price }; })()", () => {
      expect((() => { const card = createProductCard({ title: 'Книга JS', price: 400, discountPercent: 20 }); const title = card.querySelector('h3').textContent; const price = card.querySelector('.final-price').textContent; return { title, price }; })()).toEqual({"title":"Книга JS","price":"320.00 ₴"});
    });
  });

  describe("5.9 createTabsComponent - DOM: Компонент вкладок (Tabs Component)", () => {
    it("тест 1: (() => { const tabs = createTabsComponent([{ id: 1, label: 'Опис', content: 'Це опис' }, { id: 2, label: 'Відгуки', content: 'Це відгуки' }]); const btns = tabs.querySelectorAll('.tab-btn'); btns[1].click(); return { activeTxt: tabs.querySelector('.tab-pane').textContent, isSecActive: btns[1].classList.contains('active') }; })()", () => {
      expect((() => { const tabs = createTabsComponent([{ id: 1, label: 'Опис', content: 'Це опис' }, { id: 2, label: 'Відгуки', content: 'Це відгуки' }]); const btns = tabs.querySelectorAll('.tab-btn'); btns[1].click(); return { activeTxt: tabs.querySelector('.tab-pane').textContent, isSecActive: btns[1].classList.contains('active') }; })()).toEqual({"activeTxt":"Це відгуки","isSecActive":true});
    });
  });

  describe("5.10 createPasswordStrengthMeter - DOM: Індикатор надійності пароля (Password Strength Meter)", () => {
    it("тест 1: (() => { const inp = document.createElement('input'); const meter = createPasswordStrengthMeter(inp); inp.value = 'superpassword123'; inp.dispatchEvent(new Event('input')); const bar = meter.querySelector('.meter-bar'); return { width: bar.style.width, color: bar.style.backgroundColor }; })()", () => {
      expect((() => { const inp = document.createElement('input'); const meter = createPasswordStrengthMeter(inp); inp.value = 'superpassword123'; inp.dispatchEvent(new Event('input')); const bar = meter.querySelector('.meter-bar'); return { width: bar.style.width, color: bar.style.backgroundColor }; })()).toEqual({"width":"100%","color":"green"});
    });
  });

  describe("5.11 createShowPasswordToggle - DOM: Кнопка показу/приховування пароля (Show/Hide Toggle)", () => {
    it("тест 1: (() => { const inp = document.createElement('input'); inp.type = 'password'; const btn = createShowPasswordToggle(inp); btn.click(); const t1 = inp.type; btn.click(); const t2 = inp.type; return [t1, t2]; })()", () => {
      expect((() => { const inp = document.createElement('input'); inp.type = 'password'; const btn = createShowPasswordToggle(inp); btn.click(); const t1 = inp.type; btn.click(); const t2 = inp.type; return [t1, t2]; })()).toEqual(["text","password"]);
    });
  });

  describe("5.12 createColorPalettePicker - DOM: Палітра кольорів (Color Swatch Picker)", () => {
    it("тест 1: (() => { let chosen = ''; const palette = createColorPalettePicker(['#ff0000', '#00ff00', '#0000ff'], c => { chosen = c; }); const btns = palette.querySelectorAll('.color-swatch'); btns[1].click(); return { chosen, hasSelected: btns[1].classList.contains('selected') }; })()", () => {
      expect((() => { let chosen = ''; const palette = createColorPalettePicker(['#ff0000', '#00ff00', '#0000ff'], c => { chosen = c; }); const btns = palette.querySelectorAll('.color-swatch'); btns[1].click(); return { chosen, hasSelected: btns[1].classList.contains('selected') }; })()).toEqual({"chosen":"#00ff00","hasSelected":true});
    });
  });

  describe("5.13 createCharCounter - DOM: Лічильник залишку символів у textarea", () => {
    it("тест 1: (() => { const ta = document.createElement('textarea'); const counter = createCharCounter(ta, 10); ta.value = '12345'; ta.dispatchEvent(new Event('input')); const t1 = counter.textContent; ta.value = '1234567890123'; ta.dispatchEvent(new Event('input')); const hasExceeded = counter.classList.contains('limit-exceeded'); return { t1, hasExceeded }; })()", () => {
      expect((() => { const ta = document.createElement('textarea'); const counter = createCharCounter(ta, 10); ta.value = '12345'; ta.dispatchEvent(new Event('input')); const t1 = counter.textContent; ta.value = '1234567890123'; ta.dispatchEvent(new Event('input')); const hasExceeded = counter.classList.contains('limit-exceeded'); return { t1, hasExceeded }; })()).toEqual({"t1":"5 залишилось","hasExceeded":true});
    });
  });

  describe("5.14 createModalDialog - DOM: Модальне вікно (Modal Dialog Component)", () => {
    it("тест 1: (() => { let closed = false; const modal = createModalDialog('Увага', 'Текст повідомлення', () => { closed = true; }); modal.querySelector('.modal-close').click(); return closed; })()", () => {
      expect((() => { let closed = false; const modal = createModalDialog('Увага', 'Текст повідомлення', () => { closed = true; }); modal.querySelector('.modal-close').click(); return closed; })()).toEqual(true);
    });
  });

  describe("5.15 createFilterableList - DOM: Живий пошук/фільтр по списку (Search Filter List)", () => {
    it("тест 1: (() => { const box = createFilterableList(['Київ', 'Львів', 'Одеса', 'Харків']); const inp = box.querySelector('.filter-input'); inp.value = 'льв'; inp.dispatchEvent(new Event('input')); const lis = box.querySelectorAll('li'); const visible = Array.from(lis).filter(li => li.style.display !== 'none').map(li => li.textContent); return visible; })()", () => {
      expect((() => { const box = createFilterableList(['Київ', 'Львів', 'Одеса', 'Харків']); const inp = box.querySelector('.filter-input'); inp.value = 'льв'; inp.dispatchEvent(new Event('input')); const lis = box.querySelectorAll('li'); const visible = Array.from(lis).filter(li => li.style.display !== 'none').map(li => li.textContent); return visible; })()).toEqual(["Львів"]);
    });
  });

  describe("5.16 createBreadcrumbsNav - DOM: Навігаційний ланцюжок (Breadcrumbs Component)", () => {
    it("тест 1: (() => { const nav = createBreadcrumbsNav([{ label: 'Головна', url: '/' }, { label: 'Курси', url: '/courses' }, { label: 'JavaScript' }]); const links = nav.querySelectorAll('a'); const cur = nav.querySelector('.current'); return { linkCount: links.length, current: cur.textContent }; })()", () => {
      expect((() => { const nav = createBreadcrumbsNav([{ label: 'Головна', url: '/' }, { label: 'Курси', url: '/courses' }, { label: 'JavaScript' }]); const links = nav.querySelectorAll('a'); const cur = nav.querySelector('.current'); return { linkCount: links.length, current: cur.textContent }; })()).toEqual({"linkCount":2,"current":"JavaScript"});
    });
  });

  describe("5.17 createAvatarWithInitials - DOM: Генератор аватара з ініціалами (Avatar Generator)", () => {
    it("тест 1: (() => { const av = createAvatarWithInitials('Олена Коваль', '#3b82f6'); return { initials: av.textContent, bg: av.style.backgroundColor }; })()", () => {
      expect((() => { const av = createAvatarWithInitials('Олена Коваль', '#3b82f6'); return { initials: av.textContent, bg: av.style.backgroundColor }; })()).toEqual({"initials":"ОК","bg":"rgb(59, 130, 246)"});
    });
  });

  describe("5.18 createStarRating - DOM: Інтерактивний зірковий рейтинг (Star Rating Widget)", () => {
    it("тест 1: (() => { let rating = 0; const widget = createStarRating(5, r => { rating = r; }); const stars = widget.querySelectorAll('.star'); stars[3].click(); const activeCount = widget.querySelectorAll('.star.active').length; return { rating, activeCount }; })()", () => {
      expect((() => { let rating = 0; const widget = createStarRating(5, r => { rating = r; }); const stars = widget.querySelectorAll('.star'); stars[3].click(); const activeCount = widget.querySelectorAll('.star.active').length; return { rating, activeCount }; })()).toEqual({"rating":4,"activeCount":4});
    });
  });

  describe("5.19 createPaginationBar - DOM: Пагінація сторінок (Pagination Bar)", () => {
    it("тест 1: (() => { let page = 1; const bar = createPaginationBar(5, 1, p => { page = p; }); const btns = bar.querySelectorAll('.page-btn'); btns[2].click(); return { page, isThirdActive: btns[2].classList.contains('active') }; })()", () => {
      expect((() => { let page = 1; const bar = createPaginationBar(5, 1, p => { page = p; }); const btns = bar.querySelectorAll('.page-btn'); btns[2].click(); return { page, isThirdActive: btns[2].classList.contains('active') }; })()).toEqual({"page":3,"isThirdActive":true});
    });
  });

  describe("5.20 createProgressBarWidget - DOM: Прогрес-бар з динамічним оновленням (Progress Bar)", () => {
    it("тест 1: (() => { const pb = createProgressBarWidget(25); const w1 = pb.element.querySelector('.progress-fill').style.width; pb.setProgress(75); const w2 = pb.element.querySelector('.progress-fill').style.width; return [w1, w2]; })()", () => {
      expect((() => { const pb = createProgressBarWidget(25); const w1 = pb.element.querySelector('.progress-fill').style.width; pb.setProgress(75); const w2 = pb.element.querySelector('.progress-fill').style.width; return [w1, w2]; })()).toEqual(["25%","75%"]);
    });
  });

  describe("5.21 createTagInputComponent - DOM: Інпут створення тегів (Tag Input Component)", () => {
    it("тест 1: (() => { let currentTags = []; const component = createTagInputComponent(t => { currentTags = t; }); const inp = component.querySelector('input'); inp.value = 'javascript'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); inp.value = 'frontend'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); return currentTags; })()", () => {
      expect((() => { let currentTags = []; const component = createTagInputComponent(t => { currentTags = t; }); const inp = component.querySelector('input'); inp.value = 'javascript'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); inp.value = 'frontend'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); return currentTags; })()).toEqual(["javascript","frontend"]);
    });
  });

  describe("5.22 highlightSearchTermsInElement - DOM: Підсвітка знайденого тексту (Highlight Keywords)", () => {
    it("тест 1: (() => { const p = document.createElement('p'); p.textContent = 'JavaScript це чудово. Вивчайте javascript!'; highlightSearchTermsInElement(p, 'javascript'); const marks = p.querySelectorAll('mark'); return marks.length; })()", () => {
      expect((() => { const p = document.createElement('p'); p.textContent = 'JavaScript це чудово. Вивчайте javascript!'; highlightSearchTermsInElement(p, 'javascript'); const marks = p.querySelectorAll('mark'); return marks.length; })()).toEqual(2);
    });
  });

  describe("5.23 createTipCalculatorWidget - DOM: Калькулятор чайових (Tip Calculator)", () => {
    it("тест 1: (() => { const widget = createTipCalculatorWidget(); const bill = widget.querySelector('.inp-bill'); const tip = widget.querySelector('.inp-tip'); bill.value = '200'; tip.value = '15'; bill.dispatchEvent(new Event('input')); return widget.querySelector('.total-display').textContent; })()", () => {
      expect((() => { const widget = createTipCalculatorWidget(); const bill = widget.querySelector('.inp-bill'); const tip = widget.querySelector('.inp-tip'); bill.value = '200'; tip.value = '15'; bill.dispatchEvent(new Event('input')); return widget.querySelector('.total-display').textContent; })()).toEqual("Разом: 230.00 ₴");
    });
  });

  describe("5.24 createTableFromData - DOM: Динамічна генерація HTML-таблиці з масиву об'єктів", () => {
    it("тест 1: (() => { const tbl = createTableFromData([{ key: 'name', title: 'Імʼя' }, { key: 'score', title: 'Бал' }], [{ name: 'Олена', score: 98 }, { name: 'Тарас', score: 85 }]); const thCount = tbl.querySelectorAll('th').length; const tdCount = tbl.querySelectorAll('td').length; return { thCount, tdCount }; })()", () => {
      expect((() => { const tbl = createTableFromData([{ key: 'name', title: 'Імʼя' }, { key: 'score', title: 'Бал' }], [{ name: 'Олена', score: 98 }, { name: 'Тарас', score: 85 }]); const thCount = tbl.querySelectorAll('th').length; const tdCount = tbl.querySelectorAll('td').length; return { thCount, tdCount }; })()).toEqual({"thCount":2,"tdCount":4});
    });
  });

  describe("5.25 createPricingPlanSwitcher - DOM: Перемикач тарифних планів (Місяць / Рік зі знижкою 20%)", () => {
    it("тест 1: (() => { const ps = createPricingPlanSwitcher(100); const btns = ps.querySelectorAll('.plan-btn'); btns[1].click(); return ps.querySelector('.plan-price').textContent; })()", () => {
      expect((() => { const ps = createPricingPlanSwitcher(100); const btns = ps.querySelectorAll('.plan-btn'); btns[1].click(); return ps.querySelector('.plan-price').textContent; })()).toEqual("960 ₴/рік");
    });
  });

  describe("5.26 createStepperInput - DOM: Числовий кроковий інпут (Stepper +/- Input)", () => {
    it("тест 1: (() => { const st = createStepperInput(0, 3, 1, 0); const btnDec = st.querySelector('.btn-dec'); const btnInc = st.querySelector('.btn-inc'); const d0 = btnDec.disabled; btnInc.click(); const val = st.querySelector('.val-display').textContent; return { d0, val }; })()", () => {
      expect((() => { const st = createStepperInput(0, 3, 1, 0); const btnDec = st.querySelector('.btn-dec'); const btnInc = st.querySelector('.btn-inc'); const d0 = btnDec.disabled; btnInc.click(); const val = st.querySelector('.val-display').textContent; return { d0, val }; })()).toEqual({"d0":true,"val":"1"});
    });
  });

  describe("5.27 createAlertBanner - DOM: Банер сповіщення (Alert Banner)", () => {
    it("тест 1: (() => { const a = createAlertBanner('Увага: технічні роботи', 'warning', true); const hasBtn = Boolean(a.querySelector('.alert-close')); return { cls: a.className, hasBtn }; })()", () => {
      expect((() => { const a = createAlertBanner('Увага: технічні роботи', 'warning', true); const hasBtn = Boolean(a.querySelector('.alert-close')); return { cls: a.className, hasBtn }; })()).toEqual({"cls":"alert alert-warning","hasBtn":true});
    });
  });

  describe("5.28 createCodeSnippetBlock - DOM: Блок коду з кнопкою копіювання (Code Snippet Block)", () => {
    it("тест 1: (() => { const cs = createCodeSnippetBlock('const a = 10;', 'js'); const btn = cs.querySelector('.btn-copy-code'); btn.click(); return { code: cs.querySelector('code').textContent, btnText: btn.textContent }; })()", () => {
      expect((() => { const cs = createCodeSnippetBlock('const a = 10;', 'js'); const btn = cs.querySelector('.btn-copy-code'); btn.click(); return { code: cs.querySelector('code').textContent, btnText: btn.textContent }; })()).toEqual({"code":"const a = 10;","btnText":"✓"});
    });
  });

  describe("5.29 createLikeCounterWidget - DOM: Віджет лайків і дизлайків (Like / Dislike Counters)", () => {
    it("тест 1: (() => { const w = createLikeCounterWidget(10, 2); w.querySelector('.btn-like').click(); w.querySelector('.btn-dislike').click(); return { likes: w.querySelector('.btn-like').textContent, dislikes: w.querySelector('.btn-dislike').textContent }; })()", () => {
      expect((() => { const w = createLikeCounterWidget(10, 2); w.querySelector('.btn-like').click(); w.querySelector('.btn-dislike').click(); return { likes: w.querySelector('.btn-like').textContent, dislikes: w.querySelector('.btn-dislike').textContent }; })()).toEqual({"likes":"👍 11","dislikes":"👎 3"});
    });
  });

  describe("5.30 createLiveSearchHighlight - DOM: Живий пошук із підсвічуванням збігів у тексті", () => {
    it("тест 1: (() => { const box = createLiveSearchHighlight('Frontend розробка це цікаво і круто'); const inp = box.querySelector('input'); inp.value = 'розробка'; inp.dispatchEvent(new Event('input')); return box.querySelector('mark').textContent; })()", () => {
      expect((() => { const box = createLiveSearchHighlight('Frontend розробка це цікаво і круто'); const inp = box.querySelector('input'); inp.value = 'розробка'; inp.dispatchEvent(new Event('input')); return box.querySelector('mark').textContent; })()).toEqual("розробка");
    });
  });

  describe("5.31 createNotificationBadge - DOM: Бейдж кількості сповіщень (Notification Bell & Badge)", () => {
    it("тест 1: (() => { const nb = createNotificationBadge(0); const d1 = nb.element.querySelector('.badge-count').style.display; nb.setCount(3); const d2 = nb.element.querySelector('.badge-count').style.display; const txt = nb.element.querySelector('.badge-count').textContent; return { d1, d2, txt }; })()", () => {
      expect((() => { const nb = createNotificationBadge(0); const d1 = nb.element.querySelector('.badge-count').style.display; nb.setCount(3); const d2 = nb.element.querySelector('.badge-count').style.display; const txt = nb.element.querySelector('.badge-count').textContent; return { d1, d2, txt }; })()).toEqual({"d1":"none","d2":"","txt":"3"});
    });
  });

  describe("5.32 createInlineTextEditor - DOM: Інлайн редагування тексту (Inline Text Editor)", () => {
    it("тест 1: (() => { const editor = createInlineTextEditor('Початковий текст'); return editor.textContent; })()", () => {
      expect((() => { const editor = createInlineTextEditor('Початковий текст'); return editor.textContent; })()).toEqual("Початковий текст");
    });
  });

  describe("5.33 createSkeletonLoader - DOM: Скелетон-заглушка завантаження (Skeleton Card)", () => {
    it("тест 1: (() => { const sk = createSkeletonLoader(); const lines = sk.querySelectorAll('.skeleton-line'); return { hasAv: Boolean(sk.querySelector('.skeleton-avatar')), linesCount: lines.length }; })()", () => {
      expect((() => { const sk = createSkeletonLoader(); const lines = sk.querySelectorAll('.skeleton-line'); return { hasAv: Boolean(sk.querySelector('.skeleton-avatar')), linesCount: lines.length }; })()).toEqual({"hasAv":true,"linesCount":2});
    });
  });

  describe("5.34 createValidationFeedbackInput - DOM: Поле введення з живою валідацією (Validation Feedback)", () => {
    it("тест 1: (() => { const group = createValidationFeedbackInput(v => v.length >= 3, 'Мінімум 3 символи'); const inp = group.querySelector('input'); inp.value = 'ab'; inp.dispatchEvent(new Event('blur')); const hasErr = inp.classList.contains('is-invalid'); const isMsgVisible = group.querySelector('.error-label').style.display === 'block'; return { hasErr, isMsgVisible }; })()", () => {
      expect((() => { const group = createValidationFeedbackInput(v => v.length >= 3, 'Мінімум 3 символи'); const inp = group.querySelector('input'); inp.value = 'ab'; inp.dispatchEvent(new Event('blur')); const hasErr = inp.classList.contains('is-invalid'); const isMsgVisible = group.querySelector('.error-label').style.display === 'block'; return { hasErr, isMsgVisible }; })()).toEqual({"hasErr":true,"isMsgVisible":true});
    });
  });

  describe("5.35 createImageCarousel - DOM: Слайдер зображень (Image Carousel)", () => {
    it("тест 1: (() => { const c = createImageCarousel(['img1.jpg', 'img2.jpg', 'img3.jpg']); const btnNext = c.querySelector('.btn-next'); btnNext.click(); const s1 = c.querySelector('img').getAttribute('src'); btnNext.click(); const s2 = c.querySelector('img').getAttribute('src'); return [s1, s2]; })()", () => {
      expect((() => { const c = createImageCarousel(['img1.jpg', 'img2.jpg', 'img3.jpg']); const btnNext = c.querySelector('.btn-next'); btnNext.click(); const s1 = c.querySelector('img').getAttribute('src'); btnNext.click(); const s2 = c.querySelector('img').getAttribute('src'); return [s1, s2]; })()).toEqual(["img2.jpg","img3.jpg"]);
    });
  });

  describe("5.36 createCollapsiblePanel - DOM: Панель з можливістю згортання (Collapsible Panel)", () => {
    it("тест 1: (() => { const p = createCollapsiblePanel('Налаштування', '<p>Контент</p>'); const btn = p.querySelector('.toggle-btn'); btn.click(); const isHidden = p.querySelector('.panel-body').style.display === 'none'; const btnTxt = btn.textContent; return { isHidden, btnTxt }; })()", () => {
      expect((() => { const p = createCollapsiblePanel('Налаштування', '<p>Контент</p>'); const btn = p.querySelector('.toggle-btn'); btn.click(); const isHidden = p.querySelector('.panel-body').style.display === 'none'; const btnTxt = btn.textContent; return { isHidden, btnTxt }; })()).toEqual({"isHidden":true,"btnTxt":"+"});
    });
  });

  describe("5.37 createSearchableDropdown - DOM: Кастомний селект з пошуком (Searchable Dropdown)", () => {
    it("тест 1: (() => { let chosen = ''; const dd = createSearchableDropdown(['JavaScript', 'Python', 'Rust'], v => { chosen = v; }); const trigger = dd.querySelector('.dropdown-trigger'); trigger.click(); const opt = dd.querySelectorAll('li')[0]; opt.click(); return { triggerTxt: trigger.textContent, chosen }; })()", () => {
      expect((() => { let chosen = ''; const dd = createSearchableDropdown(['JavaScript', 'Python', 'Rust'], v => { chosen = v; }); const trigger = dd.querySelector('.dropdown-trigger'); trigger.click(); const opt = dd.querySelectorAll('li')[0]; opt.click(); return { triggerTxt: trigger.textContent, chosen }; })()).toEqual({"triggerTxt":"JavaScript","chosen":"JavaScript"});
    });
  });

  describe("5.38 createScrollToTopButton - DOM: Кнопка швидкого повернення вгору (Scroll to Top)", () => {
    it("тест 1: (() => { const div = document.createElement('div'); const btn = createScrollToTopButton(div); div.scrollTop = 250; div.dispatchEvent(new Event('scroll')); return btn.style.display; })()", () => {
      expect((() => { const div = document.createElement('div'); const btn = createScrollToTopButton(div); div.scrollTop = 250; div.dispatchEvent(new Event('scroll')); return btn.style.display; })()).toEqual("block");
    });
  });

  describe("5.39 createCountdownTimerWidget - DOM: Віджет зворотного відліку з контролерами (Countdown Timer)", () => {
    it("тест 1: (() => { const w = createCountdownTimerWidget(120); return w.querySelector('.timer-time').textContent; })()", () => {
      expect((() => { const w = createCountdownTimerWidget(120); return w.querySelector('.timer-time').textContent; })()).toEqual("02:00");
    });
  });

  describe("5.40 createMiniFormValidator - DOM: Комплексна валідація форми (Form Validation Summary)", () => {
    it("тест 1: (() => { const form = document.createElement('form'); const inp = document.createElement('input'); inp.name = 'user'; inp.required = true; inp.value = ''; form.appendChild(inp); createMiniFormValidator(form, () => {}); form.dispatchEvent(new Event('submit')); return inp.classList.contains('field-error'); })()", () => {
      expect((() => { const form = document.createElement('form'); const inp = document.createElement('input'); inp.name = 'user'; inp.required = true; inp.value = ''; form.appendChild(inp); createMiniFormValidator(form, () => {}); form.dispatchEvent(new Event('submit')); return inp.classList.contains('field-error'); })()).toEqual(true);
    });
  });

});
