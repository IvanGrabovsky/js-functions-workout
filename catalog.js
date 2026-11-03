// Каталог завдань курсу "JS Functions Mastery Workout" (Модуль 7: Функції)
// Еталонні рішення надійно зашифровані AES-256-GCM.
export const MODULES = [
  {
    "idx": 1,
    "id": "01-syntax-params-return",
    "title": "Частина 1: Синтаксис функцій, параметри та повернення значень",
    "shortTitle": "1. Синтаксис, параметри та return",
    "desc": "Що таке функція, Function Declaration vs Expression vs Arrow, параметри за замовчуванням, Rest ...args, Early Return, валідація рядків і чисел."
  },
  {
    "idx": 2,
    "id": "02-scope-hoisting-closures",
    "title": "Частина 2: Області видимості, Hoisting та Замикання (з циклами й масивами)",
    "shortTitle": "2. Області видимості та замикання",
    "desc": "Scope (Global, Function, Block), Scope Chain, Hoisting var vs let/const, Closures (замикання), приватний стан, робота з 2D матрицями, циклами й масивами."
  },
  {
    "idx": 3,
    "id": "03-hof-pipelines-patterns",
    "title": "Частина 3: Функції вищого порядку, пайплайни та бойові алгоритми",
    "shortTitle": "3. HOF, пайплайни та алгоритми",
    "desc": "First-Class Citizens, поліфіли map/filter/reduce, конвеєри pipe/compose, каррінг, мемоізація, рекурсія, ASCII-таблиці, бінарний пошук та Circuit Breaker."
  },
  {
    "idx": 4,
    "id": "04-exceptions-error-handling",
    "title": "Частина 4: Винятки та обробка помилок (try...catch...finally, throw)",
    "shortTitle": "4. Винятки та try...catch...finally",
    "desc": "Що таке виняток, типи стандартних помилок (TypeError, RangeError тощо), try catch finally, оператор throw, кастомні класи помилок, defensive programming."
  },
  {
    "idx": 5,
    "id": "05-dom-mini-projects",
    "title": "Частина 5: DOM Міні-проекти (Інтерактивні компоненти та HTML/CSS)",
    "shortTitle": "5. DOM Міні-проекти",
    "desc": "Створення та маніпуляція DOM-елементами, робота з подіями (click, input, change, submit), перемикання класів, таби, модалки, списки задач, форми та анімації."
  }
];

export const ALL_TASKS = [
  {
    "id": "1.1",
    "moduleIdx": 1,
    "name": "simpleGreeting",
    "title": "Оголошення функції (Function Declaration): Привітання",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію simpleGreeting(name), яка повертає рядок 'Привіт, {name}!' або 'Привіт, гостю!' якщо ім'я не передано чи складається лише з пробілів.",
    "reqs": [
      "Перевірте, чи name є непорожнім рядком через trim().",
      "Поверніть шаблонний рядок 'Привіт, {name}!' або 'Привіт, гостю!'."
    ],
    "starterParams": "name",
    "starterBody": "// Поверніть привітання",
    "tests": [
      {
        "expr": "simpleGreeting('Олена')",
        "expected": "Привіт, Олена!"
      },
      {
        "expr": "simpleGreeting('Тарас')",
        "expected": "Привіт, Тарас!"
      },
      {
        "expr": "simpleGreeting('')",
        "expected": "Привіт, гостю!"
      },
      {
        "expr": "simpleGreeting('   ')",
        "expected": "Привіт, гостю!"
      },
      {
        "expr": "simpleGreeting(undefined)",
        "expected": "Привіт, гостю!"
      }
    ]
  },
  {
    "id": "1.2",
    "moduleIdx": 1,
    "name": "calculateRectangleArea",
    "title": "Обчислення площі прямокутника з валідацією",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію calculateRectangleArea(width, height), яка приймає ширину і висоту та повертає площу (width * height). Якщо будь-який з аргументів <= 0 або не є числом — поверніть 0.",
    "reqs": [
      "Перевірте: typeof width === 'number' && typeof height === 'number'.",
      "Перевірте, що обидва аргументи строго більші за 0.",
      "Поверніть добуток або 0."
    ],
    "starterParams": "width, height",
    "starterBody": "// Обчисліть та поверніть площу",
    "tests": [
      {
        "expr": "calculateRectangleArea(5, 10)",
        "expected": 50
      },
      {
        "expr": "calculateRectangleArea(7, 3)",
        "expected": 21
      },
      {
        "expr": "calculateRectangleArea(-5, 10)",
        "expected": 0
      },
      {
        "expr": "calculateRectangleArea(5, 0)",
        "expected": 0
      },
      {
        "expr": "calculateRectangleArea('5', 10)",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.3",
    "moduleIdx": 1,
    "name": "addExpression",
    "title": "Функціональний вираз (Function Expression)",
    "level": "Базовий рівень",
    "goal": "Створіть функціональний вираз, збережений у змінну addExpression, який приймає два числа a та b і повертає їхню суму (a + b). Забезпечте значення за замовчуванням 0 для обох аргументів.",
    "reqs": [
      "Використайте синтаксис: const addExpression = function(a = 0, b = 0) { ... }.",
      "Поверніть a + b."
    ],
    "starterParams": "a = 0, b = 0",
    "starterBody": "// Поверніть суму a та b",
    "tests": [
      {
        "expr": "addExpression(10, 20)",
        "expected": 30
      },
      {
        "expr": "addExpression(5)",
        "expected": 5
      },
      {
        "expr": "addExpression()",
        "expected": 0
      },
      {
        "expr": "addExpression(-5, 5)",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.4",
    "moduleIdx": 1,
    "name": "multiplyArrow",
    "title": "Стрілкова функція (Arrow Function) з неявним поверненням",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію multiplyArrow(x, y), яка перемножує два числа x та y за допомогою компактного синтаксису стрілкової функції (x, y) => x * y.",
    "reqs": [
      "Використайте синтаксис стрілкової функції.",
      "Поверніть x * y."
    ],
    "starterParams": "x, y",
    "starterBody": "// Поверніть x * y",
    "tests": [
      {
        "expr": "multiplyArrow(4, 5)",
        "expected": 20
      },
      {
        "expr": "multiplyArrow(3, -2)",
        "expected": -6
      },
      {
        "expr": "multiplyArrow(0, 100)",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.5",
    "moduleIdx": 1,
    "name": "formatPriceCurrency",
    "title": "Форматування рядка валюти (Функції + Рядки)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію formatPriceCurrency(amount, currency = 'грн'), яка приймає число і повертає рядок формату '150.00 грн' (округлення до 2 знаків після коми через .toFixed(2)). Якщо передано некоректне число — поверніть '0.00 грн'.",
    "reqs": [
      "Перевірте, чи є amount числом.",
      "Використайте amount.toFixed(2).",
      "Сформуйте рядок `${formatted} ${currency}`."
    ],
    "starterParams": "amount, currency = 'грн'",
    "starterBody": "// Відформатуйте ціну з валютою",
    "tests": [
      {
        "expr": "formatPriceCurrency(150)",
        "expected": "150.00 грн"
      },
      {
        "expr": "formatPriceCurrency(49.9, '$')",
        "expected": "49.90 $"
      },
      {
        "expr": "formatPriceCurrency(null)",
        "expected": "0.00 грн"
      }
    ]
  },
  {
    "id": "1.6",
    "moduleIdx": 1,
    "name": "getUserRoleAccess",
    "title": "Раннє повернення (Early Return / Guard Clauses)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію getUserRoleAccess(role), яка повертає рівень доступу: 'admin' -> 'full', 'manager' -> 'limited', 'guest' -> 'read-only', для будь-яких інших значень — 'forbidden'. Використайте патерн Guard Clause.",
    "reqs": [
      "Використайте ранній вихід (early return) для кожної ролі.",
      "Обробіть нерядкові або невідомі значення, повернувши 'forbidden'."
    ],
    "starterParams": "role",
    "starterBody": "// Поверніть рівень доступу за роллю",
    "tests": [
      {
        "expr": "getUserRoleAccess('admin')",
        "expected": "full"
      },
      {
        "expr": "getUserRoleAccess('manager')",
        "expected": "limited"
      },
      {
        "expr": "getUserRoleAccess('guest')",
        "expected": "read-only"
      },
      {
        "expr": "getUserRoleAccess('hacker')",
        "expected": "forbidden"
      },
      {
        "expr": "getUserRoleAccess(null)",
        "expected": "forbidden"
      }
    ]
  },
  {
    "id": "1.7",
    "moduleIdx": 1,
    "name": "createConfigObject",
    "title": "Повернення об'єкта зі стрілкової функції: ({ ... })",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createConfigObject(host, port, ssl = false), яка повертає об'єкт конфігурації: { host, port, ssl, url }. Де url сформовано як `${ssl ? 'https' : 'http'}://${host}:${port}`.",
    "reqs": [
      "Сформуйте властивості: host, port, ssl, url.",
      "Поверніть готовий об'єкт."
    ],
    "starterParams": "host, port, ssl = false",
    "starterBody": "// Поверніть об'єкт конфігурації",
    "tests": [
      {
        "expr": "createConfigObject('localhost', 3000)",
        "expected": {
          "host": "localhost",
          "port": 3000,
          "ssl": false,
          "url": "http://localhost:3000"
        }
      },
      {
        "expr": "createConfigObject('supabase.co', 443, true)",
        "expected": {
          "host": "supabase.co",
          "port": 443,
          "ssl": true,
          "url": "https://supabase.co:443"
        }
      }
    ]
  },
  {
    "id": "1.8",
    "moduleIdx": 1,
    "name": "sumAllArgs",
    "title": "Залишок параметрів (Rest Parameters: ...numbers)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію sumAllArgs(...numbers), яка приймає довільну кількість числових аргументів через rest-параметр ...numbers і повертає їхню суму. Якщо аргументи не передані — поверніть 0.",
    "reqs": [
      "Використайте rest-параметр ...numbers.",
      "Просумуйте лише валідні числа.",
      "Поверніть суму."
    ],
    "starterParams": "...numbers",
    "starterBody": "// Просумуйте всі передані аргументи",
    "tests": [
      {
        "expr": "sumAllArgs(1, 2, 3, 4, 5)",
        "expected": 15
      },
      {
        "expr": "sumAllArgs(10, -5, 20)",
        "expected": 25
      },
      {
        "expr": "sumAllArgs()",
        "expected": 0
      },
      {
        "expr": "sumAllArgs(10, 'invalid', null, 5)",
        "expected": 15
      }
    ]
  },
  {
    "id": "1.9",
    "moduleIdx": 1,
    "name": "formatFullName",
    "title": "Форматування ПІБ з параметрами за замовчуванням",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію formatFullName(firstName, lastName = '', middleName = ''), яка об'єднує складові імені в один рядок. Якщо firstName порожній — поверніть 'Анонім'.",
    "reqs": [
      "Якщо firstName порожній — поверніть 'Анонім'.",
      "Зберіть непорожні частини [firstName, middleName, lastName].",
      "Об'єднайте через один пробіл."
    ],
    "starterParams": "firstName, lastName = '', middleName = ''",
    "starterBody": "// Відформатуйте повне ім'я",
    "tests": [
      {
        "expr": "formatFullName('Іван', 'Франко', 'Якович')",
        "expected": "Іван Якович Франко"
      },
      {
        "expr": "formatFullName('Тарас', 'Шевченко')",
        "expected": "Тарас Шевченко"
      },
      {
        "expr": "formatFullName('')",
        "expected": "Анонім"
      }
    ]
  },
  {
    "id": "1.10",
    "moduleIdx": 1,
    "name": "clampNumber",
    "title": "Обмеження числа в діапазоні (Clamp pattern)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію clampNumber(value, min, max), яка обмежує число value в межах [min, max].",
    "reqs": [
      "Якщо value < min, повертається min.",
      "Якщо value > max, повертається max.",
      "Інакше повертається value."
    ],
    "starterParams": "value, min, max",
    "starterBody": "// Обмежте число в діапазоні",
    "tests": [
      {
        "expr": "clampNumber(15, 0, 10)",
        "expected": 10
      },
      {
        "expr": "clampNumber(-5, 0, 10)",
        "expected": 0
      },
      {
        "expr": "clampNumber(7, 0, 10)",
        "expected": 7
      }
    ]
  },
  {
    "id": "1.11",
    "moduleIdx": 1,
    "name": "repeatStringFunction",
    "title": "Повторення рядка через цикл у функції (Функції + Рядки + Цикли)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію repeatStringFunction(str, count, delimiter = ''), яка за допомогою циклу for повторює рядок str рівно count разів через роздільник delimiter. Якщо count <= 0 — поверніть ''.",
    "reqs": [
      "Використайте цикл for.",
      "З'єднайте копії рядка через delimiter.",
      "Поверніть отриманий рядок."
    ],
    "starterParams": "str, count, delimiter = ''",
    "starterBody": "// Повторіть рядок count разів",
    "tests": [
      {
        "expr": "repeatStringFunction('JS', 3, '-')",
        "expected": "JS-JS-JS"
      },
      {
        "expr": "repeatStringFunction('code', 2)",
        "expected": "codecode"
      },
      {
        "expr": "repeatStringFunction('test', 0)",
        "expected": ""
      }
    ]
  },
  {
    "id": "1.12",
    "moduleIdx": 1,
    "name": "countVowelsInString",
    "title": "Підрахунок голосних літер (Функції + Цикл + Рядки)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію countVowelsInString(str), яка приймає рядок і за допомогою циклу підраховує кількість голосних літер (латинських a, e, i, o, u та українських а, е, є, и, і, ї, о, у, ю, я) незалежно від регістру.",
    "reqs": [
      "Пройдіться циклом по символах рядка.",
      "Перевірте, чи є символ голосною.",
      "Поверніть загальну кількість."
    ],
    "starterParams": "str",
    "starterBody": "// Порахуйте кількість голосних літер",
    "tests": [
      {
        "expr": "countVowelsInString('JavaScript')",
        "expected": 3
      },
      {
        "expr": "countVowelsInString('Київ')",
        "expected": 2
      },
      {
        "expr": "countVowelsInString('sky')",
        "expected": 0
      },
      {
        "expr": "countVowelsInString('')",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.13",
    "moduleIdx": 1,
    "name": "isPalindromeFunction",
    "title": "Перевірка паліндрому через функцію",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію isPalindromeFunction(word), яка перевіряє, чи є слово паліндромом (читається однаково вперед і назад). Ігноруйте регістр.",
    "reqs": [
      "Приведіть рядок до нижнього регістру.",
      "Порівняйте символи з початку і кінця циклом або перевернутим рядком.",
      "Поверніть true або false."
    ],
    "starterParams": "word",
    "starterBody": "// Перевірте чи слово є паліндромом",
    "tests": [
      {
        "expr": "isPalindromeFunction('Radar')",
        "expected": true
      },
      {
        "expr": "isPalindromeFunction('level')",
        "expected": true
      },
      {
        "expr": "isPalindromeFunction('supabase')",
        "expected": false
      }
    ]
  },
  {
    "id": "1.14",
    "moduleIdx": 1,
    "name": "discountCalculator",
    "title": "Калькулятор вартості зі знижкою та промокодом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію discountCalculator(price, discountPercent, promoCode = null), яка обчислює фінальну вартість. Якщо promoCode === 'SUPABASE', додається додаткова фіксована знижка 100 грн після відсотка. Ціна не може бути < 0.",
    "reqs": [
      "Обчисліть ціну зі знижкою.",
      "Якщо promoCode === 'SUPABASE', відніміть 100.",
      "Поверніть число не менше 0."
    ],
    "starterParams": "price, discountPercent, promoCode = null",
    "starterBody": "// Обчисліть фінальну вартість",
    "tests": [
      {
        "expr": "discountCalculator(1000, 10)",
        "expected": 900
      },
      {
        "expr": "discountCalculator(1000, 10, 'SUPABASE')",
        "expected": 800
      },
      {
        "expr": "discountCalculator(80, 0, 'SUPABASE')",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.15",
    "moduleIdx": 1,
    "name": "isFunction",
    "title": "Перевірка чи значення є функцією: typeof === 'function'",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію isFunction(val), яка повертає true, якщо передане значення є функцією, і false для всіх інших типів.",
    "reqs": [
      "Використайте typeof val === 'function'.",
      "Поверніть булеве значення."
    ],
    "starterParams": "val",
    "starterBody": "// Перевірте чи val є функцією",
    "tests": [
      {
        "expr": "isFunction(() => {})",
        "expected": true
      },
      {
        "expr": "isFunction(function test() {})",
        "expected": true
      },
      {
        "expr": "isFunction('function')",
        "expected": false
      },
      {
        "expr": "isFunction(null)",
        "expected": false
      }
    ]
  },
  {
    "id": "1.16",
    "moduleIdx": 1,
    "name": "safeInvoke",
    "title": "Безпечний виклик функції (Safe Invocation)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію safeInvoke(fn, ...args), яка перевіряє, чи є перший аргумент функцією. Якщо так — викликає fn(...args) і повертає результат, інакше повертає null.",
    "reqs": [
      "Якщо typeof fn === 'function': поверніть fn(...args).",
      "Інакше поверніть null."
    ],
    "starterParams": "fn, ...args",
    "starterBody": "// Викличте fn якщо вона валідна або поверніть null",
    "tests": [
      {
        "expr": "safeInvoke((a, b) => a + b, 5, 7)",
        "expected": 12
      },
      {
        "expr": "safeInvoke(x => x.toUpperCase(), 'supabase')",
        "expected": "SUPABASE"
      },
      {
        "expr": "safeInvoke(null, 1, 2)",
        "expected": null
      }
    ]
  },
  {
    "id": "1.17",
    "moduleIdx": 1,
    "name": "createMathOperation",
    "title": "Фабрика арифметичних операцій за типом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMathOperation(opName), яка приймає назву ('add', 'subtract', 'multiply', 'divide') і повертає відповідну бінарну функцію (a, b) => result. Для невідомої операції поверніть null.",
    "reqs": [
      "Реалізуйте операції add, subtract, multiply, divide.",
      "Для невідомих поверніть null."
    ],
    "starterParams": "opName",
    "starterBody": "// Поверніть функцію відповідної операції",
    "tests": [
      {
        "expr": "createMathOperation('add')(10, 5)",
        "expected": 15
      },
      {
        "expr": "createMathOperation('multiply')(4, 5)",
        "expected": 20
      },
      {
        "expr": "createMathOperation('divide')(20, 4)",
        "expected": 5
      },
      {
        "expr": "createMathOperation('unknown')",
        "expected": null
      }
    ]
  },
  {
    "id": "1.18",
    "moduleIdx": 1,
    "name": "validatePasswordStrength",
    "title": "Валідація пароля (Функція + Рядки + Регулярні вирази)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію validatePasswordStrength(password), яка повертає об'єкт { isValid: boolean, errors: string[] }. Вимоги: довжина >= 8, містить цифру, містить велику літеру.",
    "reqs": [
      "Перевірте довжину >= 8.",
      "Перевірте наявність хоча б 1 цифри та 1 великої літери.",
      "Поверніть об'єкт { isValid, errors }."
    ],
    "starterParams": "password",
    "starterBody": "// Перевірте пароль та поверніть звіт",
    "tests": [
      {
        "expr": "validatePasswordStrength('SuperPass2026')",
        "expected": {
          "isValid": true,
          "errors": []
        }
      },
      {
        "expr": "validatePasswordStrength('short')",
        "expected": {
          "isValid": false,
          "errors": [
            "Мінімум 8 символів",
            "Має містити хоча б одну цифру",
            "Має містити хоча б одну велику літеру"
          ]
        }
      }
    ]
  },
  {
    "id": "1.19",
    "moduleIdx": 1,
    "name": "createMultiplier",
    "title": "Фабрика функцій-множників (Function returning function)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createMultiplier(factor), яка повертає функцію (number) => number * factor.",
    "reqs": [
      "Поверніть функцію number => number * factor."
    ],
    "starterParams": "factor",
    "starterBody": "// Поверніть функцію-множник",
    "tests": [
      {
        "expr": "createMultiplier(3)(10)",
        "expected": 30
      },
      {
        "expr": "createMultiplier(2)(7)",
        "expected": 14
      }
    ]
  },
  {
    "id": "1.20",
    "moduleIdx": 1,
    "name": "flipArguments",
    "title": "Інверсія порядку аргументів (Flip pattern)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію flipArguments(fn), яка приймає функцію fn(a, b) і повертає нову функцію, що викликає fn(b, a).",
    "reqs": [
      "Поверніть функцію (a, b) => fn(b, a)."
    ],
    "starterParams": "fn",
    "starterBody": "// Поверніть функцію з інвертованими аргументами",
    "tests": [
      {
        "expr": "flipArguments((a, b) => a - b)(5, 20)",
        "expected": 15
      },
      {
        "expr": "flipArguments((a, b) => a / b)(2, 10)",
        "expected": 5
      }
    ]
  },
  {
    "id": "1.21",
    "moduleIdx": 1,
    "name": "extractWordsLongerThan",
    "title": "Фільтрація слів за довжиною (Функції + Рядки + Масиви)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію extractWordsLongerThan(text, minLength), яка розбиває рядок на слова (за пробілами) і повертає масив слів, довжина яких строго більша за minLength.",
    "reqs": [
      "Очистіть краї рядка та розбийте за /\\s+/.",
      "Відфільтруйте слова за умовою word.length > minLength.",
      "Поверніть масив слів."
    ],
    "starterParams": "text, minLength",
    "starterBody": "// Поверніть масив слів довше minLength",
    "tests": [
      {
        "expr": "extractWordsLongerThan('JavaScript is super fast and awesome', 4)",
        "expected": [
          "JavaScript",
          "super",
          "awesome"
        ]
      },
      {
        "expr": "extractWordsLongerThan('Short words only', 10)",
        "expected": []
      }
    ]
  },
  {
    "id": "1.22",
    "moduleIdx": 1,
    "name": "maskCreditCardFunction",
    "title": "Маскування банківської картки всередині функції",
    "level": "Середній рівень",
    "goal": "Напишіть функцію maskCreditCardFunction(cardNumber), яка приймає 16-значний номер картки і повертає рядок '1234-****-****-3456'. Якщо цифр не 16 — повертає вихідний рядок.",
    "reqs": [
      "Очистіть номер від дефісів і пробілів.",
      "Якщо цифр не 16 — поверніть вхідне значення.",
      "Сформуйте рядок `${first4}-****-****-${last4}`."
    ],
    "starterParams": "cardNumber",
    "starterBody": "// Замаскуйте номер картки",
    "tests": [
      {
        "expr": "maskCreditCardFunction('1234-5678-9012-3456')",
        "expected": "1234-****-****-3456"
      },
      {
        "expr": "maskCreditCardFunction('1111222233334444')",
        "expected": "1111-****-****-4444"
      },
      {
        "expr": "maskCreditCardFunction('123')",
        "expected": "123"
      }
    ]
  },
  {
    "id": "1.23",
    "moduleIdx": 1,
    "name": "countOccurrencesInArray",
    "title": "Підрахунок входжень елемента (Функції + Масиви + Цикли)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію countOccurrencesInArray(arr, target), яка за допомогою циклу for або for...of підраховує, скільки разів значення target зустрічається у масиві arr.",
    "reqs": [
      "Пройдіться циклом по масиву arr.",
      "Підрахуйте всі елементи, що строго дорівнюють target.",
      "Поверніть кількість."
    ],
    "starterParams": "arr, target",
    "starterBody": "// Підрахуйте входження target",
    "tests": [
      {
        "expr": "countOccurrencesInArray(['a', 'b', 'a', 'c', 'a'], 'a')",
        "expected": 3
      },
      {
        "expr": "countOccurrencesInArray([1, 2, 3, 2, 1], 2)",
        "expected": 2
      },
      {
        "expr": "countOccurrencesInArray([1, 2, 3], 99)",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.24",
    "moduleIdx": 1,
    "name": "generateRangeArray",
    "title": "Генерація послідовності чисел циклом (Функція + Цикл + Масив)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію generateRangeArray(start, end, step = 1), яка генерує та повертає масив чисел від start до end включно з кроком step. Якщо start > end або step <= 0 — поверніть [].",
    "reqs": [
      "Якщо start > end або step <= 0, поверніть [].",
      "Заповніть масив циклом for (let i = start; i <= end; i += step).",
      "Поверніть сформований масив."
    ],
    "starterParams": "start, end, step = 1",
    "starterBody": "// Згенеруйте масив чисел діапазону",
    "tests": [
      {
        "expr": "generateRangeArray(1, 5)",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "generateRangeArray(0, 10, 2)",
        "expected": [
          0,
          2,
          4,
          6,
          8,
          10
        ]
      },
      {
        "expr": "generateRangeArray(5, 1)",
        "expected": []
      }
    ]
  },
  {
    "id": "1.25",
    "moduleIdx": 1,
    "name": "sumArrayElements",
    "title": "Сума елементів масиву через функцію з циклом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію sumArrayElements(numbers), яка приймає масив чисел і за допомогою циклу for або while повертає їхню суму. Нечислові значення ігноруйте.",
    "reqs": [
      "Якщо numbers не масив — поверніть 0.",
      "Пройдіться циклом по елементах.",
      "Поверніть загальну суму."
    ],
    "starterParams": "numbers",
    "starterBody": "// Поверніть суму елементів масиву",
    "tests": [
      {
        "expr": "sumArrayElements([10, 20, 30])",
        "expected": 60
      },
      {
        "expr": "sumArrayElements([5, 'test', 15, null])",
        "expected": 20
      },
      {
        "expr": "sumArrayElements([])",
        "expected": 0
      }
    ]
  },
  {
    "id": "1.26",
    "moduleIdx": 1,
    "name": "reverseArrayManual",
    "title": "Реверс масиву вручну за допомогою циклу",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію reverseArrayManual(arr), яка приймає масив і повертає новий перевернутий масив БЕЗ використання вбудованого .reverse().",
    "reqs": [
      "Не використовуйте arr.reverse().",
      "Пройдіться циклом від arr.length - 1 до 0.",
      "Поверніть новий масив."
    ],
    "starterParams": "arr",
    "starterBody": "// Переверніть масив циклом",
    "tests": [
      {
        "expr": "reverseArrayManual([1, 2, 3, 4])",
        "expected": [
          4,
          3,
          2,
          1
        ]
      },
      {
        "expr": "reverseArrayManual(['a', 'b', 'c'])",
        "expected": [
          "c",
          "b",
          "a"
        ]
      },
      {
        "expr": "reverseArrayManual([])",
        "expected": []
      }
    ]
  },
  {
    "id": "1.27",
    "moduleIdx": 1,
    "name": "findMaxInArray",
    "title": "Пошук максимуму в масиві через цикл у функції",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію findMaxInArray(numbers), яка знаходить і повертає найбільше число в масиві за допомогою циклу. Якщо масив порожній — поверніть null.",
    "reqs": [
      "Якщо numbers порожній або не масив — поверніть null.",
      "Знайдіть максимальне значення через цикл for.",
      "Поверніть найбільше число."
    ],
    "starterParams": "numbers",
    "starterBody": "// Знайдіть максимальне число в масиві",
    "tests": [
      {
        "expr": "findMaxInArray([3, 7, 2, 9, 4])",
        "expected": 9
      },
      {
        "expr": "findMaxInArray([-10, -5, -20])",
        "expected": -5
      },
      {
        "expr": "findMaxInArray([])",
        "expected": null
      }
    ]
  },
  {
    "id": "1.28",
    "moduleIdx": 1,
    "name": "filterEvenNumbers",
    "title": "Фільтрація парних чисел циклом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію filterEvenNumbers(numbers), яка за допомогою циклу for або while відбирає тільки парні числа у новий масив.",
    "reqs": [
      "Не використовуйте вбудований .filter().",
      "Пройдіться циклом і зберіть числа з num % 2 === 0.",
      "Поверніть масив парних чисел."
    ],
    "starterParams": "numbers",
    "starterBody": "// Відфільтруйте парні числа циклом",
    "tests": [
      {
        "expr": "filterEvenNumbers([1, 2, 3, 4, 5, 6])",
        "expected": [
          2,
          4,
          6
        ]
      },
      {
        "expr": "filterEvenNumbers([7, 9, 11])",
        "expected": []
      }
    ]
  },
  {
    "id": "1.29",
    "moduleIdx": 1,
    "name": "formatListString",
    "title": "Форматування масиву рядків у нумерований список",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію formatListString(items), яка приймає масив рядків і за допомогою циклу формує єдиний рядок, де кожен елемент пронумеровано: '1. First\\n2. Second'. Якщо масив порожній — поверніть ''.",
    "reqs": [
      "Пройдіться циклом по елементах.",
      "Сформуйте рядки `${index + 1}. ${item}`.",
      "Об'єднайте через перенос рядка '\\n'."
    ],
    "starterParams": "items",
    "starterBody": "// Сформуйте нумерований список",
    "tests": [
      {
        "expr": "formatListString(['Auth', 'Database', 'Storage'])",
        "expected": "1. Auth\n2. Database\n3. Storage"
      },
      {
        "expr": "formatListString(['Single'])",
        "expected": "1. Single"
      },
      {
        "expr": "formatListString([])",
        "expected": ""
      }
    ]
  },
  {
    "id": "1.30",
    "moduleIdx": 1,
    "name": "capitalizeWordsInSentence",
    "title": "Капіталізація слів у реченні через функцію",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію capitalizeWordsInSentence(sentence), яка розбиває речення на слова, робить першу літеру кожного слова великою через цикл, і зшиває речення назад через пробіл.",
    "reqs": [
      "Розбийте рядок на слова.",
      "Для кожного слова: word[0].toUpperCase() + word.slice(1).toLowerCase().",
      "Об'єднайте назад через пробіл."
    ],
    "starterParams": "sentence",
    "starterBody": "// Капіталізуйте кожне слово в реченні",
    "tests": [
      {
        "expr": "capitalizeWordsInSentence('learn javascript functions')",
        "expected": "Learn Javascript Functions"
      },
      {
        "expr": "capitalizeWordsInSentence('SUPABASE DATABASE')",
        "expected": "Supabase Database"
      }
    ]
  },
  {
    "id": "1.31",
    "moduleIdx": 1,
    "name": "formatCurrencyUAH",
    "title": "Форматування грошової суми у гривнях (UAH)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію formatCurrencyUAH(amount), яка приймає числове значення та повертає рядок формату '1 250.00 ₴'. Якщо передано не число або NaN — повертає '0.00 ₴'.",
    "reqs": [
      "Перевірте typeof amount === 'number' && !Number.isNaN(amount).",
      "Округліть до 2 знаків після коми (toFixed(2)).",
      "Розділіть тисячі пробілом.",
      "Додайте символ ' ₴'."
    ],
    "starterParams": "amount",
    "starterBody": "// Відформатуйте суму у гривнях",
    "tests": [
      {
        "expr": "formatCurrencyUAH(1250)",
        "expected": "1 250.00 ₴"
      },
      {
        "expr": "formatCurrencyUAH(99.5)",
        "expected": "99.50 ₴"
      },
      {
        "expr": "formatCurrencyUAH(1000000)",
        "expected": "1 000 000.00 ₴"
      },
      {
        "expr": "formatCurrencyUAH(null)",
        "expected": "0.00 ₴"
      }
    ]
  },
  {
    "id": "1.32",
    "moduleIdx": 1,
    "name": "pluralizeUk",
    "title": "Відмінювання слів за числівниками (1 яблуко, 2 яблука, 5 яблук)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію pluralizeUk(count, one, few, many), яка обирає правильну граматичну форму слова в залежності від цілого числа count.",
    "reqs": [
      "Врахуйте правила української граматики: закінчення на 1 (крім 11) -> one.",
      "Закінчення на 2, 3, 4 (крім 12, 13, 14) -> few.",
      "Всі інші числа (0, 5-20, тощо) -> many."
    ],
    "starterParams": "count, one, few, many",
    "starterBody": "// Поверніть форму слова залежно від числа",
    "tests": [
      {
        "expr": "pluralizeUk(1, 'студент', 'студенти', 'студентів')",
        "expected": "студент"
      },
      {
        "expr": "pluralizeUk(3, 'студент', 'студенти', 'студентів')",
        "expected": "студенти"
      },
      {
        "expr": "pluralizeUk(5, 'студент', 'студенти', 'студентів')",
        "expected": "студентів"
      },
      {
        "expr": "pluralizeUk(21, 'бал', 'бали', 'балів')",
        "expected": "бал"
      },
      {
        "expr": "pluralizeUk(12, 'бал', 'бали', 'балів')",
        "expected": "балів"
      }
    ]
  },
  {
    "id": "1.33",
    "moduleIdx": 1,
    "name": "maskCreditCard",
    "title": "Маскування номера банківської картки",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію maskCreditCard(cardNumber, maskChar = '*'), яка залишає видимими перші 4 та останні 4 цифри номера, а всі символи між ними замінює на maskChar. Довжина має бути не менше 12 символів, інакше повертає 'INVALID_CARD'.",
    "reqs": [
      "Очистіть рядок від пробілів та дефісів.",
      "Якщо довжина < 12 — return 'INVALID_CARD'.",
      "Залиште перші 4 і останні 4 символи, а середину замаскуйте."
    ],
    "starterParams": "cardNumber, maskChar = '*'",
    "starterBody": "// Замаскуйте номер картки",
    "tests": [
      {
        "expr": "maskCreditCard('4111-2222-3333-4444')",
        "expected": "4111********4444"
      },
      {
        "expr": "maskCreditCard('123456789012', '#')",
        "expected": "1234####9012"
      },
      {
        "expr": "maskCreditCard('12345')",
        "expected": "INVALID_CARD"
      }
    ]
  },
  {
    "id": "1.34",
    "moduleIdx": 1,
    "name": "generateSlug",
    "title": "Генератор URL-slug із рядка заголовка",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію generateSlug(title), яка переводить рядок у нижній регістр, замінює всі пробіли та підкреслення на дефіс, прибирає спеціальні символи (залишає лише літери, цифри та дефіси) і видаляє дублі дефісів.",
    "reqs": [
      "Переведіть у toLowerCase().",
      "Замініть небажані символи на дефіси.",
      "Приберіть подвійні дефіси та дефіси на початку/кінці."
    ],
    "starterParams": "title",
    "starterBody": "// Створіть чистий URL slug",
    "tests": [
      {
        "expr": "generateSlug('JavaScript & React Fundamentals 2026!')",
        "expected": "javascript-react-fundamentals-2026"
      },
      {
        "expr": "generateSlug('  Модуль 7: Функції в JS   ')",
        "expected": "модуль-7-функції-в-js"
      }
    ]
  },
  {
    "id": "1.35",
    "moduleIdx": 1,
    "name": "secondsToHms",
    "title": "Конвертація секунд у читабельний час (HH:MM:SS)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію secondsToHms(seconds), яка приймає кількість секунд і повертає рядок 'ГГ:ХХ:СС' з двозначним заповненням нулями (padStart(2, '0')). Якщо seconds < 0 або не число — повертає '00:00:00'.",
    "reqs": [
      "Обчисліть години, хвилини та залишок секунд.",
      "Доповніть кожне число до 2 знаків через String(n).padStart(2, '0').",
      "Поверніть рядок через двокрапку."
    ],
    "starterParams": "seconds",
    "starterBody": "// Конвертуйте секунди у формат часу",
    "tests": [
      {
        "expr": "secondsToHms(3665)",
        "expected": "01:01:05"
      },
      {
        "expr": "secondsToHms(45)",
        "expected": "00:00:45"
      },
      {
        "expr": "secondsToHms(0)",
        "expected": "00:00:00"
      },
      {
        "expr": "secondsToHms(7200)",
        "expected": "02:00:00"
      }
    ]
  },
  {
    "id": "1.36",
    "moduleIdx": 1,
    "name": "calculateTaxDiscount",
    "title": "Калькулятор знижки з урахуванням ПДВ",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію calculateTaxDiscount(basePrice, discountPercent = 0, taxPercent = 20), яка застосовує знижку до basePrice, а потім нараховує податок. Повертає округлене до 2 знаків число.",
    "reqs": [
      "Ціна зі знижкою = basePrice * (1 - discountPercent / 100).",
      "Ціна з податком = ціна зі знижкою * (1 + taxPercent / 100).",
      "Поверніть число Number(res.toFixed(2))."
    ],
    "starterParams": "basePrice, discountPercent = 0, taxPercent = 20",
    "starterBody": "// Обчисліть фінальну вартість",
    "tests": [
      {
        "expr": "calculateTaxDiscount(100, 10, 20)",
        "expected": 108
      },
      {
        "expr": "calculateTaxDiscount(200, 0, 20)",
        "expected": 240
      },
      {
        "expr": "calculateTaxDiscount(50, 50, 0)",
        "expected": 25
      }
    ]
  },
  {
    "id": "1.37",
    "moduleIdx": 1,
    "name": "clampNumber",
    "title": "Обмеження числа в діапазоні (Clamp Helper)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію clampNumber(val, min, max), яка обмежує число val між мінімальним та максимальним значенням. Якщо val < min — повертає min, якщо val > max — повертає max, інакше val.",
    "reqs": [
      "Використайте Math.min та Math.max або умови if.",
      "Поверніть обмежене число."
    ],
    "starterParams": "val, min, max",
    "starterBody": "// Обмежте число діапазоном",
    "tests": [
      {
        "expr": "clampNumber(15, 0, 10)",
        "expected": 10
      },
      {
        "expr": "clampNumber(-5, 0, 10)",
        "expected": 0
      },
      {
        "expr": "clampNumber(7, 0, 10)",
        "expected": 7
      }
    ]
  },
  {
    "id": "1.38",
    "moduleIdx": 1,
    "name": "isPalindromeText",
    "title": "Перевірка тексту на паліндром без урахування регістру й розділових знаків",
    "level": "Середній рівень",
    "goal": "Напишіть функцію isPalindromeText(text), яка перевіряє, чи є фраза паліндромом (читається однаково вперед і назад). Ігнорує пробіли, коми, крапки та регістр літер.",
    "reqs": [
      "Очистіть рядок: приведіть до нижнього регістру та видаліть усі не-літери/цифри через регулярний вираз.",
      "Порівняйте рядок із його реверсом.",
      "Поверніть true або false."
    ],
    "starterParams": "text",
    "starterBody": "// Перевірте чи фраза є паліндромом",
    "tests": [
      {
        "expr": "isPalindromeText('А роза упала на лапу Азора')",
        "expected": true
      },
      {
        "expr": "isPalindromeText('racecar')",
        "expected": true
      },
      {
        "expr": "isPalindromeText('hello world')",
        "expected": false
      }
    ]
  },
  {
    "id": "1.39",
    "moduleIdx": 1,
    "name": "truncateWords",
    "title": "Обрізання тексту за кількістю слів з трикрапкою",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію truncateWords(text, maxWords = 5), яка розбиває текст на слова. Якщо слів більше за maxWords — повертає перші maxWords слів і додає '...'. Якщо менше або дорівнює — повертає весь текст без змін.",
    "reqs": [
      "Розбийте рядок на слова за пробілами (\\s+).",
      "Порівняйте кількість слів із maxWords.",
      "Поверніть обрізаний рядок з '...' або вихідний рядок."
    ],
    "starterParams": "text, maxWords = 5",
    "starterBody": "// Обріжте текст за кількістю слів",
    "tests": [
      {
        "expr": "truncateWords('Один два три чотири пʼять шість сім', 4)",
        "expected": "Один два три чотири..."
      },
      {
        "expr": "truncateWords('Короткий текст', 5)",
        "expected": "Короткий текст"
      }
    ]
  },
  {
    "id": "1.40",
    "moduleIdx": 1,
    "name": "parseQueryString",
    "title": "Парсинг URL Query String в об'єкт параметрів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію parseQueryString(queryString), яка приймає рядок параметрів URL (наприклад, '?page=2&sort=asc&tab=profile' або 'page=2&sort=asc') і перетворює його на об'єкт { page: '2', sort: 'asc', tab: 'profile' }.",
    "reqs": [
      "Приберіть знак '?' на початку за наявності.",
      "Розбийте за символом '&'.",
      "Розбийте кожну пару за '=' та запишіть у результат."
    ],
    "starterParams": "queryString",
    "starterBody": "// Перетворіть query string в об'єкт",
    "tests": [
      {
        "expr": "parseQueryString('?page=2&sort=asc&tab=profile')",
        "expected": {
          "page": "2",
          "sort": "asc",
          "tab": "profile"
        }
      },
      {
        "expr": "parseQueryString('name=%D0%86%D0%B2%D0%B0%D0%BD&role=admin')",
        "expected": {
          "name": "Іван",
          "role": "admin"
        }
      },
      {
        "expr": "parseQueryString('')",
        "expected": {}
      }
    ]
  },
  {
    "id": "2.1",
    "moduleIdx": 2,
    "name": "createCounter",
    "title": "Класичне замикання (Closure): Незалежний лічильник",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCounter(initial = 0), яка повертає функцію. Кожен виклик цієї повернутої функції повинен збільшувати закриту змінну на 1 та повертати її нове значення.",
    "reqs": [
      "Оголосіть змінну count всередині createCounter.",
      "Поверніть функцію () => ++count.",
      "Кожен екземпляр повинен мати ізольований стан."
    ],
    "starterParams": "initial = 0",
    "starterBody": "// Поверніть функцію-лічильник",
    "tests": [
      {
        "expr": "(() => { const c = createCounter(0); return [c(), c(), c()]; })()",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "(() => { const c1 = createCounter(10); const c2 = createCounter(100); return [c1(), c2(), c1()]; })()",
        "expected": [
          11,
          101,
          12
        ]
      }
    ]
  },
  {
    "id": "2.2",
    "moduleIdx": 2,
    "name": "createBankAccount",
    "title": "Приватний стан банківського рахунку (Private State)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBankAccount(initialBalance = 0), яка інкапсулює баланс і повертає методи: getBalance(), deposit(amount), withdraw(amount).",
    "reqs": [
      "Баланс повинен зберігатися виключно у замиканні.",
      "deposit додає кошти при amount > 0 і повертає true.",
      "withdraw списує кошти при достатності балансу і повертає true, інакше false."
    ],
    "starterParams": "initialBalance = 0",
    "starterBody": "// Створіть банківський рахунок",
    "tests": [
      {
        "expr": "(() => { const acc = createBankAccount(100); acc.deposit(50); const w1 = acc.withdraw(30); const w2 = acc.withdraw(200); return [acc.getBalance(), w1, w2]; })()",
        "expected": [
          120,
          true,
          false
        ]
      }
    ]
  },
  {
    "id": "2.3",
    "moduleIdx": 2,
    "name": "createUniqueIdGenerator",
    "title": "Генератор послідовних ID з префіксом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createUniqueIdGenerator(prefix = 'id_'), яка повертає функцію генерації унікального ID. Кожен виклик повертає `${prefix}${seq}` ('id_1', 'id_2'...).",
    "reqs": [
      "Збережіть лічильник у замиканні.",
      "Повертайте рядок виду `${prefix}${seq}`."
    ],
    "starterParams": "prefix = 'id_'",
    "starterBody": "// Поверніть генератор ідентифікаторів",
    "tests": [
      {
        "expr": "(() => { const gen = createUniqueIdGenerator('user_'); return [gen(), gen(), gen()]; })()",
        "expected": [
          "user_1",
          "user_2",
          "user_3"
        ]
      }
    ]
  },
  {
    "id": "2.4",
    "moduleIdx": 2,
    "name": "createListStore",
    "title": "Реактивне сховище списку (Замикання + Масиви)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createListStore(initialItems = []), яка створює приватний масив у замиканні і надає методи: add(item), remove(item), getAll(), count().",
    "reqs": [
      "getAll() повертає копію масиву [...items].",
      "remove(item) видаляє перше входження елемента.",
      "count() повертає поточну кількість елементів."
    ],
    "starterParams": "initialItems = []",
    "starterBody": "// Створіть сховище списку",
    "tests": [
      {
        "expr": "(() => { const s = createListStore(['apple', 'banana']); s.add('cherry'); s.remove('banana'); return [s.getAll(), s.count()]; })()",
        "expected": [
          [
            "apple",
            "cherry"
          ],
          2
        ]
      }
    ]
  },
  {
    "id": "2.5",
    "moduleIdx": 2,
    "name": "createAccumulator",
    "title": "Акумулятор значень через замикання",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createAccumulator(start = 0), яка повертає функцію (val). Кожен виклик додає val до внутрішньої суми і повертає актуальний підсумок.",
    "reqs": [
      "Збережіть суму у замиканні.",
      "Додайте val і поверніть нову суму."
    ],
    "starterParams": "start = 0",
    "starterBody": "// Поверніть акумулятор",
    "tests": [
      {
        "expr": "(() => { const acc = createAccumulator(5); return [acc(10), acc(20), acc(-5)]; })()",
        "expected": [
          15,
          35,
          30
        ]
      }
    ]
  },
  {
    "id": "2.6",
    "moduleIdx": 2,
    "name": "createToggle",
    "title": "Двопозиційний перемикач (Toggle closure)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createToggle(initialState = false), яка повертає функцію. Кожен виклик інвертує стан (true <-> false) та повертає його.",
    "reqs": [
      "Збережіть стан у замиканні.",
      "Інвертуйте стан при виклику."
    ],
    "starterParams": "initialState = false",
    "starterBody": "// Поверніть перемикач",
    "tests": [
      {
        "expr": "(() => { const t = createToggle(false); return [t(), t(), t(), t()]; })()",
        "expected": [
          true,
          false,
          true,
          false
        ]
      }
    ]
  },
  {
    "id": "2.7",
    "moduleIdx": 2,
    "name": "createLimitedCaller",
    "title": "Обмеження кількості викликів (Call Limiter)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createLimitedCaller(fn, maxCalls), яка дозволяє виконати fn не більше maxCalls разів. Після цього повертає рядок 'Call limit reached'.",
    "reqs": [
      "Збережіть лічильник викликів.",
      "Якщо ліміт перевищено — поверніть 'Call limit reached'."
    ],
    "starterParams": "fn, maxCalls",
    "starterBody": "// Обмежте кількість викликів",
    "tests": [
      {
        "expr": "(() => { const l = createLimitedCaller(x => x * 2, 2); return [l(5), l(10), l(15)]; })()",
        "expected": [
          10,
          20,
          "Call limit reached"
        ]
      }
    ]
  },
  {
    "id": "2.8",
    "moduleIdx": 2,
    "name": "createEventTracker",
    "title": "Трекер подій з історією у замиканні (Замикання + Масиви)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createEventTracker(), яка повертає методи: track(eventName, data), getHistory(), reset(). Кожен виклик track додає подію з порядковим номером order.",
    "reqs": [
      "Збережіть історію в масиві.",
      "getHistory() повертає копію масиву.",
      "reset() очищає історію."
    ],
    "starterParams": "",
    "starterBody": "// Створіть трекер подій",
    "tests": [
      {
        "expr": "(() => { const t = createEventTracker(); t.track('click', { btn: 'save' }); t.track('submit'); return t.getHistory(); })()",
        "expected": [
          {
            "eventName": "click",
            "data": {
              "btn": "save"
            },
            "order": 1
          },
          {
            "eventName": "submit",
            "data": null,
            "order": 2
          }
        ]
      }
    ]
  },
  {
    "id": "2.9",
    "moduleIdx": 2,
    "name": "createRateLimiter",
    "title": "Rate Limiter запитів з методом скидання",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createRateLimiter(maxRequests), яка повертає функцію canRequest(). Вона повертає true до maxRequests разів, потім false. Метод canRequest.reset() скидає ліміт.",
    "reqs": [
      "Збережіть лічильник запитів у замиканні.",
      "Додайте метод reset() до функції."
    ],
    "starterParams": "maxRequests",
    "starterBody": "// Створіть Rate Limiter",
    "tests": [
      {
        "expr": "(() => { const r = createRateLimiter(2); const res = [r(), r(), r()]; r.reset(); res.push(r()); return res; })()",
        "expected": [
          true,
          true,
          false,
          true
        ]
      }
    ]
  },
  {
    "id": "2.10",
    "moduleIdx": 2,
    "name": "createStackWithClosure",
    "title": "Стек (LIFO) на замиканнях",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createStackWithClosure(), яка реалізує Стек: push(item), pop(), peek(), isEmpty(), size().",
    "reqs": [
      "Масив стека прихований у замиканні.",
      "pop() повертає останній доданий елемент або undefined."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте стек",
    "tests": [
      {
        "expr": "(() => { const s = createStackWithClosure(); s.push(10); s.push(20); const top = s.peek(); const p1 = s.pop(); return [top, p1, s.size(), s.isEmpty()]; })()",
        "expected": [
          20,
          20,
          1,
          false
        ]
      }
    ]
  },
  {
    "id": "2.11",
    "moduleIdx": 2,
    "name": "createQueueWithClosure",
    "title": "Черга (FIFO) на замиканнях",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createQueueWithClosure(), яка реалізує Чергу: enqueue(item), dequeue(), peek(), isEmpty(), size().",
    "reqs": [
      "enqueue додає в кінець черги.",
      "dequeue повертає і видаляє перший елемент."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте чергу",
    "tests": [
      {
        "expr": "(() => { const q = createQueueWithClosure(); q.enqueue('A'); q.enqueue('B'); return [q.dequeue(), q.peek(), q.size()]; })()",
        "expected": [
          "A",
          "B",
          1
        ]
      }
    ]
  },
  {
    "id": "2.12",
    "moduleIdx": 2,
    "name": "createIdFilter",
    "title": "Фільтр відкидання повторних ідентифікаторів (Дедуплікація)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createIdFilter(), яка повертає функцію (id) => boolean. Вона повертає true, якщо id бачиться вперше, і false для дублікатів.",
    "reqs": [
      "Використайте Set у замиканні.",
      "Поверніть true для унікальних, false для повторів."
    ],
    "starterParams": "",
    "starterBody": "// Поверніть фільтр дублікатів",
    "tests": [
      {
        "expr": "(() => { const filter = createIdFilter(); return [filter('a'), filter('b'), filter('a'), filter('c')]; })()",
        "expected": [
          true,
          true,
          false,
          true
        ]
      }
    ]
  },
  {
    "id": "2.13",
    "moduleIdx": 2,
    "name": "createCounterWithLimit",
    "title": "Лічильник з діапазонними межами [min, max]",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCounterWithLimit(min, max, start = min), яка надає методи: inc(), dec(), value(). Значення не виходить за межі [min, max].",
    "reqs": [
      "inc() збільшує, але не вище max.",
      "dec() зменшує, але не нижче min."
    ],
    "starterParams": "min, max, start = min",
    "starterBody": "// Створіть лічильник з межами",
    "tests": [
      {
        "expr": "(() => { const c = createCounterWithLimit(0, 3, 2); return [c.inc(), c.inc(), c.dec(), c.dec(), c.dec()]; })()",
        "expected": [
          3,
          3,
          2,
          1,
          0
        ]
      }
    ]
  },
  {
    "id": "2.14",
    "moduleIdx": 2,
    "name": "createSessionTimer",
    "title": "Форматування часу сесії HH:MM:SS через замикання",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createSessionTimer(), яка повертає методи: tick(seconds), getFormattedTime() ('HH:MM:SS'), reset().",
    "reqs": [
      "Збережіть кількість секунд.",
      "Форматуйте через padStart(2, '0')."
    ],
    "starterParams": "",
    "starterBody": "// Створіть таймер сесії",
    "tests": [
      {
        "expr": "(() => { const timer = createSessionTimer(); timer.tick(3665); return timer.getFormattedTime(); })()",
        "expected": "01:01:05"
      },
      {
        "expr": "(() => { const timer = createSessionTimer(); timer.tick(75); return timer.getFormattedTime(); })()",
        "expected": "00:01:15"
      }
    ]
  },
  {
    "id": "2.15",
    "moduleIdx": 2,
    "name": "matrixRowSumFunction",
    "title": "Підрахунок сум рядків двовимірної матриці (Функція + Вкладені цикли)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію matrixRowSumFunction(matrix), яка за допомогою вкладених циклів for обчислює суму кожного рядка 2D-матриці і повертає масив сум. Якщо matrix порожня — поверніть [].",
    "reqs": [
      "Використайте вкладені цикли для обходу рядків та колонок.",
      "Для кожного рядка просумуйте всі числа.",
      "Поверніть масив сум рядків."
    ],
    "starterParams": "matrix",
    "starterBody": "// Обчисліть суму кожного рядка матриці",
    "tests": [
      {
        "expr": "matrixRowSumFunction([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": [
          6,
          15,
          24
        ]
      },
      {
        "expr": "matrixRowSumFunction([[10], [20, 30]])",
        "expected": [
          10,
          50
        ]
      },
      {
        "expr": "matrixRowSumFunction([])",
        "expected": []
      }
    ]
  },
  {
    "id": "2.16",
    "moduleIdx": 2,
    "name": "findMatrixMaxCoordinates",
    "title": "Пошук координат максимуму в матриці",
    "level": "Середній рівень",
    "goal": "Напишіть функцію findMatrixMaxCoordinates(matrix), яка за допомогою циклів знаходить найбільший елемент у 2D-матриці і повертає об'єкт { maxVal, row, col }. Якщо матриця порожня — поверніть null.",
    "reqs": [
      "Пройдіться рядками і стовпчиками вкладеними циклами.",
      "Знайдіть максимальне число та збережіть координати [row, col].",
      "Поверніть { maxVal, row, col } або null."
    ],
    "starterParams": "matrix",
    "starterBody": "// Знайдіть координати максимуму в матриці",
    "tests": [
      {
        "expr": "findMatrixMaxCoordinates([[1, 5, 2], [8, 3, 4]])",
        "expected": {
          "maxVal": 8,
          "row": 1,
          "col": 0
        }
      },
      {
        "expr": "findMatrixMaxCoordinates([[10, 20], [40, 30]])",
        "expected": {
          "maxVal": 40,
          "row": 1,
          "col": 0
        }
      },
      {
        "expr": "findMatrixMaxCoordinates([])",
        "expected": null
      }
    ]
  },
  {
    "id": "2.17",
    "moduleIdx": 2,
    "name": "countWordsFrequencyFunction",
    "title": "Частотний словник слів через функцію (Функції + Рядки + Цикл)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію countWordsFrequencyFunction(text), яка розбиває текст на слова, очищає від розділових знаків, приводить до нижнього регістру та за допомогою циклу рахує частоту появи кожного слова. Повертає об'єкт { word: count }.",
    "reqs": [
      "Приведіть рядок до нижнього регістру та приберіть пунктуацію.",
      "Пройдіться циклом по словах.",
      "Накопичіть частоту в об'єкті."
    ],
    "starterParams": "text",
    "starterBody": "// Порахуйте частоту слів у тексті",
    "tests": [
      {
        "expr": "countWordsFrequencyFunction('Supabase is great, supabase is fast')",
        "expected": {
          "supabase": 2,
          "is": 2,
          "great": 1,
          "fast": 1
        }
      },
      {
        "expr": "countWordsFrequencyFunction('Code, code, CODE!')",
        "expected": {
          "code": 3
        }
      }
    ]
  },
  {
    "id": "2.18",
    "moduleIdx": 2,
    "name": "filterAndSumTransactions",
    "title": "Фільтрація та підсумок транзакцій за типом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію filterAndSumTransactions(transactions, targetType), яка приймає масив об'єктів { type: 'income'|'expense', amount: number } і за допомогою циклу підраховує загальну суму тільки тих транзакцій, де type === targetType.",
    "reqs": [
      "Пройдіться циклом по транзакціях.",
      "Додавайте amount якщо type === targetType.",
      "Поверніть загальну суму."
    ],
    "starterParams": "transactions, targetType",
    "starterBody": "// Підсумуйте транзакції відповідного типу",
    "tests": [
      {
        "expr": "filterAndSumTransactions([{ type: 'income', amount: 1000 }, { type: 'expense', amount: 200 }, { type: 'income', amount: 500 }], 'income')",
        "expected": 1500
      },
      {
        "expr": "filterAndSumTransactions([{ type: 'expense', amount: 50 }, { type: 'expense', amount: 150 }], 'expense')",
        "expected": 200
      },
      {
        "expr": "filterAndSumTransactions([], 'income')",
        "expected": 0
      }
    ]
  },
  {
    "id": "2.19",
    "moduleIdx": 2,
    "name": "chunkArrayFunction",
    "title": "Розбиття масиву на чанки (Пагінація через функцію)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію chunkArrayFunction(arr, size), яка розбиває масив arr на підмасиви розміром size за допомогою циклу for або while. Наприклад: chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]].",
    "reqs": [
      "Якщо size <= 0 або arr не масив — поверніть [].",
      "Розбийте елементи на порції через arr.slice(i, i + size).",
      "Поверніть масив чанків."
    ],
    "starterParams": "arr, size",
    "starterBody": "// Розбийте масив на частини розміром size",
    "tests": [
      {
        "expr": "chunkArrayFunction([1, 2, 3, 4, 5], 2)",
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            4
          ],
          [
            5
          ]
        ]
      },
      {
        "expr": "chunkArrayFunction(['a', 'b', 'c'], 1)",
        "expected": [
          [
            "a"
          ],
          [
            "b"
          ],
          [
            "c"
          ]
        ]
      },
      {
        "expr": "chunkArrayFunction([1, 2], 5)",
        "expected": [
          [
            1,
            2
          ]
        ]
      },
      {
        "expr": "chunkArrayFunction([], 3)",
        "expected": []
      }
    ]
  },
  {
    "id": "2.20",
    "moduleIdx": 2,
    "name": "removeDuplicatesWithLoop",
    "title": "Видалення дублікатів з масиву через цикл у функції",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію removeDuplicatesWithLoop(arr), яка приймає масив і повертає новий масив тільки з унікальними значеннями у порядку їх першої появи за допомогою циклу.",
    "reqs": [
      "Не використовуйте [...new Set(arr)].",
      "Використайте цикл for та перевірку includes/indexOf.",
      "Поверніть масив без дублікатів."
    ],
    "starterParams": "arr",
    "starterBody": "// Видаліть дублікати циклом",
    "tests": [
      {
        "expr": "removeDuplicatesWithLoop([1, 2, 2, 3, 4, 4, 5])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "removeDuplicatesWithLoop(['a', 'b', 'a', 'c'])",
        "expected": [
          "a",
          "b",
          "c"
        ]
      }
    ]
  },
  {
    "id": "2.21",
    "moduleIdx": 2,
    "name": "findCommonElements",
    "title": "Перетин двох масивів (Intersection via loops)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію findCommonElements(arr1, arr2), яка знаходить спільні елементи двох масивів і повертає їх у вигляді масиву унікальних значень.",
    "reqs": [
      "Пройдіться по arr1 і перевірте наявність в arr2.",
      "Переконайтеся, що результат не містить дублікатів.",
      "Поверніть масив спільних елементів."
    ],
    "starterParams": "arr1, arr2",
    "starterBody": "// Знайдіть спільні елементи",
    "tests": [
      {
        "expr": "findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])",
        "expected": [
          3,
          4
        ]
      },
      {
        "expr": "findCommonElements(['a', 'b'], ['c', 'd'])",
        "expected": []
      }
    ]
  },
  {
    "id": "2.22",
    "moduleIdx": 2,
    "name": "buildHtmlListFunction",
    "title": "Генерація HTML-списку з масиву рядків",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію buildHtmlListFunction(items, listType = 'ul'), яка приймає масив рядків і генерує HTML: `<{listType}>\\n  <li>Item 1</li>\\n  <li>Item 2</li>\\n</{listType}>`. Якщо масив порожній — поверніть `<{listType}></{listType}>`.",
    "reqs": [
      "Пройдіться по масиву items циклом.",
      "Огорніть кожен елемент у `  <li>${item}</li>`.",
      "Поверніть сформований HTML рядок."
    ],
    "starterParams": "items, listType = 'ul'",
    "starterBody": "// Згенеруйте HTML-список",
    "tests": [
      {
        "expr": "buildHtmlListFunction(['Home', 'About'])",
        "expected": "<ul>\n  <li>Home</li>\n  <li>About</li>\n</ul>"
      },
      {
        "expr": "buildHtmlListFunction(['Step 1'], 'ol')",
        "expected": "<ol>\n  <li>Step 1</li>\n</ol>"
      },
      {
        "expr": "buildHtmlListFunction([], 'ul')",
        "expected": "<ul></ul>"
      }
    ]
  },
  {
    "id": "2.23",
    "moduleIdx": 2,
    "name": "compressStringRLEFunction",
    "title": "Стиснення рядка RLE через функцію з циклом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію compressStringRLEFunction(str), яка за допомогою циклу реалізує алгоритм стиснення RLE: рахує послідовні однакові символи ('aaabbc' -> 'a3b2c1'). Якщо рядок порожній — поверніть ''.",
    "reqs": [
      "Пройдіться циклом по символах.",
      "Підрахуйте послідовні збіги.",
      "Запишіть символ та кількість."
    ],
    "starterParams": "str",
    "starterBody": "// Стисніть рядок алгоритмом RLE",
    "tests": [
      {
        "expr": "compressStringRLEFunction('aaabbc')",
        "expected": "a3b2c1"
      },
      {
        "expr": "compressStringRLEFunction('wwwwww')",
        "expected": "w6"
      },
      {
        "expr": "compressStringRLEFunction('')",
        "expected": ""
      }
    ]
  },
  {
    "id": "2.24",
    "moduleIdx": 2,
    "name": "parseCsvRowsFunction",
    "title": "Парсинг CSV-рядків у масив об'єктів (Функції + Рядки + Масиви)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію parseCsvRowsFunction(csvText), яка приймає CSV-текст із заголовком ('name,role,age\\nAlex,admin,25\\nOlena,user,22') і повертає масив об'єктів: `[{ name: 'Alex', role: 'admin', age: '25' }, ...]`. Ігноруйте порожні рядки.",
    "reqs": [
      "Розбийте рядок на рядки за перенесенням '\\n'.",
      "Перший рядок — це заголовки полів (keys).",
      "Кожен наступний рядок перетворіть на об'єкт і додайте у масив."
    ],
    "starterParams": "csvText",
    "starterBody": "// Розпарсьте CSV у масив об'єктів",
    "tests": [
      {
        "expr": "parseCsvRowsFunction('name,role\\nAlex,admin\\nOlena,user')",
        "expected": [
          {
            "name": "Alex",
            "role": "admin"
          },
          {
            "name": "Olena",
            "role": "user"
          }
        ]
      },
      {
        "expr": "parseCsvRowsFunction('')",
        "expected": []
      }
    ]
  },
  {
    "id": "2.25",
    "moduleIdx": 2,
    "name": "generatePrimesUpTo",
    "title": "Пошук простих чисел до N (Функції + Вкладені цикли)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію generatePrimesUpTo(limit), яка за допомогою вкладених циклів знаходить усі прості числа (числа > 1, що діляться лише на 1 і на себе) від 2 до limit включно і повертає їх у вигляді масиву.",
    "reqs": [
      "Якщо limit < 2 — поверніть [].",
      "Для кожного числа від 2 до limit перевірте дільники.",
      "Поверніть масив знайдених простих чисел."
    ],
    "starterParams": "limit",
    "starterBody": "// Знайдіть прості числа до limit",
    "tests": [
      {
        "expr": "generatePrimesUpTo(10)",
        "expected": [
          2,
          3,
          5,
          7
        ]
      },
      {
        "expr": "generatePrimesUpTo(20)",
        "expected": [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19
        ]
      },
      {
        "expr": "generatePrimesUpTo(1)",
        "expected": []
      }
    ]
  },
  {
    "id": "2.26",
    "moduleIdx": 2,
    "name": "countTargetInNestedArray",
    "title": "Підрахунок елементів у вкладеному 2D масиві",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію countTargetInNestedArray(nestedArr, target), яка за допомогою вкладених циклів підраховує кількість входжень значення target у 2D масиві.",
    "reqs": [
      "Використайте зовнішній та внутрішній цикл.",
      "Підрахуйте всі входження елемента target.",
      "Поверніть загальне число."
    ],
    "starterParams": "nestedArr, target",
    "starterBody": "// Порахуйте входження у 2D масиві",
    "tests": [
      {
        "expr": "countTargetInNestedArray([[1, 2], [2, 3], [2, 2]], 2)",
        "expected": 4
      },
      {
        "expr": "countTargetInNestedArray([['a', 'b'], ['c', 'd']], 'z')",
        "expected": 0
      }
    ]
  },
  {
    "id": "2.27",
    "moduleIdx": 2,
    "name": "sortWordsByLengthFunction",
    "title": "Сортування слів за довжиною (Функції + Рядки + Масиви)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію sortWordsByLengthFunction(words), яка приймає масив слів і повертає новий масив, відсортований за зростанням довжини слова (від найкоротших до найдовших). При однаковій довжині зберігається вихідний порядок.",
    "reqs": [
      "Зробіть копію масиву [...words].",
      "Відсортуйте за критерієм a.length - b.length.",
      "Поверніть відсортований масив."
    ],
    "starterParams": "words",
    "starterBody": "// Відсортуйте слова за довжиною",
    "tests": [
      {
        "expr": "sortWordsByLengthFunction(['elephant', 'cat', 'dog', 'hi'])",
        "expected": [
          "hi",
          "cat",
          "dog",
          "elephant"
        ]
      },
      {
        "expr": "sortWordsByLengthFunction(['a', 'bbb', 'cc'])",
        "expected": [
          "a",
          "cc",
          "bbb"
        ]
      }
    ]
  },
  {
    "id": "2.28",
    "moduleIdx": 2,
    "name": "calculateCartTotalFunction",
    "title": "Розрахунок вартості кошика покупок через функцію",
    "level": "Середній рівень",
    "goal": "Напишіть функцію calculateCartTotalFunction(items, taxRate = 0.2), яка приймає масив товарів `[{ name: 'book', price: 100, qty: 2 }]` та ставку податку taxRate. Обчислює загальну суму товарів (price * qty), додає податок і повертає число, округлене до 2 знаків.",
    "reqs": [
      "Пройдіться циклом і обчисліть проміжну суму subtotal.",
      "Додайте податок: subtotal + (subtotal * taxRate).",
      "Поверніть число, округлене до 2 десяткових знаків."
    ],
    "starterParams": "items, taxRate = 0.2",
    "starterBody": "// Обчисліть фінальну вартість кошика з податком",
    "tests": [
      {
        "expr": "calculateCartTotalFunction([{ name: 'item1', price: 100, qty: 2 }, { name: 'item2', price: 50, qty: 1 }], 0.2)",
        "expected": 300
      },
      {
        "expr": "calculateCartTotalFunction([{ price: 45.5, qty: 2 }], 0)",
        "expected": 91
      },
      {
        "expr": "calculateCartTotalFunction([])",
        "expected": 0
      }
    ]
  },
  {
    "id": "2.29",
    "moduleIdx": 2,
    "name": "findIndexOfElementFunction",
    "title": "Власний алгоритм indexOf через цикл у функції",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію findIndexOfElementFunction(arr, target), яка шукає елемент target у масиві arr за допомогою циклу for і повертає перший індекс входження або -1, якщо елемент відсутній.",
    "reqs": [
      "Не викликайте arr.indexOf().",
      "Пройдіться циклом від 0 до arr.length - 1.",
      "Поверніть індекс збігу або -1."
    ],
    "starterParams": "arr, target",
    "starterBody": "// Реалізуйте ручний пошук індексу",
    "tests": [
      {
        "expr": "findIndexOfElementFunction(['a', 'b', 'c'], 'b')",
        "expected": 1
      },
      {
        "expr": "findIndexOfElementFunction([10, 20, 30], 40)",
        "expected": -1
      }
    ]
  },
  {
    "id": "2.30",
    "moduleIdx": 2,
    "name": "cleanAndJoinWordsFunction",
    "title": "Очищення та склеювання масиву слів у рядок",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію cleanAndJoinWordsFunction(words, separator = ' - '), яка приймає масив слів, видаляє порожні значення і пробіли на краях кожного слова за допомогою циклу, і зшиває їх через separator.",
    "reqs": [
      "Очистіть кожне слово від пробілів trim().",
      "Відкиньте порожні елементи.",
      "Об'єднайте через separator."
    ],
    "starterParams": "words, separator = ' - '",
    "starterBody": "// Очистіть та зшийте слова",
    "tests": [
      {
        "expr": "cleanAndJoinWordsFunction(['  Auth  ', '', '  Database  ', 'Storage  '])",
        "expected": "Auth - Database - Storage"
      },
      {
        "expr": "cleanAndJoinWordsFunction(['One', 'Two'], '/')",
        "expected": "One/Two"
      }
    ]
  },
  {
    "id": "2.31",
    "moduleIdx": 2,
    "name": "createIdGenerator",
    "title": "Замикання: Генератор унікальних ID з префіксом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createIdGenerator(prefix = 'item'), яка повертає функцію без аргументів. Кожен виклик цієї внутрішньої функції повертає новий унікальний рядок формату '{prefix}_1', '{prefix}_2', '{prefix}_3' тощо.",
    "reqs": [
      "Збережіть лічильник count у замиканні.",
      "Поверніть функцію, що інкрементує count і повертає шаблонний рядок."
    ],
    "starterParams": "prefix = 'item'",
    "starterBody": "// Реалізуйте генератор унікальних ID",
    "tests": [
      {
        "expr": "(() => { const gen = createIdGenerator('user'); return [gen(), gen(), gen()]; })()",
        "expected": [
          "user_1",
          "user_2",
          "user_3"
        ]
      },
      {
        "expr": "(() => { const gen = createIdGenerator('btn'); return [gen(), gen()]; })()",
        "expected": [
          "btn_1",
          "btn_2"
        ]
      }
    ]
  },
  {
    "id": "2.32",
    "moduleIdx": 2,
    "name": "createRunningAverage",
    "title": "Замикання: Обчислення середнього арифметичного на льоту (Moving Average)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createRunningAverage(), яка повертає функцію (num). Щоразу при передачі нового числа вона повертає поточне середнє арифметичне усіх чисел, переданих з моменту створення.",
    "reqs": [
      "Збережіть sum та totalCount у замиканні.",
      "При виклику додавайте num до sum, інкрементуйте totalCount.",
      "Поверніть sum / totalCount."
    ],
    "starterParams": "",
    "starterBody": "// Обчислюйте середнє арифметичне на льоту",
    "tests": [
      {
        "expr": "(() => { const avg = createRunningAverage(); return [avg(10), avg(20), avg(30)]; })()",
        "expected": [
          10,
          15,
          20
        ]
      },
      {
        "expr": "(() => { const avg = createRunningAverage(); return [avg(4), avg(8)]; })()",
        "expected": [
          4,
          6
        ]
      }
    ]
  },
  {
    "id": "2.33",
    "moduleIdx": 2,
    "name": "transposeMatrix",
    "title": "Синтез: 2D Матриці та цикли. Транспонування матриці (рядки у стовпці)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію transposeMatrix(matrix), яка приймає двовимірний масив M x N і повертає нову матрицю N x M, де рядки замінені відповідними стовпцями.",
    "reqs": [
      "Перевірте валідність матриці.",
      "Створіть нову матрицю розмірності matrix[0].length на matrix.length.",
      "Заповніть result[c][r] = matrix[r][c] за допомогою вкладених циклів."
    ],
    "starterParams": "matrix",
    "starterBody": "// Транспонуйте матрицю",
    "tests": [
      {
        "expr": "transposeMatrix([[1, 2, 3], [4, 5, 6]])",
        "expected": [
          [
            1,
            4
          ],
          [
            2,
            5
          ],
          [
            3,
            6
          ]
        ]
      },
      {
        "expr": "transposeMatrix([[1, 2], [3, 4]])",
        "expected": [
          [
            1,
            3
          ],
          [
            2,
            4
          ]
        ]
      }
    ]
  },
  {
    "id": "2.34",
    "moduleIdx": 2,
    "name": "sanitizeObjectKeys",
    "title": "Очищення чутливих ключів в об'єкті (Sanitize Keys)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію sanitizeObjectKeys(obj, blacklist = ['password', 'token', 'secret']), яка повертає копію об'єкта, з якої видалено всі ключі, зазначені у масиві blacklist.",
    "reqs": [
      "Створіть копію об'єкта.",
      "Видаліть ключі, що є у blacklist (без урахування регістру або за точним співпадінням).",
      "Поверніть очищений об'єкт."
    ],
    "starterParams": "obj, blacklist = ['password', 'token', 'secret']",
    "starterBody": "// Видаліть конфіденційні ключі з об'єкта",
    "tests": [
      {
        "expr": "sanitizeObjectKeys({ id: 1, name: 'Іван', password: '123', token: 'xyz' })",
        "expected": {
          "id": 1,
          "name": "Іван"
        }
      },
      {
        "expr": "sanitizeObjectKeys({ apiKey: 'key', SECRET: 'shh' })",
        "expected": {
          "apiKey": "key"
        }
      }
    ]
  },
  {
    "id": "2.35",
    "moduleIdx": 2,
    "name": "createHistoryManager",
    "title": "Замикання: Менеджер історії дій (Undo / Redo)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createHistoryManager(initialState), яка керує станом через замикання: getState(), set(newState), undo(), redo().",
    "reqs": [
      "Збережіть стек past, поточний present та стек future.",
      "set(newVal): зберігає present у past, встановлює present, очищає future.",
      "undo(): повертає попередній стан, переміщуючи present у future.",
      "redo(): повертає скасований стан."
    ],
    "starterParams": "initialState",
    "starterBody": "// Реалізуйте менеджер історії стану",
    "tests": [
      {
        "expr": "(() => { const hm = createHistoryManager('step1'); hm.set('step2'); hm.set('step3'); const u1 = hm.undo(); const u2 = hm.undo(); const r1 = hm.redo(); return [u1, u2, r1, hm.getState()]; })()",
        "expected": [
          "step2",
          "step1",
          "step2",
          "step2"
        ]
      }
    ]
  },
  {
    "id": "2.36",
    "moduleIdx": 2,
    "name": "flattenMatrixBySpiral",
    "title": "Синтез: 2D Матриці та цикли. Спіральний обхід матриці",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію flattenMatrixBySpiral(matrix), яка обходить прямокутну матрицю по спіралі (за годинниковою стрілкою) та повертає одновимірний масив елементів.",
    "reqs": [
      "Відслідковуйте межі: top, bottom, left, right.",
      "Рухайтеся вправо -> вниз -> вліво -> вгору, зсуваючи межі у циклі.",
      "Поверніть масив елементів."
    ],
    "starterParams": "matrix",
    "starterBody": "// Обійдіть матрицю по спіралі",
    "tests": [
      {
        "expr": "flattenMatrixBySpiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": [
          1,
          2,
          3,
          6,
          9,
          8,
          7,
          4,
          5
        ]
      },
      {
        "expr": "flattenMatrixBySpiral([[1, 2], [3, 4]])",
        "expected": [
          1,
          2,
          4,
          3
        ]
      }
    ]
  },
  {
    "id": "2.37",
    "moduleIdx": 2,
    "name": "createEventListenerHub",
    "title": "Замикання: Власний Event Emitter (Підписник та сповіщення)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createEventListenerHub(), яка повертає об'єкт з методами: on(event, callback), emit(event, data), off(event, callback).",
    "reqs": [
      "Збережіть мапу подій events Map у замиканні.",
      "on додає обробник, off видаляє конкретний обробник.",
      "emit викликає всі підписані функції для даної події з аргументом data."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте менеджер подій",
    "tests": [
      {
        "expr": "(() => { const hub = createEventListenerHub(); const msgs = []; const handler = d => msgs.push(d); hub.on('msg', handler); hub.emit('msg', 'hello'); hub.off('msg', handler); hub.emit('msg', 'ignored'); return msgs; })()",
        "expected": [
          "hello"
        ]
      }
    ]
  },
  {
    "id": "2.38",
    "moduleIdx": 2,
    "name": "countOccurrencesInMatrix",
    "title": "Синтез: 2D Матриці та цикли. Частотний аналіз матриці",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію countOccurrencesInMatrix(matrix, target), яка підраховує, скільки разів значення target зустрічається в усій двовимірній матриці.",
    "reqs": [
      "Використайте вкладені цикли.",
      "Перевірте кожну комірку matrix[r][c] === target.",
      "Поверніть кількість входжень."
    ],
    "starterParams": "matrix, target",
    "starterBody": "// Підрахуйте кількість входжень target у матриці",
    "tests": [
      {
        "expr": "countOccurrencesInMatrix([[1, 2, 1], [3, 1, 4]], 1)",
        "expected": 3
      },
      {
        "expr": "countOccurrencesInMatrix([['a', 'b'], ['c', 'd']], 'z')",
        "expected": 0
      }
    ]
  },
  {
    "id": "2.39",
    "moduleIdx": 2,
    "name": "createVotingSystem",
    "title": "Замикання: Система голосування з фіксацією результатів",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createVotingSystem(), яка керує голосуванням: vote(candidate), getResults(), getWinner().",
    "reqs": [
      "Збережіть голоси в об'єкті votes у замиканні.",
      "vote інкрементує лічильник кандидата.",
      "getWinner повертає ім'я кандидата з найбільшою кількістю голосів."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте систему голосування",
    "tests": [
      {
        "expr": "(() => { const vs = createVotingSystem(); vs.vote('Олена'); vs.vote('Тарас'); vs.vote('Олена'); return { res: vs.getResults(), winner: vs.getWinner() }; })()",
        "expected": {
          "res": {
            "Олена": 2,
            "Тарас": 1
          },
          "winner": "Олена"
        }
      }
    ]
  },
  {
    "id": "2.40",
    "moduleIdx": 2,
    "name": "createBatchAggregator",
    "title": "Замикання: Пакетний накопичувач елементів (Batch Flusher)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBatchAggregator(batchSize = 3, onFlush), яка приймає елементи add(item). Щойно назбиралося batchSize елементів, вона викликає onFlush(batch) і скидає накопичувач.",
    "reqs": [
      "Збережіть масив buffer у замиканні.",
      "Коли buffer.length === batchSize, викличте onFlush([...buffer]) та очистіть buffer.",
      "Додайте метод flush() для примусового скидання залишку."
    ],
    "starterParams": "batchSize = 3, onFlush",
    "starterBody": "// Накопичуйте та скидайте пачки елементів",
    "tests": [
      {
        "expr": "(() => { const batches = []; const agg = createBatchAggregator(2, b => batches.push(b)); agg.add('a'); agg.add('b'); agg.add('c'); agg.flush(); return batches; })()",
        "expected": [
          [
            "a",
            "b"
          ],
          [
            "c"
          ]
        ]
      }
    ]
  },
  {
    "id": "3.1",
    "moduleIdx": 3,
    "name": "customMap",
    "title": "Поліфіл map через функцію вищого порядку (Функції + Масиви)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію customMap(arr, callback), яка емулює роботу Array.prototype.map без використання вбудованого .map(). Вона приймає масив та колбек callback(element, index, arr) і повертає новий масив трансформованих елементів.",
    "reqs": [
      "Не використовуйте вбудований arr.map().",
      "Викличте callback для кожного елемента через цикл.",
      "Поверніть новий масив."
    ],
    "starterParams": "arr, callback",
    "starterBody": "// Реалізуйте аналог Array.prototype.map",
    "tests": [
      {
        "expr": "customMap([1, 2, 3], x => x * 10)",
        "expected": [
          10,
          20,
          30
        ]
      },
      {
        "expr": "customMap(['a', 'b'], (ch, idx) => `${idx}:${ch}`)",
        "expected": [
          "0:a",
          "1:b"
        ]
      },
      {
        "expr": "customMap([], x => x)",
        "expected": []
      }
    ]
  },
  {
    "id": "3.2",
    "moduleIdx": 3,
    "name": "customFilter",
    "title": "Поліфіл filter через функцію вищого порядку",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію customFilter(arr, predicate), яка емулює Array.prototype.filter без виклику вбудованого .filter(). Вона повертає новий масив лише з тими елементами, для яких predicate повернув true.",
    "reqs": [
      "Не використовуйте вбудований arr.filter().",
      "Зберіть елементи, для яких predicate повертає true.",
      "Поверніть новий масив."
    ],
    "starterParams": "arr, predicate",
    "starterBody": "// Реалізуйте аналог Array.prototype.filter",
    "tests": [
      {
        "expr": "customFilter([1, 2, 3, 4, 5], x => x % 2 === 0)",
        "expected": [
          2,
          4
        ]
      },
      {
        "expr": "customFilter(['cat', 'elephant', 'dog'], s => s.length > 3)",
        "expected": [
          "elephant"
        ]
      }
    ]
  },
  {
    "id": "3.3",
    "moduleIdx": 3,
    "name": "customReduce",
    "title": "Поліфіл reduce через функцію вищого порядку",
    "level": "Середній рівень",
    "goal": "Напишіть функцію customReduce(arr, callback, initialValue), яка емулює роботу Array.prototype.reduce. Якщо initialValue не передано — першим акумулятором стає arr[0], а ітерація починається з індексу 1.",
    "reqs": [
      "Не використовуйте вбудований arr.reduce().",
      "Обробіть початкове значення.",
      "Поверніть результат акумуляції."
    ],
    "starterParams": "arr, callback, initialValue",
    "starterBody": "// Реалізуйте аналог Array.prototype.reduce",
    "tests": [
      {
        "expr": "customReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)",
        "expected": 10
      },
      {
        "expr": "customReduce([2, 3, 4], (prod, n) => prod * n)",
        "expected": 24
      }
    ]
  },
  {
    "id": "3.4",
    "moduleIdx": 3,
    "name": "pipe",
    "title": "Функціональний конвеєр: pipe(fn1, fn2, ...)(val)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію pipe(...functions), яка реалізує конвеєр зліва направо: результат кожної функції передається наступній: pipe(f, g, h)(x) === h(g(f(x))). Якщо functions порожній — поверніть (x) => x.",
    "reqs": [
      "Поверніть функцію (initialValue) => result.",
      "Послідовно застосуйте кожну функцію через reduce зліва направо."
    ],
    "starterParams": "...functions",
    "starterBody": "// Реалізуйте конвеєр функцій",
    "tests": [
      {
        "expr": "pipe(x => x + 2, x => x * 3, x => `Result: ${x}`)(4)",
        "expected": "Result: 18"
      },
      {
        "expr": "pipe(s => s.trim(), s => s.toLowerCase(), s => s.replace(/\\s+/g, '-'))('  Learn JS Functions  ')",
        "expected": "learn-js-functions"
      },
      {
        "expr": "pipe()(42)",
        "expected": 42
      }
    ]
  },
  {
    "id": "3.5",
    "moduleIdx": 3,
    "name": "compose",
    "title": "Математична композиція: compose(f, g, h)(x)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію compose(...functions), яка реалізує класичну композицію справа наліво: compose(f, g, h)(x) === f(g(h(x))).",
    "reqs": [
      "Застосуйте функції у зворотному порядку через reduceRight.",
      "Поверніть результат."
    ],
    "starterParams": "...functions",
    "starterBody": "// Реалізуйте композицію справа наліво",
    "tests": [
      {
        "expr": "compose(x => `Value: ${x}`, x => x * 2, x => x + 5)(10)",
        "expected": "Value: 30"
      }
    ]
  },
  {
    "id": "3.6",
    "moduleIdx": 3,
    "name": "curryTwo",
    "title": "Каррінг для бінарної функції (Curry Binary)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію curryTwo(fn), яка перетворює функцію двох аргументів fn(a, b) на карровану форму fn(a)(b).",
    "reqs": [
      "Поверніть функцію a => b => fn(a, b)."
    ],
    "starterParams": "fn",
    "starterBody": "// Карруйте функцію двох аргументів",
    "tests": [
      {
        "expr": "curryTwo((a, b) => a + b)(10)(25)",
        "expected": 35
      },
      {
        "expr": "curryTwo((a, b) => a * b)(7)(6)",
        "expected": 42
      }
    ]
  },
  {
    "id": "3.7",
    "moduleIdx": 3,
    "name": "memoizeUnary",
    "title": "Мемоізація функції одного аргументу (Кешування)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію memoizeUnary(fn), яка кешує результати обчислень для кожного унікального аргументу у замиканні за допомогою Map.",
    "reqs": [
      "Якщо результат є в кеші — поверніть його.",
      "Якщо немає — обчисліть, збережіть у кеш і поверніть."
    ],
    "starterParams": "fn",
    "starterBody": "// Реалізуйте мемоізацію результатів",
    "tests": [
      {
        "expr": "(() => { let count = 0; const square = memoizeUnary(x => { count++; return x * x; }); const r1 = square(5); const r2 = square(5); return [r1, r2, count]; })()",
        "expected": [
          25,
          25,
          1
        ]
      }
    ]
  },
  {
    "id": "3.8",
    "moduleIdx": 3,
    "name": "factorialRecursive",
    "title": "Обчислення факторіалу рекурсивно",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію factorialRecursive(n), яка рекурсивно обчислює факторіал числа n. Базовий випадок: якщо n <= 1, повернути 1. Для n < 0 поверніть null.",
    "reqs": [
      "Якщо n < 0 поверніть null.",
      "Базовий випадок: n <= 1 -> 1.",
      "Рекурсивний виклик: n * factorial(n - 1)."
    ],
    "starterParams": "n",
    "starterBody": "// Обчисліть факторіал рекурсивно",
    "tests": [
      {
        "expr": "factorialRecursive(5)",
        "expected": 120
      },
      {
        "expr": "factorialRecursive(0)",
        "expected": 1
      },
      {
        "expr": "factorialRecursive(1)",
        "expected": 1
      },
      {
        "expr": "factorialRecursive(-3)",
        "expected": null
      }
    ]
  },
  {
    "id": "3.9",
    "moduleIdx": 3,
    "name": "fibonacciRecursive",
    "title": "Числа Фібоначчі рекурсивно",
    "level": "Середній рівень",
    "goal": "Напишіть функцію fibonacciRecursive(n), яка повертає n-те число Фібоначчі (F(0) = 0, F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5, F(6) = 8). Для n < 0 поверніть 0.",
    "reqs": [
      "Для n <= 0 поверніть 0, для n === 1 поверніть 1.",
      "Розрахуйте значення циклом або рекурсією."
    ],
    "starterParams": "n",
    "starterBody": "// Поверніть n-те число Фібоначчі",
    "tests": [
      {
        "expr": "fibonacciRecursive(0)",
        "expected": 0
      },
      {
        "expr": "fibonacciRecursive(1)",
        "expected": 1
      },
      {
        "expr": "fibonacciRecursive(6)",
        "expected": 8
      },
      {
        "expr": "fibonacciRecursive(10)",
        "expected": 55
      }
    ]
  },
  {
    "id": "3.10",
    "moduleIdx": 3,
    "name": "deepFlattenRecursive",
    "title": "Рекурсивне вирівнювання глибоких масивів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію deepFlattenRecursive(arr), яка рекурсивно розгортає вкладений масив будь-якої глибини в одновимірний масив.",
    "reqs": [
      "Не використовуйте .flat().",
      "Рекурсивно розгортайте елементи, якщо вони є масивами."
    ],
    "starterParams": "arr",
    "starterBody": "// Рекурсивно вирівняйте масив",
    "tests": [
      {
        "expr": "deepFlattenRecursive([1, [2, [3, [4]], 5]])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "deepFlattenRecursive([[1, 2], [3, 4]])",
        "expected": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "expr": "deepFlattenRecursive([])",
        "expected": []
      }
    ]
  },
  {
    "id": "3.11",
    "moduleIdx": 3,
    "name": "sumNestedTree",
    "title": "Рекурсивний підрахунок суми дерева об'єктів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію sumNestedTree(node), яка приймає вузол дерева `{ value: 10, children: [...] }` і рекурсивно обчислює суму значень value кореня та всіх його нащадків.",
    "reqs": [
      "Якщо node невалідна — поверніть 0.",
      "Додайте value та суми всіх дітей у node.children."
    ],
    "starterParams": "node",
    "starterBody": "// Обчисліть суму всіх вузлів дерева",
    "tests": [
      {
        "expr": "sumNestedTree({ value: 10, children: [{ value: 5, children: [] }, { value: 15, children: [{ value: 20 }] }] })",
        "expected": 50
      },
      {
        "expr": "sumNestedTree(null)",
        "expected": 0
      }
    ]
  },
  {
    "id": "3.12",
    "moduleIdx": 3,
    "name": "findInObjectRecursive",
    "title": "Рекурсивний пошук ключа у глибокому об'єкті",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію findInObjectRecursive(obj, targetKey), яка рекурсивно шукає ключ targetKey у глибоко вкладеному об'єкті і повертає його значення.",
    "reqs": [
      "Перевірте пряму наявність targetKey in obj.",
      "Якщо ні — рекурсивно обійдіть усі вкладені об'єкти."
    ],
    "starterParams": "obj, targetKey",
    "starterBody": "// Знайдіть ключ у вкладеному об'єкті",
    "tests": [
      {
        "expr": "findInObjectRecursive({ a: 1, b: { c: 2, d: { secret: 'supabase_key' } } }, 'secret')",
        "expected": "supabase_key"
      },
      {
        "expr": "findInObjectRecursive({ user: { id: 101 } }, 'id')",
        "expected": 101
      },
      {
        "expr": "findInObjectRecursive({ a: 1 }, 'missing')"
      }
    ]
  },
  {
    "id": "3.13",
    "moduleIdx": 3,
    "name": "groupByKey",
    "title": "Групування елементів за ключем селектора (Функції + Масиви)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію groupByKey(arr, keySelector), яка групує елементи масиву в об'єкт списків `{ groupKey: [items...] }`, де ключ визначається функцією keySelector(item).",
    "reqs": [
      "Пройдіться циклом по елементах.",
      "Отримайте ключ групи через keySelector(item).",
      "Згрупуйте елементи у відповідні масиви."
    ],
    "starterParams": "arr, keySelector",
    "starterBody": "// Згрупуйте елементи за ключем",
    "tests": [
      {
        "expr": "groupByKey(['one', 'two', 'three', 'four'], s => s.length)",
        "expected": {
          "3": [
            "one",
            "two"
          ],
          "4": [
            "four"
          ],
          "5": [
            "three"
          ]
        }
      },
      {
        "expr": "groupByKey([{ role: 'admin', name: 'A' }, { role: 'user', name: 'B' }, { role: 'admin', name: 'C' }], u => u.role)",
        "expected": {
          "admin": [
            {
              "role": "admin",
              "name": "A"
            },
            {
              "role": "admin",
              "name": "C"
            }
          ],
          "user": [
            {
              "role": "user",
              "name": "B"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "3.14",
    "moduleIdx": 3,
    "name": "partitionArray",
    "title": "Розбиття масиву за предикатом: [pass, fail]",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію partitionArray(arr, predicate), яка розділяє масив на два масиви: [passArray, failArray].",
    "reqs": [
      "pass містить елементи, для яких predicate === true.",
      "fail містить решту елементів.",
      "Поверніть [pass, fail]."
    ],
    "starterParams": "arr, predicate",
    "starterBody": "// Розділіть масив на дві групи",
    "tests": [
      {
        "expr": "partitionArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0)",
        "expected": [
          [
            2,
            4,
            6
          ],
          [
            1,
            3,
            5
          ]
        ]
      },
      {
        "expr": "partitionArray(['cat', 'elephant', 'dog'], s => s.length > 3)",
        "expected": [
          [
            "elephant"
          ],
          [
            "cat",
            "dog"
          ]
        ]
      }
    ]
  },
  {
    "id": "3.15",
    "moduleIdx": 3,
    "name": "curryDynamic",
    "title": "Універсальний авто-каррінг за арністю функції",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію curryDynamic(fn), яка перетворює функцію будь-якої арності на автокарровану (якщо аргументів достатньо — викликає fn, інакше повертає функцію очікування).",
    "reqs": [
      "Порівняйте зібрані аргументи з fn.length.",
      "Поверніть результат або функцію накопичення."
    ],
    "starterParams": "fn",
    "starterBody": "// Реалізуйте авто-каррінг",
    "tests": [
      {
        "expr": "curryDynamic((a, b, c) => a + b + c)(1)(2)(3)",
        "expected": 6
      },
      {
        "expr": "curryDynamic((a, b, c) => a + b + c)(1, 2)(3)",
        "expected": 6
      },
      {
        "expr": "curryDynamic((a, b, c) => a + b + c)(1, 2, 3)",
        "expected": 6
      }
    ]
  },
  {
    "id": "3.16",
    "moduleIdx": 3,
    "name": "mapObjectValues",
    "title": "Трансформація значень об'єкта через колбек",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію mapObjectValues(obj, fn), яка приймає об'єкт obj і функцію fn(value, key) та повертає новий об'єкт із трансформованими значеннями.",
    "reqs": [
      "Пройдіться по записах Object.entries(obj).",
      "Запишіть res[k] = fn(v, k).",
      "Поверніть новий об'єкт."
    ],
    "starterParams": "obj, fn",
    "starterBody": "// Трансформуйте значення об'єкта",
    "tests": [
      {
        "expr": "mapObjectValues({ a: 1, b: 2, c: 3 }, x => x * 10)",
        "expected": {
          "a": 10,
          "b": 20,
          "c": 30
        }
      },
      {
        "expr": "mapObjectValues({ name: 'supabase' }, s => s.toUpperCase())",
        "expected": {
          "name": "SUPABASE"
        }
      }
    ]
  },
  {
    "id": "3.17",
    "moduleIdx": 3,
    "name": "filterObjectEntries",
    "title": "Фільтрація полів об'єкта за предикатом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію filterObjectEntries(obj, predicate), яка повертає новий об'єкт, що містить тільки ті пари [key, value], для яких predicate(value, key) повернув true.",
    "reqs": [
      "Залиште лише пари, де predicate(v, k) === true.",
      "Поверніть новий об'єкт."
    ],
    "starterParams": "obj, predicate",
    "starterBody": "// Відфільтруйте поля об'єкта",
    "tests": [
      {
        "expr": "filterObjectEntries({ a: 10, b: 5, c: 20 }, v => v >= 10)",
        "expected": {
          "a": 10,
          "c": 20
        }
      },
      {
        "expr": "filterObjectEntries({ id: 1, _secret: 'x' }, (v, k) => !k.startsWith('_'))",
        "expected": {
          "id": 1
        }
      }
    ]
  },
  {
    "id": "3.18",
    "moduleIdx": 3,
    "name": "partialApply",
    "title": "Часткове застосування аргументів (Partial Application)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію partialApply(fn, ...fixedArgs), яка повертає нову функцію (...remainingArgs) => fn(...fixedArgs, ...remainingArgs).",
    "reqs": [
      "Зафіксуйте fixedArgs.",
      "Поверніть функцію з рештою аргументів."
    ],
    "starterParams": "fn, ...fixedArgs",
    "starterBody": "// Реалізуйте часткове застосування аргументів",
    "tests": [
      {
        "expr": "partialApply((a, b, c) => a + b + c, 10, 20)(30)",
        "expected": 60
      },
      {
        "expr": "partialApply((prefix, str) => `${prefix}: ${str}`, 'LOG')('Error found')",
        "expected": "LOG: Error found"
      }
    ]
  },
  {
    "id": "3.19",
    "moduleIdx": 3,
    "name": "groupAnagramsFunction",
    "title": "Групування анаграм (Функції + Рядки + Масиви + Цикли)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію groupAnagramsFunction(words), яка приймає масив слів і групує анаграми в окремі підмасиви: `[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`.",
    "reqs": [
      "Для кожного слова відсортуйте літери [...word].sort().join('').",
      "Використайте відсортований рядок як ключ у Map.",
      "Поверніть масив згрупованих масивів анаграм."
    ],
    "starterParams": "words",
    "starterBody": "// Згрупуйте анаграми в підмасиви",
    "tests": [
      {
        "expr": "groupAnagramsFunction(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])",
        "expected": [
          [
            "eat",
            "tea",
            "ate"
          ],
          [
            "tan",
            "nat"
          ],
          [
            "bat"
          ]
        ]
      },
      {
        "expr": "groupAnagramsFunction(['listen', 'silent', 'hello'])",
        "expected": [
          [
            "listen",
            "silent"
          ],
          [
            "hello"
          ]
        ]
      }
    ]
  },
  {
    "id": "3.20",
    "moduleIdx": 3,
    "name": "zipWith",
    "title": "Функціональне зшивання масивів: zipWith(fn, arr1, arr2)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію zipWith(fn, arr1, arr2), яка попарно об'єднує елементи двох масивів за допомогою функції fn(arr1[i], arr2[i]).",
    "reqs": [
      "Пройдіться циклом до довжини коротшого масиву.",
      "Поверніть масив результатів fn(arr1[i], arr2[i])."
    ],
    "starterParams": "fn, arr1, arr2",
    "starterBody": "// Попарно зшийте два масиви",
    "tests": [
      {
        "expr": "zipWith((a, b) => a + b, [1, 2, 3], [10, 20, 30, 40])",
        "expected": [
          11,
          22,
          33
        ]
      },
      {
        "expr": "zipWith((k, v) => `${k}=${v}`, ['name', 'age'], ['Alex', 25])",
        "expected": [
          "name=Alex",
          "age=25"
        ]
      }
    ]
  },
  {
    "id": "3.21",
    "moduleIdx": 3,
    "name": "cleanAndSortWordsFunction",
    "title": "Очищення та алфавітне сортування слів у реченні",
    "level": "Середній рівень",
    "goal": "Напишіть функцію cleanAndSortWordsFunction(text), яка приймає рядок тексту, видаляє знаки пунктуації, розбиває на слова, приводить до нижнього регістру, видаляє дублікати циклом та повертає масив слів, відсортованих за алфавітом.",
    "reqs": [
      "Видаліть знаки пунктуації та розбийте за /\\s+/.",
      "Залиште тільки унікальні слова в нижньому регістрі.",
      "Відсортуйте за алфавітом .sort() і поверніть результат."
    ],
    "starterParams": "text",
    "starterBody": "// Очистіть, дедуплікуйте та відсортуйте слова",
    "tests": [
      {
        "expr": "cleanAndSortWordsFunction('Banana, apple, banana! Cherry, apple.')",
        "expected": [
          "apple",
          "banana",
          "cherry"
        ]
      },
      {
        "expr": "cleanAndSortWordsFunction('zebra ant lion ant')",
        "expected": [
          "ant",
          "lion",
          "zebra"
        ]
      }
    ]
  },
  {
    "id": "3.22",
    "moduleIdx": 3,
    "name": "formatAsciiTableFunction",
    "title": "Побудова ASCII-таблиці з масиву рядків (Функція + Рядки + Цикли)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію formatAsciiTableFunction(headers, rows), яка приймає масив назв колонок headers та 2D-масив rows і повертає відформатований рядок таблиці формату: `| ID | Name |\\n|----|------|\\n| 1  | Alex |`.",
    "reqs": [
      "Обчисліть максимальну ширину кожної колонки.",
      "Доповніть кожне значення пробілами справа через padEnd.",
      "Сформуйте рядок заголовків, роздільник з дефісів та рядки даних."
    ],
    "starterParams": "headers, rows",
    "starterBody": "// Згенеруйте ASCII таблицю",
    "tests": [
      {
        "expr": "formatAsciiTableFunction(['ID', 'Name'], [[1, 'Alex'], [2, 'Olena']])",
        "expected": "| ID | Name  |\n|----|-------|\n| 1  | Alex  |\n| 2  | Olena |"
      },
      {
        "expr": "formatAsciiTableFunction(['Code'], [['JS'], ['TS']])",
        "expected": "| Code |\n|------|\n| JS   |\n| TS   |"
      }
    ]
  },
  {
    "id": "3.23",
    "moduleIdx": 3,
    "name": "binarySearchFunction",
    "title": "Бінарний пошук у відсортованому масиві (Binary Search)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію binarySearchFunction(sortedArr, target), яка реалізує алгоритм бінарного пошуку за допомогою циклу while. Повертає індекс знайденого target або -1, якщо елемент відсутній.",
    "reqs": [
      "Використайте покажчики low = 0 та high = sortedArr.length - 1.",
      "У циклі while (low <= high) обчислюйте mid.",
      "Поверніть індекс або -1."
    ],
    "starterParams": "sortedArr, target",
    "starterBody": "// Реалізуйте бінарний пошук",
    "tests": [
      {
        "expr": "binarySearchFunction([10, 20, 30, 40, 50, 60], 40)",
        "expected": 3
      },
      {
        "expr": "binarySearchFunction([1, 3, 5, 7, 9], 1)",
        "expected": 0
      },
      {
        "expr": "binarySearchFunction([2, 4, 6], 5)",
        "expected": -1
      }
    ]
  },
  {
    "id": "3.24",
    "moduleIdx": 3,
    "name": "createBatchTransformer",
    "title": "Пакетне перетворення колекції за ланцюжком правил",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBatchTransformer(...transformFns), яка повертає функцію transformAll(items). Для кожного елемента послідовно викликаються всі transformFns.",
    "reqs": [
      "Об'єднайте transformFns у пайплайн для кожного елемента.",
      "Поверніть масив трансформованих елементів."
    ],
    "starterParams": "...transformFns",
    "starterBody": "// Поверніть пакетний перетворювач",
    "tests": [
      {
        "expr": "createBatchTransformer(x => x.trim(), x => x.toUpperCase(), x => `[${x}]`)(['  alex  ', '  olena '])",
        "expected": [
          "[ALEX]",
          "[OLENA]"
        ]
      }
    ]
  },
  {
    "id": "3.25",
    "moduleIdx": 3,
    "name": "createMiddlewarePipeline",
    "title": "Пайплайн проміжних обробників (Middleware Pattern)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createMiddlewarePipeline(), яка реалізує патерн Middleware: метод use(fn) додає обробник fn(context, next). Метод run(context) послідовно запускає обробники.",
    "reqs": [
      "Збережіть чергу мідлварів у замиканні.",
      "Реалізуйте виклик наступного обробника через next().",
      "Поверніть фінальний об'єкт контексту."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте конвеєр middleware",
    "tests": [
      {
        "expr": "(() => { const p = createMiddlewarePipeline(); p.use((ctx, next) => { ctx.a = 1; next(); }); p.use((ctx, next) => { ctx.b = ctx.a + 2; next(); }); return p.run({}); })()",
        "expected": {
          "a": 1,
          "b": 3
        }
      }
    ]
  },
  {
    "id": "3.26",
    "moduleIdx": 3,
    "name": "measureExecutionTime",
    "title": "Профілювання часу виконання функції",
    "level": "Середній рівень",
    "goal": "Напишіть функцію measureExecutionTime(fn, ...args), яка викликає fn(...args) та повертає об'єкт `{ result: any, durationMs: number }`.",
    "reqs": [
      "Зафіксуйте час початку.",
      "Викличте fn(...args).",
      "Поверніть об'єкт { result, durationMs: >= 0 }."
    ],
    "starterParams": "fn, ...args",
    "starterBody": "// Виміряйте час виконання функції",
    "tests": [
      {
        "expr": "(() => { const r = measureExecutionTime((a, b) => a + b, 10, 20); return [r.result, typeof r.durationMs === 'number']; })()",
        "expected": [
          30,
          true
        ]
      }
    ]
  },
  {
    "id": "3.27",
    "moduleIdx": 3,
    "name": "createObservableValue",
    "title": "Реактивна змінна з відслідковуванням змін",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createObservableValue(initialValue), яка створює реактивну змінну: get(), set(newValue), watch(callback). При зміні викликаються всі callback(newValue, oldValue).",
    "reqs": [
      "Збережіть значення та масив слухачів.",
      "Сповіщайте слухачів лише коли newValue !== oldValue."
    ],
    "starterParams": "initialValue",
    "starterBody": "// Реалізуйте реактивну змінну",
    "tests": [
      {
        "expr": "(() => { const obs = createObservableValue(100); const changes = []; obs.watch((next, prev) => changes.push(`${prev}->${next}`)); obs.set(150); obs.set(150); obs.set(200); return changes; })()",
        "expected": [
          "100->150",
          "150->200"
        ]
      }
    ]
  },
  {
    "id": "3.28",
    "moduleIdx": 3,
    "name": "createSafeFallback",
    "title": "Патерн Fallback (Безпечне резервне значення при винятку)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createSafeFallback(fn, fallbackValue), яка повертає функцію, що перехоплює будь-які помилки у fn(...args) і замість падіння повертає fallbackValue.",
    "reqs": [
      "Огорніть виклик у try/catch.",
      "Поверніть результат або fallbackValue."
    ],
    "starterParams": "fn, fallbackValue",
    "starterBody": "// Поверніть функцію з резервним значенням",
    "tests": [
      {
        "expr": "createSafeFallback(str => JSON.parse(str), {})('{\"valid\":true}')",
        "expected": {
          "valid": true
        }
      },
      {
        "expr": "createSafeFallback(str => JSON.parse(str), { error: true })('invalid_json')",
        "expected": {
          "error": true
        }
      }
    ]
  },
  {
    "id": "3.29",
    "moduleIdx": 3,
    "name": "createLazyEvaluator",
    "title": "Ледаче обчислення (Lazy Evaluation)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createLazyEvaluator(computeFn), яка відкладає виконання computeFn до першого виклику .value(), кешує результат, а метод .isEvaluated() показує статус.",
    "reqs": [
      "Обчисліть значення лише під час першого виклику .value().",
      "Кешуйте результат для наступних викликів."
    ],
    "starterParams": "computeFn",
    "starterBody": "// Реалізуйте відкладене обчислення",
    "tests": [
      {
        "expr": "(() => { let runs = 0; const lazy = createLazyEvaluator(() => { runs++; return 999; }); const b = lazy.isEvaluated(); const v1 = lazy.value(); const v2 = lazy.value(); return [b, v1, v2, lazy.isEvaluated(), runs]; })()",
        "expected": [
          false,
          999,
          999,
          true,
          1
        ]
      }
    ]
  },
  {
    "id": "3.30",
    "moduleIdx": 3,
    "name": "trampoline",
    "title": "Уникнення переповнення стека: Трамплін (Trampoline Pattern)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію trampoline(fn), яка виконує рекурсивну функцію через цикл while (typeof result === 'function'), запобігаючи переповненню стека викликів.",
    "reqs": [
      "Виконайте початковий виклик fn(...args).",
      "Поки результат є функцією: результат = результат().",
      "Поверніть кінцеве значення."
    ],
    "starterParams": "fn",
    "starterBody": "// Реалізуйте трамплін",
    "tests": [
      {
        "expr": "(() => { const countDec = trampoline((n, sum = 0) => n <= 0 ? sum : () => countDec(n - 1, sum + n)); return countDec(100); })()",
        "expected": 5050
      }
    ]
  },
  {
    "id": "3.31",
    "moduleIdx": 3,
    "name": "createCircuitBreaker",
    "title": "Патерн Circuit Breaker (Автоматичний запобіжник збоїв)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createCircuitBreaker(fn, failureThreshold = 3), яка після failureThreshold послідовних збоїв переходить у стан OPEN і повертає 'Circuit Open: Service Unavailable'.",
    "reqs": [
      "Збережіть лічильник послідовних збоїв.",
      "Якщо ліміт перевищено — повертайте статус блокування."
    ],
    "starterParams": "fn, failureThreshold = 3",
    "starterBody": "// Реалізуйте Circuit Breaker",
    "tests": [
      {
        "expr": "(() => { const failing = () => { throw new Error('fail'); }; const cb = createCircuitBreaker(failing, 2); const r1 = cb(); const r2 = cb(); const r3 = cb(); return [r1, r2, r3]; })()",
        "expected": [
          "Execution Failed",
          "Execution Failed",
          "Circuit Open: Service Unavailable"
        ]
      }
    ]
  },
  {
    "id": "3.32",
    "moduleIdx": 3,
    "name": "createPluginManager",
    "title": "Модульна система плагінів (Micro-kernel architecture)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createPluginManager(), яка керує плагінами та хуками: registerPlugin(pluginObj), addHook(hookName, fn), triggerHook(hookName, payload).",
    "reqs": [
      "registerPlugin викликає plugin.install(manager).",
      "triggerHook послідовно пропускає payload крізь зареєстровані хуки."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте систему плагінів",
    "tests": [
      {
        "expr": "(() => { const pm = createPluginManager(); pm.registerPlugin({ name: 'uppercase', install: m => m.addHook('format', s => s.toUpperCase()) }); pm.registerPlugin({ name: 'tag', install: m => m.addHook('format', s => `<tag>${s}</tag>`) }); return pm.triggerHook('format', 'supabase'); })()",
        "expected": "<tag>SUPABASE</tag>"
      }
    ]
  },
  {
    "id": "3.33",
    "moduleIdx": 3,
    "name": "createDebounce",
    "title": "HOF: Декоратор Debounce (Відкладення виконання)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createDebounce(fn, delayMs = 300), яка повертає функцію, що відкладає виконання fn доти, доки не мине delayMs мілісекунд з моменту останнього виклику.",
    "reqs": [
      "Збережіть timerId у замиканні.",
      "При кожному виклику очищайте попередній clearTimeout(timerId).",
      "Встановлюйте новий setTimeout."
    ],
    "starterParams": "fn, delayMs = 300",
    "starterBody": "// Реалізуйте debounce декоратор",
    "tests": [
      {
        "expr": "(() => { let called = 0; const debounced = createDebounce(() => { called++; }, 50); debounced(); debounced(); return typeof debounced === 'function'; })()",
        "expected": true
      }
    ]
  },
  {
    "id": "3.34",
    "moduleIdx": 3,
    "name": "createThrottle",
    "title": "HOF: Декоратор Throttle (Обмеження частоти викликів)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createThrottle(fn, intervalMs = 200), яка гарантує, що fn викликається не частіше ніж один раз на intervalMs мілісекунд.",
    "reqs": [
      "Збережіть lastCallTime у замиканні.",
      "Якщо Date.now() - lastCallTime >= intervalMs — виконуйте fn і оновлюйте час."
    ],
    "starterParams": "fn, intervalMs = 200",
    "starterBody": "// Реалізуйте throttle декоратор",
    "tests": [
      {
        "expr": "(() => { let count = 0; const throttled = createThrottle(() => ++count, 100); const r1 = throttled(); const r2 = throttled(); return [r1, r2, count]; })()",
        "expected": [
          1,
          null,
          1
        ]
      }
    ]
  },
  {
    "id": "3.35",
    "moduleIdx": 3,
    "name": "deepCloneObject",
    "title": "Рекурсія: Глибоке клонування об'єкта (Deep Clone)",
    "level": "Просунутий рівень",
    "goal": "Напишіть рекурсивну функцію deepCloneObject(obj), яка створює повну глибоку копію довільного вкладеного об'єкта чи масиву, копіюючи всі рівні без посилань на оригінал.",
    "reqs": [
      "Якщо obj не є об'єктом або null — повертайте його без змін (базовий випадок).",
      "Обробіть масиви через obj.map(deepCloneObject).",
      "Обробіть об'єкти через рекурсивний прохід по ключах."
    ],
    "starterParams": "obj",
    "starterBody": "// Створіть глибоку копію об'єкта",
    "tests": [
      {
        "expr": "(() => { const original = { a: 1, b: { c: [2, 3] } }; const copy = deepCloneObject(original); copy.b.c.push(4); return { origLen: original.b.c.length, copyLen: copy.b.c.length }; })()",
        "expected": {
          "origLen": 2,
          "copyLen": 3
        }
      }
    ]
  },
  {
    "id": "3.36",
    "moduleIdx": 3,
    "name": "findFileInTree",
    "title": "Рекурсія: Пошук файлу у файловій системі (Tree Search)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію findFileInTree(treeNode, filename), яка шукає файл у структурі папок { name: 'src', type: 'dir', children: [...] }. Повертає повний шлях 'src/components/Button.js' або null.",
    "reqs": [
      "Якщо поточний вузол є файлом і назва збігається — поверніть node.name.",
      "Якщо це папка — рекурсивно обійдіть children.",
      "Формуйте шлях через '/'. Якщо не знайдено — return null."
    ],
    "starterParams": "treeNode, filename",
    "starterBody": "// Знайдіть файл у дереві каталогів",
    "tests": [
      {
        "expr": "findFileInTree({ name: 'root', type: 'dir', children: [{ name: 'app.js', type: 'file' }, { name: 'src', type: 'dir', children: [{ name: 'index.html', type: 'file' }] }] }, 'index.html')",
        "expected": "root/src/index.html"
      },
      {
        "expr": "findFileInTree({ name: 'root', type: 'dir', children: [] }, 'missing.txt')",
        "expected": null
      }
    ]
  },
  {
    "id": "3.37",
    "moduleIdx": 3,
    "name": "zipArraysWith",
    "title": "HOF: Попарне об'єднання масивів за функцією (zipWith)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію zipArraysWith(arr1, arr2, combineFn), яка попарно бере елементи arr1[i] та arr2[i], пропускає їх крізь combineFn(a, b) і повертає новий масив. Довжина дорівнює найкоротшому з двох масивів.",
    "reqs": [
      "Визначте довжину minLen = Math.min(arr1.length, arr2.length).",
      "У циклі викличте combineFn(arr1[i], arr2[i]).",
      "Поверніть результуючий масив."
    ],
    "starterParams": "arr1, arr2, combineFn",
    "starterBody": "// Об'єднайте масиви попарно за допомогою функції",
    "tests": [
      {
        "expr": "zipArraysWith([1, 2, 3], [10, 20, 30], (a, b) => a + b)",
        "expected": [
          11,
          22,
          33
        ]
      },
      {
        "expr": "zipArraysWith(['Олена', 'Тарас'], [95, 88], (n, s) => `${n}: ${s}`)",
        "expected": [
          "Олена: 95",
          "Тарас: 88"
        ]
      }
    ]
  },
  {
    "id": "3.38",
    "moduleIdx": 3,
    "name": "createPriorityQueue",
    "title": "Патерни: Черга з пріоритетами (Priority Queue)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createPriorityQueue(), яка створює чергу задач: enqueue(item, priority), dequeue(), peek(), isEmpty(). dequeue повертає елемент з найвищим пріоритетом (найменше число = вищий пріоритет).",
    "reqs": [
      "Збережіть масив items у замиканні.",
      "При enqueue вставляйте або сортуйте за priority.",
      "dequeue видаляє та повертає перший елемент."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте чергу з пріоритетом",
    "tests": [
      {
        "expr": "(() => { const pq = createPriorityQueue(); pq.enqueue('task_low', 10); pq.enqueue('task_urgent', 1); pq.enqueue('task_med', 5); return [pq.dequeue(), pq.dequeue(), pq.dequeue()]; })()",
        "expected": [
          "task_urgent",
          "task_med",
          "task_low"
        ]
      }
    ]
  },
  {
    "id": "3.39",
    "moduleIdx": 3,
    "name": "createEventBus",
    "title": "Патерни: Шина подій з підтримкою once (одноразові підписки)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createEventBus(), яка підтримує: on(event, fn), once(event, fn), emit(event, payload). Метод once повинен спрацювати лише один раз і автоматично відписатися.",
    "reqs": [
      "Збережіть обробники в Map.",
      "once загортає функцію у внутрішній обробник, який видаляє себе після першого виклику.",
      "emit передає payload усім активним обробникам."
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте шину подій з підтримкою once",
    "tests": [
      {
        "expr": "(() => { const bus = createEventBus(); let count = 0; bus.once('greet', () => { count++; }); bus.emit('greet'); bus.emit('greet'); return count; })()",
        "expected": 1
      }
    ]
  },
  {
    "id": "3.40",
    "moduleIdx": 3,
    "name": "flattenDeepArray",
    "title": "Рекурсія: Глибоке розгортання вкладених масивів (Flat Polyfill)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію flattenDeepArray(arr), яка рекурсивно перетворює багатовимірний масив будь-якої глибини вкладеності [1, [2, [3, [4, [5]]]]] у плоский одновимірний масив [1, 2, 3, 4, 5].",
    "reqs": [
      "Пройдіть по елементах через цикл або reduce.",
      "Якщо елемент Array.isArray -> рекурсивний виклик.",
      "Поверніть одновимірний масив."
    ],
    "starterParams": "arr",
    "starterBody": "// Розгорніть масив довільної вкладеності",
    "tests": [
      {
        "expr": "flattenDeepArray([1, [2, [3, [4, 5]]]])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "flattenDeepArray([[1], [[2]], [[[3]]]])",
        "expected": [
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "id": "3.41",
    "moduleIdx": 3,
    "name": "asyncTaskWaterfall",
    "title": "Патерни: Послідовне виконання синхронних задач (Waterfall Runner)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію asyncTaskWaterfall(initialVal, tasksArray), яка по черзі пропускає результат виконання попередньої задачі як аргумент для наступної tasksArray[i](prevResult).",
    "reqs": [
      "Збережіть curr = initialVal.",
      "Пройдіться циклом по tasksArray.",
      "Поверніть кінцевий результат."
    ],
    "starterParams": "initialVal, tasksArray",
    "starterBody": "// Послідовно передайте значення крізь масив функцій",
    "tests": [
      {
        "expr": "asyncTaskWaterfall(5, [x => x * 2, x => x + 10, x => `${x} грн`])",
        "expected": "20 грн"
      }
    ]
  },
  {
    "id": "3.42",
    "moduleIdx": 3,
    "name": "createLazyRange",
    "title": "Генераторні функції / Ітератори: Лінивий генератор діапазону (Lazy Range)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createLazyRange(start, end, step = 1), яка повертає ітерований об'єкт { next() }, що генерує числа по черзі без попереднього створення всього масиву в пам'яті.",
    "reqs": [
      "Збережіть поточне значення curr = start.",
      "Метод next() повертає { value, done }.",
      "Коли curr > end — встановлює done: true."
    ],
    "starterParams": "start, end, step = 1",
    "starterBody": "// Реалізуйте лінивий ітератор діапазону",
    "tests": [
      {
        "expr": "(() => { const range = createLazyRange(1, 5, 2); return [range.next(), range.next(), range.next(), range.next()]; })()",
        "expected": [
          {
            "value": 1,
            "done": false
          },
          {
            "value": 3,
            "done": false
          },
          {
            "value": 5,
            "done": false
          },
          {
            "done": true
          }
        ]
      }
    ]
  },
  {
    "id": "4.1",
    "moduleIdx": 4,
    "name": "safeJsonParse",
    "title": "Безпечний парсинг JSON (try...catch): fallback значення",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію safeJsonParse(jsonString, fallback = null), яка намагається розпарсити рядок через JSON.parse(). Якщо виникає помилка синтаксису (SyntaxError) або будь-яка інша — повертає fallback значення замість аварійної зупинки програми.",
    "reqs": [
      "Огорніть JSON.parse(jsonString) у блок try.",
      "У блоці catch поверніть значення fallback.",
      "Якщо парсинг успішний — поверніть отриманий результат."
    ],
    "starterParams": "jsonString, fallback = null",
    "starterBody": "// Реалізуйте безпечний парсинг JSON",
    "tests": [
      {
        "expr": "safeJsonParse('{\"name\":\"Анна\",\"age\":22}')",
        "expected": {
          "name": "Анна",
          "age": 22
        }
      },
      {
        "expr": "safeJsonParse('[1, 2, 3]')",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "safeJsonParse('{invalid_json}', {})",
        "expected": {}
      },
      {
        "expr": "safeJsonParse('undefined', 'DEFAULT')",
        "expected": "DEFAULT"
      },
      {
        "expr": "safeJsonParse('true')",
        "expected": true
      }
    ]
  },
  {
    "id": "4.2",
    "moduleIdx": 4,
    "name": "validatePositiveNumber",
    "title": "Генерація винятку: оператор throw та TypeError",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію validatePositiveNumber(val), яка перевіряє, чи є val числом і чи є воно строго більше за 0. Якщо ні — функція повинна викинути помилку: throw new TypeError('Значення має бути додатним числом'). Якщо валідація пройдена — повертає val.",
    "reqs": [
      "Перевірте: typeof val === 'number' && !Number.isNaN(val) && val > 0.",
      "Якщо умова не виконується — викиньте TypeError з вказаним повідомленням.",
      "Поверніть val у разі успіху."
    ],
    "starterParams": "val",
    "starterBody": "// Перевірте число та згенеруйте TypeError у разі помилки",
    "tests": [
      {
        "expr": "validatePositiveNumber(42)",
        "expected": 42
      },
      {
        "expr": "validatePositiveNumber(3.14)",
        "expected": 3.14
      },
      {
        "expr": "(() => { try { validatePositiveNumber(-5); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()",
        "expected": "Значення має бути додатним числом"
      },
      {
        "expr": "(() => { try { validatePositiveNumber('10'); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()",
        "expected": "Значення має бути додатним числом"
      },
      {
        "expr": "(() => { try { validatePositiveNumber(0); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()",
        "expected": "Значення має бути додатним числом"
      }
    ]
  },
  {
    "id": "4.3",
    "moduleIdx": 4,
    "name": "safeDivision",
    "title": "Ділення з генерацією RangeError при діленні на нуль",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію safeDivision(a, b), яка повертає результат a / b. Якщо b === 0 або b === -0, функція викидає RangeError('Ділення на нуль неможливе'). Якщо a або b не є числами — викидає TypeError('Обидва аргументи мають бути числами').",
    "reqs": [
      "Перевірте типи аргументів (typeof number).",
      "Перевірте ділення на нуль через b === 0.",
      "Поверніть частку a / b."
    ],
    "starterParams": "a, b",
    "starterBody": "// Перевірте вхідні дані та поверніть частку або згенеруйте помилку",
    "tests": [
      {
        "expr": "safeDivision(10, 2)",
        "expected": 5
      },
      {
        "expr": "safeDivision(9, 3)",
        "expected": 3
      },
      {
        "expr": "(() => { try { safeDivision(10, 0); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()",
        "expected": {
          "name": "RangeError",
          "msg": "Ділення на нуль неможливе"
        }
      },
      {
        "expr": "(() => { try { safeDivision('10', 2); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()",
        "expected": {
          "name": "TypeError",
          "msg": "Обидва аргументи мають бути числами"
        }
      }
    ]
  },
  {
    "id": "4.4",
    "moduleIdx": 4,
    "name": "extractErrorInfo",
    "title": "Анатомія об'єкта помилки (Error Object: name, message, stack)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію extractErrorInfo(fn), яка виконує передану функцію fn(). Якщо вона виконується без помилок — повертає { success: true, result: <результат> }. Якщо виникає виняток — перехоплює його і повертає { success: false, name: err.name, message: err.message, hasStack: Boolean(err.stack) }.",
    "reqs": [
      "Використайте try...catch для перехоплення помилки.",
      "Витягніть властивості name та message перехопленого об'єкта.",
      "Перевірте наявність stack через Boolean(err && err.stack)."
    ],
    "starterParams": "fn",
    "starterBody": "// Перехопіть помилку або поверніть результат виклику",
    "tests": [
      {
        "expr": "extractErrorInfo(() => 100 * 2)",
        "expected": {
          "success": true,
          "result": 200
        }
      },
      {
        "expr": "extractErrorInfo(() => { throw new TypeError('Невірний тип!'); })",
        "expected": {
          "success": false,
          "name": "TypeError",
          "message": "Невірний тип!",
          "hasStack": true
        }
      },
      {
        "expr": "extractErrorInfo(() => { throw new RangeError('Поза межами!'); })",
        "expected": {
          "success": false,
          "name": "RangeError",
          "message": "Поза межами!",
          "hasStack": true
        }
      }
    ]
  },
  {
    "id": "4.5",
    "moduleIdx": 4,
    "name": "validateUserAge",
    "title": "Комплексна валідація віку: диференціація TypeError та RangeError",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію validateUserAge(age), яка перевіряє вік користувача. Якщо age не є цілим числом — кидає TypeError('Вік повинен бути цілим числом'). Якщо age < 0 або age > 130 — кидає RangeError('Вік повинен бути в діапазоні від 0 до 130'). Якщо все вірно — повертає age.",
    "reqs": [
      "Перевірка на ціле число: Number.isInteger(age).",
      "Перевірка діапазону: age >= 0 && age <= 130.",
      "Викидання відповідних типів помилок."
    ],
    "starterParams": "age",
    "starterBody": "// Валідуйте вік користувача з диференціацією помилок",
    "tests": [
      {
        "expr": "validateUserAge(25)",
        "expected": 25
      },
      {
        "expr": "validateUserAge(0)",
        "expected": 0
      },
      {
        "expr": "validateUserAge(130)",
        "expected": 130
      },
      {
        "expr": "(() => { try { validateUserAge(25.5); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      },
      {
        "expr": "(() => { try { validateUserAge(-1); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { validateUserAge(131); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { validateUserAge('20'); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.6",
    "moduleIdx": 4,
    "name": "safeUriDecode",
    "title": "Обробка вбудованої помилки URIError",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію safeUriDecode(encodedStr), яка викликає decodeURIComponent(encodedStr). Якщо рядок містить некоректну послідовність байтів (що викликає URIError) — функція перехоплює помилку і повертає рядок 'INVALID_URI'.",
    "reqs": [
      "Використайте try...catch навколо decodeURIComponent.",
      "Якщо сталася помилка — поверніть 'INVALID_URI'.",
      "Якщо все гаразд — поверніть декодований рядок."
    ],
    "starterParams": "encodedStr",
    "starterBody": "// Декодуйте URI або поверніть 'INVALID_URI'",
    "tests": [
      {
        "expr": "safeUriDecode('Hello%20World%21')",
        "expected": "Hello World!"
      },
      {
        "expr": "safeUriDecode('%D0%9A%D0%B8%D1%97%D0%B2')",
        "expected": "Київ"
      },
      {
        "expr": "safeUriDecode('%E0%A4%A')",
        "expected": "INVALID_URI"
      },
      {
        "expr": "safeUriDecode('%')",
        "expected": "INVALID_URI"
      }
    ]
  },
  {
    "id": "4.7",
    "moduleIdx": 4,
    "name": "executeWithCleanup",
    "title": "Блок finally: Гарантоване виконання очищення ресурсів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію executeWithCleanup(actionFn, cleanupFn), яка виконує actionFn() у блоці try, і ГАРАНТОВАНО викликає cleanupFn() у блоці finally, незалежно від того, успішно завершилася actionFn чи викинула помилку. Якщо actionFn викинула помилку — вона має бути прокинута далі після cleanup.",
    "reqs": [
      "Організуйте блок try...finally (без придушення помилки в catch).",
      "Зафіксуйте повернення результату з try.",
      "Переконайтеся, що cleanupFn() виконується завжди."
    ],
    "starterParams": "actionFn, cleanupFn",
    "starterBody": "// Забезпечте гарантоване очищення ресурсів",
    "tests": [
      {
        "expr": "(() => { let cleaned = false; const res = executeWithCleanup(() => 42, () => { cleaned = true; }); return { res, cleaned }; })()",
        "expected": {
          "res": 42,
          "cleaned": true
        }
      },
      {
        "expr": "(() => { let cleaned = false; let errorCaught = false; try { executeWithCleanup(() => { throw new Error('fail'); }, () => { cleaned = true; }); } catch(e) { errorCaught = true; } return { cleaned, errorCaught }; })()",
        "expected": {
          "cleaned": true,
          "errorCaught": true
        }
      }
    ]
  },
  {
    "id": "4.8",
    "moduleIdx": 4,
    "name": "validateStringLength",
    "title": "Контракт функції: Захисне програмування рядків (Defensive Programming)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію validateStringLength(str, min, max), яка перевіряє довжину рядка після trim(). Якщо str не є рядком — кидає TypeError('Параметр повинен бути рядком'). Якщо min > max — кидає RangeError('min не може бути більшим за max'). Якщо довжина < min або > max — кидає RangeError('Довжина поза дозволеним діапазоном'). Повертає очищений рядок.",
    "reqs": [
      "Перевірте typeof str === 'string'.",
      "Очистіть через str.trim().",
      "Перевірте коректність меж min та max."
    ],
    "starterParams": "str, min = 1, max = 100",
    "starterBody": "// Перевірте довжину рядка згідно контракту",
    "tests": [
      {
        "expr": "validateStringLength('   admin   ', 3, 10)",
        "expected": "admin"
      },
      {
        "expr": "(() => { try { validateStringLength(12345, 1, 10); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      },
      {
        "expr": "(() => { try { validateStringLength('ab', 5, 10); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { validateStringLength('hello', 10, 5); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      }
    ]
  },
  {
    "id": "4.9",
    "moduleIdx": 4,
    "name": "createCustomError",
    "title": "Створення спеціалізованого об'єкта помилки з метаданими",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCustomError(name, message, code = 500), яка створює новий об'єкт помилки new Error(message), змінює його властивість name на передане значення, додає властивість code і повертає цей об'єкт помилки (не викидаючи його через throw).",
    "reqs": [
      "Створіть const err = new Error(message).",
      "Встановіть err.name = name.",
      "Встановіть err.code = code і поверніть err."
    ],
    "starterParams": "name, message, code = 500",
    "starterBody": "// Створіть та поверніть налаштований об'єкт Error",
    "tests": [
      {
        "expr": "(() => { const e = createCustomError('DatabaseError', 'Connection timeout', 504); return { isError: e instanceof Error, name: e.name, msg: e.message, code: e.code }; })()",
        "expected": {
          "isError": true,
          "name": "DatabaseError",
          "msg": "Connection timeout",
          "code": 504
        }
      }
    ]
  },
  {
    "id": "4.10",
    "moduleIdx": 4,
    "name": "createValidationErrorClass",
    "title": "Кастомний клас помилки: Наслідування від Error (class ValidationError)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createValidationErrorClass(), яка оголошує і повертає клас ValidationError, успадкований від Error. Конструктор класу приймає message та field, викликає super(message), встановлює this.name = 'ValidationError' та this.field = field.",
    "reqs": [
      "Оголосіть class ValidationError extends Error { ... }.",
      "У конструкторі викличте super(message).",
      "Встановіть this.name = 'ValidationError' та this.field = field.",
      "Поверніть сам клас."
    ],
    "starterParams": "",
    "starterBody": "// Оголосіть та поверніть клас ValidationError",
    "tests": [
      {
        "expr": "(() => { const Cls = createValidationErrorClass(); const err = new Cls('Імʼя занадто коротке', 'username'); return { isErr: err instanceof Error, isCustom: err instanceof Cls, name: err.name, msg: err.message, field: err.field }; })()",
        "expected": {
          "isErr": true,
          "isCustom": true,
          "name": "ValidationError",
          "msg": "Імʼя занадто коротке",
          "field": "username"
        }
      }
    ]
  },
  {
    "id": "4.11",
    "moduleIdx": 4,
    "name": "parseUserRecord",
    "title": "Синтез: Рядки + Винятки. Парсинг рядка користувача з валідацією",
    "level": "Середній рівень",
    "goal": "Напишіть функцію parseUserRecord(csvLine), яка парсить рядок формату 'id,name,role'. Якщо csvLine не є рядком або після розбивки через кому не містить рівно 3 непорожні частини — функція кидає Error('Невірний формат запису: очікується id,name,role'). Повертає об'єкт { id: Number(id), name, role }.",
    "reqs": [
      "Перевірте typeof csvLine === 'string'.",
      "Розбийте рядок на частини за комою та очистіть кожну частину через trim().",
      "Якщо кількість частин !== 3 або будь-яка з них порожня — викиньте Error.",
      "Поверніть об'єкт { id, name, role }."
    ],
    "starterParams": "csvLine",
    "starterBody": "// Розпарсіть рядок з перевіркою та генерацією помилки",
    "tests": [
      {
        "expr": "parseUserRecord('101,Олена,admin')",
        "expected": {
          "id": 101,
          "name": "Олена",
          "role": "admin"
        }
      },
      {
        "expr": "parseUserRecord(' 202 ,  Максим  , user ')",
        "expected": {
          "id": 202,
          "name": "Максим",
          "role": "user"
        }
      },
      {
        "expr": "(() => { try { parseUserRecord('bad,record'); return 'OK'; } catch(e) { return e.message; } })()",
        "expected": "Невірний формат запису: очікується id,name,role"
      },
      {
        "expr": "(() => { try { parseUserRecord('abc,Олег,moderator'); return 'OK'; } catch(e) { return e.message; } })()",
        "expected": "Невірний id: очікується число"
      }
    ]
  },
  {
    "id": "4.12",
    "moduleIdx": 4,
    "name": "safeArrayAccess",
    "title": "Синтез: Масиви + RangeError. Безпечний доступ за індексом",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію safeArrayAccess(arr, index), яка перевіряє переданий масив та індекс. Якщо arr не є масивом — кидає TypeError('Очікується масив'). Якщо index не є цілим числом або виходить за межі [0, arr.length - 1] — кидає RangeError(`Індекс ${index} поза межами масиву`). Повертає arr[index].",
    "reqs": [
      "Перевірте Array.isArray(arr).",
      "Перевірте ціле число та діапазон 0 <= index < arr.length.",
      "Поверніть елемент."
    ],
    "starterParams": "arr, index",
    "starterBody": "// Перевірте межі індексу та поверніть елемент або згенеруйте RangeError",
    "tests": [
      {
        "expr": "safeArrayAccess(['яблуко', 'банан', 'груша'], 1)",
        "expected": "банан"
      },
      {
        "expr": "safeArrayAccess([10, 20, 30], 0)",
        "expected": 10
      },
      {
        "expr": "(() => { try { safeArrayAccess([1, 2], 5); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { safeArrayAccess('not-array', 0); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.13",
    "moduleIdx": 4,
    "name": "rethrowSpecific",
    "title": "Патерн Re-throwing: Вибіркове перехоплення та прокидання винятків",
    "level": "Середній рівень",
    "goal": "Напишіть функцію rethrowSpecific(fn), яка викликає fn() у try...catch. Якщо помилка є екземпляром TypeError — функція обробляє її та повертає рядок 'HANDLED_TYPE_ERROR: ' + err.message. Якщо помилка іншого типу (наприклад, RangeError чи SyntaxError) — вона повторно викидається далі через throw err.",
    "reqs": [
      "Перевірте: err instanceof TypeError.",
      "Якщо так — поверніть статус 'HANDLED_TYPE_ERROR: ...'.",
      "Якщо ні — здійсніть повторне викидання: throw err."
    ],
    "starterParams": "fn",
    "starterBody": "// Обробіть лише TypeError, а інші типи викиньте далі",
    "tests": [
      {
        "expr": "rethrowSpecific(() => 'all good')",
        "expected": "all good"
      },
      {
        "expr": "rethrowSpecific(() => { throw new TypeError('Wrong argument'); })",
        "expected": "HANDLED_TYPE_ERROR: Wrong argument"
      },
      {
        "expr": "(() => { try { rethrowSpecific(() => { throw new RangeError('Out of bounds'); }); return 'FAIL'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      }
    ]
  },
  {
    "id": "4.14",
    "moduleIdx": 4,
    "name": "batchProcessWithErrors",
    "title": "Синтез: Цикли + Масиви + Винятки. Пакетна обробка без зупинки",
    "level": "Середній рівень",
    "goal": "Напишіть функцію batchProcessWithErrors(items, processor), яка в циклі проходить по масиву items і викликає processor(item) для кожного елемента. Якщо виникає помилка — вона фіксується, але цикл не зупиняється. Поверніть { successes: [...], errors: [{ item, error }] }.",
    "reqs": [
      "Ініціалізуйте масиви successes та errors.",
      "Для кожного елемента використайте try...catch навколо processor(item).",
      "У разі успіху додайте результат у successes, у разі збою — запис у errors."
    ],
    "starterParams": "items, processor",
    "starterBody": "// Обробіть елементи масиву із накопиченням результатів і помилок",
    "tests": [
      {
        "expr": "batchProcessWithErrors([2, -4, 6, 0, -8], n => { if (n < 0) throw new Error('Відʼємне число!'); return n * 10; })",
        "expected": {
          "successes": [
            20,
            60,
            0
          ],
          "errors": [
            {
              "item": -4,
              "error": "Відʼємне число!"
            },
            {
              "item": -8,
              "error": "Відʼємне число!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "4.15",
    "moduleIdx": 4,
    "name": "safeMathEvaluate",
    "title": "Безпечний мікро-калькулятор рядкових виразів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію safeMathEvaluate(exprStr), яка обчислює простий вираз формату 'A + B', 'A - B', 'A * B', 'A / B'. Якщо рядок некоректний — кидає SyntaxError('Невірний вираз'). При діленні на 0 — кидає RangeError('Ділення на нуль'). Повертає числове значення результату.",
    "reqs": [
      "Розбийте рядок на 3 частини через пробіл або регулярний вираз.",
      "Перевірте, чи операнди є валідними числами.",
      "Обробіть операції +, -, *, / та перевірте ділення на 0."
    ],
    "starterParams": "exprStr",
    "starterBody": "// Обчисліть вираз з перевіркою синтаксису та ділення на нуль",
    "tests": [
      {
        "expr": "safeMathEvaluate('12 + 8')",
        "expected": 20
      },
      {
        "expr": "safeMathEvaluate('50 - 15')",
        "expected": 35
      },
      {
        "expr": "safeMathEvaluate('6 * 7')",
        "expected": 42
      },
      {
        "expr": "safeMathEvaluate('100 / 4')",
        "expected": 25
      },
      {
        "expr": "(() => { try { safeMathEvaluate('10 / 0'); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { safeMathEvaluate('invalid string'); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "SyntaxError"
      }
    ]
  },
  {
    "id": "4.16",
    "moduleIdx": 4,
    "name": "runWithLoadingState",
    "title": "Патерн керування станом (Loading Flag) з блоком finally",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію runWithLoadingState(stateObj, taskFn), яка встановлює stateObj.isLoading = true, виконує taskFn(), і обов'язково у блоці finally скидає stateObj.isLoading = false. Повертає результат taskFn() або прокидає помилку далі.",
    "reqs": [
      "Встановіть stateObj.isLoading = true.",
      "У блоці try викличте taskFn().",
      "У блоці finally встановіть stateObj.isLoading = false."
    ],
    "starterParams": "stateObj, taskFn",
    "starterBody": "// Забезпечте скидання прапорця isLoading у finally",
    "tests": [
      {
        "expr": "(() => { const state = { isLoading: false }; const val = runWithLoadingState(state, () => { if (!state.isLoading) throw new Error('Not loading!'); return 777; }); return { val, finalLoading: state.isLoading }; })()",
        "expected": {
          "val": 777,
          "finalLoading": false
        }
      },
      {
        "expr": "(() => { const state = { isLoading: false }; let errCaught = false; try { runWithLoadingState(state, () => { throw new Error('fail'); }); } catch(e) { errCaught = true; } return { errCaught, finalLoading: state.isLoading }; })()",
        "expected": {
          "errCaught": true,
          "finalLoading": false
        }
      }
    ]
  },
  {
    "id": "4.17",
    "moduleIdx": 4,
    "name": "retryOperation",
    "title": "Патерн повторних спроб (Retry Pattern з лічильником)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію retryOperation(fn, maxRetries = 3), яка намагається виконати fn(). Якщо виникає помилка, функція повторює виклик у циклі до maxRetries разів. Якщо всі спроби вичерпано — викидає останню отриману помилку. Повертає результат при першому успіху.",
    "reqs": [
      "Організуйте цикл for або while до maxRetries.",
      "Огорніть виклик fn() у try...catch.",
      "Збережіть останню помилку lastError і викиньте її, якщо спроби вичерпано."
    ],
    "starterParams": "fn, maxRetries = 3",
    "starterBody": "// Повторюйте спроби виконання fn() до maxRetries разів",
    "tests": [
      {
        "expr": "(() => { let attempts = 0; const res = retryOperation(() => { attempts++; if (attempts < 3) throw new Error('Temporary failure'); return 'Success on attempt ' + attempts; }, 5); return { res, attempts }; })()",
        "expected": {
          "res": "Success on attempt 3",
          "attempts": 3
        }
      },
      {
        "expr": "(() => { try { retryOperation(() => { throw new Error('Permanent crash'); }, 3); return 'NO_THROW'; } catch(e) { return e.message; } })()",
        "expected": "Permanent crash"
      }
    ]
  },
  {
    "id": "4.18",
    "moduleIdx": 4,
    "name": "validateEmail",
    "title": "Синтез: Рядки + Валідація email з генерацією винятків",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію validateEmail(email), яка перевіряє адресу ел. пошти. Якщо email не рядок — кидає TypeError('Email має бути рядком'). Якщо після trim() не містить символ '@' або крапку після '@' — кидає Error('Некоректний формат email'). Повертає очищений рядок у нижньому регістрі.",
    "reqs": [
      "Перевірте typeof email === 'string'.",
      "Очистіть через trim().toLowerCase().",
      "Перевірте наявність '@' та '.' після '@'.",
      "Поверніть валідний email."
    ],
    "starterParams": "email",
    "starterBody": "// Перевірте коректність email і поверніть його або згенеруйте помилку",
    "tests": [
      {
        "expr": "validateEmail('  STUDENT@Camp.edu.ua  ')",
        "expected": "student@camp.edu.ua"
      },
      {
        "expr": "validateEmail('test.dev@company.com')",
        "expected": "test.dev@company.com"
      },
      {
        "expr": "(() => { try { validateEmail('plainaddress'); return 'OK'; } catch(e) { return e.message; } })()",
        "expected": "Некоректний формат email"
      },
      {
        "expr": "(() => { try { validateEmail(12345); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.19",
    "moduleIdx": 4,
    "name": "assertCondition",
    "title": "Універсальна функція перевірки тверджень (Assert Helper)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію assertCondition(condition, message = 'Assertion failed', ErrorConstructor = Error), яка перевіряє умову condition. Якщо умова хибна (falsy) — генерує виняток new ErrorConstructor(message). Якщо істинна — повертає true.",
    "reqs": [
      "Перевірте !condition.",
      "Якщо хибна — throw new ErrorConstructor(message).",
      "Якщо істинна — return true."
    ],
    "starterParams": "condition, message = 'Assertion failed', ErrorConstructor = Error",
    "starterBody": "// Перевірте умову або згенеруйте заданий тип помилки",
    "tests": [
      {
        "expr": "assertCondition(5 > 2)",
        "expected": true
      },
      {
        "expr": "(() => { try { assertCondition(false, 'Дані відсутні', TypeError); return 'NO_THROW'; } catch(e) { return { name: e.name, msg: e.message }; } })()",
        "expected": {
          "name": "TypeError",
          "msg": "Дані відсутні"
        }
      }
    ]
  },
  {
    "id": "4.20",
    "moduleIdx": 4,
    "name": "formatErrorLog",
    "title": "Форматування діагностичного логу помилки у рядок",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію formatErrorLog(error, context = 'Core'), яка приймає об'єкт помилки та рядок контексту, і повертає рядок формату: '[ERROR:{context}] {error.name}: {error.message}'. Якщо error не є об'єктом — використовує 'UnknownError' та текстове представлення помилки.",
    "reqs": [
      "Визначте name помилки (або 'UnknownError').",
      "Визначте message помилки (або String(error)).",
      "Поверніть відформатований рядок логу."
    ],
    "starterParams": "error, context = 'Core'",
    "starterBody": "// Сформуйте стандартизований рядок логу",
    "tests": [
      {
        "expr": "formatErrorLog(new TypeError('Invalid token'), 'Auth')",
        "expected": "[ERROR:Auth] TypeError: Invalid token"
      },
      {
        "expr": "formatErrorLog(new RangeError('Out of bounds'), 'DataGrid')",
        "expected": "[ERROR:DataGrid] RangeError: Out of bounds"
      },
      {
        "expr": "formatErrorLog('Plain text crash')",
        "expected": "[ERROR:Core] UnknownError: Plain text crash"
      }
    ]
  },
  {
    "id": "4.21",
    "moduleIdx": 4,
    "name": "safeDeepProperty",
    "title": "Безпечний доступ до глибоких властивостей об'єкта (Optional Chaining polyfill)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію safeDeepProperty(obj, pathString, fallback = undefined), яка приймає об'єкт та рядок шляху через крапку (наприклад, 'user.profile.address.city'). Використовує цикл або ланцюжок доступу. Якщо на будь-якому рівні виникає TypeError або властивість відсутня — повертає fallback.",
    "reqs": [
      "Огорніть пошук у try...catch.",
      "Розбийте pathString на сегменти через split('.').",
      "Послідовно перейдіть по сегментах.",
      "Поверніть fallback при помилці чи відсутності значення."
    ],
    "starterParams": "obj, pathString, fallback = undefined",
    "starterBody": "// Безпечно отримайте вкладену властивість",
    "tests": [
      {
        "expr": "safeDeepProperty({ user: { profile: { name: 'Дарина' } } }, 'user.profile.name')",
        "expected": "Дарина"
      },
      {
        "expr": "safeDeepProperty({ user: null }, 'user.profile.name', 'NO_PROFILE')",
        "expected": "NO_PROFILE"
      },
      {
        "expr": "safeDeepProperty({}, 'a.b.c.d', 'N/A')",
        "expected": "N/A"
      },
      {
        "expr": "safeDeepProperty(null, 'foo.bar', 0)",
        "expected": 0
      }
    ]
  },
  {
    "id": "4.22",
    "moduleIdx": 4,
    "name": "createHttpErrorClass",
    "title": "Кастомний клас HttpError зі статус-кодом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createHttpErrorClass(), яка оголошує і повертає клас HttpError, успадкований від Error. Конструктор приймає statusCode, message. Встановлює this.name = 'HttpError', this.statusCode = statusCode.",
    "reqs": [
      "Клас наслідує Error.",
      "super(message) ініціалізує повідомлення.",
      "Встановіть this.name = 'HttpError' та this.statusCode = statusCode."
    ],
    "starterParams": "",
    "starterBody": "// Створіть та поверніть клас HttpError",
    "tests": [
      {
        "expr": "(() => { const HttpError = createHttpErrorClass(); const err = new HttpError(404, 'Користувача не знайдено'); return { isErr: err instanceof Error, name: err.name, code: err.statusCode, msg: err.message }; })()",
        "expected": {
          "isErr": true,
          "name": "HttpError",
          "code": 404,
          "msg": "Користувача не знайдено"
        }
      },
      {
        "expr": "(() => { const HttpError = createHttpErrorClass(); const err = new HttpError(500, 'Внутрішня помилка сервера'); return err.statusCode; })()",
        "expected": 500
      }
    ]
  },
  {
    "id": "4.23",
    "moduleIdx": 4,
    "name": "filterValidEntries",
    "title": "Синтез: Масиви + Валідатор. Фільтрація елементів за безпечним предикатом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію filterValidEntries(dataArray, validatorFn), яка приймає масив елементів та функцію-валідатор. Валідатор або повертає true, або викидає виняток при невідповідності. Функція повертає новий масив лише з тих елементів, де validatorFn не викинув помилку і повернув truthy значення.",
    "reqs": [
      "Пройдіть по dataArray через цикл або filter.",
      "Огорніть validatorFn(item) у try...catch.",
      "Залиште лише елементи, які успішно пройшли валідацію."
    ],
    "starterParams": "dataArray, validatorFn",
    "starterBody": "// Відфільтруйте елементи, які не викидають помилок у валідаторі",
    "tests": [
      {
        "expr": "filterValidEntries(['hello', '', 'world', 123, 'supabase'], val => { if (typeof val !== 'string') throw new TypeError('not string'); if (!val.length) throw new Error('empty'); return true; })",
        "expected": [
          "hello",
          "world",
          "supabase"
        ]
      }
    ]
  },
  {
    "id": "4.24",
    "moduleIdx": 4,
    "name": "chainWithCatch",
    "title": "Конвеєр функцій із фіксацією кроку аварії (Pipelines with error tracing)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію chainWithCatch(initialValue, ...fns), яка послідовно пропускає значення крізь масив функцій. Якщо на якомусь кроці fns[i] викидає помилку — виконання зупиняється і повертається { success: false, failedAtStep: i, error: err.message }. Якщо всі кроки успішні — повертає { success: true, value }.",
    "reqs": [
      "Зберігайте поточне значення curr = initialValue.",
      "Проходьте по функціях за індексом i від 0 до fns.length - 1.",
      "При виникненні винятку негайно поверніть статус помилки з індексом кроку."
    ],
    "starterParams": "initialValue, ...fns",
    "starterBody": "// Реалізуйте захищений ланцюжок викликів",
    "tests": [
      {
        "expr": "chainWithCatch(10, x => x + 5, x => x * 2, x => x - 10)",
        "expected": {
          "success": true,
          "value": 20
        }
      },
      {
        "expr": "chainWithCatch('test', s => s.toUpperCase(), s => { throw new Error('Format failed'); }, s => s + '!')",
        "expected": {
          "success": false,
          "failedAtStep": 1,
          "error": "Format failed"
        }
      }
    ]
  },
  {
    "id": "4.25",
    "moduleIdx": 4,
    "name": "safeArrayTransform",
    "title": "Синтез: Масиви + Цикли. Трансформація з заміщенням збійних елементів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію safeArrayTransform(arr, transformFn, defaultVal = null), яка трансформує кожен елемент масиву arr за допомогою transformFn. Якщо для якогось елемента transformFn викидає помилку — на його місце записується defaultVal.",
    "reqs": [
      "Створіть результуючий масив.",
      "Огорніть transformFn(arr[i], i) у try...catch.",
      "Поверніть трансформований масив однакової довжини з arr."
    ],
    "starterParams": "arr, transformFn, defaultVal = null",
    "starterBody": "// Трансформуйте елементи, підставляючи defaultVal при збої",
    "tests": [
      {
        "expr": "safeArrayTransform(['10', '20', 'invalid', '40'], s => { const n = Number(s); if (Number.isNaN(n) || s === 'invalid') throw new Error('NaN'); return n; }, 0)",
        "expected": [
          10,
          20,
          0,
          40
        ]
      }
    ]
  },
  {
    "id": "4.26",
    "moduleIdx": 4,
    "name": "validateMatrixSquare",
    "title": "Синтез: 2D Матриці + Вкладені цикли + Винятки",
    "level": "Середній рівень",
    "goal": "Напишіть функцію validateMatrixSquare(matrix), яка перевіряє, чи є matrix коректною квадратною матрицею (N x N) чисел. Якщо matrix не є масивом масивів — кидає TypeError('Матриця повинна бути двовимірним масивом'). Якщо кількість стовпців хоча б в одному рядку не дорівнює кількості рядків — кидає RangeError('Матриця повинна бути квадратною N x N'). Якщо всі елементи числа — повертає розмірність N.",
    "reqs": [
      "Перевірте, що matrix є непорожнім масивом і кожен елемент — масив.",
      "Перевірте довжину кожного рядка (row.length === matrix.length).",
      "Перевірте, що всі комірки — валідні числа.",
      "Поверніть розмірність N."
    ],
    "starterParams": "matrix",
    "starterBody": "// Валідуйте квадратну матрицю та поверніть її розмірність N",
    "tests": [
      {
        "expr": "validateMatrixSquare([[1, 2], [3, 4]])",
        "expected": 2
      },
      {
        "expr": "validateMatrixSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": 3
      },
      {
        "expr": "(() => { try { validateMatrixSquare([[1, 2, 3], [4, 5]]); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { validateMatrixSquare([[1, 'bad'], [3, 4]]); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.27",
    "moduleIdx": 4,
    "name": "createSafeHandler",
    "title": "Патерн Golang/Rust: Кортежне повернення результату [data, error]",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createSafeHandler(fn), яка огортає синхронну функцію fn і повертає нову функцію (...args). Ця функція ніколи не викидає винятків назовні, а повертає масив із двох елементів: у разі успіху — [result, null], а у разі збою — [null, error].",
    "reqs": [
      "Поверніть функцію (...args).",
      "У try викличте fn(...args) і поверніть [result, null].",
      "У catch поверніть [null, err]."
    ],
    "starterParams": "fn",
    "starterBody": "// Реалізуйте безпечну обгортку з кортежем [data, error]",
    "tests": [
      {
        "expr": "(() => { const safeDiv = createSafeHandler((a, b) => { if (b === 0) throw new Error('Zero division'); return a / b; }); const [d1, e1] = safeDiv(10, 2); const [d2, e2] = safeDiv(10, 0); return { s1: d1, err1: e1, s2: d2, err2Msg: e2.message }; })()",
        "expected": {
          "s1": 5,
          "err1": null,
          "s2": null,
          "err2Msg": "Zero division"
        }
      }
    ]
  },
  {
    "id": "4.28",
    "moduleIdx": 4,
    "name": "parseConfigFile",
    "title": "Комплексний парсер конфігураційних рядків із зазначенням рядка збою",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію parseConfigFile(rawConfig), яка парсить багаторядковий текст формату KEY=VALUE. Пропускає порожні рядки та рядки, що починаються з '#'. Якщо рядок не містить знака '=', функція кидає SyntaxError(`Помилка синтаксису в рядку ${lineNum}: відсутній знак '='`). Повертає об'єкт ключів і значень.",
    "reqs": [
      "Розбийте рядок на лінії через split('\\n').",
      "Відслідковуйте номер рядка lineNum (1-indexed).",
      "Пропускайте коментарі '#' та порожні рядки.",
      "При відсутності '=' викиньте SyntaxError із зазначенням номера рядка.",
      "Поверніть об'єкт ключ-значення."
    ],
    "starterParams": "rawConfig",
    "starterBody": "// Розпарсіть конфіг із детальною діагностикою помилок синтаксису",
    "tests": [
      {
        "expr": "parseConfigFile('# Коментар\\nHOST=localhost\\nPORT=8080\\n\\nDEBUG=true')",
        "expected": {
          "HOST": "localhost",
          "PORT": "8080",
          "DEBUG": "true"
        }
      },
      {
        "expr": "(() => { try { parseConfigFile('VALID=true\\nBROKEN_LINE\\nOTHER=1'); return 'OK'; } catch(e) { return { name: e.name, msg: e.message }; } })()",
        "expected": {
          "name": "SyntaxError",
          "msg": "Помилка синтаксису в рядку 2: відсутній знак '='"
        }
      }
    ]
  },
  {
    "id": "4.29",
    "moduleIdx": 4,
    "name": "wrapExceptionWithCause",
    "title": "Патерн обгортання винятків (Exception Wrapping з властивістю cause)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію wrapExceptionWithCause(actionFn, HighLevelErrorClass, userMessage), яка виконує actionFn(). Якщо виникає будь-яка низькорівнева помилка — перехоплює її і викидає new HighLevelErrorClass(userMessage, { cause: err }). Якщо actionFn успішна — повертає її результат.",
    "reqs": [
      "Огорніть виклик actionFn() у блок try...catch.",
      "У блоці catch створіть помилку: const wrapped = new HighLevelErrorClass(userMessage, { cause: err });",
      "Якщо середовище не підтримує options.cause автоматично, встановіть wrapped.cause = err вручну.",
      "Викиньте throw wrapped."
    ],
    "starterParams": "actionFn, HighLevelErrorClass, userMessage",
    "starterBody": "// Обгорніть виняток у високорівневий клас помилки з cause",
    "tests": [
      {
        "expr": "(() => { class ReadError extends Error {}; try { wrapExceptionWithCause(() => { JSON.parse('{bad json}'); }, ReadError, 'Не вдалося прочитати конфігурацію'); return 'NO_THROW'; } catch(e) { return { isReadError: e instanceof ReadError, msg: e.message, hasCause: Boolean(e.cause), causeName: e.cause ? e.cause.name : null }; } })()",
        "expected": {
          "isReadError": true,
          "msg": "Не вдалося прочитати конфігурацію",
          "hasCause": true,
          "causeName": "SyntaxError"
        }
      }
    ]
  },
  {
    "id": "4.30",
    "moduleIdx": 4,
    "name": "createBaseCustomError",
    "title": "Динамічний базовий клас помилок (this.constructor.name та поліморфізм)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createBaseCustomError(), яка створює та повертає клас CustomAppError extends Error. У конструкторі він викликає super(message), встановлює this.name = this.constructor.name, і якщо передано options.cause або options.code — записує їх у властивості екземпляра.",
    "reqs": [
      "Оголосіть class CustomAppError extends Error { constructor(message, options = {}) { ... } }.",
      "Встановіть this.name = this.constructor.name (щоб класи-нащадки автоматично мали правильне ім'я).",
      "Призначте this.code та this.cause за наявності.",
      "Поверніть клас CustomAppError."
    ],
    "starterParams": "",
    "starterBody": "// Створіть та поверніть гнучкий базовий клас помилок",
    "tests": [
      {
        "expr": "(() => { const Base = createBaseCustomError(); class NetworkTimeoutError extends Base {} const err = new NetworkTimeoutError('Сервер не відповідає', { code: 504, cause: new Error('Socket closed') }); return { isBase: err instanceof Base, isError: err instanceof Error, isChild: err instanceof NetworkTimeoutError, name: err.name, msg: err.message, code: err.code, causeMsg: err.cause.message }; })()",
        "expected": {
          "isBase": true,
          "isError": true,
          "isChild": true,
          "name": "NetworkTimeoutError",
          "msg": "Сервер не відповідає",
          "code": 504,
          "causeMsg": "Socket closed"
        }
      }
    ]
  },
  {
    "id": "4.31",
    "moduleIdx": 4,
    "name": "validateSchemaContract",
    "title": "Контракт валідації схеми об'єкта (Aggregate Validation Errors)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію validateSchemaContract(data, schema), де schema описує обов'язкові типи: { name: 'string', age: 'number' }. Якщо якісь поля відсутні або мають неправильний тип — збирає ВСІ помилки в масив і кидає Error('Помилки валідації: ' + errors.join('; ')). Якщо все валідно — повертає true.",
    "reqs": [
      "Перевірте кожне поле схеми.",
      "Накопичуйте всі знайдені помилки в масив errors.",
      "Якщо масив errors не порожній — throw new Error(...).",
      "Інакше return true."
    ],
    "starterParams": "data, schema",
    "starterBody": "// Валідуйте об'єкт за схемою",
    "tests": [
      {
        "expr": "validateSchemaContract({ name: 'Олена', age: 25 }, { name: 'string', age: 'number' })",
        "expected": true
      },
      {
        "expr": "(() => { try { validateSchemaContract({ name: 123, age: 'twenty' }, { name: 'string', age: 'number' }); return 'NO_THROW'; } catch(e) { return e.message; } })()",
        "expected": "Помилки валідації: Поле name повинно мати тип string; Поле age повинно мати тип number"
      }
    ]
  },
  {
    "id": "4.32",
    "moduleIdx": 4,
    "name": "safeAsyncWrapper",
    "title": "Безпечна ізоляція колбека в таймері (Async Exception Trap)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію safeAsyncWrapper(asyncFn, onError), яка повертає нову функцію (...args). Коли ця нова функція викликається, вона виконує asyncFn у try...catch і у разі помилки викликає onError(err), не даючи впасти глобальному середовищу.",
    "reqs": [
      "Поверніть функцію (...args).",
      "У try викличте asyncFn(...args).",
      "У catch передайте помилку в onError(err)."
    ],
    "starterParams": "asyncFn, onError",
    "starterBody": "// Ізолюйте помилку всередині асинхронної обгортки",
    "tests": [
      {
        "expr": "(() => { let caught = null; const safe = safeAsyncWrapper(() => { throw new Error('Async crash'); }, err => { caught = err.message; }); safe(); return caught; })()",
        "expected": "Async crash"
      }
    ]
  },
  {
    "id": "4.33",
    "moduleIdx": 4,
    "name": "parseUrlStrict",
    "title": "Суворий парсер URL з перехопленням URIError та TypeError",
    "level": "Середній рівень",
    "goal": "Напишіть функцію parseUrlStrict(urlString), яка намагається створити new URL(urlString). Якщо рядок некоректний — перехоплює TypeError і повертає { valid: false, error: 'INVALID_URL' }. У разі успіху повертає { valid: true, protocol: u.protocol, host: u.host, pathname: u.pathname }.",
    "reqs": [
      "Використайте try...catch навколо new URL(urlString).",
      "Поверніть розпарсені властивості або статус помилки."
    ],
    "starterParams": "urlString",
    "starterBody": "// Розпарсіть URL або перехопіть TypeError",
    "tests": [
      {
        "expr": "parseUrlStrict('https://supabase.com/docs/guides')",
        "expected": {
          "valid": true,
          "protocol": "https:",
          "host": "supabase.com",
          "pathname": "/docs/guides"
        }
      },
      {
        "expr": "parseUrlStrict('not a valid url')",
        "expected": {
          "valid": false,
          "error": "INVALID_URL"
        }
      }
    ]
  },
  {
    "id": "4.34",
    "moduleIdx": 4,
    "name": "executeWithTimeoutFallback",
    "title": "Патерн аварійного тайм-ауту (Fallback on Failure)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію executeWithTimeoutFallback(operationFn, fallbackValue), яка запускає operationFn(). Якщо операція викидає будь-яку помилку — негайно повертає fallbackValue.",
    "reqs": [
      "Огорніть виклик у try...catch.",
      "Поверніть результат або fallbackValue."
    ],
    "starterParams": "operationFn, fallbackValue",
    "starterBody": "// Виконайте операцію з безпечним fallback",
    "tests": [
      {
        "expr": "executeWithTimeoutFallback(() => 100 * 5, 0)",
        "expected": 500
      },
      {
        "expr": "executeWithTimeoutFallback(() => { throw new Error('Fail'); }, 'DEFAULT')",
        "expected": "DEFAULT"
      }
    ]
  },
  {
    "id": "4.35",
    "moduleIdx": 4,
    "name": "assertArrayNotEmpty",
    "title": "Захисний контракт: Перевірка непорожнього масиву",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію assertArrayNotEmpty(arr, paramName = 'list'), яка перевіряє, що arr є масивом і має length > 0. Якщо не масив — кидає TypeError(`Параметр ${paramName} повинен бути масивом`). Якщо порожній — кидає RangeError(`Масив ${paramName} не може бути порожнім`). Інакше повертає arr.",
    "reqs": [
      "Перевірте Array.isArray(arr).",
      "Перевірте arr.length > 0.",
      "Поверніть arr."
    ],
    "starterParams": "arr, paramName = 'list'",
    "starterBody": "// Перевірте чи масив непорожній",
    "tests": [
      {
        "expr": "assertArrayNotEmpty([1, 2, 3])",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "(() => { try { assertArrayNotEmpty([]); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { assertArrayNotEmpty('string'); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.36",
    "moduleIdx": 4,
    "name": "sanitizeAndParseJson",
    "title": "Синтез: Рядки + JSON + Винятки. Парсинг з попереднім очищенням",
    "level": "Середній рівень",
    "goal": "Напишіть функцію sanitizeAndParseJson(rawString), яка обрізає пробіли, видаляє символи переносу рядка на початку й у кінці, і намагається виконати JSON.parse. Якщо синтаксис порушено — викидає SyntaxError('Невалідний JSON формат'). Повертає об'єкт.",
    "reqs": [
      "Очистіть rawString.trim().",
      "У try викличте JSON.parse.",
      "У catch викиньте зрозумілий SyntaxError."
    ],
    "starterParams": "rawString",
    "starterBody": "// Очистіть та розпарсіть JSON рядок",
    "tests": [
      {
        "expr": "sanitizeAndParseJson('   {\"status\": \"ok\"}  \\n')",
        "expected": {
          "status": "ok"
        }
      },
      {
        "expr": "(() => { try { sanitizeAndParseJson('{bad}'); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "SyntaxError"
      }
    ]
  },
  {
    "id": "4.37",
    "moduleIdx": 4,
    "name": "createBoundedStack",
    "title": "Синтез: Стек з обмеженою місткістю та переповненням",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBoundedStack(maxSize = 3), яка створює стек: push(val), pop(), size(). Якщо при push кількість перевищує maxSize — кидає RangeError('Stack overflow: стек переповнено'). Якщо при pop стек порожній — кидає RangeError('Stack underflow: стек порожній').",
    "reqs": [
      "Збережіть масив items у замиканні.",
      "Перевіряйте межі при push та pop і генеруйте RangeError.",
      "Повертайте видалений елемент при pop."
    ],
    "starterParams": "maxSize = 3",
    "starterBody": "// Реалізуйте обмежений стек з перевірками",
    "tests": [
      {
        "expr": "(() => { const stack = createBoundedStack(2); stack.push(10); stack.push(20); let overflow = false; try { stack.push(30); } catch(e) { overflow = e instanceof RangeError; } const p1 = stack.pop(); return { overflow, p1, size: stack.size() }; })()",
        "expected": {
          "overflow": true,
          "p1": 20,
          "size": 1
        }
      }
    ]
  },
  {
    "id": "4.38",
    "moduleIdx": 4,
    "name": "guardClauseDivision",
    "title": "Патерн Guard Clauses: Багаторівнева фільтрація операцій",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію guardClauseDivision(numerator, denominator), яка перевіряє обидва числа. Якщо будь-яке не є скінченним числом (Number.isFinite) — кидає TypeError('Обидва аргументи повинні бути скінченними числами'). Якщо denominator === 0 — кидає RangeError('Неможливо ділити на 0'). Повертає результат.",
    "reqs": [
      "Використайте Guard Clauses на початку.",
      "Поверніть numerator / denominator."
    ],
    "starterParams": "numerator, denominator",
    "starterBody": "// Перевірте параметри за допомогою Guard Clauses",
    "tests": [
      {
        "expr": "guardClauseDivision(50, 5)",
        "expected": 10
      },
      {
        "expr": "(() => { try { guardClauseDivision(50, 0); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "RangeError"
      },
      {
        "expr": "(() => { try { guardClauseDivision('50', 5); return 'OK'; } catch(e) { return e.name; } })()",
        "expected": "TypeError"
      }
    ]
  },
  {
    "id": "4.39",
    "moduleIdx": 4,
    "name": "mapWithErrorHandler",
    "title": "HOF: Безпечна трансформація елементів із колбеком помилки",
    "level": "Середній рівень",
    "goal": "Напишіть функцію mapWithErrorHandler(arr, transformFn, onError), яка проходить по масиву. Якщо transformFn(item) кидає помилку — викликається onError(err, item, index) і його результат підставляється на поточне місце.",
    "reqs": [
      "Пройдіть по arr циклом.",
      "Огорніть transformFn у try...catch.",
      "При збої поверніть onError(err, item, i)."
    ],
    "starterParams": "arr, transformFn, onError",
    "starterBody": "// Трансформуйте елементи із заміною збійних через onError",
    "tests": [
      {
        "expr": "mapWithErrorHandler(['10', 'bad', '30'], s => { const n = Number(s); if (Number.isNaN(n) || s === 'bad') throw new Error('NaN'); return n; }, (err, val) => `ERROR_${val}`)",
        "expected": [
          10,
          "ERROR_bad",
          30
        ]
      }
    ]
  },
  {
    "id": "4.40",
    "moduleIdx": 4,
    "name": "executeWithFinallyMetrics",
    "title": "Метрика виконання функції у блоці finally",
    "level": "Середній рівень",
    "goal": "Напишіть функцію executeWithFinallyMetrics(fn, metricsCollector), яка виконує fn(), фіксує статус ('success' або 'error') та час початку, і обов'язково у блоці finally викликає metricsCollector({ status, hasError, errorMsg }).",
    "reqs": [
      "Встановіть status = 'success'.",
      "У try викличте fn().",
      "У catch запишіть статус 'error' та прокиньте помилку далі.",
      "У finally викличте metricsCollector."
    ],
    "starterParams": "fn, metricsCollector",
    "starterBody": "// Зафіксуйте метрики виконання у блоці finally",
    "tests": [
      {
        "expr": "(() => { let metric = null; const res = executeWithFinallyMetrics(() => 42, m => { metric = m; }); return { res, metric }; })()",
        "expected": {
          "res": 42,
          "metric": {
            "status": "success",
            "hasError": false,
            "errorMsg": null
          }
        }
      },
      {
        "expr": "(() => { let metric = null; let threw = false; try { executeWithFinallyMetrics(() => { throw new Error('MetricCrash'); }, m => { metric = m; }); } catch(e) { threw = true; } return { threw, metric }; })()",
        "expected": {
          "threw": true,
          "metric": {
            "status": "error",
            "hasError": true,
            "errorMsg": "MetricCrash"
          }
        }
      }
    ]
  },
  {
    "id": "5.1",
    "moduleIdx": 5,
    "name": "createCounterButton",
    "title": "DOM: Кнопка-лічильник кліків (Counter Button)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCounterButton(initialCount = 0), яка створює елемент <button>, що відображає 'Кліків: {count}'. При кожному кліку лічильник збільшується на 1 і текст кнопки оновлюється. Повертає створений елемент кнопки.",
    "reqs": [
      "Створіть кнопку через document.createElement('button').",
      "Встановіть початковий текст 'Кліків: ' + initialCount.",
      "Додайте слухач події 'click', що інкрементує лічильник та оновлює textContent.",
      "Поверніть елемент кнопки."
    ],
    "starterParams": "initialCount = 0",
    "starterBody": "// Створіть та поверніть кнопку-лічильник",
    "tests": [
      {
        "expr": "(() => { const btn = createCounterButton(5); const t1 = btn.textContent; btn.click(); const t2 = btn.textContent; return [t1, t2]; })()",
        "expected": [
          "Кліків: 5",
          "Кліків: 6"
        ]
      }
    ]
  },
  {
    "id": "5.2",
    "moduleIdx": 5,
    "name": "createThemeToggle",
    "title": "DOM: Перемикач темної теми (Theme Toggle Switch)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createThemeToggle(targetContainer), яка створює кнопку з текстом '🌙 Темна тема'. При кліку вона перемикає клас 'dark-theme' на targetContainer, а текст змінюється між '☀️ Світла тема' та '🌙 Темна тема'. Повертає кнопку.",
    "reqs": [
      "Створіть кнопку з початковим текстом '🌙 Темна тема'.",
      "При кліку викличте targetContainer.classList.toggle('dark-theme').",
      "Змініть textContent кнопки відповідно до наявності класу.",
      "Поверніть кнопку."
    ],
    "starterParams": "targetContainer",
    "starterBody": "// Реалізуйте кнопку перемикання теми",
    "tests": [
      {
        "expr": "(() => { const div = document.createElement('div'); const btn = createThemeToggle(div); btn.click(); const hasDark = div.classList.contains('dark-theme'); const txt = btn.textContent; return { hasDark, txt }; })()",
        "expected": {
          "hasDark": true,
          "txt": "☀️ Світла тема"
        }
      }
    ]
  },
  {
    "id": "5.3",
    "moduleIdx": 5,
    "name": "createStatusBadge",
    "title": "DOM: Кастомний бейдж статусу (Status Badge)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createStatusBadge(status, label), яка створює елемент <span> з класами 'badge' та 'badge-{status}' (наприклад, 'badge-success'), і встановлює textContent у значення label.",
    "reqs": [
      "Створіть span через document.createElement('span').",
      "Додайте класи через className або classList.add.",
      "Встановіть textContent = label.",
      "Поверніть елемент."
    ],
    "starterParams": "status, label",
    "starterBody": "// Створіть стилізований бейдж",
    "tests": [
      {
        "expr": "(() => { const b = createStatusBadge('success', 'Активно'); return { tag: b.tagName.toLowerCase(), cls: b.className, txt: b.textContent }; })()",
        "expected": {
          "tag": "span",
          "cls": "badge badge-success",
          "txt": "Активно"
        }
      }
    ]
  },
  {
    "id": "5.4",
    "moduleIdx": 5,
    "name": "createTodoItem",
    "title": "DOM: Елемент списку задач (Todo Item)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTodoItem(taskText, onToggle, onDelete), яка створює <li class='todo-item'> з чекбоксом <input type='checkbox'>, <span> з текстом задачі та кнопкою <button class='btn-delete'>Видалити</button>. При зміні чекбокса викликає onToggle(completed), при кліку на кнопку видалення — onDelete().",
    "reqs": [
      "Створіть структуру li -> input, span, button.",
      "Підключіть слухач 'change' для чекбокса.",
      "Підключіть слухач 'click' для кнопки видалення.",
      "Поверніть елемент li."
    ],
    "starterParams": "taskText, onToggle, onDelete",
    "starterBody": "// Створіть компонент елемента списку задач",
    "tests": [
      {
        "expr": "(() => { let toggled = null; let deleted = false; const item = createTodoItem('Вивчити DOM', c => { toggled = c; }, () => { deleted = true; }); const cb = item.querySelector('input'); cb.checked = true; cb.dispatchEvent(new Event('change')); const delBtn = item.querySelector('.btn-delete'); delBtn.click(); return { txt: item.querySelector('span').textContent, toggled, deleted }; })()",
        "expected": {
          "txt": "Вивчити DOM",
          "toggled": true,
          "deleted": true
        }
      }
    ]
  },
  {
    "id": "5.5",
    "moduleIdx": 5,
    "name": "createAccordion",
    "title": "DOM: Акордеон / Спойлер (Collapsible Accordion)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createAccordion(title, contentText), яка створює блок спойлера з класом 'accordion-item'. Всередині кнопка 'accordion-header' та блок 'accordion-body' (початково style.display = 'none'). При кліку на заголовок тіло перемикається між 'block' та 'none'.",
    "reqs": [
      "Створіть контейнер div.accordion-item.",
      "Створіть кнопку заголовка button.accordion-header з текстом title.",
      "Створіть блок тіла div.accordion-body з текстом contentText і початковим display = 'none'.",
      "При кліку на заголовок змінюйте display тіла."
    ],
    "starterParams": "title, contentText",
    "starterBody": "// Створіть елемент акордеона",
    "tests": [
      {
        "expr": "(() => { const acc = createAccordion('Питання 1', 'Відповідь'); const body = acc.querySelector('.accordion-body'); const d1 = body.style.display; acc.querySelector('.accordion-header').click(); const d2 = body.style.display; return [d1, d2]; })()",
        "expected": [
          "none",
          "block"
        ]
      }
    ]
  },
  {
    "id": "5.6",
    "moduleIdx": 5,
    "name": "createToastAlert",
    "title": "DOM: Спливаюче повідомлення (Toast Notification)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createToastAlert(message, type = 'info'), яка створює <div class='toast toast-{type}'> з текстом message та кнопкою закриття <button class='toast-close'>&times;</button>. При кліку на кнопку закриття елемент видаляється з DOM (toast.remove()).",
    "reqs": [
      "Створіть div з класом `toast toast-${type}`.",
      "Додайте текст повідомлення та кнопку закриття.",
      "При кліку на кнопку закриття викличте toast.remove().",
      "Поверніть створений toast."
    ],
    "starterParams": "message, type = 'info'",
    "starterBody": "// Створіть спливаюче повідомлення toast",
    "tests": [
      {
        "expr": "(() => { const t = createToastAlert('Дані збережено!', 'success'); const parent = document.createElement('div'); parent.appendChild(t); t.querySelector('.toast-close').click(); return parent.children.length; })()",
        "expected": 0
      }
    ]
  },
  {
    "id": "5.7",
    "moduleIdx": 5,
    "name": "createCopyButton",
    "title": "DOM: Кнопка копіювання в буфер (Copy Button)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCopyButton(textToCopy, onCopied), яка створює кнопку з текстом '📋 Копіювати'. При кліку вона змінює текст на '✓ Скопійовано!', викликає onCopied(textToCopy) і повертає створену кнопку.",
    "reqs": [
      "Створіть кнопку з текстом '📋 Копіювати'.",
      "Додайте слухач кліку, який змінює текст і викликає onCopied.",
      "Поверніть кнопку."
    ],
    "starterParams": "textToCopy, onCopied",
    "starterBody": "// Створіть кнопку копіювання",
    "tests": [
      {
        "expr": "(() => { let copiedText = ''; const btn = createCopyButton('secret_api_key_123', t => { copiedText = t; }); btn.click(); return { text: btn.textContent, copiedText }; })()",
        "expected": {
          "text": "✓ Скопійовано!",
          "copiedText": "secret_api_key_123"
        }
      }
    ]
  },
  {
    "id": "5.8",
    "moduleIdx": 5,
    "name": "createProductCard",
    "title": "DOM: Картка товару (Product Card Component)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createProductCard(product), де product = { title, price, discountPercent }. Створює <div class='product-card'> з заголовком <h3>, старою закресленою ціною <del> (якщо є знижка) та фінальною ціною <span class='final-price'>.",
    "reqs": [
      "Обчисліть ціну зі знижкою: price * (1 - discountPercent / 100).",
      "Створіть розмітку картки.",
      "Поверніть елемент картки."
    ],
    "starterParams": "product",
    "starterBody": "// Створіть картку товару",
    "tests": [
      {
        "expr": "(() => { const card = createProductCard({ title: 'Книга JS', price: 400, discountPercent: 20 }); const title = card.querySelector('h3').textContent; const price = card.querySelector('.final-price').textContent; return { title, price }; })()",
        "expected": {
          "title": "Книга JS",
          "price": "320.00 ₴"
        }
      }
    ]
  },
  {
    "id": "5.9",
    "moduleIdx": 5,
    "name": "createTabsComponent",
    "title": "DOM: Компонент вкладок (Tabs Component)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTabsComponent(tabsList), де tabsList = [{ id, label, content }]. Створює <div class='tabs-container'> з навігацією <nav class='tabs-nav'> та вмістом <div class='tab-pane'>. Початково активна перша вкладка. При кліку на кнопку вкладки перемикає клас 'active' на відповідній кнопці та оновлює вміст pane.",
    "reqs": [
      "Створіть кнопки вкладок для кожного елемента.",
      "Підключіть перемикання активного стану.",
      "Поверніть контейнер вкладок."
    ],
    "starterParams": "tabsList",
    "starterBody": "// Створіть інтерактивні вкладки",
    "tests": [
      {
        "expr": "(() => { const tabs = createTabsComponent([{ id: 1, label: 'Опис', content: 'Це опис' }, { id: 2, label: 'Відгуки', content: 'Це відгуки' }]); const btns = tabs.querySelectorAll('.tab-btn'); btns[1].click(); return { activeTxt: tabs.querySelector('.tab-pane').textContent, isSecActive: btns[1].classList.contains('active') }; })()",
        "expected": {
          "activeTxt": "Це відгуки",
          "isSecActive": true
        }
      }
    ]
  },
  {
    "id": "5.10",
    "moduleIdx": 5,
    "name": "createPasswordStrengthMeter",
    "title": "DOM: Індикатор надійності пароля (Password Strength Meter)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createPasswordStrengthMeter(inputElement), яка створює <div class='strength-meter'><div class='meter-bar'></div></div>. Слухає подію 'input' на inputElement: якщо довжина пароля < 6 — bar.style.width = '33%' і background = 'red'; від 6 до 9 — '66%' і 'orange'; 10 і більше — '100%' і 'green'. Повертає створений meter.",
    "reqs": [
      "Створіть контейнер meter з внутрішнім елементом bar.",
      "Підключіть слухач 'input' до inputElement.",
      "Оновлюйте ширину та колір смужки.",
      "Поверніть контейнер meter."
    ],
    "starterParams": "inputElement",
    "starterBody": "// Створіть смужку надійності пароля",
    "tests": [
      {
        "expr": "(() => { const inp = document.createElement('input'); const meter = createPasswordStrengthMeter(inp); inp.value = 'superpassword123'; inp.dispatchEvent(new Event('input')); const bar = meter.querySelector('.meter-bar'); return { width: bar.style.width, color: bar.style.backgroundColor }; })()",
        "expected": {
          "width": "100%",
          "color": "green"
        }
      }
    ]
  },
  {
    "id": "5.11",
    "moduleIdx": 5,
    "name": "createShowPasswordToggle",
    "title": "DOM: Кнопка показу/приховування пароля (Show/Hide Toggle)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createShowPasswordToggle(passwordInput), яка створює кнопку з текстом '👁️'. При кліку вона перемикає тип passwordInput: якщо був 'password' -> стає 'text' і кнопка '🙈', і навпаки. Повертає кнопку.",
    "reqs": [
      "Створіть кнопку з початковим текстом '👁️'.",
      "При кліку перевіряйте passwordInput.type.",
      "Змінюйте type інпуту та текст кнопки.",
      "Поверніть кнопку."
    ],
    "starterParams": "passwordInput",
    "starterBody": "// Реалізуйте кнопку перемикання видимості пароля",
    "tests": [
      {
        "expr": "(() => { const inp = document.createElement('input'); inp.type = 'password'; const btn = createShowPasswordToggle(inp); btn.click(); const t1 = inp.type; btn.click(); const t2 = inp.type; return [t1, t2]; })()",
        "expected": [
          "text",
          "password"
        ]
      }
    ]
  },
  {
    "id": "5.12",
    "moduleIdx": 5,
    "name": "createColorPalettePicker",
    "title": "DOM: Палітра кольорів (Color Swatch Picker)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createColorPalettePicker(colorsArray, onSelectColor), яка створює <div class='color-palette'> з круглими кнопками <button class='color-swatch'> для кожного кольору. При кліку додає клас 'selected' обраній кнопці (знімаючи з інших) і викликає onSelectColor(color).",
    "reqs": [
      "Створіть кнопки для кожного кольору зі style.backgroundColor = color.",
      "Обробляйте клік із виділенням однієї активної кнопки.",
      "Поверніть контейнер палітри."
    ],
    "starterParams": "colorsArray, onSelectColor",
    "starterBody": "// Створіть палітру вибору кольору",
    "tests": [
      {
        "expr": "(() => { let chosen = ''; const palette = createColorPalettePicker(['#ff0000', '#00ff00', '#0000ff'], c => { chosen = c; }); const btns = palette.querySelectorAll('.color-swatch'); btns[1].click(); return { chosen, hasSelected: btns[1].classList.contains('selected') }; })()",
        "expected": {
          "chosen": "#00ff00",
          "hasSelected": true
        }
      }
    ]
  },
  {
    "id": "5.13",
    "moduleIdx": 5,
    "name": "createCharCounter",
    "title": "DOM: Лічильник залишку символів у textarea",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCharCounter(textareaElement, maxChars = 100), яка створює <span class='char-counter'> з текстом '100 залишилось'. Слухає подію 'input': оновлює залишок. Якщо ліміт перевищено — додає клас 'limit-exceeded'. Повертає елемент лічильника.",
    "reqs": [
      "Створіть span.char-counter.",
      "Підключіть слухач 'input' до textareaElement.",
      "Оновлюйте залишок (maxChars - len).",
      "Додавайте/знімайте клас 'limit-exceeded' якщо залишок < 0."
    ],
    "starterParams": "textareaElement, maxChars = 100",
    "starterBody": "// Створіть лічильник залишку символів",
    "tests": [
      {
        "expr": "(() => { const ta = document.createElement('textarea'); const counter = createCharCounter(ta, 10); ta.value = '12345'; ta.dispatchEvent(new Event('input')); const t1 = counter.textContent; ta.value = '1234567890123'; ta.dispatchEvent(new Event('input')); const hasExceeded = counter.classList.contains('limit-exceeded'); return { t1, hasExceeded }; })()",
        "expected": {
          "t1": "5 залишилось",
          "hasExceeded": true
        }
      }
    ]
  },
  {
    "id": "5.14",
    "moduleIdx": 5,
    "name": "createModalDialog",
    "title": "DOM: Модальне вікно (Modal Dialog Component)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createModalDialog(title, contentText, onClose), яка створює <div class='modal-backdrop'><div class='modal-dialog'> з заголовком <h3>, кнопкою закриття <button class='modal-close'>&times;</button> та текстом. При кліку на кнопку або бекдроп видаляє модалку та викликає onClose().",
    "reqs": [
      "Створіть бекдроп та діалогове вікно.",
      "Обробіть клік закриття.",
      "Поверніть бекдроп."
    ],
    "starterParams": "title, contentText, onClose",
    "starterBody": "// Створіть модальне вікно",
    "tests": [
      {
        "expr": "(() => { let closed = false; const modal = createModalDialog('Увага', 'Текст повідомлення', () => { closed = true; }); modal.querySelector('.modal-close').click(); return closed; })()",
        "expected": true
      }
    ]
  },
  {
    "id": "5.15",
    "moduleIdx": 5,
    "name": "createFilterableList",
    "title": "DOM: Живий пошук/фільтр по списку (Search Filter List)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createFilterableList(itemsArray), яка створює <div class='filter-list-box'> з інпутом <input class='filter-input'> та списком <ul class='items-list'>. При введенні тексту ховає невідповідні елементи (style.display = 'none'). Повертає контейнер.",
    "reqs": [
      "Створіть інпут та список ul з li для кожного елемента.",
      "Слухайте 'input' на текстовому полі.",
      "Фільтруйте li без урахування регістру.",
      "Поверніть контейнер."
    ],
    "starterParams": "itemsArray",
    "starterBody": "// Створіть список із живим пошуком",
    "tests": [
      {
        "expr": "(() => { const box = createFilterableList(['Київ', 'Львів', 'Одеса', 'Харків']); const inp = box.querySelector('.filter-input'); inp.value = 'льв'; inp.dispatchEvent(new Event('input')); const lis = box.querySelectorAll('li'); const visible = Array.from(lis).filter(li => li.style.display !== 'none').map(li => li.textContent); return visible; })()",
        "expected": [
          "Львів"
        ]
      }
    ]
  },
  {
    "id": "5.16",
    "moduleIdx": 5,
    "name": "createBreadcrumbsNav",
    "title": "DOM: Навігаційний ланцюжок (Breadcrumbs Component)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createBreadcrumbsNav(crumbs), де crumbs = [{ label, url }]. Створює <nav class='breadcrumbs'><ol> з посиланнями <a> для всіх елементів, крім останнього (останній — звичайний <span> без посилання з класом 'current'). Повертає nav.",
    "reqs": [
      "Створіть nav та ol.",
      "Для проміжних елементів створіть li > a[href].",
      "Для останнього створіть li > span.current.",
      "Поверніть nav."
    ],
    "starterParams": "crumbs",
    "starterBody": "// Створіть навігаційні хлібні крихти",
    "tests": [
      {
        "expr": "(() => { const nav = createBreadcrumbsNav([{ label: 'Головна', url: '/' }, { label: 'Курси', url: '/courses' }, { label: 'JavaScript' }]); const links = nav.querySelectorAll('a'); const cur = nav.querySelector('.current'); return { linkCount: links.length, current: cur.textContent }; })()",
        "expected": {
          "linkCount": 2,
          "current": "JavaScript"
        }
      }
    ]
  },
  {
    "id": "5.17",
    "moduleIdx": 5,
    "name": "createAvatarWithInitials",
    "title": "DOM: Генератор аватара з ініціалами (Avatar Generator)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createAvatarWithInitials(fullName, bgColor = '#3ecf8e'), яка створює круглий <div class='user-avatar'> зі style.backgroundColor = bgColor та ініціалами (наприклад, 'Іван Грабовський' -> 'ІГ'). Якщо одне слово — перша літера.",
    "reqs": [
      "Отримайте ініціали з fullName.",
      "Створіть div з класом 'user-avatar'.",
      "Встановіть фоновий колір та текст.",
      "Поверніть div."
    ],
    "starterParams": "fullName, bgColor = '#3ecf8e'",
    "starterBody": "// Створіть аватар користувача з ініціалами",
    "tests": [
      {
        "expr": "(() => { const av = createAvatarWithInitials('Олена Коваль', '#3b82f6'); return { initials: av.textContent, bg: av.style.backgroundColor }; })()",
        "expected": {
          "initials": "ОК",
          "bg": "rgb(59, 130, 246)"
        }
      }
    ]
  },
  {
    "id": "5.18",
    "moduleIdx": 5,
    "name": "createStarRating",
    "title": "DOM: Інтерактивний зірковий рейтинг (Star Rating Widget)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createStarRating(totalStars = 5, onRatingSelect), яка створює <div class='star-rating'> з totalStars зірочками <span class='star' data-val='1'>★</span>. При кліку на зірку додає клас 'active' всім зірочкам до обраної включно та викликає onRatingSelect(rating).",
    "reqs": [
      "Створіть зірочки з data-val від 1 до totalStars.",
      "При кліку підсвічуйте зірки від 1 до N.",
      "Поверніть контейнер рейтингу."
    ],
    "starterParams": "totalStars = 5, onRatingSelect",
    "starterBody": "// Створіть віджет вибору рейтингу зірочками",
    "tests": [
      {
        "expr": "(() => { let rating = 0; const widget = createStarRating(5, r => { rating = r; }); const stars = widget.querySelectorAll('.star'); stars[3].click(); const activeCount = widget.querySelectorAll('.star.active').length; return { rating, activeCount }; })()",
        "expected": {
          "rating": 4,
          "activeCount": 4
        }
      }
    ]
  },
  {
    "id": "5.19",
    "moduleIdx": 5,
    "name": "createPaginationBar",
    "title": "DOM: Пагінація сторінок (Pagination Bar)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPaginationBar(totalPages, initialPage = 1, onPageChange), яка створює <div class='pagination-bar'> з кнопками для кожної сторінки 1..totalPages. Активна сторінка має клас 'active'. При кліку змінює активну кнопку та викликає onPageChange(page).",
    "reqs": [
      "Створіть кнопки для сторінок 1..totalPages.",
      "Встановіть початкову активну кнопку.",
      "Підключіть перемикання.",
      "Поверніть елемент."
    ],
    "starterParams": "totalPages, initialPage = 1, onPageChange",
    "starterBody": "// Створіть панель пагінації",
    "tests": [
      {
        "expr": "(() => { let page = 1; const bar = createPaginationBar(5, 1, p => { page = p; }); const btns = bar.querySelectorAll('.page-btn'); btns[2].click(); return { page, isThirdActive: btns[2].classList.contains('active') }; })()",
        "expected": {
          "page": 3,
          "isThirdActive": true
        }
      }
    ]
  },
  {
    "id": "5.20",
    "moduleIdx": 5,
    "name": "createProgressBarWidget",
    "title": "DOM: Прогрес-бар з динамічним оновленням (Progress Bar)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createProgressBarWidget(initialPct = 0), яка створює <div class='progress-track'><div class='progress-fill'></div></div>. Повертає об'єкт { element, setProgress(pct) }, де setProgress оновлює width і перевіряє межі 0..100.",
    "reqs": [
      "Створіть track та fill.",
      "Реалізуйте метод setProgress(pct).",
      "Поверніть { element, setProgress }."
    ],
    "starterParams": "initialPct = 0",
    "starterBody": "// Створіть керований прогрес-бар",
    "tests": [
      {
        "expr": "(() => { const pb = createProgressBarWidget(25); const w1 = pb.element.querySelector('.progress-fill').style.width; pb.setProgress(75); const w2 = pb.element.querySelector('.progress-fill').style.width; return [w1, w2]; })()",
        "expected": [
          "25%",
          "75%"
        ]
      }
    ]
  },
  {
    "id": "5.21",
    "moduleIdx": 5,
    "name": "createTagInputComponent",
    "title": "DOM: Інпут створення тегів (Tag Input Component)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createTagInputComponent(onTagsUpdate), яка створює <div class='tag-input-box'><input placeholder='Додати тег...'></div>. При натисканні Enter створює <span class='tag-chip'>{текст} <span class='tag-remove'>&times;</span></span>. При кліку на хрестик тег видаляється. При кожній зміні викликає onTagsUpdate(tagsArray).",
    "reqs": [
      "Слухайте keydown 'Enter' на інпуті.",
      "Додавайте чіпи тегів перед інпутом.",
      "Оновлюйте масив тегів і викликайте onTagsUpdate.",
      "Поверніть контейнер."
    ],
    "starterParams": "onTagsUpdate",
    "starterBody": "// Створіть інтерактивний компонент введення тегів",
    "tests": [
      {
        "expr": "(() => { let currentTags = []; const component = createTagInputComponent(t => { currentTags = t; }); const inp = component.querySelector('input'); inp.value = 'javascript'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); inp.value = 'frontend'; inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); return currentTags; })()",
        "expected": [
          "javascript",
          "frontend"
        ]
      }
    ]
  },
  {
    "id": "5.22",
    "moduleIdx": 5,
    "name": "highlightSearchTermsInElement",
    "title": "DOM: Підсвітка знайденого тексту (Highlight Keywords)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію highlightSearchTermsInElement(element, keyword), яка знаходить усі входження keyword у текстовому контенті елемента (без урахування регістру) та огортає їх у тег <mark>. Якщо keyword порожній — залишає текст без змін.",
    "reqs": [
      "Якщо !keyword.trim() — return.",
      "Використайте регулярний вираз з прапорцем 'gi'.",
      "Замініть збіги на `<mark>$&</mark>` через innerHTML.",
      "Поверніть element."
    ],
    "starterParams": "element, keyword",
    "starterBody": "// Підсвітіть ключові слова через тег mark",
    "tests": [
      {
        "expr": "(() => { const p = document.createElement('p'); p.textContent = 'JavaScript це чудово. Вивчайте javascript!'; highlightSearchTermsInElement(p, 'javascript'); const marks = p.querySelectorAll('mark'); return marks.length; })()",
        "expected": 2
      }
    ]
  },
  {
    "id": "5.23",
    "moduleIdx": 5,
    "name": "createTipCalculatorWidget",
    "title": "DOM: Калькулятор чайових (Tip Calculator)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTipCalculatorWidget(), яка створює <div class='tip-calc'> з інпутами для суми рахунку <input class='inp-bill' type='number'>, відсотка чайових <input class='inp-tip' type='number' value='10'> та відображенням підсумку <div class='total-display'>Разом: 0.00 ₴</div>. При зміні інпутів оновлює підсумок.",
    "reqs": [
      "Створіть інпути та блок відображення підсумку.",
      "Підключіть перерахунок: bill * (1 + tip / 100).",
      "Поверніть контейнер віджета."
    ],
    "starterParams": "",
    "starterBody": "// Створіть калькулятор чайових",
    "tests": [
      {
        "expr": "(() => { const widget = createTipCalculatorWidget(); const bill = widget.querySelector('.inp-bill'); const tip = widget.querySelector('.inp-tip'); bill.value = '200'; tip.value = '15'; bill.dispatchEvent(new Event('input')); return widget.querySelector('.total-display').textContent; })()",
        "expected": "Разом: 230.00 ₴"
      }
    ]
  },
  {
    "id": "5.24",
    "moduleIdx": 5,
    "name": "createTableFromData",
    "title": "DOM: Динамічна генерація HTML-таблиці з масиву об'єктів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTableFromData(columns, dataRows), де columns = [{ key: 'id', title: 'ID' }, ...], а dataRows — масив об'єктів. Створює та повертає <table> з <thead> і <tbody> з відповідними даними.",
    "reqs": [
      "Створіть table, thead, tbody.",
      "Згенеруйте tr з th для кожної колонки.",
      "Згенеруйте tr з td для кожного рядка даних.",
      "Поверніть таблицю."
    ],
    "starterParams": "columns, dataRows",
    "starterBody": "// Згенеруйте таблицю з колонок та рядків",
    "tests": [
      {
        "expr": "(() => { const tbl = createTableFromData([{ key: 'name', title: 'Імʼя' }, { key: 'score', title: 'Бал' }], [{ name: 'Олена', score: 98 }, { name: 'Тарас', score: 85 }]); const thCount = tbl.querySelectorAll('th').length; const tdCount = tbl.querySelectorAll('td').length; return { thCount, tdCount }; })()",
        "expected": {
          "thCount": 2,
          "tdCount": 4
        }
      }
    ]
  },
  {
    "id": "5.25",
    "moduleIdx": 5,
    "name": "createPricingPlanSwitcher",
    "title": "DOM: Перемикач тарифних планів (Місяць / Рік зі знижкою 20%)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPricingPlanSwitcher(monthlyPrice), яка створює віджет з кнопками 'Щомісяця' та 'Щорічно (-20%)' та елементом ціни. Початково показує monthlyPrice. При перемиканні на 'Щорічно' показує ціну зі знижкою 20% (monthlyPrice * 0.8 * 12).",
    "reqs": [
      "Створіть перемикачі та блок ціни.",
      "Розрахуйте річну вартість зі знижкою.",
      "Поверніть віджет."
    ],
    "starterParams": "monthlyPrice",
    "starterBody": "// Створіть перемикач тарифів",
    "tests": [
      {
        "expr": "(() => { const ps = createPricingPlanSwitcher(100); const btns = ps.querySelectorAll('.plan-btn'); btns[1].click(); return ps.querySelector('.plan-price').textContent; })()",
        "expected": "960 ₴/рік"
      }
    ]
  },
  {
    "id": "5.26",
    "moduleIdx": 5,
    "name": "createStepperInput",
    "title": "DOM: Числовий кроковий інпут (Stepper +/- Input)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createStepperInput(min = 0, max = 10, step = 1, initial = 1), яка створює <div class='stepper'><button class='btn-dec'>-</button><span class='val-display'>1</span><button class='btn-inc'>+</button></div>. Кнопки блокуються (disabled = true), якщо досягнуто мінімуму чи максимуму.",
    "reqs": [
      "Створіть кнопки + / - та спан відображення значення.",
      "Оновлюйте стан disabled для кнопок.",
      "Поверніть контейнер степпера."
    ],
    "starterParams": "min = 0, max = 10, step = 1, initial = 1",
    "starterBody": "// Створіть кроковий числовий перемикач",
    "tests": [
      {
        "expr": "(() => { const st = createStepperInput(0, 3, 1, 0); const btnDec = st.querySelector('.btn-dec'); const btnInc = st.querySelector('.btn-inc'); const d0 = btnDec.disabled; btnInc.click(); const val = st.querySelector('.val-display').textContent; return { d0, val }; })()",
        "expected": {
          "d0": true,
          "val": "1"
        }
      }
    ]
  },
  {
    "id": "5.27",
    "moduleIdx": 5,
    "name": "createAlertBanner",
    "title": "DOM: Банер сповіщення (Alert Banner)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createAlertBanner(message, type = 'warning', isDismissible = true), яка створює <div class='alert alert-{type}'> з текстом і опціональною кнопкою закриття. При закритті банер плавно видаляється.",
    "reqs": [
      "Створіть div.alert.alert-{type}.",
      "Додайте текст.",
      "Якщо isDismissible — додайте кнопку закриття.",
      "Поверніть банер."
    ],
    "starterParams": "message, type = 'warning', isDismissible = true",
    "starterBody": "// Створіть банер сповіщення",
    "tests": [
      {
        "expr": "(() => { const a = createAlertBanner('Увага: технічні роботи', 'warning', true); const hasBtn = Boolean(a.querySelector('.alert-close')); return { cls: a.className, hasBtn }; })()",
        "expected": {
          "cls": "alert alert-warning",
          "hasBtn": true
        }
      }
    ]
  },
  {
    "id": "5.28",
    "moduleIdx": 5,
    "name": "createCodeSnippetBlock",
    "title": "DOM: Блок коду з кнопкою копіювання (Code Snippet Block)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCodeSnippetBlock(codeText, lang = 'javascript'), яка створює <div class='code-block'><div class='code-header'><span>{lang}</span><button class='btn-copy-code'>Копіювати</button></div><pre><code>{codeText}</code></pre></div>. Кнопка копіює код і показує '✓'.",
    "reqs": [
      "Створіть структуру блоку коду.",
      "Підключіть копіювання.",
      "Поверніть елемент."
    ],
    "starterParams": "codeText, lang = 'javascript'",
    "starterBody": "// Створіть блок відображення фрагмента коду",
    "tests": [
      {
        "expr": "(() => { const cs = createCodeSnippetBlock('const a = 10;', 'js'); const btn = cs.querySelector('.btn-copy-code'); btn.click(); return { code: cs.querySelector('code').textContent, btnText: btn.textContent }; })()",
        "expected": {
          "code": "const a = 10;",
          "btnText": "✓"
        }
      }
    ]
  },
  {
    "id": "5.29",
    "moduleIdx": 5,
    "name": "createLikeCounterWidget",
    "title": "DOM: Віджет лайків і дизлайків (Like / Dislike Counters)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createLikeCounterWidget(initialLikes = 0, initialDislikes = 0), яка створює <div class='likes-widget'><button class='btn-like'>👍 0</button><button class='btn-dislike'>👎 0</button></div>. При кліку збільшує відповідний лічильник на 1.",
    "reqs": [
      "Створіть кнопки з відповідними іконками та числами.",
      "Інкрементуйте лічильники по кліку.",
      "Поверніть віджет."
    ],
    "starterParams": "initialLikes = 0, initialDislikes = 0",
    "starterBody": "// Створіть віджет оцінок",
    "tests": [
      {
        "expr": "(() => { const w = createLikeCounterWidget(10, 2); w.querySelector('.btn-like').click(); w.querySelector('.btn-dislike').click(); return { likes: w.querySelector('.btn-like').textContent, dislikes: w.querySelector('.btn-dislike').textContent }; })()",
        "expected": {
          "likes": "👍 11",
          "dislikes": "👎 3"
        }
      }
    ]
  },
  {
    "id": "5.30",
    "moduleIdx": 5,
    "name": "createLiveSearchHighlight",
    "title": "DOM: Живий пошук із підсвічуванням збігів у тексті",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createLiveSearchHighlight(textParagraph), яка створює <div class='search-box'><input placeholder='Пошук у тексті...'><p>{textParagraph}</p></div>. При введенні слова огортає збіги в <mark> всередині <p>.",
    "reqs": [
      "Збережіть оригінальний текст.",
      "При вході оновлюйте innerHTML тега p.",
      "Поверніть контейнер."
    ],
    "starterParams": "textParagraph",
    "starterBody": "// Створіть живий пошук з підсвічуванням у тексті",
    "tests": [
      {
        "expr": "(() => { const box = createLiveSearchHighlight('Frontend розробка це цікаво і круто'); const inp = box.querySelector('input'); inp.value = 'розробка'; inp.dispatchEvent(new Event('input')); return box.querySelector('mark').textContent; })()",
        "expected": "розробка"
      }
    ]
  },
  {
    "id": "5.31",
    "moduleIdx": 5,
    "name": "createNotificationBadge",
    "title": "DOM: Бейдж кількості сповіщень (Notification Bell & Badge)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createNotificationBadge(initialCount = 0), яка створює <div class='bell-wrapper'><span>🔔</span><span class='badge-count'>{count}</span></div>. Якщо count === 0 — бейдж прихований (display = 'none'). Повертає { element, setCount(n) }.",
    "reqs": [
      "Створіть елементи дзвіночка та бейджа.",
      "Реалізуйте метод setCount(n).",
      "Приховуйте бейдж при n <= 0."
    ],
    "starterParams": "initialCount = 0",
    "starterBody": "// Створіть бейдж сповіщень",
    "tests": [
      {
        "expr": "(() => { const nb = createNotificationBadge(0); const d1 = nb.element.querySelector('.badge-count').style.display; nb.setCount(3); const d2 = nb.element.querySelector('.badge-count').style.display; const txt = nb.element.querySelector('.badge-count').textContent; return { d1, d2, txt }; })()",
        "expected": {
          "d1": "none",
          "d2": "",
          "txt": "3"
        }
      }
    ]
  },
  {
    "id": "5.32",
    "moduleIdx": 5,
    "name": "createInlineTextEditor",
    "title": "DOM: Інлайн редагування тексту (Inline Text Editor)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createInlineTextEditor(initialText, onSave), яка створює <span class='inline-text'>{initialText}</span>. При подвійному кліку (dblclick) текст замінюється на <input type='text'>. При натисканні Enter інпут знову замінюється на текст із новим значенням і викликається onSave(newText).",
    "reqs": [
      "Створіть span.inline-text.",
      "По dblclick замінюйте span на input.",
      "По Enter зберігайте нове значення та повертайте span.",
      "Поверніть початковий контейнер або елемент."
    ],
    "starterParams": "initialText, onSave",
    "starterBody": "// Реалізуйте інлайн редактор тексту",
    "tests": [
      {
        "expr": "(() => { const editor = createInlineTextEditor('Початковий текст'); return editor.textContent; })()",
        "expected": "Початковий текст"
      }
    ]
  },
  {
    "id": "5.33",
    "moduleIdx": 5,
    "name": "createSkeletonLoader",
    "title": "DOM: Скелетон-заглушка завантаження (Skeleton Card)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createSkeletonLoader(), яка створює <div class='skeleton-card'><div class='skeleton-avatar'></div><div class='skeleton-line short'></div><div class='skeleton-line'></div></div> для відображення стану очікування даних.",
    "reqs": [
      "Створіть структуру скелетона картки.",
      "Призначте відповідні CSS-класи.",
      "Поверніть елемент."
    ],
    "starterParams": "",
    "starterBody": "// Створіть скелетон завантаження",
    "tests": [
      {
        "expr": "(() => { const sk = createSkeletonLoader(); const lines = sk.querySelectorAll('.skeleton-line'); return { hasAv: Boolean(sk.querySelector('.skeleton-avatar')), linesCount: lines.length }; })()",
        "expected": {
          "hasAv": true,
          "linesCount": 2
        }
      }
    ]
  },
  {
    "id": "5.34",
    "moduleIdx": 5,
    "name": "createValidationFeedbackInput",
    "title": "DOM: Поле введення з живою валідацією (Validation Feedback)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createValidationFeedbackInput(validateFn, errorMsg), яка створює <div class='field-group'><input class='form-input'><div class='error-label' style='display:none'>{errorMsg}</div></div>. При події 'blur' перевіряє значення: якщо validateFn(value) повертає false — показує помилку і додає клас 'is-invalid' до інпуту.",
    "reqs": [
      "Створіть поле введення та лейбл помилки.",
      "При blur перевіряйте значення через validateFn.",
      "Поверніть контейнер field-group."
    ],
    "starterParams": "validateFn, errorMsg",
    "starterBody": "// Створіть поле з валідацією по blur",
    "tests": [
      {
        "expr": "(() => { const group = createValidationFeedbackInput(v => v.length >= 3, 'Мінімум 3 символи'); const inp = group.querySelector('input'); inp.value = 'ab'; inp.dispatchEvent(new Event('blur')); const hasErr = inp.classList.contains('is-invalid'); const isMsgVisible = group.querySelector('.error-label').style.display === 'block'; return { hasErr, isMsgVisible }; })()",
        "expected": {
          "hasErr": true,
          "isMsgVisible": true
        }
      }
    ]
  },
  {
    "id": "5.35",
    "moduleIdx": 5,
    "name": "createImageCarousel",
    "title": "DOM: Слайдер зображень (Image Carousel)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createImageCarousel(imageUrls), яка створює <div class='carousel'><img src='{current}'><div class='controls'><button class='btn-prev'>&lt;</button><button class='btn-next'>&gt;</button></div></div>. Кнопки перемикають індекс картинки по колу.",
    "reqs": [
      "Створіть img та кнопки вперед/назад.",
      "Перемикайте індекс зображення по колу: (idx + 1) % len.",
      "Поверніть карусель."
    ],
    "starterParams": "imageUrls",
    "starterBody": "// Реалізуйте слайдер зображень",
    "tests": [
      {
        "expr": "(() => { const c = createImageCarousel(['img1.jpg', 'img2.jpg', 'img3.jpg']); const btnNext = c.querySelector('.btn-next'); btnNext.click(); const s1 = c.querySelector('img').getAttribute('src'); btnNext.click(); const s2 = c.querySelector('img').getAttribute('src'); return [s1, s2]; })()",
        "expected": [
          "img2.jpg",
          "img3.jpg"
        ]
      }
    ]
  },
  {
    "id": "5.36",
    "moduleIdx": 5,
    "name": "createCollapsiblePanel",
    "title": "DOM: Панель з можливістю згортання (Collapsible Panel)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCollapsiblePanel(titleText, bodyHtml), яка створює <div class='panel'><div class='panel-header'><span>{title}</span><button class='toggle-btn'>-</button></div><div class='panel-body'>{bodyHtml}</div></div>. Кнопка перемикає видимість тіла та змінює свій текст між '-' та '+'.",
    "reqs": [
      "Створіть панель із шапкою та тілом.",
      "Перемикайте style.display тіла та текст кнопки.",
      "Поверніть панель."
    ],
    "starterParams": "titleText, bodyHtml",
    "starterBody": "// Створіть панель зі згортанням",
    "tests": [
      {
        "expr": "(() => { const p = createCollapsiblePanel('Налаштування', '<p>Контент</p>'); const btn = p.querySelector('.toggle-btn'); btn.click(); const isHidden = p.querySelector('.panel-body').style.display === 'none'; const btnTxt = btn.textContent; return { isHidden, btnTxt }; })()",
        "expected": {
          "isHidden": true,
          "btnTxt": "+"
        }
      }
    ]
  },
  {
    "id": "5.37",
    "moduleIdx": 5,
    "name": "createSearchableDropdown",
    "title": "DOM: Кастомний селект з пошуком (Searchable Dropdown)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createSearchableDropdown(optionsArray, onSelect), яка створює <div class='dropdown'><button class='dropdown-trigger'>Оберіть...</button><div class='dropdown-menu' style='display:none'><input class='dropdown-search' placeholder='Пошук...'><ul class='dropdown-options'></ul></div></div>. Клік на кнопку відкриває меню, ввід у пошук фільтрує варіанти, клік на варіант обирає його і закриває меню.",
    "reqs": [
      "Створіть розмітку випадаючого списку.",
      "Фільтруйте варіанти в ul.",
      "Оновлюйте текст кнопки при виборі.",
      "Поверніть контейнер."
    ],
    "starterParams": "optionsArray, onSelect",
    "starterBody": "// Реалізуйте селект з фільтрацією опцій",
    "tests": [
      {
        "expr": "(() => { let chosen = ''; const dd = createSearchableDropdown(['JavaScript', 'Python', 'Rust'], v => { chosen = v; }); const trigger = dd.querySelector('.dropdown-trigger'); trigger.click(); const opt = dd.querySelectorAll('li')[0]; opt.click(); return { triggerTxt: trigger.textContent, chosen }; })()",
        "expected": {
          "triggerTxt": "JavaScript",
          "chosen": "JavaScript"
        }
      }
    ]
  },
  {
    "id": "5.38",
    "moduleIdx": 5,
    "name": "createScrollToTopButton",
    "title": "DOM: Кнопка швидкого повернення вгору (Scroll to Top)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createScrollToTopButton(targetContainer), яка створює <button class='btn-scroll-top' style='display:none'>⬆</button>. Слухає подію 'scroll' на targetContainer: якщо scrollTop > 200 — показує кнопку (display = 'block'), інакше ховає. При кліку викликає targetContainer.scrollTo({ top: 0, behavior: 'smooth' }).",
    "reqs": [
      "Створіть кнопку ⬆.",
      "Слухайте подію scroll.",
      "Клікайте для прокрутки наверх.",
      "Поверніть кнопку."
    ],
    "starterParams": "targetContainer",
    "starterBody": "// Створіть кнопку повернення на початок сторінки",
    "tests": [
      {
        "expr": "(() => { const div = document.createElement('div'); const btn = createScrollToTopButton(div); div.scrollTop = 250; div.dispatchEvent(new Event('scroll')); return btn.style.display; })()",
        "expected": "block"
      }
    ]
  },
  {
    "id": "5.39",
    "moduleIdx": 5,
    "name": "createCountdownTimerWidget",
    "title": "DOM: Віджет зворотного відліку з контролерами (Countdown Timer)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createCountdownTimerWidget(initialSeconds, onComplete), яка створює <div class='timer-widget'><div class='timer-time'>00:00</div><button class='btn-start'>Старт</button><button class='btn-stop'>Стоп</button></div>. Повертає елемент віджета.",
    "reqs": [
      "Форматуйте секунди у MM:SS.",
      "Реалізуйте кнопки старт та стоп.",
      "Поверніть віджет."
    ],
    "starterParams": "initialSeconds, onComplete",
    "starterBody": "// Створіть віджет таймера",
    "tests": [
      {
        "expr": "(() => { const w = createCountdownTimerWidget(120); return w.querySelector('.timer-time').textContent; })()",
        "expected": "02:00"
      }
    ]
  },
  {
    "id": "5.40",
    "moduleIdx": 5,
    "name": "createMiniFormValidator",
    "title": "DOM: Комплексна валідація форми (Form Validation Summary)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createMiniFormValidator(formElement, onSubmitSuccess), яка перехоплює подію 'submit' на formElement (preventDefault). Перевіряє всі інпути з атрибутом 'required'. Якщо є порожні — додає їм клас 'field-error'. Якщо всі заповнені — збирає об'єкт { [name]: value } і викликає onSubmitSuccess(data).",
    "reqs": [
      "Перехопіть подію 'submit' через e.preventDefault().",
      "Знайдіть усі input[required].",
      "Призначте клас 'field-error' для порожніх полів.",
      "Якщо помилок немає — зберіть дані форми та викличте onSubmitSuccess."
    ],
    "starterParams": "formElement, onSubmitSuccess",
    "starterBody": "// Реалізуйте валідацію форми перед відправкою",
    "tests": [
      {
        "expr": "(() => { const form = document.createElement('form'); const inp = document.createElement('input'); inp.name = 'user'; inp.required = true; inp.value = ''; form.appendChild(inp); createMiniFormValidator(form, () => {}); form.dispatchEvent(new Event('submit')); return inp.classList.contains('field-error'); })()",
        "expected": true
      }
    ]
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "e609c375428a5e7baef4be60:b31b4c3dcc954913001216e4b2f49c98:9363cd5df827d4e05cfdf82939101e0efb4f30a2e2d3861d276c20f674068656842571bcbffef8a398c8a1d841290908cfad2a03fd967215d510f48f583aad873a6e42a4310c03e621fb152443dbfeab59d9ba7ecc49c8d530be3a7652634b17923035dcb8aa903cb2fa8c9d6c2dc23892e9eef5b533df4df6e6a103f7ed0b1f541f5c74d7",
  "1.2": "816cd2a7fbdf591993a4de64:b6a42fabe117d841fbfb479d66a3f1f8:2db63f72b54a454f756ba883b4d2c5d259eda3dd0bc881c92362778c2d4309e3da299bf1b073a7b933ee34f5d7dbc12052079ac3e9d936b1436e2a69274d636a4ccbf8318fc0eb98746dfbeaacfb4e0e7882774da340c453f3c6ae99ac8e7f6dfebba1995ce2462abee7b798a0b417ec0f8d799840253b009276c4378fbd9d14d3d18d578a1a1392fed2e4671596b1026b5e7fb29bf8ef614e57c8e32f00488a89e076c39eb16c51abb6e1",
  "1.3": "5fad0d29c30a95cb68b947f4:771805fd43d2249ffa5803481a44c1ed:9a599c9133cd362da49c76a278",
  "1.4": "eb19f43848e0a296e1b3dd63:995935d9e849b757ee0b96bec628e04a:90cd1f6995c5ab6634b7c08918",
  "1.5": "55d38065cc2b59b2ed6891a1:0d5a630aacf879df80e30a8a3bf60116:fd45ce4fade7fba63e9c48ec15916bd89f14494436993a42e9aa0826dd39c4355bad5a6994249bf38278b23f07f40070da8b1f49905e428c511853cbc2ce8089ecb3441ef62a2126a59fae524f1c85ee9fb38285317727c80969f24b5ce2f098088a8fe17f5acff807a34a273e5b8aac5a87a48800e70c",
  "1.6": "ae21b6f01bc6eabe4fbc441e:0ff78d8d373dde7247271c0d6fb0c257:28432f7e0a0cf8df6fc3b08d67200174ed18af9b3c0b0907966829b917d20689d315e873190a92b85d6b534cd932a7ceb975e87f05badd42e52d1b9757b7fa6a1475eb1891a8c385d274236b3e623b9ee6305a5229a8719208fc74e88decbd61acc618a8d6de6394b98587468eb198e70f8a91d96ab1ebfd84cbf3305520dc1784d168206532565ac885b5f3c629012da916cfd1e594686e1f228668b87c953c7251c6e73170b8b00b5b0f883a3aa2550c37d17c1743416af21c406fcb40452a94428a76eda26bfc01d5ded8337afca6b49012621edb9721bb8c208107f79a48a8ac428c",
  "1.7": "3f25dffeb1a881f51e7430fe:f436a40acf574e7a86034f1740c9ad75:1739ec45bbee937fba51b0726825644eb6a8900d77a9f698d5480af66676a9b4c0678a77f001dff201e02943ddda6f126dbabbf0b5a1a5901943445d44e6a188ce4f6caf48814025b3ac3f19c5ff885e7fb957aab006343b696e5c28b8ad51f1f1d0f35b2c393b3e7d99cc322487ba0cf313bc83a43d8eae30e5c5fdb2ca",
  "1.8": "2c3b767c936c8893da9ef75b:c2099f98f4acc58f539c9f8e1f4ad0b4:79f725cac0737de827fb18f9dcf24d86ceb256ef288cd719a95ecd42f06603c3cb6631005cb9ca52ae565e487a8917d6c08d2fd2d5a367501042c9444d4d87d24216a2566c609ce27f2fe4bb0989b12b5a207a983424baba087a61bc315ac7feb314",
  "1.9": "47e11e1737098c0b968ebd87:8474a15d2f07cf5e1b78a48ce42c6d11:a76f4ad0483ec7f13ef7ec57fb51b9f9cfb9367e9019376274e7bb502a96760f87b670d3b7f7eb873a797a8cc6a765852e14ce61aaeaf6f9b8f61677422e464f4265d2180c9e13eefb058c2e58e98e0d7e3765261c53fe23701c284f5f1887b43b0eece6ad0ba1947743b3f9aae527846ab5f81d5391f24d13bd2d24650ea55e9baf7cf58e7819f0123efd6e74647c542cf004e75511232184aa6a9f07c34cd9b49a0ec6304fb68411a457b78863b7c261f99272a64d69",
  "1.10": "f906d819aec3af509bfadcef:230a79b974505aab1ef33f27a48d8ed4:600467a9541af7bb92123890bfa095ea7d84884aaec741fc9f2531183059b55b2ef56f79bc7c14c5262281",
  "1.11": "208879c41c704f8efa04c7a1:4905f9582ebdd5dcaf97202280637170:e90e4febcee7cc5558851a04d76c4a87e79217f33c6f7606fbf76f1673713b7330cc3465d097d925fbcd92695960bdffb11c54745bcbb5e0385722417840e368efb478ec8da5af37cf76c1b4076bf9d700905721195de1585d5de8f709b90048aa68be3bba6dc421df447ccfa441e1568d354fb0bda34ecb1cac9fa04c28afab06810193aa0e56378914c567f1a830643492fb",
  "1.12": "038d827b4caa4ec8bfd914d8:bff987315d7f7dd3b8cf4593367a914e:434b66c883b7b381e41f7f780ac99ab19531bfb17c69a8b061144ad5d97325ad044abd9e3a9c31ccf2d6d3ce5c8833897e8737ae2c0166de23caf0f7aa30b2a8c430842efd20326535908180cd22a1fcc284b4f90345996a928ac4ea81ddb3db86db72dcea41e6f008fd8b313a4ab8fc38b29f8dc795b3a8239c918d156ce72514c1e96816741c9ac7c6d148440ff2d303cfff4120fc5943262c8b8e58f17ba8481f5daeebc07b31533733955117863371297e36845a9e88b6f987392a899de0a6501ab16aef57196e26391a5ed1b8787da1e60ceb80e921877d1263e24523ccc97756167865fe706bdc8e977cee9b5a76",
  "1.13": "b58d311f9379942bf866eacb:a19cf2fad2b995a15c21032e5b9233c2:288633d0b51784679a3995b43fb4fa1c31611fcfd07fd3d702b93e3eefe08b7996e78b0c2b60af9cfa2aeeefb9cf3475460d3370fe590fa8968d5add8903468d1d0d83243647478bc7911e8b97fce2abd3f00a3137bd0ad73fffd4c86f800153d3e3e809ffb27cc081551ab732847523217872a127edc385c25b2c769d10d257ad827516ec9636821cf5c33dfc34667112dd7f960071eb9d70e0ea708f",
  "1.14": "ef7a1d6967b009c6033bcd3e:1454e08d1c5b20f88390e9a2dde93e7a:9a187df5c7ca22cf6eac5b6cbad49ce9ccf8cc9f939a98feff8f282930c4668535ca6b79c1131460f1d6a76f322c48897c042c35303ac8293339b79adc53be4ab75c7169a8dd635ef2a4508558557a7b44f5e759d695a54eea70f0173fce0a7ca2aacab063993d57bfd15df824472b6fb3a8d9dda1d7fcf548d1398978d8df44174ff2fc7140ce64dd294de29c75da42a800798260b460fc026a3a922a3b00c3cfd47798456b2e38",
  "1.15": "bc96aad2bdd6dfcb866281d0:6e2003e049d4381696a3e367403dcc71:6a6d4ad5ea0f25712ef36604075442801c3c273667d286d219bda8d7a56e3eb8ca",
  "1.16": "23f8ffb172a3021d0a37b11d:b9fb52f63aa3fb9f26ca0a9452719e99:ae200a3e9e0c7d8f3df32b361716e59bb7be203f60074252cca0c0532f2dadda45a55c68df668ba39ac213c57e0c4079aec5313e6d9be4c04d47892b1edc0d95",
  "1.17": "dbe8c4b4a9e2168d164129db:21404e81d908b5e7ef36939b8e7c1d06:aae77cd2804b281a51f276d97e52b46f4c888003be6d5208e306a31d632f3d9be84498de6a91d41b0a505ddd71311fc3bc6797084f54d3917f16cc5377a2f9a05261bb99f31bc7177273091355b2f0f81b0afb3b84c74e4bee9933ba7b0d22bf3a8d389efc4359f71b175a1c110dd79f3b503f15d4c004c214779c69869cf4b136327a4615ca1b212b69b56d7d25a2874d1e60f90d86834ab09096ef4752ba0d585637868a8f2c0d0f5df6a8615f0fa4cc144a3278d35c0be03fc507c140a350eae4df3f1942fcd12e9f9d50e2de0f6831a3274505286b33f53cf08493d90a77010ac0c01dc2383020821b50a07d3e",
  "1.18": "000d97dd376839462fc5bf0e:252a0f4a1f80c86c0271060d62be5575:472ba32b08363f6024611f7884960fd6f523b7ebcd9dfaa62820353d5676eee6e8d1b019ae90fac2fe306f94382136ec015392905af1fa25259c7aca3a351e9adef76d4bfe1ceb457046414e4e86429340a4abcb34390a5f5a8f5ea87e276bcd680be9ca5a1648684d608e6025b1a4929fac638db3227ea6d24edaf2b37ca7e6639ee4d75ad6510060872be28da67ffa96360b0ad6774e27739052b5a321c8458b66d21ebe8d41759650f3a9b798c16cbb449f122ef929c6ce6b4355841940ac1fd8d4084cecb17af4d0f07c3982f136720a8c48c9169dcf9d8cd7f4d5ae11fd0d2bc9819dc88580416edfaf26bcdad98da0a6957a616bdf6aed3f82fed123f77287415485fc9a3c896e70a7a66191766d0264be16df8575ebbf2aa62744019280ea12bbfe920c111de6637aa19d9d5c7d942228a55795b4e402fab08ea1bd75aca71c5dda836c9f062848619ff1c42c749a87865f8b314613fbe485c5b2af503b5fee5a28a162e1c44554e559a11ffbaeeacff3a0185c580ea34ff53e73292e4eee9194b46b375074d29761dc18",
  "1.19": "daa8a52f7fd70142a0a8022a:e0f1369c1e5eb3ea370f2115a1eeb223:244441bb1bfab435d494d8842761d9660773d629ae96e6eb369224f2888417d1bd",
  "1.20": "ccb7d9e4bb11cd4d474e50e3:ab07a2a3d53b7323fba912002295706d:400cffe2655d23c9e334c2d8e246167372262e85453ae599af7e",
  "1.21": "92ab29663afd159a8a45513b:5dfb0d98e0ed2980c4a8ddaa53483d37:fa8b3cc7c52b2b1c3a71faa70912915a17d137c8867b12bb6fb74daf6b3adeadf563c06c2d744f807b134ea0230ff86fae84078e2e43c41eedd850246e5d1e828e85bcb8354af93b254da5340eeceb1e10939ea2aeaf92acb4b87c25f058307638491809a2bb99871f9837dc3336c1d68793a7b1ec3c",
  "1.22": "6256f64fa0ec682c4feb3bf9:ef325e53d5540b3bac5bc6f93772fa1c:af39f17e9f99f9604d2680ff789d7b2e6bf1be44c883d288951ca7ddc586defed7946ddf4d978629544fdad4fc23a987312d1b92334b3eb9a1927235f345aaba8020a7a6b9a4453cfe3404e70f69d99614c2bbb150f153ac0be627c512efa86eda85e851dd8c642ed1774a873b3a864f191c50c18f15ee79c9f7ce3383834ddcf90d77445c509cb7d57824021c206ae04e7d1b23d2fb67c6e284bd370bfeea8f1ad2c5471d3f030eb310ca0af78836d33999b2dcd396b43d31815c1740408b5ccb8ca21be95eb2897ab5",
  "1.23": "e37f42a12f3e5b2f0321317d:3534c0d3d54d90f22b7ad77340658a07:4d6ea4d75325aa41ae442a1f0f9738a22fc05138619710ab67e4aa4cde46374fc864f43b8d8b5b82b889764575b4afcca9eaddbc362d9c4ff4c4ab56316054e457ed8b741a5263d801fda56695832c9e462fd57fb67e3cd8977d572911e81d763ff3935dfa9dec21f47a006c0b753ebf325f4c8f98647a2a4c15c60ad6d0fcfa9d0f728369",
  "1.24": "5f2fed5dca2feef33bb5e4f1:14cf6b59b6aa2f8e8080b4451ccb4931:8350fe4caaf906fa780d239126bb3c8b5207c88533f6bf196c57fef0513b4c38a8803ef505db6c59f48e2611cd2592c7fe53a619d3703a030f22d43b7b59c3af68db2ff4bf1e2433e467e1b015f99b6d013a72bc4def3de9087f5c853e7cc392909633b053384d12decc4dee50eed3d87ea1ec5f586b47751df6a07342b42ed84038dd6b52a4226563c9d0e15327ca50386141",
  "1.25": "52432691ab6f994241191d67:7fc694cc005f0a567efc489e136ba43c:283ee0cc94730abdeab3d5331c3ffaf9f74fbcdff7df6932cee9b66087bf262e7c07478f91c1fcc7a082b427ff7c321a798bbe03df0600174316633dfb75f91e2c3f91460b904c14852076e138b634eac14d30a93f9fc8e32daedd59b6debdeeb35757860d54aec52fb8c7924b555dbb01e7406206a918812578e7d592414e88ec3e58cf10d327bdb232beb4cf97f2915ed5865cc3be8a7982a1cfc842ca8594bd0d7688d43b4a961d5c3438c8445901d5b9cf5ef108a710b81a5f1806f5c4bf76275b86295664a40d87ea180642b2b662d43d70a4e16ae81b5d",
  "1.26": "03acfb91051be050d7ded3bb:10bd7b7e652f768a9ab40b39439a6d6a:475d4d2622995f5c73d07a7fe5b0296658320970bb60215ee243eadc83f1f6fc47349998d3e85461a01025ecf5f2464043e7377becd6f3b7e6ae5c8fb5fe52a8d3b16e8ba79d4a0c81a5b71163daa19a55a9594ed89b7ff014ac2e838a1ea5ef7ab08d50ca69140b7522926ee318d2a78fd2435ec8bebdb4bcab99382027c52bb34404e8ecea5740bf8645",
  "1.27": "a9baec7ee833c1efd3ee06dd:9c4841315b9b2d80911f2200753e3a68:bd813df8ad29a4f50b95bb89315359587c1aa3dc8c0737c0fa37d933e5b00bcccbb68e68c318d54876ceae03894687f4a7007b6c9362d9fdb5d8d79bec14724de855f9506969e5bde8f2b3b3158b7e6c4ef03ca1374950d9e021610cb7ff124c87331f8388b5d2b7082d0963a1b820f71610430a9a0637140f862e8ba01f68aa76ee962568d78a380219b9ddca03488793db89cea0bcbb63a4d9d7c44c5837d59cd494680c05190d46e0349fa3352668fdf51326db3a0fe1f2f9efedf180a1d118eafc6b",
  "1.28": "e094375cb3001bb7e3c58dcb:a19e9ebeddef6a5d51ec0da581982076:a7073419cea1f5bbb52bc77f5d9978bf7fcd2edfb1b90003f233288ab79ceea7f58087e2229ec9033c01e1a9dd4b67392221a8f13a7e6b05abe356b6b8da7ae235dc5cf9c9a66d29b536e7f9f569fb93a12df286ae5d7f5311ca4af92d397b3dd1e842f6136ef3d189958e264c76e2d191b4970e156673d28e538d336a7531149439c8fc7da4e8eac19b505cfc97f40fabbd9c4bf58efe240b5aa678b0c56aa4ae6456c34b03e4fbe4744bf3fd891e041f0fd62f81e65402187b661a2cd3e19d864e473c8cabec59d4310f6f40856368beb9e364ab007240d93b26a294ce054c2d4e",
  "1.29": "7858dc67829f16d204fd6e34:59dc8b6f69e59b43d3181bba19a9c5c1:21e7f429fd503cdc26ca1d3604c300ab3d686af812ac110d7e3724350d17030d880a113f34a3eb02828a5e3e845caff792ac1b5fbd4f7c3d999ce99d496556c8fd84af31a3da840c0d26b1abd66490311d890fd09c28e236ffe60e105ce022a9263162ac299e979a32db5eb272271e5c5c5e43a040f59c16a8c52b4048c5d60a2fd0b2fd5b2b86377d12330c1d2f37624b8b52cccabf62b3e3f37ba770b04ed40125664583676aab103b01024b9ec13d306c68b5ca7ee6f704115afb6ae2aeaf1ea6",
  "1.30": "5bbb54b51e75b658fe4a3f17:1ddae3063d6f1fda17b2eb27e6d6a655:788dece79d4432228892975ab1f66c12ed1b312384877e7c2468050dc7b499bb01cf57e85e48d21e81a08d4a9efaa08d8d1fce483b0569b1300416c6c7d2eaecc6009e01321035d9769106075b639d47edf656f0230b8bd5c58a184d1e5b85ef9366c3bf779163e94363870cca95a71f94f6fd66bf4045c0592f10cd02af002e13b54dec0551a7e79225536d6ddb8abb0cbae8e0345c43df33626070975d6dea8744189722e0f44999ba04bd1c2db75f536f6c33c98bba7dd0085fd65e92eb1a5fe0919c43b67accb1e081a5468b9d5ae6c8d7b750a83b2bba7e98cbb43b6d5961706d51491561157792f509c4aaf9c91a04280a7e01f7fcfb38d424e5a48d6ad07442bb3b73970ac3a5be8611646d01bcec7049ba34dfcea0215c",
  "1.31": "1522b6d3de6a2ab98c4c5e41:60b38b683fb29b5fdc8f8c5f3ba1bc4a:35b621dd41bc846855021eec8de0465288dd48b612b485ac628089d56c510fd7ea147b907562406e69f1b6cf60987be85e8415f8a68114ae4acf0537b987bd67ccb58f66e53b96a14ba40ace37f47359e452c8bcf19c5591a46a1ac5a4f83380d267697f4c41a01e3511d153307bb08739f7e68d096594d863f6607e0cd2110d9191a7129ed7faa8575b8f9ed515647d9897ae844dc72ae76d97f3346f3d9ad73339d2d1e1d89f5f6b82356fa0fff58adf8e150283125a54c4988fbe770825b6e9b4727e5a243cea1098effa321112ff2458d67c54c6c412d0f37bac0a28cb99a41ccd27064757d42ad38b9c3466574497a38bcc1b6b",
  "1.32": "30b85d70e3725ae09027d907:c7092add22a4557344f3fa8fb5530645:73edcf605226f97e863580c51790b4ef9974b5a8f1bf4f15885626fdc9f744258b291148eedae52ebcdf780ee5ad848a5baf7cc293de1c19b09f6c86c66779df6ae45017f543f01dd60a0d069146eb0e923e8d2864f186d7f3e3e349c718ac41f634c834b6f09ba25c57cb6da3726053d262af22be7ab15832d2fa39020bae1874c190a2e73365f55b9092bf8e5d050b27994d5fbc120f55b27c4b60c432503d84e1bc8333ea86c7b099f5c7d27036f2469c2fb4d2d7189e6e6035e797017e1345",
  "1.33": "11475b27e62eec94e030afae:6006f825550069e46047940f8805c278:6dd27eb6bd90ad79a7fc6bec4d27554934e6a19ef0b2828d2706eead65790e441e102225e43dd0f4b6477a7bfe656990e1888369e25b2335e54a443229e58da7f5eff5a1e505308454eb1c930596028d91103a16f63e4bb3fd2c7dba3765b9b1bc172c47ea3b13696a2505a7532ed3861822e17a46e97f527fab725f4f67532500ca8851f8d051461888ccf5a26333453ba462dd3229f490648cfb454863c65dcd3bf449f5eee17bb1fb47a6c3ab9aa4332c0021a694bdc3e2764d1052775aca7269d396ee09c6abe23cefabfa539b77d59bf39b3fcab4628224c3bf4bc582f9fa775ad74c23352cbe3240c758f479d791de008245be46bd5688aad9c597c1b5668adc78a464ac8b3c5dc45bf62d08e0fc2a1ad1f6b00976d1879e4fc1e195d5adc3237032e0a9986a8452b47fcd640d88dd040bf5617ab0",
  "1.34": "c67ad15c084d71c18899265a:764b2a043e6576417adf975eba50ccec:d6ef03a5d3f6ad93cecf375d862b99bde00a65a18a4e3a4bf8f0fbccd2b34f298b98abe2702ffb247708b5d883729e2fba1f01123c4b946ac8ee462fe503fa744d3b0ce92acbc91b504423afbdec45458dab9cc1bf0108a02d49e4378503aa2ca2eb85e2d67475817ab41001421ba517a67f7068aa2dce970f4f4e057c6239c219626b9695825f316611d271e716addb6e0e3534e17c1358259ac9dd656bb4af1e90cc15048091c5acadd76bf5d31d6a67838c2e51d0452094a8ad358ef9932afcee424f89f5f82d4f53a4115c11",
  "1.35": "4fa1a9965964ee385c9f9f3f:613b56e3a62ba639e383dd0497556c65:b3aede6fef301ff96b6371235b75174e53fe319cf0405584e0978a660816c334ad97df189b1c66a5304c5dbdf831ac2bdbece73a8401c82174656b3d43ccb9d61c24fce5469418f5b95fc2702f45abb3c099c8f242869cddae642f0d8b19affa2d67c64b68ce8233aa8f6a76b2a1da2099eadf54f36440400f251858a9fe5fbbbab7898c8bbbf2be332407cfa61d5c9b647a69991c94ea75b9d2fd67765ed58bea0483607caaa9c3cac351e4c43fee0a78e6c90ea112bdd9f80c2dd8a1139d467b5105f9f110bde73ae9a1919348ef3f6d04f8066b83bebe74f0718d1d5fb1266f2054ec6cd89091b3e0a550d5913115836a76790ebc086f3e14f47bf4392d0b51878ac406a6edf2cb2de0ac983fe1a0b601e58344de967374ee6664e11c404eca1c48c3b37ad8ae7cff01816bc4147c191390eef8ec0e4809d96a02698d39fc5701278b69",
  "1.36": "1be39da62b6ed3566c1b4342:b39788333a5b838a7a4d3efd2f50f15d:15198bbf8728bc16a93f2b53156b0e5c28193b7c57d9c755079dd9719e1d7f36da03570513abfcbf00b8910dddb088296441e4bf65130560cc3dd97a82ce2236527b750dd0c5b6fe76053497f142ce51b271d5b3cd746789e5bdb3867a82b07086c9883333e106eca3ed1d9dc776e86bf2643f1a2041f76da2d5e5b390897a5d227eb029d798fe9338e0d4a53f2e1d9c5253f8f49069f67fbe7edbc6cf92130de89d3fc1e99c36156a4f23816918efada0a28bfd8eb6cb11c2b2e3b5810682605c05aef19b6be260e9f7151943a7a9127a0a3076023a2f2f7668b1488935e3cc91697cde04c11c68f96dfe4d6304",
  "1.37": "6b7f21583ea77205f97357e4:4f258a8fe1a3d554df1d55a3cc988cdb:aea9c58984a8b3c7f0d2237e7faf7c0306e945065767415ad280c69c67d3899bdfdc7e80a022ebf84d",
  "1.38": "a6a0ea14839ab978fc5b0b31:ebf2109c3891efaa2717bc2db0f5a8d5:97a8a5693643e7e18bc73b7ff9e60f40ce76d0d1e14cca01dfd9714dda142d61f128fb73c59cc9e256b549572ba00365c7ae8cbd3030eac088c7639b32150fe03cffc61a1257d855274bcee2b0aff8b210a923794085b2c62ecab4982948e30714076667d91ec59f5975c42627239a8c5736dd33015662ef29f836a1bb9790e56d7bddd951de8d2a34d99e4836263d0042c2208e6d7736dd89073b4e8373fdf084b5ab06b4e23cb19bcedc6fbfea09bff61c0b3a4d50a08cf356e3407c687ec236d73aaee08d44e9ecf062178dea40648b60ae1880d374aaae91b26a46591b0721cac33494687838ec223fd2c290d004c44a",
  "1.39": "c4e9cdf36273d73ac9befc66:ac5c4ea1e6cb4ce0ed1fba62a40df8ee:944c1a92884d454d4c40f14f9fe09bc8c1a5427124429d72337bb0ee4734b3070f9a0df3490ef3993910efd232697fb2add4096d90313d9701fa6be7fe97c2280a96d9b610935acd7910fdf476780660c747afb311d57cc3dff0813a284434e086cb0c11802dbabc5aeb8a6db965c0fbf2096a32061c90f56919e53013715544a32ae6013adbdfc0b5ca7ce3d3d2d76cf0163640341d638c816cd8f50f56eea9ec245be3bb8485c83252567cfdbc79177becf33b8e36039828ddba8a7a503e28ed6b9197871efa6ed9d671",
  "1.40": "547097610ccf09b1a9f8c9c7:7a0f5d60df81a778e397ef7ca68e076e:f7633e490c03248ce1df0980ddd2ef771529a3e5b14d90bb8d61888256682d91779a69b110050a17c47c8721c26ef8497f0feb863b4cb2085629c284c6e44815152701c9d73cdd06c48fe105b6de84371f7e095cbc5b7947e05aba2582e445711746f569b108e829610ea36028b087b8433b6126df81df97cbbb47bb5ce938c3fd021e0f63bc414869e68716e5f8df39ef32a1fead855632df06557cccb9e7b7a35398b6af3abfa438b3dfd354b051903b0e902a958276d9050cdd5a3c55caae966aa9fc1d6216ef2321c6d3408cfc9544d1f973edb5666b30f5a69c2c1054cc7f66db76631522e4cef3d5ec4ce7863cbf1bbed9d9da232a821ac48cb6012ee73165e390c00ff028746351100197fde0645204dd545dbb5125ba87833f345a8f5cab9bf1c464f384ad41d9782c3672ea84e4de76ae6afc2c4ef946beebc0a5ae773fdd72f9925f7adce45ed991551fc389f6d0ddde7a0a6ba548c395314cc07d34e5e87dafc73c2cfc5f2dcc1514d230baa06229a2d74beb0cdb",
  "2.1": "25b3d0fd235a332f52ab860c:f70c458e97a2a62e43a6b61f42047ab8:8a80d29c9deb31c01f95f71b8f538d1054688e8a6810c0f99b528b9d07cf91eb69a1afa541acc94a286fe851ed048538bf61215027d1a2f5aa1248ecfd5ee6548d517aeb13a1ac2d90",
  "2.2": "6139d9cd0e1ee0e31d51ae23:0ab5fb23797143e7ce917e60dea62e98:b386bb4af130dc331ed44b4ee4302f000c6cf87b022f27cd7dd2c61714e41b749ebbbee9455f4c940c80723286b58fc7a638ae28d3e3fe791d41cc5b39ff4e384ee2bf312aa62f0855b0f12eeb00c2cc35546f146a56e2122f57656b644c044a82daf6dc80d8dbc267672981cd3f9791e1fbf3674e529ca0f07e9cffd4edd6246fc156418a6d9e73994a0a3f768c45f80df664add4624299c14190d1a4d1efc37662983312d1e7c20c826e84163c342965db307ccb5bdc318d11617547f67b44d34e640d73b87f59d828adf765c022768170c71624d80311aae028620bad97dbc1750781c2402e40797067f8d6519bb763245c9176edf1416885aaf845e918a898a3c8639c1f53b4a6236c2764e2136295c4798861cdd2a67b6e4cf1a22dec23fe5e4c2d370fbe70be6e6dc3726f3e9c759649b7ee0c127305ec154005a3c8c71090733aaa7c1b3a6b31bc5e0f2da29af94003e040d613aaac24ad4ded2fa6343f91216ba9cb7cd0df69173f559c235a294901efb7818eabfea8e5c7c331f364393c2eb8f1389fce5f0ac5",
  "2.3": "1c08f44c5921ac1ffed7bee6:1fc9e9206d23680a130bca865aa33e9a:e6e6a592af4f9c4e8b2e0b75fd9424d306886c0a58824424427c5feb473dd77fb58ca0e4a73ec2e26167a185944f6ecb",
  "2.4": "c89b6a3a537525ea1562f30d:21e85ef11596cd536b7dc78db3f9c99b:bb2f2c439935b16ee72786be38585f36a33f901470521ff844b4cf1171f07f420cdf8033ec9e3332b8e9d7ec10ca1af3d49cba86707ff38281d725449ca7431f177f7d9c314ef82ace53bbaac1da44d1efa5f89943a1b089572e06ea2d986dd63a150b670572c35bd4f42743498b85b5c071699659878e0ba31e0eb85aca633c6d7f758f627a1552d6902a8ce2cf76a12769aeb5cfd0ba505bbaa1e49b6ebbb25787540fa869509ef759273e7a3ec3b21c0f9d0f53c853f12935a052efb194c3433f24be3d7ff9985b28ef03cdde0313cf5e6466ee3b1e46748ecdd00d7513679c59ef9a5e576c8a42e42193eb8d3ac21624b5ea8ab92913e7f75a8189f735c56a4897f14491f4d8995293ea7f9fcc27fd2260166a60e79d3f5ea03714480c65cf5743c4d8a1611264c928b45989c9a10fe33f914abdcd33a2c2fbd26143aa0bbac2a24d91dd489cf2f879133490a47734ddecf714a00ce1d7c93f17c7b63a",
  "2.5": "8dd38369b491cd515c8a4d6d:99a143ca9559dd68f3ad9101bf364ccf:464780e3bc6fe726e9e92f4e3d8c4e3824c967d9cf45d53dd51b5819a915f167372ecf804bc3a2f3e49991a1af75399290c89b1636870f11153e15ffb054be5d01c5d6cf2c54da5a8692bc1ad1e0fb85d67c9d",
  "2.6": "3d5b6d98532196ee7a50ab86:a0e09e59f5beedb99beb30b4254455f8:7bd90bfe49ed7f19e1ad118956aa42dbf6b5ccdebaa7e5dee6e439e8b7d2d9300bcf4961f6738e0e72e22c297cf518718a3c80e61ade0b97acac7cfa79671d3d38b8f5ca3f842640f8de0d9311373cd4b6af821fb52e1b3e4a0e3ed2ca3f",
  "2.7": "ac2075b1f4009c788d54a145:15216d9d4e58d208229a72f6da4c72b6:fbb95ac16973b7c30e96a8e79a4b5ea08908db097748881c50c516e9923618fb8656b43cedc60a2a904585fa6699c3cd0e85d77af64e242c991d06ec00f03d58d467b70b53919e087f92ce5e86ee99e101b10a036d01a136b81ecd5f28fd93b52ed4b8311dca8bfecdd1f67584354a52dbccb9bf9d98beb14a15a7a1cf3d720eee300e6c8e1839cc",
  "2.8": "b35bc7ebdde05979fe388b1e:e3c992331d67f214ec4948f816a2624a:69991b6123cf822a5463b743440d2dd70ec1a267ff3c17b0359614149af820651c0aaa06cd4347ffd5222ec86ef6ee35eafbd2ff6a72c5045a9e9992ae92081cb73a54568694c5d3f8c90ddf2d6715c87926878b035e79365ef722a8ccaa22b03db023c7918b3862cae40a0aff278297a7ad0cc6451cb641131d61a22bdb6c53dfc9745164040d4e7e3f26cf83a7878aa8afb344f3737d2d2cb182758dbd7fec29924d65498659cb8dd67ceec94b098acdca4d7fb1acd804444e1ff3eaf53d306415dd45461f637ba914ea2e2ff76c78b28434f8a297bc54d8fa295c6c7e8a016044b20336f65539b5c6faf4d0",
  "2.9": "8e25a1ec716641d370be8e97:ede9703dfd1d41c872aa627d83761963:8d601d0fafbf4b4eb0e16b532785fed9d022031b2e7a3153ff3606a408c5f754c00b0d8c9b2779bd047640fad1b6d9fe1324b7109003f2fdfdee0671f141cac7ae8a621fc41cce5bf7934dc980f9524d3a2b00db39a3ef96f2651aba0c8bf9ca9e0695e93a2c0439f1377226ebc3a1dbaa6b2077df7365bc78c08764a6abaa090a1b0919af202c6399c15c5d6e3a906266f63f96757bf43d2afee49818680c744b816a14e2b2f256d05bb4e9a7",
  "2.10": "d2b9b434cb1a6db2df1f7579:aeacf008e55814289d99dbfe639d9291:548516f123875706c2d569c10fb835b52de15b70a3ca2b542c318f71e4ec6fb9b2138f1c4ff4e138e8621aec03fd3fc550ff9a03cd9ddfc980529a8336153275d2c17e5702ced7ba7ea6e75ac04794067383bd24854e4b9cd6f85687598b793a55001545bb4ff6823a23294f3b75dcf6f72bf95e5d0fda3790a2194eb5397d98fa84d1196efb9e4357a2d339a99cfbbe78a305d4f45dab79145bed6006556c06829a1e55386706cdd2d6e8a74cb5b86514f62749548004114b818c7f43a58956dcf16b28765b623b7407d5d4c537",
  "2.11": "8000a8537e9c090fb1d6c417:53cf699f0aea339234c240a04b425d19:d108bf9843e5f6ffb58ce6bd1ee2d12094ba7b01b8f41464e9db598f3b0872bfa93bf7e6ebcb48cbb4191a4ff3ca0b5ec36c8781ef28185e3e24a568c594cd6cc8acfdc97ba1f0125c376f19f1286aea78053331939183892e607c104580be95396b39833346219521e59fe564565c27dfa5e8c5d8e6c323e9e081eff9286dca2c622559e6473d44b3a79ed13808e851bbe9a8d3313def228a0f678bb8d6bc9a2854b968c30c4f40743ed2ea363c734f52dcfbda0fe0edfa7346f7a53e3645c1158e3d286c50e4ff",
  "2.12": "07869adfd307cae98341b286:9c9dd727200c40a4ef5a9436b47825ed:a3cd4df2955286ab75079ee32d65a2937a396afaa338abb5ebfa3815cd3b0346530b186ae789650a232a3bc7ee2d92bcfdd05deaf12a17434b4e912fb19d242e6d67eb1ebaacd47526a87e3869557700b64fc9b8bd1fe75aaff64ba87ebcac86b5aac350be9cd26a7bdfa6bb6fc9e7d3fa2830da",
  "2.13": "6179deea11bbaf9abeb31532:d75c3a539a6a68f45e6edecbf4f2e61e:aa33dba39a2c10dabb72b10cc8222aef74457f87812f022c998382e8abbe4061e7d013b930435adb076b692213ab09c6b2d448ace09a8553257eda82a9d8062b64f61f7c6f0368da2fb1c3343638e5b7a1da9ab388fb9719954ef90cf8cecb274b89108cc51f8a0fb7de6104d0f8ff5efa6191f4cf02807ae07ca24abeab801e86350c9ff1e00e0202eb082f2d12e1e99cb6fdcb85979c858734806a0115b927392bc35d6282da46217f37ef47e0963d6b561235f7c62a08d4accf3a2ba711",
  "2.14": "76107ae0772bde69132fb38d:4fd5080d01bbd41e82188d4e97efc703:60b97c80b56351d20c87c026ac9a6e295236803db0b347c9ab7e5ee12163723ee6e05201488cf059043b710050f9d68e686464a38c2811791297ff31f4118014118bf7e807d25d968ba6e214cb6f09cd7f5b8234d3167e57b6439809b77caaaa50b25883279778a609be04f0303446776a8ed1262c6da8aab7ead279576d746935fcbb2e6bfb2d15d8ce8b1e767c8fb0d53a622563431e4deefcdb422ab398a37299f14571cc12a6a709928276874ca8807362bf5ed4d26032d15d0c64bb81cccb7066ba46d578c64eebec3f5e2efe97e78aded285753dbe532669a7978b42da7627825c9432ae20f6343345f153694550efbffb2b74bd2119fb513f6ddff83fb3e2aa16a953f008984dce385c91bd303f5ef3cf1fdc0e8bb723572f024c2ee19b32fccd5f41b1818c5ebae8667d564c49c5061589b6c819a874500a339b3334468c2197ac5798650813271b15898b27a8435edca195ed40d657d4cc4eee275b465e661901e0",
  "2.15": "0e8f1cadf8fe35e124f26cb3:4c0d06d7a09a14b74ba085fb80692f67:c18d7b14e2ddfa1cff22372f1427617d34ffd5ea937f3a760624e69f95c36d1e772e3a8396a5c0e4f1c6ecd69e1a3f7f25dca8de8f088a888bdcfc6545238632c1db0a971098996f1c43e85323506971fb718c386458e5e0e31765c4fd22b8561159867184e2f65c433626672050eb5c28cb069554f07751b0048c465a6f39e9e502ce88b7d99e54dd4575baf01e01057dfd94cf505d68a2de2fc9f75c0f1a631d969ca257ed93dbbc9347e26c98acbfc8227bb51690b5d1d014efdd4174e7bf7e0e49d2f4db98a72be032e14f5fe375524c5535599f1f759f0627472a6e46370fa39b6ec0eed034a036636be74d68b4075cc8d28f8f40047da6113803dfb1478d2a4982b4dab2614802275b632eb6bcc193ed98b60eb9d461c2f6870f93db7bd41de2752ad1cf743912ccc0034f6d1ecabcd63e7a7d9a79f400946a0821971259f42d7295ae30e324a95a6b98b8da8fc95d7c565969f7fdd8f705652924dbd759d728a9953047cc",
  "2.16": "b3d70be3fcd8edd87e21b6a0:0257ba2a78f980120ddc7d7658073b9b:a24b47dc1c3a84c9bd23c28b7532f0a708be1c66e0c478977785ddab1c4d4fc691c5db944b7185061b82ac7899456f3b10b7786d6e53403500bcad6f1a25f150a3f8cbe627d38dc5ee9cc79a90deefb3e282f5a18a95284b3f4a34039e097634e63388c7069878e3e5ad7fbb33bb021fadf6c2106a3d1e37297ee65d1de06523ce76ae475e1d02c33bdae9c4a5d322e16f10a38ea328af83c5a2a9e2ad7f48ec31e90af625ac7d2889053d20ae7e060b125c2b78d005bfada400a7ce1a47488c748c827399a147888dfa855b062528caf3d6123582961c46b08a32fb6ebfc605922cb3a870a246841e1760a2024236ce1a2ffe6c03c572575edc6c8177d5f3e9e6abb84bf3e972f93373a2e52e48bbb591778bd71824c35f34d2aa060a395c86cdfa0c0fb16ccf6c90b1fa2b6e7702936a673f25ffd12bb6e15b9bc6143615301fc814e9da449b27cc935fe71ada5bdbdf4867bcc060cbb3cfdf862f2dc3bf58bfaa4517e68900152244233431855b922ea8185a1759053b8017353ef8f40365b78ca5bb210da876753b06550b154f5233e22fff1091445ee6531a46b0",
  "2.17": "fe6d25c5d824157b1c8f2d33:1e0c421e28b690b601b3f63eb8c1c42e:db7cea3f06546291b6f7c6fa94d5bf2773d5cd73759d30b67634c8ff6fbf4d7f247c5e27d00e46c718d1d17277cb628348bd55d20ae0eef2795cb5b336b238f7883306c2e1a93a2969c7590c15608866081b297c72baf248fb0592aa3bc1bde05cd21c9a2100148a3f46de54c1d6c5ddb03b4b9a2ab4b286a7a4be2091b0c90edbbf258def405abdbf82e019de6ec4e0b8b9d234f1d962c2508afa11b3fe57fbe04c7321fd4c88c942bd3378e0064884a797512b9ce0c7b0d16a83ba4df678e39276c87eb799f61b54db1b42754215a951ba94bcc9f250ec339f2a0e47aea25eaf6cbd74325cdefcbef13c4e2c1e9958178eb941a96c063bb3cf0a1860d1815f9013c4234d00ef23f27022845975cfa11ef4a1252473cdb985f920372febc51ec5e64f3cae710b49b097c3c7725d7e698d9e611bbf07a20ec298a928",
  "2.18": "73aa96b0d2b7dda3095e9bd4:5350896ec0e5230212551f4bb8031180:6306270f541f26ef6cc7af405bd2edcc1ec67730f6f9ee2a1013880709c2ad54433f4e4b62eb420e33cc5ef75aac77199ec09874182ef307fcbaea9e5d114b9fe60b59e130a757b580e54ab5e35e09b81ad3c3ad7aa048e403fc46aca60b0d8f34d0dff6c949f9fa2738986f9ff0e551638af955d6ec8c724e97192fe2ae4353fd29b8459b7bf12d93282780495e565df00bca1aa56cb1a1fc384de757ae90ef30fe77f1567874756ed17dfc83d9d765cc2cf495123cef2ac813db68de6399ac283dec389f79ae45baa70418ec945243d6e9c49ec406f5",
  "2.19": "ed858f0d92ab99279f00e933:e1a948bfea1c8f0882263d73b685a12f:821dc70dc2bac55328a58d98ad2a45c44ba863aa2baa47ec2124d033260641e4c6cda6a05eb16896413323706a3c6e7c65cd90d46aa1e9dd5a30c8a62aa192c2498d2dd984c73e73500a689cc49de45956c37cbac0e1529e405776f9d8e09fed5790fc81d38b6abdfd18e0b4ced1645853f2e05cda0bf5d7a88039fb1eff19a7e6f8c733367dd2bf6e694b7c281e7e76151839121709348b7c2ea8e02be681a07d3b614216e1c86296be953e664d888cff9a",
  "2.20": "60a48c43e0e04dcb8cf0ddc7:35b9cdd5cc34083d4ce71201239c4e79:193c47bdec237b5a22984c5e10b6d6bbd1ea1cbb9cf44ca2297d9338ace4aab616ebbf608474e9091096bd2f0748812015b6fa404995fc2d935b2fab44d6337dd240cda784b7e2a46038556f500057932a6eecc238121430fb285f085290324c00952f0209897fc8f7840d7c4a49e2d426978aa0240370dff1e14cedf194e899179b370751d3d87c50df9f84eb86b08a8e2fd8387590c51a9ba6d1f0331e7d0d5d865be58c43b4fccf5c705cf0afaca3929f1c88cec29444bb3091",
  "2.21": "566fc703601afe8e026c901f:e52f7d856a2780c301ee8c41df1d9417:08a13ed55b5aba16d8d78aed6332222025d064883cffa39861d870dcc87035440091735549b1a3314265452a63a5057495af1e1590badedeb920b14ab668c9a56e3a73a3b26e7672bab091beaa292d807281f08acca3a0630c7e72ea17a9a3e16fb3358ca0d15cc24ed55aa99abcecb44ef3a1020224c4d47ce50970523f77e207238aaa7ccff134bac460aeba85ae8672f336457555016f465de75a3b5f4bb793f95c38d6312572e133a5a581d360947a1d7334b49201a96825eeb1069aa6810c84c339a141e9db682949acdbc7b3c9b4da7b67837b053023079b",
  "2.22": "dba8bdf640249e9d7e206771:8f1b53a20a54666a3dce41b18c82b753:69dd3c87126ccba54243d7c0e8925220076c4ce8aaad147961e7fe2275a9b52b31cafc0ace7ecd1342a5fdc4b93466edff7ce895543c936567f44c56353eb9c5c00ca43ae368c984c9f70414a6d1ed8356b21aca86f7032a32fe36d92071560f5a0d287f9bfcc043b3b929febf83dc2dcce566de72acd70bca89f287901dc94478295f738e401177f87b7a1763a6a29074de858fc2d724477ce2baf2f1e1da3476f26528e14205e13054e24793efc34a6124b5fb21e7dd4d27a0d4387c4cb86b867a78a6dc150eb5c3fb01794293a22f9cad828348c99363",
  "2.23": "f4da2c37ead1eacd57ddc42e:447f702d1cea696bd2e513484e8f45ff:8434caf8f3164e1e2d5c2f374bccf53ba4271cff650afbd5890de6e9ec486f5d2aa7dc56281de864d3717b6424c36a3d12f9c83df657cd07d7e8c373ed07289bb6a65568693bce8b701165d8c43fa174fd4df77f213e1e64370ecf3006720cc6346f3f7d1d39144850532fa28fa9624714926089098c06f8ed26df2c8f084a575d0fbc0b38e3daac56738d4f716726172e5e02b2436965491ffe395421c64b39b8ba815a37699ce626925839914a439ff7b83c3bb0d04666c9de4ece7f51ad502a9201f9bb8c9b3cfd5afefc2170b1d0fb73b97d229d5ea9e74524184bc06b53921f9062df2288ca8edb291d92156ff57a18ff2b93c59d5c651a7067fa479168a5229df85e",
  "2.24": "06f2b8323f4a2b193195918c:66ab5821a7634bf21f0cb61a9c71af4b:a3d27b5cf5fdffc7081ab7ae2ce69d5b9954955278a81d98f4a9db14025420cc424d90a5ad92751c281ab3bde9a2a93300820b052527ad1f12cee4583abd360641fd05b6f41a05d6e4b2dbe61a601a4f0822628098e4593ae12171d3d7905026ab3611d6f6c76a16e53b10626e474c2fbe54691ab091a7e2bf4297257b232333c10103b1bd01cec87677c80d3f682915b8df704463b52cea32a388daa17886fdbf725088e9a518e1cfe63267cf4c891475458eb3fcd02ab257f4f2c3c7c1c7b546623bd9c14bcf8548bf0904b013f81e5542f229f7b4c96f4ec9a828b6059a75f6cc4f4892feeeb6b961e6f2973a1725ae9a50aee76e048c059284ecfc5595358a270873a57d9d5945f1405d5740658b3cb19298fc51f482672853b2378b575d8214a723019ad3ff4a33cfa6895ce6fc3ea5f2ef16741163fdc229037692ee972f5a9dd7ece8baecfbe50317f4363e1f970064412e18fe8b89a2934bacc7d555c8d23c6612a329961b6d6ac35c8570a8d2c80f22cf7c8d85cd67b5a521b34d8630c8ea629d1cac18be42f2cb0d2d505fb2650ed5094bc98fd2d341617544ef5625a756aefe16fdf31d01056f21f5b154e4ffcdf5b816d905814485175c1047b8137debc6a5c399a566ed0cfadb3dcc7ea2ff3265d56bb02a76e10f136525642341735a739c9025272e6fe7395b6c16b0645ddcdb6b0c4ce39880d7a925c548a1d26cb437adccaf2fddbc3ded8805c4542fd73a00",
  "2.25": "bcf01e50e711f393d24855b3:84053134c228c672b3af903c19cb6343:a3c8d6c1cdcc1b786deeb35ad643fe82a32b1ff69434f246bb3ef34d6e69ef10e13c02df544e66713df74b712b016c2fe1cc313cde3d85b04930f7c969691172ff778f6fe3e99ebe3ccdb4e3bb3636b23857251befe7dd0ba3cd60b3df608ee4dfa9f474cafd376251c9fa155541f80c42b54cdce22f2038ccd05dd030df4bfdad0869a7323df553b003b870be12ba523fecdbfaa4cbd316b2cc8486da0b3247822e14c39777cf0e47dfcf754a8735f8bdb29fffd22197844a072f6f64d7742ab29c665ad3c9985b82d5cacfb9adc06f1cc3745f06cfc9416cc73b8ba290e15d0aa48dc3bc4befb604cec5c471a2b9cb93eead53661e53bf092c1b9a8199060a431f304e7654d6b040ced975fdc8bf945b30004815f8ce",
  "2.26": "3143e673624724c66bc89d13:5d27a009d2a077ab111a304b376ef234:4ddd107cb096dfce6d9ac45f53b753e0a7a44a8fdba33fd31d467f8a3b6c94bc453befc38f8334b4ef6c61e744b3398e479a1c4fe18d950ada0d327d793868921be1547f5d8a54b09bbf548c06cafb3bfbe9c86de8b0e7ed1f93caee81a34852149ba70ab42ac574cc42c2d544819a8229bd873cbd4cc033052757d47ba7d1f5d61c62d42d9354a1497e7fda988b430948e91cd075567c50c6c8189a3b5cd61a34295cc3e42cf5b0fe12f2ada9e56127a8a5961fc41c6355164c96ed2d7f37caf1c7c284621cad330faf0a2f6ce98d350b17b71910740a6d856d7546832f93dd7fb3eb269be6595e946c78188ca3c56de705045d8918acba9d725e373fb34f2ae43dce4fbb768cd6f4104890f115e1410bc61683a7894455",
  "2.27": "7a806be1c7fd1952ef4060ee:61e1d7143e155abd7d12e54ef7c346f5:2265d8830ee3e8d280577eebd987c19c56df5449a553801e2f7b3997ce0d5e887f1b53167b00fa54632d903eeb4fe3ce7524e944d2323478445c75b8395a74836bf5255ef47b5ab47a6f01c257d817da8cf9ac74f7b36aed2010491a4cdc",
  "2.28": "017ca0b12965b279c83ea802:5fc893f12026d0b621610f06b1060105:d9c153bcba5a35f1d522feccd7eb16267816aca9eb665b1b7d67cde667d5e1b5df274ded7d37d12e1f273d1ec6b97b5c3718b872131f3c4c30210e1c93b5849c4c6a1696e30f8985dc6f233d25c6da99685692bbfd16286681e4f9f51778355d5e1e3e3c619215a819c62bd0f2bf9524222633a9f09f5e2f3f184ffa89078194ef0755d50dac6ee8c31cfdac98047a781aeba5af62cee5259181fd211e00c0adac1829bae734c684bc914789877fc765389c8ddcd1b6848a9c3fc88dcf807a750193a1201289cee9db777a2356f5dc4ff3b4fd30f7f36ff53ed34a66564721c4a8affc7ca2a33171a72fa50ade9c5f1bb482144c944daabf0e87e5ada4a83b0550f4c55ebc743d2a9515eafde7873497d1bc3e1e67d8a9b5a2fa33064bb03de805aaf99e7c754f016c8b08cc2afa0a11e5073bbcd055a451b12dbdbae69bf146b24ad1b27c",
  "2.29": "1a2c8a7fa5540ddc05e2d340:ba1468be6477df4d7956bd1fd040f0fb:fe3d42f63362d4993610bbe27fa33ae901a63b0e043b62439fa5474dcd0ef4de2582a45c7f0f770d9341f5fe39d676ea54294ab91e399324862f72947bae0b26406e2b9216377e8168a6af2e419c82e909a4d62427ab41641463fe4ffe31cd2518e164afc9a2e6fe134b74188b9b7987203984cc5220c2eff3cb4412de28733833e5",
  "2.30": "95336bb4a0be8c64eeb9aa0d:3e20d9fe567f0336f62e7659e6405911:9587a29b3c4b60854c9da3d1bc5d5a79dcca770b8d2cdc971dd0d683a7251b2494e758200b04a9ee859f29f3e73df687c0756943ed438b39ea78f003ffe10a905e1156adb2335c97b937d4b7ff6be16c70de6ea9a66535859d83c6cb67618510d2b1eeaf73e6d7eab94070648dec905cf2f71474f8d6beafd62377abae5a298a217aa0a00163baad46ec8b9d2b600670f2fad56377ec257f04c59d687ba6d9e8e50a14988a1b7fe10e112ae69a2be26b4d917b02097b7b081e4fe9f6f3a64d6a596794b9e87672e39994209afaebdfa050e689f30b9b0fa6b6fa16",
  "2.31": "1f1b98df05ce4d967ac730c8:6d8e59eff4efefac43090ae991ec3828:db4960775d9ec512d44358f7db35c025b187a135970d7dc0ff82943166e2556cfe30387036d05ccf7021969e93fac93f3a8ba41c7d",
  "2.32": "567743092847e2cf2f88955d:dda26c5fe573264bc0d280eb6148b1a4:fc40d509ee5584f524568cbf5cd0dfb627133ab106207b648593fab8935fc8495faa590a6ea1eca5f8eccc88cad444a6820d86d368b9d59e30b702fb3a9884e3b6968efeee10315a955cb6387de0cf99e3ecf31912ace06ca4132035dd4b646d2b95c400e2f2c14a95",
  "2.33": "ba7b5492361d606afffcc94b:e1e3dd1efa8e07edac0a8131898c53e1:3549e8d213b407dcbe5e16527206f2bcfa6949654e2860b9c261ed2eacef7cd320f884546dd25e505ecf18bbb283589c6a2154faf383543db6261efc4f3eaee90a05339e5f15ff8fba70b7d289ab3f4a84e85262d7045f133692879db50fdedcef2e44d404b8c71042a63d02f329fc379a1b39e1b0f29616869c70c6776d60f3ea58c7646b7582e7d1c522aaeb9b28206a48627e644a4eb131cafd4f4181d0ce6eaa6b20025642a4bfd4c7e59079a8f0cf222a905adf884b20d26c547ff605e4fb43d14ebe1be8a2f52a6259f22c76503d6dc1911694ad801ecfb6109cdf2edeb4af8ce12cb0195bc152b76038dab40b198fdc7b1f3dfeb0c582662cafbcaaf5a36ef1edb0c78ea9ac5c3720a6c2b9d03a2c888bc3c1da260a22b343e5ddf97e18f89b52314167fcf62427aca3148722b84425d748fd6b2019ea5033365fa367f5518fbbe13ac63147a3ef671d77d7109f17543690e5859a2c4b765cfed47d080b62",
  "2.34": "fa68f513065e6cdca626b2d3:2e01c38a3adba47aa4c4182b97baa97e:f8a12a0fb20a0e19b93084b11231c7cd3349e280a157b4ad3138daad5b3526bd3e13467826aae48dc3be568e83744536cb06a119cca9f964a817252180b24820e36916aeeeec1b43718839994bc7578237299b00694a01342c139646d5a924f7d9bc188e6987a359198a1d11b386162ad246f38d138bf0bf8e3ca43b75712dc87b3c49ac2b13d2e82a7c34685bfe5feb58fec287f56ff1a76e21f203f088ea89ff218d9cfa0988df39fa02ad851a8ea47280c09b315e22786279464351a8556c3b7c8c1e980f9c428705f57cda8bb0b3d8ebe2346b2024e9a7fef34eb2dcf742905e489a312d8e81ca26b4676bfe469f915944da59aaee96648645208939bf06f9e57510ce43025b",
  "2.35": "3ca8973721d8be18b4d157b9:5aaf4740415770ecd8a27e5ac79bff99:855e37ab0e4d844808c1db9ab0011086fbddcc431bf940c1cb4954833edcc7e1e341e1930c08c9e424709e75c043c8f2b796f3026bc9179b88e19bf3e6a5a5f7bdb2f38fa71e5a8cb5240364229b65b645a46a692689ea98d2ac6a1d8eadb0f43d09b78c91b85523f4a37d61009c91b831f00a676ae8f239b75c0ee8ad14a3432eeddb23d917ff94902dd059639a25a88593312afd223ada13965691220be8789549e433f6bddd339a00dcf4899508a1810df9f97f44e63b35981e2e73a75760999ac4f47afe8b5afc43c89c32da03b650183ac3aa8ac91950ea9f4a0768ea62879e96017752a1ac48d44150d000dcd0b7bee1e231e71371bb2a69f7712f9079944b5bbfaa3233ba38e311bcfe4951aa4c9f2bc199cadfe2953e37bea1e45d290c1223fc8169afbc4419515776e1c8782a9f612c57144908d2301409d8c0c2957e24b31e32a4e9449678e16d39627a227351af86492133485f9e817f4f11f0238e1fb59a4bd329ec35c45dd6fb9f18594493c9501c66330b6e9bb5bbd4493cdf9196c5521fc9e1913282159d8e2973131af10a76881ee8ba13c0f9c91d9036da3f217db153bfb07e2f3dc5aa8531c475f388ee5e8ebc1c9bc28b894ab6a89be422fc1f427868e5898f85591b3fd6db894affb51089e09aadb8c12050198af36b3a8be45a0c02495db4afa92a6144be153db02fdd183d",
  "2.36": "3aeb923209b1b25c0b935578:7556a0f3c5fb3eee32fc88ef96ff918c:a9ff2aa870ead0f423d9c4431cfa404c03a000c82836512526371bf5f3d8ffb3d8a618382e13c414480446cdb9fdbd8691f8beab34801947c1ce0cc4f26ad492e5360b448f7e6dd5c42ff17842ca026aa54f323bfa2d8d9060f35244c5c4f6f95d808e68673479e16b9c12c12fdfd33b48aa13a8df4d0831dcf8e4e6eb6bac2f1ef360fca20da87c13c54f2245a2e84176232f60028c3b0049eb8890ea080619e235c336847a55a3f49aec18a5b038063ccbb040e065ef64bfc136277c9bb561f7f82bb4675fe994d018ebf2cec080cb50df36466ab5b1f77e0987be244a055abc44e6f1f14622801cc8127f5a20231f39d627516560586eeea61493821f1e169f63a915533970b24d6e5bb492b0f39b4fe4a6e9a439a464ce3909944242d79fe83f6a9dd160d52c3b6921e2e8ab8b173fe806a9ba000db38ec06fbb99582a59798783d27ade550fc5b0698c7cdef0fe56480f870af29f95b684f700152a2a93408fe10a71e3842b6f8926f52e7bb540046fd5bec5ead162fd9b7ca56db6d7edd1fca2211d98af0bafee35078b0db21fa3c018b947af83241e8457fc058b08fbdcd4a24ee743721a0a2d44c7fc81539f5ef09d46c294be46807d7936cc2db781f596e8d004113d32a5a5218cea2c19cd5e95396afbbff93bef5e61d703f7be30d71c5a0fd5015b5642d24169b165b77a7b906bd6a321db6ff99af20e484d85a074a5bd611b770d5864b6d9ef95bffb020b6df7823e31bf5a6a8d85e1dc7cb0480282d87101c14498142114063e40999f3c031e3cd163645bf90236f08cef828bb496e1856612cbb4ff6447cccc913a4bba632d46b32d037bf6dd03fd7963a74241ca4e3005dd6d87c56ee1604b6c1ebef7ed3e5e0ccda427f66f0c0e87e7bb4fbad92eea305aa6e513",
  "2.37": "c0f29034203479be22d33118:6b721b5e10703c2d00417fdbd72b9444:b62d9c446d3cbd4344c9c2b8f0181d563373f53a609d0b1a53a95a41d09faee591d400b7353194189ae173c4a7ab34902cd6af1db8ca08a09be47e5b5141eb5d0fa29b486923d177f6e9d8b47fee41f0b7b13065630232d53ee5d6956566dbb3851ed841a1b426539601e05c7ef534bc43a90bda5f38e48733599a025c331529087c7404b1967b7f77b520c93fb2010a95e03b20f4ac7b481afe9744ff0bcc0809d5e94959222b69b94183e9ac2ceebe589736bb6a3e1a6f3be62d464684063cf1d3c02258a2a43c22ba8a13f741939e773fb71e1df0eba5055e7c87cf9b995b713b650d06e7ee15e241e3b6e642d566d0a3b40f68c30f433a3c4399a1f028a7b642a67211fa450161d8edf5d2929f13e67086b00b9508aca92ab2cde83f6e4eb06ad59af2a17db6b284f57087c994f5fa02b26f074eb53dc1f0ffa9ebd7f1f51b163101f4ba177780a91a04d0f10580742f9733a2371852892fa130a8de932aa2b1813b6b9e2e03f681cf53695cc61f8c580412884e9fb9761e023b1696fd79830ac72278455a5d3972ad60cd6432",
  "2.38": "2f8b47087f76e3b6e6879c69:c3e66b66e5524311a4f54fe38dfc8e75:181b7a11bd8a3350c0cd44e87f7161f995bb20589ab5c4884e2743d8aaf5ed6e108be02adad00d4fba774024a4c22e54e4d73693414ade598c0091aa10891683fbfcdfa59e02f8bd953d26fcd41975aa01946eacbaf5a266d09dcfeffde20e0b516899d0f7c35c56e0245e07096ce17979a1890e186753458db3a4962a84572cd71dd4fdf1980f0faf121ebf9ec18398eb4e34c1ac5ace90aa86133943636c45eae19b8e06a5e9ed89484fb626e645e14b",
  "2.39": "6fff187f1ca41f5858c193f5:54757181a36b1db7c907c724bdbb5eba:2b8078ff5809202a1c1b6588e2799f78bafd8dd50769d7a9fcbacae453f1c174eaec1ae4b16853dd2e73f8a5b79bb89eec7b551dbe28a007a6bef027d8b7265d0b80b5548eba8379d088543a903c033938060bedf470b569f7c802b7b64d50adce25ea0695cef190de8cb9f81a1bb2a862be5cc1facd21a98c599695c0be7b23d66b2ad1829627018a3681277fd7f9cbb29688dc4cbcc0ddbf01fc72cd517945c398e961f437f6de55e28c78cedf35b78bc9fc84bca100354e67e56a7a24f634fc44479ffcc94a7d909943111917775b2ef113951729a1693c84437da622b287f981b3cf65db7eb30331ea8b59482c105d851238f31836ccc355f89794182a065e4b882d22ea6473cdda6393f0f11853fdeec64e0a216aa38939239d4e24e1449e52d08f4e0c09a311f7207c16d3e98395ee4229d366d72c1c858401ca43d82de4be6d23",
  "2.40": "53c74408682b10d51d4967e6:f1c1e33dfe9acf0a2681c66d82de8572:99f4c7bd219e8a510ea88926e82d6d141e042aaa34a6be924adf97514fbde7847a4f953293859b6c10eac2e30a720483abf3453aef3bd9d90cdaf4d4d51c1843c5bb874b6fea7246ed6ce0bf7be56eb5d4558680380fda21eb86f17c34b8d8bd7415b48a8751ea2b469d784974d13facae6d13e5eb60483beb559b9892539b595e063230d1a4037851a153a84beb1fce56168d7070be0077520c244ce80091e884f3e19d3f81950dfcbb226c3a4bc64107dbf0b5b559b6bd6e5410996bcf065e6e186bb9da978a46e196ad81602bcd79420dd4d3c976ec5631e0a637a5568d35adf272bed521973096d1e008a6cd8e56c4f1441c26322bb864ee13c5dcf2d465cb69bd0371e42dc37f89f44aa586ad52c8d096ee1efc48217c9100a24a95214b3cd3fabd5f64cf2c1a40e784921289e57fe8c9cbd318b8069ac61fbce3a1bb0e2d57cf69bedb55ff83d0d66daef167e5be757124de8e29423a4f21d9f5413723822354f1207cf153e2105ab51279b5d05e4b5c9c980bf5fc7ae0432596aa4576c4d0c371c58e94e101eb0d5d0981aad89921122d39c47c8614c586b07bc05ff7b0f4eac38a6b13007dd5c859cf8ad4",
  "3.1": "8cd8b8207afec76024a51a05:a270b2df959f614a664e0f2bb4dea783:1f4e6d88be765ddbdc5a264f6fad059cbfd834d651831aee5c3c88ca0c68733dd83829c0f20cc988accbe80392d8183fb50c79bf7fd7272bd7605b375c587c455cc7691dc0ca45d93cdbfa1b0c535c2f58c04143c66f42dbb0d276fa81e6161d99b21e25a531a5953a37fcf8f0b637c82484b523d94f6878bffeafdd39c151203b0c58b5af0df67aa7a7daa4e8ef5e07a9e1df2c3bec4f1d2a47779f4c887341b6ad17bfba66cee36d119988a38182ffb4798c21d32f44fbf977d4b2422e29f87b170d",
  "3.2": "4d069b89dfdafec77f94ff73:0d5b9873e97d9ba0d8206e3f54496e4d:fec8125bee76ec9304fa86543b0d2f86fe480b733512149a4a018f8b04ad229bd8a576170e28a622c0ecdbe12469102698e0e09b2e86c369850b7acf7d3f3792955d18335305383bf87567423677c6157e616a15b35ed721e0cd53243ea9ca43cb0a340b8652b569a229300c44ae67ef970fb7ba245bc44abb429c0c76ebf986225e7c59380514f363a7673dd4d64a0a10bdaa17566d6b8a568ba98d0809d7a25702452c29fd1563dddb0e0b56632016fbf64ea31ad1234b345106d53e36d157568b5b20e03f554fcea946d9427c82d458b60bf8bc5a4bee68adf8c0acd055",
  "3.3": "202efcca069993f074d86953:f63ce4ebf5b046691831c535a838829a:00bb8e93b91d53e412230ecd248a44a99a10a76e1599cc5f072660b37ed6b625422774d11224940813eb6f569dedd430d326e295911525c810859db5f01191ca03cc81c81b5b8182ad8f8172a2ce903e1e36a25ffa163b8e4949d6cd3213de97c8a34c6872227ab5e80814e696830850314e89592b4a110ff1a4fdf4e7ed9bf81448c15d80acabad8380886c9c173aab8bf90a474928cac358eeaae6a144ca521d904b49c62ca21d72d12c376a9033149e8e8bfef2095118076782cfb559c7747595ac351834f0b386dd9649855aec9f596aa39d2d08008719dd1100371329cfdf7a41f8b4fa71aed6adaadc8560d5f339e6dc9d777d6dd77ef3d995c2df6043b0c5ed8db551f9d76e01316b21ed27f8f2febe46f1433c1c40d7fd51b43a734e6b996ba1dcde8c1e27cc3b58a451c2f8d66177a046650894e67a1be8bed270e2ec16068d3c",
  "3.4": "0ba080ec463fe31722df4a87:9fcd6064a85f47d510e9a0fa7f13b93e:465345f703a8184796f1680a90db590789ea6ccd4b768ee0edfb7136cca2c79e8b8e6a99ea5a4ec73955f226fed9bcadaf2d608c11f24fbc169fef37a4a4c3d2f8656bd957f7aeb6425b9013",
  "3.5": "7eaf42d0e3efd2d1b7b0e196:91f754042007c7c222afe69594f8e38d:6ec387ff0077beea5f3afa800a2ae70f38f5c7c8b996820493ff76d1bdef7e871041c6e0d4aeccba10998270e3921aecd8919b0d8b8b6ae787e3a5065b66568bceb2d5458fdc0740a7df9ccaea2e736bb8",
  "3.6": "34c6b0750df462c02ebc0634:a14297b6bb90765a8fabbae7d0eb8357:895386b43c83a20ff779ad96af127b14f64a8954ef653329d5b2",
  "3.7": "94173998e4376982df39673b:d7955c0baab41be5599e10dfb03efb21:da5c1ffa69244c6252de59875a4a25fb57ca56b5ab84e4ff0981742b720c1815e673051cd108893cfc9a6d08887cbcffe5d41f7f8aaf7c16fd1f8db7f17911a24abcdedd64b6db9a8088e224ec1fdfb39f2e2634a869b70330460c8d912091e97708e9c2aec622f7f2eb2c0885a9f3243d60196062400cf0d531620573ff5b3b3eec58aefb6ccb77f49a1d9902bd91321349b0657d872dc7f241beef36b0a7b6c0b812e77bbbe62dc9",
  "3.8": "cfa46201dcf7a1fb11a56484:86ba542202dcb041fccc69c389b77671:d89ce399a06c0486a4d3e370a2df85dbf7d965a95860460ff677e60a32b9e255ec02d86e6f3e1703857015ce2b2cb559c65c883db3dd912abe0ad5b9c48ad0b8ace65d86f67fda46acf3250f1e3199a3c5a590fdcdf3b799333b57cc40275c2d3b885d3045cb89c233ed12b77fc9931235d5ba5c974a68f735e9027f63de4b128c7af302e5fac616308ac2232090f1b6cfff0b8a1fa9333701615314caf5",
  "3.9": "5f834491d3ed546fb697e735:b395855d64a596cf06cd0112b79d4d16:c0f0af8c8108606d6f05e0e85eba58e2a586c1d197fe712c6e48b0213bcc8fe0439a1edf22e91b313e674cc5a3709bf15955a683d0ab9a13783a62932cb56878c4c22be9e40f6d8a5ea32896e0125c051691c7d61d0155823b1bb7c029b011dc68e3ae8c85da497bfbd8e55c0fd4dbb47c2c11fb382a0e3e19551df19c088ccd783c99c04a5939e64ebd8681238ad549a342e6a891c35bd9b3718998e53ae1ebefddb368",
  "3.10": "1e2422e648ad1993bff40079:e1b607f5854c41cf9ea24749a4dcdaa8:7d08badacf90d247f7571ba0058c5e8d81aeaa3b092848fa95d144b3164779ce41201d6b0ff6940b7b788c19972624b58769d3eee9a44c28d9a9cd011dd9b67d0cfef559f8b2a3a43c1dbf8d49dd78eacfec4eb7cf2396657d08f4e98591dc16f5710a06b224e0a3eafdae68d4b4819609139ca97b08bd2997023a488978c34401653f722379de4a4398dc0d3f6eaa5079f1bb144374c0da916c644e26303c37ed55af1facddb4c6958e72a580a738eefe6b8737c40acd1262372d36aeabb67beb6409bd480279679b9cda0a95353e98d9bd98102c439c3adbbff173e73a4df91b17c0cc887f041913d190519c47b2839ba90f8289acb1f3a804e5",
  "3.11": "0ff7c5ecc86123865da5f222:84e84b88866d8280aa04f2cec2eb9f16:0cf1d194341db25de9fc8455bd5a6735d582b0ded9abdee4424ec1700b24b4fa6fc7354a83c9f7b7b3caafd523dd303f427acdfd991dcc33126c112b5305711f8e349c8b7fd7e69944f809ae5b261d960f3796b29e70e6a9d2843b13fa735a78474cde1ed821e1b2ba774a734363623cba485214f1ea4e6cf0862f6de7365344a46e6d0c3840b457d1f30ff619490984b9de3bcdabac00951c9fef9b6caba352a85a37f0120d7097acb14ea01f8dda408a10d12c307766e6922e1b67a837c0504cc828b2683a562ec8f3c10235f9afa1a87dba522505945a65e6d8202445ac613842e7ceee2271b53c0158a5a4aecd8a8f368168c74e0a289f2a",
  "3.12": "bb4aaaaae1f1053562774b17:f7e6da07700407511dc43cc3882a7d6a:89ebd655443243dbdcd06ac41330dd493e86caad16109a6c748b5f1b82a6243167f70955da6e3108744cc67e52893e8949b071cbfb1e40f79f74348ad04ce390fadb5097dab446d75ab8bf1673a8615354db7cb625f87b22276ddb46b6ea37f6f2e82dac29a1a40c29159a50f3cd135e2a6ffde134cdcd4628381fafd97096e80c26119683b5c71ed6a12abe155c9e3a41c30cf969c6364fa5112959d25c98a6a25d5884f318d59d6bc8d7684b4a32fbe94809316e7c11b9275e05ab139eb4e38cff8f827eb0480db7e1d52fb225b2a66efd31163b953294a894fc93ad6ea59fe9a29875fab46c8d3317c5f9df4e8eae4cc4cef80ae21305a32c99d4dca2077372b00a932956702b33f961255c635635bb7fa758a5b650a4204ef0c60ee4c5cd957f9cbeb7f7dc1f19f7ab80d027b7d3b55ec72ac17efb0e48ad11b6356d946e6292c52d99dde33c8573bd7b81daa7a1420ea3d3fe9ab50bf82dcab05ac55084",
  "3.13": "07a36093be188b3e4b2ed632:931a3e24b45ec94c80f38684c1457526:5e062b13e4269658161583ee2438cfc145c4b6560f4abdadc60a97ee4804c2d7b7e947ff6c0909f878acbd268de3f87a8f7b12bc1969ee611701e77934a6e250e3a8d3c7352b27bdfe3ece855f830e50dc385b7e40428f7311514cc4b2113849f1bd341077c5276a062a37a83be6c10af355482b52b30a03708cb156336bfd081d9937cdbf0840921deacdca5d85bea569c934788b9b4ef123cf72905a9675d32e0b80eed42b4f90b3c3e34d29cc06fc16e15efc3c25cae3582c0ac0a98fb1ec66c866d312b0cc706bae05cc4433f6624ab9b97f06cd30107b6f49fa7a14244927d4bb23e5ea9bec4f04fb4de36c10d0b78d6ae244",
  "3.14": "0d1bea28efffd2d0ee0cdf3f:9b430aa513ca021f5008ba669fbc892e:48679cb54af76e05cce3550a46a0c9d6b9d6cd43682cb4d18a4f6776ec3ba4a3d4bde2fbf107c0adb444f35928983f54f88e841b3629582d2b19ef79084882fc24f0511a71ebafdb16065fb6b852ad0aa5ef1d56fae282be421baff9769c87a36c449c24950ea84159eceae09fc9712d6260b106cde40922ef1b2e08e8840cc6bc78ba8326e9c2fed9e23c21156b23728adac0c835e0e10ddf97f0b61675d154e96d483e16930c048708bef4f812be5ad5f53d5906312bb23675fa89fce676b6617263fb55b9ada3ac5b",
  "3.15": "37041fcb029c273d990de861:e8890fb78461a5cf7faf11d915becc96:6b9e4f03ba93b1c2d4fd1cf8031a84a29335569f089b56269be53dacf078f0ed5cdb1309b2a160ed258aade93853b4d22b5d4bb1f2b8fa41f7de70e5d4aeac191c59e55fb44961e0d81851b552be6c19ad9525e933d9ee6a0e751c0eb3726a49f22ab02255c069a766d18a66cd031c317b9875f0cefda88bf9ed7a352e804465fe92c8ed5b56b20275a27ce112ef1617ed43c7933ea0e7e4b740260a76407af3708bfa4de466faff68314d926fe3fe62",
  "3.16": "47b9c8c15d67b6dfbe7289ea:def91a558a5152e950ef418092ed57b5:0b1a386f96b18b3e180496f3d6c7c0e8df571ae7fbc223c5043dcd074553cb460811647c66b9d564e672ba55e163dd0f226d99cb45b105ff6d313a072ac25af7d2928aa18bab9baf449e06e9c61621d0c2cb3c3311f3a64b5f9ebcb49d402c8ac26f760ce1346d20b471c69712881e47a810381b6e8166c784615133a6d8b621445be06078a7c0d85b588a36edfa3182d76dceea224ba4813467da3736d8f0f823",
  "3.17": "808e01ee6e51ba8baf03440c:a8fbd73b588563ba9ca3ca72519bd523:0aa09ae7a2b0d50a7e7a26b04df2296862f2a664ced5fb212985d51251a1dd7a3c2b2baed7842523155b61ba56873441529556663d0175ad0b01fa5f583cac338a518ca20ac7a0e41c341beafd0052bff9adf1032c0244f11d2cc1a64876535dc8e1ef72d0c6b19992cbfcc78af7914f71577cf8ce5942b433c537c990af3e374b6c7f1b3679cd3ef46b861480cf204d5bc823ade241bde784834de1ad6ff08e654fe730b58f682c36096ac78ed07f6092b99123078c8b54d6e42e5b5c",
  "3.18": "a57882a5b32672e38aa49332:d59e1dc8bde626d2c6a8dca5936b114a:77e54235f2867c06a01d9ac0b8c612b7ff523c66352e16263a1caab731a57bde0fe5edce4ced1bd60295823ae1f21bd45db0ca2de216eb50c572a1cd7d50a91d",
  "3.19": "3185e4c1637a369d8377efc4:7b3082f0f41b7e882f89f7965f2d3365:c7fb76d27e98df188773db2c8446da2a65d9b9594e94aedd19c7e6448dbbb71c06e1aca594f56ae69f525800ce36252081cd3f10be240b0599bf6952862c3bf8f67e2621fea434884e5010e0005657d0c723242ebe1dd32f535f90bd1b5d5a94383c87eade370efbfc6a8bd7a42f5fbdb1bf888806b63eefc27ceb76a9b6eb19987f5eeaa708d18930209ed794c0d7436358457237f867739ad1736b781f4effd0b719247b5f92612399d3511135740e6888baf5f7ab8eebcfe5c0ebd494d266747cbc009254d67e88a495826522ecb5a2fea470d66c0c9e980e72ff1d5613b581835390262c603311887795dd79380bdf53e4043090cbc726f492ba9f64be0c8df7da98ab",
  "3.20": "75d6ec6047070ecd72b6d142:029167c2decbaabbc2a09276a1b5d15e:071cff5ed8d695505c3746eafa4cc8cabac5221be36e1cbf3fb77b3998cb71a7d5f5d59df4781a43cf99342a88398ffad3d4400a166903d37d11ae8ae3cab4cfefbfa70aafc14404e4ee6149d72b8d1e498c15babfe6d8a531c8d9a6ff1c46a8fb7e154a9234ea9fec5808efb25a1f31cba0ccdc2cb64ef72658c5c9853651b0f133587f2d8af82421951b47a52a43a8cc13401dd2adcf48a037931dc96598b147ef91a1fd2862ee16704e82881e500b27424f119c03c8ef38497a93bb943be4afc59fca56588d6c8f690aba3b2710670c51a9844aaa0b6cf4d5d1fdab6d3ca70178f3d7c4605fde25f41cba39483ddcd0e5b427247ee1233148240b86",
  "3.21": "fbbad8f3ed120e284d82c4ee:4ffa884a60b55c410c0c1450024c6bdf:906f5d53c32bb88532f9343ffd800ec0d1148a737c697011a4ca92011515f95d2d0dcf7ccaca95d5a3f966ac508aa7cc8bcfc2796dbd4eef5da3a1a229d4af1e79d331f1744eff4319b782463dbcb499aaeda4fe75d223d488450bd326737335d7ecfc4260c1f6a0a4f0ec27c34d488f407b1c7c4a74cb2a3b9d03b678eaea142ccf54c919c8190af49d952664e5aefd30acb211170105358bbe82f4e17b87d1b45dc65fa548e6fe03200d61b948814e36fab9bba0f4f73a5d75fb1c4d9cbe407f4a67877ec8e62953132fa58b0ecb28febf59ac8cbfa27d8f6ea0462119aac45258304eb06983921fdd045f1057861625d565299d84f459ca0c0877eb8b6993b5a95935787c5f66be7d9c8b00cd3947049f3dabce04bc79f2fa385fba05e2dd4a441d79e28110a07143",
  "3.22": "d7adcbfcb7e02fbd9bd3aa0a:b2e3fbf7071089da41cab36c69b8edbc:0cdb9caa4f131b8cc9fe75005a23cfd649c7df9ecf8164dde9e4e068cde4afb11f81be314d5817b700def7eed81278bd9c5e68984aaa7a3dee122b7673d22ba8d67004a8be89ad259157870917ff9b24f1e1fc184055555458e90f123f9c47ee4c695e5510b94193fb97b56e7a05b496ff7b13467c97a174154f01c966dfdad19e72480f27ca1d460e4e2bc38c854c3c7285ca1ac68d8d1e8c8f5d1c4d727c5e9c715a3556b47fcae5ef5d8c8d29e3ef8ee930a1633eacc319710abf7263421c1bfdbd7f64910172545773689ccdfd9d8ac777e9b2908386c87328c20fad2031269167d7ad7ecd89b6b3d21671dd928959e743531ef1c0f112f0680f9085f633bb7bddea747316c879a52b215f2af79d5846148674a46a4334ed8a1f3ccd22f2a0bff9fed619007ab32de9e62ca7ae793fe2f11fbdc3ae08a5e2c8699aef2ac757f706a28e2c7ee054a2fe29522c7dac849a859c63935c2332ba469f4d3301a4978e89eeb8faa96c4bc4cda1df127071b8e7998697f836e7850af1227cfdbc84ce2b57b890b14cb1fa69fc4a04faf87dc55f2f40a23dd731e79a4ce6adecb71b5d278878acac4b769dc3468b7e5a87704b5a5733baad57e3e8d44aff24925e274b48d30de8d660da9680cc41a2dbf285dc6a043cc8ee635af83b760df3cedd1ddf6f75c78c409be7eb66341a32c12a691d65b91a656a8a8376acc9f4008f17956b27ad03a403d23e1e8418279046473ab7e52e02314b45218a85d8208ecc772665bd46bf81d4cc24ebf75432bd2ff1ef32a24c3e63636ceb834c425ce553c5b888ba9a470d9a0f41cf694ab31680867e4a7f75b8143f078ee3c248ae88a73b66d3c07dfe261597dfd6b41f2a795fd7da01d3414d1ed89e07bb4db7e35daf0d10f0c6d428a907738b72ed0fb7e83d24e7df305e68aac6a21552764f033fe1032850d7c921bddece97acfb1de326d2a52655c516d1193fb7f9d087becf367f102f6952a445db036b2070137a66b0b9",
  "3.23": "e99a47e9cfcc12fcb539a1d0:bb877db87ae7dd0e21571825618eb1f5:43677cbe9f8a1a76fe5c10ff4bab8384f6d915822cd99a84945d7300452362edf7da1fd043f330eefb7721e6d92c1b04d2a30d2f2f71af91cdf1ce453a5fdd01543e2e3cf986c8b2dfbf11022ce9a0092455065d0a2f962f52f3208b0744e99c027fdf7322367c52ead5079694d71b9505adc1c7ed57a5a7f6487619172f4012e03e2431a10c5a02fcb540b0b6ef8462186144ee65e1037491343e49ed01316bf29aee998c9b5bf9367ddf65fcb8e5b30d7672a31d3079c9c61d4533860d75ac4864f8e9bef3431e9685aa3a9670fba2b8ed5bb0dcdd44fdfe3958c64d9e6befa477a3ed785ad44f8bdb6cd70056ae1e81d68f18d99229a3dc5aa775d5ebd860bbc7ad289eb59b96307ed3ab73da123fde587a40aa8506ccdde572086c3e528b459697ee",
  "3.24": "63988bbcc52ff139620fc1d5:95ee87e6eaad033c3b66e38328538b79:5ab824e076687871ffbfee08f61ae7829a052110e32887be6be8a2d3a8fa85d52d1e04f4e4110540788cc43ef980bc05b1c3e3ffbf55a5e0e1bb9a485ee6b5b1670c3c605f01dfa9097e1dc64efc41bbdf64bf9995bfe57ab93f3971a74cc97f4e13f5b532743360618ae293a81b2fbe29cdff3af3159148dee15bba55b0ca82f1d7d794ea0c1c003dc11888303cc3",
  "3.25": "bf6d9ff49a5f0d3fb8ac600f:f59de6c37703464a3d4a76bf09f3e20b:a09d6bc9c53183f78b6529fe0c42fa36fa559b75e5b20033598e638f6f52ee7fd6c10a5345ff3150e4aba1570a3ecb3ffc046f7778cc4bb9b9342334dbf13fb96c1a11613713bff503b94999d5af406eefae4d03f7648869fa63f0a049f3ff352ecab27a5bcb61d9da44f4c544883b2cbcbcd816a73da1a30a1ab36e7592b0f83e59d31766547181104af8593f1cd4cb390b7f64a5870e2262003a350ab5aebe0e22fc12cfd6f7da35a8338a3cb03f7df91938942c39c115b501cc8bd60cea85c5a202a4ab21bb4be46a8cda459c003819a0bbd1981346e8310fef1a750051b438a703ad48e4e7a8592e21d4803d465c8c2ec00a039a5bf76d34dc6e9544f9fd1d06072c736982c479f70fb306a12dcfcd35f11548d592a2ccdcd55b20d6c34a7825a27287a3414173dc1031113f7722",
  "3.26": "1a666f9f99e9880b19a811a3:171b90ca5c25df86fdc6fe74c8766afa:a14e925965cf5c3da6c29f0fbbcfa18c06a164ad0675bb7337472dd894bb907e01fca3d1837f5a1981f30fcb93912c9a9da7fed86ebe387b5c722f93efa105dd16adc360195aa20b144854e0d2dc5a61f6fce22da5450895e0c3c8af8d8851d72a23b7054fb8511c7dbfcc497966199b1a48a5d30543c2479bc450553aadcc03731888d6d35d6ece4c047a7abb43bd938c9ab788853aee4560f2",
  "3.27": "c3bbff76e227e1286bf2659b:354c61fe3f19dd6546127e5085d3635d:67028199017b97fd5be9eb612b4a5ad625bf02cb5f35efbe09e96da342cc85762431f728f3af7a001c6f30371c89125e25f7015997de98914f3c6779450f0b297e708ce19f2d4720475c79b2901233e5a4afa22b6029b312d65284eb84423a0a30b04ebfb9fba1fdbd03479b22fe0fcf742fca7ec8465a16294338d45f96bbfe0a9b0f12bed52222cdf4a5ef813d99f70c24b469984d9b9f5f80e2474fbfb084d666e16b31f14322ad337d73bcaec1b9ed7bdd9a8c2023ccaff89d890bf1c568b96bf9fff78355b4550a1110204433715b1c4e90ef1cb4fe3a69816135432394b03e36f5507f3fa8d3499cb13a422fd02fe4d916396c7766ef78024361c4c105b63e3c2c364de7e41ff971bd96e76651b98212cd6c3539b7d53d",
  "3.28": "ab6124faaa926c0ff66eeae3:3117fe4493466fd093b4336701b0deff:68fe57159b87e25d3a30869031248ed7cb49821ad18994dc7c6d21eac4b518307abc0de63259baaf7010de7c67a42898cb8ab152117321ba3841418c7bb4d60908b6dd6094d9f07693135ccf626307187f53dd079c353456ecc7bb50acdbc41eef2a48dd4065ea4714510dcc27d6b60f78c1",
  "3.29": "313de8b1ee90bfcd90c8029b:fae5f10150ea12dabd3a9b3884e4d85c:0d0bcc7864cd4585e906d6c745f8c496cbb786e59115ad1c9de7b8b1e21ae4e60daeccf0106324337278538f7db34d2b8058a330ce8e06b3fe6cd77696e6760e855d03175893703a1faca7176cc46b7c71c8869c9ea3ef6285d7b6fb74a70076abe2dce53dfa605838a25fa8df360b4a937a8136a3ac6f5a697e22978e6595155e750e46e7d1f9f09e29f8f97d0259cb1e6cf2a5c432b3381685fbea64a4085c81ff35216fb24a3ab50a0f2dfc312565e79cbd71b8566dd0c98d900bb0468a2a00cc5f7419ee19365423ae779c758c5176365486411ced5f101d82b665",
  "3.30": "0d00f18f36553f2fcaa5a28e:7bfa38334cfac91565ec59c16b89bd63:86fa29122ef93e257a528aed65f09ff3b5818de5a44739a69085b188c6822f0cdf2e730f178c4fafa36364eecdd5db17270acd190c672469ed9852aa4da4602695f10dc77a53248c4ba2a1cbb6c72a7e75c01d121fd456dea5de0fd3fdc755ad233cddb993c733ad97e83751d05247ae3187185eecd9a51bc05d0f924bc300afbd728699b94f58aa1fc14dadf582bbb28ce10e510f",
  "3.31": "a6a83659e352e28dacc491c8:818138d9f28fe5aee339c8276246ab2d:2ea7147072e3e7c1dde2e6562b5f5eda069c7a274ce62c365b9c57514dcd259526455672a78c5fefb726423b601fc4281b14084da483bfd00b05df1b54e8deaf5bb3089b07756968caf97c6bf1694195f54ec0f6ef874b7225ac8ddba13636bc5f96403e40cd02e527c13c4e5586a02c5f9f34829a2c29b5d7a4cacc452c8c44b119b2f46459b916dc449f0867b6fc6e57bc28a7f15db475c610679cb24439177568c8b928f2c1b99df468d867a8f7c6db6adf834365d917610ce57ceb29be37928dad992ba58c1fb9c30f92bb0b87676411860bb9b7f191250b09ababbf70d39ba9888f896679ca5fca671f666054805a845f21cd207e8f47f36ad97044e80b7bbd330545ebd48029f96b77123465fe559623aa29348f3e5a27ffee985b92b9f365fdf355862a6123cc8385aee9e63bfdba4c3814a99f376bc0df6b9998a7ebb2e97d1dad218ab62b2b7e26b65dd85e6d",
  "3.32": "055d3e249004fcffb078dcd2:b705eb23abaa408b7b7e3240fd4f015a:9bd3e8af1faac36d636aebaa26af8a65788ffbab2a9b6ff4cc8a6efdb5d71aab81ab5e82ea1e2c02051890e6275fde02a087508f3d87b86815a837dfb65f8adbd0a88431de32109689e624f77d3cfe4e576dfd5f7ced6ce9a2ec32d571096e184ddd52a712018733ba71603a5b39b106772cc4f0bca6b96212ce75bf9fdf8e339f0ec690291d1b43a6fb63685a9d8dc8958a3249d55b3014cdeed96ecae9c3485a3edf63885427194a15644fce1450ff77d47e2bf6da65de5c46b6f91a81b8e338acdc42f510f589eba27957612663e8677310aa941b39b01b79345b5d37610121f2707baf8a86672643bd2d4bd2a1d737201db1eddf3b0c5323072e8fb5efec8f017c2cd2b86e32eda545eb353cca3bd351cf0ff3a72944567b8e78fc3895965f88db3457498a11108fb724f44b13269bd76c3383ab03566ef8513279a799b447c023afec8a9e0e98a55610969b82d679bee8102b2722eb14e569bdee93bfbf139402c32295b3640768a6410c02c010ed68c1c0483c37581b0b236c306ccfab06fb9549df6920b69b1385aef4d0a4236f55852f7767df9ad069fb2760b771c6c352681b87c980996bdf95258356d63fe52cf9e26f7f4e438b4f456d4e525cebe769008136f1de238ea3c9b8412b2b6ea4cb7dec2819543dd93471ab4451d89cbe2ca4858f96c88e736493eef1762312ab533be83983f3de02612056b21d72df23cea5b47086d7b3dd9ccbb801910f26f0f5a77378e017b2ed639a",
  "3.33": "1e3ae9d231afed9d4137f298:86ecae78786e11e52fb369d4bed3ce3f:9b9dbd3b96aa7d744aa78bb7bbbed14da93ab2cc846793c1b8afcfbef876d9b786904cbc06a92911fde8748297ac6d957c283a798a73370413db6867e9d5a1e1ba6581d6996fbdb9a3d2e9a79cc84ec95cd20792e682e3d0541973e537fbe1b3ca5a87dc2931f6f0be7b281e26e75115f6e980ebe14c92e9dc01b891140965fd55d7807906159852b5d634643cd2beabfea18ceaa5",
  "3.34": "2010076177af420ff355196c:456ca58685134c7a4708798fd2933b82:80d4454d7ec3f11bb9236438178f94bd89e42a0166efafd0bd2fcd65cad35a422b84a38f5694e55ec47c22d04d945d8687e532da7738fe5fdbb7c0a0cf1698102a0085e78ff235bb6d24e2e14d82504ef0de83b7f516815385d1c0cacba5258025f23a16066d8f60ca1b95864ed87158524febe86757b8da28b6d27a11bc37cc3177bd37ea61322a9464dc3d507adb3f1df3a3a9db1c1e393cc6a05cd0a76dc6bdef69a9f7dbe51e",
  "3.35": "74f3e80cd0f036e3fd7e1ca8:a40781951120f4c73afeaf0df8dd7f61:f581f0af3fe1ba2a5056e68b78e8bce53dada467056b6a9b61467f45444ba10a48b3f0663081d590b661e43a9c1d12ab6c2f9ff63df249b99e9f9f299460ad5bba60435cfe5db9917401ffb846071ce91e7d25c5e33de09c08ceb2e2735b259ce6bcbfa827e28c4f73225f85994220cdc2323f10f69b77fccb4a2a3696e5cac6a257719093ea6ff0ec2aaeb924e79d8058dcc55da93e08cae2fdc8feece6fb5060677a3824dca7c9306250314cdeb69b9d9ac97c7096addd8fc00bae598a6ebaefc6b70d98b537efa88068f35e3665f42d9b37dbb89e267b1665361595015086b524b11642cab308300cdc052877f039bd12348f79a58cd7",
  "3.36": "a6b2c12288703faeb00a1361:ae9211cafea9b5acb70057c1be0e060d:6fbdd6766f94db6407d0023a7c5579681fb45d91aa6c0d6e032c1bf5797d3600eb862376b2921204889b921d5654d80236133c9f4b3c1a31544c86b968fb71352f4909176586921c4dbe412a26afa91a10923a46e5f938f72b5cf8a4817529bdd5ed5df2de2a53abb643600d75c5502ef4a2184219f93ae49749fb0465b2af9fde9a72fec5ad886e0dc69604a38955e62c2eea15f5fa9cd7c4cc0ad4ccd42f28e3200b3b9fbe156b211042bdbc87de4efbb2fb0f2447f7a76b9e85f222cc9dd62b091ccbae3f2f41ed135cfbf7429b412887a004c14d64c3426ea65c0cadee5e36bd6e2efd7ba76bd4c6cf758fa170918b1a1a6aab63caa8fa72b94dab8699ed3088239c4ac67788c4db1288e90ce259d5a36efaba76674f60a3529366c05c31bc070e95690d6b6a25197f34476105c9f3616c9a823e5380caa2ecf60e175249946e8bdc3fa5bf944b98044a168df21fd2ae497c58cf75f6f3e2f3b80686bb1e6edfdb572055fe28e3bb6232e5d830bc6a4d9e8e27e2dceab9d94aa0a1a09a4125cb9447fbe2fbb25a36fba705271f812326d97c3a6eadfea2835a9772c4d01b736ce9f80667ac8ee6ef5ecff790",
  "3.37": "9f0fd3e624d6fda7508fb7af:81bde3ce258034d28a702613456000f8:40e7c3ea4fe20319ec2ddc597b9d6ae3b1931ddf358b83e0f2c257a5358c6a7a113b026113ca0ee5b704401d3e67c9130001fcdf68d66ffde2b698f1c5fc98b3993e44ef36e1cef460a497e6abf9c2dca8d3773443a86825236aaa57b98a797af07735db8a38b62eb7bbb0ae6d5d59ac4d4053094b423ea1b2b67b3f9983452d33b0305bef2054b9744a02c104277faf0c20d4180df9d620a7bfd138fe09e4b8",
  "3.38": "ca77c873592a6b46f810c058:644df7bae060b017283cb94ed8d35d05:87982704dc4eefd198cf674299a9e8ccab47531cd57633d98a302b22bc907ef8d850abfb6abd2c49b55a964801716d277d624b8bbcc18530f1d24e0eeca174352b3f88581845721747dd0e1240949bdd0b66457ca7c6abbad91abb37b6eebc3aab71f7a8f0705a87a9aa41dc9d0fea08420fdfd8d573048fa6923785b2ed74e835a191bec256b3a6ef28765cccbd5beb46f1febe865629539241e2f93b3ebac235e81bb146be3f2f8d0e51e962242fd130235695e47d339c691f19f0d0fb1ab26078699da0e5e471851c58442c39e889cc92b106424d40813dc503baf40f034d0864056e66451e65472fcdd58f5df454c328814feef8530d614c77a37cced80966fc0937756e4855c47eb7a694c315f7f30f63e5daccdc5e678ec1991963aa06c81b8c7e33367c7b3d8660a2c41672d0137c9bc034252a955b1f0eb624d5e0ac34f05612feca67dd3c6c",
  "3.39": "f5384b3c48b29b9e8737f76b:2757fdb9767244ec8fb5e09178a10204:737725c2675ecd24554ee9eb711377af796c6d46a86b068c6b5ee949bb5676cd5f03ed13d3a4b4703e3600e8ebaffee51e2be529360bc87446a2db69866db0af6f8391acdb323627b38d2a0ea9ec1d56631ef0106d842ec16173caf34e4ee9ea5879adf4ef2d732d20a66cff021f62728d1d834642ecf082057c72a515db7a7cb6329ac66120b8886194669fdbc975d4d922389b2dc8d08c66371130439540212d75297f024643ef4bb991bf8919cfba051f085d3dccda51f2a291d402f35de4dde53ae4ac2416d25d9a56ddb4a6a77bda3185fc5ccbcc7d7c6f27e41350806c1962b7a3fd08759497d493d2bfb6cf94aad3e886482c2aa1e09ef59fc198e4632dc86bb5d8b24a2798c1c84f0f6a3ba4e9a7190c56a27045fa2e73be2b3c2b641dc520187912fcb13dbdb828e6a74d026624bb3bf66a52f151e0cd89fe44756b801f4769de155bf1fa363b564df2b8e4aeef563df7107685fe3560a4531a158cf266f8d6452f66bf87fa1a79198f9c8eb2ede3a7a7411f998837a978701d1f182d1cb30a0f741cda5d7bdf928fd1c9704f967fd40a36705550b7199af51a001c84a2fbd839b1e3673b3a17cda86b9fd9efa5ad7214ad243d59c0caafea273b8650d7ff7d55b319a529d9379938c07c24be5013b2a173b8587320f27d35d31cda23dc9b59bc0b4e333285cb6594d4bcc949fc3ae2df520e3bb84cd5bacab4d21ea91e7ec8cedc04822ba2acfff32793a4a6241d839c2a1d7307d13732a82ddd24bdf459eead2053264f87927c4e59165b187fa30bbc1a414e4a6ce753dad16650b6eb209fdd45c4da240e4e4a7955dd7aeb5dbcd4c6e5a613aaaacecddd035297e1c1aad963c6bcf3b7e2868e49",
  "3.40": "6e4259969c6d36a4f13f0bf0:aaf417700bee3dd3888eee3fe36d233d:a3707a3432c4b4d5b04d0e51cb68d17a89e3bd7b9b9709213fb33e4b870102a9acac9d04facbdaaf523be45530e719b17b36d64866f2b70eec80a7847b09bd75be13b846de9ca6bf7d130ed565d00effa1f2a62ef6adf4ad03f14ada8f650cc7074231dcade9b57cc7563a1f5673ec29e13df6f24db7d777738d625c7b19ae3a7002cb35a2576193a5f6561feba4ce93e3b8db460c97d41b4f5ebbfc787f34ce5dddfe77b13877b3a2",
  "3.41": "43165469b6cd93bfe60a0b26:87df8eb56a9f83c5f938d7896aca54a5:3d265d952f5cf2f468eff40b81124f5c7cac82ef96b6840d5dcb2578ade1258493040b314f3a0ffaf91094607ba9651f5f1bde00346d07160c15e9",
  "3.42": "0c9a25e2ff8438b7578f4716:ae8591d1a226091cb19538e525749495:0cb1e5b9f28fe8936adaa305f7ec575df5592fe9d30057b67f83f591fa0d3580acff843cd7db08eb5d3ba24c3bba45755e932cabd776d804657f6dff08bb228306d6dd4e698279a26b4ae83b39547fec2ff39e34f59bf0e82fe8ebcb9d588f51ba477ba512c55b5f063056f22698df593de55d7153aa2283dfa535b0e93b7f21e911d8a0f44a88123f8dbde1ac74753bef84c012a10e1d5e5f933acf3d1179dc57ac5beb961b84772115b31a59d8cef73dd6a4132fdc62908c3b0ec3110418a6db3df6a49ab828bef747e0066fbd6bff36755b671b4ac6f5387d08be557fd7f94e4408df6b",
  "4.1": "a5193c543180bc2e278e4eba:947ae44a70ca43a6de6b5308a6aaa8f0:61947417ba52ce9a78de4a3c4b3e46331d9f1257def3c5abae4179e486d2efa12ddec68534f4259e54af1fa4cb574e0565603aaafad45f33da4a12c06388fad68f7a9ffb9dcd97361772ff493ea18b0127adf3",
  "4.2": "65c603f8c829657593d4c985:3213a781042660c4af8b302f6e9515c0:01439776997e091c62f8e72e112d0e4ecfb0be882fc9219dcfc99f5af0ebb2df50500df4f92b8fddbd071722819088d6024658bab4e2b38acd68ad6827116665bd02f0d7eb69a32c46bb6ba98adc3edd530dea3bf25195c4be3db1f1360d8b35d975d645b98f1760dcfd6121cbf7afc7cfbbede89a7cf2b02ae41b91a082529ab0c113cb7616380587c9d87bedbd14a099a68a39464088962b92e73831a6906622f635c6d2506d0cd4fde684",
  "4.3": "658f0d15cbb9625e1ccee0ec:0baf3073b05939ba5f08c5ddd12e8a26:c6ef0deee28900e386affe1840e7b9d98f40af25dd81f2a6c6fd7ab25da8cb59e4043219c7b8fdf9eedc36e25438cd9144078dd21e63b945c2b6c26c595b2ae33b8628a09fb3aaf5f734f868ba1117d9fe09a8e75b495e4baa77903054ddfe0acb33d08b9fb2bc31443a97aab4ca6c95d9f4fe4b5f8b39ca531fed33c59936779f3092f4bff94ac0441cb3e8d94cb6e2538955d83afa28906445f2dc5f6a3efef86eeadca6c1948d98ced16b3791c81ed900a3422d5575370f55fa35e4dd524ba4a83ed0d5dd8e778100c64fa8caeaec6e3016d3169b033f6abb27278dfa56d011d86d771c130845278d42f7f2c148dfa300f9a983a69e67eda14eb3d1c93eb4cd7cdcc00c02c958cbd0f56c1c93b00fefe9f72e5b11466893e0df7c6f4f67c9432b838b1d614a0cb2aef570afa7fce0",
  "4.4": "d90d761014755973c655542d:808c91b1197aec1da6c240930723fb0e:48d9b176cab5b35130aa5346f4a1fc8a359fadf8e38fca2da621ec27908c63ffa3b3ff986aa47bdaf641c1a97d2b2e9658492fceeff778f7aa7c8ebf2fed0962205813c243108bc500cdf8665e8edab95139c4a983e1c3be70324d6922d19e68f6df3d51258189c6c05f124b58508e3dc5bef3404a784be83d0966c4f557d06b9cfc3530dd65454f67b89f1e2ac8ce615444c733285acf53dfd09ea52d1e615524f1a91c6b65b169b5321b13549d32ed53acb1e449358cf6f2e1047582b9b922e2cd2538a0fafb01541f461737418a20ae0cf7596dae24792a07decd4c2dbe3430c10c538513919ecbdd80b27e94dd70e7a463313e547f389972777e4da807085a98ae385dbf044dcd6d6e65441f3158e156e72c60d0d7536801ac727a4d88",
  "4.5": "d861361cfec5c24032753170:917adae88c9081851e12fa614c5d3093:afaac9d9716c44307d42e4641bf932835a282a2fabe58d1cf49c9d67174ce8a309809e7265a7d27747ed8196be13ad04dcd7e7fd0b2cec3d59633e865c783637a2a65760bd7bf9315a1f4a52fc63d94b94cda17879638dd8a7797ade6b54d0882c3625dbc50192ea28c306f5e9172d3876cfb72026a94b9daf4c68bdddf5ae61ebce6e3342169f1c6e897bcee81c3e779fa95e58bb63b689c51d5da2a953a4d14ec3789577e964bf261688643675ebfef4d99c287011240d6b68482ccf34686e19655594c6ef09b427d6b1b7413b8992101f073ab02042de57f206b5b6c2ab4cde9c2d5efcd5a127a5cdd953ae7319ef7d42f51886bb5ba9725d7c195443570325986a68bd14db342054caa3b2fe9c990fd32bfeecc84394046e6f77148ac82d58f1ca",
  "4.6": "4029c9a5c4dc5ce6d62f1f0e:1987e1810738a9f467672b63f24aee59:80066be0c8dc960e93d99a04917a9f09786b447511f0e6ad56134f56b5f4915143197345d80bfd8a86309dcba8edaadde6022d9040e0837f6dfb838e47313864c990e72f358f4896bdc3e6efe072ea1d288048b4f8e737294f4687aa1b544776",
  "4.7": "2fbdbaf03962b4e833821c31:a648f02af03d7ef5c83f1ca39d6b2016:2b0f5c7337f83c86010c0cca9bf7e6f1be71aa5c4f3c41faa4f071de140c17fb0a0b8e7855694d792fb9f411ff13a99e654ae6c456f21976f7d2ab0fc9f0be45d1a2b71d7fb4ac89ffc4589a3a8b41806e3a2885ab5b4c3634be64350c0957503ba73795",
  "4.8": "65a3a9236c3a3197a3fe7548:fb17b70fd38ca5ef1dd1ba750e70c0e3:67e3f30d60254497535f193be514eff3ee73b66fc46b5800a2d10891fbc4c846961cebe7be0317d2b174086c00c05bfd87c1e3c1c2053a420fce1e44dfea44bb8be1d9cfc7dedde6d888cb7fc38557d9e7b1d293111500c1cc3555b5c3fa605c629235863a5fb5fe8ddde1a33b2d727445d47629f4b8826685d95d5e1b10f7c795608aac9ca570c88c21c806a2175ff8a97ca88874362325f997fd1e807c43a3cf8ae6f767be1f1a7893ed3017bdee52f996e974d32cc6efda8d745727bff1190b3bd56a9723eec3262d7e420e2fa68fcb94e8738e7a4c72574c6173b9d7ee65750cc65599b95e0dc2920956a7feb0dc4197aa74c19554fe197a0d0edb0352bafc7452cd1374e8fde54178efd5291b9b684e8e393e171d6af9349a2710334403d31cacc3ebfd4a6956df0a331e19b46edc9e46a502c9982352d64913bad5ecef7615e8f7d050d510530e304ed0f09e9b948ac2cd1e39cfb9f6203f30cf5338339d1d55100a1cb6cc868b25d81a9fd42fe485c5d9bf312bb666f19485d87f6d7cf22d4bfc07e4524db5fe67507097142c8a010ddd6e25f236e8787ad6cfbc3a1da141622c536df721eed596124016560cef9e3d218ea7e175e48e894ce389bbdb43207974d5534a6176d8e6a16fe12bc2584b",
  "4.9": "d980b7d4dfae6977f948fbaa:825f7ed5f4dc51521da1f57d3b1d0923:8fede61e4c13defe43993a528a1c7539cecefa1a4d749f2a209bf57c30e2bc2006bb618008f5e034d77e16fdbe0eca5048e8ced32b20d95eb07657e402a9ddb3fd47558e565eb2944db26675f26a2dc6a25f25",
  "4.10": "ab7ff98f4133db8eeef8b388:d55acd029842c6bd9b7b21b9c975b159:9b2317d491c2ba7f7cd9d63e4dd0c95c7444d7cf05a1b0a10cadfe25fa53888b032b6a58cc575e192ae9dddf259cc57a1a239cb9a770f47df7ca8eec0ace96fec2f6b1d81596b2548cc0f223e0186cc42194fb2067f0535f12a72b71cb82ff434f43e4fd84e04096832dacdc89e19fd0abc8df10e7c4fd2c6032b75458d4fe7cad396bfb87e0461357652bf634ae04898cadc48a771bc39917d245d658cc7b0860cf63c25304e9671abd76e0f0d04f79d87d9515320b6d9dd9356927ee40a433afdcbb425c7720",
  "4.11": "5de4a62eb1a4a2f12cf76698:19d84769853f73242045802eaef37e85:79760e7502f23e610aa3ffb3150f03e744ff41bc8f2ea7a35c94bec6919c26f8a8c25f9675d9d26c041e2d8e4b74ed87ba722f4786f0cb14ba0875fb260b4dba87e950f77765243e495e84e063e90190f81607da6d8bfd5b9ef1a197d04ce605225a4661b782e06ff3cf337e75f9f9ae551270dc44be50c456effb4c9484501480cf872af041b01da603694980fcb16bf21ccff4e4c6f4b481f7d8b0646d6370e60f4370e890e93e7e15f588532174034f255f74f91f546e85ccbc458c8b031d8f0790823a21ad904db3ccb9c3d0e7e54566d0bd56ac6947b993bc4b3f7d2f875dec29f66b37eb1050299779e6ba30be337a855131e16a068d35eb594f37a2518b68a733f21d4b561088ba1c62c6da4bd48fd32b4feff4510502393687779fc50ab377e346f56d20f18b27db896edb7fbb2e46a48055d4ff0410cc7805ce409c93c1bfd018749f4e8166bb7bb59b683fe57e02b7d93532bf3c04e20da0742422b4c133823f758c29ef84a71d308b108c0df621ec4c51642a43c5c6e8b9498d33a57ed7677325f4dd3a92c5f3a5931991d248da785656bc28e52ebd6aad7433ad6ac353fd47a3f575acd0c86e56feb1e3cc266ee750474fab790e373ab47f4b34162f2018fd31c44e3533491b42e74c7dee41cb29f41f6abeb66361271081fe41ffd098d4518ef9f7553ab75accd591045ec322d1ac2f5470507e0ea6299207a81ef208290e9755ad30dad6e2e5937b31981c6731582585f780a632611c18eb4e79",
  "4.12": "a9d3b1e6b0c465ece19cc16b:04ef465d88773ef6f992623b4394e76d:a613021fce322fe57d207632b0ff1af788190dd030f8c0e9c6216e46b944201f24a674efa98a563d9b5fe285f806f7f20c5397edb774b7c268ee5efafe6fe315492b09ff31a23b75b6a0ce8e4b1d38458237c6aa94efc6ecbc45194f77daedde4298f6018938803f36151123e4302cc6ae6a17d7b9a79fc7d71bb4c3a5a8b8060fc3dcc2285468336f147734efdb7652f2370c90f7764b7e8366bac3564d37a34a9d9cefc2e3007be63637796fa7181562973c8f9ca144fbdcc07ad7b3a4ba6785f12795ac45e26d4def2cf13680495aa0b46462cec0b5633004a37775f6744aa567c366fe02e6cd6435e792f0d38b9e85d48cbc8c21ab931c409347308e03b63dd2e7eba1",
  "4.13": "1dd38b7b545f1538a3e55e09:d66e5e123b2ffb095ae78a6b3d7b1bc2:c4259b3c3a0d9094d858dfb5b514ece2cfcabaf8c1dff6613ab2e766885f92c46e73b27f1b8514bc0112b1aa04b36650d1b08adeb606d9e3051102d2839db4ad139231b0aa33959a5775aa007c474a6655db2e9faedea2ad6ad1b09aa5e57f3fde71d69ae9de4ba1ecae24ae2f0ce609a971b5b2cde0fda4d72755e658898f6a560455c3e768f07104d923c415e91dfef0a61715e3003505",
  "4.14": "132a463db3280985102744cf:bce4c1e6b21a1deeccce5cbc676e5717:a0419d1398f3f263cfdfc8311fcf3ae213c0f33dec95caca3ca6743037460eb177ead74f0ff410c4c0c1452c2d9638aeb812491bc49b214eb3556fd237f591014b4ef5952d98809b42716ed1726d99f7936554c7f387ee30d0a40012ac511917a523970be2dbdf4a3b1798f6663cc396c7e9f9f11f669dcdbbcdacd8a98fdb4990484c5eb944963c702606ce069571b0195abeed5dd0207febc36352046f5155c9f7433934211f27a7f68e91ea5ec02f95295ba25f6190e9023afb2ccc2867ac28c495aa1fdd02a1a79513925c99b33ea05160174e2d9cfa5265ce0631dd8297302a48216c115b44887bbbebeb1f629280806603bd98eeb4b58890201c98c4d95be1bf08e87e3fba0929e60a1e1615801f90be708409bae038400cf3964365744d60",
  "4.15": "77c14e8594e2a6881f2c54d5:71c987eb67edc90ba85a9a3554384116:28cbf38940be76764dbea7343ce3c6db93468a756f520b4ef6a5a3ac13a35a26a6d36cfcf47a6e855428f67de39d5abf65a50cf30ea6e4032ff97e73baac7df8899344e8bde6514e42f471d5f326ae99bc61c9553a7993eb2036ce59ad4d6c895ab942acfa91a776354cef50c1cba698cafb2305933ac37f04f7e21db2e139af57fa698c9a4ee4966d71c5fa3beacf2b7a14b16672c15b8866b7b4e2022207453e5e582ca883c3b707820e879c2301bdb6005020dc0afe2a71d6b8e24b25a6d923e1fea3071ddcf2e39832628ad545304cf9d4aca4e3f33adfd8d0f7bdeb36e5194cb61f9b80d35bdac0c7823c152d1a5307685bf1e677b504eaf5ca76b2e6ded6384c06f7ec07fda1775c2c7776077d596595757c886a8bb54a4545852851ea8537454a81ee615390460669245070e7837604c28a9653bd8b1fb4faf8d0be43fbe6eb9c0a38a7ab2668a70a6156bcf664e19ac1631332d726ca1a1475b7bdc181ef652fa5483f77a92c325c633eeb287cc2f2445635105cb9f6a0485446db88ac514d2a85e8955b0c7dd961a0e7477e78b221b7fd65c5dec85f075b894055763fe65be7f4bec38412e5e8029ace65d3b565f9944631dbe78d6888bcae990a9837e6793cd7720b122381b72c995f5d72416ad679d9dda6a243f872b09b9048e3f609f7a8e00ac9aaf9c4d02e12fc7d85900d9d0d7369f08330f3a8e8ad504c7533f4715a40e2305f990d22d98a45b6aa5eb15a9a5d52218a83b12829f5aba627f533e6eb7211f881aa3dcd38a8db1a077b274d98798d2f26471e367b54427834649420e76fd36787a1a3cfb844353def980357138aaac9971cfe8a990e53369b9c2d4565900fca46be949021b0c255abd24d939454200f2ca66a410dd919ea34ad392c9fd6a3b4d8ed3a004e18ee73eeac1b8ff3ba10a169b5eafb8659c16607cf90b6f8edfffb798fb9a52cf351daa6",
  "4.16": "bb392f06df7af1f93c99502f:7edf4d0f1f3c87afe3052431808641b4:695f262929ef3c66d3d1ec60558345daf9ca8b5c3eb7f47ddcefd27ccd1fcf975203e5a53ab7530cb52a75f6a7081bed8e44c976ef8e100ad2648f3ff6ca71799c247b5fd7d4eab0e5ea7c0de6e315c419bd1ba5667f7c37b9a7cae304e750e416bb43cbd37889da82",
  "4.17": "bc1ebe8330ab687b9c2ae87c:90f781a496bffc1b8a2d8f4b04ae081a:68c78d71de848dd98ccdaed58c6723fff5349b90b16c472ec36eae902c80369958b08a74f42f2df47203ae64b45d5a4bc07a4be30407780b8cfaebc28c26d78d2b3c4b5f731260192f264bd38df6a6b93f2ee4fd7febfe0ff7b0f54a2b0565494be85d510ccd6f26c140b7f16b7fc8496af82a3c0f83e1ecef7ea5555bec889df38563ee1df154fda7ef180947d7cefcc375c497b8b651239168bd6a9448787e7cbb28cf0194d2cd29b4bfb756829964",
  "4.18": "5d118bfb75fedaa85205309b:4747f479eaafc6e0fec5b36048b60146:8f269c1c6ca305f4126430fcf847a253815d9d27a5cee1a5ad19aa99ec9677ccdb9cc47af74428d2293fd37926845d298a95ee60507fa36fccf610f6f99160c8329ce67ef9fcafb5af90c7d890cc6403be3f4a315b5672e5e3d8b8d754a3dd5e558a2f24c189a3b9569611ffdb9662d425cb534a4a3ed05963077c901711cd1b21a7d94600510b30217badac0a6e97feb90415d207e5f6ad28a3b99c3f0da6d1c8c46b2df157bed4029518a41e784763927427e75748d4bc81aebd76daa9fcea56d50f56fefd8ddc73bba8a98c6787b41a1a755cab1c7da4481b16b601d8d869353fc90d20115f7da6edb2fa5f42c2fa6f828f803b4c3e9d6403f0b7ac89d4dbfd6527c8705a44e5d12b391b6dc405caca35dc6f3395f766afd07961c55f6afedf2da5ddaffc7e8f09c8a1e58018148b1d17a42488e5ca14f3ad9276b56dfac7058c17302a61671428ba702e2780ad82a790b133bc8b9494abc332",
  "4.19": "a5bcba26a3774e27c06e2058:0833aadbe0f2eb8289df120a7c6bd078:256adb6565db5483dcd39cab069d3f09596fdb32c120a228dcc25d4a3184abbc75eb55894c952842cb3652392809769d0a42d583d86469eb2475af1700344d674ad8f5f1d9131e8992638adcb4",
  "4.20": "f54151df42e1a543151c0c8b:35179decda77b727a8bd846563ed6d17:be26ee51412d48f045efedd73e52e7a84cdde3ee759b66fef572c9df12d6bf0ec2caf9c374e54dab73adda01e9fff6b4d42d405fca830bdb0454b58954beb6317a0183cd5e3088e0382cfb90c688d77541145c5c77f5e1d55644ad43ea8f3578601f5041968aa4992698870147910c7923dd8ecc31e8210b271aa8380a506e4be601533d427b0d0dfcd6946ab0430ef046ceebfed23789751928f79a607c53eb76a1fddf9a444c8360a3dbfc78d5f146173d4cae1dbd3e233b85a1a7",
  "4.21": "6b285e067d25050dde30a5f1:16c0f559506c1d1b63ae1205ce9fb15a:6f2f41140644326f88294e2048299439519314950b0692af39b6cb2802550c25da50113f4a4c98cf9080c50db27adad7523897fc76e2e3f857cb04a4ffcb1be3ae2799884066d387d5c13808391552ebc12d584ba6e1beaeedf360e3eff512c56753e9189b8f284fb09ce5e09b90c6680058d472fdfa081c18cb416aaa92e21bb22118d1bc08b2d879e185fd938ec05020c3ba30f43a256d3f2443ea5e7c699a3feedaf1f7d912dcb47516e128fa20141761b81dd94aa1e97f8c65b4ceeba6dfea3f536149d2f5dbd0342bb4c940d492362c95ae76d8d46beb02851ae1a9ef14fcd5a9240fcd4421a6a96cc33e4825c78c0a7699385bbcb44fdb331828cf0e55175330e209a175b8fd9eee10f8700fc76c55f41bd29b7d6701c80546cacc038cfa2a8a08064ae098b6eac5b483614484a1d29c0d7a1bb0ad33176a37143e1781384cc032b176b274d9fe",
  "4.22": "d9f7426880d1ff1bfc195d35:a4e08832fedf66ff271bafd9b4b67b9e:70074eb964e17c0045862218a4caa3b1c7d7f224d6120b548b2d3e1bb75ae582916fd962569fd24373cdc16d44f4b38496f7156ecfd9fae29518b4b01ed9879eaddd6cd33d43cfa56e52c06b44e555e576fd2b9cdb49ab99207e2136d067980d2903bbc23d2a9663a84f0c208c5195bb248dca0f40af3c10b4115081dded509798a38499aef73de7652d6d2f96154f982a34eff734b52adf0bdd5433a9c458cf3c0bb267a6faadce0c9d729dd13800d8bcf2013501467f5d107f6cae5a",
  "4.23": "58f700aee25b50b55e45da18:6376baed1b9d5b19e3fd1292f0dfc684:30cec61188e51c650095450b0ea4ea10db167cbcbc7245912f526c13b975fe54251182ffa88ec6ce926a7d3e4bad842f29e89762c339a3912495b875249737183576f80159290f494c1335c983248fbfdeaa32f7fe8537ba559271b6115cafe598f1b911531a0695a51a13227626d022847795a22824a844dc33cbc897d5f521138ec45f599d3520bb6a6c9cc34c2d3f4988300284881405a918b3e268ca3349b54a04bf9d1186f209cc0804d7fbd1cc0c4e0626a96803f299ce33cc6d1bc750d57c852e0cd86d87feed23186a688d7b8ceb9fd6f6cc7d2a1ffe614e27a902464606d3743c2ecc09aae0015dccf23a3f3a879b2509bd7e",
  "4.24": "8b63b751bf4b891dbf93dc9f:8931aff38eac911d74b0295b6a28ce9c:9dd4521a28f45108b80a803683033da7114dbe02aabc06c4132016476599ecf3709627403eca6067268eb139d5e73dfa0cdf92606f0b44c2a9d5dde50082d1cba49639493410a3a1bac42284d76ce5033243415534efdd364dc6cd99cfa47293d796b63eb6b02a05b07fd0591dfc2c11567b1b9fc47e85eaf406279a35ac93124712703865e685e6484e58c030e0507f51bed9db0e1b17d02cc4c66e0957eb10d8ed30860a5700421062c2c67b752a088507f8aa64122a3a0c37d6434d1f1f3aa2ccd201670488be17cf0d12323ab48d544b8cb26e21ef3f093ab47232abc8cd234c703035d30f785ac68072fddb1abb965c76968eadac3305a7aecc9c64ff34946b1e4eeb99e5e556df8cf0283c81e6a3ffa5b1a4866afbb278306048e6ccd0db88ccf7cb4901a3fba25d32ff385bca41f4ae49",
  "4.25": "6675f1f800aac06ba1328c22:87c1226b2946186cd3b8dc79856892cf:b69ca0b789f3434221841a401a2480178d702fe9c3c9677510ec96ecf7cac0e2b9a584ee6de45c33bba63312e3ae1561971dbf70231e6b7c64fa60ef08ccf0edb90b7e3dfe19268f462324316826a75f9b68f7f008455cfdc248ab51cb2faf43ec31912e911349f3a4e8e98f123b4dec4aef064e899466bc187a118df2fe5b1d821acfe7b252a87bc15942d57a5e8439c1d243a698fd2377f60c2f98bba065023e988f2b4ea4c05801821f36d8a1f1bb6dbac4ffc0509e225d74e8307b69",
  "4.26": "70c587ef7c3122a1f8692317:6b8211709dedba0e4eff8238ce0cd6d4:57d353191444b98bcb1f4563483ae212ffd744e1892a291f9a7a2910170a007c92acc92b5c1569d814f8f7f30774f8c1f3f00dc804d27f9cd7d10d72ccd6efc1b89343cb5eb2c429bdd46175fecc62ecd2b63722f2acf2bacbe3740c4aaa5ee3f44f2a689e9b0e26ad668946a3699bbe81a5e1bf31df30f0a75cf2d2a44108d0b5e5486fd3b624939111eec9a116f2d0a8deb130351391234c0c485a5d9f9e76cb502c0b5e570309447529d1f685362beadf83d2a95dca9b33f15e37b822c9aa667dd28543fb64cb7a1b0353c0f60b68224c5653fe753cf7a311ac6cf3fbf3935b9cf47736396e9212cc545b11647573a568fa3c23d3f489f1758c0432910d62081b866f04d71256e1a04b0febf7cb354624c72b34352e2cb4cbd8e0585311f6db1baa55de555871ed7d5ae250fe484181135e1575de0f01465f0433d741d460cb91b47b0035be33c17fe068650501b86229c5541f6c08994c43de89eeadaa32b9a07cacb8ad45edd2f814c18f77c9d9bed2839e3d02ac0c0321c5e99ac0b177ec95409d0689b7a21a3fefda3a1c281be429f40136b3e0c93abdd317f67e2617b68a04d3af6c546479bc7511fa353ebc3db8eb14e56f8801bdd5f8e6b702358e1492838ed38954fe62ab16ec0875642e104c3d2cd9723b66bf5bcbe1430ba3e955447f5c2ba8ad69701e2df3ccdb85c06800cee74f7928cce20a78a37c41168edbb514a986e14a2e7d3da43b47ee1ad433a4a1bf578f260ce27291887c3b8e19e5419eccf5f4dfe1f74a97821b9bbced2a843a6c5d03b044580bce1330545b2004ca2b35bb3494e9642dc91a0ffa9bd5fb3599f3c63193efb6cbfe1b78c5ccfe986de16119c4e4e8fc37f53bff839772e6726d382d529a6f0ce8d6e44355a0",
  "4.27": "77917a3f6afbf0ddb0ab21b9:aaad2449dc1c014f2ecf64c860d01b4a:e736638289c064b624e0322c62fcafb2bcc43473498dbc98614d53d37b451725aa3954e71d205e31699613ff1b4f8ded711ffff30e25330fafca42a862831fe50291dc39ac791322a61e9d0786eee364ecf20bd9e24e51dc8f2778da0cabb728cbade2ddd3c139e371ea6bd2b61ef01f8ff9e85e5c74567042a1053a7407983c73a6a4f764760bae5857f130c3d5afba9e5a3d96f60008",
  "4.28": "5e98447f67b6b76663d822e8:59d55d51a2f22aa7a6715e088cdcd0fa:073490d1164ae796d1b9787adf4d86a4ef94042f2d0dcd2cb160a942c8d8f57c5c0ca58e0c869216aad60b76a869f53ba4dbfa4f402dc6da36f030493a532a1921315820eba1b5331f03030cc3a01761797f50117374db78db0666e81c0a1ae17d13428f07e7d838f782e71eacfa8a4067a1ee632c18b98da2ea1f57eea54475447afdb70a7235886090d756fe94f766140ef3c89fff7ff68f0e2739e095e1c321b296122bed05eced92d0614d55f2de4c2620a7129738c7eb1180236672ef9b264c4b28975ae3e133834772d19bc56768a78294d032e6b8c635cdc1b8938cbcb103c07754c0f8724b230a95956861037097834c2994d93012a1770a85cadbdc57f444dc22cbdf7cd00b4515f610a4466bf3475de9591fa2c1271a815aab5c1ac996e3b24a8c108e44209e34242c643012c554f34c4e3f4ac49f460df32e4618010f6349321e796c4944a391798bf6c26007e61cebb0db4b4e18c84fb695c6a299553a9bf21254f7b4ec11de7965da2ec2fca9953b43eec9a2245217286a9f7c1f2d0916356eddab1ecb7f3565dc18cde3927d74f2e054ae81ea439ea5778af6f43dd7ba784bfa6b53fbcf4ebba45fbfd6e755a9206c291e3179376be85d8b2cec23511c0d631e74422d1afc6d0d639c455e6d6b5b5b34e7805ac7cf4d09f6054ec97df62830394596d6122b23a2d26d34cabe2055b0c0b876b66c83789d2749731349da2cd0f0a90ce2d73b324c47cada5941b4bcd500b5061c2c6a8ae8c1f3815469663d7cb1326b752cd8c9fcb1d35e30b4711e1bd4be4d786f172942d14c0c46bd791ba8deb1cf7a2e732a0aec8b21701009c233c5627269dcaaa12a6655f2971cf49aed613ca3cd358a45ffbefc1365bc347749444a7e3a7365eed7cff64ef9ae42a9c0d87b36458903ae6c4767b83ef238bbc7630f1856d2867a431aef33571043ea37a66f332b4f357e3312ea147ea0b6a948a2b8d773da975304ebfacc2af47363a86c3bd940dd67665bc07fb3eed17e18f32d4bf75c1da6f3459109ca79bf29f34466603e970474e9e20151a32c9fe2b222224b454b033e1cc738897f63ebca9ce9b7d456a4b51ec90a79e878703e",
  "4.29": "71741673821ed498d975f4b8:a992028dc1414fd9ad5781c2366f03de:ac2e4c8eca506527ba89e3999ec48cd179e0ba0c7b69f32b131a48be30a1c00bc1045416958c9794d09af378057bce009cd3b00ff0b10aa755f7526001e9a8dcbb9f0ea0adcfa740bb0984fa86c261429de7aa9d84fc4ebdffc368137809cbf7685100c6736e014a30b4c46d3895859edcc883b51d355ab72aa9d8c310ecf128604cc03c816ef2e57759ea16b20299fa9dfcde832952209bf84591f5aa5c08609f872a940c397034700f57b2803fe02c0f8ba63d3e924472c1df5f11",
  "4.30": "645e56414a1395000659771e:0b6f8b59ba88b12cafe4aaa7752b41f4:802e52da2aeb734f9e59f5b4992573f32abdbb3ec02358e9098413499c7e2c170416f08cfc371cd7af6629a16328bf66eb5f52d86015bd5c9644a27a560c0984a759f020d4995cf865e209caf0221acf8b8d7e046e662c917f99fbc6605db4349b1b203f5e2266917f6ebe21ab2a7b7e03264768242e9ce377d8674a4814ae3543ef68c0e2e14cc48bf179190618c9204cef5324770f8e2b0119fa5e337392c8ecfb28d455b161999690bbf8141bfd8d63cc849c769cd08921b5c34ae5addffd6f4696ef1dba7b64fcb7586bccf17079e32c3bf7d5e8576186c95cedfd3130a47d98858d2d48324ed823f1d1abaa0ba74e0cd209e315e9426dc8d9b06020242f6d67e111d21b558484c0f5dee4468e378336254aef52d7e8f2218daad12f384dd0278838eec286a80f5ffe5919119b27551f586709d86e69cd733aa6304c368a4bc07e4fdd3d6d982c69",
  "4.31": "ef9c1abdc3334dfa0d94ad0a:485455da575dae0966e51d7e9c86d1bb:31192c664f8486a1ffc0d199905c0cb679248656df32ae6efe5fd6588b92524572193cacf48b6b5f1a8106e25ff430169c6a1dca0c9f86b7e3fb11fb445642cf8f670ca0110b94f2a0cf06bdbce16459aaf7518e988e93a5fbc5b23a6bb2be14f003aa315eb10dc653b5c26970d1e39f13e4d3f49c8d9e280879ab0bd91785ef6fdc27e572a78efdec65d7674c537f8482b35f513bd1c5168b1a3f9c86a9f3222c83ee575e30dbd0bf602ab29b089d3a72f1d120dd829bea0c35b67ff08f7bab63c52ea69e5830e705d4b0ec182a7049f8074de73c2fc572d13cd296740394a4687e50e52de488ef2bc39f6c15acd243c87a8d80fcb8d1b12920329867ee02bdd7a83daac0482798e575a751cef457163157f9546185a905c9945ac38840899e04d1cf80787b8c8656fde5f5c06a82fcae5792c29611b9693ef86af0fe3e05f035dbd9a5dc82068ed60eb286093e1a4ffea6f0cc10c5c22cde0657d119dff8c48c4398360076bd531c55ba726e66935c9974c1acba62719266dc8e2ca14da6ce341b0fe209e07a59bc018b0b4e67117b50de18d5674f40878484cc405a4efe9b606adda7521f7e7291e28e42af7ccd0e0012f73606501acc12cc79ff0ae9a5c4eb3eb9a3e57063e8d1",
  "4.32": "2cfb7008d4bfeb4be7dce14d:3316d36fec33fbfaa580ed05d0cf0eb3:14fb1f429a8514cf651460d9b7838c40cb04a0c48962ab79a2b3215c8c401fc4a08cf808efd9ff02d2d6205974383aecc7058f9d4d827519315313936994b250dcaff41cd37ea5f3dceac3fc0d609dd2dba31002014876f5165d0cb179435223128d203939b2fa69c5cf04d9ae38db677426fd9cd2602437a571bf79faf63f853f99bde9cd4252124c21ee4e1fdde4a969e1736f",
  "4.33": "94505be2532028f3c12fa815:e2d775e169eef4c92ef967372908cf33:501ceba11e545954302d4b729a69882f3923b7147f36e4759526a2e0d5a33aedd762ac8388c505834d8e5981499a05340fd1a82420529a4378d1c6eae360b9485d882d948b9f933e3475c7eb734a4e84cd9bb0abb572a063baee55b80815e2393156227aa7fb688cf2a7fbb451b6afdd2c8839c6cddf0fcff0e9d06a4526aea3a8444b294c7686bac3073e3f2f2f47eadf4eabba28cf6aec63c2509b6c40d3dcad7dec973caa7717311519fb3b9ef0d182af7df6d546541185780803d2962a3ed352c7aaa4b9",
  "4.34": "a37d69905a849afcb760d996:792357ea210e50f9efe7f3f6b812e515:bd914372b91db37c4d174f6a7ddc6bbc992123c27da0a0f42e5d31828ea507d21ccbcdb4d11f731ffee5cf5f61d6f2936741681afe4170fe2314ade58b30bbb1134aded6520c74abc188c2b10ee2ef",
  "4.35": "64fea72d99f0bcc98eac0038:5c28c1e328c7ce094859fb8d840cc0c1:8fb2b2e6f50911497c67dce8ce27c2ff56551ff5ef231dd63071db93c944d99b78452292f4c4e936399bca6aa4fda7ec277f99d410a2d6e7b79f286595e2b5397937d72f29bc2893589fc7fb4c9f33f20e365aa559b1b9e803029a5d154930635b787efedc3c70e0d0d5913ccd5904a8c4f3d395f069cb1df1a6bd6874ffa92b0f5747b3c9fa7cf533895acff3d2cf85fb0ca9e4f0a9f15e7fd46671d0c629d9863bf94e7714ec5d0d29542e6c21daa48aad4c2dc9b39f0b78ecd46fbc7451b9266d74f875f1c20e901417cbe712a8cb6c116a7885f430d40c97cc6ba86f4db936f96f459a883005ca4daf348c61aa744adcf4f435d5c5db9aea32972ebe79d3a05705fa007edbfe",
  "4.36": "cdc08f40461a37bfdefaba26:ccc71708367d61582276e3dbbb92b96e:36d6cc37798c4087c694ddfb7cc9190ec84d0dfae5529cee2f8cae8c8cc910795fce350d670f1ca4e859a52738911c048d8f3aa2663d76f018f677b151cf6a6b4946e88f55fb95856859dedd05a9f5aea6119ba177b53a66d3f79c762bd57a60d03f9c08adedc1ecacc48c0337d1534d41ce0130c32c647925ef29c3dac8a9952919864ae7e5bcd585507d7da54b74827c2c58957655e2b9674d132ec61b4c3020676428e25f85fc53de7c387e95ee0d50dd435fb77489b51e78f3ff72ecd127e6676234113617acbf486b3322bc76fbb3c767f3973b061b4d7858171b11bad55dbe12eae2cc532bae8bbce8c75a49",
  "4.37": "c87da63a3807873627e9bc6c:a41b5e2de779c7ecbc6807c3914f6857:7e24b4a5aaa690fed32cf4e763ec898b048ee7447b21b25878ce5620f937162b0b794a1df9f4325317e139120ac4dbc47d7517fdd3537cd47fcce295ccaf6ec559e02e52908ad6180fd0d2e1f204cb3cc1aa91d3795124528cf82b5bec7a3c8a28ac43814322c31fe8c85d8a6b7cec4d3eec502908800ed6a39fc4a26d3115c291e13966deda76418b8ddd91d09e097a91429c35539f979db1e0849fbdfb3b2fa99e2af0e04df42534f0a7f73e8e4d32e5461e7a1635c237a25ac877cec2694c60f1e729ab2f9194754c91ec79e408f80875ae685791d39d9cde726e3fe06cb3eded5bb90c416abbecbd8e2fd8bc7f71628cda8a9ee45846ffeafd4d4ccb1386d2f011f60a2ad62b2e88afd3b0a5cef361e062dc9b4f3a4453acc8b2e5c4b314e64cf07704356ad832869bd45e698185196e5cf8e2d12023205e0b04f5cafb1cfa8a09d59d2cb3b3db6d25a9f2b0dee82e66189601cc3d7e4ccfaa63e71d8f100f3cd1207daea6b94984436dd6e53c",
  "4.38": "d2a7abb8c65e2671d4ce4cb1:190b45f76fcd4fb37de6f92406ca2272:4ff9435cba57e56e53220dc034607e05831f8b9920d4399986760fc1fac7ff9821d355fc9eb94b086a2a6b1e5142cc57eabaa429f23b63b13f192b73d0c6d3d72062b1c4e0a62839540b6eddada568cc2ca85d1973066e57bf2b0fa3ce9b106e3e6b64cc2edb9d781a1546ff5df798c1b7fac4da3876c76c75fbb4111266f07b8accd9571fb96ea69039838686315a86862edadb0bf184ac716a4ec3158430d450d0a260894d586aa8e61f1d06eaca0859baec526929b8fae503bbcba13270932b88a572a5fe1917affb8c946ea0aff7c8759885b8a03efe72cb3ea61aeaa07ad35dbb918efa06cc0cb400fe9f45edf56152da5f2359fb508d7854bac362c4afc2e3f947994ed69e3e00957765ca9e89eb1513c41ede0108bb33c694b839406622e0c4a0d83d26e3bd71b159c6a2fa7ca7ff53bb80909c07dd0d3b370efd493d9d84a3ec772d",
  "4.39": "310db559e5f2e51ad234218e:031cc9abbc914cb6f800ee37bd081da2:4489653862f3999204a2c3ac88251ca5aa34c2173f9e373cef557ffd84381950844dd54800f2ea94105086b20ec9d49ea268a75ad1e9813bc271470da9430ca68d86b914b9fd1cb601dcca25a253c47c8b9e9cd7a06a95470ab0f5dfa9efcd4e007f82debb2f7c95788b21d6e4b6bc8da65856a799a78bb74613fe8a4bd0322660cd8c48d2c742a08991bbff299bd8d7780d95bb84519e81aa7a880bdcee9399fb428f2d8744e917e17f40f9f7958c8dcef3db1147e1cab1cb2a81e932ee13721c51b38719853ad87e1b0d95fff6df40f8bf78518c48f3379bbce075385b017b7508fab4d7f12259e1da5b6501b55e7baec0",
  "4.40": "f5da54e25c8ee3d42440abf3:ed8e65c95d0942d1ff40ff07b424fc85:bfc1ae22fa9e9638f051b5d1e5dfc3c550aa7cc6ee864cd173cdf80cbcf76ec180730f1e3690be17f784f8777a463ef58b18d64a0c3c637ab93f10683eb2e2eba514e6cc2588665da7a4b179559ed9e25e050d5ebb874ab7237692747bac6332659207e4ce21526cd20fc1f057d508385ec039996abc8007a3048a37956a2dbb5b0a12516c1f60b48ed1217fd5ddde02e2cb2fdb4ed146929c8e20567c766315b8e2621894fbe156988e6203388323b09c8c297d644ef8d94ed29bd242f030905044d2ff1e0eb52a20758e785fff25cd365885a518536918ba7827cd73245786e1ebbed493d186ce76c8de2e0b89b5993a5693e1a2de870d89492a00ff75adb2481c0c673f840f5901bb09f15bbb79e80ca18e64b1a3d30a5d2a4401fd86a25ccddecbcb774ea0c627826e59d1d90690712ea71a94350ae78e87fac1673a4d72bad4e63340e3a95c57eb244ef3b6274f4c826c",
  "5.1": "5c364fc7675e3449474bb554:dbae70ed31a954a723ad0566c7c47670:0fc228da4a9f00cb1f796c610f95ca6e0a5150a829a00ff001216c8ffb4ec0a5c2cd329e0184c2c82562fad45f3c783bc1c51de42cdb856a970f7bf22c7429825bc8c329556c5a309234ef60bf226448fc17e72a44081bf7dfe81fe6dc3a14c322730b4d45bb6a29521e8211b3202f04e24bfcb891382e20175bb8a7fd7d30566abe0bf71805ac0ae57b5d5e3cb514840816e2b6b6bde1020fb510aca8fe4402dc9c3f598353081d83e9d1d4616c5b65b3406cd5b45b6c5e0b61ba697a98f8216db7feb0626678d85ec1cebc3e0399b826c08dc86e8a0e9deab2080143dbf97449abd61b65ef370691384d8e3cf36115",
  "5.2": "85fc395257c503c3a34d086a:6c599ad35bd2f605c1e13a7e8e564d8b:babe40a56f2c3b457895aab4ffc2e8e59342b407aeb35279aa9f01e57598f7ff6741a872513acc67fbff206d41afba73b1c9ff4593f2b0b6c524b13e1abe440ddaa2526cf15beba90dceac0869500ed2feacb8ef448ab40d68b4378b9b5b576abab60c1afa9cd64756401da6ac0b80b8d0b5dbc3a941ca71619c943ec1d62127878ee748d6ade1b9207be4b47cb1759355087aa303e19871cbc36da3c07b8a8f91cb878fdd78981bba090a7721a01757879a91aafb8ce22e6011586cde959c0b407de0be7c7e097e4a6365e4ad2587ef95cac63e9810c01e783806847e9859be50f0d00d393473c2f76bff05aa63e0084c4b6e03234bf28e7c6d0ebc0a8bc14e1bd2ecc4ae454724f650af3bac9b73f6dc115bb063f0efbe8911133a1bb0edc632eb6f479382dd234da91a47c291ebc160005bd456d485ad",
  "5.3": "4cfc957c3e5fa48701b90e16:f01eb9365eca1a15049a2d0f1947189a:7b226dfc0d435d428cce4a9c944401a2aa12fee52315a11700e3e1e345cae1b5226fb57174ea1e965c72f00ef3446fb2fd58dcf80de7614fac08fcb45f40cc02699487e35b2c3ad18f3ddcda18186496a426d98d43c5d8d6125bb71a72d3f4afe9a1922961616bee037cd849e527183f06a911a64ccc66a86dc31d2aa8808df519731d3155612c",
  "5.4": "c9fce0b8684292f98c9ebb44:b25460029fef609a0976afa25a8e6e78:696d2746312afc95ba0c3e4f8eaaf4daae1872b38e9f275c56cd446ed68bfb5fea711500d7745cce52771abf06177fdd3ea3f1fb451e3f0bb1a2dfae8a1ab7fee7a11ea541cf5413e2bfccf25abfa5de1d813a053fb82a6940f94f3b0eb94521d0ca5558596dee425701c334c23293428b9cdbe7e69dda178437a708b119baac160af09c7e7fb1571d1524f2aa0c532b97b806e2f1a3e5ce08a87c4e868b9d79ff86b7e84ec628a0cf9ac748c707c3c00b307b27ed46be4c02d36431bd87cca6835a273b27cf98dcd582fd6778b53ebe96e597c2b0aa1e5155f0a464537c33d39f4f5c4a89adacb9c90628fb112827c798254ec64a4cf91b62351f3e9b792bdacf3295e06dfcc09a7a42f344979a645123e2f9860a929b997d03333742d554a4c26e94ace70a91c09d4c88291275cd5fc634bab26728a609436aa2240bafbcf04dbe1a783374579d27bf3bdf3d4a5915bb006c98672de440e524f08661d4eb22b785aebf98c4369c9c6eae443a7579bc1526cbb8f538b0c98935d223fe808a8147dcd3d417f13b560d59ae86b07b5e5d0c1a36cb828019540a68d7bb9f788dfe1637d31fc96ca5fb761b95f01334970bbefbf67f6d4fc367fc85af47b9e4f3744612419faa44fc2722d206f3c6ae86a53622081736492aacaa8ed808398547a126c714ecab0fc7dbaa58d484800a414efa0bd3a6e6091cc0d4a574b9054e036e19ae4ee2b4324974a1d535097bfb13f0d97c406c063c289912b445f2fa1d568ac7bff6e07fc002099d365965e3ceed691945ffc6733ef034105307ce6d24cf779a8c7ea250bbf8f0dd4d8c0742eaa4cf7ab90724f43a57ae36f0e57d33d2c7ab8396828cdf935a455c2e74aa1184492fa642c873fcb7a0902b9e7fea52d1ea67738ea251185c116875a7916814a948e6",
  "5.5": "6d93a576609eb3e18ddaf255:0398f77bde3ff1cf294b6a97abd4c270:4729852fbe31f7567782d21b5b3dc1b3d85a1d3bab199b7ce609edb6725864db19d9c6041b8ec82e50827c21126de17d32cd84d5d92f1c54be00ea16dde30d952ae77ecdcc28cb3db295219504db07a0342140547f8df7ae32e49b13a16f5d5ac80422315807853db71ac4a6f5c1d197c7fbab97962e03fc3f564b4addf66fb6debfa939ed814e0974fc1534c4e5a441ff2d3a541c359367a15df4c8244e8021c7334d7061c27910a648135a92f72f84c49c0c123b225686b7e25d19c5e6bb5f8173c3d9c6807a24ccd3e0872b4acc64002a997338d2b8e56db85682394af460cbf3ac4dbfc470fdda4d83003b84cd0a49516262df4a2861636959cc3402c247d73b71037341ac314cfa81e272862efd7f21bf13a52d1a0347475f7b8ba9ad698ea4ef2d5bce402870d21c77800c9aa762d467a6eb6227befdea9d13ac859d69f9372bfdec7995f2237d2591790967ec5af10f17aa120460a5cb59a78e6bdf7fec1fa15a8491328697c4a5325b1ef2872abc45fec15057efb2ef35adf984ae17780348782f01f29d061dfd08b1b65efee192edda3fe3e0c0c0131218e63dcf4ca1f06cb62ff38fc5e3ef89081c29ea001c8fe6d226172793f4a934d298152fc7ce04bffbd393599af4141fb95b2150a5daf6768a5fa585c52cb8bfad31670c6a4ed90d6c5ee28d749b37967c1a7698d692c9947c4102fbb20b4b0877562f13b1cd17f26f165ecff3f5cb563adaca0deb8f074c566ac9c336c6af9d58816d49",
  "5.6": "684c7fd799962873265a2c08:5608f7aeb8d464ae22c7c203be80b825:2afc50f00e36fd493d3e82eae315162e80fc300fbd128ca138b38257538c85b091324495f5dec591811e3b6fbf86ef34b33477ef354c39e6a50d4ae1655d99e6ce8c429cbf90d91b91616054fea60a8730653ed9eef97696bea0d73b15407a67cf49a3d5d51c3fce2d3e2c8a70279eddfe8a2368e42fb43df0ce3d8fcdc676fbd86da00eefc48273dbcf9561e942aac2987b1df9af2ec33715264b091ccd4bea3c4551e46f13c42ac03aec4d0aabab674824ca4ffa385e85950ec1b5e19109364d0f59ad078b2834eddca74bd35d48fc8905683e88fb22c9f7f95d4ee454e0b3e553bd2efbe27ea4adcd701fc391bbb68d608b7307128875be987aef49a565922b9b7e8daba83309c321d92576daf6497cb3318559a60fd591033a40322df9ea91ea1fc370c5436316127ed2b92bb1f8287d23ce1692b44af225f2963405abafbb5dde3ae30cc2f435c7b6f452b963638ff8c6efc7156178353c07df8e2a5189875d1fc9a91904e77439b6a755faeee5efd2a5c8a259ae842942de37d1e2d81e080013168378ad7a36a0e1f989f9",
  "5.7": "1d95d3e4fc45ef6368deca8e:76b34bc4d574ebec089d7a533407e25a:82e370471bd20d9e10e831db7913ab491ab6ef964b46d125edd9c51fad7f61e427048fa2ade47d070796f6279991aedf9ac3bd89079cccf6ccb68dc73bfe36af8074b407b92b2547a57c652eef2a81b0abec5a6c23fd8d5705dab3de64d036117d2a597d84bc2554dc30cebc53a5787329321dc2fe5aec35eac8d42808938e0cbeba24368b79b4cf6941faee515fb51feab7260a54170955c2ba01349c7c3eb4e60ebf5f015b153c30afe3b8f15be0134ec143b5769b80c2bf68f38b977a3538025198c43fb6c6d035f7bbc8ecf5d410962c2c3eb930de7db1f4e1b10cb4618d494d8d8692e4c63364a36218ca59787a66c4d7e839c9aea4aa95a8cad355058debe792986767ba81155ade30a3f202e3471894cf9b95b234741d52d5195eafada0ea814b37809c6dd2",
  "5.8": "a7ad5f6843c970464711e2d3:37b73c51744edc3dbb87d407a2f28fdd:41a410258778603602c1d19ae32651b473c2784aa2f4b1b268505193966b65fd896dd7d72f37c3fe25e015068572577b0a1ac31fcd41cd9179a282d2a518c643dbdf7ed88862e4acb161117d232c3addf72b30cdc443255e87a258257b4b48a3918f3fc84fd55a7d6d1300ac18263fcd5d851b8fb268b646e770a56e09b6bbe4478d6d1d779e6752e18c9ccd612c09680695ce6976f4b78813cb9f02c811f3710c89c6650a7974ba686d47689b1c66ae21ce3d27028ef2c3df6fe8a32d72d4d9d206335ee174a3a0a55fe901d43024a5baf8f4eb2e0c3aeb09920320d255de1633a397c230fac15ee66438eb22b7b56b9f97cbebdd93b55ab2e4fd28b6b748c9d3099a9f53cd3bc907420a23829be4320e433cd7027205e5f7efd32d874db694a43c82ae452449936a421b4a3c4944c6efe3ceec874751837a141427aab0bac7d4049e8cde7f93fb83055a5ecceac7c968d6fedc95fb72fb0308363362aeb03b24b555320e55082e9032de8f7eb24a90d433b8216b4650e94841d9ad55d0f56d23a9e8c324ed7d8cd7a4491023485cef3645552bae5a4fc5cefdf205dd8e66a6fdd99d3be74131d60f16fe0a962b2b595c23b8893184d24d5bdc0379adf62cfb35486a783d227c68f37f0fc95928a10786898bb6cc8f04e81ba566670e27b7bb8d841e64d342a94f562fd5ad2a48874d7a7961c67d4bdc86d5fef639c3856ccf6d4401e9490076328caf07810f24581a2aa61bbee76393b2ccf83b7394542e288b43f3be842e7bf03b8ed3615016f40c7ba0ed5b584f499a122e74d7e704f92fb7c38062a22172b200f570f54f2ad4cbde0b4dc8ba12d39231a9fa965a52f34a70216d1e0dc238afd9a7ed7ffddd056e95f047e7922a9e8a18756762bac8c93620fbe3526d8c73a6",
  "5.9": "b2e702e793d37abd45b21294:380e6d3d725933ee0e38ee44802d5862:c5e639fb9271c74f4a405bd74c4fc89600893c8c17f10729be574af2755c0b01b2121f4a80a5002afe1ac26b3dd664255f9aadd76bc6969e546c06759445516afff02b4e4b0da921f17c37d9373417e7c464db5504a0e545b8d8723fd2508670fee49447c7cb8bb7d56e22f502f0c820374517138949bb61ddef65c9c1f82b4b63d7b330873b8476ade00a14fd015c8ff14b779a7a186a203ea762aa300c24db34dcda5bbc13e2240407713e1d7f768f61d5047062e86bf6f55f31f034d21b658d83f4406df60e2aa5ca474713eacc9a95deb11fd7039fd3d3baaf64d8d8cd5ee8c4fc0f252663b7590d1e72477bf1fa8ba5814216a1bea51be1665ba6f39e6b47fd52cd3ac5b4d5abe52cdc31d4de9b6603cbdcb960aa292efa23b60b8321273856027c23b0b2de2c044b504e1eb910c3696764bfa04f25073855326477320af740184a866c2355bf658df3321456b219cc05aadf71f88f0985523223c0fab242328013f391bfe9b44d783bf5a11dab5647c3227ed55de87f0f8b058fc2cdd4c0722229281b34fa41f9c28da249f22ecdc3185092372d87a0fdb1d9f156a11d22fc417dd1bc1a84f37ea62e8750a239a928eea294386ceeecf88430c4d890d15e1dfeca06d676be38930673af5cf8d1146f6c478cd83214921671b46c4d8b9472d427c457c074f036623d9887704b7b9bcc80d5d2ab6fd53a20bab04dc87b192aa9d301f0f73c9e75ed4677dd967fc23df82ab7a324e2bceef8a9df064e445dda3237d03693c7276b5b0a5ea89f6a958d52a94720ae1875c52bc541a9df9ab141c22e6af37b6ea8e9bba47d5dba50dfcedbd0d1e8630c499b14124f2320d8604c54f4c383ab0d4589c1f661f4c2e97274bfef585fb007ed62febfb523f078fa7db3449f0c63eb2cd903f4749d5308629a2b62d22587d8680f09763914c018f59c0266fa9163f08060756f1e7b475b399fd63f615238049dd6d8c4d44fc9e4e938a9f817312b29d06bba0a72e512c6a135ff470bbce8bcc0f21b9dda4244edf0e4a551823a8144f672436b67a7b978a2d038087eabdec625d03e5fb374d5a851ec6e9ef6591051ac7e4f058e7af200daca826894ae32faa639afaf8cb2c2101947f28aa2bb62106885870ab95a18e335bcf1a1",
  "5.10": "e99a15f2f833589e3211392d:86fccebcf3a70bd0a857f913dc4d4619:b49a75147c1edfc03cfc4c07cda63d4c04e79e2ec3a2314b90f504633b409a7e80b13f24910898be22529537e96d3e496cf98c358a567fffc077cf0456f9478282ba2ef026774cb7d5aaf98da64a6cc9eded53a98990c404bf1b3e3c40fab11df403ce68422f5ac57031a7a053b28f53d2a336beb8d995dba449bd5eb1732d570b9c37625017a724fe809fe8ee19889e45db0b0684499dc3c9f628aac8d977204784d4099d61f571520cdda4c3af8baee1ddd8d1604c662c7f56a80aec77340aa9a0deee9b14b525be5c9b2a7649569bfc8fe5415c53c6c4e4b08c6e70196f69d43b46df96179389a2d3592bc198bb436ac683c49a1a377321bc98afe9c8a1b50c6881908bb016c19e3666bc95e8183eca1ea6f94e9b6c3313691ace5df937e442390525e5309b25059c1e8e5e36a877db77b1267796ca42852fb36f9564f4a785b28162ad073e23ca3713482c1ca65c991341acff9e4f1843969dc175cc142755712718598aaf2b532588a14d7d7eb37541437a7a3529fe77e9eeed8892207a2eeeb8259ad986192a20668e5214dfb3be8f09798335b1a28a7fe18c50d7b722da4f092d2326b89315ffbba0ecb14248a94bad30a8991efd5bb27ff964bba4be29eb42935f5ffa347628cc73c55bb129612f7ec13daf1522f16455f5737a7298604e1ba4b6280aa6c2acb464c28470a9257184df0dec1c1d734282934fc75dfd25b0d308d8729cd73aee4f38adef7e18c69c728dfa0183db3549479c14c604efea0ec7d352e651fdda735fd82c53cd28bdfa812714058ea4acb1d42e6b732ce47ad795841aad950415198dde9cfe349eeb2ae1902ebda957e4cd7609b90b9f5af45e4dcecba4df88c440e381e567d54d8c5853c5684675fea6f2fb74744ed52654490fd5379350ee5b9aafb0665ca7a67a0e224c98f9b0e6b2a719ff97",
  "5.11": "65e65b30ae4e2f1e58aaf682:66dee0fdbbaaaaa3f68a659cfa5e0384:ebc9f3dfad789bd7c0a2ce8ce86f299d8a04d4ed0857bd89ae78e2be8dd14b9927b001e6834353cbcab7912447176ffda9be48d04ca044bb22bfb45804db7e45fa5490b3bcdbc51459c5e85a8ab660df530d213c21b3cfaf74c84fef1e9b1696b6123f1f7f439a6e33d2c208479d44ad5354b7ef289b8adea4a7b868cc46c1e5e4e5024042907f1d852093b84bf908699f7cfe6aba38403de5357d911a4c1ed7df07d41faa584918fdecc49c7be76e8b251af53399c0c5317959ea7cd5d3c357bd3387e91bb9d92fa2c8fde3eafc7e52c8e022273fff7faf5499687da0e6a06bbbe56e513b5257e6ac5722d1556f6a2a806d01f17f924080da0209b4d6a91fb4ca9df22fdc4aa32f502e4be361ed7031dafb774e9a2a562a785ee1e8d039ee305526be1e8d8146c9def4d255b1dbaa919297db4097eb07cbb46b8351ddf31d8d54f8b1591eb59679eb1be26747589c3eee54078fae95b05cff745482b3772b1cea33d621d946aa65683c47e61336f3c65149d53c6e4bd54dbb56bc5dc5d65340d6138febd49963303e1dd79d0de01851",
  "5.12": "da3571efdb040fb89c3f1aa4:3af4e7a28d2f34d5fa19e27e8ea9907c:d65163dae877f4b5e553519241f56ca812101030bb7452d09b0033f2d88b5321024488c6bdcd3e583a8908c77e8ab2eddf5081358c659a8f8574d6e4f2cd14317f1523e099a74969f8e53de1e40707a23b9af69e3af6d8e405c3d5f2499734bd822943e3c1d83cf06015cac16d8ba0151aedc6d0859051a10f54bbef2f2b4fddc84be4b78ac4ff90da62849f667eb5afddfccea70b5f54640fbdeb78f44c68b59e9a4da641e4e3d2b5ee3b11beb68c1dbe962212500f69dc5ad7ec9d2dd7a38b51dc1aed5546ba6f7eef781844db7589929730ffeda72aba83e68b8ce7bc5e39fe21cff5202dba4dcaee3e5d90dcccc1448011061f1d89f8bb476922d46b2e3550841291a0c989d188750e4ebae2ae38905af230311c67b0741a6ea0d7b7fd37128a0b70a2a1c274129f423ec2ecd6b922bdf8fcb6eec750bd22df11296f30a1dab27f1b01169396947a86cfc3d3ace5c2c6be373c25c8a5d1474aff0d0f03ecf593876c1d60118da63a90bfe631bf146798f13147582c7143e38d719679bbb496e2aea939148caecebcf209c13a671d3c31f47fa160344e938b41b91aeb757b9b71b14717c2f0f2cd9e7cf6080855e8325c907b667c5728a054954c8ef8ef5996fe10cae290d30b15e513d6256f533955e26e3b550fb1e1727eef096a20c2ab25dede200a28d90cb7d4d5fad36569238f7705e1ef5e761b42b631caf679a0bbe86700b74e47e9eaae9452dd5f8506d287c5d8bea39458cc01199f7fbd1fb8c718c4abec80b03eea92006fab62045ae6b179ea2008270d6831bf4d04085be7a529fd2d1e84a1918a08f573f6b3942302eff8fcd365fc",
  "5.13": "8f5352b93f07c2303a01cdb7:248d2d72a51a36e9927743675f75902d:ec181e77b5b5547276a15e9541d951cabd0af1f4ab658df7a0cc7a902b3200806687d9ebb85ac6159af7c5643cad0fbc2b2b846e8dbe89bab9093630b313eb5af6e3c96fbcc775f3df2b655c9ee22f40351f35a8341ee7956a1111106bf252ba0eea96e1f96b65eaa897d4a0989fe62e371cc9b074357b56d549a7bbac38c894e86218287cbaa76b9f2054c7cb069d33ac74eb1d19cf92e81f6c6611e8d4dabf52ed3e3300aed10b3c4cda06cc7006c1dedb28b31f0ab58b0e7a5f148c4826112a865d4d871d9485d16ffbee9cc9b154fb872895674a09e6f559caf0c757ae941ccd52aa1c0ecca855fa41e7644e3b39833ccd875b5fc027ceda17bbf508ad2c38e7f5838de00a75f576429e1d2cbcd848c1d8d31fcae17808b51f5a0c4619f30a18a371a98e64f37d3ec4588ec1238801b83ca223fe4f9244eab8c5dad2e172882d5d455412fa794850e7e9b5c8c879b15756f041ab16e68fdfa3b63b5410e330d66b6efc6896a817d192d4b713af8ea5402bdbccfab5f23b09925937d9c81ef4b24021c1fb63db23603088dd616fdd011b575c09dbe2c61ade5224c82f5c9738f4f9cc41dcc281318aefed806cd6d38122f83712696058ebcc852ac8e0807ee4e09a317ed3adaa4731c68f2ab726c1a3fa1be7788fd795f0793c93929bb977f86c92f018e473b6",
  "5.14": "71e0ebf63bb64a5228cce74e:c5ca5355d54bc50ce66a22d0ec8012a8:2f9d5b91442d82d58aa21d44dde02223166e6b0308656f3f555c431dcac5e2f33b71739b54fcd5e0b17cc97ee1d2b5f726a813762865663bc477c6d48abe3e256b803a6a7cd4871043543ade9167b0b0310b6bde34629d6965cf727c658c447f903c5a5933faefd4aa43c731655dc670a3eb8322d539b8f5a999a7b8d68b29a29d1e74607b3e8d07d53a5cf4daea60ce44387730d9ad0fe55e7ed9e8be6c4d66c3e8f030d6e7441fbf502f67e57eec908edc08c38c04ae920a9f67a777f833323bbfb08692b391dab82ba4a284c48caa76a6414566ac7a506d46685513e9ade2a3eb35436b1eb74dcd8b6ccf7f6156d511873a9903cd943f8600ddb691ccce3513f762567109a1b70e14dbfe4cb76a907366854554fd93b77730c0ebe0717762c20db3e86b2b83cdf4301adc96512c08ab310b9a02df0e332d6a0c40f110ba64c351bed43bd1dd7a970bb0365e74bfa8c290d87f894bc958ad3d21694c295debaa4240d4a91ce9fb276cbdfa80962df0457ba1790ebb19c1bc547d63834c7ab3129e9e14c6930860cfeaa158c0cc1843ebf0d80486eccb78c71e7f81e6f1e222f1c8bfc777fbfc1515053ef005ff6e75e5dcc5e57448e39a245000d3db310055780989cad794a8d7b65799c691e370c0edf1307a2756e10fcaa7d2c145db35e66a4d65aef37b7f71fb1edbd444813f21cf448358e794fb98f97a41d9782dce4f00957aecb22b6054fd80a3a6951f376b204791915053957aa58db4041b60670075222aa40451a9a3dce324d5840a2e628fee174c90e5f0012073b18ccaffdd4228b82e7b671a4789ddbac49000c0b17e257d02618b43f05665e172ca28b567f3fb81eb8b75ff988ef461f47b85345e89e5bc8d5e01c01cce645dc5bae9811efb6db5e9938577d538be09928cc1e6cfed6cd8e3c8188ba538222b5ea51f58394ec8d9ec47a6568dab9b0aae06367c79cce3596eb43e8e209e471d691782a55f7079a62d214920521d873ac26513cab0273f2a19568ea2eae7c06ec9245fd4dc199ef050635c68cf0ee603b02d55ca772d3e4b89b7a8b2fc4b61dc4b9ddb078c38d25a7b7b7e6c378154c3faccc105daaf4e91e4051a9f37c1c8f29f38ca2677cd088d2743ff5c2544c1b500e6ff22d13831e60fa06d25d0602a54e117616019cf558b0052bc04943b47db25daa6923fbd2c7a3e4d3d8309d53841a7b0711f048e018d7da0183b3a179ef739618b43e661084b72e9c602b550a904928e5feac8ca77bf92206b3705b85c6a00e542efa7052bb15b2af2b5d21f9a6b86d7cc801884c49a5fa476d196c6683623adf9bf322017365a1ffcdff6dff47ddac8d92476002ae1a75f8e",
  "5.15": "4fb50cb783a84f75f0ec82ed:3b957fe9e6cecd215bc5dfc936bf1784:e254ef22d264253005bc8e91c8be72a2209330393d733ffa95544c34ca40830a7bf022882def57c5329df3051e170a3800f8ca67c9037c8d45f875bb4a2910ae8d6ecf4eb7613f062d443fca7f9a252e215878c898482e9ce9bcd6e8ffe0c2bfa3668ffbf9843a45ec2ce2c3d0c40cdfee9eaa84936345bc75c6f2dc08df9734e4b8074b48eddb81e29756b247e1e7ee8f9e4fb9b1f41f2e40be1d57f95328228b1ca1c5bb472db294f1fe2dba580f2c6ddf0e313476982f21579a2d0feb6e79af494536aa96493d806860f8d28e21698ecb0efb81512fe77d18a302107f6b5cb12c886ef522278a5eed8ff417981a12707be1141a6c7a51d5c1af8bb842f55990c68197b971d9707469c730048baae6dc7a608e9f053b0afec0f713d24b34aa81ac29f81f170846183255ce75bf2fade4581b6b2082667654c304f2cbd1883482d583ebbf76a06c7fda17ca69e1625a2c4b74faac88624334cb7d4da200665509e966db4f423ffce34ebf9aee2b0ca29447e0ba67465fc165de30f38b94fffadfa81cfdc676e2b301e4a06b0fc64ae066952b9a0cfd6bbc3f0b73da141d16202af3dca4bc2a7862deb854d70b97ccfcbc9e9f5dead85b7381c241913d4e2b69bfdd097f0adf699c110814fec0153fb499356f6e7288826d436c51368b77c8319d77af3ed18ef14db8bdbccebe3f40439b43202756adf88e8e870667c1b624620dcafb40f61b7e03ab558f31173f0103f52a14ab5e330f8a6055b2d751b1a106a0c3a1100a169a1e2c34ddad92c5fa91c9c49942bcb54fe9dcc9872bad7153042b3b09ddb1084e44947e906a5d2647ca7fa7a5179fc3b287d3aa9bcc8eccdfbb5fefe0189df478e1afffa7d893d8849c1ba4a9bf65b9d43416a5b8aa58665356f708bd01436b62924190165bbc1fab74efb741d8db16e77e4fd1e318646308c4f7bfb3cd8222b395350d9ef57ca3009b922d61e7cf3ecfb3ad2e3e80b76e94eeb7ad1fe18825",
  "5.16": "1777e993e69e0625b995162d:f5e3a53a5b46028f7a91a6e05c67e03b:28db330934e0b12a1415f3ba72b592ca3a63591fcbbefd835e6119b03b4ed203e1beda2299c50633c173d8470a1e3a08bd9c788c39435c3300e6f97964bb8525d1eef61ba3ed418e2a32a1e895b48d65d6507ace5ff52b38b3072c156ed4383d4beb0876ab196267786797eedb5f738dbbce735a62334e0ca33b7543a0604752884962a672b65beb8638d036f6696ee75bfee4c45a2c3b3066c6d334b29f093a86832098105438498e13be2eca9ff4e769cd483f3af08978dc541968fd5a7a0efa601d2079f6657bca4582eee6f55bfe2513abe8fbcd5d92900e74e095c03f1f98fdf10612685735c8d0e4a3765925885dad494920611ef7c45c43c5a76fd6bb3296c28318effbbc6fbcfdedfd79e9d9768a14940e51fa66784709c230aca6b4f8bd5db0f22ed6b0921fc9e24dc885e7aceacdc7a9c910eca482591db06693b9c60dcda8dc4f19530fa9f8d6e3fbe952159e8fd8cce22ed6cf7fb6240fc79db373d79ef5df6f869d8f021441866969479929a670e78cbcff214b5ac1430e1a599bca49ce6c6a3be16042679e32617a4a63b1b03a2823b12fba15dd870abe9501883c7a049ef634dcbbb89323e5dff4eccaa9ff2f552b64ceb76a8c649cc1414203f4bb2284758013de8f199770d2dfcf573cb560c7700fece2dad5863c114ff7d949cfcd745d6f7f2dbc5cc92e5b32a3f4601449b71aea8ccd079623b673e0593db85f3c3011870200e9a3b5cb2d379aa026fd0d30abfc99895e515c814bbd00c4cd8ad9deb34b470ed48104ebbdaf14c38343e37d878400390a34eb6e021d781fc1fb330b0eebc7ea0c47",
  "5.17": "9d61a94f92bae8233d7e3e23:aa416f60dd9907052a3d8a4c4a51805a:437c023a320895b467a89506c41ee03789a7a956cd376d7746cb3e018dd4e3787abed313bfb83bbae79ebd574292ebc887e7caa48579c7b360a217c26b9c97f510ac32ab57a8abb6b2352ebc3d90aa7b31e1fba53d59a5e6168b2ee59dd601adcff8dc5ba9f242c64f47e9fbb223a9392b7d40fb56bd48f904a0719a3703562d6363c638f7d94fdae21ff2ccf041c119e1a273f0ea129255edc2ea30cb3cd00b241b93d468b8b8d538d4200da7bc4d2a5469429e55bb7e7c66b2fdac1457e10a3c550da0e40592ade65f5cb68455a649bf82523813d2fc49df63ac3d693a360228c7e41ae388645c75d524688699b42eff83051b0e23832f9b1fca5bdef5fb91c5f261c49e4260f3c74ea85a1f6db9e66e6fa082abbe4abdda636769ab96c9002266e2b3a19bc774599740e53bd8febce719efb1e9f828d5a2420d8340dad395af9b00cd54d18f59f61b18b36adf936a257b6bcc7eff76b5d6e6e18841e536772e7aabd7a12947948e7f2264",
  "5.18": "e0737f6bf93ceb24099a0a52:b1d66d26e13dbeb6ad036ac1dac58ef5:9792cc8dca7cb0dea2e215479be4aaa80a159924e1a030a89b6ce249250a07e268be3c6f04eca22a42b471d0ece030aa23b53b87d09aca54ea69c51230e9b184232ed9b594c0c9bbddf225d37cc19e8ba57599284ca09addfbe6861ddc2765c7d29fa8e8268efb7b211d1b81aabe6d705a90cb87e97b2db8015ca9972bf3f2ed02a35dc1f7cac23c43ead7ea57959cfdb89f8b70ded4a187a11e4edfefef1e81cd74608d4da6c6edcb4bd6b898c7e2390fa2a767a17436ae35093222ccdb401f9edfa3fdf7dac7a2832c39398c886ed80decc5eba4f65e3c60259218608461b065e93915600798c8f44bdae03eb6a6dfcab0a958251b9198ae68c1f5fa07dc04ecb2df1effc2362a20bb286c3b030e7f18c171d6230ee528abfef93c71b650ae88ac1a48b20ba6af6a96be4e4747645c8924d6d64869b65ed51774dbb913547400442d5148242aed01467639e5f442cfe2f7d622c45a12c9392fe10b2405db33f4365cf753e018446fdeb675cfd3f3f32a4d86d52d2b8a1025a92d40dbe59ae74f7ece9f8f913509ee04c93c2ca6500e61c1387a70d99d27e4a3278d79cc1232121df85aeda446e7885e196a1f37df45421ec9b3c191fd5fa11f59bc5a70500d16559e7bdd74fd4e0f0601161386fd23c89508d094b5c2d8670a3503181da37e93d4510182de03fea8b0b60dc5b8c08bba637dc1930904d334bb895c60bba2bad4b672ccfdeced2831181a139ec062343dc7b90b216ce3a1857a0fe70c6820903164f62acda2f58be89174d72bd54d7ca80962485fef391e2dde1f2b23dc074c30c6631b3fb1e4f88117875e6e9f3015f20ef40eb4cfb62cf18585",
  "5.19": "8f79412c1459aaeae701cdb9:a16133f772f902b2ca27fa7af6c8f8be:d86a2a88621860059440b2b4a200df1e4f5dd7715d5532e3a6f8acb8c1e7ebb939ec3813093e7f4ca6f4a96e2df9a58d74bd6fdb6bad1685f65f3fc9d556606d2dde96af53f4c8ea20dc83f12d192c509ad90048208fe76ef0feb2441925e38678fa6942dfb7523f3e02556a2919ef1ddeeceb782a044ce9c41e1f0261c19ff2f5be5c5c590b19aa5f14e135c960077951f16b7cffaf321eee2a2391b6c8ec9f21c6a573c9f0878214b4aae532de1143436526e139b4e160c759c9b897a86d2ae4133de86db8eb9b7c651d1a88731033958a1469313868c8dfb46612d85ec2a555f13021e7d43468da451798c1599891c4cc629993a264edf7dba637df7ccb4b4139f779660075fab488381ea2810a39822864438f803944b2714c428908c40b494a208432c13e7cda41a11099ada0fba01b996e76d6be62cf32c7c848bd127d4557cae1d16125cc22a824d8b46e55b000f5235c803c82ef27815999d1dac1733f1dac1f2d6322f207f610865b6a332cef67be412049f08d52bfbf551a6048013576cfefcf813fe1720de52771874d994e8e74c76bf336deaa055a056f7a545546deeebad87d912eb252a02a86f4b454141680f4b53df494fac4404ce1eda655d7829c2f36b8b076eaebf74aead967b12d6218bed30cf87725bf19d7c5bd93b2718a4e275d708b69a08fa12fae4c0ca34201b093542c307053457e896b983df2c92725e7b647f8ee40a8c4c27fee9bf23793717bc5702b4afc1cadeaa37416e441134d2f2684322a",
  "5.20": "86d9e7bea655e4ba6a84669d:d7b8a37f182d3387340f7c3914805649:689615a6a21746dae37ccd716d897fdd95b9c898040c15b82bf5d85d5fe64a27bd4189901316d13b5b106b22bdb4dadda9d042c2a2091a5363060883530c637d3ca946e34c58c582553483c7a602e22bf065ee4acecdc492c2b3e0c8104ff76bc876a7c6cf51ce0760147ae854c59ea61f047b65e010dfe78d25cded67fefc3f1ed33c0a8fb723eaecee0aef6317293f86c14ef7c0145501712460b9d6e96bde3b6b46f7dc50898bc609ccc29fa65109784c2b14484d7e206696857b75c7a0675549c2b4a2f00b43695f8e08c51c437e1ca9540375982532cbe896145e61e7618e317126bfa0382c411595bfeab3d590e4c687a3f49a0da486597d89536aa0f8607ed303fb873657a51c98f0e26fb62acca6018c448eaa5dda749e8262d220ec3c6bb518335a8902972b365cb08096cad9dda961455f5b64873c40b01a543aff709b88acd2e7d2682efec964ae38263af1d9dcded1d6c2ab11e098b87fcd45c0f0947ced6243f791ca419d773656f95f406079539596e80d3db4a1e725cddd3d02a4f7",
  "5.21": "e59a8992e17f5b71d0bf46ea:70bd5122d7a41518578312b022b069c1:8d6a51d1730b84c67b65f3540e21fc562ca8ff3e696ad4a17ab5ac30eeb99f5fc70b3362289bc2faa2a83b790f44947168bf9eb728ddea01b98b20cc7a9697262de5f58396a27d542f30980bcd8b37002b2397f10e1baa53a2946bd846ed7418a231e3997dad4b2bdf4caaf12df1e1ad4fa154cad2a06a02818061fd8629b913cdc80567292d7e335fdca6dfca0e179ec8ca5137185ea1f9160c07f2e045e35f438aa35455980b9029a47f51410fe2e814aab27d3cea0a5b175c975345def6b221b093751e22f7654147e701cff6bced91f4d6c4085c2dd1023073cb0006b0f69473d1a965c0e73a7caeffb8bbc8d515f42aee0ec028d1b6b56cc72fa312ea791d5c05b241c508ba81f3a622864a4ac42b1040bef8d300721c8df3a2bc7366413bc3ea4c2f08f573037e6d1d33ec02b1851291fd479b4580599546a60708e055f45a774c512626d92e33174ef6e079daa9f3cad2b58e9397ca72154b1a4ee3c82e40d8d359b885863d4c6103f9ac0d1d0975838afd696d8a23880e57194a8ab9605991f7a4466e6c7253fa5051f829501cbc30d83c897c2cbfa046e093b4013125a3e311db0ed1bfb0dd642516feedb23ae5421e786cc11464ff08e8843733673fdc254f6d3a5bf339f647445b02eef6e68f39b7ec48e461799cefcb18b29203f1942119da15a8769d41784da08110e67aefd49183ecec19c1a15fcec52f4453481483f1cfd6c5d27a479763ca6148f4bc5b72fec460f1da0ed22b45434c541f8ba6a461daa1dc1aa73f1ef4e0a3bd9e8b8ccc287f3f17d59793a7f6685510c54c8649f0b38343e68aef6ad0ce691f790733f3cc2f649b3c9fb974813b6508ecc97c2049ffeb53ad0f9a93234e423214b10439b24ed5162aa5e969eef91431f341c53af62a899a2b25ab611b78b13ba5e828124d793664de1b67477e01c59ffaa68e86b01c4019ca16b51690c8e3eb7766b6efa09cd783ea971792703d937ccc1da3b8b5cc288a5ff35ce2997395e84cf6d25a2757ab6410d7c0836e260ec34460296edbbd376ffc4db56a4f99a29db541f3bbe8d7ff6716bbb8889c8e15a77f470452cf37f93868a8e5bcd769a7325965e1b4dcd711cfa72a726d5d32faaa3182cfb6037dd255521e718d7e7146909f97c9e7849962b49110db8baee4bb72e77aff47769e48d4ab6dd7f8d5eaeb8178be0a97e0f12aaa9418f175b0200503d60df0e7093d49d39be60fd6cbd44e439083a0a85b0f120fc69501507a94bacec8ea1ab2075b222b17f633199c37f783f249e1feeef025d71521c34d8257862d8e7216aef664f53443d880f5c77660a7d81ff81cd55d80f62f041e140cdff89cb7b84a79c323458c40109e93f8981d1e60790af5d72b1b1d9031d5833e5f5e6ad3feedd86543cf9f1dd8874f44dccdce3b68a1392a8278e5bb268bde9f435ba9c8fba7d8fbd98b3dd9218a15326e7330629d9cd7df202890e56bd5a6d555f943a3556307c5f1496c339bccf81a9b5d668fcf452e919ae3c7",
  "5.22": "d039ae97ee55a85587f45e24:ce2531a81560832089d1aca8393a6c10:72f06c8f3689fa20f0184a1bf52e0d8830bac488a07f27e13e23c0230c8f9123f96da37fc12f5bc0e0af2716b76cb61c8f80fcbb7812254e2912c444a496e2c0db1616e489bbe7a7b4e3559246bafb6bfb43e96e36b10666687bc36eab9914beb3aef83f039c935667717f17ef369f91c163b90dc01ea8a6af29a412701df678874220baeecd3c3a019a1a3fca932790775f17d610de62e3b09c5255e3d335fd0a895601b0bd2014d5a0eb6736182126a03ca117188f723280cc74ef4cb249109308fd62ffe8a1f6",
  "5.23": "f56c974158a537007b66a12e:16dea91aa8fefe2e24279cd17a191ce7:9a4cba883f2dd086e8f3dfdac5027f74ab4762b366d8508bdb1c9fac35f9401d640ad1bb4f8f83ce84a34825a3a864cd27f4206aceb814cadbea0f6d53435489df71d89a6961ee56d757007aa052fabf3fa8c7d97f3f5c2e430fc5d6fef64da90c7161a731bb9b0cb03dd36212bb3997acf978f9abf79619cc6695760700fd1fd9cf302c4568df0d5ad7d15691dbc135263a396d90d3b4b0e9cfc7bdc5245bdda99e0b5b3bd81d4c7fbd43e817804e909e9bbe5f1d4901ce8739fc231f6f92725dae3f6e0ccb9cf431a78fd3a43ba0228011e1fe93c9d044bc5fd4930943591d2e0b8fd0993108f807615a2b7897389c53dcfdd4553772e2d3ad5d1651e3632b41e7d1b7fdee92e56ebc1bf993793f947f52a4be1230c3e06642a5005cc0b0b98bbeab1978b0738e0ffb574a0417989bfeb6286168697c08ad12dfd366d26c363d47f819bf7062cf72bd56a0d0e63489a8fe2dfa211b1274e0c8de8038e451c4ac6a25423b803aebf8fc4f3564bc8ddc35a001dc9b5d78598e931c17dcce2e4732a006e7a48e982b0b27ec1c2e3e38e7599afadd3362f801e59438272aac2f3dcced476c828a5854c3f99fc7450a07ec145db9727d36a5eefaf17a9b8cce1ffd1abb0628fd9d6bcb5f29b393166aff7107c8d5cdcc3f910054954c09d717b0922f861e1cb29fd0164c0a56984009d50d287623b144bf922d173cb762cc9fceb113dd3d0bb011cc4b194346eb947869feb9e30fe79a3c2e2e532bcc126cd295994b385eb55f3febae20b9e04529def2d8bbb4f2d198ffb77574490a44aed2282448dc58b4108effee1eca4ee9438f61884c12337180a271240b578531626e7fad33c4945866cd4e6664f803f8311d60f39b6df610e5dcb691b9924cf4bbb84b0195680bd652a118ba4cf71e670028413ec7ddc5c08350eb851be06e4cf75473ee40a1af18842064adb5f3b7cba715d339c3136fe6760a1033e0446b4d0e02b56e02e4720980d0db030fbdc46a0ff0640e67e399c38ec62bc4fd5fee81b18f7549e3c6d2e05900b588d1fbc641df367dd3d12b529aee8a5a2bec3fe40228e7497cb54cebd729462b273a73d042ebb4d10cbccf9ac26b6da4a17e371e03a28aa4c6ce",
  "5.24": "a35b9da028ab7a39174ce40a:5620180e2795283f3dca07de3dea3ec4:588bb4203981bdcb5c898a9ccebd1cc5cdaf81dff90c36c9d10d320593bef3a5ac28aaad30dbadf7752e952b220dca1ce9698fe1b6042b6a89f873b7e59fdcbcfb800186554ce52b8a3fc3f51e158d450c47cf4aaf25260b1f298c2b8d2bdc0146f44223cf15cf041ecfeb75f7ba57b7915a5439e99afad7bcc16f3ddaa11a1155d2c0db6b4e074250ebb69d7ff454e7f0c2a691fbdd62d16522381bd62f7a1a7e68a266130bb89f9944dde66b5ebec43b254cb0285d50de65784b0c36b740c067f75f54b156cc8cc187b9079f486418e3b3bf19f2abecbf3848d8bf96f838f18d8ece5cc93c7bf52ce0098456b7619683f9bb4841e4e8f6b3cdec9f5327623e2430a7f42e77da667de224f6d896417bc4dade465832605c80bef37700a15a675a7698952fa3c1a5fe0413c7f232124d40feed273be538d5b7a7807baa2e6b54c6e034b5b796b75f91f18287ef24991bdb7e48914321cd45aa19a0b574c184f4cd04672a542717b521a8fd88fa3b028d7437f0f448ba6a71048bfbebe9e975ae6ee78e76677022b6f0674d5306a1cebe2589f89f1ff763a4c8ce096c982f5dde2c130773280933a03ed0f381899688ecfface94c5e597cbf7d3290c7ef85484c0f0f49fd47b24405429a636fd42359aa19b6b7fc828672179d473b16cb6d2a42ddaa3c877583816d1caea3f5b2daaa265d8406d22d86d1cae4f85fc0f4f935fd8a67693b23564353022737380cbbb4b2a4688c57670c76078640df623f4b21f680dd2a66409e5937874412e431cb2d4dbcae8d87a744a12782d67caca1803adb66aba6ee6261cd658f2cf511a703d6556953cebbd9a50886a286729df8b963dab71a880a44005c6b3a27d980a62886bcc5d324d8b74e563b9449e44f288d3f3842f47a827fa100c2ef8cc8be01bc3d29e56d25655015fb133bb456fa23a790d20d5737007e72206d1661d9f84ad69a041d44900fce300123dd83c7ab5b932d2fe9ca3fd21a6a38a920128dbb88",
  "5.25": "1501556dded3eba6871a6db1:48e95878819a3a497d24370b91b71a00:96a2f90da2421890413057b207210444a2b5d9386df05c5625e898a861d6d1d8a4f227a1ee6f8c688a3e217eb506556e6b13cc441908721bc66a8a9d536c22b2666c1fcf5efb2be3ec8dcbd929885ce210044ea1f0f8bb0293c4e720a52896c8d6c006c6e54783511582bccd780142c4573a0ceb8669864924ab7b7e4ed0035eca714a532e0870a60917b1c0a558bb425bf0830fb31cc55d55f691fe4884340da41eec49ca5a1a4d2451bdaf0e288f521cfdfaba5a33e6fb687bf5596902da3eed4da5f9b0ce139c0ff0ebcdea25426dd08e62283813a8c27d33533e569dfb19ef10af4aa78032b7af448e136d118c6bcba5f2611ba9439cae293152b9937b937883af9a997c4a575aa017c3d30f0b94cc3723ebe0372af8121dc94c634e690f783f966ddca172a1a010f1d000cbb148a081eb6afc2db89fe13c0d477e2c0183929d4a36216505a9e37728393d00ef8f458d83c6fd5d5d5fe421ede9ee351498d50bb83d0a08fff9b8dcb9d7752836432c3cea73cbe47f348813eca4b030826f003fcdb026d0f651e0d25228f3f2f2fee62695fa5e3f8e54c5504c32a457982ab0aa6af332488e96a32f95e384664a2c2c5a01f4dd9c9fb117e07bb9297738f5dc8225292361e33e3a891617d09a5201ce684bd9b6bd0fb1d11615d3cb04a3f8d6f13a21a8b48abc80ef14c6864f64f2e9fbfd75afe945082465e53fe819babb6447f8c9683bbd3dea97a3f6b990a2185d2049e3aaf30f997f07db1948799e7144fb7230f320a1c6df8625d7688dcd26e81eaf185cb81e1b192a49b5f9cee4143e6c3fd148adc24968df98f87659cd5585e6f0de94b36fc793c54a87259099f0059b7e0b09c0651779a7922876973ec2ce3ae2c199ee6cf7dbdc908751c18848cf987cadc8f830bce0f45733350b0d9e723e7b69fe40c13e56f92c4fc3a251e54e4a56a7d763b50a8f77ccef66514b2851ac5323c2667e37564d5cb8ac785cc5394d9e5386f745b3a1760aa334401db359e4347c584669e021fd49e820923a0eaedf08c3847bdc3f843a357daaa0e3a089d09778e4b2c3685efaa92793c2b48b1995b03aece1609e277614d9ed8be91f0f594db4f178e4435c5b94a8757d2a556672c5bc2d5375063899561812a06bb852a64b0aed426f2812eb7005fcb05f12233f10e653898e5c86b4307b75d3e00a0abcfc942bece320b9a736ca980801d998a75511b9ee2060dc7606bd32f2a901af23abdb388e6c37e33f52c2d95e2b568a7e688b1a09b8ba0c0b04ada0e5410c4d16f90012917ee9031dae9ae23f656ac2f93bf0edca432c435065447ba2819483fdf2ec9f312523a7722620ab920ccb76602f3eba9b1ba9ce776ea5dc66e085a7d2cbc4d19d8c353a0b536b3c13e20bc765bbadb14a894205afbf621af4b369717de3dc88fa3011fa1f124af1e6c532ae4d6cf252b97e28120f5fdf30112bd635a7317f",
  "5.26": "f2e8bee913812377b18f7d2d:d2b5acddac3f9588d32a85e8a25451fd:8a6b57e2b3dce3ea28d19c7b5472d840b2623b584e6e98a017fd0749b438162594cc783c6c358ea5ec0782363242588a4ba68193480daf732b12ef735dbc48e0d5f9a60f5601331ea6fc463e4b236f35c586f8f90cf030a05822ba8eebedc0365991851cb2cdc0baeb472e66177c8e5e141932c6d5fea8f33b374deb83c5979592f55f6540a8c2d160a49b314f8965eb9ee9efc44a9e7e6e208591f87f20ae8e8f98f1e7982e7cfd5031f579b24a994a8f34070abdfa431e611cb1df5c7c0d2263bdeb6ae8b4b2bc54b708ab7a5268398141c55d0b1cf7be0b38b07736eb8b8b675a303c49fdc2f9bf856972e1afeaee639eb2381309a83b52776efe2a1dfd24a2ae506239aa60524acdb8880e5fe3832dd51e1106efbb2b35700180ee7a52f7e779545912a4d2f98ebd50348cbb5709510a9ff4cf0f375fcc98c90d421fa4da6917d701a4d97f8b089f2321421c861a7b51202a273fe70ac206972ecd14f72bc54043a9afdf78b89588553264a898a8ae15c090c8354afb2d1b164742a0bc440cdb015bca97fc5a9897fe40bb4465c5b110b00a858d1b9b0e6e9fe5aa38172410f84f7cc9b5aca08f64d1d8795b6eb5dad638cee86129a5b8d5131f868005209ec89d336b3baa515ae83faeb67dfaa35b19c47b7df9e3fe2757bf5a9e5e3f9a643825e1692f7551a4c6cd7523ea1757b28b2d3e7183d1c403dc5d7243550c930b492b91ba9fccbd6c38a41a7348cdd62fbfe4fa7dfd5ba42b016db873039f91d6d7d54969b7cefa417db8f7686a7f8013191077eb21c6306df234f8808ebd4bc25a5cb8724714ef36bf1e473ee60b6e823d16b07d8acc6c6c185032498a6db5db0d13e165747fe2427c0248bdc4f0e199bc4e3ecd3c6d98f4f8fb572e9ef0bf46d391fca3c3d5deeaaee7bd2d98ed845e2d91d9900a45aa52c38c3be51b924e54e64928a9a708e880b373afa7e0f22d48b41b3c485d53952f08d2158fbc17d1a97b3a23dbd2544527ea7eb8c333ed82477f2cc144505a9387e8071d900700d7ba7d46ffaf177c7fdb672b21d05b977320e986ca1d5a189ccbaafc923ae4233909e514821f04bd113b1500bfb5e76b3d5194db36294595d0e77cb8f89fe891b5ad2f9f377bb138438ad563f5b6d85c089e0fb36782408e9c4b622061adf2f36a5e831c5cc09eac75e07b913724a06704919b3fdf78e4ea71367da6fa94a6deb2da",
  "5.27": "81ae5edbb5a92fb80649c0d7:e836a4e1bd3095edbdafa4f7c7e1a7a6:7815c5c2f513c7adc5c9b545301876af1d8781444da079a23740151a9cbcee3d7b12d85a37c7ed54c7a063f0ad0fcd88a8d2f95319d358d1a848a617514e7b8e914b9fa49c1cf5c8b3cb7de135d4db1c381b7597e03db5df63cce6b74b74f306eb19469ddd39fff516125211bff10b8a67357a744908257342171707c352d9412e1a8a881ff7e1bdb3d3719a9e5a683141979d9208ac2a7d9274513e2e8f44493c7bc6ca30cccb3e381c7229667332965dc273beff84befd7e89004dfdf4e8f0832cbc4c566668a5998880a0a21e83239a3318e88f792e21acb19aec6af4c614cf0d249c1412e5379e41daaca5b61f49033900eca6867811298e32c875065a1dd8f9866e4aa664e9357f0eed15b600627be03de405b8921e891909f785a04160772ea6ec17da457f022bbece10730d0f253c97ce0dd92cc37252fd955a9183c4db6782a22a715be0adc3e1225ddd592b18772cc8cdcb9714fca7c658a77104a52682773988adbc655aa824d89b54761a91f58e7732e9fbc317b7a0cb088dfdd9c6e05d1c7d83213bf16ea53f395e793deb9b4c02a03137021857fb30c649d6ffdd05dc8b72aa3c549290e4c163f77110190e52",
  "5.28": "fded3aa62981c486f53eb7cc:fae1955b43e55a60c3b1036c06d21e23:94e6fd1af4ab2fe76ba58e0f7c67e8ea4e5c1af20ea8bde8f5db46b962e88f0f4dd5ed3e1dc93fe0251bb2ec5e610ff596b6e96d2b4bdfc466c0d3f3d0eaf4102862a57d107f53ca01102d51f50f87f093c70fd8284d5baea89b4e6d0764abf012497dcddf2dfe6d3c8b6e9ebce866b20d105fd2b8bc46757bca52ba0b92b1cb24664a1cf94d57d1b579786cd1c1edb3c2abd15514433ad8bfa2dfbecdf45079977abf736f2c847944e4bd77fe9476b955610e74f467f88c27d3e5c55ea03788955d7fd4700cd7752ffcde6d7a040c6d4d668f0bfb44df80750f2efeec12e5fa35a5ec6ecdcb03636d8486fad8ac62d8802c0552ae6814c1010bc4e03b8d1f505d8ec2b673dd53447fa38e1c1d634b3e6d65c2551f835e0087f726fe334c6668e272ae643461136f974c2a42a2d8ae7c75f010e4df3d2f8baa2466265d4a7c424b30bc2ab1585632eeed7cfc58f886ff51c35645cb440190ae32dac23bf8f05c9ae36697d1bea7884874a8cc5606b7a6f33735b1762b81946f8bb36b31c4fda6affae4c2c29926c92e2586fea944718669b107c8805a8da461ed91be9ba9d2d88620d7b0eb83afb8878325be0fc1e461d38a701e3bd69797a44b26d2af92de3bc58f21419cce4efc1ac4829aee7fdf4241ed385a4a57e793b58d12a1edf513c62c11a576cfbbf2e150415a5e4dc2b24e36f97e2831d0b30b872bb23da1e73faa63a1e88aaac8253fb21b0f32b2b3c445600b412dfe8e634770d5bbfbc9d20b3497eb003cfe257268c690282899ebc945b21a6ed27f737d1ef183f5ef47af7a252f20f083b691629e6604208e67367ac5d6f8579c559ffc612376894c5a8e7be124f2b45ad57f95bf156d9d04bbff647c015491f64726c83b425b16877e6fddc1c8a2b9e7bb6307e8dd49d394a0de5c7a54b9e2de1e2e51df5ef62abc265976fe70f3fa51dce36d5e8de0550108efb8af042b7cf167a597bcb87ed21646bd970f51285eed3ec4d7e49adfe9b274d561c92c18c1c9c091599c2b6b72cc3055d8cc1b5d16fc52d1f85bb5da",
  "5.29": "eec07e957d24f66149660173:997e1f75d1c43085e4e044b1b950f2fa:8f91f624a2098f739ae34ee54d4ef18378b48f7136f575c79bfabb74e254401f97f09e35501a7745d430a107e94582ff6f1c2a0a0030a4ff0cf7be91453df83c237318298799eb0b864306d6cbaa8a7c2660c7afb40fed74a999052f4eb3fe5c24dbbd5db89cd084fae98ce2c88b6e030e3b7dfd112482f7a4663f7390096719ad6a7c167006d5e7d830ddbcdea024216f9675bf503381c3309f5c348c28f80771b356d23381ad5e68d468ef1b09a59536729dab5fc3ae13f8d94e8a7e081c2e73c3ed49add63c9ce23fcd51288b65b7d4ebfe3ea5916c62a5ddcc48e02996de0ab40364d00df4b3c5ad72991d1dd850fb1843cbce12013faa40d652524ef828278dbff00c9934467b6a7c7415788d946d92a4566ae8c359b5d513cfd727d86712a3e945a72c6ffc484bcf73b875fe91c640d8754264bbfddc7366e0c721eddeaeae29964eab8b9d7fca7bd53a21718b25732b10577bf6d4059f956b49f5ef011649d93a7898cfe42b4b9df967d63ab2c829d5bdb9f7050a1ea455a0eebe5c66f161c42883915b7c98cee30b8544cf73f3f696b956ddda0f134fbc213a26033e2588b2756eeccc746ac3a9ba54a4b6336239b76e051e4dd76d120ec112841498d68052fca62710645dfb6d5bffd73c8aacce7a4a431f2991dd58fd4d148c81c7e361deb7b99d40af076a40411973de605e06abc2106517f9d82bea028ccb3b976ec24b241f96fee0933f86d1d64626dc8195fab3cfeb5fd6778d06ae3a382f8202a83bea5fb91be733c64d260c3e1eb8f2cef54e3782c9c0e340824a8a8ea78b8eea0db374ff03dbe85ecbdb887c99a60670f72e85ab46dd5a71260d2fa8f5db438f341ea4cc13ad45ebf61501",
  "5.30": "4ea0bb47224fff5a3c2bc7f4:04fd3d03e681147a98d385658944881e:49e8f415da082e38676175c171f2537a7e282d371a1bafa31ab6ae906c7e1fdc7f52e95a03081ad16a982a07a5cecc70e58898cd74b81466f149f914020fc980c2a632fb6915645aee61e2a028cd0faf4263b4d3b0efccdb71c384dcac8c53a6d6c2d9ebff98a4402f1f5f34f39210d818d4b605b2d90a91d515a3a5bafac5d45db32cbdb247eb69cca7a35ee204e0ba023c881ca134d2de4776db16887bfab1cb5c79e64f15965f37115f0a91825cda063d6ffbec8ff8db02f941b25f77c84b1c435c317b3b91068cec01c2d42ad5addc5eee7b8f63b93e723f3372283f344173a21233c2c5eedbd399fdf7d8a85a121ee8f3ff01dcc36c31701621c80813bafc34e3ee65f4d13280d0fe38d46250818f5de0e7cb2de6e9652468b583cd30b47317a80e46b2ae5e73615c22895c07ca1c3809ce5646cb4c9126c6f224a59073e468116786dc8457b19326110d10325b67bdce1460716e5678ba4cfc03fba98435495b9ed1c11da6e30982f2e55097499d153c48e4d1bc08344c459ba440739874c582808281e7e271bd2f9b028677e0f17d6fcae365975b5e93f826512087b956290e9f8634c4cdb11e3717c93ba87d05e215e54271b6d609d5ffab7d789c1f64588ba3fb5b8aaadcf48185c6c43141debfc3b64f75848dbb2762b3ca7bbf44d643876fb361f3d8aad22ed7ce4333931dcf0e7a10857d542ae2e84ef1959f22d483f00d5aaf4d5228ebf425bd9a64801ac5b5a61aa63bea55ac6e369fc5e9992478014a6707b1938d2910d1713e1d0361755c7e2c7cf9b9e01a37577d857b49e5108e828f0ed4",
  "5.31": "99bc3d2a6a781a2a8ae53f8f:da6879a2f614accee0025e3ed1aa78cd:6d076af61cd79e8fbedfd6c9471a71e834863f4092c0e7c26b7275c965b78b645463d2a531a1707bcd73d7bc0c0256c4c9beabdcaeada80375d784d40cdcc3cbaca6cb579be174a9b33467a8e2229f720bf3f5dc8c2e5d74b83ee3f26d251897837a00183bb274701f9707786e0916b618576752e3da3d68dc9583a9ac0dc07e5f1d4a780e7b1bd6188d873ae4e568bda15a4285978d642ecdb081cd8a04aa14d52157c70a11217e2949957f173b16f5dec9eddf091e4054f837b76e88e3cfa3a9e755bd9fb65ae1298b213b76547aaecb477edd09a701aebabbe771ccc9db3d492e29221b99c76f75fe940031c49f8ab8a0a964b0d3c9be619b760e984446ea205393ddc797f098711c09163a35645b4750b13f2d2f138879563a38b558c42ef231ef2ab859733f92225c37ee3a90000fb0c857d8967621bbe619873ffe4dfb3c6e6230a6dbc14a524fbf142575a8f9bda7821738aef5968aef5b52ff430144eefb04b4f0014accda158737f58a32612b0d397042717b35c53074de426bd3c314acc393f9eb7af27ad02b283722ffd0379de29a002d2d4e4daf373cd933ca542e3a59b39b43898983aae1df23e0b6dba439213cc5530faf89ac2d8614e2c68ff860379c6d834bf990990c",
  "5.32": "7265fec98078fcac2dbe5707:9a9a2280b81843195745f3ca8e2d038c:59d4ce3cbc83792cf9740609a8624597cdc7523b4521e0d56cb9facfdac31f318df449a002716eb77fca66bf5261b8296bef8dda29f0856d0ec0ba2c4bd368dabb1de745aeb2e97eb7a0f7dbd8ce2bd75e72ff8e016541606e13255663561e1cf01e4fffb4d84f9c90cf4afda1cff7f35e2ad049246ff9eb1351142e0713f6d979c06914a35aef93e38ad2268d3fabea88c4a9b780199b0e2eb2ca09decafd54c92f12a01929da54a5b304dd71dd5907f9b5dba68d1b999a3e4058062fa6eb26918cafddca4f2b65d725b647c0289f3cf467a3712f075407453d4ae4b435413f03516de47f7e7f61e0d03388472664787b8da8b1030fdf7811f95eab02c0bd3636cb991acd747f69e9b70edc7d822d713b47321fe5324cfa57ea3c29924c9ca8cca9350e97cf808d5eb345da57e79b565fd08278b00b5e18f881f76a224001b2c231a3cd307496137c4c28a871bfecc04088fc10fa0a23f69cf45b874d394170e1c09d30b186925e0db179c82bedc39587aabefff4bce48645f35b6d680673bced028e7cc87def6212ff550d9e5e94334b082d2fa1a9685018aeaeabd3ec02af8b609162eb45804d4ff41146af74b1ab369f700fe863aa6c1da53e5bbc638ad1a8dbe85decae27f54dd4204d2df5f492546e1ba0784db74aa53989aa5364b134e4bd9b6b1afecd4f207b6f8ea3473563f823b82bae4356e0ad9321781727963673b766ef700351776faa0321070ec899bd5ef75db0488d68ad6de206cbf851227f16bb8671157ba4dcc83f50722d72ce90242fe84b0c19ea538d7391b87ce9fd1f4968edca5697766871e1e67ff66de33e491bb54adbc642e4",
  "5.33": "4159d749f944ee0ad3ce6192:a567a89cb856aa2c18217a283c82e86c:a803bb8be2973119e42fddeed490131545988fbc557f4ad4e3d9a7459209d8124526de776fd1f20cd711dd48c740424062e224e3bbb0bfbae8d439caeb053c06b345eca82ca98efff92d9c25d0f8a530f3996cb88927ed5500c4eea78ee541b5437ce2f1dfb39fa544b6e43af55f3fca9b72f31e952644d89610d620d1c56730ac432c2d43c8c8e39b24e2803d8042f0c08e77c160549f8873b5fbee55201606326a200446ab1d50dd5c19606780e05ca7fc84fba381d43e4a8b0c099354bc2b51d5eb3c60ed7104f8069272e9d37688a88d5e1d50c295da14519284925c2108d06505a9ffeef9e47632ba77ec215c0a01ac52d3c59e053becb0773a5685e215d770aa14d65cd63a3c5402d6f596a280b513b213cdbaef09b11262f3c848b1baf07060be2e4c61a4eb3f8bae40bc65a0030694bf9bee7da54b44405cc7dd44b2019b03840d9406e4078a12d081ab0ce6353f900fedc9ece37087833aad9ee4799a861973701c2a77a12b4f749078f7aa236b4e2e9c4413e24ec10d4cbb65a7ec821e6ea80bbb0191be78bb4997a55e2487019c7680a0f56d",
  "5.34": "20fe9b47e3a6aa463eca4dff:a4bda61a202c135e20dc3f62b0367e33:c80bb059ac763be8793b560a52dd3b805ad2dbd4bcb88ad70846d6bbc5dee5a2afca0cc82c30160c0c98e40aeafff0b2c795a733c66ee08d9eae868929b3011e07c5aae138f94dc7128d27cb297b767985869b5a6bfe88b36f1369f95ef6ceee4ac4f668ff464c7cfcd1ab618656e9711d3ecab11fe174a8cd9cd1366513808853bd584ce2ae5a64f0423c461aa4da91d1d58d409484893a5202564fbaf8d82db91774964e9d533433faa969afc038859e9a629f135903def994462481844df8b5ffea5a2e30677dbe580667f32ee03427d26f6e0dac983b07f3770911bb167a8aaaa5440d1a156410e4e4ba31528978abf1a46cbfed7d9f5c992d5f4210650d44e89e065869192116d253541382d1f3b60a595e876c2ec7315c7c04a3c462d2d8b75249b7cb08f882562fa6601bd5a6cfb74a7db61c479a212432a1dfd67b378c22b306daa87e75d966738997c4890652425a6dd5fad8a4e15a719c40269ac48a95e36e3de04e367b5527d72da9fed4de804a0324639a5672e51c7970059c8f5840567238fbb1ec4b3e0ce629662c857fb64685f988009f03594933463d942daad6b865a4b4c69d23995d4f1a1a3d10ac8ab1d465037b93927540c062ac498d20607b9de134a48e2e823790c0dde78c70198956e676749ef8542db84d2cd64e22f9c53a4bbb32172ec4837a347663705f594ece9c84350dc24712f79746997754e94327dd759c7a8617915ac1753f721109cca18347f78f4fc39206720b7ac9bd8ad2949e1adf78433f31677210646936537966e759c494a8af1b373489501a47f144048cb0765dc87c7026c610db57a8f256853d027aae30c950296a59d0b298530515f000c2dea4b76058fcef35368f7b9cb1d24a72e6ba314288372f770a51cff4bc322d41970f86563df3ee",
  "5.35": "d5ae10866f16bd92cc0aeb5f:6f2fdb8cc60d643f83ab6a377219cdae:493c5dcbe56c74a5139ab1888f3a1386810d45101e91ace887b3921040655215fa264b81a2cbcfa035f1b3502a81934d3cd4d6c20197d88e2892557407643e239d9723a0b0a72f9d724e7871360a0361e5c2ce1e60f5e5929e3fa4619d60e2600ff2bf6406b3673d9bd8f77772f68f632074d0e0115eca7d36b6c79a54a26a6a058c9024943ba0d7f1e56c1737192b0dc36368fbdb04bbf4cb78fe654d35eaa18cddef58c8fcb02fdc0bdb231f3a3963b39a800d4336f39bd3ce42917cbd3f4f576937284750a260e53563cbb3b3b316dd03b1ead23e765b2ca7941fc9f4776d733aece7ea6170a37dcb9eecb4d5015e6e5f041ba3c977710ed5d94310668fc83ffbc982a2502e4d0b899e4d4691860ff273c5d974de333ce84f4f736ce3b2ec8f8e2a5c6b0fd055003717138a14618dd2ab95cd83792e8f6225d76cd4a191feeebbb76d2c6e88874d3e3cd41fa27a37fb5ae8ae8ce9cc8e0f610430af06b424f2752210c33978147f47185bb4a7f2eb52e54392c56a2ff972f43d269e94d5ddaf360e6a1dd998514f4e6bd49fa40d40861e915ea7acb89803d141098dfad1a56c743a01a104b6ce9e112b392aafa05ba197890d4f9cc6ddf6b624d52fcc9573c3c702e0124625b2725b87c7f62ba0dd6a259e17532530263a29b95bc92a1653cdd40bf4b275e09ef5492cf42dfedc46f9f168142cbc6b72878e9e96e8badf4da3a9b25f8452852e059a6f5496acde07a4607626bd98d6e4d8083f8170c35e27f283ffe36537e52c89c81ebe59084eb26e296e6fb0d52b3bc0387dbb703954e2570cfcbfcaa37ddeae8a5776fa39f08b63a2020f6d12f6357350cb454486a62ff61c000616adbe05a7df5f5e198124fba745bd26947505fa4324a4c647a93f7fee02ab804ccd73daad9c692064cb10c6888406b073ef6af5b2d21bcb9f432309ca41aae04458d7ee2ef5f096a9687992f72482c1c668f99e3879df9edb5ebc1902c3e88c72f74743980da33aadd75ed3dc4ec9b51a153b095bcb8718b1b7d0e2220b56457d2e43636180fe3a09953ebc6080de75693401268501573e568ed83d64d29e87c258614276d14b9b709fbebb37419bcf57a5bafbe297c7db2416663c50841257c9f0472bffd021f63fb97b40d7a9acaeedea5ac48d7ba444789cdba93976f553c2f16b7f3029e59f1c0e40ff58bfbd924e8b5e3161538fca50ece54e0143882e7b7fd5b7681a2b2efadc0d80e03705b813538e3c16790288c24cfd9c",
  "5.36": "3b48fd7b4bc13472078c7d6b:7d1db17fd01e97c3e2a47ee0ce9ee042:4f0861d5f3e6bf09dcedebda7b48e2eaa1947f6234121307288cf67debf6168ce42f9d6a370189b9d6cd71bed618c61fd742b505f37045bd937f0e1bdea201df73f97497e50eb473ac5d51c1d73adf212f44b2d7d60861ed4ba160aff18905badfffc023e79e1045c8534fa81cb3191c52a22e04069327d70fce112adcca32fc0aac79d02e0916506b85b81587c55af5377b5c0c085465100196f3b7ead6a8ec18115bf96664331fbebbe1830f55434e06a6644bd46f71cb41f15af510a739cf72fe84ea0099dda869e80c20b281e1f4d9d36594ccf35a17a6ad736fe7eba538c897d026d0b3e50001d9c28a794db1ad551f267a22606a2577f561f33462fb3f625866d34d3a06a9c7e2a44a5d84719340bb0ea2ea6bd762dd4d84e2afaa343a6c795b7de0b0273d008795897d676b6ce93b0f847d5748c23207d552fd9c28042e6ba05cf7b4ac221d7b4f035cdedc93001ab72deecf705ccca16d644d929d1eec847573d90b23e6b8e4d1e89dccf414e7f3b3268fc32bb0b122f386bb5dd223f26df83660fd4367b4803749b44ac7915054cbfb8d0cd432d55d55f083cc35b5a89b7740fe306415975c9d23c434a7faa7f53d8268ee6bcf00b293c739c0742ab82e1db88db5a64a2c20383dd4fe7b53e5390ef327496f727a45808b6013d008be4d54eb81f5d3a9ab4917abd077b9481256bd95bc42e443065ce04cfa1139d387551f29ea0e00ab5507fb63fa0c0002bde7615e2273ef68f6a87964f317b805893c0a47b05cbfe7ae474073c7e816a4a17c641e4feba8bfc043ba339d2e02b07698f9304652aa79465fda39a33945181eaa98645bee1204229c70e5f44a7ba8972bf3c1383c2756d89ab23ca6bd135776e0a9b81cf098ff432312511b1fb86c631cad92e7dc5bdaad929df71216bb28654923de1f12d497613e2c83765add74f084b4116c6fc23880e42c223029167dcdbfe29c2f0dc7757c1d202142517e3e25ca7c8a26ab62f4b2037da25723cb206db82e5946a72816ee3a9ccb56c0a9b7a7701b1461c544ae24604b6c2f9d0065baf3c4b02b20debe04aa8349a0babc2fcbea19",
  "5.37": "1206ee04532b187b267e5c68:c2cfc5abe01ca331ac8717818377fb77:64c4875ff3207541b9784c6b4920b5964bb9fd67e2f89ae628fcdbcd9eaf33231a58b48231f50642d063c163f983c20d98267ef6f6b2a0155b5c5b58bec74a936abd9671d8d0f7e72f18be4c0b2721b9265c581c37e83e12f674c5a373528f3eaaae77970391bc55e0efda924f00c0ac3c3bc54d5d995355706f19300e9e177b8a7e71007ecf301d270b47a4f0440c82cda552185bf49b4bd0b764346178466ab31077366406888f5090eb71d554ac94b05420abea4bdc6442e7e4d69d0bce99cb0ec67e1999796d55857c616e11b7bfbac86734a0f034ea4959a2110898ad8f0d15692ab8e89db2a5061a8c9e1ffcfd421819751b6a605a4dbd8e761d65e5d3418a14d34db471fbcd27cd0a0e9d35a311993b52a67de9751b13f4f5796a61512b23a8bc9482eaff1e0ec9318113620cb3095d6dfa59efd982f4ec9dfb19afc83c52ca25994dbe5e194bf0de6dce7c0d81abce2aa7f7b29cce090ec37372b2c93b2cffa629f03f9e2d0a6e8805b12fb1c1a48a66b6a69b4bd922a9a1f41712b7db27104849759e0a26ad0f883e82c2ad5f52690eadbd8bd2894b5343d566e2eae511b327ca867562e56de5dc15b9001af5502ca7028a5a54de77978e5895e27a533c3fc4d1073fe7c21cf28fceef4c6d8c4a78893ea2cf8738fdf0a1224587b6b8aef2461e1f4f4ba7dc8d774d954b220be4794785bc82160fc0fae84787988272b1a8d806c10c2a4b7eca38f0b46a385adb69863874640f021be2b4866be736103567803710fa607234bfdef3e6574ff53dffb2807b36931cd4579ac2b08c33bc0b1cfafa22c4898107ffaa8fb0d32d7742864034c34c0258575c941a0037eb29fa929363836d11e6ad26ef674f63985d86e22a3ae86c1c095e9a78b441326a724818bc0c59fdfac3f181d0f5b47cf73aa339377aea58cbb80933121eb35826a51b0b4a88c894dca3ad52574ccd53403e217c172188ecc2a3d8d94133b60232841271aaabb34a7da75931451edac4eae62a28bbff873cb2049b5c09aee27af73767267e61043a62ceb111abc74afcd766f6dfd1f6681c612800760b8e613ae9a2cee18338d27ed31235642c9c3f347a8260fb486b584b5d07afd8dd5ef621590d1ef18d50a5baf133c7a1c1bcbdd87ccbe4766e73a23936e719ff4ebc124ab5d56d556943c17b61d01c985a081f2452eb557874846d5fea3c742eb4e9a44ff5e0a4f85e8ac146dc629fda5be710c46e36bba81de1111d8901654e57630fd075f696fedfb338169d40dc002874fda606d60b406de8cecf8cad042da7da4d305460439c53e0b1f8010620eba70fc22312d9e33f49c56f3b1bd941ddfeb0ca1e5de8bd1583c6f15321363887747da2d84050e7b4172a20a991839757d9e1a418fad2fa9c5797bfd85193dc1270e685933de8c07be153e3cb6741c07de8d1e794746044b668cd3031c30b7e0e6cc4a6fffb73592770ca33fa28c7f017bdda5ecdee047a595e91ba1ed1784b5534c42e727f76efe0b2dcf16eb73bba3498bbc0cf1e1e53d50805346898c508652dd6679c1dfa0784c8daddde4114c608e1c2a3eefb6e0a7a635669b8d7d4b7168f81b621c5dce0bad2a383e160b058b68112cc2911d2ff0c254734aeba8a78b6fa1a49f3f716a72cdda9c4da4a24f1e40e77365128e96daca51c4947ec4865a214f6dedec96d1ebb6a6b73232002892c70c58cc3f21bd6180af933c1f40ee9f7cec44c3dcff8908f8a94c27b0fbb12d0800356c4bbfca06a6f8a1d0157158f543afa141d8b773ac38b00447213c67992446c796299b4f7ae3e16253df6bfeb82929acf2d15c1b3bb2ea654d39e66460e7a38885d",
  "5.38": "612b368e6f54bd27ef2c4f82:9af3b26434e12be277d3fc786f968271:48b31dc250b7c48e5ed2c34e1ec733a350e0c204154f1354a7f29efbb89dda73c2e0171faf28d3e7673806c21dbf3d4f39e3992be88056783769153bb45439ba8eeb6f8f4e20fc427d601ad277fb3bcb57c891622aa5e6d550cd2c8cb3b5df6b5eeb06754ef72da1374f80594bb4d71df0402912288a5495cf82db09161e57b24c15105cfbec7c1690098aa6858d76b9fe3b12794f0d8d3101eb527234bac077cf986b4d952785131e3984117f88b0abe90e53890146fb9dbbd6e8c313c111dd31e96c6c9349186ae6e7eed9a0f03fa14ffdee1cd7fe8231f078ab1a41d1f6a7500ce76331934cb1a3b9ff8ebc8fcb68d3508ae1cd53336930709e52dca534d4554a6f9e9daf0277f203d0d77a8e05e6d7cddec9aa6ee941611e95d0ac1ac9ed93cecf8112ec7b10186aa17b1d606e85d920f350997ec05256c8a9df1ba05a1aea51d62fd7a7f644977e107dd6c8f15f2089f77449c3edc40250b8a34c0508f36dd3352b18ca04e9d26a31e3345a1bab648abaeb3e9d12a2d277fc2c88103245c4bd6651d36d4a22d434c4dfc0bee2854e6712abad67c926c8ed6895ff85b51230afec6048cf4bf6fdbf0afc86d6d32ca7e8769570b3a5ef5548dfe448a2c1b400efd7709b200675c4889e8f69397284969c9da26b0f1e59b7c7ee38739739b366bd43f363314f8f70671331a9d1fb7c33dfbdb7a40853040e747e01144e73",
  "5.39": "089cc5045854ea86e2e1adb9:bce3333cccbacbceffd4be0b1e379431:c3654dbf4cb9772bf7b923205cbb27e1f23ad5f0a4239cd7dbd3602ff089b68e5f8f038f5383ce71c7b03d1df4434e34df2b2f4360d15d8d9886afb20c131dca885f387f21b92fedeafe85f5dd587d03e5f1b6a4d79f7274b0f83891c2d3c4c9ec2180c7fb95b30c5c5515c7031dbec9cfd6bc15e45cf41c6ae555a2371f6950d8c15151916690d1bd03a80219c89ee7b7093b427f713a3b3dba8945af33e54864379f14610d7e6940cfbe6ea2b097286ba9c9913599eb150cb5f60b038ac3f8296b44b0ef6819739eab8cc6d6853d19f4f9eb0d1779f8c4cbe5499c75302d875f9e398dc8ca8807a8e77e0fe173ce07e5f7855dde45cec5e95c7bbdc1d80a72eeb5d2585180879c5d8539f13e7a340515f9fb0267bdaa25cec1065188a6df11cbd56dde2c34847b8cfee85f3273f41896b93907e951a539470c49ed3bd810c0b6dd96f67c896005140eb777f21e55d96509eaf058b65f863dee9b51366c27e756f02fd1ab9dbfec4f7254ec3d3092bef6cab6352c7a67d9fcc0cc09a4574fb9a947dc257cf3ab2950aa531dab0bacf93653771e825ae509d728ceaa7f799951cbb60a386281ad11fd7b9640a9d00eb32614479a24b330fa27786e982ebc9bcdae139acc2bece26b8675f5343383ee3554ab148782ed24be39049b8d7a5173ddbcb2b53beb2df4381ea2bcbd35bb7eb3e4e7eda27cdf98ee0cbc5cb5a6ea9f408e580ba1643729c455d78e1724b920b5d788bdc51a10648e44fec556f8d68148c9af66924ae4d48f08de0b5b754e7f35737a028192bbd13e11fa7e5aa37b4e9e2e40cdb9204e13be337cffc947b48db4f318487598ee03ff2469f21b4da91a7558b9cd987ee304609476476686d12634c745a3068404d79b067ec9ab6057e083c2230f6c8986f798a9c4ab666e33b70e2fa42b12f1b7537d06e6afe883cf0cbb55e9509948ea952602b13a20cfa1af384230468ae2e42af2a0719ca431db2035f8a06b481a3924ba6c747428c5b736b368a8f007ada24db333d7483fe88c4cfd2432dc5c87755e558a2f6059cded33772968d7b8cbf9a6f214c7f79b3314a9b1c8ce56eb2c66c05821ece04bb7b374c7a84c54be7fb0210c91f6cdef3a03e5bd89db119a0b17c816872a033f7e12218d80ca6da8daea3c48f5720fe401cd07dcdd521494e312ee24dbd03bd1429891d276f383702da0b79bd1d3b4c23dbbeaf75250f508150018d10ec0f6bd210da1083200c7b084defadf16ebeb99782564803ce4de13a755dd5afb66b575975ed1d46bfb4ed527f8fdcec2baa3c1d0b408d0b7fb04a3fd19faae42c2f5ccdde9a0a69bf164bee1efea1d169e50223ee7c387a59bdb009c5cd9404fd118e680bd99479ccfabf01d07f965330fac11b55efdba4d2b5e06bf7ba99e678982177ef8fc42b657fa29623f675debcb409e790fadbc0b241b2de892fa7a80ee225227b71e20ae1e7d5b6d3fc0f00bbb0848d841b728af73dd56bba69059ebdfc50ca980e450a082c8cfd7e22b0cfbf616a60d3b62f3b2734b88ac443fa71900d94370d5ba862979a9cd6c424479c66a1fe6187fbb9b2652c17a60336f39732a2533f22835910d699cf32d0ba30311552810701a635c55a3d6567cd58c2dcbd4c4dd6526d9880f821a909407f8072fd383613486a25a5e7def1e002f76490b2495f7311ed134f45e8009dab89686898c529dffe6ef",
  "5.40": "ce54e8995cf426655ecbc1e1:22e380e2f6b66a6402dc59bfe55207cb:6f1f81dcc3c9572a49824ce7970e862bb1826040f5538e6df5b0b2a852fc34e76f3e6c1c98ea02c63ca4d3d403886b975d59502942d277c458f96572ad9043f30da6cc88c17d62c2a91d11ee1026d8ee08f9c6b7abba7dc126d394c22829ad38e67c09265dbadcdaca010fe1bf5ec8b0f48f956f56b8ee127a572b93395c910a28de98a987a6ab0113b75324bc745ff9ae761909dc0dee677508dd034a486e525ce752996fe37a132cd45b41e1cb70a1d11bc0ad04418acd2cbb09f55eec2800a4b35ea748e6eba6ccaf0e91752800a9af137cd6cb5621269a4b62fe27ef54a3e47618e2b2563944f04ffd3e4e83337071324949b36ff6f31370200c200ff2bcb122de89545a6af6bdeb4784cc50f48b726e164857bc7cb9fceee8f6c57ab31366dbdadab78cf67415a35dd77c363cfa672b429b5603f29855fdde031095dd2fc26983cdd6097a64a07ce0e1ba6f0ac5066704e39d54f9c558d4c92a0b4a24142181d806916513ba5698987f7f0dfc92fa93df3a52c63c267954e502894fff7e787e668d6a80fd6b103b4f6e886e78a850e52f79a6639955c431aef5518af868d403a38f98f5520fb0148a0c657dd352bafd1eb13cceeafcd561a46b0df6aade07161da2c2a38962e88580fbedc41c692493a28737df00ec67973fdba70303f4dc56b8871f90b37a3354ee04921adb486f33a64587568e535a1bc989fd8d7df69eb0d0e30236617482a021b378720ce790e1e099e846d94a047853087c4a1c44912eeeb8813ab05edcf8d0853efea8e23104169e927d7c27e1e1593513b332e09cf7dbccf272505c4ade9cfd558e97f869a0d264cfe9998463"
};
