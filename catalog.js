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
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "cd0c734d2bb71fcd101bc733:0657ee0d66893a71ee7223dbd153ad17:ba43399a5a6949944d1ecebbd2cd3666755f72d2f74f9a470e050cec577c9af3e2fff2b4869441f095abe1869739b035774030c8a4f4d7f5ebcf9e00357cd795aea39135c8ccbc69bc4a715cff54f2af32792487f9f038b74e3e21b2d92ada90d1c53956353eea63b3239e31c45eb69da01579e42d5b8b74a7020e4f9021dc446b958fd129",
  "1.2": "a257acae3055498be874c928:6e62fa6ccd1e3969f7ce33e80ce67f55:dd6b71449484e518a7c3a18f5bf7451d36321adacdb481d7c67010d886548dbf436109ac26f050c70b91eaf1a95384e9e38d0129b41055aeff1fc96e06c86f6a52f8b3e3e0317ac8a12e6389bb12e8fe44af36ef48ae87d0de3fecbe4c921bb0a3ea1ad815becac8673bc6950ee1ac7f3d04a0f9f1ea2725613ed311cf82270652e2674cc9dfc3031cd85018327f4e2e11761f037a0b526a8e9cdce1c63a8408a02785d3dee4f3a3b7ee72",
  "1.3": "4237379dcd83d8573091bb22:3828e962e554741b2a00e4f1ac1d97dc:3966fcf1a3797922cb005a8865",
  "1.4": "f8c59705b64544aacde27d3e:2acab66644685ae05d6f7b9bfbe859c6:4ad80a09253909967ec808985e",
  "1.5": "8a1ffc254695a85479326f68:ef6c09e510d4e0d9a35676f6b709a780:7eb6eaa44304c547c7f33ff8b7c062bfd34ee8b00685e350160a352d65faab80a148554822f05f385f01c5de85609d23b5d977de3b5b700cd96b9ff11d10722478d8f54bbff6dd0bd98b42abb951fa33a41c43639c0bc573444a67152b3664e610d4e2058ed9e8a8e8638b8b00eb4a0786011e3eb4fca3",
  "1.6": "0a7fd78a218624af6c63b972:f265ee11ec89ec672bc96dacb8306d9c:7bc4448843912e6634bbb95a1838d2dbc18a14739780bca6dbb555b471b863edb61a326b0ba7749cef9e31f3f6d2320ec2087f8e37ca3cf40a901536faa1d5d7c7fdce767824fdf22315b6b8293417bb0264e016ba890efeb28948c1e6e26e7510614e0371eaff920b6f7bdb90d54e748de2208721c7c3a5edc60a64ce0e41c18a1a0e8c57d0b007648d594da159cdc56f71de0429f1a198f5dc576da691af121c62f0c0533bcf4e24f0c84818eb25331a8b5b52eef0cd2f06d474c64695457ee8191627ccc5b64762f1df9bc0361c67698abb5377b8d68a1ed1227d1cebdeb3ad92f4c2",
  "1.7": "f0312cd6c4c6161c0ed8d3fd:f668f1ddd3581b3daf7e36ecdbfc1ac9:b8e6cfd7a712097df617f30811be205ee24d00e552237dacdb1aaeca486f873355e4add41732dd48b0637dc07ed3fe6f7d79f38c49474e20373795d9091f8bd13472bab4dd2477b69352fb2196a8af72e5d1b6f9e533a8b48d50f4d0739b63f39a0302a7ef2e90b9ab48144a1906bfc276b3528b0ee8b0d7912c5844b3a4",
  "1.8": "ca4b3d29d40d2fc157616fea:4e943002d8a7397ead150c9ba777117a:4b4f792f4e43ce08149c304dd40558bad9675b5e59639ba3833f3daffcf58b06ad87ae57c86cdf5bcc2441dca763efaedd201fa8b19b815fdac2a05302cb76d63e6eff277ac4b4335eaea671b78d02de6702bef09b491e5739716401d1c98f64c59f",
  "1.9": "d43d59b4ccf7b7f51ff12433:348f06d85b0a8f3dc49de44bc2fc3176:5d0bccbda0e08458cd3563d96bbd3649cfd2eff48e58f66a47e81aa8ab6825e3c5c1f919d390422eb2bb4a45ce7a35c441fe82625cd1ad461c1a12fcac4a794181f3e61c523bdf8e5a6dcaf667781a4d2d34e3411a333775a12a779b736cf35991091ec9bd327a3d711ea188df484f287457eec7155a44111cc2642e0df7e7fb64b89b7b5d73624e9cfa01b36bbd5b1956081de32efe2d3dfa8851999013ade9ad98d37defaa061006e6e616edf6371ca6dde51e6a35aa",
  "1.10": "831f79ed3c1873b4bb30002f:b9a946b48cd8bd62339b2c34e8373dc7:54d5c61f206c2afce50c23224ceacc0ceb57442ac7304d26434dd0bb5fc05c824298a03ca9f9f0289d93fe",
  "1.11": "10b7fbaf2a321c145c1b99e7:aae2cb067e994b67f5e8c2768d92e5dd:d6d7e739c5b945a4c4dcfffec5f21d3e84f1188bae8601fcfbbf055e1b2e3dd666a5faad1af7f79dc63abd6b4ac15906ed7aa379a3164d4c4061c4abd5043b6f38c01caf303895f2639cb518b0a848b60d598f608f81aa84667237106fa3060445bb9a5152885099f3472cb2305eb7a82074825d54396b1998f194d225dfc58480db5725b85f875ba9ef56693aed97824d9d07",
  "1.12": "4a1a648f00f4109ab5238bf6:4a3f2e13f2a52a53ec64e83766124283:d7723dc8a9b5155ecf379c076bd813b8084f5e3696031690c68bcacbda6b3aaf3cfdedbe75d85612022a6c576ae1869af04d3eef1f33e66dcc59de38cb5f112d0250e1f13ba8ee267068fe95548c650babdb4e00477cfa4a077ca2251dd3cf25bac5dcd4f48edb8201d62d09fa344619db66b6c17fa7e3b7f7696eac041c031092221b97a11016c5493fd0db0cd9545e6c22c926679f0689ca41b0a4a7f4f7e08436cb53f296417dea8a1de592963d71b2b5ac82f19221884e296fb5afb3e7706f986198829517267a15481180f0ce3e0ceaf328c5b5cf7165cbcf713fd849a70170a326c0c4bd84a6612b5be371df35f0",
  "1.13": "30ea4e47f8a89c1ff2ecb4ce:d820da3acc3ca0d883cd350e8e90bbb8:478373dc0c9b27555caffc0e3b3d604344701f600372c7395d2c504167ad1293846dac654730fcf8c993af449e65d4c7cfa5ab43a4fcb8238eb4d3ddc0e097461c9dc7b6b3a78820d05f921e07c5c2639d8088afb6b80a72930a0ffdedb9717a69a31a0edcd0311d6a874eecb7f0bd42d3f3d58c5e47f0f70e548e355b41b344a01cb12a8a42a9cda61b45a4ef5d459e4d2d29d6f3d7ffc7b838ce672c",
  "1.14": "cdeca4fb57a013bd2a3c05ea:afed5513865c902fab7122e71bd4e6aa:022e3c69521efec6bdf08af081670eec96eaef88087643d75a3a88b771ee80faa6cc34eaf80ac24ccf6e224217d4deeb86b36d3459d8533a7898700a7909cfcc177e16c54a74490cb526eda270419ba1466efbd03110237d77d1b767a62ec47b929a0418dd5ab04076c86f9b595ec013c9382b5b5aeac3f78dade70cef4ee0a8dcf2392d0e4d13e3abda891bcf28c6177a29a18115a3e635d7e6a8ab3d0ff490f64f52973dc148f1",
  "1.15": "54d7159d6641a4e44d30769b:caab6bf9ee990f50159904c50394a35b:e3a1524dcb30a79abe84a8e4912e9810b1675d78a5b1136803d7e6e40d9064fb29",
  "1.16": "0bfe7748831cc43c7d252546:6247b511eb5b4a581df6d44bd1e6b39f:2e08afba1fb5aa31ee50572f6430ecf665c993a78cffafa9646f226ee79f51ceb954da19ac126633fe38b8e7b5e9f2697e29c80beeff111c14dbacc0ae6349de",
  "1.17": "65c042775d326d926356a075:927c605785392407169dc0be6c5b5668:87e0866781ec2e72ba7a7a21322a339daa961d5eeb95021a6f300c55e00ac050822efabb4ea11b2bbd97594350dc14dbb4ef2b95e0afc1305dd52c8a525440526213a3f4e00bfeb6f4666def1017c58c37a4213020e9b58cb1604278caef908aaf9e43fba546683cad34f51ea712f8ae86d541fbed5351b68453c96de8055078e5fe72d146a4ca88574b1a3134f9981b8235630d541d966e264a2f44a8500e570ada4b2b7f91b3ed5d63f58661b69dcaa26f349087cefb1975bd01e156ee9b893b6a04812559c715cdb85a1ca36d43d8d2905b03f95ba4f4dc758cc15d5e1b9902ba88edb36bf01075ed37f56bb817",
  "1.18": "5637673f1147a3085bdd036b:6061c57311ebaedcaafa3c0276c472ee:83290581fbc1b7bc515ce6fc761267c9aa839ffaa1e55ba220df055737817adb8d5b7f62d195ff9d9b20768ebca7273f5718c70ba4c8a3b1a12bb6b562152f1e3f8e432d42b7513d3f60f64df67afa346e17f6a56a6a00b5cc62b8c0f94e1550ae9ffef7a140be66983db948c8e23701b5dd19de23cd8666fb2c8d029c140147fb187c7119b395aa9d0f29a6a7aa2c2c94fc2a17125b665d03575323a8313288764c4764ab7c5769aa26121b556ea607924be8d918bd3e4cdb13b9f3eebbb8afe243cb18f75a1a783114cb86726eeef4f744cb80e578f2c1572de5879fe657c2cb07817f16518ea9f98065c27930969ee4574bd92451f7390da5f1d53891dc61f23cc61e7cb28aacb834b8d73dfe847fe865892d1fcf09972b04dddee277bdb90d29cc0534f4f7448dd9866e0af3044d62d5e9d9b58ff0fe12e0d3b182ac256ceaef9c177e57ac55707f12059947fbf6d01adc2fd91ff61b6ce7ec7de79db4c9de724e0ef02ef113bbf8b8523bc2dc3ce8d8a1430b75882895d0dcf1bf032e36779f70a8801974065d77d0ca1833",
  "1.19": "4910a0c9f794b4c70d8b1108:a5f38fb057e8815440d1de6129541a0e:54a9a5f2e98cb83016329d18c4bfc6f0d5d1e2fd3d81a61ccf63ae6b2bffc2679d",
  "1.20": "f5661cf4364445d4677e8a02:95b11c680a26ef3671679248df9f48cb:3ad0ef38b104eba38e5669c07692b6ed5cda5c21f3be573ca635",
  "1.21": "5616deb0a3767ccb255a6dc7:8b06e599291d7bd8d2ac4d136d0603bf:31723b26d9b29c977cc150d68c257677952ef2b7c6c0a7a08a3b492b89867fa1dde5cfe16a0ad9da8d0a9fce29b3874efebc5a97c1abdcb384dcd0658f4dd77fbea7907b796e3ea892dc31da031a27dbe2cec8b6a922da1690a526a73e63af1e440e00d2e9ab752c86be73b99e5bd7622e8a9a888625",
  "1.22": "f4c8f3d6b95fd0fa4ec7e2e2:9532d06a8751807396479fd0a49395ad:c230ba129da4b91b2673d7b6f20929f1a298fb4cf9d6f69cce33d8fff333098b6b44aee091284d1b2a22db33a42501fe65dc84e07b5f4d113a993e4787fe744610ade34901d6b0eb15cde86944302ae2f1371592923eda8b226f270c3f5f87ef1739b5fe5e5be4a78411f65448edb6a24e54c354b29729bbc828c8e4313b2776a752a02d8162b5f07beaee4b25a683a7d2c5e9024500428b2f36c1835970703894e28996858b58426af302ec799855c34be450f66b3d489e948f7a3372638f03f109d3197dcd54974a7b",
  "1.23": "48dfaaba73c293c3674ce0f5:21ad29e3ec5938cc5d13afeea0efedc8:42b83cf8789288fa5a9805d3fd635505d69422a2c415be9df03f80a0458f8f513c3c082c0a6f57538498cc00c69c409e87f9da9e3a9d3b9ef2a4b81eda0e21d376b227fd5d54b3a76df8e5ef3100bc2b215b88927fca11b79330ddf742b778b2c3182d05ad12fd5a42f62711f620ea478c1a617cc75221015613778dafdf09c131ba9347d4",
  "1.24": "8c6ab815f5ad5da1eb932ff1:24418024e97aff7a3186707ef41034db:4fc8a04f0e9a357f47a08056d93f57bfc3c37b452f9e3c48db53c65437c18883d6666942f24630ab13da4f3347a46e9f51b0b3c3654fe4b103541cb0a192d1006a2d57dd85adf64ab9baed90e56fedfa576ae3579a2c8b0aa49f7c06690bb8a32cac84bb9be27661cc1802db8abba90da8ee87ded2a858b10e7385804a9104625113604b35faa7121844c1c41f6b70e76bd919",
  "1.25": "7db64ec93725d70c60078cd6:5d6dcb2a399c3d77c5ca0e41d483b28c:c926cc444b9a0f82d42cd486744d12fa5fe907c07e3912ef636ba59e5ddda1731260fab8357a9288e670e1625b2a3c2669cc09a9451cf29324fd345d1f0f1c8c9c41a5e4ffa43a1f9a19c39d10e25d3d925bf4eb6a4303ce4a5557723c85f17e06ca8ba6fdee194baa4e5a4c9b32fb2485575a802c4ba447a8c3730112cde44efc18b8add1d53f06b3f49b71d2ab463d11ebc49682c7e835db4e3d5b0fa25a4b53735ac79a069f09ae04ebf9e05a7aa0aa9b162f9ec10a5bb5eb875435fbda6f71c4fe90de05712bb7ed29addec0cc1af9bd4da66b7b68f8d1a3",
  "1.26": "7e36386baa16a5ecaaf261bd:206afde07ecbde5408c4afb94f9e1107:c3e1d33505455a27dc03c0db39d3e9fb99a85dc9222907337121fd5d8589f8b95fcd1ba07ba7b6e842f815a64a90dd16f54b696fe63cca0e5b18e811365297a5e3218decb6c611c6e2146e045e24090438f7060ec3c03158c41a4b37bd4a8882ebeeb6a5324bdd5ee6e7fea5ae26d7f0dc1ad16b7a4304a792b68e5faef8864435a8511ccf3c582a0fc1c6",
  "1.27": "b46ed3981220e6a18f937d55:11f1a460fe3e73d9d62b3531b016f110:de0bd2d185b17e7d378b9fc8abf51d5df7f32d68261d1f90f5953bd3eb41f36cf48e5b42616d0fba3f4e9e0146b72afba7593a1499ccbc0069cf725432b67d0a90d3e737adaeddd8119f0501d1ca641689f94201921d84d162dc1cc49a1bc63f9b88e2fb1e6fb80a4fbf0ae144ae90feb0b86431722d9cb8818e14a108ef1acdba23615301877214d39acf4d85f74924b7b1699653e80ee51dba10de7187abe2fb6247300b20eaf8769fbf34c5461d3f1b13e078dc8e10e687a3e647c7799747c643c843",
  "1.28": "c84a274868f1700bce544430:810d3a377cff34859b68dd0247be129e:0edc05af03017750100a5e63543f80ec23b531cd2cddea626f2338d054b92b1e9bf55c2c1fc21ca5a450fae3a8e199bfe00a2beb7bd851fab3d0a2ab3f88758f20e0eb65b50f7c9080b3c13b115d23136bcab06df390d54cc5343b6d6003a70b0a50f566fb56cb0ea8928b3f6c19f0a672b1960859d9a34e8e569b13cf38109f3477a270c045d89f0f70ce939d8c524c25e32ff01f66c8ff2cfebc55b65dae9093b86503eb6f0b1a5ab6d758df039d3593b54bbb067b5ea6809a96574d538f6b5fa4cf58bc07da68978793b629f5768d6ea2f689aa5397be95ed9705bbcaddec3aa6",
  "1.29": "9d5ae4b61f3531402913bfad:5b6de470e34ed651595b41937697d466:efbef33e2ec6e7d66195e9cb4de878889c828c04d2fc4e7b59cfc7977898d74e0c7b7a9856f97f03b2b591d355822ca0ec3bd684f50aa12b0f0c7d25b39c5d87aef3f42192d4b10b400de61bddffb0096c861abfd497129ae19d69e18340e0f1452bdf7ac2797e36ec19d831b68ee7c637ae9917653e8a4a15794924004df1cb5d482a725618d84f02b90abbd420556e22d38005586de4d490345a74442b0e8131537fe2c2dcf6f2c7dd513a7faf3c611170aaa7b5a1d9e80fdbb9df525930646870",
  "1.30": "46218ab2acae5771161d3765:01b77dd38ef273fcc7a8d86fd44a2053:800c61536760a4a67f29b6f5aea69b4dc7065928f3435b63263dac91ea32ee8eb6263cc81b6117a9ca7e76169ca301d74dddebd3723bcf0c05fcdaa1559f2ecda93d87bbe569a21ba778c6949818923441bd2c30540f2cbfb37d3393913be26fed5d99f715b937ddf021f24ba3146c98dc95a0d8b46b63325ce431b3a3cf3dc7bbecf49c289e651fec5a90a7323c5e4c45b55e703367445d15b3c106c9a0df4e6103582fdb996c3c66e52ad91bb9367526948506c9eb588d6990eff9ee822f83febab9862367c7fd5d323785ff6564165e45af3e6851f3720f717a59a49c2d49571c8490361bdc56912940d12acd1f9ca0a996d88441cde5357d0f015becb024ba0b986b97af1d7bacd80543927c58ff36af4661d54d77c3745b40",
  "2.1": "761fe1d7c1fb2d601ad24cf4:8b32c5ce027c1f35001cb8ee02f76f9e:2f52fcdbf4c583788511d94568f4dfacea62be63b535270f97430303b75955cb8e5cd29f3b9b978a7571909fa7bdd4d44d928e2847022f044b780fe38bd7c1e6a516e347b2acec172f",
  "2.2": "fe913d2a43d3412210c8d218:f21bd403831246a81b77ae37b4219400:fff35059a634434c8ced057ca8d1d48846ca24fdcec783dc5c62694d60ca37d448e5cab18921ee8ef64d0229e05e89020c4f520ce82dfad0298253f52d90b95bf5bbd91c13295edc228167d46dc64c3bf6a48667768d5f603795faee468b32166ff3c256aa66baad289b30da061ee81c370ac82d40562d1d794168f4ce3fab83fdb94cf95f481487e99381cf6e0128ec157e4df89f1e4813c10743c242e91fd99fd39f8eae564f851c283405602cc7a4041143a109832371e6d314c8c2863f68a088a8d9f0de4bc6bd15dbf46c297d211bb5293f79e3a55da446fefb6ec545f3d4c9f1ee3e1ca5565079ac61a90488e4a8f3770a4789dbb56f87e7d86b356d3fd763ff0e15e6130d7c9e03f0c1bc9b384d9f6865672e49c088a5f1d01b86f123985f07f765a99dde7dd1d232d424535b5c2833b87ab193bd46142d8115827b92baef9f826f9be2d27d9a3c149e3b2643fd53ed5a98003b58c96cea6b07b08c39ed4c840391bba82f3bf2c9c8573c93d88240c1ee9d47e4cda45b313a8160b9123553a30030b7cdc266018c",
  "2.3": "7ba8a8b204f7c1e88cab46c3:0b6ecc2d9aaa33039330324699c41f15:f5116b027109bb9f84ae0c9a4f9cc3aa9705127901503004e5ec79e8dcb15132aaa2e7f9c04777d8871889e72e354f44",
  "2.4": "ec53e2115983e1012b0c41d5:0a2f7563de95852dc62dfd0355f33d01:9c0aa15db49413f664515f856a6e813539dfae4e6018d1827402025a9862ba4c0e41504ca3edc2d14afa0ce1121088bc14a70a9e251853d1c6a3cea4d8b3f23ff5bf943432c9cbfd52695e2972988835ec8c2f55cca3bae00c07b7a9d4e94733efb167ac294b5b0d0a2f0a1eeaf8b499fcfe97da50727c40f6e06f8605db6727ea57e83e975d39f41e63e18e91f5ccf1671fee341405b0145b0c353c035d8938766b2ddfb4f225fd0e87111309e86da9d2091dedb5baec0509c0e725fc5e39b2c4466a0eb836665238eb87a638d2a47c0d623f12cecdd6543f0bdfbe2bae5c3b9f32183254caa3342605b4375e297a201791409bf5e8e2e955dede7869a75a2ec2103e4ce58672fd63fa11f8e65beb47539e22a2eec5c292f960b1864b2f275dd04a153bc912d78d877e94e881956c90337810a54acbf09c6bd71fefc5be8c2341862cb3ef04774c5c22f963cda3acc592c4c5a860f880ddbbb25ca18d8e9f",
  "2.5": "01cf8087fb0aff45d4c8adfb:56a1e66694dc7307676e21ff25129fce:c4feb88beff396b0c26efee3d148d8d148723395fdbeaebbdf539f891035bde5d76642681a21694ac012458d577387f7141f44bec7af13a279acf88b11b836a59dc4c0d7a8fc51f23defdb2923c9f494e449d5",
  "2.6": "0e2961ea4d43e4672c6bed93:caf73d3a19a26f138b2b07d623818811:81a62cbb4e17725dade9b7dc867da476656ded81b68bdf1b3a1e6bf80b08b3e0cfebaa293ee81ab8b92d70216e4827698c038acf4515bdac4227795d69a9d6e5df87a1de91fbf501b55fccc0cab717850cb2eeca3c71e3bd72d835b33b74",
  "2.7": "3b432a67765fe2891bcc18a0:5c8696671739bec8d22639abcfd37c9f:682860891a3486fe79463c59f4c86f23750ec1f6b0ea97ee57fdfb02e377d7931bb944d626f9fe68e55c89462d4c4853c41274de288505586b71dabc628a7f95013f5aabb60adf35e7d0af5dcdbada7a09064d2ad0aaac62f646f6fb7269dcdb0f83ad0cd2b79a1631a6a04d5925fc1749081492f555d2d752a5453806fce5b67793120a528f77d5",
  "2.8": "466e8cf4e348e18547b774b1:61f219d66aa3c8c7879963c890a14810:f40d5436e73fe8734ca9d057b11f6428272b14e9858222322ff428850acf919850d0b6d082af3490a3fca3c7795c212be0a8e31f9116401ad66bb1104ea8e36459e409c79b7a169d731d2fd21b5de456f0f5205cd02b38ae8987965a9d527c6c58f80320ca32e22c4868f8eb40a0fb3a8cec80db1bb6c427221b2519c728719be5929d8a40c9435c0da1278a22187ff6644d03e15e663ad5f110f74724aa16ad5b8ab129a1d5cf06bdecce1d95a880121af232f9adfb8f0d06a9655cf0da15df3214503a9c594fa23e728869539354a306e2b2f7393df4920f145a7dcca129b5c8c65b448f8ee8b08408e080c2",
  "2.9": "ff62c510a5b980e9b0eefb34:5aa8f74f83522b51e489e196ac0fb9fd:64c33c1cd79d21c682d4fadb1c08cab22964c3467c0d3dee739946d689ee12d02a9bc75ae615c907c45a01a168d15f819d0353710d19621caee3d5e1468596524828c29d563415540136187b77b04d916c23e56aed9e87ceeb46fb5c15d023e89912b21becb3e39839e7de157a175df6b2b4808aa22f27463b943304cb2581054c9ffc2798f90da29cb0c0f9d6a7c54c311dbb879e210639bddbdcc1dcb1103be127abfa9a24c491a6260892c3",
  "2.10": "a15bc9308b3f86e1ca6d5c20:f3d89f8eb2747154215f62ef91d58f58:baa045352c66a1a30fc170b8df3537d5b02a4f3734838e03ab629f9538c2f97599e406b0256997e5c32e576c3e3a9747567a598e708f06583e741e78b3e429e6175933cbe397f0988d6e7983c3d31d2e918a44de073021d2ffe933d2d312a91ee2f56d857528b80e610205ce3a02e4dc1fd6e4a305a38adb1441ffef664bafeadf0f1c591001fd0a6cb16b97acc4ba751cc52eb89631668b415285331542e686195f5667146aeca13f8c41c53f95c21a42d5e513659dae2ff491c9255a33e33f7de32a8bd3c31e8def8f189fe2ff",
  "2.11": "b1505e5f2c242d1221f3dda8:b5c5565448adfbe690f1b345a0f17da1:ecf9ef4768cdb2527a60ee8e1f266dad5137351ee517f3a070c218ecfd9d27a31feda88451acde174b39aaaea7c934478f6b91545a05abbe56becbb0c1e43a096f3525abc98fff2128329daf7102f3f6e9969ff11b521c291f07203f91c7384b057715326816d15316f84dffa3fa40eebf01d17ac30986a7d87db987424888bfb094947279802bf49fee8d08773eb23e9a959e46cdb1bcc5c3956b7c472fbaf2576e167c1b4fb660209329324e32cd4eb1778fa83ac8b236018c37902a86ab57247dcd17e14db688",
  "2.12": "e7918d32118e2c8727655bd8:943da33b2baba0358c46889a136bdfdd:26b2c513dc333eb2a60077cfd100e6b5a12c596e47ca798525cc1b6c71897ed9f5d0afc8d97c1962b629f7313365cf9f712d03aa9b7871a624200d13b02fa14f319b73d3deff95c0c8c87940f2ff0f1877c2fcf1953e5c29d3c5209ec65a1ea5582b3f2eb339b7c0c93864932b998c10e5a1ed39",
  "2.13": "7e45a712227a87b65f8df778:b0e4b09c869c29b22caf55fa289329d0:70b270a451d16ec30dd580bcebadb476c9e1f2a006cc66c70b08f5745e561337776d3d63ce8fdaed8b3e0e84575343032e00f045c2bb6c74be1d9a6d788266434894dce05c570b5084e6f51a1706c666fc87eda10e5f7b895a481c4f606b725728bd239ed1992e2e279d87f985018c72256e022e8a456a4eb663d510c81b57bfdab932cd2f7080105cfb6a5345f75b08cd8f70fedb2e7ef87f7bc17355965e3ed3161191b86edb39c7507b43c764b0522ac8d938bdd4185ef2b69e0b0480d1",
  "2.14": "999d3a97574d704874e82f7a:b49db10f806a26bb14bd3176bd3352d8:86b166ad5ef25eddc90722b15bbe0791e9f0231cf2036a91d02910182e015858d6b8cc4b1a257ae088db4a75856380c884cc8cb2b4a6df37beb26afca0568733487f014ee529f837b651315e25afd3f29ae7b1b0535aa954aa3429f83b71efa06f428ad32d7956f3aeda09e86609f8985511a33019c0868ee342f041b24e6043df2ccbad176e884f0cae01b8680c085002c2dce067078196346aa68ad777471c68c05b16b8e758f9a8192ff17fcb808890beb330e345d8ce4a47bf784f8316ed3124302c5dcfc5dbd96e66a80ced6a53c67982f5650c2433633df99f9640e310858226099d1335abbc79bf4f949d77237d624ca289ae64a08dd9b243bb6c50c2dead83456e8ec96acc5036541713271d3eed5c1b35bae5acde16953ff56e97ebec773158b794599bb8fa60aa2990d94ac2c925bfa5473b1777da2ca29503dea026ad0e23e6292992aebd24d7bf097414e5641b4feb7cbf46220fc26eebbaeb47f98a79f4028c",
  "2.15": "c8480787eb5d937831112785:9bb1354d60a15b334b3b8d215832cf76:8dd50cad9b0e6a11aec6e798ab88bb85eeb8e471c9f921d6188fcea57cbcb422a021952070fd73197d8864bf98ff49c324248af1d6177cbacdff87124caec096c92eab69e6ffcf19b96786d037d1bec2eda21db4a667dae301322822661cdede71ba1a6df22d2055a400b200d5764cacde99313b2a0b5d50c61db3439867abafc208dfd98d6abedf348d0b9ea350f3a3431e461c4cda471bdd9d3511222f2a3c3caa11be6373a02992906e640af0d191924a624eecddf135c8a7fa24b2479ee2c2766a0ab54d76167213a3ef4bd06bd5892efc742ab2f6dd3a65d918253949d49623917488ec667c84dfcb36b4d2d9d4bdcdd890dfdca1379125c22887e7767c7b5b0504c28e4268e6f94f83f5e228aa417561f5f76c34ff9fc66e0e20d62b3e530e0c27ec1283fa6b5d640e6b44d99f130054e1fc5e56db82b1fe38c13d49da2c17b57dfb0374c95ba45f7964e24965676ecd8f4a7ad1ba7374b319d365a56daae301ed07ab808b",
  "2.16": "b6f91b2ef0de7ecca47e41fb:31752bf408715f3d90f4e5a3cb1fb7b8:56058ce3fb614cb56ecf61acd4d7b5ef613acea929c8e613e40f52d1a507c4846e868e0fd2cca9e271efde0e759d0af6de92d4625eefc604637bc1f243fc61616a78fd256ab00af9814176d03f574fb8f44b427244ea71947459958a729e3c4242fdecf591353ff9f8eb34b0aeb1acaebb7f464bc9ab52d8f57e56effbedb8d8224e42248a3284ae66ca5e3feabee6fa7bf6ca14cd038f193ded48fe3b8c95c38b7b3f824dedcf521ae7360b14d42656e4dec6cc1d19673bdd07b8f0f93f64fad7ff4340ddde3d171b3dbbfcbd40b5e11d14658baf3ec2bd144814b5ff792c8627ee506f29251c8410e3399e419bb957441adc220011673df5fdf53bb7ee415371ecb33602494f5a70d6cc82d370e92da1f951b327d8ae09c81dc55902b0fbd51f0820e0522cb2651cb2b3e9abfc9188cc1475e1de7a3ad52022a792f2e87e24be2121188b0c017abced76870e9b3177df8ede600aa63492edc2880e5b19b0570390fa33bc99cc0cf0c6e38b6788a02f2d5138403b9148552bb5035663b98db882540c5a7129df0717be9b4d3e692890a8dd58a2797463641d98d8a832",
  "2.17": "88922a9be7ef8dc5e887cd79:1ae4d11f26e8f6b8638f62f5a9085e07:85244828ef20212a746ee75d303c7720aeaa1514bcbafa8db57fd443139e2488ed7a7d30d9ec869ccca8747f6b7e6e48f4a249a8e0c13293d80fa44f82ebdaf1c38965397dcd70fcd73863a35b67402a645a9ae562ba209b913aaee5c01c0f5eb2b89978c1af87bb0880f8c633d4bbfe78a7699dbefd79ff548b2dba249e9964ae2eb96d5f36f21e4e1cabc058a3e809dbb3091f4d194fb900155d496bc0ed4962c9abff4982e90f8c063bb5cc158888b993898936a82ded919276a3246ea628670ebe0ec90e875eb615fee37af29f7f3c31e668fe09f103d1fbef4a4e235c4d2f1c609ba825a554b3df579f7dfa25d7e34527adb245d8fd976611dc62073f999b325c4eb12f307acbde194148856b042d22bcd19359adcd8d30da0659479c394fb514f701248076a46a4da2fcfe8c05f0d111f1023bd6240e8029d5",
  "2.18": "dcb1cb04ad94a41e5d29f168:96f66d5c2f61a7e7b8b7f515936f85d7:0518d6a9aa41309ba7f3add0203fd44341e8b9d1cfe504d8627a70871919674a092fa0e4447788dfdaa88291180e1597821c423b1c175c77f79202d086887ac903b3ef5365616c7368226dc0e9e9140c2afd503a55c3fe0331dd1e6e44191893dab5e19d061ad92ef43228b8a84e7d1a5ece863c31a3186d536c3d6e02101d4637c8013b87251db5fd29001eb3a76e8c5e566da13c4d9b04cf6c799eac42bfa9996ff1217ce3085e058d1ae40d8b32d556ddd7fe34b7960edb84e7407159dab15916d8350673116405e4adfec631b96e5694994d2c3068",
  "2.19": "00d98828c8160d89ce2b97a3:8641a172bd6956cef2ff77786270f599:49eae97e57205534f653df52da7b1302bcc8e1b7f6a80916cbe4c99e136b487d40f5cb2e01c58822b261b1e3ca822430104cc0ec5c6b83b0488dbe64e6ed82d7b89a11aff2c6296f1650cdb84e61bc7f66b46a828aec41814455c3581d891a923f3a3107be6563664ec1c58b825e112a3a307f490e833d6ac748730ffc70e60ee5ffb587dad3005d6d65ba31408d3a57b3bc28218e7a69d6b95252330ea82362bdfb27bd801f86c5946c010a319dc9d29ac9",
  "2.20": "d997e684faed8165ebfe29c8:aa1b4f4ca0dcf8db324f09cc350ac916:7bd0e924c1cf5b97c7db5fbb080d7f334a837cc0e48396d1e6c76246fe432c69a453c01e09fa82d38efead1b46629d88c2368a85290e9926c0d32b23a6796a159ad90f55ffc8c0ba845d7d7c08d7774a79d84b60473414dc0c4bba9d53425ba2a9c49e7b95b9a0f7fb1e50145643d8aa7a4928787ad7979f48f8dd14e6d020b055ad1c82748581e1c8f8187143f56803975584d8126a707d338a5c255873899353bc956e37f6f2fa47e190bfbdf0756269e02263da494ee2ef1a7f",
  "2.21": "6764e48f18680c2ae8e0aed6:1eee4455882c4654035dc725add861b9:1c7080da784c371121624f976964e00d81ac115b585fc5b0fbb29e178cf1b8e19839e9df58f306754b77f3782bddde21225cdf92133012900fabe13e8cc56c25c89f3b46a38fc9b97a2966222070ee2ef9d1ccf875883026dbc90554c0d49ded08b587a8af30e35c0e98002710e45ed132d20a8a613544267af0ce3c3c4ce84d6553522c105ef76c3e5793ed005eaa437a82b51c26dd6b2128afa08663662967788b2636b957a3c94d7820ef5690127e5b462f9ebabaa1fd4101a046382d52af138787ed126074e57003837d83ee0d395fa6edfdddf75140aeab19",
  "2.22": "b45d42e023d70c0bced4c170:100642f852f7a62e1759e232c9b7e75c:da6038add2d4b3d70f145864fb764b54eba9d2b1203f13208956391a7f254de1fc1d9004bcd9082b48eb74ce9a8dcdeb0effc59130add1f3bd887926a9abc7ef5b5679f2b6061ff6c5ab86bde0f4b33b5f6242c978e81fcaef8f41d68af0c646ec7a13598813128fa3f8281cea750f36ae75b8937a2d7805b065b342564e1a0b4aea14b09d2d9e153a0788c3ea499f90fd6927f32d2e43458ffa4fc04b342df06354942a7a4dbea4a2a65a1114dd43057306f50ce699f16274e2410871abdc0a8a8dba275dc5126612e4f4397e45b04a92cd9d590396192b",
  "2.23": "659468aff945c3430b6db94b:d3fdbea455206847ed598528d86eb9f1:202a0380cdebbc3ed408fdc59bf3ae66d12fe56e984cc05a21d250a0a81fa383dac9fe0856a87d571804b7b03097fc1d8ab4322003db6d6483e08a43b426f8db7d65c5636410b0e3277ff58334701b98cbd79b10473ec4fb32d1fe5f9ab1367b2703cdc6c147b91fb1fec5c5b2532bcf7fca0a9a5d854de1cfcbfacd7d7d4f9e38759c62799de046f411761b82334095c16f987cb8455525d03bbfd955c69362391653bc7ba6e01e3ebbdb3f70320e754b624b80238dd9791b514a3352d8177b515a5a6d1a055a999e23e18d760946aa9d8324ec925fdb83f969e9c243af0ca8a80af93a53622fc13814b64ae864f7dcf1377c27d06d00654275a934fd2898d8840589ab6e",
  "2.24": "3398ec81841238ee9b7a93d9:a419ab3c83fdcd9e447909c96d565b61:f8d0088593356e92f00f8c47a849e9db0ca3b826d1151ab41c92d004af66383211b932eb4e7aa09c07c985469c872204be18793ebd7361be1a425db32b2fa1d6ac631ea60aed31b0af0c8629c9728bc3b273fea7ed9615195703268e55e66c79d991f8e6fd01289d1eb91198041ff5bc205abf4d265b39a06f6e1f952e09f454eb2a484f005a71eb10d2cb1ab94e274dfa589b4058cdb6f921a43404a5708184e395ab33bce924160e103ca5633ef0178431aefc831e9140d86c48a883be695c7a65a232fd1e16c0215e2ea26db5db4fafceba4d9d1f83cc83e155454cad0805bc0ce7d86aaec3d0b754b565fa701791164c07910736fc706c12f456230631aebe5513c03ea72dd593435e306e81f6e8fc9ee0a77a3f3a7f550eee062d948d1d72548a2bb06215b38c34c4f3fe4343c2cb9bdafdb1c58a270bd96720cc128e0026fe73873193bbbab0a89e3ab7eca660f657af787ae0f8fae19366b0292f4f3c15985c88d56cac1fb00b82b733f4f9b4256e247690736f8682e0fd807b51f64dfaa0ab30cfdc4d40d613678f413d1d48088682af085785cd88da00fd8c135a3f3405a49fba32f6c0db31f2ebacdc5e13729951a29953e68415ef70168107e19f18e3f3dbf803f611d47367c7ea2174a5421caaeb3d52c50cee74722ea6746176bb60ac925e29d14641ca24e55353f149ea4d95f1c48616d15dee6c365924d5291fe831af6017fc833a8ea9e6a45be68b5ebfa039",
  "2.25": "9374d5a150e2f1abd7776b6f:959293c5783a064dddc0b48d54d32ab9:528043b13b049c100a994fd4223f39ec92c5d286903b4472eea4d49cd53740402c3a776353c9e485112d87361d3cdec953811b49079a96187b43a70d14249dcd9e922228e1aa7f91174020b4d1416a69718d381d567d05f31e56ca179c2960be8de87c206588e6feb45cd4760e82cc8a20accdf81f9b6dbbb9925b02b762c758a2680611b314ec3bd26710fd319adee30b7badf2b61ff24b15af8a39ce2c888508c94fdf24fcb39ed861c177a4b2e99f8f41184d3598e36f23f3ba369b827664d0709a6ad7639abcc56f9278ebc77a622f7d9dac266a4e8d655ffd953fb478f53a91593510da5934220e54286cac94b37f1c4ff5583d081df4ca94b57b2d60f487db53d21023a1dd271cf11fe8948062df929e7fd0bd1c",
  "2.26": "d69a1e18af4c0b52dba3ee54:9538f07e929075bbdf9a0f2f560728a5:29b7b0c9f957df30e560b19bf8fec02fe68caff4f4774d347c8ce4ed942540b2410277aff7768e06e723e28877f044ff011257843728986fd3c6a87cb7d72dc0643c9f0b4a2c721e7e2cad80b0bc5e37ef331fe84a9cfec5ab0ce4bb84ef949093d3358ab7c26eba744e8aa8f609cb8d6ab62926441c41ed15485174a7df11e7180389c669a553029095e6f06971af314fa99af2eb7ad7911055261f31db75ee936d39e7c09e81c17835b477db0261b342b8b62583e5c2ae903d1c25c2e0f4ad34d73c1267b096a913eb2218c6f99ee030827998b0d38a5528ed4eb87b578e7e05aa570029e348927e3fdb14a4935fc4438c91824d08d7a59279a960a8ea888bf32ef4cf4e7d30ec0dcaf5db0670878592432040dd8fe395",
  "2.27": "e7b60b8a1dbf6b3c2d4dfeea:8d3aca2eebfe93c093a172ee9ef42c61:ff0161432c5c02152dea0f7581bd715c492982757556ad2f7e15c49a51fcbe0af9a01edb21856437793d4dd30559cd33b8d4eba3a249fee770a6862477d0bb1175e1108c1ebb670d43bf07b346ce0878b069702fd7cdfb2c9cac6abe21b4",
  "2.28": "b243aa2983fe1ae898de877d:e62d59c268baa2f7fd1d9b780c0c5c1e:8dcf4e918bb365f43bee655df97fd5882a7b03b8c96fdfe053298a20f51d167d27734b8330ae805be11f8091f355b0cb9db984ff45974c6c93e2b5af117987d7968fcae003bd80e2d55eab736621caaabde54d36b892e00607ea55e5b9d3aecbeb76a4ab1d00a8f5bd17883fe19aa2b6974ab94cee7b8f832f977d4277863371636dbaa2020f3e8f3a2f8500232b4d36c32d16575ecff2c3941020e4685788486b4d748ffad71c062a1aa8ca9ac3e815943cba39b18892a94faff49e3e34317a5462df83de2f1473cebc011633da2c1c6a6c8ffd70ebdbed9c095a42ea2f16770cd7c9dae0343e8b70afa1e31a9b8df54b0b0bd704b5e7f13d784f478dbc1806862a7e1ffc797e41b51c637b311c22b00e1e3cdcfb6fe8910946cea25598b9195188c51560d9ad3cc010a96d6e9a963cb5456cb93ace19fe2b1e339bee3c79bdce5da53e13",
  "2.29": "07de87cd1362f2524b5745e9:e731a86bd504aecd7d5840587de81ab5:972d374238a064dad19f08d22759299f05bf54c88c13292ca53cecb2776b203611f43502c1e7d09bc4f6320759eb8614b63e90bbfc563099617f60238d00b627e174c061a33c7e271fff5e4f3040a7d227ffbe611df61df4834b13653b12640b7b85d5bc7583430bd92651afa73c6140c498ba2ccce559338545211cc2294a2d81f0",
  "2.30": "9d5a2b15a2929ddcca5f9ee9:45cc9e2357787d3e51c8fe3d50c8950f:622fb3b787bedaff754d0e565305706022531dabc4ef03b904e5bd479b31b5477840d55028b6215217801e22a776bd1b025949d0287675013214754224f91888061891b5896758250315549e756d3fc5add8e90769c9fb0e67b1c774f9d0a513e54f6a923066335ac509eb30c620360f20ae2371e34481ad47b2c5d2c0667782b1482c93bd0e9355bb012525bd80b75a5d6ce3828d3db0b4219014623c7c2007b3c787d60815375d048147bdfac7fc347672d75968fdc67d0e8596de4f545997206ae0eedcfd995851cd94589441264781a1fed2606bb311ebab44",
  "3.1": "0a7526171f422705f0a42591:e06e2295a064e6998f5d9dc322c5d322:a75bb129efcae8cdd57d74d131490d4e49f6e97a64afbf10e2d8da3c8d8751d9aa20c942cc12b6fda1cae2501ef116678199e825ab3e938da70f0689884620ce673bdf9557861f4c99c0946221d420ae0fc278b189f88caae03dfc4519a3b87f9546a05420d3520aea78ae27e3d78f643a905fff545d0d4e5253afd393aa5482ab808f0de1ba835c308d46d2f15b467af1cc9bd79f7788d04c2fb6887f55baad5a0a94bf82fa9b3e0ac80efac5da9e933660d60490f46a733d03078419ceb0ce24d63a",
  "3.2": "bea09095ee7a49a906aa3bcd:4b7b995ab85862098dd1b8bd8adb2cc6:1b3970e7e6f4160c4ff4a0d492172e6b2e279afa8fd01cf9bd1f26bd4e48fe9d9426a4d9e1ba136f6d9b325fbcfd4b108f78e213b9a2c90ffffac90e802f96ceeaed3f08d55d60e2339af2a91dc918f1a2f91445dddb249a73a9e72cc59a02d119caf79133d0adbe487f21947ec05f0948bc57ac75dc9c97af33d2c2e7d35f04f1360c0af9c8c4ba8b35912d36c5030eb2abac649415392895ddc51eb70cbfc29b7f680629887a176b00f0d76f2254980e936161b58f6801f19f4e70a62f19b776bb05e808b01e12faf34a7f65563284663a1a3e0a2c594369aad0338d9fca",
  "3.3": "6f817ff4621b4f1d8db666db:09bcb1242e90e1a698320b8e6e48ca6e:dfbeb40bed7893ac94b1e586b59ffdc9cdf2043648e467d3646ac9edfcf838454f57b20f182a71d45e6f10bd61114426885c99979d80529b611dd53e0a97af2c493400db56a5406a7611be2db5811fb3c2f85941b473f3ff6e3487da34667247710fd46d6c9111548a553854d86c2c98b3ed851199402ba6a030893a0f91473173bf4135a602170f6b4a4787a887256938a68a125073dd41611dc0d001bb8fb60e1c3b60f49d062b7f9d602858c8fcb70352cefe2f8420c28d171a3624b87c8b4731e2f388c38d7696f30ba65877fb2924f7652046219150a564599f4d14d0ff427869725be812246678348020abd5a29322146ff36cefb66a39d9921ec391ba3e8c7adca0088f39fee47cf6a71da40e13ca56ba27b4999a1d71b11618aa3adcd909cf8be95b6558e271dd3caf38918c86eaf30b02ed1f6aa46ce559265c2377c94ebeb3fa",
  "3.4": "a7570df1c6674a301e4f398a:3d4b500d9ef06129e5a8b154760a2d28:0943a62bbaaf6932af2d882651c84002f73cdc07886ec2757b3afecee45f9a581d2c595e8bde9a6c092915fca84d59db5d596ac47eed9c3886e236c1e887c27955e131a99845492784cc3e55",
  "3.5": "e1628da1778c41e464177d2b:6d6e1899df13813e78096b31c105ff0a:7f4a78ba80de6c400a4bd531310d59e3a48652b0c1348a72be382b94e93a8e0647cf576f37b67ccb5a7320522d2e36db49cdda9904134dfac9fefb514b5fa9194afd5589c4ba202d79497b06ce34a31cab",
  "3.6": "fa7fef024f4e37ea4e967eaa:c1158b2fd869c6b4d53b659b8e24d164:77c4a16d6ac1c72880a74c5758980fc47ad3de4c8569ad35cafa",
  "3.7": "00ea37c0a1ffe95295c86a5b:c0200497a8dd624ee17e9b38e00f6f08:a2938edb56331269cc473ba1f049f5645623d4749171954ee4c5f72f0a318e9f9af2c2dab72e8761dc257def734da079d35950d90cc5c7aab2ee54c5a9f8a0930a7122bfc3dc12140d5a2273d6cf4e2afe97f71a9b6bfebcc6559c658ffd14935c10d917ec03a27955394ad6e3d3f66e514acca90a27ddf3890401bac8a2c2da382501c685a9d66fc168277f65ec32785c66522bfb69c097ce85c53742112e66b42eb18a8cf1e51dea",
  "3.8": "5ea6a343292d7af93d50d806:6a6776345dcfdc0f14cca34ff58154a4:da8213cc48551ff54ba6bd027c688a050aa79ab23b09b5741830155ccf615496423d75f8dc8e980ec928cda9981e064f604598046ca48b65692d651d8afe6e75cb3d4c665c90afb3d1def4f1d2d4294cfa75fe772888dccb33dcaacf043e866de0b4b7713cc5b08c6eb11843fc1b1fddfa97a445e60cf5df979777218b0d54c0ff56b351230dce2d7d33a9bd774b438c7f5a635f41e887036b045fecf59f",
  "3.9": "41741d3720bbc21ed79bb57a:441c94bd511db8a7fd673e39a8440ee2:4565c62d1404032f242a5f33765ff2cff4fa5583bb01232557c115ed35eb3d6bc33d241426e25ac1cbd48325b0abce6ee73282a85099dc42cde93221b204798cb888b37a7592d98e8599c03866efc55b79fd632e1395bf98f2ed49244bff1c71fcf4049a98aa01e95d2d102695dc81146fc582a7fa9daf0e88d0b99e0d8a45a37940f5260c2a1222686223c4f74f9ed2dad5b1194ec59fb21be309aed683915857c6fad0",
  "3.10": "176c3bfe1d4462d76226f7df:0ae9660ac7d7dc1648717824243869ba:6744572ee10489cbc734d3f17b389ea6b403e3660913927a84340ae4ae16a562fa160c69bd33c84da74862da49a27a0072a9a389e3128360f1d7708947f46273332d80c9ea42c80261363f41a7b04923e9229bb7296fd8dda052f5f3d8830e461f19251b5bc76db8015192c929a4f374c8dbe12f638dc0bc4d89043dd0edcb32078395a38b9241bdcada3851146d4721d6f7d8955b6724bea28d0406efabfc964bcf9094e5842b8ba257c5b8f9d90f4951dfa143f450351246d92c751066af8011d71eb37b7389ebf91dac23aae911fcfb231cb294da89f05eecf23b66d187d7f1259d31412e33d2e5345cd8a99a9e87468a0c312d1186f8ee4105",
  "3.11": "1b8d0aca625e2b7d54fed8ca:8a7f5b63d6da753aeab48d125cdf992a:0d50fde873c2364b691c03acc59d091f61c9f1c7aa3133ecdac980c8c2fa9fcc14ee1d482417dd2633414b2c111122b07fbb051c5b99fe6845c1a3c8baffe8c70b7ab7c761612e63e297b9652582f19f314e1b7f1876074b0a36e398170b31818846104b53795e7bd6caf93cce477bf0e7d45a4a905bed6258e0a040ee288d867040c6fae540638865e14cf65e3e45bb880d11102a35607b5c13ee6577c7a8529c3d7fbe346708402c2dc0a5846cf92d40b4df31e78971e3907f994f1fe879ee3f12cd889149e8dc84c6d731f3111bac227e34e6be106805f6ac1bc5f942983a0061a7b8725c5c90a962d4731e3fe16a791437aadafb1e16385d",
  "3.12": "bb2623ae5605daf574d99939:34834bc95df8f279eca0fed71a83fa71:72045245a91ac5f7b096b327b0e3789cc2af82de7b2e51c04f6bfbe4ba46c1ab2275310d9f9cbb62fba9baec076ae98152fff39774eec3acb489c53fa7d7c89184d445a0b8f5a24b7ae2bd121e3e6789b0071a0d1a0f77bffe954e8a4bdeedba9ef226a739bc28fa9fe489b1314f774305ec7a1630445978f1d40d96b10b9e7d6a62400e8337f66e213c35b9c2d8e7747972820779e33e0cb3635022ce3058d76323ed951d5d90bbb9c09700895bd19d7fa69970e8d83a3f5d45f4cae212dfb662c6968c95a9b4c9424d5fe07740eed564a222345485d6b3dcc7d07042567136bbad3a869884383f9856337586ef534d00f60c90e7846fb09b3097088e512edbd4e61b5437b3a9abfb400ff2989fe51d5be6d3ddaec95ddab2471087aebdd51588e03c663b067914d6017ff6b3c3e8399add6c0119b01c156158ef716a92c5a5eceb18659c4cf103d73dd4eba6aa47b6a1d63a8bc041bc44b8576f62548598d3",
  "3.13": "2f99c5fc8a73361bf249ac93:e424f732601561d68e281eb310814dab:fda24ac8b9ce621d09d7f98e6c6935ab96365dfa6d28871d4e7e79996e65aabcf959136c8a8e350a011a53b1a984753e31e5dec915bd1b084ae6d06e6db43bf5f96534c49685df102a01c45584578e0b8ff18e042dbb8e39dab03eb0e207ec9d5a11871532e98d7e870cfe3de29e1918a359069a534c9011fc465689f90ec748efe33e389afa4d8a1e1af940aa84281fb6e6b6e65c6ec0be28f17a0353d4961aaad81451607f09e604ce579d148161befb2159ce4c2158dab5bff5b43fb36a60ab29b6b6815c1e126ab69bc389fa994f0ef618f7bb5c4df34061fed9ee2f4df0b711a8a10bc9147aafb371d0a6fa77bbefd947a319",
  "3.14": "c2ea7173b980a55e47f326a9:f0d3d40409bb7b564df8f86a7532e7e9:9d77c927db58b0f36fb81e47f5ef3452704ce8fe5de37aa82a4aa37bba02d9729f78bfd7dceb8a6806eae2851351fca73a81e7e80d8b7424d9c56f4a200ca4eeac17b3b9c265793b73b7e116394fe7ccae31e51a2dc756c1dc82fd8a620b526e1f4bebacca875aefc00f3fd43ebecc431400505c09eec538fadb2b942556f7f52a41e1b4dfb97ce0798bb75b3cb34d5057b6bec3fede06058decfaa5fa014b69383c2346c091bfa5a9a17ddea2301fca5a90d669720129c62b9c789a204f277a34cf8b6663fa7ad17246",
  "3.15": "9060f27794d28a553d6c6379:3ab481c73f6270b3516f1196537cf94b:fa9b688734df7388b7eb60bc312ca4e3ce81bcf47e8e4185135b97ed11093e8c58bd3576af59bed174cb0443352ae8439e8913ded81f0c0b57004b0f714f07ffe8992f51bd47d8730d1cc3615e70fcff20abf84c18a06885bac542f3dfe4d706e4eabe1d11f861379961686b89b4c782b3421c0a23bca19c59c3340ae25e2ea71b21f16f3f8c9b634675775487a14b80b4062457d747ad8a8fb19d260772d0c5b7b63e4cc1dd564c90c332e9cfbdde39",
  "3.16": "3be5648cc1fff0728167fb43:7c4c27b6b3c91e5916d041f71805a8e3:23da0ddd9ae0401f2c6581a3f30394097f96cd170edb2fee5d4e621edb83d9f99580eac6c1f05247ff2ce0fdda9bf5b5ab4b38c6e94776cf8c5abfb3e03430019dae4c1ba7758f412213ff1e51745cb6a84db1bae13e6df10d1e94b4bf36ff2543ac2795e5e59e6dc0decd351401755e5bfc7e35153d5d9fa119f75b0d67ba40e54738f5cde6daf19756456aba6d4e7fb5b43994954600ccb8f6f0ff187684aec6",
  "3.17": "ad6f6ea7835166e9d162ab56:bf3c13af74fbba3ea47ac95ea495f67a:57387c3dc7bc8485a64d5d356f1fde5e8b6f12de0153d66758cf5ba4aa44ec31a70361832c5432be9e5a63d5f1c881500864d361a2b1e9139dcdc748e595554d1139b7c3847f4bb53ce40c101a20d129f911f2d8b33627dde929e2112d06967b72e42d217f16d89406ef9c2123d6f7458b0733e6f4143b78447a8a0d943aa5dcba92bfea6e5344c7bf9a53293ef2ef2339320f9389bfa176194574eea31a02dca22d1779c9c428a9017a4806cfcdc28778002785a037804400d9ce7f93",
  "3.18": "47d9f877289e7f0b11c69a44:79665ada070a995c73a1c301cf096709:d53dcdc7005b9c208796d0ede45df0f94ed9f6bcf032dd993c04c66f578bc332b43196c8faef6b461e9824b84a26c55cae385ae084c56591c272c33588207027",
  "3.19": "fa20853c971772b8684a20d6:0b8c771c625f9cc9a5d4fe39be026aff:cf76e66b656fb27d497b5d844b7ea6e28e1e72268c0a06f1147fb98bd3f8350f09ceea1edca515d293b0166be16309f73cb13f8d98774174f0c7fa1aa0b62b3651e2032808430b1ef9a92ba2c66b2420a49a68b5e63a7dbc58b831721f220782784779121bce4a9531282a1897750e5e767cdf229b26f5100cc136f677ff6f2564a4454b118813404d492cd33972339a3de72e3203d8a9a1d1b58ef25942c61a8fe478f81e54fe1e64a9bc9b85c41b94962bf81c0d736ae8ebbcc61ac2773904046295f7ebfd055be1a28036896a94e64084537193b4389645dcd6f4fe8d1d1c179337ccf5821017b2d0bbf9d2ae78aaa08fa470b4f359911529c54ec5172425502332dc31",
  "3.20": "940fb267348e918654ba32cb:a5ca8f7be0d4432b63bc7ee487abd726:4cedc23d64b288e34141109432abfd377299f089e970632b85897412a0034437c5077508828ba908732575b1d4a9d70dc4a308151cca25f38e7b0ccff283d268510b0e5b30a345f89fddab62c1254cc33de8287e62a252288d789ed16a3cbd32200fe79bb0cb3b02f9b29b415ca1fc762cfdb398168864c0129b549c3aa509d8fa30f02c8d1dcc1e51e5a5695ec4fa0e282924f2bfdf7947d288dad97c1e7ab2f78a7e4d97975c5d81277f6bddcf03653cbe762701c6e93c08959e063c6d0ce30cf04c2900aa0035f915da4050c0323ebd68446ad325c4509378056a25f7486f4163724963bcd52fe7e2dc7ca17cc4346aad7616812e5f499f18c5f1dc",
  "3.21": "bca96f9d9ce523d80c373c3a:758d0056744232610cd188a4e162078a:df1acb3f79ca485e5e9cea369268401772ff458a94e8e952c4401ecd5d7e4c8aea3162f90c53e9a11ad4697a3e3f4dfc1a395bf94f8ec125167eb088c2810b0336ff945d368653df2cdaf8e07093ecb1ac61348741fb6d1cc982dcf7e4b52acf91d6f46e04fe70d4e6feb4b71d594b208eb92f72d18d30947347af2432f51e8335924972eedb0027e1d0e8d75fba2a2c0c589684391103c03474e38e8816589fd3f68e099e5e01e1a787fdd1696f73c44db0c4a60bd5c909486b198e0aa0aebe0a54e749b49119782ccd4cf2bba13260053bbe7a4ff39d638ee94ed851900b79b87522654c4df80e283f53566cf9bdef5c7c2c341e47c30b4117b520aac2a9d8b14d344fbe5865cbb34285d256cae51e51477a47c961e3faa08f4b0d29f86172ca7327b97b62a2b95f7c",
  "3.22": "85664cfe74230ddb3f83551f:e13c05f6acc4d439e31e66689346cc56:dbb3377049a7f8a211e8091a6eb827e2a79bf0027e263993203ec883494c53adaee9bacf83e7739bf2a306c820b3ff055f5341b75c259b9a0973d91400b3238f05f395de5ff2af2d0bf870588b12135919635abe21f8a91df498b704b43519b3c7eed2adec83f4454cb91686e454b399d208f4ea2fb73801af02c2277550b31fb8d29fd5c762f7c9dca6082fa1f3315b24f2e16f100de890d86182295721f8e6cbab33b5289aaa2c7b7f4586d2affc61f4e1940488d1178c596aac0058bf421beb0f1fe8c640f00cf2d724bd6b665a14efc840f26d38ab2ddd08684b4ce67f5a6055cab3e1a79554d3b78bdf35583ecb2ec93379a6a1292928b6f65b77ae31faa7642fbc2f009957e30fff662c03ec102c8a5542239de294122679ed27f13349c1d338afe4e25237f47ac60673b227bea5946c2d6fc597f8b55741785463932521f131fa652c209c3f313d8cbc28fdb64eb2890f517b49ab0a128c03c256261279ce3a36174df9162dafaccc95fc00f022284384d3fc704cee2c9c2a0476a2638a3948351e5b2da0aff791924054b2c00be03cf0166a7b9a03b2885b6211f1b120b60244f826a421446766495a2ab8dafa33aa10ed53b9bce68bd408f55ddd4b42979a3175211d84d47c065bcbab178ba3c93d9812eabc5ad11f4e8b60e5f939fc52bbe7d09dfcff7e5a82816976e0d8fbd58d7548ffd8478bd84117f6ea81d49cbbeec8104c8a491f0f514c48bd562a5d494e1584b0f2c166da2341ecfbf374bbbf440d7a223720e620bc463e59b75140976a978a196170855bfa5d693476d0a7636cff3dcf5b4d965a3b98648b60672676b818f293771d5e3e37a2151e86dee8c01e0404181bd0cf43c287963a366242d7c71d516bd331e709063590dd72b9b5e10ca6e211fe44a7868848ff1d428f45060b15fb49a1173821a84ba4c44db2cb56072591aa721954a3a4ff9677a4927b27bcabe1b2492c2390ddd90be8bbc9424ecb1057d6e1e9993bb837749e",
  "3.23": "d3413a2b2c50bc54df60df3a:9b06592c94514a6b7d6484db6cf4251b:ded666b51bd6197f40381c656df5d5749c1d01ee570ab422e51eaece07c9b5f2c6b70472a8c569d4fadb11412ee18276fec6e20784119a2cc1dc2819b58ac6f1a58988a978ad687b6ee0048a81cb9669b91349728da86142d4432ecbed657194f1e94e8ac2e2b20468bd7b262fde565df11368d4df07c8bdfe207facec44577f8808564ad126324b9e2244785fe3d5d70fe92686c624bb31a781d29d982da5a0a5a995588fb88d9fa2883b0e2d5ed54e0baba5a131e336824ea91540d662842a80bbbed261171e05f14b978e65ae862379ffeab5e2d4c2a6a4892fd7f1815a742101b557ffad7f8421cf9c827071b648ff084b8884f456e59962ce635098f361e6513b4918989ebf0146ed9a765a5627769ca5f238b4d4b65fa9ca3a7808166c42143f19",
  "3.24": "9fca02c5f155a17f9aa74d50:40628e6f6fcaa833b615cc27f56f1dd0:fa2bfc1f93c71acdc3d19b02d99fc9ea4322e472d7ec840d046415c39a7a9d2e72f04ae29b4906d248e65a2357293cdac4a8985d2c4395dd2df9365e511ea8c0827c9d1b9008e86da941c6cc9a6d0dc1dfe96d1fc8cc712dc838d9c67462a6db543ec390c8575cb49edbd063962a929607f7328a28fcdfdf86369239ccf382496d854652d193227fb7ba2ff0e4893d",
  "3.25": "51b192c47188acc802fff24a:02c302417886908bbf93c7044321774c:118600531c6ef802817b09ad39f9952611b47ca9a393f530f5cb6888e008928e155b9c76f7bcb6e5d7ee2099deb213cba179320a4a16d9d3baec15c3e641a0b8e47ace00d3e286d3ffd8752761415f0cd1bf93f49cda63eda87884d4b86d9db4e00ec236034858f77e1504bf70932efa1ec61e204acfbf271ac1ff29041723bec9616810f3c76b7c4f84d138ac77a34264616a833a1e2862c37990b7017ca432e775695cae27af4e59124aabc6a2cb9c914390dc5fddcc59fe1e2d84007f21ae7a2510c80b7ba43b8f17bcc0f720e533f8ed36fba92244710084344528711572ac1954c9c94d52fe0942126893cd0acc8f980cf879d3eacfc80cb7d32aa8cf1669fb41d1eec87d40b5a3481fab2dedb7884e5d01e9401cdfddec62041706c86a46ad683a0d109389f97623d7caf22325",
  "3.26": "efb4f5cd3cd30e1f834a1dee:2b1dbee8ee86c98fabc77c4f23474974:933437caab25e894334a3f556f03e37ad949dd28adccffc562f421a3a231e05f9836719e47bc273fc48a96821208d8a65b8da2aeeb8d6c626f08c3a004fa9e9094b38567226cc39cf50fb4bcd96d926ffb52000b7e8d779ed2f0f1e56db95674e115f76ccf979f728963d6692416ea453721227f46c796e2f9a3b7dc5ffd47860934a766f70a7fc2756d38750fece4aa3f43a2d0b80d4dd92c78",
  "3.27": "8b17f95c66c270b3304ee529:ec7836e9b46b85ddc356fec18a0bd27c:78bf55073251d629f8df3fdb175af6ef5f0498686cbbae79bdf1f7dfbbdf275d659e4090b1053bac9a393efc60c67233d95769723c7f1621dff6b41302ad06efa12265912cbdfe6c913b2a9846ec70bc96ad278b8402de7ebcfda641710893c137e685f6cede256b7ac62a703cecdeca83edfade0a3da3f16b99d6e6ad948dc3cb1e9a58850a47b9a1a97bcf71924ac18cbed7b4fbe974032cb7e1e5cf4f52e2d0a48131d643951d72049a29e16740a1305b8c5fb3562439e2ccf10cd1793d2cc3eea652d0ba155ab2bfa5c0737bdd6a4a4343c31e6133ff79dae263678d533f2f41fcf1c24ece801c9fb34295fa65597636f090281daac77c5c5839b693951f1afcb73c832333d4460577bea7fbe43e481f7db69620c63d0146",
  "3.28": "2120b82cef06998043bc004b:0652415db3384d4726206a377a6c9117:88fc104cd56d97dc5960f1cf9d8ef47bf7b03635b1d5615d8164c222983522955d5901910cab4872023619994f21836b32c97b6d85c8fbcfc35a3dc6cc0de449c0a7f2320294aefb804bd63615a908f682725184a4b18cbf357ec31f735bee9f68801d1f9ab42abd7ac4aa25a503ff403e39",
  "3.29": "1d596c72e7dec129ba4a1044:b19a9d1df2023bca1e3bc255ca26d097:2a602f671dbf0d2547cffff01b19a24283d62be6bad539bce34e4e3b9bcdc4fc9a60b1e39a5efbfdff160299ae9c4f216c6a5335b4290dc23adc6897e172ec942c73e39aa282c3a250fb84dc49f2c07ad13b3dfd97fcf61a8b679c6b0438cd00855bdf4bcfeca5d5142e397fcd1ed8fe28d441871fd857be1b77b25f134f0b765d45a005e634227a23d6d7dbb2b80b111c839444946f8ac26f5a61e84042ee8eca719f8861deaa5ad51200cd7c2f97aada6339d5ab230ddb2a6aaa340f87a9b08703ab4e8226351a31251ac9a2240f4b4e563cfc57b5d19cbba2a23562",
  "3.30": "f6cd091f45cb9293ddbdb34e:4c6a62673c8724b8a9c8f6228738c3a5:f1ff227b0d34b6148c388dcdde629e840204c165af0d34971caa59caede811b5fdb6e7768fefb92ffc91a867f8d54428d9f9b079d4dde5f7d06a07568681e072e681e22c1876a46fad69996898ab6b65a1c0c9d5a94977bfae4f310b2120f14d5afc367fce18cf150ea909f38188cb365e8af2515506779fa1e3d6f035717e6a87602000182d57817430b16c37e5531f2d6faaa64c",
  "3.31": "c0807b0402a307a4ad2837e7:188d84569f3cac428625fe958688c782:4e2f3e83333c56d5987d3b32d3926ecdcd39e558e790b173a091ab203f8c5a47419cba88738a5f080cb14b1c48833e56c45eec71f6cf5e1914cd9f78ca73e21ccf90b213a60ccb7e19302df9c05d977a68147b493ae2020cacf736576a34951c851fc3699c6255c2576edcf802ae0c68b6e167cf5239a920c034b1ab10c7f413c00dbfd19271785dbda267f59587b6a4cd60f614ccd36659b5e6855369364a72ea3dbc4a077ff708525f026cf2416263d40f9097479632de8236403912af8fbd5bf8d27db48b5e77da28f890bf52b574282ea1789ede68f48fa65a2a44c47b54b16f0c797894f8143c72bee9fc4ca478c47833e3cf009c5eba8c5c54b8e5685a177c777929732e07203c056d2592a1e4f6ecac26aed002d4c8ad86d5c3375913dd551743ee03ef033c43570c829e88bd6f81792d8b04db5c48dbeb41adabe6d025f6f0ec3732443ecfc1d0ffab6bddbf58",
  "3.32": "2e3a3f0cdcaa6d47f872e086:7441519410008390d446cec1fd4b0c16:6b795154ab529559527e950afc519c39bb48554c3d4031983100afd52db58ee702e4fd9597262f3696bd84d903374f218c24ae8f4c16cc57fc714a8dab3c49c694893dbfffe45a631617fc4352608fdeeedd8fdd66c646659c901d17b2fe3be06b224fb6761810f1a59d627b3f66c8f5b0b8aaa45543e06c3869542255f14c8716957ce564ae77ab7eb47e3b01afc7718d1a6059777aa18313a0f0d6451c504e6ac7ce7920a4c0985d393e70514e01e8833ff37d1e341e6714e2972b17dad9ec9c3eb1e5afa663096f3731bb838e8e21d42821e61c27ca8c897cd8e69a26c520956593672535086cc611eac6c16c8b3fee53445368d40631eccdb24c6838d69ac7248ae0a21e14658839ed773b4e544899cf66c734cbf872115f16f8824ea37d649bad66775605db0d1430796e66290192b0080ecfb329dccac0c5463265c9abc8265d608037c2bed74bf22208faecbf72d334c82fb44276366572130246f72f5c5b14e837fde99b258335bc7b4e4f07187a9c9bb56f4b75c36edbc8ec5295560da736700b193f3be562f66e186cba328112beab00f21db8e15f790c3f250a6e34d7a46c7406eb473f1961a047a7f69f0a7308c9bc2c91a9001442a29e811c9e293f3c9f3b4ecfe1981484eec6b29848b7754b705b0bee50e4c81fbffdb2e8397896dd40713a6000a5f22bba70136916923aa3991e2d01e32fec4eaff98e663d4624c482621d7f5b61fe1441c257dd8d544c86481d02fa51dd59ec"
};
