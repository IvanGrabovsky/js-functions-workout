/**
 * Частина 5: DOM Міні-проекти (Інтерактивні компоненти та HTML/CSS)
 * Створення та маніпуляція DOM-елементами, робота з подіями (click, input, change, submit), перемикання класів, таби, модалки, списки задач, форми та анімації.
 */

/**
 * Завдання 5.1: DOM: Кнопка-лічильник кліків (Counter Button) (Базовий рівень)
 * Напишіть функцію createCounterButton(initialCount = 0), яка створює елемент <button>, що відображає 'Кліків: {count}'. При кожному кліку лічильник збільшується на 1 і текст кнопки оновлюється. Повертає створений елемент кнопки.
 * Вимоги:
 * - Створіть кнопку через document.createElement('button').
 * - Встановіть початковий текст 'Кліків: ' + initialCount.
 * - Додайте слухач події 'click', що інкрементує лічильник та оновлює textContent.
 * - Поверніть елемент кнопки.
 */
export function createCounterButton(initialCount = 0) {
  // Створіть та поверніть кнопку-лічильник
  return undefined;
}

/**
 * Завдання 5.2: DOM: Перемикач темної теми (Theme Toggle Switch) (Базовий рівень)
 * Напишіть функцію createThemeToggle(targetContainer), яка створює кнопку з текстом '🌙 Темна тема'. При кліку вона перемикає клас 'dark-theme' на targetContainer, а текст змінюється між '☀️ Світла тема' та '🌙 Темна тема'. Повертає кнопку.
 * Вимоги:
 * - Створіть кнопку з початковим текстом '🌙 Темна тема'.
 * - При кліку викличте targetContainer.classList.toggle('dark-theme').
 * - Змініть textContent кнопки відповідно до наявності класу.
 * - Поверніть кнопку.
 */
export function createThemeToggle(targetContainer) {
  // Реалізуйте кнопку перемикання теми
  return undefined;
}

/**
 * Завдання 5.3: DOM: Кастомний бейдж статусу (Status Badge) (Базовий рівень)
 * Напишіть функцію createStatusBadge(status, label), яка створює елемент <span> з класами 'badge' та 'badge-{status}' (наприклад, 'badge-success'), і встановлює textContent у значення label.
 * Вимоги:
 * - Створіть span через document.createElement('span').
 * - Додайте класи через className або classList.add.
 * - Встановіть textContent = label.
 * - Поверніть елемент.
 */
export function createStatusBadge(status, label) {
  // Створіть стилізований бейдж
  return undefined;
}

/**
 * Завдання 5.4: DOM: Елемент списку задач (Todo Item) (Середній рівень)
 * Напишіть функцію createTodoItem(taskText, onToggle, onDelete), яка створює <li class='todo-item'> з чекбоксом <input type='checkbox'>, <span> з текстом задачі та кнопкою <button class='btn-delete'>Видалити</button>. При зміні чекбокса викликає onToggle(completed), при кліку на кнопку видалення — onDelete().
 * Вимоги:
 * - Створіть структуру li -> input, span, button.
 * - Підключіть слухач 'change' для чекбокса.
 * - Підключіть слухач 'click' для кнопки видалення.
 * - Поверніть елемент li.
 */
export function createTodoItem(taskText, onToggle, onDelete) {
  // Створіть компонент елемента списку задач
  return undefined;
}

/**
 * Завдання 5.5: DOM: Акордеон / Спойлер (Collapsible Accordion) (Середній рівень)
 * Напишіть функцію createAccordion(title, contentText), яка створює блок спойлера з класом 'accordion-item'. Всередині кнопка 'accordion-header' та блок 'accordion-body' (початково style.display = 'none'). При кліку на заголовок тіло перемикається між 'block' та 'none'.
 * Вимоги:
 * - Створіть контейнер div.accordion-item.
 * - Створіть кнопку заголовка button.accordion-header з текстом title.
 * - Створіть блок тіла div.accordion-body з текстом contentText і початковим display = 'none'.
 * - При кліку на заголовок змінюйте display тіла.
 */
export function createAccordion(title, contentText) {
  // Створіть елемент акордеона
  return undefined;
}

/**
 * Завдання 5.6: DOM: Спливаюче повідомлення (Toast Notification) (Базовий рівень)
 * Напишіть функцію createToastAlert(message, type = 'info'), яка створює <div class='toast toast-{type}'> з текстом message та кнопкою закриття <button class='toast-close'>&times;</button>. При кліку на кнопку закриття елемент видаляється з DOM (toast.remove()).
 * Вимоги:
 * - Створіть div з класом `toast toast-${type}`.
 * - Додайте текст повідомлення та кнопку закриття.
 * - При кліку на кнопку закриття викличте toast.remove().
 * - Поверніть створений toast.
 */
export function createToastAlert(message, type = 'info') {
  // Створіть спливаюче повідомлення toast
  return undefined;
}

/**
 * Завдання 5.7: DOM: Кнопка копіювання в буфер (Copy Button) (Базовий рівень)
 * Напишіть функцію createCopyButton(textToCopy, onCopied), яка створює кнопку з текстом '📋 Копіювати'. При кліку вона змінює текст на '✓ Скопійовано!', викликає onCopied(textToCopy) і повертає створену кнопку.
 * Вимоги:
 * - Створіть кнопку з текстом '📋 Копіювати'.
 * - Додайте слухач кліку, який змінює текст і викликає onCopied.
 * - Поверніть кнопку.
 */
export function createCopyButton(textToCopy, onCopied) {
  // Створіть кнопку копіювання
  return undefined;
}

/**
 * Завдання 5.8: DOM: Картка товару (Product Card Component) (Середній рівень)
 * Напишіть функцію createProductCard(product), де product = { title, price, discountPercent }. Створює <div class='product-card'> з заголовком <h3>, старою закресленою ціною <del> (якщо є знижка) та фінальною ціною <span class='final-price'>.
 * Вимоги:
 * - Обчисліть ціну зі знижкою: price * (1 - discountPercent / 100).
 * - Створіть розмітку картки.
 * - Поверніть елемент картки.
 */
export function createProductCard(product) {
  // Створіть картку товару
  return undefined;
}

/**
 * Завдання 5.9: DOM: Компонент вкладок (Tabs Component) (Середній рівень)
 * Напишіть функцію createTabsComponent(tabsList), де tabsList = [{ id, label, content }]. Створює <div class='tabs-container'> з навігацією <nav class='tabs-nav'> та вмістом <div class='tab-pane'>. Початково активна перша вкладка. При кліку на кнопку вкладки перемикає клас 'active' на відповідній кнопці та оновлює вміст pane.
 * Вимоги:
 * - Створіть кнопки вкладок для кожного елемента.
 * - Підключіть перемикання активного стану.
 * - Поверніть контейнер вкладок.
 */
export function createTabsComponent(tabsList) {
  // Створіть інтерактивні вкладки
  return undefined;
}

/**
 * Завдання 5.10: DOM: Індикатор надійності пароля (Password Strength Meter) (Базовий рівень)
 * Напишіть функцію createPasswordStrengthMeter(inputElement), яка створює <div class='strength-meter'><div class='meter-bar'></div></div>. Слухає подію 'input' на inputElement: якщо довжина пароля < 6 — bar.style.width = '33%' і background = 'red'; від 6 до 9 — '66%' і 'orange'; 10 і більше — '100%' і 'green'. Повертає створений meter.
 * Вимоги:
 * - Створіть контейнер meter з внутрішнім елементом bar.
 * - Підключіть слухач 'input' до inputElement.
 * - Оновлюйте ширину та колір смужки.
 * - Поверніть контейнер meter.
 */
export function createPasswordStrengthMeter(inputElement) {
  // Створіть смужку надійності пароля
  return undefined;
}

/**
 * Завдання 5.11: DOM: Кнопка показу/приховування пароля (Show/Hide Toggle) (Базовий рівень)
 * Напишіть функцію createShowPasswordToggle(passwordInput), яка створює кнопку з текстом '👁️'. При кліку вона перемикає тип passwordInput: якщо був 'password' -> стає 'text' і кнопка '🙈', і навпаки. Повертає кнопку.
 * Вимоги:
 * - Створіть кнопку з початковим текстом '👁️'.
 * - При кліку перевіряйте passwordInput.type.
 * - Змінюйте type інпуту та текст кнопки.
 * - Поверніть кнопку.
 */
export function createShowPasswordToggle(passwordInput) {
  // Реалізуйте кнопку перемикання видимості пароля
  return undefined;
}

/**
 * Завдання 5.12: DOM: Палітра кольорів (Color Swatch Picker) (Середній рівень)
 * Напишіть функцію createColorPalettePicker(colorsArray, onSelectColor), яка створює <div class='color-palette'> з круглими кнопками <button class='color-swatch'> для кожного кольору. При кліку додає клас 'selected' обраній кнопці (знімаючи з інших) і викликає onSelectColor(color).
 * Вимоги:
 * - Створіть кнопки для кожного кольору зі style.backgroundColor = color.
 * - Обробляйте клік із виділенням однієї активної кнопки.
 * - Поверніть контейнер палітри.
 */
export function createColorPalettePicker(colorsArray, onSelectColor) {
  // Створіть палітру вибору кольору
  return undefined;
}

/**
 * Завдання 5.13: DOM: Лічильник залишку символів у textarea (Базовий рівень)
 * Напишіть функцію createCharCounter(textareaElement, maxChars = 100), яка створює <span class='char-counter'> з текстом '100 залишилось'. Слухає подію 'input': оновлює залишок. Якщо ліміт перевищено — додає клас 'limit-exceeded'. Повертає елемент лічильника.
 * Вимоги:
 * - Створіть span.char-counter.
 * - Підключіть слухач 'input' до textareaElement.
 * - Оновлюйте залишок (maxChars - len).
 * - Додавайте/знімайте клас 'limit-exceeded' якщо залишок < 0.
 */
export function createCharCounter(textareaElement, maxChars = 100) {
  // Створіть лічильник залишку символів
  return undefined;
}

/**
 * Завдання 5.14: DOM: Модальне вікно (Modal Dialog Component) (Середній рівень)
 * Напишіть функцію createModalDialog(title, contentText, onClose), яка створює <div class='modal-backdrop'><div class='modal-dialog'> з заголовком <h3>, кнопкою закриття <button class='modal-close'>&times;</button> та текстом. При кліку на кнопку або бекдроп видаляє модалку та викликає onClose().
 * Вимоги:
 * - Створіть бекдроп та діалогове вікно.
 * - Обробіть клік закриття.
 * - Поверніть бекдроп.
 */
export function createModalDialog(title, contentText, onClose) {
  // Створіть модальне вікно
  return undefined;
}

/**
 * Завдання 5.15: DOM: Живий пошук/фільтр по списку (Search Filter List) (Середній рівень)
 * Напишіть функцію createFilterableList(itemsArray), яка створює <div class='filter-list-box'> з інпутом <input class='filter-input'> та списком <ul class='items-list'>. При введенні тексту ховає невідповідні елементи (style.display = 'none'). Повертає контейнер.
 * Вимоги:
 * - Створіть інпут та список ul з li для кожного елемента.
 * - Слухайте 'input' на текстовому полі.
 * - Фільтруйте li без урахування регістру.
 * - Поверніть контейнер.
 */
export function createFilterableList(itemsArray) {
  // Створіть список із живим пошуком
  return undefined;
}

/**
 * Завдання 5.16: DOM: Навігаційний ланцюжок (Breadcrumbs Component) (Базовий рівень)
 * Напишіть функцію createBreadcrumbsNav(crumbs), де crumbs = [{ label, url }]. Створює <nav class='breadcrumbs'><ol> з посиланнями <a> для всіх елементів, крім останнього (останній — звичайний <span> без посилання з класом 'current'). Повертає nav.
 * Вимоги:
 * - Створіть nav та ol.
 * - Для проміжних елементів створіть li > a[href].
 * - Для останнього створіть li > span.current.
 * - Поверніть nav.
 */
export function createBreadcrumbsNav(crumbs) {
  // Створіть навігаційні хлібні крихти
  return undefined;
}

/**
 * Завдання 5.17: DOM: Генератор аватара з ініціалами (Avatar Generator) (Базовий рівень)
 * Напишіть функцію createAvatarWithInitials(fullName, bgColor = '#3ecf8e'), яка створює круглий <div class='user-avatar'> зі style.backgroundColor = bgColor та ініціалами (наприклад, 'Іван Грабовський' -> 'ІГ'). Якщо одне слово — перша літера.
 * Вимоги:
 * - Отримайте ініціали з fullName.
 * - Створіть div з класом 'user-avatar'.
 * - Встановіть фоновий колір та текст.
 * - Поверніть div.
 */
export function createAvatarWithInitials(fullName, bgColor = '#3ecf8e') {
  // Створіть аватар користувача з ініціалами
  return undefined;
}

/**
 * Завдання 5.18: DOM: Інтерактивний зірковий рейтинг (Star Rating Widget) (Середній рівень)
 * Напишіть функцію createStarRating(totalStars = 5, onRatingSelect), яка створює <div class='star-rating'> з totalStars зірочками <span class='star' data-val='1'>★</span>. При кліку на зірку додає клас 'active' всім зірочкам до обраної включно та викликає onRatingSelect(rating).
 * Вимоги:
 * - Створіть зірочки з data-val від 1 до totalStars.
 * - При кліку підсвічуйте зірки від 1 до N.
 * - Поверніть контейнер рейтингу.
 */
export function createStarRating(totalStars = 5, onRatingSelect) {
  // Створіть віджет вибору рейтингу зірочками
  return undefined;
}

/**
 * Завдання 5.19: DOM: Пагінація сторінок (Pagination Bar) (Середній рівень)
 * Напишіть функцію createPaginationBar(totalPages, initialPage = 1, onPageChange), яка створює <div class='pagination-bar'> з кнопками для кожної сторінки 1..totalPages. Активна сторінка має клас 'active'. При кліку змінює активну кнопку та викликає onPageChange(page).
 * Вимоги:
 * - Створіть кнопки для сторінок 1..totalPages.
 * - Встановіть початкову активну кнопку.
 * - Підключіть перемикання.
 * - Поверніть елемент.
 */
export function createPaginationBar(totalPages, initialPage = 1, onPageChange) {
  // Створіть панель пагінації
  return undefined;
}

/**
 * Завдання 5.20: DOM: Прогрес-бар з динамічним оновленням (Progress Bar) (Базовий рівень)
 * Напишіть функцію createProgressBarWidget(initialPct = 0), яка створює <div class='progress-track'><div class='progress-fill'></div></div>. Повертає об'єкт { element, setProgress(pct) }, де setProgress оновлює width і перевіряє межі 0..100.
 * Вимоги:
 * - Створіть track та fill.
 * - Реалізуйте метод setProgress(pct).
 * - Поверніть { element, setProgress }.
 */
export function createProgressBarWidget(initialPct = 0) {
  // Створіть керований прогрес-бар
  return undefined;
}

/**
 * Завдання 5.21: DOM: Інпут створення тегів (Tag Input Component) (Просунутий рівень)
 * Напишіть функцію createTagInputComponent(onTagsUpdate), яка створює <div class='tag-input-box'><input placeholder='Додати тег...'></div>. При натисканні Enter створює <span class='tag-chip'>{текст} <span class='tag-remove'>&times;</span></span>. При кліку на хрестик тег видаляється. При кожній зміні викликає onTagsUpdate(tagsArray).
 * Вимоги:
 * - Слухайте keydown 'Enter' на інпуті.
 * - Додавайте чіпи тегів перед інпутом.
 * - Оновлюйте масив тегів і викликайте onTagsUpdate.
 * - Поверніть контейнер.
 */
export function createTagInputComponent(onTagsUpdate) {
  // Створіть інтерактивний компонент введення тегів
  return undefined;
}

/**
 * Завдання 5.22: DOM: Підсвітка знайденого тексту (Highlight Keywords) (Середній рівень)
 * Напишіть функцію highlightSearchTermsInElement(element, keyword), яка знаходить усі входження keyword у текстовому контенті елемента (без урахування регістру) та огортає їх у тег <mark>. Якщо keyword порожній — залишає текст без змін.
 * Вимоги:
 * - Якщо !keyword.trim() — return.
 * - Використайте регулярний вираз з прапорцем 'gi'.
 * - Замініть збіги на `<mark>$&</mark>` через innerHTML.
 * - Поверніть element.
 */
export function highlightSearchTermsInElement(element, keyword) {
  // Підсвітіть ключові слова через тег mark
  return undefined;
}

/**
 * Завдання 5.23: DOM: Калькулятор чайових (Tip Calculator) (Середній рівень)
 * Напишіть функцію createTipCalculatorWidget(), яка створює <div class='tip-calc'> з інпутами для суми рахунку <input class='inp-bill' type='number'>, відсотка чайових <input class='inp-tip' type='number' value='10'> та відображенням підсумку <div class='total-display'>Разом: 0.00 ₴</div>. При зміні інпутів оновлює підсумок.
 * Вимоги:
 * - Створіть інпути та блок відображення підсумку.
 * - Підключіть перерахунок: bill * (1 + tip / 100).
 * - Поверніть контейнер віджета.
 */
export function createTipCalculatorWidget() {
  // Створіть калькулятор чайових
  return undefined;
}

/**
 * Завдання 5.24: DOM: Динамічна генерація HTML-таблиці з масиву об'єктів (Середній рівень)
 * Напишіть функцію createTableFromData(columns, dataRows), де columns = [{ key: 'id', title: 'ID' }, ...], а dataRows — масив об'єктів. Створює та повертає <table> з <thead> і <tbody> з відповідними даними.
 * Вимоги:
 * - Створіть table, thead, tbody.
 * - Згенеруйте tr з th для кожної колонки.
 * - Згенеруйте tr з td для кожного рядка даних.
 * - Поверніть таблицю.
 */
export function createTableFromData(columns, dataRows) {
  // Згенеруйте таблицю з колонок та рядків
  return undefined;
}

/**
 * Завдання 5.25: DOM: Перемикач тарифних планів (Місяць / Рік зі знижкою 20%) (Середній рівень)
 * Напишіть функцію createPricingPlanSwitcher(monthlyPrice), яка створює віджет з кнопками 'Щомісяця' та 'Щорічно (-20%)' та елементом ціни. Початково показує monthlyPrice. При перемиканні на 'Щорічно' показує ціну зі знижкою 20% (monthlyPrice * 0.8 * 12).
 * Вимоги:
 * - Створіть перемикачі та блок ціни.
 * - Розрахуйте річну вартість зі знижкою.
 * - Поверніть віджет.
 */
export function createPricingPlanSwitcher(monthlyPrice) {
  // Створіть перемикач тарифів
  return undefined;
}

/**
 * Завдання 5.26: DOM: Числовий кроковий інпут (Stepper +/- Input) (Базовий рівень)
 * Напишіть функцію createStepperInput(min = 0, max = 10, step = 1, initial = 1), яка створює <div class='stepper'><button class='btn-dec'>-</button><span class='val-display'>1</span><button class='btn-inc'>+</button></div>. Кнопки блокуються (disabled = true), якщо досягнуто мінімуму чи максимуму.
 * Вимоги:
 * - Створіть кнопки + / - та спан відображення значення.
 * - Оновлюйте стан disabled для кнопок.
 * - Поверніть контейнер степпера.
 */
export function createStepperInput(min = 0, max = 10, step = 1, initial = 1) {
  // Створіть кроковий числовий перемикач
  return undefined;
}

/**
 * Завдання 5.27: DOM: Банер сповіщення (Alert Banner) (Базовий рівень)
 * Напишіть функцію createAlertBanner(message, type = 'warning', isDismissible = true), яка створює <div class='alert alert-{type}'> з текстом і опціональною кнопкою закриття. При закритті банер плавно видаляється.
 * Вимоги:
 * - Створіть div.alert.alert-{type}.
 * - Додайте текст.
 * - Якщо isDismissible — додайте кнопку закриття.
 * - Поверніть банер.
 */
export function createAlertBanner(message, type = 'warning', isDismissible = true) {
  // Створіть банер сповіщення
  return undefined;
}

/**
 * Завдання 5.28: DOM: Блок коду з кнопкою копіювання (Code Snippet Block) (Базовий рівень)
 * Напишіть функцію createCodeSnippetBlock(codeText, lang = 'javascript'), яка створює <div class='code-block'><div class='code-header'><span>{lang}</span><button class='btn-copy-code'>Копіювати</button></div><pre><code>{codeText}</code></pre></div>. Кнопка копіює код і показує '✓'.
 * Вимоги:
 * - Створіть структуру блоку коду.
 * - Підключіть копіювання.
 * - Поверніть елемент.
 */
export function createCodeSnippetBlock(codeText, lang = 'javascript') {
  // Створіть блок відображення фрагмента коду
  return undefined;
}

/**
 * Завдання 5.29: DOM: Віджет лайків і дизлайків (Like / Dislike Counters) (Базовий рівень)
 * Напишіть функцію createLikeCounterWidget(initialLikes = 0, initialDislikes = 0), яка створює <div class='likes-widget'><button class='btn-like'>👍 0</button><button class='btn-dislike'>👎 0</button></div>. При кліку збільшує відповідний лічильник на 1.
 * Вимоги:
 * - Створіть кнопки з відповідними іконками та числами.
 * - Інкрементуйте лічильники по кліку.
 * - Поверніть віджет.
 */
export function createLikeCounterWidget(initialLikes = 0, initialDislikes = 0) {
  // Створіть віджет оцінок
  return undefined;
}

/**
 * Завдання 5.30: DOM: Живий пошук із підсвічуванням збігів у тексті (Середній рівень)
 * Напишіть функцію createLiveSearchHighlight(textParagraph), яка створює <div class='search-box'><input placeholder='Пошук у тексті...'><p>{textParagraph}</p></div>. При введенні слова огортає збіги в <mark> всередині <p>.
 * Вимоги:
 * - Збережіть оригінальний текст.
 * - При вході оновлюйте innerHTML тега p.
 * - Поверніть контейнер.
 */
export function createLiveSearchHighlight(textParagraph) {
  // Створіть живий пошук з підсвічуванням у тексті
  return undefined;
}

/**
 * Завдання 5.31: DOM: Бейдж кількості сповіщень (Notification Bell & Badge) (Базовий рівень)
 * Напишіть функцію createNotificationBadge(initialCount = 0), яка створює <div class='bell-wrapper'><span>🔔</span><span class='badge-count'>{count}</span></div>. Якщо count === 0 — бейдж прихований (display = 'none'). Повертає { element, setCount(n) }.
 * Вимоги:
 * - Створіть елементи дзвіночка та бейджа.
 * - Реалізуйте метод setCount(n).
 * - Приховуйте бейдж при n <= 0.
 */
export function createNotificationBadge(initialCount = 0) {
  // Створіть бейдж сповіщень
  return undefined;
}

/**
 * Завдання 5.32: DOM: Інлайн редагування тексту (Inline Text Editor) (Середній рівень)
 * Напишіть функцію createInlineTextEditor(initialText, onSave), яка створює <span class='inline-text'>{initialText}</span>. При подвійному кліку (dblclick) текст замінюється на <input type='text'>. При натисканні Enter інпут знову замінюється на текст із новим значенням і викликається onSave(newText).
 * Вимоги:
 * - Створіть span.inline-text.
 * - По dblclick замінюйте span на input.
 * - По Enter зберігайте нове значення та повертайте span.
 * - Поверніть початковий контейнер або елемент.
 */
export function createInlineTextEditor(initialText, onSave) {
  // Реалізуйте інлайн редактор тексту
  return undefined;
}

/**
 * Завдання 5.33: DOM: Скелетон-заглушка завантаження (Skeleton Card) (Базовий рівень)
 * Напишіть функцію createSkeletonLoader(), яка створює <div class='skeleton-card'><div class='skeleton-avatar'></div><div class='skeleton-line short'></div><div class='skeleton-line'></div></div> для відображення стану очікування даних.
 * Вимоги:
 * - Створіть структуру скелетона картки.
 * - Призначте відповідні CSS-класи.
 * - Поверніть елемент.
 */
export function createSkeletonLoader() {
  // Створіть скелетон завантаження
  return undefined;
}

/**
 * Завдання 5.34: DOM: Поле введення з живою валідацією (Validation Feedback) (Базовий рівень)
 * Напишіть функцію createValidationFeedbackInput(validateFn, errorMsg), яка створює <div class='field-group'><input class='form-input'><div class='error-label' style='display:none'>{errorMsg}</div></div>. При події 'blur' перевіряє значення: якщо validateFn(value) повертає false — показує помилку і додає клас 'is-invalid' до інпуту.
 * Вимоги:
 * - Створіть поле введення та лейбл помилки.
 * - При blur перевіряйте значення через validateFn.
 * - Поверніть контейнер field-group.
 */
export function createValidationFeedbackInput(validateFn, errorMsg) {
  // Створіть поле з валідацією по blur
  return undefined;
}

/**
 * Завдання 5.35: DOM: Слайдер зображень (Image Carousel) (Середній рівень)
 * Напишіть функцію createImageCarousel(imageUrls), яка створює <div class='carousel'><img src='{current}'><div class='controls'><button class='btn-prev'>&lt;</button><button class='btn-next'>&gt;</button></div></div>. Кнопки перемикають індекс картинки по колу.
 * Вимоги:
 * - Створіть img та кнопки вперед/назад.
 * - Перемикайте індекс зображення по колу: (idx + 1) % len.
 * - Поверніть карусель.
 */
export function createImageCarousel(imageUrls) {
  // Реалізуйте слайдер зображень
  return undefined;
}

/**
 * Завдання 5.36: DOM: Панель з можливістю згортання (Collapsible Panel) (Базовий рівень)
 * Напишіть функцію createCollapsiblePanel(titleText, bodyHtml), яка створює <div class='panel'><div class='panel-header'><span>{title}</span><button class='toggle-btn'>-</button></div><div class='panel-body'>{bodyHtml}</div></div>. Кнопка перемикає видимість тіла та змінює свій текст між '-' та '+'.
 * Вимоги:
 * - Створіть панель із шапкою та тілом.
 * - Перемикайте style.display тіла та текст кнопки.
 * - Поверніть панель.
 */
export function createCollapsiblePanel(titleText, bodyHtml) {
  // Створіть панель зі згортанням
  return undefined;
}

/**
 * Завдання 5.37: DOM: Кастомний селект з пошуком (Searchable Dropdown) (Просунутий рівень)
 * Напишіть функцію createSearchableDropdown(optionsArray, onSelect), яка створює <div class='dropdown'><button class='dropdown-trigger'>Оберіть...</button><div class='dropdown-menu' style='display:none'><input class='dropdown-search' placeholder='Пошук...'><ul class='dropdown-options'></ul></div></div>. Клік на кнопку відкриває меню, ввід у пошук фільтрує варіанти, клік на варіант обирає його і закриває меню.
 * Вимоги:
 * - Створіть розмітку випадаючого списку.
 * - Фільтруйте варіанти в ul.
 * - Оновлюйте текст кнопки при виборі.
 * - Поверніть контейнер.
 */
export function createSearchableDropdown(optionsArray, onSelect) {
  // Реалізуйте селект з фільтрацією опцій
  return undefined;
}

/**
 * Завдання 5.38: DOM: Кнопка швидкого повернення вгору (Scroll to Top) (Базовий рівень)
 * Напишіть функцію createScrollToTopButton(targetContainer), яка створює <button class='btn-scroll-top' style='display:none'>⬆</button>. Слухає подію 'scroll' на targetContainer: якщо scrollTop > 200 — показує кнопку (display = 'block'), інакше ховає. При кліку викликає targetContainer.scrollTo({ top: 0, behavior: 'smooth' }).
 * Вимоги:
 * - Створіть кнопку ⬆.
 * - Слухайте подію scroll.
 * - Клікайте для прокрутки наверх.
 * - Поверніть кнопку.
 */
export function createScrollToTopButton(targetContainer) {
  // Створіть кнопку повернення на початок сторінки
  return undefined;
}

/**
 * Завдання 5.39: DOM: Віджет зворотного відліку з контролерами (Countdown Timer) (Середній рівень)
 * Напишіть функцію createCountdownTimerWidget(initialSeconds, onComplete), яка створює <div class='timer-widget'><div class='timer-time'>00:00</div><button class='btn-start'>Старт</button><button class='btn-stop'>Стоп</button></div>. Повертає елемент віджета.
 * Вимоги:
 * - Форматуйте секунди у MM:SS.
 * - Реалізуйте кнопки старт та стоп.
 * - Поверніть віджет.
 */
export function createCountdownTimerWidget(initialSeconds, onComplete) {
  // Створіть віджет таймера
  return undefined;
}

/**
 * Завдання 5.40: DOM: Комплексна валідація форми (Form Validation Summary) (Просунутий рівень)
 * Напишіть функцію createMiniFormValidator(formElement, onSubmitSuccess), яка перехоплює подію 'submit' на formElement (preventDefault). Перевіряє всі інпути з атрибутом 'required'. Якщо є порожні — додає їм клас 'field-error'. Якщо всі заповнені — збирає об'єкт { [name]: value } і викликає onSubmitSuccess(data).
 * Вимоги:
 * - Перехопіть подію 'submit' через e.preventDefault().
 * - Знайдіть усі input[required].
 * - Призначте клас 'field-error' для порожніх полів.
 * - Якщо помилок немає — зберіть дані форми та викличте onSubmitSuccess.
 */
export function createMiniFormValidator(formElement, onSubmitSuccess) {
  // Реалізуйте валідацію форми перед відправкою
  return undefined;
}

