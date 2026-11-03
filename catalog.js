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
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "75c0989589b4effbcc960cb1:3622d69b525f26484babae397c5bf96c:99e5c620a9bec00ada4fd94ed48dfec1e2e9c69cb5f1f4dc7e8dafb8ce7ddd811d4c11a9bbcd09c1d727b5d4f4bdf05258877dd38241b243b2968a577e4ad6cf5c611864c98309ae1d415ad9ab78f3167d0b29f8be0dcaa5cda8f7e7ced1254363cbc9b4f136bce995a22adf2f28e16431930a6512f282d86439be031611fd1c1c17456498",
  "1.2": "fc92e0769821616e96266a87:8e28a675f80db8911907036bd447a8de:1d678f0008359df1ba91b4452274465916ebc99bb58c72ebfc47e8fc4c89fb2dfe5922377df991c2dba17632e955df4a62698bfc07e2f265fb215da488c77fb2bae1cb660cbf4b1a10d281802fe98e7710bb46d3fc1ede14f1fb45a14f9dc423b2f28c9efef48a05b94fbd45b94d660efd8a5583306b40845de4250599d5ef0f9c91357b1320b75e3c6d4ecce9f22cbf981786089266274f934b4d1f7fb2a2a15a5227e824e754b3a631d3",
  "1.3": "923db3efd03c7587527b0988:1748604c480e6bf58539a428656f2af3:27d303da5a6c61d7dabb9996ae",
  "1.4": "4f0c3b85aa35ef2acfe1d754:ea88e55c9967df6ce994a7afc0161a90:855be4c3fa42fa67b546fe0a73",
  "1.5": "ccb62e9b0cda2b312f082dfe:641c7e2a0a0b20d0ae255f906c83e215:bf90e54c1c73dd9fdba576b30bcd0274d5228c28c8b0dd674e73f5154fff56158f3ee1a876d4e98f34e23f6f311adfd681df4a8bd4c3e961b632252e0162a9c64b9e1bd9cc99f1e6e38a1a7dc737fc6e6ffbd83601d829d5f717279e3b47a7dbb83a321824b0b6713e26dc6807d4acef3726c01c67fa1c",
  "1.6": "40430f7faab730b235d22dcb:efd658ae1aeae57efb9eeed3a9366271:6f32748a6a89dab39bc866ee3dae5ff7a74d2c301a68d9e987206c2bfee3ce7fb45c7b9ea9cf9c45648ad724d98111b4ec6169540032219cc74ecf3d6cb6036469bd9ee15c710f794e7c704d9e0dd239a08714c0c167cfe422725971bf8c6cf4d8489ab0f4ae11023846591370bbef88d36b1378d60b3eb46020db0ce296b7458f2ccaf3654c2fbe69c2d16c23e058ab1a69dd6533f192131552f4f316f544f8105ee807fc4aaa8ee618b69529963c8b5498a0a0332cea1739bc4d6df539cb8aa0a44aae1f13dbe33db579202548d3509bb61ee7f48c6d356ac862fe48dba21ebd520fb1",
  "1.7": "87c6519cc0c57b76dd17a6cf:b1310bb4743ed7bd857099825406eecd:a6f502419e33ecb4534c4fda1dca97fd392256989b2af35b80464ef031ced67b8109d88b6496403cd3f5a975521eade6e3c7d22229d07067fb8841dc85396abb1f613dfb68cd17d97188c3c7f2264a29e60e393b521a5fcdb069f68305df51435225b57a461aab371b28cf42d04301718c5fd37a438f2df29da894107094",
  "1.8": "c198f1774e1bc3a505f7bba8:21f6cd3f3d3c5ba9ef52cea89aab38e1:69c3d9d563d1baa46b7156993ffacf539ce3688bb538149c56a26ff1b482889aecb8e7bf9cfc5ec5091d9e5034999127c93053c60afdb51ff12be4427c74014b7036e5079606487dce79134f45f253805249a140ccb5d323c834b1a6aad8239e2329",
  "1.9": "8179737b408d06d30fe95f6a:2f1b6af78d7905c917dcd1035e1d041a:84781ff370d6af71c72a5cda212d454c3e53fb5dd69b931a66349a5f4be24c1f1a5deed5dd226e91bf2041590959f90636d7ee2b9c730cacb1e2e18b9e8578a92877e09796ec17a7412dd28eff7da59eced1218e77d28f888ac18170045b2e8c4a1a4788727b220aa65122810bbc712b9e5a4ac988675f305d791a9140253ee474167de8fbed13b8b1ff0a4e2a55b030c18735e015d4e8475a44ba294b50f68dd4a1d8b6599cbdc5a377eff1fb69f9504769b6147dfaf6",
  "1.10": "1c8b71d62587baa1e40f14b6:44b47915e7317ede4372e568d0bf48ac:676fa03d41c8d7dfbb5ce3ab4665e5c735bdad867b3638eb815fa86fb4fc5e2e0716b75b3c3d7234ad73f9",
  "1.11": "0e5d34d0df581578796d0ffb:9e06c7b41de27ebe115c49d471d90451:d7e3e77595d73c6bcc60ec4cbb20e6f721641fd9738a13adef3cc54c4bfa73af9f8df8b17d3dbd005e02a4c2aaff044c33e9e3b141d43f75fe4585a96289eed7c19d604f0ac886eb994d52b30f51837888ac233c00567583eff34fdf6f5b261ba7e63cfa30d784bb4301d711656be17bd69ce83ccf9e0e87d4d9f44903ff0c529412cba2940a51f154ffc6462af5305c0b6224",
  "1.12": "afbe410fcdd3f0693fd3683c:2ee37f344e2c97c25957f0922de206b8:863ccfa23301a1c17fcdbc50ceb6b763a505ff61368651420fbc83017096bc7db4db2f404746b48f6b369a366125a536a1ec26a20839f2316b7fa36a509dbede18491dfd721eb39ae0142b5ad0661faaead721e8c0af85622679977278348cd73c5feda4e627e79ef37bb938cd461bc6f363cdedf563c03ec4e96c0fdcd7ab108e56adc84ed3bc7c59ca035bcec9a64fc213cc9a3cc1129aaeb41fbf2a046fb96fce5df88b72fb645356602f3903703cb1c1bfc4e620d57b60da504f1f5984d3e5dee487f50cf8681e1a9d44f775921c6199390e6b150687e20bdbb706cb4ccfa356b839fab02d392636265f96c65be8cd",
  "1.13": "a037f036624efea913e28815:d4db1d971f9f67496084a5bc09581597:2b6a090dbac7a5f8d976beff94b6e88a84dc7018c16b94b58e5f739231f0f21caa035bb1bf5072eaca64db0aac7883c148101f10b6fb9c9d8099b7a08ac2e7b94318e3bf98ed40a30879f85e59363046968e22efdcaa52d9dbfd14edf4101ff9305496f95833fe77ff4b65960aecbdd6c49c767e068d9645d360938a5f45aa556d11176c9ec443a0453d12bcf43398b499edffbc859d8d2397a4e75f81",
  "1.14": "b7014c9f1ece7c1eb91622fe:8c15e1e94ae80798e07f6de6172ef3e4:77196eb7322b66d47dc99513d932dfc484af39f61b09f5ab3864a370ed92642d84debeac5fd348b49bf7cfcb8d630d31f0a9c3d5fee9db7f1e8a49ec27bb7c120c500c62af9a48166168e913ce859321d1744cbdbd686a5420b3fcff7f84f7534b1da10fcf3fa12817eeec5b609ac3aacacbef2008aab7d35ab23cec3a21a82127ba1cb261084b15406975ee574ae3bbece47396fb378979112c9e42b17c9c29430bb651ea0f94ac",
  "1.15": "14c4744e1da1b8cf7574b90d:085e9a44d0fbcbd38f4a935ae69d4886:7d6463870ff863b0d369e99de1e7f307e57bb0f3d5888ab3cea3b9a287feb97039",
  "1.16": "70d4ed7abab5a3d75c56aca5:40af22dd1b454435509b707b457f4df4:57b67cbc8ff2d1250999a10e420da03afc75bf4aed77113de22ec8b61d44bee1f7c5ec2e6077b29efb801819979884a255caa724961eb3eacc18f5e1791c6b4b",
  "1.17": "bb86b04938568864b866ab78:6834c94e152699a3012279f7e24955fc:cf089a582a33061c090831d41022410dc4118e92515e37d1370b5a17c28258ca05691129aacce34610ae80ce9cbdc7c103a2ef52edf1932e782d24eed0e92c17fdeaf3b6454143953a1d07cb3fe51a335d2059db0509307a91eca68932714cc8ac13511004c37bdbf45b6a889fcb09a46697f81d9bc86f56e033beddb17268cc06f8dfacd8fc52db18d6345a5817306a56e3601bf8c565a6e47d1a7f9a0fb6d3fa272e9fa728e235493873cf53d3bc3d575bf078b7c93e5133754fa6bba353a147e2b7b9c76ee9df51a4a8b547ff318ae2b197a5b1e4e721bd1f3f34d22a01f6f3b117046523b69c7a821febd7f758",
  "1.18": "b2f1b9bf0343f13b2b676e74:4dc231e19e9fa2b9bbe3cad430da1d47:0d80bc6b125592a4f8cc611a5f52413effd7f11dd48fb1b0fc7868a201ec58779b97d9369d428dae0ad865127cea177b7e1ba74837a4db9134c48f472514229703ce46063d5e327104ba50303b2eb66caf249ffa350d94670832422dd2fbc8ffeaaf7af019b90e942e45ffa38d478b5effdfcab8de5f42e7bfc7f3f3ccf22b400771a83766c29ed83bc56d8991b90aa5799194c5f27c7d6e0bd24fa08ec5877185927b4ece42a7edfdc666e205d61a2af073519dd6d38b625cd8793fc0f6b98915f016f16cb3fb2f1d682ad47586a55c0158d44629a83b033c6d2a98ab2b1c1561382c8bf5e80b9895abe5a3cde90dcc759317c939370187a214748698a7fbc83cd87499f2200350d2281f43e5254b1ab6f31fd56a177e89e7b97f384fb56626faa0b845add4c183eb5dfc1233b3175bdbbcc5a0eb9ae18d08aa1bc9b1aa94d0d65db3bf86206f73f915790e8295bd0b764102bf4d2edc3eeb2fc83ad5828e93b66446f20aecc142ff5db850eb03a1be47320fe6c93d2bae3a194f68d9ca0fedbf0c27646bbb2cc2631015735308",
  "1.19": "6ed3c03ed4e9da47fb7f2776:cae0086132138f43aaf3003c90771649:17c186a18a21232baccd44d73443d96fa6e70b6b7011c105a029279323f41f207b",
  "1.20": "77f4c039429593312a96db34:9efb3ab620ad15291b17ef93a081e250:df613de7064fd379a25efed3c0821d49aec0bf0114b2288feb17",
  "1.21": "28d6e3efc761679ae67f0622:343098ffa778c61fd54e712897db434c:6574e25b73647b1210427fe19d33b42bc5b113613e61c6b76311fd7b64bc57c24805fc0c1652ff3df463e829bac00b183d8e20f96f178a153d9b0a81656153bd7969424d45e4c8bbb9574436e97ae38fac6aa4deeeb63b69ce1043bb8a3ab513f0e97ae3b65a78b8f895d571d047c9bb0bfe60eb34a9",
  "1.22": "c7c81f7b0e2a1998f572caa3:34ac90ff3d7f40cdfc5d33e262123510:9045c306d424db67b0ae99e079c86e98a554c6782d3f63ffd08f3e1fc4bfcd14d40fd3563af1a2d7cf246380b00880f4a5ca55929ec857792e0d4a1b7ef87ea74749e537a63ca9470e672cc65da5f566743e1b68454f6b2be4ccbccf293d42dfefa89b684eb798c3f431ca9848968b55383543eba920e39b21f0fe144da1875d1d547546ecee5e0240303ca8f9d66a1d7e29200771b109ce05ce401b49b57d31870d135ae8839e6adc07fc6bd7f6f7fc6153e1fca748ed0568226565f37c1bc9a0307512a87834e6eea5",
  "1.23": "15185810fdb5d527e93903b9:9398bcc2da1c4d57f60bf9b2e7901637:d63c4fb0596c04268b82c0fff47e43dc2178598e6da854f0e55a3920a79320c42cd242830c6211ec8cfce13c7645ec7bf6a09a543e256842de051dd88f4ff330feebfb553df01953ab470ac4e51eb92e80700c82a2e46199f5cb867f078e51bc36b2c069309972ba6ce0da6bfd623dab945c1565f000556ed4b3cfcbef9f20889ebd80a5bb",
  "1.24": "836882bfe8a4ca1defd939d7:b1a080c05c6dbc09bb7cebaccff42333:b12ab90b5a5c08da772af6bc454a32836ad69608f5d56195f1fae3e073c45b37bd429564b1a98512cc0eb1dfad98a20a51838a322051657cad52eefb8ab8f82578cafa9bcd9b7d987d0247374bc8d43cb4b1c2df246d30e98d683e68ee0423f1c2e463edb5db1c974f6ef019174a56eda4e1a418f090e1eed0ff879ed3df030ce139395dbda735963243703777f4c270c88b6f",
  "1.25": "2e1ea84c29bbf2c89063d102:29ddace46085ac2a35b02ef8ce4f91e0:c97a87637e9feb6c126e9043277e7e43e19f0ba0617c3a326b7d61eb80947f637ab2feebf12c6d53db619cb6d9e9b9593eacca25e7e66be9ed50288ce462fc51ea9dd6a1f934f0bbfd894334d2e6736253a0b438b9ba32d4d3d4b593bb035590a6ad7f6bfe1008fb6ed027b4611d2d8dc6fb7d51a8c30c5c287cc7e7e9f89e0ca1c05c3f2608767d84ea37b9f0487d0fb558e0e7cf7272e1181880f4c1d38722e8c963082decd2aa11d2e3d1af8a41c9b957e2ca651adec93ae94fafbaec767970af4d210a4f75ed5ad137169414a46bec3e13743b5b3198e48e",
  "1.26": "7661157950f020cbeb02cf88:5c1c71bd486d284c14a1a277b4c8ca41:219999885a8790520f2842a165ce618e1562c3aebaa2ca256be7f9f7ccf590f0131927bdb9131d89fbca71469e2528c60ea1d7e2dfd1f8dda7339455536ce316a65ec7f1740d47c123429b28e88fc8a16cf23f1fe3bded6e9471ee05167cbc79a686ad783261ca1442d340629b810a56cb9aafc2a9338db032d83dc78349abbca7d07871a3a2f3deb39b40",
  "1.27": "19517417c66f8b47579ab5a1:7f9671fe54bbab075dac4586322990e1:06e85d11288adeac3bc615ef2b07fc64e9cb8b5bff740eab0b74c12eb02f7cdc093db4d967167fa5af62ee6f00c56a6ffbee79ab49e2cef473c163546db40eab37d9edbb6d8cb35fe0a21a89e2b501a9c0624fe94b276ce669d75c9a8e7a3fcd567b37c1c6bd53a5bb395cf07869d0d3bbb5f4247816f7980b266b21a102bdbcb698d3490cf39b03da01751d4af8dd10a8be23a11d9c857e0a2329605afe8275941990115f4729b2588b782cd0c8e2598e11fb558e6eeb6da67831c85d3b56ec03724371",
  "1.28": "bce1e3153849d8d4d18c59b4:5bc98f29aad36fc2bdac779e589d1899:ce289158e63e35fbbd3895739a65144d3ac93bff4f26bb7767a2d7948641b27a4419e79d9267871545a6fbdc9404c58241ee18d183dee1ec3b8e2b2a550512a438c90c1605dd72c2d4a79d74c9f75ae3d8b8fb90d1d1ff266969c689f520ecebb05231adfdf5d81621e078b8caf0e377174f905bf3e45aec7fddebd9fba87439f3395410acdb6ba8cc52a0b14941f2b848a81233d6660e1e4e3265f5fd75a6da637841db0ec41787ce3def708f75d384525eceb713324c92b1339bd5a4b4919f61144c407622fb9e6e94974846ab6774fdf735923347995f62e14ecdc933efa6fc68",
  "1.29": "4da07fe2cd46143bb5defa53:0edb37fa88f1871587c64e4b75096ac2:f09e847f64618b9cec5bcbd9baeec8a47cc82acc9d751f48a89d25d44d56f73544b04db9eb206ca1489de4ef0068145e03430b6795f5ee49206d9c98887290ab01499496a76b5539a2d57d755bc6fd784d2234b375bc7848101620e301e1d3b7ec4da5e3788cf76d4ab6260e29aaab27f8c1e65637d8e0fead77d242f222e58b503d5409f16c634c5792652fb6f292b807175466e585e2bc1c8c26ccc56901ea8930f8c406601ce2f4765631546fef493996bb14012d7948ed1f2aecc4f9d8cda7e5",
  "1.30": "87743a3ccf3c29bcc610f3fa:e9d0e1668b9afb716f4c1f5e1d6a0280:0044c9e9b97e573e4686c8bc30a524cfe2d52eee953595f7aa1e32bcd0bffdaf6624e06dc80308673fb8b0529ebf9007e6726a174186435323582efbbc71ea523ee3065733b51e80a5f9f42791dd4af76e5dc3b8d7d049d3a40112f46031baea7f842dee421f05ae32dceb1ea33b2b1cac7ff2b7e4d4e5e51583b3a99fa6e91336f6d460e733d889fe967e345547b4ef8c1a54786ca9359bfa6afa2d8de3bf21e9c882542d2984e6a880bdb2a11b708022157458e456aff164047286fffe6f10b71ca0b75817264ee7eec953d42cc380a374af1d56980f06630540976cfbf8d66688eab6d20b779fb40c21208e95075374bf5380ac96bcc4f4371e689ce3b56a71b901e09e938e01e2da386bd40960fadfcff336256f0bd221c97e",
  "2.1": "82e2bb8a455f2ebc4cc5604a:60e885f9819f39aca97105220fc1346b:0b4e1822177c9b31ed7abee4c10b91915304321423b4f05ab3f62d2c2cfe0d580b6e41dbace37ac3b1ae81f8d9bf4e3e8092677684627365b55281ca9894960b9560772f477adbeb46",
  "2.2": "28b695539be2f4d2a96d660d:22761cb11a582412dcd28742c9f53d17:bde987ca2577ea6d83611946d437e7282da1ed4f206ee42cb31a8adefb3b3739bb7a6cd3e55a5ea2407b7bb0ce48401d84304a1a8e13ace5b2762582c1474e04971db70e2030a2c18c1fda6d9aae62a2c4612cf857f749359824227773749b0359fc3f73dd143c1f6ce684e477c23640c3cca2c8e0d02d79bdb5e68b5844fdb60737ff4375238bf7867d34ac8d93d602529ee0a4d5ffb9734c6ed3202b6829586854b2414114cae51e212a646909d715a888887238eefdac0618c370ef611cfeb579b7cad2302362678b75ce7654aeb65e2d800a173d2269bf4326b1a9395c3767a880fa42db02874cdc11b5fb0fe80cfa763afca9ba972555a6902a2e055ac57571606d0e432dfd703ded46659b9b25d3b6791989a51015cd9ff2af78f32b9c7665658233bbce8f811e9815fa7ebb02c89029aef36c88c8b8e5cbdbc5d1749f316567ba3fef624fb3b39ef6dbef8b33f61e2ec9463453710b46da6bfb5e4576264065ff7a9e0855114abf17590ac029ef02a5f24f9917e133e155c48416e5a1224ba116d1bed893ae8cb7",
  "2.3": "0e59fe58f0d1c744b12571c8:f4e186dbe264c6bed197a00c9ab8e04b:5924e93cfcdd6a779c07a6f71cd9d8b4592ba82073b2f5a8771d5c37e79c27f82a3f0f0abc8dd6e8a6446ecbb2fa9474",
  "2.4": "8a0660725009e1ec0e28b5f2:6402b8f6369ef7e9e913cd8afc6aa9a4:74c5cba80248e314f2104fdc3cdf798415faff5c7fec0a17e7fade10fc1da530ebf05288e5b0995091a2ed0a85dae9de24a99045c839f15a4d76253bc0d93b24eb1933197f352b17b540d4ce51b5dcebc800b87796225802476ce6c0210a20dbbc4d717562ad008f388f190e93537c1d4801c8c7a4a44d39365b2d77a4738979e8fdae71ba88b44dec0c0adb08f13e23b9d9006b7568b1f9fffbb13020ad7722eb1444318ffe69f326558f51eaa57781fef5e81d0c84816d90c223721932ae69f40e0213b0632a5a464f82cb0873a981ecb8b8235680ef329fa4b829a8d58a4f7e084c648b0530414a1ee38002bfe81dd7b1ae9774698713a3125daf388b1fac05a1c66ffdc65a9689adf2b28f479a41e6eb42d822dd9739198b4b3042f7545c1822256a2658f92ff0387c8824fdc4545099b74befb07e22e9b033a96fd239a8b24db243c4274eb4a134de39d8371b3f66622723e6955aeb08410e957f75db",
  "2.5": "b380dc5dee9421a8141e56f7:e70c2ac1d1f7f53638acc8012eae9b48:75b82fb084a2ab983cf4c6b7757c8b6724e2550bffdb1fbe581651ced8053a413c388462698c0bfbce9f7cc607824fda31051a8ccdb1929c5e6736219b250deaa624754e84f3adacb71cabbb8ecc7f887554dd",
  "2.6": "c5bd2be038a7d56bdb70b5dc:6b19ad382ab213ef7d7031242362a908:29f07c6d6e196f8c42db43550aaed1ed03411f03d25d8da4daab0f3a3717813c8d7a5784317c9ec73e0a60bb55a3e9662b3152d1bcd3d88277c0a1162a0edc0edc8ed581af8cba869923ec40ce30eefc66d2be0debd4fc723e5ad613020b",
  "2.7": "446d9449d6904656714d7b7d:1a19d0cbe999415e53cfd97e4872864a:784725376b506e6c5225aeaef2a55dd1d0742d15d4306577fe12743fbfaa679721a813a9e281abc24545e336978d5daea97aa4decdc9696aa375f8668575d077f83675aadd0d62fd730534f02786159c36c785a51609de655e50a45bf92c4cbc51b7193e66a9302ad624dcb896e1b9b790e96aa867be69ed6e3d8cd9136fa67fa016f7ad7be48691",
  "2.8": "21773a21e6e05f6eb9ae7384:ab92ab9a81c182c8fdd59aa1ab928c0c:e39ea5fcb46d7f10e871e569bfc8f4e472c9e0692d96d82f5e8d382b27b365666aed84e56dd6b8beeff552511acc425474d45b042c0ed4fd7e82f9c323c721a61410d2cd641114b01e9828443168145ba827da3e3ebe8879aa4aa461486630b9771da78e20164e2319c3e34702f427ac7115686ebbe0789a9b51a671d98afe7a2983cb47e06d5104574cd516f2321d0da5da50c8601168d3434dba90794c748ca8c0641a469b3fe338c096ae3ee7db6d95bc52e733770058f0ae9c0d4fec37d4bbefd5584cbba85e8f0c7f8a0241beb7994bd82139e992a88061b12ba5d1a70bf28e2a28170031ee11cb6f7707",
  "2.9": "de20a2e3e50510108062a4e2:3077ce4c8a02fa58de1a33192ccc3f72:2753e8e6be00d46adb7c5fe278db307fa5340152a1baf0aa2ff6c9565b31780612e66eda9100ae1659d2b9f993f52b86fbd22a2af22df0c5443e93b8b55243fd7e0be1510c722c536bc06eae8a7fd280c76421f8d69b48ce5a5d43df64a9cb9427c5625c3c7384b5207434a191de1f0efcef45a16740a937ac0c2ab3eb3e20233a2c0c1a2ff0e00dcb762a87e846f7f2196c69bed0b9db497c1d8bcb0729d7c61bc614e11d2fb7f0a4de320d9c",
  "2.10": "6c204c771d3c64c62d8bad19:6148b24e16ac895cbcc00b84a563f924:58066709de60e89ab4b6f9ffb66ac0022ec7eab9b0b63299c8f19f2550d38baa94dc154df7c1424da9be44bc2612464040c783082b5c1cfb87733d1cb68bac35699f03986fff11a7907ab48a6795cca349eda4b780199e87b318538dc669f3bc760b235ab1e5acf126ac33040ca0d6a61ec0439794649a9fbf8aa58211cd36c38dffc1e8b0c0c0a5359d5575e3c098a11649b78c2e34de0f229057ae584bf964b5373482274df3a747510c60b68598723a0c384258d9fb5639235a2cc091ea690c6d63961f59fdd12709e431cf63",
  "2.11": "1d2f04cb336c7c760af6df15:8363f85f83a621b8af4bc8dc0e2315ec:99a04b7800cfaf8c649a572f631f59f1a6f68969ddea753829f4eaf70f385aa222360eca939cfbfabe790fcac425417ae0ad29cd924ebdae3c22f6f2c9a6bd60049b89fc3dac7563216682c2c7e2b506abd86b793795fda733f4ae857f49e9312db776008bf31ca31ac280d789a22c1f75d11ee11cfd192b9fd8a29fc79da39538918ce139db13d5ec5e9238fe327895a0e8881157c4dbf5d5069f2d2e4080298106c874763ba0bb7d3881583571d0e3b456de2ca407f56fe9da2f7b16fabf88805392592238e022",
  "2.12": "15a49148f664eac7566180fd:35fc10d41647b48fb673fd5eacc2263b:50aab26db31c39ea15ac299d9f9c1b1a9b580f9a8ea0fb4a3c7848c2976096daa9792cd2970cdbb557c46c3526f93aed509a2c190d2914247ca51725685e594a311e2a31f0c084c87c8baf15387b0b7b3f74d90240290b394b7f8cadeca86ebb5883cbad66a98341c699a42e049c5aacecba24e1",
  "2.13": "16d146cbfcdc9379f66cb188:053fd8a432c590dc7a050bfd8ecf5fd7:900b7d14c32a89133d905e6f953eb7362bec717c640e1e164db7d75f0201ea060a90ef08124231f1e2502eb0bd87cdc6d4b08632d7c15cabfd83f1ed5eeb0cd4ea85298c17787559858e62fe7f5ea42bc42c97e7b8c90212e693fa645ecfdc5ddbe1923359c275e221c6604bf6589c8037d1cb075b58c8ead1b35e8fe2cbcec5c066c366a697f36dfcb0ebb4e7d63b493478dcf7f9cd459c096a3129c7806f8b6c705961410fb310c14f878a0a962cbbeac39969eacd898d3a993c9564fa91",
  "2.14": "e15657b9262d94a6350c46d0:7f46b7cfaf40f1db146a383e065cf36b:841ad33d0f2894622590c43a50416d034f7254880bbcfd0c522a7a6d731802f39e17f8a1933dda6e6ebdd88dac1b9360b626cac6be16a3c419671148475de765edb95182a295003c43855dec7b79fb96cddaed438c4b28d85f1f09b4c4057e557e1cb7bd441eb44f967c9c498c6ea900d333d10bb4d94d9e99157f39472f0dece562ed0179884562dd32fa01e0fdfa2e12d9c3292bc43744499bc34d54697ade6c7d3ed91c268d174281288463cd281d1d83c37e7f5b7d8792f9a7c322fbe4adcb026bab2d8a7f615c49421abc7df5d76f4bde9f340e14f88cb8369f419fa847ec90cf31db23c5c3c21dab263fa2687d9c77c5905d7cdbd0d763d5598fe131870dd6a7fae5f3f4cd6522264e76f1e12a9e34c9f181d97287848f194ef35131fe1f8f03fb44a709a7bc3c6b1750b946bfbea3bf308dbcb1fd17bdfd672d2736e500a941108950e8c4a65dad70145dc4a36b1a1c69f0978f72f62da1cc5c0ecdf2bb8d2c1faf7e",
  "2.15": "61c743cf1d06424872c2d9ed:72f987a44e47c3e7ca68542462e6ac4b:21b0b3a492b5c9d185484b28b0fe0ff5e7b69ad725d482609e994ee5a546c2fd20fdfb236198d009d8efcfc8234334030f998b9cf613113b5dfff8dbc9a7721b2573850e8ff5d677470f567615f82209bf77a48de002af694dca66ad3aa5186d050856d75a2ad1a180ce3a322435e1e227fff65ef86fc8ba66ebca3238e47dcb3b95aaf6cf3ca7623c1da6bbd4cbde9d54032c9a39b561b7ae9b8de7f611948ae0a59f404053c632ab18f4d8e73d7eb7f751a9dd59e97847741fb8f5056318ab90508e07f23b286e42ddd91d746fca085c3d8291a951ce6a8e0388fc4e5313c31f8dbae447864efd82640cc7c8dd9f9ad1cac2fdea73e9ec928c0ad84f635aebb7edd5dd008712cb621f439087f745b0752a4109653348c1529bc89a426df4b76c3348b82022d82b3fdc5772d366b3dce433548b1607282967b98ae7f08608c7727a8a711eb2636cfd3e3010e584970100889c7c13b2a6f2c0c0b6e68bcb74e41407b544c445c081",
  "2.16": "2e8bf398e8bc0808140cea19:28a9ad219ff4ce3681758a41cd714445:9b95aa8a6b264b6925751b6d593a8ed2c99bf2989e7840dbaac5b30dbeb128f0333bdf9a8f1d144e72f5ab9ab1d2e0fe668ab59050b5c7958a40660bf2c067cd4ce031b3a4ddfed1cec938244539abf34b334a7737ec4bae6b50a6bf05e0c02ee5e361a0b1d04fdb7c82f14e79db8ac205838ed11a549e9067f7423f07ce022e8d95ecc409dfe47e9bd968b08fadf01ade605ba520bec88ea6ae83a94bc9d48c3912bb0bb884fc205c77b090efe7a54ab80fc62010396344b70483761f56c6f550a3b7cb8653d6f68be46aa7d298312b21b7b40f18eb83afc6fb38bd22d970e779a0cc0368abc8a2c264f0cc9ef8d0263c1d3695f7f1690991073ff897c1598dedec9faa2d6e4fe7505db8d768e4e5ae9d1fb8d5deb749d8cdd96d2a7170e0af6900e5c7dee7d317b8b9a352affe1ed596affdaa0231068a28a233f5efd327f247a5822e4d4bb35adefa89767267cc0501712d06099e5932cab1d014e22e3df5c1921e94ef79cb307eeb4a7d6678848b9652b5feb32791dbc0f2ac2bfc2975eacfd3642e0a9b5a212e1049161bf484758427846ef875b052a00562b52a",
  "2.17": "574bceac9cbfaa431e78e3ec:391d02dec9e013a84780c2f1cdd4a755:972ea658ea71fa3465d938b77b860dfcdbfef78441c9c10c6cd98911d1a7b24f907511e9b0b795825f51ca0d9d3fab1f2d3e593f2da40428fac8ebb4775eb7c40080536ef4d2164601ac73ef4877fbcf3eb72fb5a2aa9ff01e552708fde08df709fd9187237062218f2657b11358255951b1856ba5aa005ddf1b6f7651e5187c7112ee6bccf57601bb05b7187af42ecae5eae5f77b925accaa842686b35281471cd95d6b9d2b7cc990584a722eeb93366f7a371aafa2b29ea0b042c5200246b6553c1246f3a7cb4468c5bc64e252a23651e156695d288e22ec3f5d80e261837174c14365067327634b1896411a9f565dd6ee7d1ff56adac22deed67d1181c217fceb00399136778f46b0bb03fff6727138660c179cac3855a329bc8e1d133a458344f3f45d37e7e403204f8d90b82b612ae4863fc5eadff23bc6b8aa",
  "2.18": "e985d771a86dfee9a75f882e:657b99e5cd9abd1bd40e1d78f3faa14a:7e167e0b121a1f106f7880a7a67d127d1f9444f96a333dd235efb9565289e58ea426a8f7ccf4927acbcb262cf63664f163432edf0769e025400a1a17f36dc5c2cbf27661e9269f8ff4b2db22e37d0756b4e0f70294b7f59a510a9ecb2b087d9424b3056b11579f88b43c71ae15a94e79a82d25a1fc55d931b1ce2e4b1b438ff55c3425e2a191e6dd59c34788e5d71dd73f714482cf09535137df8570bdcd7ebd6c5cba7b60fb0b890d889372396888eacfa0b049ce47e4c40ffe3c87a059127c2d3268d2923409bbbdaa0ac1a59bba4704366a53857345",
  "2.19": "63c1196f6ed31cc92861543d:dccc6bdfcd2ee9123a295275408d31a0:70d1acba5cf2a8fe880e31b6483dcd4df6085fcf4dd8f25bf8f831485ef55f3a2ff7cb2c7ba08a5b60a0944a67265d67db3fbbcdf48f5aa852a778448e947fdb482e354589e68a3a24936649ea665f7699327c93aeec76af29d4e31efe74a3f1d453868e429546bd24a34052f3f1442437cf3bf6136b07a4598bcca3571abee919041a73f73c8ac7b65304fc64c9bd4f33d4d9e0650e5847eeac3446d8dbff597b134d3a756be4c203fb653b11e8d3862940",
  "2.20": "f081c56205bdeea8341c2e37:831c8921315e5adb3f20226d41387718:eb14b532061959ea67cc2207d65257d3d1b627fe5ee1cd81dcb800b01e16744fe841e9b4a41b19655a64b29e437d180329d642ee5a3a94fae597d04d7b7dbbe83c5f5e07461ae2c8da99a244bf6af7715cf4c61a840991b0ceaef5d959a7c1c5808cd4a83ab3b2da8d8cb077031e2b2a117f5c6009c67a6e9f19ff48d3cf087894fb1bdbc9c1f8c5dc239a996299a5be399cf06bba724f8a3361b1e3a5e93516eb57ea14181e6efc616c084f99b7928aaa0c819c61df5055b8e8fe",
  "2.21": "b2a34acce1b25fc13a691c76:95e086d5a988b2822e44d8884953d601:700e905f1a948f05ab59dfac9cf4ca9c253951fd60364b15f34b85cd14c3b0545e41a9a3e0222c2141e6a6a035038bd7f67b5eff1205c20e48f0e44779a55188a03be64d9fc22284dfe8cdc0341b6fcc42d2472899d8abe022ffba93720c7c3fafd70761a5a9396b31177f0b24c0d8632f43d0809e4272628f437ad1babf114c8f4bbc0fc6beb03e69b83d2468f716bd658518de46120d0da0d8bfcb7ec5f10017ea34faf28a70828b050c779dcd2009a94e03fc7dac0b303d04b0d88dff96f800492f597049af58bd0ab7ef29c415af880f2288ac4e7379905dca",
  "2.22": "65bcc598e54e7b7c47a04e91:b0453d781d3d9f91ada6962dd6f53d06:3054e39640d83fef0ab111ac11f293d40dcd3cbb8aeffdac95905eeab6125fb5d214b4362521a62d26f003a10428a91194957e4a36dcb81d3cfcc6b976092114113fc5a228346c086a1b51698d26de39971c41534d9b0d232eb97858d3ca3b700a586b49f5183d85e00a5a99b88ff145d3830d1d3005f8d5797ebcf116971c0175b03f66fccf25964142f3964f5f02f3d72adf9c2647ffd43723cdb022732d7e51ef107029347b7ea3c8ef0b64b19d00893ea81dff36adc5b63f84e7236de2226c5e54d90e0b7f1ce7e6becb23f2465fa7dfdff9f107c323",
  "2.23": "f4278376d8ac24b3b75e342b:d8a67ffcdd9c0f92b980604818ac9d8b:2e9df1d6d16c4eacecce33e3e30c45db0fc576f6ad85c8ddaa8755e1dcf15070b8cfd75f1fdf07d962219dd440994c67bf3acb03ba247d7a40200547ad597d7c9d3e0221f86a5b0a1d8dfcb6ad97458e0befa06aa4232a09915f0af0b77ddbdf557c2b03f4041a76d260f52d12b97f08079e2195da0c624421128c3c953697ad4698c6ae09017e8197f02cb9b39d02530fa467fb022d0ec36655521d59f9fa5f3a0c7e2a20734fae6d7be2ea29b558eccfac3a02b255712f89ee17f6f01d6e5e84f207533f34dcea2aed005e1dfce5066ca9ebdfa95476838e1869208cba83c1c86c621dc9509a678471f1c6fe14d1639aba2de2a70011a056b3ee269a05e8b0dc07e8b059",
  "2.24": "a0feacc62dc2e062396aa8ad:926399698d4c80de75d231e9df3e8f23:42e398943066ef948d65029f6fd24183784c488c5f9bf09f0545f56c0c4145631b13130d2ecc55d023e7c34afbb75d0c667316cc99eabc9daf890b58f6a7552870a7c12b8d4dcd6d5653c3c93a7d259330b1168380f64297793dcc9f4da2d029376c27a72ede3d0e604806a5901a6841d0b97e3a0bb8357c7b38626870e16d8424d02b74995f17323b021893b296fa408f795144d3068937d17e75fd4ec148ce364dc8144152c699e20f97fe10b686a43d674202fc373a6eae855ce0f890e7b8950b45c550151a6907ecd9bb5324a46c1d0f5ac7bacf573f9ebe0494e32393f2a43d992b6fae63f4057e34e7d3245b7578f42d6e9e2a38d50cf4667faf00ce3643c1f7cf41e01f6aa1024311615c7d52be95c79def54a051d441a15840495dbfd27317ff15d581cfa0c8ad165126b1108b6477333acfe99333c417ca725296faff390f1b0c611991842670cc22389f85447cbc6bd4169d6620f8c56af1be0f96147e18a50f0311f824ff5cf56122efbd1bbeda29dd4d8f76da95204f4a016c6d6a05406a9ffd016c858b4f585de35470154304c409ced6b0555a4bb0a870633da7de97e9a85bc3be53f1fb881df2888f72d8bb30278ff523d1f27f08869f95b97edc7d4182dc6a0eee68d7632984715536382b8013f104ef9163168af3a6e30b75d4476e48edb5fed2449942d39589b16a2ff5bdeeaa00add0c5d908f82096666f56ef79b6938b475b2f2aea08bdb56051847260",
  "2.25": "b1e6b084682aca62ec6ae539:a4d0232dad68ade1a8765fc02e7a71fa:2ff0966e907011b001c14baa7a764ab9bf2dd8b04b0bfd90c6b3992b8417795f7c0c9cfe5522e2087a55495f7dbd9ae58363f702182cc8af6241c8519f723238d4d582acc44d94d521619bed6f1f97b2069e71730ea44e0ecb55be2dddf8f93c64e64301da1142104fe4032c07d3266bdab9595e303ad14eee99b72ca62f79a8b9eab09c87ef9c60d2d3e1ecf620217e7e15dbd4bd991b579983d964b8bd252e96bd95ccc65b50b36555d43795fcbdc398b8849252c4a457f7fbb13098722631b754a5186f19bc9c9a39b8e23628c052abbb335a4d7505686a9899f33d599c1cfe5cd7f929d1bd280926596a040e1d921e05ef21062431024fd56bf9e93c4f75f75b46807c123a225b501911d049dfe67e1cf3f1ce2db0",
  "2.26": "ecb15df32c2fe41b6aba40e5:b802ea3439813ad25d431c2ddd0b624e:3167fa7536f50298364518486867d35e808f718a65cac839d8737e880a24f67620e8b3a19efb9ecf4e1e7b09d74288ad7fd1bae9b70ca10e6f7caee18a57ae0f9f8adb9eb24942031a9aea72667ac0c490ad3bd1a08fdef3d763e46bf48702c8ea1214e119711cb427759e947f3e0501c37377b1e566836fae75bee2e0bf9ed3d0a9df11c27d3800e94bdf07c9b86ad4d023e179acb387d7fa24375534c85a26eafa800f4e75e6c0c3a2a45378063f64685ba3606a36d99a7fde72ca0f81f4460acbf8af8d3f0aa9f0a79e4db1848c6dee698ee2d9e8a714e6a357652c3bdcf7851f1e9dd0f17b9b4b7c8f2307d56d49fcf6f2dc90ed8446bb7b8c7c24149801ebb7e23e99129515465a2751dc167ffdad33918a785194d2",
  "2.27": "c22745d7809b2181eccd46a6:d733dcfb55849439d9a695585224e92b:98c2175fe3583ff928b9e15a6aea94d221e37574a3e3476b49f8c9d9614c2cee8edfd1e8810beddeea722ff1779d3585d439a6a075cf6cf4afa72f439a5eeeef98bfd9317d955b73bb2182e26976bda0b244156210771294d8c6b630fd2a",
  "2.28": "143f823d575fc4bd98702627:1126a00079d33259c52a66affe9fc354:9fa6d1c52e8c4ce13c8716b71955e1b27d92a86a661858625dbb385be10de8e66be3fae37c509110e24ebce376ca90a8f765466dcbada79d90b620fe00ea8235d55fb5393472f1a2d8674f45751f15b05c61763aef66d7d70bca364a7eee241c4c9023c120ac4e128f006f76a1211baf36f9425f568029541be81bb1f90a9bd11e92c7e0bfb67ba690ed8f5b2f9566a198037c9b1ba6d2595572e896afcae4895b802e4982f7e4fc0b51e2d8b2bd94fd876e55e05c99758145491ce3023889d236a1cb56547bdf32044eb23da24a0a3cb43ce66b8d44ac4c8fe443a013cf3dbf7288df0e88ce3a70475c6ffae8ed80a90b55b09475c4aec0b81b56e8ecbad26c093730bf22423ffe5fd1ba4daeb32c88d4ba4fb4be5e2ae5229325b97bd0c64e4f3c6af9b0afb7836cfd8fd97221269ce48af667e6b0602a71d588a6c87298fe031672651a",
  "2.29": "585876bd33981761f0ddc36b:b72c0c6381b27a270d0cce0ec1676fd9:1f62e58f02f1baa1edc3cca1abca42be66ed70df3fca4682f34bb6990e51f22a9005a471a9199926ce59db8a8c300e0db14e781ee2c89a53bb0a3361e80f7a1276c530f57545deefd9c6636a80674807eb5d6a4933c6e157f936222f69d13bfb85d3f8b134eb420fc27c193ab696757bfe3b3561556bb6f45f23dc63e35ba3c3683d",
  "2.30": "f2fa91d27c21cc7dd94617e7:207c87dac76db8d7ed8f68da22fae18f:15689ffc5e7317ece8e6f158848978916e5864d2e92bfcb22673d6106b847e3000cb154859fcfc5e2ec508dce0fce820486fa0b976122b18fb790baa2a767011929a7deb78f8830130146993a32d5ee330221cca453d85ab61a7b2eb2fc4e4cc944c6bbbf600de3633935dbe534b8a34869d8dcd39d941a48f86645622ff1630173596c794950b550741e8d36052f34a48ec6eb639e5bd7a1a42d74e226f43a0eec1a06808c8b9cf6d7874461aca00f2c3143b738673cab4f022ef4ad215fb8996ef0e35ef1a8f5265812c525c5d76cd65beb601ff7367956dd636",
  "3.1": "6af65c5952b2c834f8fb2fd3:e9f950d2fc23662fe5fc4d80af9ce6bb:84a9b0f39a8a9d58621a54831fc4760e02e241172953f95df5e85913e07d43c58a863a5743949c8f2841a168c00c4fdd0a829a245512648ba4b0cc680c326a52b1e4d2d4a02c15b984c21543bb0ae94b1cd3c2a4c7760544932664207e1343ea8f995c4b50cf253caab34023763859ea3dc86d7c433d0a1a99255b1e13d0124f5a0f215739de859ed28dc6dcf1173ca0ab1354429a567deebe08a97cd76cd9447dce0e45a1479ea962e6725d9cc0a96294c1e85035de97ac73e4823cf6f5c8acafac97",
  "3.2": "c1a0ab0e4bb590234d8c5336:d390bc4e45f69d9b93a8c9e3d328448b:846fcdcb2ecb9fa3cbab4d27633b1e46f18ffad23f200cc1502dc29f99f109d0a740a6455665010f7e947469f31aaeab3b43aafeb636f472d2caa369c716d3160aa44633b49d40aad54374c2d87200fb6d6c96d786490e041cc9594a2dce48b1fdedeb18f40eefa73b81427969d652fa278b0d8c0314541554f6b7bb2bb8b4ebced255a8588488654c945f337e1bd741249892c21393eb1f2a020c263af2e0748de9211f9398bf071d439396e22412e6d5c3f4c07d4bd2e744c022d0079541f7a6695547b85a0f3e66e3447500e8e4688874dfe4818583e8b3fe7c47ccf1ba",
  "3.3": "82dc30db3ce65982e8d6d2cf:c6fb13222f62e34cf95d1814ce564e0f:9885b87774f6c33be038fe9ef429f83b592bcc8e5c3ae55fc8eec3c08eb3994c3eeb21ae77e2c9b712c5cac121f5d43021df638da1512d9a9a2aa2ddbf2479d37fbe611184bbe71c3e8303b8c1e60f8ea756282a68a120676ecbe1662adb4ad979af73dd30ff160e8b7f167d0f99c5f83da322bd3f666f2cd3ca3ff712fcbb467eaf3a661b54c1551b5b5b19ea850241b82dc40d5a2b7631b64143b17c7b554cdfaad4b9bad5271494acdc8db14310bfcabec515294e919300fea577e3f38d9f768e87541c1bea7519a143d3522a94012b7dea5c2102b882606acf17b0edffa6016aad46cd91186f5a61a5020a842aa246c322d90e5b3525b30e7a57047ac902f4cae4a485e8bd4a3716de7df8023efaed6091f1882c48a0406f9279812508436dc185dd10a72f45b13d93067600e963f45aa04bdc979d4ac8728469566613b373af9a1adc",
  "3.4": "2fb1c316de4e631833fb32ef:5969b34d5f0b34654f79c794fa6d2826:8989b419e37eadd4ef2cfbd1ea58e74f0c733ec6a65e599836d7397489d4ff3641e065b3064f149779ef38d662000344410a8fa2f1a487d29000c4e72b5d2b7bf1e16a913d546db4113dd747",
  "3.5": "2e3ef962daa0b02d75bbf309:293082b00263e620d3ed43ec47ccb023:3e3551a9bd62367498743265b4f2156e2e78e50fe088d1b8bc5d7c0ca4ad3d66921f5bd93a75683fd6190d3d1312f5c6d5458d8cc4f46e91675fcd1350567d300dcfec3d1c79785aa8a79759a4110df104",
  "3.6": "3f140cf73d844ff79a1e7a29:1de229876fea3a5473295d8030a825e9:d34cbbd6da6196df13c5030d8841aec6d6f67ed9816d95210043",
  "3.7": "1a18ae43bbe48b48794890be:249398367574af3e6a6880ff740c91c7:ce6fb7cbdbdcb03ae0feb61ef6165bd9b0ba0751d185d6d75e9cd1a7f79937de852d199ef3114e7c6adfc7171be34eeb3ab8e47c86d8e519e10faf1ef35ccd5e5b53040dd7b6b31a548d3d36d282e2de870ba144f3059e28d612265c49e97d87df9ac742b3c70383ed2521ebe46ea15728f686351d38525837e08ae18c153d2005cb01042e81f7aa390e3f485d5e0d3ecd76f231d096eef7259d7da0c4b05146c7e7cb70d4c778dda0",
  "3.8": "1ec70a98537542dd6965a4f2:be7bbdf11a861b0a01d7c22a4e572f39:61d81dbea886be344410d7b31e0cfe214ca0239f8b569b4603918f6323eb9458fea6027dc5f0952967f39cb2ff4183b16cacd73d069ed1a12b021daf81fe22c0e3c9e7a18cffeec6363460f3c505c546517836c1ab6bb0ec608c21063a195069d9f0bcb7467aebfa37a4f8f87fcb6ff37e3c2f7c4b98c2a9e2dbe1bf0318df15debe933e81e8c347a9c1059ab5feb23000d2884c3e1641e42054464ca2a5",
  "3.9": "a9bae41ec7473475239946a3:c1a8db3fb6e4d7b5a29ac54f103322c8:a6485fd34a83eaf21a964d1ce7be0823a4e39d93f3ff65da29082666fbfae5b2ae4f73510189aedf482429c983a2d3fa974b2f5c48dfa96e922f3879b31fc007156b98eefd1c0889ef26a5b5401f03b28a492fa5dd143e4f787c82538c3ffed93cbc966ddac45d397c70f99ec1cee522cc7552ddb7f54c31ebb50f3c91117641ea4f37a2fa81c72edf1625af3bbf419b35580179fb0fd370fcf8b4da2d7eafe9223eac21",
  "3.10": "f9909b046c6f2e1f8f9985f7:a4ab56c65e1a1c4a010b71fc648a0e4f:9462c77ca62c73bc3ee0c9a41a97290f7ee05523f585b6039bba63508236b1c3a6e4bcad5c9d3cb999dc4c79fddb9f611c72f6894e92e263f531bded5eefdccee17bfa9a6776e18239ff154dc30edeaa4c778d84fd6770ca4f6849fece214d75c1ad68b17ff73cff43c02a53155ff7b73a56b9d970ec0d9828682c7f8d6287cbe5e6876991a6c4ea581b8911ecbe5435a8a7616cd001092b188138927121ae45815ae7db134cc5991cd8357e38a9543b53628746897a43af37dbf46f9f339716e508132428f1cf1a19692432f8171e5c59ee3c1f68339579835c3c338c983329266286d3678efc9e7cdd5768710268d15eeb89accd6c19c0ee3653",
  "3.11": "ca512315f014724ac37e996f:c338754bd8f781f21aa43fb2f97aec30:78f12d9e5b97fbdd6f33293d4ba5fc1131fd2fa670875f5151776e467f08ed4e0ce627da2a9ff7f8f2175a9aa2e5161fcaac9a495a089c159b81ea7c31a172d03b72a505416ffc393e2d496e1106fca1a09526a846b4c07cf48acc1a0ebc71b92ec22d44ec5f6ad1591a5103bb621c94b9c1ebc00f17499cadcb22276e62268e514886d4ce0315a1241631ff14b43ce68632ecb2885e5d3d92f8a8bf5a7cbb80642ee551c1773191cf3608a12df4d38e87af6c111d0efb8a8e62a0483b01d58dd0f06c74584ff92a91886f339bf8f7cc72578d68d479e5b56b6c3e6acd5827b904077631183593d7bd5f342464a4dc11fa3decfcecec3b21499e",
  "3.12": "d9d905730381ae22b6fa23e6:3eeaefe1539c44076de33ef3620d6051:1b2749fee795f566898b92a33512da1e5ad6614b0942461d93a7bb74e20dde7b89b6980a2d7d7a5b3b2d060e7b53ce3d250f165564ed55b5e831fb8adfbd3de32d5fe57a6d973cb8ef0b57bf38c5bcc255109667378fab05aa7a0ecb7c155d7fd6da1571f2254b201ef46389d47652d5aee01d59d7552661f442d90b2d0759d85cfe6dbfd410d633dc0934f8c76553e9a3ebdbdea4fe31bd96415ddf53f0c74d064345090b6603ec477429f29ae5ca77253b0c17b7668deb11aa63e99a33a8576d2fcd565e5c3578f1b8a5d06bb04a1eaac2f021c5ce1bcac500163f9f6fa3531315d24adef1624e34eb9095edb324da89faedc9c548e937201e9f491a5f28be4ee53c56a067cd6b38098dd3bbf67568a5c08870781865c5bc54ea8dc20d0368754428966ebae6176137dde96d46687ac95c067059bea5eb5ed6c4ea107e7b3dc8f7dee383dbf0675759702b2612e2f79599fea33e42294722194bbfa2b757b2",
  "3.13": "1ab0f3407bb8cfcfbb5df49d:d0860078e6bf3c9e37f04cf930328ce2:191f9a69865a04ca22443a3ce0e33da51787daabb4e9ddefe3ce1d787a7c5fa777323a81f74040b48f0e4c402aff35f11a1aac05a16d32c68dfd04e98d87834eb2b0da6a737116ebb303ef979a975a2cbfad942751ca05d0a5c8ee266747fc33bd4cf1c36beafd5e3c3f5ada905be4ac177907dc83bc044f4694b6b3c035297b52bc77426f913b691c11431aab8801c61c0a3cb661c7caa66948104ccef1ed5c36f1989349ebcdda1804987222f4f602aa55dafdd9acc5db94a2163bf0dc6a03fa007c095bf5362d6976c65990471ce45c7a4159cc9d2a93eb2d78dae947109d6ca09bfa646dd69f3e57ed25e412b97568109f7971",
  "3.14": "3c407faadc32afeaf3042088:fdd4e75abe738c7acd5e93f544907c84:456b3f88220b94f7488ef72b14923b5b01f5c39ef5e270951cacae8a4891c4311a60c09b44de174a1712e7a39362dec7585fa8c1b8c12c55dcd7801d5979626817c1bc7368458be3b9329b0558d65062aded284759dc7f344318c5c4afdd6ff16ca55fc71bcd229a250f1058a792aef0577cf9e1927aeff60d53e1de9817f0d470858edb9e779690a885a628f9a6cd469262c64191b7d4a5f52becbedfbf2ac4bbfaadb974cfa86eebffc16ec72438490022dd86756807e246443db23424611f43cc457cee98b00e2ff4",
  "3.15": "28d8beed211bd699f4449cae:206c0c16446aceed1c97da5c13ab5592:e92e788e49dfdde687fc56724faa11d8e9126cfd08664f0e6a141f2f6982196b8db8adc2df4a4a047d4784899e229695d0fbb907743cb7fcb819e9255122dec18ef5eed5e9a387eb4a89c08dd8990188e63c45436030853f0ce6165a5805d9e172772a7788616874cc10d35c7752e51e5e6365dc8bab25abea159d7ceb9f785d70e489b64a95fe9d48494b386629c9328999172d3f7d7d9393913beddb1b263a2fb829de2b3849405f4e90f884812bf0",
  "3.16": "478270c850a8b8a9a386b58e:3ed31363a21c852252b5b66297064429:2b256060f4c691a45beba7664e650f97b905ec212aff1eb23f9772116d4ddf7b698aa8ebbce8f593f73d6048a04e4db20382cf8064eba51cf7d9e62888a7ad969d9a108145116a4b84f40d8cf456b8ffa3aeb2160370202f5fddcaaa4df24831d078a9a32e4168c92248556b3623489ec7313943adbb5cf2483c79c891ecf25f7348f2f1de0f8c7cc68f95f50fed18e03e97f5d72709547ecb821325f16cc8a5ab",
  "3.17": "ffbd6e15e1b30136a8a3583e:ce9d810c976742a583f74793faaf25d7:40884dce4d9edcae30ac580b3beeea5486b4d87803d1e15fbe6163e4290be19cca91ecb801101bffeae1fbbb89596a1d810489df60dfc5b2873d761e1edc45227cfd4619a63433f9806dc697990c7cc4bb734424daaa875a27ca594a1453517c082aada3bdb1da7346cc2ca0f0c792d6737154f02323fc3f26cdae7c9118dcf5116b49bd1ec227bd77310b45275641d7f522f88ce0e26e022334ddb1d17c2a2e91066803e7e14ad1cdda6db7366ec93dd9f101bdff4bdee3085470c72f",
  "3.18": "a99b94eb620d06d936997202:707afd6cb9e4c01c30a7f91fd6c1d6e3:ec23abe06b2968d27a5a96495ffb892e09e880868d546464ddd167af84ef765729cbae9dce951a6aa5d13bad6fb88e44ef933020810763e36bc25871219b258f",
  "3.19": "555260d48a9581b03a5caf3c:7a4de4534b07d3e670fb4e9099dcf0a0:2a7f85028d1de32c7723bae37a22fc76d79d537ee407e9195c4c486a2971d6596e0a06d49c48920458d35b6b16b622e5db7257d5da4e458bdde69bc60868348d6755d30c8bc8aa1e488ef64b0c57dc6d39914908aa713ff576129d1a71b49183da99a213e13153a6da1d8b425aec84f92d958ad8df7871917cac0be5f3ada54d2549ed4c24101d2f7a2ba5c1f9a51ab2c1c318591c53fe2b423ee78ed8e1e7312147bcb5d2aad77fb2feb364a180defb1b4623bcd3df79b046a69caf282d20c356108ad4a7af78e619781e01d67e76826c3491d27459093177bbb27d0ca74193fc667808631f532fd6aefc36ce86a3b38f86b0c19e429750febc90aeaf3778e3d2f0789270",
  "3.20": "918cc33be9c846995f3ad5b2:6d7811d4a0abc706f5002b8cabfc441b:d42501bc3e82c91ea11fc50d3fd648b584445fb5639110f6bccbf9a2737e80539fdc2ae74f416ceb7044d334f8003d11b4f487c5c0303dd436649c9cb3479a50f378584c9f2d9e9041a6b7f2ead0cfe5d97d793369546d5ad7f5627a8edd4fe282974c7b3a55c21224328fbb62171eb5763bc7299c29587f343d5898bf5f7ea29391ec2a86fe068b04fc432d56aac75271889f8b54fe28478032e167547b3518778771637c63d4ba6a575eb27ffa1836b91f819148bf2c43ccf7cec040f55abf22d90aa25715083bc1a6c945a51b91b10d96129c85901be3819fb854707a02c317b2ef8d1bc9156f28dd8d55a3896d8d66b10d439cdf9c28557696d4d9",
  "3.21": "21c6a5f3d642a571eda9999c:8e560f3b364998fecc411a630f9d2de5:9cc9c9be82e59cbeff74ee39e7906fefe50ac112c31dda7b1153939315f40d8f004403446486a10850175c8c33263431ee1c44581bd2c67eb73b936af3170f67c4ef35b868b46a5ffa9070355c765fc5f897f5915d4a4df1f98ff3996075c3f11986fb461a8d0c5f77b03b8577c2189b7b566f43c25fea6bb47e68c5f553bea569471a212817ada85641ae681f86fef97ff2d6b9292f9bcec019ba690d9c07763d3f6038e2fd24856eeec5fdd5f485472aef4872aeafb97e2c69a3b6db403e7bd16c9b9e27e77477891aefaee5749ebb704f4a52a0a9e080435f65ec3a7106965fde6f8dbdaabf4ea4610a321e2fa6dbc858a14f7787930fc2c5c7475a75c9a7dfbd6bc43a8d7d3730d3c21528886f48f522972b8ac04a9aede1053317659809533c125a012a661b7fa2",
  "3.22": "3f99a4fb36ef404bb03efbc4:a1d1252cc8aa8d4bbe6e73b8b942d948:4592092bb12b71f2546e349208d89a54d96b4b58abd0868637012579c4580b12b4487d1ceeb937d863185b0136c3e14b34eee5665985ef40d54cce5d2a3d6a63c80f0621a0828c10717f748f030e5f0c8b0d54b6327afbdee134764db4f9e39bf1a300b6f792fdddcc5de42a01a845f11c549544612209de6b5a779ead56287fe05a4a5a0d50ef1910d48c237dd23e24c7fbd1d8817e5603354502cdd0736906e29f50489df13313eaefd1dafd0721062fa1209c94ee485d11d652cd123b0050c6ed92397eaa6bf8e1606d5bc944b79202353da15b08f534e60e038f72063116ef9a77459b38d8292dcc18dd9203a98cfddd6090086255ebc07a18bdc0121dfb777be133f9dea2458e84d8bb16ea93a98e4c4ad87291d41c60ba437eded94d20544602b497c881d424009cd2f6102a35d46f2ce5c69e336b6b31685f76f8aebd34bc3399cd6245b568d36512fb73365efd6f2d2ce53c79a16230da0cf4c4591689512caa381a63f15ce36de5b2e511f0cfd6979f3ed0e92c60308f047466611f0bb153b95f333518ada71aaf59048bcd6abfb60186fedfe2bdd07f1e47fdffdc019e0fa33dd617931133ffd3ca52f25d145a72a611696c8d2042c68bea0ca1acb864d988518770f5510d4ca79d8031ad4bb664bed5808d5b7e0e425880110464fb7a2175278ff47b9d8877c492b9b09601c17200a17ff49461062d36639732b86e9900479348635a55c56485925cca2085d7ce8979c4e57c2a5d50db267da97ec13e3fe0b657aa8a05b84c3e1509ba8fd16dac16e2fecdb49640f1714993034d94b4ada7b0cf9098984bd1235a00c796d47574c92612cad1f25e020c4c2a668022f8f7bc1875a3253811da3d42909fa8a59334e6b2856b5e0eb0c7276fdb8d9e3e0f316e18737b2dbfa7e09e7f662bb03c315ce4aac6b0928b2e7a7a94e63ddc3529e934f572a32e9a5442bab0ceb14bd9631a3c79da6d88747198ee7b56624b297b0b777cb3779dd29e21ba111c",
  "3.23": "ccbd1cb09cbefe6f4218a050:254a1005e81e470261d908c0be223068:f00e4d2c2ce35b6b3ce9509d4d7c59d7ad6a35a3aa9427f0252d80ccbf0f9ee3ca6f1900aee3aa0e12032e43ced42b1257e77befcaddb8a6fcdbf67b2c430d977140e26e75a1f78b922372b146ecdd1b9009a9411471811272bdff92ea6fe2ac730c36b9cd631984f54708ed017ff169b55f8ddcd773daaa8613b70652d40dc7f03f3ebd6683a590095bbcf3924b1da73bff8eac2b8374d058b7d21f17fa0a7659b6c87e2234c77485be78eb3ed695f7a71fde2082e051d3c6189315eb1c8c75680b4ee2d51d308fcdd561a3ebdacd3cabb9df20593c8da6e405014fed3f02baed019eae2b64a5203182c0eaa382aa000d61210f25f6f0de503a4dd412b1ed2bb965d415171b0b4ad2586e6832d183195c02e3e488c9f75d56abc8109594393318fd51bb",
  "3.24": "ae5d62a55b703cce207b1d7d:14794735abfd5f17ad2e4d43806a5314:39abcad33d92e433edd0722c9def8196a696aab9c09966ae7d5ee00c11b17c5c4d550d7cc15309a06e76fd1876166ba1b5b5becdf53ae5d73d41c254a3a0452fbcc0960b2529276f1d508ae8843abbe8638373c27cf6918927c2d1e471d40beb79a4146eed2329e991957793774d7e19806ba4cd45397fc9672481964724d5eb4f77414f29d655eb8d8edfa606a622",
  "3.25": "94c0f15dc74d050476059c51:1672a3176a91bcdb9e9bb046a9f3b2a2:18641af29920a4c952c163908a60e305ea2e3653398eec0e84d05c55e6244f0d596f5e881f9ff7bb2349281c8f4884bdc6617f4eeb090377e831b4a3eeee1b83e675a661fc01ba6e51b838eb5bd73a7bd0b481397e9ca66a39aa5f6f8f806f54d61e9df27d0fcc3e88d239eb3dcff9da8c27d0542db47c057a04f668f1ebe80108e3496b5fc8e62ebb402161a04f8c3e02745d0bf20cb6d6f339033c094595b366028f4224dac2aabf20e4aa41833195f20a1e85bcab76abc0336957ad5975d2ceab884540b9a393843c381f34db4264a5eb708e47747eb99083f49c669525bc0110d3fe492c636a5901f0f7381cfab75e94f3f8019b3d228df9b31ea5d589e912c41ba4ab53c8766b3f39d826d1ff65bd3c6ba2347048f2599051407b28c6df43873f64a438154663045517dec6234c",
  "3.26": "4bbb440b8cbff4415e11a0e1:5ad6b3ebdb4faee2ba1de029f29e8a2e:1d284f62ae5b6aaf6c2ff397688c4a1a693a721c10b8cf62142f0167025445f570594f7c3f433ae6b97ad41bf8206a453b0fcaed6af83b9cc471e8661b689e8fb667b202fec6619f24b0e2bf94673f6b07f5f45b36c73adccd6e199873f15d0e2ea36fbc8f3970268e8d8cadd5625f2ab1d78b6edb81297163cbcb76824e0b86bc47f2124e590206125234efaadf60ef0691fbc9e499c9128889",
  "3.27": "2e03b6d6694ea89631410099:07c468c19adae255f5958d46ecf8a87c:16258de95dc7fe91a8412298417a1c923cde7c2fd322353b9b9fc6d68f3bda7b7a98c7c286e9225cd0058f7815ae073b70afaafee0974f98445d2940e4a4f2a5e92721785472107430edb9333ebae11d98de9d07a5b48add812c05d37193e338221b5bcdb1949885df0e26e10d6748939281cda7159f38409ec4b7f429cf2a7d10aa8df92e6489bceb617322c3cecbc14a136d6ed9ba6cc248397b3f5d4e8bb44d4e5e7852f257e3ab8f1deb6ab6cb8da5ba393f73bbe22fc75940cccfda605c06aaf2e66f55a0b6813177d4bc100a0aa253edf1247b9386b0f1cdc865a88a2e8288710732f79a8b535a05bb5303e3cd3cf15d167cfe60fa80fae868eecb5f71217e600842f4be48b2815a177ff0dcd5c2fa3a436e9b1106cc63",
  "3.28": "923cc84d02f5a37e023a3ce0:2eb6edfd9271d4cfd8fe104799a42188:eb17ae4d76f40bb8d22c2245f63ce9e349b02b4db830dbb92fcfaafd78e44e0f16726f285db114d2ad5ccba2ad7b7cb8c2d712d2fc7b0b3b5ae1bea34938a21dd5b21923eaff2361142984ae715d7edddd21ebffea9ecccfd5d1f6d01bcd62f8dca21a590a13c06d8f956f40647ea0fbeef0",
  "3.29": "530024d40158a1819c48dbc6:015342f3edd2e5a517bba32b45d8067a:181eea06a7e3b8fd2330d05b960c8b03674485a30abbf861c26e986ac548ee0fd4adf53b4d008956f3d424a3ae6a669ef92a5819fce87679bbfb470a0856a80f173288668b8bcce6f7d3632de7b6e55d64dc4f9206c12486fa056420dcd6864f02c4c4f1c1648d477abd73b31a797f0d59702b355a7095bfefeb28474db059264760f11567f12cad30a4dfab42771030fd42f7b9fda3fa89569627b3b1e8ddafef021ab5caa0a78fb3986e5b050d1b1ae34a3a3942d90d217b539a41075f85d1706b3f1bc3375d00cb9801433ce50b220ee50461b5faa02b7834174d24",
  "3.30": "4bb173b69d12a3e361ddc091:a310c74151305d3fcb2694304d491570:78d73c3f6b13370034c0b37cd6d15a0b8189258cdd9aad4d641a49701e45bf563fc8d6fb4a225eff74bbdffcd0f3658ea4d2c71047b9448f448805857d802ad1a153fcd85e8bf402fd797eed86ba6fce7242d2bb7bb49672cdc621ea1914090fffc8c3acd9dc62694bc8f60649611b80f844c99aa2c6d2b4bd60f4c6577b1092dd43263f99f348fa87546f944a6e4b07430255e47f",
  "3.31": "7364e375d88c6a3a4a79df5d:92304570f9af18090ce734ee18c02a16:70380c37cc6f30afa4dbcabf3665849370708b708cb892ac5ef033b5d458420967e48cf5122b4aff30a50fb564161827094069003bc6d9f67a1cc245e932c876dc2bb45ed5492c1eb8d3a49a9dbf15f31da7ba465d44c39622235b4d480378bfd0bb46919507db1b8e5953757048935641f9ed18dbd47b089401c3fe36e925f33479d4dfbbd0e06f169d61df69a9dba966b7bc57e8229f059f6a5eb4b46469b6e35a53049bdf4a43184b330747af3154d1048dd8c85f14f5fd7ae3c5060c884f96258e976e012aae9e8448fe3dcb9ee5d1241c7af99f6160ad158c94939aa00e7f4db3c54ab9a5af03dab2e78fcbf167fb0e215bce28d8d7e79afd9d9009db0c48d16d41e5f44814b9faf8fd46f33d216c535ad7bf8f84e5023f2e47676524f2e61ec15e4b99136d75981865f8b91e99bddc0467c9b6ce7ba8b7f2cbb6561df0574ad8922649756e50982ad418fbc18121",
  "3.32": "85e3aca118a1aed183730a9e:8a2b6c7bfe097681ffc61b8f92d30462:2d05a904b2616913e695bd48e5cb04c29bae40e2473f37f7c8571d1f0415dc7d220f0b1f3027d4d6d1bd257b01d88c34c9ff294c2795055774fb31587266091d9791697f4b240d5f50d4ea26db165b275a27b543bf68896fb96f4376725c11b21e8e86b1816ea354e1bc5377f22122a6196965af8b86c2c150e70243b978f8a72b10dc88fe94921a2b23f914608dd4728e85fb7d86118ba261766a509d8889cae3b55d73b1b4914c3eeb6fb16438f5b3c8e62befd6f3aa38d1e5a2baf58466cbd47bb5cdbe477d1b432e131dde199125ba29413c70f82524108faa92390029fd09c9f72104ac2467187f34c5c5a10027ad5d39b550c88bcdba08a24347e97dcfd6b93078665b2c44e2a8ec234d82140e4ea809fe287430f0acc4bfe27a87995d2b5074456fe02aaa33f4db866b5fa49d16498d1f6ef68072e9467df8d52a6c1ac59dafe37f6116636a64ec50cf5c67c9ff2e0aee68e1342ad05b95eda66203c3058792ca7cc8a21ee625bdf711279308022de44a8e41f201931861607a81087c0bbf73ed9c4261b12772b256df3af760a853ad94b751d97c50bbb08fdabcb39065782a96d9dfa309a1657b9392d664db02a85268da3c071e4b6e6dd6036e0b277c197701bdc9a9e1288b30c8658d9f7a216cc4b8321b66dcf10083628c1bb44600a3915ebfab8bd230518f171513afdca7fb0abecd5c342bbae17ded1366388569f427961e6e70edef9d555095637c82de43d9515b2aa712420d2a",
  "4.1": "f29c44cee2e722170324b47e:3a936b20c8e6a16ac870bf4818014d5e:67b21c890e8402ea9e8746e8d605d0f183f70e551a84d49d1d6929bed6f6851e84a91a36104de71c9a26af62f6dbe424e186a8d6273ab53b7a13097bbe360368ae7965055c02c4970c3daabd58af5d9379b219",
  "4.2": "93fe85137122328284253918:feedc66fbdfedb5cc03d2dd72011c8d7:914ee419bfd4cf520a21b399c26d5303012b66533ef885458124a809312fc56e8a005674719b05a6685ce2b28b405d1bebb3bde2c1a09adff52e0b8df2119957121f6cf8430a30eb19574cf47bb0e3411e3754bfd89b177691826da693066c2b6249c9ddf5575b3bc77b4bf2f136ca0353294ad5b9042e8835a2eeb0a07b4b6751fe4cb83541d49949a4bc7b8ee373bfa52f710aa90db4e825e1bde2a47ad5e9f2886a45fc7b406e6b8a9a56",
  "4.3": "92a143b61193a1c90f65dc49:5a09bb38f751361502f1a02a984ad2ba:94ab004dbbc098039b7e84f4b6f2438d97f1f2608b0ae8456b2cadfc4d401321fe3c42c8842cef9f7e663471734964fba1a083c59f5d1a432f2b412b9f33b01c30f9127f610f42a66699cce6697aacb01ffa492e15020dac7f08d1dc58545033dbaf260deec97a941d00328870b521558c3816f3e5a8e7c4e0a429e2fd12c4945f30c3851c590fbef1a2ed6cdde1f8bb9fc15612c97aa26177d219110da1fef84d3e7c1d8b8aa7ed92bff64ac98288038a79064ad7605835e222aca64c072110db10c068d18c6596210af5fe89994be11cb038a32b434dcdb464617b7d376a8116e4d003c3d241f77cfc0b52e50aa40c1c0dc6e1e1f7361d534e775f0247908ef1a0d63d42f193ecb2a17fceb8648a34898b1230ea121466f35bd36f1439d84139e96cb7a0ecb213e5a1d1310c936538",
  "4.4": "f08399344f474f20adbb39a4:a5f6c0bbffd08c6e1b9483fbaa551443:fd8655d21ae2398567a4984958885e7e05af51fd3a7a5a8ac21447e2fb0c5e1d5037088cd4db103ee52f4d299e78e24fc5fa5ece3a5af839deaea6902164b8cfd32678dd86175241555f83b5b2082937686a504c029277ed78b5113de25c6a816e45b97ca16578c109be586d55b24beda5f86f42d4b00e2357b91bc8d5eb59b0b42a14e14471425f33d2284e098407933c2d374b33d4f044039525379b828033b5ecf1462e02f58ab29ee87f00d73ecf83ef8918b7f382dc444ddc5a3762ade5efd9fe807398f25abcf1f0b972a80d50fdde04a867b23b397163cefdcbec404faac66877ead45dadf1e8f71e78fb4b04812328640139d12ab96b7257cdc53d3241025c1852ea1ccadb1559251bdfb46fc81d0f66efcca8d2dfac74f69b4395",
  "4.5": "67034d973ee187758079c45b:c1dc3f9bd248fbaedcdea2158b2a2e6a:06fab146cf22bbc4cac33c6d2235fecd16753c4800fac79edceb73e45f382b6af969a188a9ddcacdd19ffb1833990bb52da209151178f3835141d4adacf66010187394de91e214b9dc3018bc030ad00faa476d38c32abcbdd0c3c16f8c23502381dbfd20046814f218a40fc227597445298375a6e7085766b30ecd78bf6f6db5d8dc30a986253ab6d7018400de460c71882852a67250b6ec29031c2f6406521cf4b54eca4b72c8e33400834768022fef6794e916343d4b3d28f6621a40a24814f5e7d8c4813855aba7441fd9f985f6cc3a75f0685fd044dbf16116c98ba32af96782954151b06d86f6975bfe87ad58114637209148b283855c475768d9b3c612bdbf9a9b4c069141366f9cb69920e18fb60a38167a12d279966f70e79fc6b381a99823",
  "4.6": "2f1f2fb5aa02a48c12d87c6c:c20e76c491fbdc19ad49f2cb861ecbe5:6f2bdf63f1765e8303fc06ea71fda881a111a9f8a9fb6bacd95a5f7fe9a053a730cdebd44b545a3013e14b1109cd34f18f0ccb64773cfb450d0e45bb4d4c687b0a3c5b19c0554b0be81f32c601828b05393d8504bf75ed40336f4a6315a384cb",
  "4.7": "119db26029fee1669ccc24a7:21ece402a77ebd231f3dfd18d565f377:1d2b1e5599f13e4017f720369898153ecdeb1c6b442502436b60cfcdf709f3e8ff1c37e075f6ed52b6db6ea4c8b626156b884eb3b853576c24bfc6a92c3ef5497f6918c3164229c12ba972eb3a62b02c4bd833fcbf9048658e67f3ef976931eb5b282b7a",
  "4.8": "0f00c8ec3070f5025c2f429c:3d850ce6988566a16f0b6454dad347de:5e0fc8442aa1d1dbc83db17a874eea01a1de2a181307522f8dc425cc6655199442af3458ce0c703f354c7357f7c251a21a311c41cd514f346236eebeb708457c995d3a2ecf514c38b60f2e2bd4e1d8852e65aa3dc83d0f7ac84b5f1b3eace693cf2dfe204139000ba630fcd2633f8ea9375e317926d51ab0c2e72f54a6fc9613afc04f7ce9198518ae37ff28d73529d77e559614e7dfd218d7ddb14aba21cfc2eb56a58e4401532a5557c82c467ed707de9ed259ded66ae252e8ad9da64db0874acd5beda911cc11261fb7bb35e86f79a6e9c6e8643937193d066992d79c5fb8533e08bff947e297533301e888212cc92ebe978bfacd347525097d369392427e55513caa22069117620cc9ec734fdc8f85effd2f64ad6490905f9820dac3c96984d1eedc71b2ceab293bc1170f460d2007f63fa8af5d9601aa936f841dfb8570428bffb2b6d9c6d61e9b2a399d1c414145b0259e101f5935fc32f2bb32dda8a2048bd155817628d15d40471752c4a002795e980159e00552aade3b29cb31cbb261e17b72ca4b7f595a2715f8698f9ddddc0b051b0e9e0bf5234ef93f20018f0e9e01e803229e8afbaee26a16a347a3d912c05b321e951355464013ffc2e1028584595209598abdf3acce33852a733a1b5b54",
  "4.9": "9aed4f3b05cdc48d384842d8:4ad9cefc90d5a37dc19c405f7f989f6c:56e2c7334ce5e9a5d41fed6083bfc43d9ddcdee8d5d9aa337fa48f2970bbfbfba3ed65557bf1c737f7da8e0e81c30c3357ef627c83a95a9a92db64f48bfc8f252d74c1f2a514d96750faa9879405ad6e08991a",
  "4.10": "5a86f98ce06d43081ba9334e:19644479fc76d3a8cf8e53d881b1c36b:0141287a05d9c470947f417bf4477a80baf5e58ed03eae50972756b75b3575c38c244a4efe8fd868efadf95f71aab6e9c1bfcada44a8c8326688f2907bc41cf3a20610a4fc931a51cbea061e656519a3b7c977808447273dcdd7c5ef6ee8ad885fb75cdf4dc344a65690938dca42a93fde841a799595cce62bcc1a10c15561054b79f8d78bb3e20f5d745a506dcdc376277047fe997549b396a3222d58773377b9840583692d1a38118beab87ae4d7b21058dd551525041f1080062c5d1ef778bc74c4c1975edd",
  "4.11": "a80760467b9b0c7ac37eaa45:9ae13a11613ef6fae67211f6de98816e:140e164690742ec946a1851572a02af8389b2ce3695b8002d7aa79efb6aa4c8f0f6c6d89b4fc3fc5b77c30296f433506d2c51473b52b4f93cde63d6837ddc061b6caf1f29c23fed66ac24a0ec71bfce862b9505743ef6d1341ef3c774542a812442eac395e0511f3bb29169d54d4fb277d654b56d4c8d1fdfe8ccca0242ca64beac5424b0e7abbc3aae5ff861af68a8d4ef63cbb67c24e64c8fa634671ad03b15870f2b8f195f2c488fa52dfc973a05c382b7a0271b7b5b411812517139a7079b49b90617f0a24eb7840dddfe6712b46214b4569f28c6365b7da833e31caaa131344e70bc0f613844a3d26ec1f24bcb3fc5446c6271ce6911144a782ffecbd50b75f4e9b1ed2ccd6c3e177b8f904ddb03a65ac6c2df4256f45c8ca33bc2d1b85d845d94b80ceef2a28c9e3de202384ec327e04bb7a66eb12e57ec899700fd1032014e452670e78c37074677e2c89eebfe9bacd8ee36eb503011df3c88445895a277a1bf8b9a49fd8f953094c6462c3a26cce1de152ae7ffacbf407382966feba77072c0cfc74e2a15786b186e0f4e87caef2370270843372aa741be9559d4e6009ed71dc48984295150b56d6b574639fecf911f73740c830ec1b6cc9d265ed9d1bfa6c74d8b937b40bc5e57cedcbbed1ddaa672ace49c6ca00060bf0deb32d765034a0894cbfd3577b51c5bcbcaecc5866f932a79a700cf67892cde4b8a467683a6b8794e1e11c017e84ea98a61acd08a460c3275a1c3b39738c4564901a6c4ddd",
  "4.12": "4154aa917c784f6d96f9ba28:e88b121fb6243050807e3c2fd92bfe8d:018d40aabc588719e5c5817dae494f6a30e68dfa8827e9ec95a185f6f0a20504683eb9078f01abd931db9004455901caac53caaffb7ed44d750d280de337b14f84ee7dd9a9a6557605e873cb1c6dc305d269ab3982634584a0fdf5559ee0f02a239558faccff1500ceeb0cdf2b277dd678c4f73eea6fb6a972b37c8fc9554d67de1f0870708da4d4772952d8007f1782a5780b4353e0fbc336680833f13d5a62b05696f07aabfb164e05163c56f84df671d3f182f11cb0b93c6414a63cc0a7eedfc7954ba577deb50a0f25c1ee32835a0f185851f419db97efb84593624d3080bb3deffb3a30570167c440b0a1ed1d4eccf1222288a1e9360a01565d61ee0967c84641dd83",
  "4.13": "dfbca24f37d74f3a923800cb:7e6a72fa8a365d333d9ad626eb9ab503:50c4f69afd6d86c590e392c79824166ad0ead14e36e9a8aa72f3f21607ab0a5bbbe556abe0ded67668d0a1bc42bc05d8dbd5c9ce3132ef8e350f861d4ec66944eae8fc476ec49f3dfc83880172588940876301f9cd3018a74d36c7f738ecad44040b7a53a7b2f9769b54ff4ddb00bf326a082c256519d163e5af3679af63fb5c918ad1bbcf8ac076eb607b3e8f3f347df97ff4754adc7445",
  "4.14": "bc4cfe71db5aad14f6b59f07:cf054b2380669983d4cc71b890d99cc1:3561d3637f51102698771c3a234d6c910a95140f9cc076238b6ca79979eee07060dacca5bdfc3da2da39348fae5a5ccd09dcc9cfdefb5b6cf8f836c99a772a1329d8e817123256bbe1c8fc43c47c92bdd0213d7c8a30fe8c4a90857316d10f04d056aa3858d48d76795c25821c7a718ffaa1495a1f83b0f30ed81e652c0880d55587241ab17fb9d69e877eb3ba98b3d0f6e840c50ae72b972983b699189ff0247d711dcc34571abd0cd77502a6bedf67f055d50d29bfe05f187849b0ce4b63bc679df88f091b77216c2aeef9897667f8b6648c3e258a7603f5fbe6d8f56d3a955173740e437293077cfe7eae45c8ea0ac7dba1c96d322562ba505373c287c9977d0cdf89ac1f8ac54753b0a05e912716231df174545de1a610fd8856299b89efc899",
  "4.15": "595472e70734f93d8d174f47:3318f13c7e5a1eec3b9acca6a7f58b0f:d2e21b84a05e976293b84d2dca64a07ccfd6b5a8ca5199ef3dfd7b227e439267a149cb634d51c1e7d0231c735bd0c522edf593067eddd7d0b9133419f266e9f0a893fdee9624f550e96377eec6704cf0e0af227ebc375df088231739e08b3b84a22fab84172b884e322446a4653f7b9094657d2e7365e2f96904a5807c9e24dbb0be367a83b8e9b7f72a9b7233e335ed480fffa4360dcaa74e20606fdeb0de011f1ef7590ecf41bb76d4b058d2b4a0de09a7ed9515ab72c9a8c6a2e6b44480e8906752a46ded1e9c1efffe3936b0bfdc9d3e2c28bf2040ee5826fe68bfa43dd0f43ed1fcb33e644bbc83229ae7255099764a416d3eab1d1f458a56561bc03b76bdb77e436f5d64d3a35ff12f84c7a897234b58686885f234fcf6e89c0b957fbcd0e69dcdf6a48fb1f499040f2b156038a65472effca8e254155f7268eda00d1db1844834c11c09ec70c28f723dfb5cfd87bcab898e5bb839e433e303cb1f21cd0bab5c7ad4359a532f4ba938e133af4fa4e8fa3efaea3c4547bf734191ab67f7858d4621d1938f8697f61f113835aadf69b7596115445d1cc411c724f9a3c9d87bdb6c17272ebdc05b270d934b47a6c3d1231ef47b42230686300def9f89e701190a90fb0f2c65c064a446bfc190e0a636e20f2022f95a702785eebf42ed57a497efeab4fefee74fd41db88ee338aa2e9aa895f6f16c8ce6cb11bbaee49d9159cd9f8ad52f86e780ad8bf6c3c26799b887073630d98b1392907e3ae03c9e13c9e759936db299327daf4d66fbabbaf4e31e27c97050afcc30295974724b181933e68ed807ed931b9b51ebf63d0f5e8c7188c562c36c01da23a8e5d7ea611e85f291e42f3f17fc492fba0e0fa506cd9211f4dda15c8b39bc736516db0391e588f73d088a9300c0330c986bd969ecea8b4da81157d9c51bb0bc7e40fc96e63688b855f15c25f21a8beb150659134e131339",
  "4.16": "3b4f5fb65a300b1aad683bb8:e26cc15655c2f163902124aa9b77f575:72dfcc85bc5f8ab0d3f0134fa29d928ef43b0e19b2c578c50955cbd0dc296a61a826637734bfc3d31dd041dd93d374e3b7c4e31762347e1bb7c704c27aeff88b92f53016f51cf49acc1a11a74a0bfebcbf8fff2546509e196ae84293d15b6416be258a019790efe1e4",
  "4.17": "4abe54a328a553f47cee705e:6c58fd690b9da717a4a3005130658f63:095c843a254a8a1b1b4d7627371d18debf128eeca771d316b792e4fff38bc1057106f967bb6497dee4bd1aef0b1fe5c0477bea7bd21f6f6dbe86d63c4c1f1f628d3671ce3a631f724c2c9ec3687b8cdb2d077186ce3c038194fb52d8d37d530eec0a6fd53af412458d179ab6ca8e5d70f6869ebfc70004b554eab12f4111422439eb70b10b442e68190571d33b26d19cb8d10017b8b6692fc9b2dd52c59833c2f8756f87b3ad1266fb00d30f659d1059",
  "4.18": "15d9f8790aaee33f77613abb:bf651a18afe23ff35f11e41eb0d87379:feb4af54fe7b47f36e0ac0afbb3986464594b27169d4eb2bc79ae74f4f5a3a6f9413b3a2feae38fa803b22451e1df995da25c26995300341e3ee9c3a9bf08c240c0eb099f452de887779e5d19962fed3c188df2c34405cd13f18f52213e8d7485ad6a133f255139e2f31e5f30a8778202f1c22124ed85caa3d9d21b846ee591502e506ee994d75cda642a0e876f87db83056ba4464a8ad0385f41782ec3705a4cb641c8c31d49f72b97cf01c8b7f64d245eba51afd3ecb071ec4dc99570b15cb2d3a9e0cc509a482a376d2def0a55b2496cf44d8438fc5bcb6ecb8a034f5977b3714615bd2335872e6ac0b3ef44989b254e228be29abe10818fa467506c4b5951f0ed9b1eb004b88da8714adde74625f8e6181833c479ec0c2f9949b5f482d470feb498ca40dcd02ebe7d7b661c617d03d994dc62dbe81b0096b94c3c34e249c75fb80a1f34b26fee886a73450b82770e7e4c1f8b8414ffed84449",
  "4.19": "56e352721627b2c25407a026:e2b2d62005ebe0db086266ed2c3c8e79:79bf8aebc9f32807463bb7afdcdd479cc05d1f0196636d76774aa6bdc0b489fe3ee2d797556ad25f34eabac1f42b2f7d0a1a484dc3ea4f0e017da30077546d9e041f562edd919763dede9461f3",
  "4.20": "0e41235f755e6cbebd0d169b:587e3230bdd73defd0ffac91288a5cd6:f5c5af9f412cf7455fd010d953018c952b4eccf35d702c268a403d4a70f998deff6d18623e8a37c26461a71c3e5fc6c08c38784517522a1d56bc17b2ddcf116223fa87980eedac95c2ea62efbfc06a38ef06d9d77e99f3b91a18b205cdae25a73c6eeaa8d0433d0becac070c01dc1771de5602206a03a89237ed93931f20fc1f4c4dad1d438a34ff5ee8ed897e279e744a56ed0a02c9962ba257dc6c73e58a5e804a028b5c516a44903ff12c6f9e6efa8f1e85a455ac34ad7bef63aa",
  "4.21": "1a92ea1ed37efe32aa253205:376156548c34b5ded357b2fba6e9a4ae:e40a406165d6d3fdbc92b984e2424c77ca8321fa3aba6ca4f10e7adaebdfc1137c62a94c5f2ae78bb8d35120ad3237dd6c9efc98f1674b508a833116a16db79733be3eae9f756478fedf633da712db8b0384f0f2177c32a539afc5db81a34913bd4f4e0e5c3c16a30777b88e8a09fa9cbf19d4811441d5cb584de00fc0f17f22d553a1eb19ee976379caf4a20865e0b966a7a301d8cc49d44f72951c98fa67a36ad6a1d13e6940216a386488fe67ecdbed0b050cacbc3c52ffcf694d56a84eb37d98c958c5bb3049caac9016ffa18016742db6dcdb2d5d8083aa915dda16666aba31147587e3982089624cdb92a9d4cdb17f216fbc35aa068cbcdc5560ee60a75c679b0d2a4235860bb725cccaad311f15332177927fb1991f9997fbec302fb02b5145d18f7a26303e83f89b493b7b94b8d2d841c763ecef6b648d59bc7588f67321292939a81382cfd2",
  "4.22": "d4b9f9b646532572078746da:721a71379aa1ac36e862125a73b6c614:00ee4c45f5a96593d03b5b70e38fbf0ca8be1b110cb297508698efcd356397a710206a78da042e771b8c3d6f3d543727ff9d135a41b44bbef894ba737be190c16244578c9afd91b3e5278c74707e102508530f9bf961559d6b495c6dc9c14e4af1325b4f3606299d6ea1cadacaea66b080549bfa36d22121f6991bf220a830a8cf6f9cb41704e106098f7b8e0a3fc57c87e3421bdef1b330b74c2dd4e8648c15acf1e6229e98d9ef965e2c2c20b30e074e65c8b06a42479f69aa1c6db7",
  "4.23": "f7de4ad3456e8ea155eda5ae:f8800ff3432dcf2b9f0ecb3804960616:df6f58e5253b00de6898b9a8a4924e9900e958ceabf1b7c9153643943021333c560fc86bd15cd301b44f3b70fa3b222d773cdb255f38ae1da65666d76e13aeb3c131e455f4ea492ca66495bf03a94b13238c1ef147e3279c1d15781cf1e5ea3aea3449adb137009ca9e50ef706a89712d7bb3fd720aee5c683f4c9c1ed3ab806f4df13604f4f94c961f586d07bded09ee1b67635977870c66e928ffd849da7637c1d53f9de60085dd399b92271c2f8cf5bc0a1c77d55045b2657e06d0585d97bc5e5200bf10b2c927b87c68a706ebbb870f4fcefd72e6486dd96bccb26ed99eb6f83fd5c0ed7b3647731c4d62649bae7f67358bb6a8f1a",
  "4.24": "21e19c258f70472c371b3451:ac1ab7f36dad0494bbc4994393e95c6c:e5e8a8cbc6cc7b0f578462acd61f2ceb398c0ae754edf748ac526480397d82d7d87a8d74364b0ede17944c0c0c1c4e02c23069b8a3663842984de47d77bb811bf9306a2159d9622aefaecb38fd1f61cc2a127bc7e71a2feacc5771ac9e15e8a6937fc827ffbda8b4cb4d7404ff573fc588371a5a6b990f71c2cafcedffc4c7b211bbec048051f06dddf1748e39954a36c89ea127b5ca8f08192e8e04ce60dd13aa4d1d7cfe46992f3ad9ee8fcd210f11dbed984d3072d1e1ce01931b71ff22a9efeb19e8fc5013c22efc309d4a0e5913a207f16195770ad647cdf148c48a9cf10642b22676aee9cad7d0667c63eaef47334a1935f21b9682e6c1663697a2efd02d5c213b2d5abffc236fa1bc8d0d6c505a0494924f3d85367379eab85cfc12c797015a00d086cbb3ebcd16e4b2f56323a140bf12",
  "4.25": "5291c4cbd5a2ad630c06ece8:643aacabf96f6ef8d9027ec4a061341c:c241d825a1f3952b23d245e2d4ba876fde72b9d2062e43a6da1128105b90ab0741a90b49af92b5a4d79885d9361e7a0c2bca90908fdbcf7e0f4f7ef4ac550d116df4792cfaeffb2a08887bf1161baa0f6e6509e04055846bf31e97be87f30d24c2a0030e4ca6b03299113ce60ef2326cfa0876565931ce40163cf71b2bf78835cb215ff18a06809ca8bc4dd77ac2618d946b9111cd47c3691ce5a62ec4f5a3e959f8418793de68859df6cc02820dd4c8b51f35af8a7b1ea88685efcb5757",
  "4.26": "b2e79af21b94cbb9f77d2da5:0bdd4d0119a19d68053c71f86e716e59:0dfca9fce7ae70bd719524b5a65f7a649277c985cfec094bcd0f1d79a64db93af31725098f7d0ff8bba6f6510d444500e3e14e82a20b3a657879fbdbcd66d6232b21e2087acfd4ce7ff11ef813dbedb900865002dd3e7b53c79aeaceb9da93121fca89aace50aeab3479b085f808bc434c8d43876b42a2f1f5ecfb450703790e07edc49d0cd0e1e4b331029174ddbcc15ea6964b75e7236ccb31f32cf1c77d5fc9633dffb81e75025622f846dab6c15edb59b886dca23d5b9283aa7cc7e682979bf0014467ee5b2bc90b71539e9ed5dcc7ac062da2f9862929b1a6ee1a8e90e25e3351bd61100f62686d70e7503484364362421893c0be14997c06307c9a244c13fc057c4304878538fa8a4fb3ae96e7a1cf698e75403f3afa9b36cdce1553de629e966d256dfdd7df03388b4daa758b6201251a4f8fc0563e65c3f1c6ebe350381ec3d21d7824c01f5ea63ceb23c1c0ec9b53dd5df218f2c5813d8d064437ace721d1515546f57894a3d92f443a44833a61fb2d5132eb39ea1a4073bfba66651628879772e301dea8d7740ef4ca0ab3697dad15437badf6fdb59b8d0ec1c2546540a4008d2f8e7188b0a3688947884787179d4f268bdf308b1a4cbf08beaf59695262c6fd4a8067df5cec7492fb064a9630c6c086daf28cf693c64d6fe42be501a19549b645cde518ef01bf87e41fecbd0da199164763a9b7efd948dce17574596302de370c22be5397b720ca8e0adc39264b601035cc6db9fc2d840e4ae46c88b36190d9565ceb6434d7a477d2f75a038a76cfe50a21f1f8606e79066db7565408df51eadafb0370575ff73d12f56c815beb67686b55913412f1ff816ef39aeaa5886b6de8431a390f25d2890665935af7c902ed4df8c61c12a7d16fafa8",
  "4.27": "ae861fb32df42371890e2c08:aacd800aa0694e6b1d721891a5c051bb:ee9c2c39af90de0bcff88b97fc1751fafe6429fc4443cb793a327026e385c030e1f5cab7e3b4a366e7db42bcbc845bf6ac6ce710f13e9fae84ab386962d33d9e80f12bd174bca18d110d91c6ffc41283bdcec24aa95ce6912ff327b88d21c368c9da48e8649358fe8c885218c9ae193d235f5f75bc71edf570a10dab8b0c083d44040f04b4dc3d5ff967973ee9ee04abba687ef4998fd2",
  "4.28": "e557be1acf2121259870f391:ce39455731185edec350256df93cd31d:90701afabb9f5aac0bf24fb691d7966844e6973b3dbb0e685c18ddda7e26136fb68bd26406d6204df09d51b62e45292b13f1aab374e0fbb95d90b78076b0be6adff4c7c8fbc89b1b712d44f36772d6229895513e046bb8418c9ca5e900931bceee4baec2f18438524f87cdfe5715c35a9059c32bbbc94030dedd9b371cd4af00b210f0de113532b0f776c6b5b139947c833695e3cabd61fcce89d8e4968a1c2c61ac0db33cd73a2af95a354d7563d459b097e4ad55a6ad9adde7620e4e07715849ed747457785561111ce7dd7edb3683d5ffcf9ac4645f003fedab9cd60eca470c8e7f57f6b9426d6beb98b3b2e5ef0bcf97b725f72c4e0a704f5a19a1b63baa216e48f20a6261b8182eaec50ecd4c8042dd24f0a74a2fc0aea886bea2903788e3d94929a47cb83f9e7d9271e4d5511c72b3a625e2d1ba365a5a78377f6c921b43fe65a6fbab1f83799151e9100f116a1e1e6f203f27174fd587ed1c1d7e9f1ee423a73a3d3e5b6a9c79a3bd4d0e1767f73cbcd9111a22d732f5b04103e51bf2aac6eaa402b407526fc19d5f854f35809981401706c1dcf1b231f3732c43ef9c2ba54e5c2067e334b65a3c31ed2bc56e35f95fed7113a01ae974c940e1f52291a59684e798dd2d1ccc19a4d0f64abff0fd90276212db081610ad74713936e4e6a9eae33008d73a7cdcc280f1c8400ddecedc43de83b0a47b3015f50b8b875a293c8c2e2f7476c783263ba1e3b2141db2b4b3f212d7b564ccf5609660582de65d5a0db2b688fcc3ba7803bf2898389bb77bc9930a45f92103f9514d7c972d6baf2aabf2edfe5d0690955b709968e6b29b412923e166e8ff346ddb7da1604de0a2f6a549d3913e4ae56d9806f5a77badfb6f9e63849d1bbb5f14b8696ff1272cfdbfb3e77f988d4ec35c366ef2af6006f366d378269f48532305705c37758c2e1e3d98a6066d0072ac1fabe7fa8723605df04d3f36306f20b6df654496844fe107e1705f77cb6069e0914d909dc8c0c22a5f7d0722284f44f4fc66b814a38c98b7d6dec27338f19716c4c827bb7640bb95c18d659c5b3827fd106d39041d7d6a951bd2b74b11af16b82282732c9e11ed2d73b455"
};
