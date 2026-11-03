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
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "7c4201b4d846ef800604c053:8530942c0277966091efd02d83d1ca31:7748ecc18a04746785cc3f8e6350784c0775f7f6576864c2a492be8426a7f7f7d8fe1d157312b5cb7b30fdba81cc51cf81dda13c745cb93029dbb591c27db38b5808e2d2486c5467aed12e29da7bda458093e3e66434ceb1c3063b768e55dd91c6aed51ec79eb2bf8d906d4458c95dc9d7d551c8e6c9c3750e1d936b5be501277b7c9c8010",
  "1.2": "59e59f52ea8358e4ff2e3287:00d486de16ab4b0889b8e3c8ae381681:9ca2ea6107c812d9831018857964ac098cd481a4b2e6d6762d3c908dce1142384163109d7789738a43cc7cc0bef49ea3c7a6d20446d64987134f43ce8811ad910581349e92379dc3cdc3524dc335a8d6fb9a09963be92285bc4453a27b8d068a350940e7c2137805dfe828e45d1f7f4dcaee43334f959ee1a529c46d19a97755e06a3d358b344fa69928031449a8fb14b9ebe9f33a0559e70419c745649c9173a8c534dd874361fe801c23",
  "1.3": "598d2d97f1ae0a846514a0d7:83cb4a7992c0113f7c04dc1a7e51eb1b:7842a857e556a41b3f3e5ae358",
  "1.4": "a049d0694d3b1a612104f9e4:2a24d65512dcb6ca22a408bbc24c4b23:29738e94726b2eaa080f9a3fc3",
  "1.5": "1cea9dc0c726451da08a8892:638db3792f3061e660f077945d8d8d05:2072859fbdba487e968007de577bd776eb2a0aa5ed31d5f43a7fbee1ab11325c98bca451da8152b95da9140bba239799a554f2dd77925b7e6d73d6f8f81ab4bad7dc54979b65d47ada453f1c13b9b2b284f6798b69d5ac85e8e6a5c6c946a746e73f4456d7f2d847c8273d699aad20ef7c943f47b2d6f3",
  "1.6": "8475fed53905cce7f67689ee:5df540a47006ee7b132d5eedef6ccd69:e1abcb47bf1f2343ac0dcaa48bf4d0950ae132f21f70729bfcd8553c4cb7297ca97c4a24e9443f23e02a47600e87e54cd4e4e850e85266282089ab7d5d982d7d7d01e5ab9c6ecb19edcf1133e7a415c066fb2d0ef62d0d416fe6b4de9539b2a9268441a9c37cbd7e08b668945137b9b8b9cf8e3bda13d9d94fd4bc1862d73737ad4dbaad0dc937c718bacb6daeedd00f284afeb7d1a336e636b3e380afa46f9de44f4c2386b214e9c3a01e28ef671ce93c5ea2fc248b6f90dfcee78f238633ddfcf78a949c4f769a3ddf574587080a20981e0d2c5a3a0df6637a4d4729924e2eb7bd74af",
  "1.7": "1c30a5b32f9d59ab9369fd45:8d489ee4a75ac068ef6e198381e78ea6:47e05b139cc41726b32acc8819047ce4e73b7af1439d374f0def0ac81a6d47e21611790392da992cfb7c2370a61bc6aa37d3243c604e317051f3c450dc9b0b7e73d3ea882ea0ae4c0b7e6d029c3697ac5333d623316f4e563566139a02c0d67bcf018dd2c8c7d53edeb03d087cf4fa6464e472e3417a8d91db37f8fe427a",
  "1.8": "47d152753d21ac3ae1bbb009:bae470107a50e271b3de008f9b2b8e31:eb8f2bd5b35e82a7d62fa64a9dead32b5e4514ca49003b6daab5e9374419848fba56c186d6c5dd0df1c8992d63ab881c080caa7c2227d4ca9fdaa94af2121aa044af6575e9d21832df3cda057a177df15611ddc544d6663d42e80a36cf3b937802d7",
  "1.9": "6f26b406aced0f40f94d1a4b:e553ff113da0d68d2e0380525428cd52:39b6b02bf480c3aa0bdce0721a4de18920f3c2c3bf0f3ab09181755651f7e79c8f73ab7e1a3d414daf9a0ea5cd90c469bc2f98afb91151464a6e20a8f1e697b3d847c9cfa54ef453f066b150d25980896f10da6fe674db7e02141906581d98ac8a9205850482e66744faf274039581f9b7d2d72330624eef4eb942a6ee4a888e73bd4bf2040002d40734600b76df042ea334b78223f91df89440e9b47021f6184b2c58826bd69e7a6e99ba3ca8655a664bccc16a6bb65f",
  "1.10": "7a343ce6d8db2ed9d339e67b:2ca9c896592ed080f649a062640062c7:97235a94907b2c123270f5acef92cb935a250f00fe9e7ac302ecc0cefd35ad9964f7456ba3dc71a7abb735",
  "1.11": "9317b6d23a97c146c01871a9:219aafb39801f4dcb45239d4c6843b30:633e10366a589d2f953db397ea403b507f43add418a2652fa1e5b58f0ff75907093ab223e10e428aa19df6d5c1f759ef8caa79a1b9f0aa9c77c1e879016068af2fda467b1b0fe90d460cbed906c7ac5f4006dae6363897b9624bc0768e64a6baf46867a8e07e15ef8c3c2954e326e6a99be81ac3ab0f60674c3f7e86640684425a81f64df6ee5a4412b5edff7ccdcee59484c3",
  "1.12": "1a07aa9ece7d365c2677c85e:fd8555be1c59d272ceca3f8fd026b222:03b11600f499ea2d484721666d22737fa16c02f3b0bee513ddbca70069158ea98e7ef80afc2d6a5f9749b5685c330ca2e7560a717b1a9e53ce0bb6373d07bd8d3dd15faef1f29cea0aeb1acadd3d605facda9c7e96624d5e9230822775070bd79efee9717ae6f672c3c104646fd4b4dd8e4f72714bca554fe644a0c3752856e41639e05f309ea73aeb08b2565487021abf6631dc8639f0992089876d4b60066d284974d7d3a477d83183a50dd00c4fa31bcc5c034f8fbea160f444e8d3c35cc7518a9ec3a2ebc2cc9591a2b68dfc50cb90ce6d4efa0366ee802bb2a6d07a8d8a96b851243fc453dec50ff17ba53888be2f",
  "1.13": "6500375df682fbb9dd00c92f:462eecb68194599311589762cf8f7bdb:c7379e635c7f798972d4847c68ac0023c1bdb07da3ca3c2fe3f6d221a0957bb13e8cbb0786ff43e08c3dd8b8c8907fe83b27fb5a8dd3b28f4daa24205967cd70abe2e24420d36c29bef92a4aab24e5db9d6c4529cce2006a167a903c0f9730eb8a4aa78b394d212d5e40a2d11213b4add7984144b5d1df1efc9e1ae6840f0531048239f9156dc5eb5bac101979486b1042191df9a4346777716a4f6024",
  "1.14": "592c1bbb90eaffbb71297784:f00b22bfaac72f93536ea1c0b2a61c47:25040186bad6542f669d8321777f4b7e020f3733f85f6d407676d8be419dfd0d6c60373937c3358376f830c9fb5d2602937160d513233f54784ef662d87de815371e9d9d81c401deb99f4a4b7c1578af8c93fed7dcbe9fe7fce403122b3e901843c37e7f6cf9472e867e1642ca4f994b0a426ece346d012b83619c50c5c38d132e2603e844b41515d515baef44ce6d573c28789fc3c47818716f5c2c3ab3c77453aea1790f2cb821",
  "1.15": "1934007f5369d3fd4fb989b3:31b68ec2e0dac518010134cb0f0ced9b:af73c24ac778ade19589a798641ab1a75f723d6c9c01c14cc5973afb4c23938581",
  "1.16": "66d70731541e58ed22258b4d:168d939e4fc77a4f174b75d3d16cdf2a:1a568bd777f3ac3755628f4882faadf7ebbf140dce7074fc0012297c4c14795536309ff1827d1b462b7c740e0717284fd40905acf24642f35cdc7cd587dd26e6",
  "1.17": "2ceac87851a88850b71f4118:ee524a3d1a36deeadcc3c9b51086882c:473771c47317b6a9924521be89196d4421bcbb338531ffd5d456f236046618538923c6c0ea00fd03bab636d4674388fb21a2caaea510087f7433279739b8db6f014689a93bcd71b5260b50f28953e7b463356c72dbf7475c09af429c249bba37058f3eaf6463e048156c072701ca809e50a842c850ebe081bb27ea1039bf9346888bc52ef5d592852e72566420f67db2e64f4bb229fee0d6a125b64529aa663e222cedf0c106431b19ddbed920618b32f84a4f58ff1b254717d533868a6158f32ab3940106d7a06eb3af791e08d32499b090c8eb49ecdef0d138c639fdf757013d5f585f105caf1fa8906ce3e926dc",
  "1.18": "2d21791098743a840121b1bc:31925955e1a21a10a349a0ee488896c3:da5984ab3ba83f369379a53d0b8a180f35d289d289395cb83678adc9714b354d54f6b8090e37748943856e96b7081bd88f8e514e11471e79ef550e282fbc68bc275bc6eee59b0eb0e765746c473b997d6aaf93a4c4ca2f8f328c2cd946d6dead09a6676094a3c0f1deb7edb97a5646d729723fa4b9702e6a777b1f332e41df977221c9f211605973f43fb7169097d560dea2a1d4081bafb80015fe0bb70727573439b00e0362ae325cda022ffcd051f8753e58ba07798b0d1d4279503b49c989886fc53f89ab5f8fcbc6bd07f9f0813c1999b6ccee970433365ada6acbf9b3326ee03135929a47dc49d15e29c6d9a12770080b3a849bf98253624d4eace30914d336f2453556f4dd8dc5e82339c39c17338b9f0b2afac1e7be8555ae8cb18f31229179b6c7bd49baf8077ffbece3ce36d553936f86a3702fa66da6c20213fc3bb0f2f933b2135e86604463cc0ce43c76b82bc06cabf3a9a48e3b809dd99edd7e86ebf0ab7848a86476d0aeea9b933dabebedca13ea2aaa33d9c40b9d03efd135fd6ecec10cd82d2359ef6aae8673",
  "1.19": "0cd5495d8f0bc810c0e48416:81ff9ae6a07f6db2a500d7d7d9a7b865:0a23fdf9f31611051473606b5a99abcbe39effef52dd5f680365572157e0bc09cb",
  "1.20": "1aa3062806b755b6f33e589f:28be8f08c4018f0b32a462fb65ef2f81:715530c7bff81378a9b23b11adc42cf7f717dec571a12e36fdca",
  "1.21": "2d1cee28242922cca5936200:5341f7d25cf617b4281e95f07e6697dd:4c05c3eef5734e821f386d7784a4a6493aba99eec2763399b425710f151c556ab1ab6ae6ac6ae818f8bf45c3c5bec127944aeab02ec9341c8db05827f587fa9ec697bbdcef86af050fff52df4d44e70f05666800a56207d152cbd3c057202110d5eef0ea5f6aef0fae4295d2ac3a3d333e088df18128",
  "1.22": "0d928884dcd04f2df8e67590:86823089db64c5afb9f8f733281e5a01:7c5f8fc93350b2c1f3df71862dd6149508aee993d2c5dc789c53c30f86ffc07f64e9e153edcf3a76ee8a97eeb8c9bdfedba348d987946836017f0d75dc25e1e3fe24122cb891ddb7853f72bf3342640156fcd8b0b2b08485d15bad0a39b2938f105a295852070f45f0ca320069c8634f397001045bc0cf7fdf89e8022a6076e7e54c4af571dbf660b806b83e3f15f2cd454e96ee0e43dd180aebc4ec05ce5a91e9e2fdecf27ca00285c9b7db6c4bc7bb5edd55a21f0902165fb6a05988ecc6c305560e636b77a74744b0",
  "1.23": "836386f2f57f5c82239c5b86:bc24a369e1240e27a9ff9d22e00a46d8:51c4a6d4048981ce790080ccbfb21373c3833227b04f21b428dfe61ea070605a0f4221ef1db94efb9481fdf5f71a12f7f0d2cc4e522a16b911b8ba22c725e0f7ca6e267f39c1eb4486d1875d1aefac6694b4635d9aa3fa968aeb2ae0ac005a9875a7622e7bf8e7eeff6917254227218e7b11a64f3979375547d60cee7496550663822e3a5b",
  "1.24": "942681446465164a5cc8f671:5579fa974d16aeaf7d90bd9b03909ef3:712f6b7599f3ac0c07c8264c81854aa4f50b89c87ac8bfd8f529550376f21ec158338793645fbc7e55cf8d51af0eb515443a6dd78a0ba9221ea4320a5069548dab4a35f7d62d076fb0997a95910baf802f56089fd1632f468a42a78cbd2b8468f74cf3aea9679af417469e9467c2deb4e4cbe77f9334be0c4589dd87245a4f4bffe22c55544525e6c65b2a615acb254e6b5ac4",
  "1.25": "ab0f697a4f2087a0858ec535:74e679d9614957016d3eb4b379764d07:83f1c9ce482ea90cc9aacc6e342e835e18b0780b18e1e9c3a451c19ceb5c2670655d53d529f235e4706c0148bd7e6bef6c9ab53653751a0224b81f919d20a957430f245b1b99eceb7b3a13c1d851d4ab1c5af25d25caced1a5eb2a6204578a3448d2c5a8fc6a016bf427803da92c779439a9d832198f4597ae43b5b926692ce7c388a5428cd809e5a4c12049b1ef645319c9086d8c8b746f6ba453623785d1ebccb806d1c1924d3592121aeb32793c5d418d1ceb0e49a34e12f1f9ef15a016c89e6eada399a154a7c12a74a48ac5a297d43dac98c70d645fa1f3",
  "1.26": "e52b2d1b864d179efeeba121:b5af5397d8f62343ff71bd2e96660503:1d8ccc388ea99eefedd7f75573c59d3c12fa6661aa12e34741802942f640b7df4b1d6daf01ddf1b59e23cd38fae98072d3299fabae04f18c619f1d58e1eae8813481d5654dd818ca8d8e27f2145cf6cd821ab58943220cf10a731e6ea02e6e03405a4025fe0a2767be54da2949ed3eea2080bbf8c5013ebc2be7e51bda9d043be974affcbcfab6ab02a7fb",
  "1.27": "46a4d0f09d03479698b8da13:155a1ec5df667efe677fa722790d56d7:aa635a26c34f1887ebee3e89bfc84866ac67dba1bea59ad0fb394e869fa5345eb9d1ce437eb2d27654a2dcfb6ae19f31f3eb6b50094a03484b444691f04259d58c12aefd7019cc3fef1e2ec3e376a43f4636a0d17e077adcca15722e4b0637fececaa4b6a617b53a29f129016948fc01de32a0544c1f28d4c2a1f148263a97229a18048a4e8c8a87b585bbe117b89eca383089826c782d44eefa039c21c6b15c681387f202ddfa5999e9b1610d7d910563648fa761836aab3beda9f38cf10f49879ad35c",
  "1.28": "6beee48a7232aff4a3bca5cd:fbcad45570006c0342bf60dc5c3d60c7:3cdf7f130a0c696b46ce81bde9778a096e9821775ad9d2bc457f3240f5456b288b23dea8f0a2befbdbbdabc79a4fb819e30e825d9dc575aa63c6c06adba54bbb0f717a161d86a2fc2a3b00192d32dd497c7720b082fd7576740e6d60786bbb5a696b1e509bf133c370afdd7482a68fa9ae67f9c3e4d8aa6995d19c8059eddb5df7cbfec0d99319433864e7bb7fd6a33184407bf097b2ff7e287d7deb39a2dca17b46dac54f651999de83518246ba1df2116523f5eab6ca55a0b3bcea8aab7baa04303945a6246b6ec82479b4c2642fbd27bb1041ec7f6d57be3a9a5fa949a2b424cc",
  "1.29": "84e5b39036a685b1e8b244a8:0380d364fa214d81cda9cf7bfa17a5d7:36d98af6da6c0a20e134c79f9f9698cc7acaffbbabd20b83b54f26848b0889762f9cfbd2e3fd280265d21a54bfed47eca21787a36f81b8c35b5cfbf1e06645f641488f1411ecc03e9aeeaa450ad7d4cd95969082ba9a5a28f2903e4da447bf93279dfd6cadb0662fa436e620357e48c3ebcc0b6fb3994f2ef0532dc78a1186616cf83f8d97aeb1e41e8ff51293fcef00b67a2e3fa36f1867eb224c41727c03fa16d3ccf24e04658b4dba99828c800c9d09a56a91b9a407eb1418d0618eb320e2fab8",
  "1.30": "85087fadd893bf5436492cf1:1cf3eaf4f3a416bd4f4888d687388183:2c5ad38ed1039e6d53175b0e456f67ccb81df64c169ee041ea3b3a9ea78bb0baa2502a1173b04b3c6813e026243f8b65da07af00f4915e00effb739faed78b57b8758b523400a5827543d77871a9700204c82b2fff7078973609ed3ed68bd413fdf341a058ff97625d55fe741ee8e0c80f460cc3ae13fa23e55be3149678ffc7f794e4aefb37fbe89d8de747fa88fbd623295d3558cc8e182b9f3c798251ec7e292a4a7f4084354cd2bbe09dbc88001bb4511ae9d60cdf6dbc581f64b388ebf0adfcc85f17c7994473d944baae8f50ae77d17807a32e6755526a0539fbafa8c1d73d7325e000d00998d5b08ac56f1e0b58b3c5b179de80ed6e98c1b22c121bbe609857676952912ea73c1bdb6bfb54ac213b36c843641a4caea2ac",
  "2.1": "61aee3f16edcffc7832dc15c:d9165de4e3bbc130c22b71458d30c45b:364adbd2c253096999786cde49f4451f1643f274d4684845e02fa043cce02c4e3e8878bf7a241c3103513b786f5ced66db80f649046282025924750be0530b53da5a4bbea3f2f90814",
  "2.2": "50ab9ef711690589f8cd9578:c78ac9c9329d93323fb1d3596f90350f:637df12e1149ffecbcc3769cdb05b9fc7febe8fc66c59285440558cf83481dadfaf0fa770cb1c9835d07a227d3ed0dd5e3791e3f5286cdb56e9e9fc0430dcd2f9ec174103b5fb15eb4226d1aa39d729c204884b6d577e310cc39c0104a884c435e72da630764d1d1c2ab05fd664fd9d1354a021088e7f412190308924763a7c1b662ea4855696a2c6ff23b6950eaf9cad05583deb440063d88571fa72ec4323fd8c2c2236dbb08a6e63f86561265b9de0cceb1d14b42653d6c33fac1a3cee7bcddc941c1cf13fdc1f4fe93fc77f1c01d7e9fcc197655bc914c7068924daf9d05f20290301fba56211c9e1a8c20d8b0c663e9e30db7f501dfce1ea30a59e607694a220f6427ad08b6b1b719436e09fb05f7bfdb76161b669a067b4a2d562008e21e8e930f21788ac75b02d56b51fd2df199571102d771589c658eb100082d7d2dbb86fb794007f2fdf7837002687654ffc7f7735790d5e443dba322d694165a4f407aaa0c8ca007ad27f150ed19b44a43f83346344c53ce899bcf90b4bcb32b9e824df7b785173269311ff4",
  "2.3": "e732508693d5dd9c7f1c8448:407ca17b3161e8e410aa6a58dfe0c241:5052304a4a23aa8ca7d87d5da13105cbcdfc3553f3d7f4cd814cdcebdbf66268e81ecdbc04d91b773f14a9802e9f63ea",
  "2.4": "25fdff875f0c2d2bb33c8e2a:c196d74b56e1941f49b2c3cd53aaf685:1d08398f5e3bbd946ba11c4a8d8f092f7d9cd5a0029064b8e79944d7e67829507b0c1d3f226d2516691ee97c8f178842d0d72990b9f0d92b95363216e8851402a3d766f9cfc7e22a482086eea80d4580147c2175346f5055721f6f31a8234efe402e8aa30646141b26dc187b995a5436d8d95336d0e74992cfdca437c3d7971944f59a9cf5ccf53ef001121735b989356891d641b784cc15af4976c6f031e8f16a4e87c6a964f0907e97e567ea6575ebce12c8550b38301d12ae6f87cc91397e4439aae5f8d45cda86d90f74a26be5d2f210bae7cc997a7d5e5c2583ec1faf2764554e05218719557c66ac0800f24ec67b3d9d141a912228cf7fd865554e5ba8511f6456d5d1d20359c6a6b0b914c06d95ceb4982f1abc8b0c2ebad82ab7a5eed7b437d504dbb7d3c5bd35288191cf17f168d1b87d36327926879b5b1c9e458afa6d852a13d336c4d44ef9fb6d38f397454c16d68fc7c987522e4adb725f84",
  "2.5": "8df4a3b666b2879f8978888e:dcb61347e2a6a85ab998d8c2b06651cc:964fb3a7f01d127865869e7317747c33183aba584c2c62edbde71defd64f0185f5041aed058ec40baf8085228d18ce545228075b179be9addd866822a03df5752c4a730e651bf3eb43460066d295ec804691eb",
  "2.6": "3e3f3b95b2a7375e6deda155:eef8bab2399728cede5b030c4e4bbf1b:be0a6716bedffa0b4143c3e50ec84e72d0c1fa79315ca704530a9125fd260ab02aa82212e7e3cbd62dd2e880cfdeec8f67246e3304dfa4ddf8d50f62dfaa34d12109809797cbf1557d348d68b6e7fa28b7e471cbd7c7953d2b482eb3e167",
  "2.7": "5cee1f3d491186429af2b2b7:f91b2fdf2de92e407b508733597644bf:e6e5e848323cfef5a3c379e8db5f8af9080588642c21285bfa70c28cbd535b17e8a1de7108a9642ff3e59614123cff5ab8b89ec448eeac173e3dccb889089a3044e51d1c9c6dd8ba147c3ab36ac77a599f6f8cf7b5ae4d20142abca3090d825263815117cdcbd138a763d7ea479b3f8bcb7daeb6b348be2d521d60efed33b4a32dd3a378a805b0da",
  "2.8": "4f055f3ea37c3095c59340be:cf980d44ae9c171b55517abfdc1a7936:4d9a08eb6ab6063471831aaf6cbe8bf320c5ea612f5918e72c621ab0e44421e1060d4aaec20062b6c27c48f06be29d3275a400dbd883d35c51f38c2d17824037e8bd79041448e5839d1e57cf639675391936ddd2119d206393698177ec34622cf8038f8dd46567223e2c207e061516ab7b164f78a3bec2ebff4ab148ac8704b56e0e55ba84b1da5efaca5fab978779558ee7e75eb3c67d7d5c180b991ae3cbf76ab1853d3ad610bc8fa2d126ea63afc29071abe2d8059985b5d335abe48386a8b16b70c2fd9da79f7cd175d76b4e2bdf7fa6b0623ad2849c49d19713b36e8a2c91810f6da8c0146dc1d8b254c1",
  "2.9": "2c23c7d6e61083622963480b:d56d41e00cb7009d13aeaafa6bba3e45:ad1568002d043c2682e602c4cadedf695079562b10f5905dda31d1dad89ae88534c7ca951c02344c91f80b0772eca5ae34f7be859dfb37391ebcd5a7b2ad604817e422a66f40b9017a25188cf0a892d3f19ad9a48f3f9d37928fd901182c88e857c1694919ffaaf0b0a93f827ca21656fda85514184cc9f37dab033e6237c8bc6359afef18ed3204757b68076a045b57993f8ca439d3dc4f301341c1491a223cee7dc854125656f0f3eaf3decd",
  "2.10": "b609350b7f3225b9b994d774:7b981bf5b3d67ceaee58ec59b550fd08:e29f6548933cba0ffaa7e047340f44f98e872eeb24be40c742a9cab8b851aeeb7003d60906fd907114945bf4476d1b5b7ef8ad3ec197ebac855c11ddd82cf55a5c59f7cd200c3afb0e391e3efaa0527a1955cd47e46c213959b1f0cd9996ffc22653f9e2ed24ec761fcda00415edad98538c6a517a962d8251403f6a49ae1000ed267e3e2b6b03e966e67a8c792199f7de98f57833d584217f084bbcd2ff1296d69d07834e72dadb92e38b3d6475de1731010d260075a31de4216a064eecd7b4f8130cb2cb08690b4dd7f00fb2b2",
  "2.11": "91ee26ed01a66022fbe0cfbb:d8e95fa8ed3a9efa6d43c6e388125662:bc13a075252e8c60b805ab9c3cf0fc87860ecbea4813bce8b884052498211a8dc3906f6b5e52372e3be57718c3c17d8ffa2b15514f564f44d7a4c34b8474e764282aeca54793a0a4b520c5f77d28eb2be79acf86d908a5d1137027bd49e9be969f7d805995e80fb66221266ee87fb467f96e7a2e46347cb53256054760d0feaebde71e9f4c643e0dab709227afcd6bb34f4e7923b0e681c1e9ccc0a3ef0f5c75789c97da1cf19cdce4f537b0159b65ebc8458ba063f2d0075f74c3b604f54fbea06ce250c4a1701f",
  "2.12": "4c67cde8ce730429529f4409:17570ae8da6d82583dfe3b46aeb2fe2d:1c46257ab3a6b8362035825585932280120436439d57e6d1aa07876bdc3b252d2dab99adc2606c94450e34340b7ace739292976a38dddac9c938a820e28d63333f9b7e4b2c9a7b3809c68c2ea03a1b873e787736c6cf52609bd436fa549a10ebb2e12dfc30124431ef7f6ce24863c0cd22f0657b",
  "2.13": "a8eacb15c625edc30d19c9f5:3991bbc819455d38813ecbc620353213:446b1c79a869ae2098e197a90c3f2f0bd50251652266319bdd62047f131a1a9fc79b274a5db3b355b9dcd75c49cebdec05f568cabc86cf5c35d829d874eb298e6b36a95cd9c54b00ac1dad9d954f80ca07e38292be9a7af0aa57baed26ffe909f1a6f9d0a4107134c3a2342aac7214a971b5eda26551575e19c5d5b5f8be54def7b3bc363dde58e50de35bab06412c2e406b2c5168ace327a82178f5d9859c6a24a2092cb4c2f6ff6acda4fec174dda714d8be5094851b2b1c37bbfa83e81d",
  "2.14": "a7b870b4332957baea240792:ea3eea922570b4b878d35f5d5ca3f9d9:06d18776fb56daf02db465b701c5c5c5e42492137936a1d9eeb5d3c9b53ce11f796198ee4809bb19bb786484931080ccef20338df42dc8ded888f77877d2d347a4d8fb147fa4e78615460c317e89474abc3d018e9a9abf9df66d178cc6b12881e369912758ca4b119c0a8b4f74bd35cc323d57272e65072ffc4fe0a4045f6a1af22498e827428131de46b9266abfde808d89b6d3a533e57f2e5c9537bfeb17e6223fd69a544e75146f2a58865a84866efbebf6785b060b657cea9d49d11200ab5c4aa466781a851f34223e7b6b1ea12501db953a2a67ca9c75cd67b82195295b356086c6ebbe074a751d796165e8efd5a95b3668832b60d5af1a28adf8baf4876c5bca2a0e618e43d486babe0499ec0bc5bd63ae44560e04e019dcb4d27addad5e7651100764dd7db0ea8da5f3e064b6abb91e4aef1efa3d38c13e25c3e4a4ef476edb32321e5e75514d258adc162e3667e19e88a994793b767a498810e0c0388fe88e1a53a2",
  "2.15": "1eeee9e7d8d34fb6d74b16fd:c120b50a190523f6d8ff7f1f213963c8:209eb8748c049ac6c9a3d56aced6eebff17b4b6de5c2932584820bb30f6afee545a1c029009411122433d030ba26c4373686c08fd82c1c9258f19cd22a763e042b2c70ca7e9a67c2cdcedfa367bdcc4d0fddff04428d93ff96b4737ad2efdd0e5858afc06447d2a9721d3d6c7c73a8a62846698e05a128bc7c684d2a4cffbfa3ce207bb48acbefd0a72fe3e6110031af7651ffa55ef037e046ab0162481c31cd21233f78d0f1ece1f07b94ce6a69880ff978680d4eee0acc3e70aaa3499d10c251777771f9783a66f2e3de925eea73ca2b52256e2f3b7e698538643561ec4482f02fa8a4d52da8efb5b1a84f133b37cdf5a2392d2ba92d070f3f16b3dd1056b8212056d20811656bf22773df999528c7f807d06fa1964d2ec041fa28c185cfa280e4866b7ccae228b81d3aebf2b30b08cae1c1875d6fdd84a751d3f55e34bcf31be00c3edf382c94011b7745895ff6eec5ad3bf7027a0bf86fc25f31076dc14a339cdf87c1302d19",
  "2.16": "c270deae5837008d8b9b9432:d4e0fff318a627401651ab89f1219b51:52757e7b058f7b97b48ca82d3a3643280b5e4c615c82a2c33e0f64c0e300505b678e858f8b46b1e083a180e536ebd1ebfadfc4eefa763bd34ba8a164f4b8ed268053750e3bb977b703b663f4bc6c92f994923fcc00aa24338c6c9fd5c90a39b7db4620a43c193e778694fb29251d0ea43b9345f0c482d824d564e309588566012c27664184920aa6d9fe42adf2f5ae486901373aeeb3de411657acfe90981f241b686a143c86b65d1432bbba12535e76b7e9a8de5ff663ebc2270c9b2d9df1012c016753a248b4501197d190f9886fb9f38944ea595f036a3be1861bdf6b18c7e1dba26bc50452198e65c131aadcf52436bf748612c55309f7923223c8191c46349a1c92d352bb20ce383024fe6c7d07b044f0d967742965a528be28abfca2c5435d0fbdcabb8d4de32b3d2871e2e3aa03516469d3fad15d21c174e0a6789a2e462136b42a060f8887f38d1a7ce98c3209cf4ce58860ed8c4d1bdd268ecd41d403e9a51ed9eee72f06b17e1f060f7784db5d514a4460ac07846f0f407ce7510b1e8369e08bfcb3431a405c5bca66d5bc81317be3f32821d7a652c09c44",
  "2.17": "bc711dc4214173726482f53e:3201e9cf2b662529e3e4d84e382d5a9a:77b9b52429565c225bea145690eb968dca823cb0d28e476a0618b0ecb20640f14586aa945605a9cc9464581f44c81f5a59ba614b8293149e48cb913be8c6aa530a82f94e1bc486654131fba953934eeaa57667a8395016949bf6ab4ff8e27ce30d6df313d5e3dce45f58cc3e22ed2c1e2d87a949e790d2084a15f88f3deb84a0ed52385e36f52bf69972a9dc11b5a398a74f015b0d48b2161ce51ea189849713bb660826fd131413a5da7421d3368c7f90839cd2480024f795346cbd4c84f1732d93b8e6b7e10a450c80384695c1bda97d97b9cc05b2945172abe467709d149250e5fddc198f7e3ca0640bdb07540a53977d157c85ab5cd5f0131a6d311206c48fb3921ebce7b9a7f41ca95147c691208d99af1923d7fbd31d10781d76614fbbf3cd2a6837691f61ff76b8ecab9c9bb50eae2f10b66192c89d70ae5d",
  "2.18": "563c565ecdbba68f83653db7:ec1969aca8270903e0c952fbe2101634:438e4fecdfae7f424f5563e5a78acabd32a390c4f7f7dd8249efef47075bcdfe5b318dab3b83c5ff2325a86dafb4da8ef9d2dd019ea06a3f77224634f073cfb4e0b1d994c5a215512b841536c72d3f12c6fef70ea312c46adade0791ebc5b31a60268130bc96fdc6b2b1eff1319b8eb5b5551406e32e7fd3e2b342f9f173d6146658f8a4183aee81a5c9c5633c4ea2bf5fafc29aca7cd6de01b5c5d2959d43470b8bfccd96d6ed0a5f7b5c91465738be1be5ff4d7ffac143e0f36444061e7653ec1871a7b08ad5cbf0b62719d229d1605aa48ba1c5a0e2",
  "2.19": "d666cb6bef2f4af7c96fe9e9:1fdebd861cc984e67d2e7ba0e6e2b287:57711be9dc4c0b8b7e3e8a5cf0104be76770a5c49308eca7152f4d7d2f2d5a6cdac11f531612df67c67cc265d8e9af1dff18fc19f14742a441efdeccb3c208fd89fa9c4f6877193a043ab086e8d59418a10f29fd83ba2c19cf60844ba4352a0fa943792402fb36e588011c0072e5968c5573c8899ceddae29b20047fcfe195587498cc5defc5471aadf0277e4ee19e9f4552296e65deb54c74ffc5bd2a7b71a4f3ac8a79a448b80545c6617dd40d5fea9b20",
  "2.20": "00f60d1a57498bc62d49809d:f6309f537712e8d5b57a8b9a096f9bd4:68784aeca9b720a4269a82fa974b79beea0a6d2033efeafe4d9d68bc24fdf73299a2831e3a59c8c24ee398c0c5842a7c525ffe416a87de8913c9d0ae5cb9006d4c6781b21f0f5e22772619d4629e8069fa1e7e6ff3ea55171485601594ffcbc75759e1624df5fb7ea004e0bfeb2ed4bbd8422c037414bba80ed333e7f48d073299978bc4c7add9de713c099ac0ec787692ef6703184b47b3e067c0f549f697f6be5a812728e1a7154516c420f96586d532e62517f8e3f9ddf61dc6",
  "2.21": "eaf3987c43ff8fa9149ae21c:5f24091384c742225fc1f5281fabc1da:a5d98bf349dc512cedb8a3b1312ae6994eb47da27d4462d4d7048a9c1141dd372a1249522274142dff793c2b97d417783027c9cbc3ccd2a5d8ea6b90030b4610144236fb3441842f3a517a9696aa9f30c5628a8cb4d419407ff3ab51faa0299ba8775b80d21d9862363006b03350d6f432ebf1a913e8dd7afd5ecbd280924b911f42c44ec21a95d9eab7bc3ae344fa4c90a9a0e0e713c2151a93ebcbe54e43d74556d048d545b1f5b919899bb0fc7f2c7b228afed62f54c4bc5f60f76f84f4066e5d81d0aaaa0dc6f038db655792b377dbfe9ccceae36f12c445ef",
  "2.22": "761f764c3401300d34f37057:39ab782606de8531652d34733ad33ab4:8dbad9aba1a6ed8e9592aa4f360d263b5449a2fa3474683c19ec302067c9d6ae70f9752606ee2df2214387b0501162b4785d5d8336b4b7d66ed4a11fd69de2611be233df48ac7cd77b97a367a1600f8fc3d0340adb13581168039f547e44f18dff9bba740be5220bd91082a8d6a788d8bc19f70105daebc94c13eac7e146cc340ac4a2c1aebcdabbd24f89b3e118415f7be4e5d161ad74a145468243ab3f638bd65ec430fd0a4af335f85b0122db06ac410a659576362358a05cb801dd6949495839fb4727cf83c55302422d2d03ccbd478e03ab4c6efdaa",
  "2.23": "6c3e6de1e2f6d271f046b9e9:972038c2735c0b6bf83097f268c4ee1a:3147f2f9194b328c17899ddf131b9037d7fd3e9f2d0454371b49bf889c514a003b83abc3eb2937b458992523dd82b1a43146bb81415ea6dcb4f611b7454354a81a9c57062ae9490d8b7e1fe2870f31e8b958eb9bdeb8118eee975e646ae017c5d79ed92dd913b10fee2fd92b4f945b8f45d623f6c7f3857f6e5f14cda18eb0497f2549284e8e28bde2d9e32bbaf44f2295b2757591d506d444bab0fab8473d71cc68b2d7b98bc5395ccd5315570391c698b6dbe7d3e54193cd608173dc0eed7e192722087faaf83e7722c3666f059d7f2bb887e44415add7448c2f55c0f8920068336221e139a4201144d84aade910fa334d49c477421ab741770316b5024af42405e92618",
  "2.24": "cb4149246d1086937e0a76c2:71af66ff29bbc2e86c9c8860300d0c05:6a76a2aee5ec9a39cb53e620d44585881fd298c0bb26e7f1ff8352ff6bfebf8933e8d7ebc0a6f3dfca44579afc792a98bdde901f2a7fd2f5f817b916e74e859336a8be06c479807ca3fc71d88944141d29120bd4b0d64273d32af452ae96f27f26db786eb777eac3dd7b64e84eb855d1d53d76a91579360a6644d46af7f531646f79d753b3bdcf5dcf115f245682110f343e0fe514493d5348b4b345fd3d050b84a6f3c9f68c2dac47f70947f99271d43fd4b89a895c5750b15241d3240e9c78de10adf8042d5a6ba1f1e7244504a7fa98d2f7250709d725d8309478cacd0a67a8015266016d6d9b33223ef1f98b87c6a6f149d289c3f16a99e69168792241eaf032d2af13422bc34c041901ff85f0c112a9c72a350df94c598e45539db53d6dc2b695c1e6f4dd41a36876a0d6c40504ebbd1530b41e1c5d58928a0047448d3a9f93773a26e8c261caa116a73ccf633b0cc3dcb4b7c4a94589c48b56bcee46049f66f8d0028d8341e65031096fa70b5c9943a805cf604fc804b3536374aeccd396427448fda7ba5ff2a595a2aaaeadf181f98eee3081ce0dd3eba1f5773e08f401dfa0b728acf73f2f70e629dabe9992b081d37b317664995754abbae718f384ba7e3b053248684b145f18862204f1d20b16a81c86e54231a8e53aeeb9a1042bcb68ce42c2ebd609e1c2c0d9c2507edacd3ab851d28379c6ea8d6f689bf8e882fefca6abaf7f81909281e951ded0efc30f2f12a3",
  "2.25": "caa72ac961c552e3f817eb7d:a1c103a17f910d45ceffe3ac813c3ab8:1eddb2765edccab1c3ccb55997d41dbde1c9b57b7c5ca51f9d7a9e765ab1eb84c1f2e0e7b58e2d8244ac7f7a63d5aaa949a516872a16824d87b1f3d852cada870609b6b2bf10bd1830d61766a103d13ff701f4a1532725d2b25408ba83155f76dd421566cea98fe952e63265916b33316e58e7d6cf266031a28a4e1863d3dee65ec26553a6cfff637337cf3c38d8f4d495913928d0a5eb3fd26da353638166cb7fff805e5c20f0a5b3c198eeb991403710d901c16181c777b75fbf6f8c3f8b267e247a321c289067a3f25c34e3f42a88237be8fbca415bb45cc1bc964a82ef08027455944fd6ade9990018b799993d4f9e4bc0d8a752d63eb5367ddb3e147c641c6a003372623976e8516cc8968602b12b205b88d53aec",
  "2.26": "f158b6e38415ba329f58cfb3:b2db1a3c5e44185c4e73ddf8dd2dbe93:c51832c5d3156b9c7a706819b2bfa188a912afc67f6c6aee81abff46d774abe5f19fae35a85eba3004b8bbf2096aa5bbddb3423bbda14d86b6092ba011764674f173266ed9718484d0643b16c51e84bc141fdfba6cf2cc7c11e00bfdcbf8bf87f7a9b790f3aaa6399226a455c7cff37217a57bc7f037166451bbf052400667f663287063712a78642bdcc7c92e020fa910458eff0a636ab33b630c82468d3165299ca74fc65a25a3083855e25ff46bb864b34b1aafeee5e88d9f1e358a94ad6d1c0b2a383a8b722757b59607bd24bc9841b710e1dcf318266deb40ec69651546fa789954d2f60934220bdba9d60e02465cfec64a878f913ee7f9d64b2b9cb774b1d2953d50122f433b9f6bc5ebfd66de62548d27cce8fa97",
  "2.27": "146eee6ad08fcb91f05ee1f3:32147b45b17107e31dbb30acd57e0897:a6579bcf95ae436557d905eeeac440f4f0a1bcb4580582a3675ca277816fd15d1dc018065b72d31a321cff1b76b246149f59808259dab5f54f41664027d45dbeb778d0adbe93cd0c0b550e104e3b70fe8d78da4db96b29355b347e085dff",
  "2.28": "cb718011f535335e9793abeb:cb44a7480a51d2b5cbf6d4835cb8d104:21971d1f57b30ca3bbd2e8419a344872312e75f02d762b6f730306ec923a47f45a6b8c175bba65dac36a57b6f704880d7b9e156aa88a56f6576ae37b01536524b755ad743c6afa8a29cbd2e165110e04cccda6a806c33fd2013b29fc361a998bbaaa5cd67b396f07ee5fd071b9621dd248e84548ce2e88bdb74148982a95f5773530cda552f6a79c52c3388c4952d85a021c5af76509d75ccb5391b274a5fbe831a0ad646dd73fbea0845ca0b4c8ae22a0ad3e8defa1c895f822c1485c192ffa91a86d9e8e2f98e3b6310f566a565b19bcc37e490f55aad9b111edafb92908211cba6567fa9e53ac1a3f0bfca58ab89e109a8cd9ac3a1ab2195ffb1ad51677d1365b782e090b8ef46f09c0232f54d21317209f28b881e3e2f8251927cad6a424464362f6d9a322156176ea30e1fb02cd2e733e6481dfd2ef3fb757503e5f7d40cdaf7b7853",
  "2.29": "e35c4392c5b06c0ba87648af:cf7924cb898fe3495219b96af7049dc2:49908103818c587a2989d4708b6dea94baa6eb56ac64a3a7776a290d6ffb52fecdcf87a4bd9dfbd30643336fbeae8b4d9482e6861892567e2b837871f4293bf518e7809fbb396160e8a35bc7ef9be46127e5b8d341fab447d57735e28b1e9223502b0704ab1d1fc9e9108c8e6c17255fbf250448a90353ec9b43e651d5891b03e027",
  "2.30": "e0e797b2ea5dabc004256723:d52e70604b88844ce94ae545ab9946b2:089930780c6611eb10b96c036a9e5e95018a3fbbb84afd62f53c28ba60480328db3bbc47dda83212e8291df5183f4c8e8c9d114de5445b87425f4d257c4eb3f77fdb1b64b72213da7f9cfabc3a19acb49ac3151e9c13da1f5f8567892ffbfad09c4a945619be93c24db98a643406f8ecbadcbfc166464f34259ee7c7f6804ed57a4cdfb0dfd575c452ef6dfa943b659a76fb57acb637f308634534f941ed72d28683b1856034068b605a3b80340a4a458493821c203675c2c053a59b3d1ff35e80190cee1913df4a900a883f8f675df19cd065b28f8c12090864ad",
  "3.1": "cef5c58694a39db6db54a4a8:1f8ad64d0e6930f3595d346cf7d1025a:c6cc33639f900f451a62ffde0187c05eaf295646f86a06827c53ef4e65e1f1070d31d89c6d6641b4a2a22aeca2aacf6d3008900b4d86c946f751709beafb900508cf18a2b121f93083ec91792387a2b6323b9c69ec13bb543699eb4ededdcdf763e549fd10c0733b71b0342f1cf3c31defd9bdc73cda8ebc99b2f67005301c3cc40b048edef25cbae04c0abdf268c251b6ece4506a45b2313957b3fc79edde9ebd7e3dc44198a51830b99467961f21aea5cfbeb2116cadba5625b9e88e0cc151758f98",
  "3.2": "36e86fad225717df8057cdfb:17e8ce3037fd434e4395956350e4ec63:d7003fd25c54046a065687c3ef33f30d6e10302dc40965500aa3c2edeea1ed567569ed1ab89c4b6c4f8a1eb5a17aa3bd77acf474f75c9da664cb252af3657e2f9e3ec33822bb84896167859ae50d2ea2b4dce4bdb72d45dc9078a3894ead075d5d46ad86ab962af670c0da5ca0ada96eef377d94a38f82ca86f53a347a264feddc59e663214fe634f28f34bac66af65f81d24cb1ca44c4de26ceb6d8bbe9abc92d5f45c80318c03ad582344804ff4f16e63985110e4859b5bd515ff1e3e9dbac8d1b518a010b3684af9f05d8a55ed7f7e9a5cf43acdfe52642edc3fce0c2e7",
  "3.3": "1e7f824770d73b8bb0329942:4cf94da6c39fe30f7b3580bcc8b7df16:6096aa91678482379bbe66e4a474e3e87c933c1d11a40e4299baa411207f63575fd5785a1d9928f9ea95b83c6fa345492f113c5231728e3746ef7691eaea2540324dfb955ad2246efa543ece58095dc3b42f55b7b9d9dabae24eaf5139d91d55d7d52dec2474f2001692d9feeac3cb74eaf9ea7cac03080c892502f5c0f638dca04c642a64d5abab86da75ea26ec565a544b5056b28b31c1ffa019046bfa53b1216ebdd4ab68adef4cf05271f231fcb97b6d3f3cd0f699eb9e458d250810c61eadaea81479ceee113069b10a378e12d14568274564ba3f5aead2de1a3dd2df1441ce552239ec4f277f730f096513f13805c3cb8f795816107f0aefd806dfe52f2d9ada469a1e9adb94b6f0ca3804032ab9018e20511767017682e6d8c81e4ff89936482232046a546fc7087afac87b32fabaf94be79976878e468f1882556a2cb2807f597c",
  "3.4": "4e709772ff33aa2017007241:28ad9dac9594aabfa0a41f650d49bdb7:1eaa0438f3a18c3b1c2c97109d691acec0bd6a53e4dfb715577e1e2e0d0c5e50b9d7846724ffc0b0298e1db119330d04aaed8952b56a8a683459b3eac86673b30a888dd11721267dbb506921",
  "3.5": "66be99cedd68a290cd834bd6:ef4220df31dd82328a45b29473e5e1cb:c4f5c7f3e0e973aa30bd80703883eab7becf7d9b5977981b7464a8877c9422f67d14cc4d7ee666d283b4e08c7e605ae481f5ae8d0cdfe39fb520af805422d5aa41659689dc09ac28ef14e83a2d6a2ddb4a",
  "3.6": "3f9bcdafec95febea32aa660:6944b313c5145fa1883ff8e68664e5f8:f952c4c6a60777564f6c36f4e98f97ae49ad58aaa194ee81d454",
  "3.7": "500346eaf8c1cf7c718bfa02:d21f5cdb37cc57af24f22d52ab03af7b:789002e406db85fbfd37b31ee3cb842c5736eabbb21cf446c26065992b3f39c530d5913093c544d1a6182e825dbdc87a000e9f01f1298d37861249c83b59af95bbe20e497e006b03b9cbc5a50acd9f80a68352e609cf84fd9d6dce74bbed58c66f0b764fb47f20cd659bf5ac34022c31852bc72d4fd045497ee7f68c0b3a317396641694390bba482b2d258ab3ab8c0c0866482ef71be06ac9a337ddc8fd78431a49f3c2a3c5ed881a",
  "3.8": "3de0200f8e64e712225bbb17:9d97f7e932e6756d122e63d5ca762467:4a43de4a491f530ad31cc8a52464872215cc06ce3a000ab7cad7765d5698b21839a218a5d678e01b21d34429f31abe364db67e92ce0d50106309f4841e15266a3c1c63c6643d5b6c727195dcde22158e9d6aadb9f70546f4f28b93636d8464ada8264c3fee7b6ed34860f1f29fc1846e77776c56f16366c6e40df3ed614654a4d2c9aa07d05b79080858996e044749468f25c8e493cdf4a6a0c775e1f0f7",
  "3.9": "f4c1857b00be75ea7b9f3180:89a006bc8b999d36a3b05a5ccba89404:e64c0bfda4cc1bacaa67b48a6501e0ecfcff1328511addc18b60ed2be34eb0f21850f3845ec9dc53653d409f30547224b40f4d9223cb3ed705dacdd3afe6da63aaa774f8511e6fddfe362c4e4edd7cf99cbdf8ac6046ec63e930403a0a9322ee84d5fb143fdee417c5d83e2383b5b77ff08b869dfe21fcda0c229b4357541fa1bdc0f1c050d55c615d6f0b08a16ee236b65b6970acdd0a88a0ccd5c09883b5e80972d280",
  "3.10": "36721777f3d1fb9e2dbd0568:6c218608d93f64b268a53096ac7fcd81:f1a8ea2c739742566811e2a5de88a02487fc1b07f6b96b5f9db92b3b5df4650bd2271d61330524d8d9ff1f538d5d0cb942a31f99a98952aa65d8c266f50cca617ce727e8f118a6c5ed7a9af5d8d435fc33d2fe70a27554c8ba02c4785451c8cd4f4ea03cdaea9b6f3dfbb6e18af1d8c6ae2d9388db1ff7f48b0f3675b4e93c10738480e0b7a9c89826cab053276fe995106195572145b84487c85f0d7488ea6c855da61a9bbd39809e29353b90ff4bd9c75e760895f167add416fa51c57394e6ee6ea12453ef843fc70591da8ce3e3d95a6f79e53dce49e9a96489decb620d41be8393d31717cc0871a0f32f496235c0c3fc92495a6ca283392451",
  "3.11": "f7fdffe9fb529b25e7623ab2:86a9ebf9230ffae0a19e07487939bfa6:e504060714d5acde94156a46bab29eaffc2db1a25b637c93b225941c1526c7ef02a98668163c0739bc5b7f8ec401f7ea248a70661ff60a7c948778039dcd1ef47ab76a6f4040ca857898a271825ff6ff79759a2d048078b34c61cf3d69da841dd6513abc900aa7855dfe9df3d24f09196cfb54ad5be48034009ab9750a59ac484a253d2ce9ef3839ff7e3b7263b9f1c67e5f0a39f4a9a9ff597902f3d647be313681c5f479fdee6e8f9ead9031de808ab34ec5af4c748f36f1e1be08a4b0f7a458e21c5528cf6f6df076dc8c92a442efb898db3856645d6fdd457869f6a0180163185ce5aa95363da4b43f2e42c7b9300489705e87a98f71924f",
  "3.12": "6468cc4aaa75d202a2ae6b8e:fa5800647541dce8ac7e17c90b3c841e:bad74a4a4e93ac0760a487967df502a10789565b893965f1e83783f25fda2757e703b3c7b72c290820a7cafb42a9c50d39d28d1f01ff359d51f71734163aa24be30afae21336f9017c9867d51fdc78c35d8e330b7754ababb46ec266d8774912a116bb55fbf587147b0f47d6b3d5586287daf2f6eeee88b81e1ece4042a4a62dee6a656b8e179d45b7a05e340b93746a2f6ebeb971ac784c1b525f52af709e883db9ca842de9010501673d7ec4d0b519d5f674cfd0a10a76bcda6bb6c902f7f1a0157edf0cd8ebaa5933644c07bc70eb7aed7b31bd0cc78f14070efa96dd85680d9b9f38b7968d139f1456928fc8d604b89cd89457efb108f52b95e1eb17698279ee81048f8a44261219b3b82c61b202d68ebb2e8891ce081299774864cdca89e9e3c0414fedf812cfa6d4c6df32edbf1568d28248065adfd53dce38617f2054172a7a99946146a5958c87387adaa22269b48a53a896a1d24915a3c5b8a16aa6",
  "3.13": "91a04f48583716529a23bfc2:6bc72782a84d9f2770a8de5c7297d964:6a1701f6f49f8f322522a379616efe767ee91601268f3d194c82fe3b8ef9b755a5963b8cb01d8150dc7d23c258ea059347b067867be1499f8152850f2d161a3cb4f971ff57f8441399766acac8ca4ea39c7ca401efaacfb23f89e1355c13cdf63a47202ac7cb16c52cfb4f0a843038bfc7fe4f97822ff86e153a0e1a4f09536573c7146ca8488af0216e59a6fd10acdffe9632aa6b5d458e9a6070ebdafb1f57be07a2c4d5850b974d83ca62479d6a2f9e50c24d567cafaf762a7b47f82299fcf72a6d94ca74916e9dbe647edef5081a47f3fd9510d80e7f511f1c784d48b50d2d1d0332fb7128bec4dc23b1fc434dff967168cd96",
  "3.14": "84305ec0347726bc9f88ae46:49f494e1e6d169b7abd6bde5307348c7:ae61526ab5c2ae43fe29c2e7ac0e2ef2af7ee035d46ab0126dcd310b5a2dd4d6bd96f828841ee17be10be9868e0b2b843cbb437fc241a71348e879aabc4fcd28cecd1db604e63f3bf700898e1589a0a0bddb4dad3ffea99c764759e5f30b87df61f7804ee32f381410e0499c601d1d84d125d903900e0edb92c23f88e599a396982dc3496d76c47d6a18108b1df3474ae85ac1ed5a83bd434dd95fd39849b382cb449eede90375fe3f6b5688f2605a26ec6c531673ca83f547cd6f4b1a0721b0fef6b0b835a18f476238",
  "3.15": "f7147f8b973ad0ccf793ed50:c12b919662f29b3b10c7fafe747fd0d8:ec5041c9aba733fc6879006394501c03cfc34bccd0053280a7217f43cd561f0e23f173aa915416c56fa0290030704276777e92d80e0cb495c6a7cdba7cc9d0b5db46e2ee8be4b62fea715e94614db3a99f4e5ce93ce9045de7844b071b31a29a359935bbe06c943b91c6a0375a4f1fa04c07fd3c7fb0b735ee9d3b04ae8e0b52854f045a5f4f67f5f3c1581099917684eb8f5219774eb0d163fc4b16952ef0dd4b0d0780f179d9f40af03a3862d6a572",
  "3.16": "5e5495a6ac74a1ec4035c08b:5ca4cc1623c8adf1aeba6fabb76c5d0f:e407e0edbf02e285e5b20376cb81cb92aaafc5ba1df49cd7b9c2457e1ae0896d6bb457203951f2525977fdcde1ddb7ab9b73dc4b1e6dc77fe4a4471af75a666a675703ca8b853bb4043cd3468e46262a6c7c605caac0c414e515eea3e250f134a40c90dad26a70d700580440d6a1cf0a87e69501a25478b2854a3be75809ff8099166661efbe9395f43d7aeeace0f0bf3626716a730370ee9d31a0471774388ccd",
  "3.17": "ba80bb76016ba6215dd3fd13:34dd289f07622a0de2fde16cc37bc013:6ee3ef57a7f28c1f669f6e9cc4d97c6893374f9ff317d928c4b446ad6fe42ff53de95bc73bd8f8909cd47dc77249da0cb06ebc39e2f4edc9307e1ad903b784e10bb8281d713b289f7df78d00c75eab04e44ab42710d5527e0aa32f45aed2ba243281d67a46937a6e2d5a9d06d9db5c48c2259c69ffc9d141959005e8fc191f743520a575624a0cf5fba664937c76e1c41ceec74f0bbcebcb1ad8d70b0c9fd93e70abba231120e21da3c9cf4463a931b17db8c03bcbe0778777fa606084",
  "3.18": "1fb32b935b856c1669590d7d:eb8531c0eb6f1cd7a791a522357efcbc:3b02e8bfe276bd67bdbc50b0acd5a18b8ff56ffd85721a0e0a50842f5e6c72348263a41ca8596347d2daa3d88463aaabd78ac14ad20a579072ed9f0a2d14a3b1",
  "3.19": "647ed9605b2170fd975bc53c:1da66056868b8a8adba65fe1daae69a9:c3fb89e230e1fd42c098326836d8a194bbe60f36305aaa3e95a7d1223bfc3b0f534a1dc8c6c9091d4b826dd6551d20e53ed8d37629a4f1345579ed18b5295a41c582f8c834d728831630fcfced90af8a4fd1af42d8ad3771b15bb28fcce17399e0e6ee7c8c80a9d59bffe481c74724b08519cd0ca6de60cc99c9e7e1c77bca0b9ae39b3eb711d6126a2648ae83ede3389e1490862c7892230936fa935f62319c9d2e89f8637ab4f095cd46a9c3eea533aacfaf8b4551b252330e56f2958a740dd66fc21dffb3118425276c40d4e85273237c82e466990151844b262f7b5be2b6d8d2837b5b2681fee616221c5b893fa90c28d1aedf8c63a3ae32308c395b227f5c895d7e91",
  "3.20": "2fd7aa2f2c00ae49a7d41af8:786a78f2a589f904c956efab7ad175e9:d0f7223543db551253ac4ea2d89daa6eadee8d84a21fc86dac3dbf3f3a1200bb3f82bbdac91ef0a676110caa93e102230c85650af57fee743aa87e837247cd67863e63a429ee27c6bc5b176f798a6a2f22b347a66915da877ff4346926a1c877ff3f8aa8cf4d58c8702a9dc0b31a6ee83583a0b8e0a02111e24acd28bfa798440a9fea64ec34c2b0bb55c6dad7af18a9a8e2952cf144cf4cd44ac65b9854bff1f672829f5bd69fe17df897cce2ba394fa5a91f28b0ed9002684bc06b05fded73f127bdedcf57d3b68a1e9c1eb6a35efaf382bc29d58388b4b33f2d805a0d18e6fa30f7d985ffb990b359c1618f08a5a3c788af7082d0cf9e8cb0127d5f",
  "3.21": "291b29b37d1c8a097d47a263:ab2d1f53b989946bfbc3a1c804de93eb:32ae30e116da31cc0c0b28c1acb4f275762d5c03aa59c661ab61676402eaa0d0b2d953ef53ba197fc41d1ad82e09e0a9d507b93c868b2baf85a865cc23563d349a60a4699b22b423bb3fb019cd8e83399a2dedc7e081cfb0f0f94a03bd53f74fbd03cf7bac3d3ec7513f4075f680071acca6b60dcdca2daada4fbb4cc6660ca222e6562b9d652b2c124bedab87fb04658301e4c5d503ffb153eb9ace0bfb45db96683b870e89c896271771094c3fbf5f3c96f5edf0867fb1cbc5a61620eeb1515140ae6c43068d426cf54d8e2939859801a3b3b6ddfe7d64c9e0476c1cde1e0ae8a48e8ada85f566fbbae672beb3ef0e10423847aee61c0564fb844b45cc058bcf50d421f93e9a71459bf612540ba84eece0f07f5933a647f7b644eeab93fef8c4d685d53799c2363607",
  "3.22": "441cccd173d96525d94ca413:998fbbdac541eae338c9bcc42e5dbcfb:49be55834b1d43f5fcfa0d4bcc704430ce0837b9147bbb74fd36fd20a661f0e6560f24b3b3000cda733da8a2b350ef5196c6c6ecb7a1c8b0247651abe0b8abe5063321fb0e8260ff9fb19c36578402654e89a558b69b907d78b05ccec263af9e36b412bbd2bf669579616c4cfa7f8712820f05e77047e81b48d03882fbb59e1b96f8583732f928fc9d263cbc96781839b51dbd7c435cfad4692c80b6f3e8a9d049005ecc3b560441bad47095684fb8dd6f8242be6348b66aecc8aa90bb91ba6123d89948f733f8337423fc689ad82db5fca741550cbfacbe16e5d826657b8b007e1e93c12e9dd68b61c36cc6fa5b8bb10abfe7256fd56ae9f98f430c4f44dc4e1c9a58c4d426c9c9608a733bd816a9c5f61d81717284989de9d7075ebe1c9050b2ec331b42c23178b7cf4bf3b9975e2048940af8f4da775f3c0cc09b1b3a1d4dc997cc52d3ae239302904441c36998563b85979b63ca461be081b5e5ada85d39aae619315f5b0f62585cdb8a67e7b37bf925a11514d4c6890394714798a6d25d14d1c1596587f16d940b64b5dba1e3b6c4494a9285f8f8fd160bc00cee8b6f34e097bcb9993dbb3970d95833771f6df978b10ec56a2c5e1a30d998f5b85845c6102cb9907f8c00443733e35266d6ce60555c3327b28dc6522af70f2398db898b523ac3d053167fc8df60e017bd1c434ccbadf9025a0e71812844544afec0895d63704732447a7fd0267778238487562f28379f2a2ddd8ce46c90825536ebe731ca10016b97a85bf84082a0d48cdca983ee4a0b09d36443b93fd93d3f599ebbbaf26ed9692b67eaf6b1a9a44b17d5ae15e1212539e8a79cdd2ba378119bd45be9b76a681db3df33e8f6a756175125c49bcf3aa3a10fbcbd597530303a57c651738ae5ef22edab9d46102711230d96c89e7742ae195872b4a7f33da5379f6c0c929745c395ebea81febaeeb89f881ad29a436c8f7cf0e4d815a685748d1e4a032d7608633429ed19ddb511f8c52799",
  "3.23": "93d084808179ff26fe1cdd2f:ebaa54ae5968fc5f2e7e6c5736587898:5d98125de1f61aedbf29b4b150b221d73cc93390f2783d6d9d139121e418f02bc09f115f779ca2e8822d85a1365a132c61df84e4535cc1044401f54adad8c198eeb7ce8ee76432db5d38723bb0e7e5c700cc5e33bfd2b0dc0e70a883027ed2ea407e8c3fcfa518b0be01a25164222815ba7835b9903e5a9a23e5d2f66b30fb224b7332ac3c670184e55e217ec567594dcaeb37d78266012f81277c7bc29e6925ea502d31a990096d8ca616cc8e3416a12255571ff16c0b81d4d8434d4cd9a9d6a145b6aa0bcff227e608968d53725aef434af8e1ecf4d409bf989efb6871241f1cddfab2b84311ec5a58381217db996261d9b9844b6f06800c8446397c4d4b500f59b69be7478e9d81896c4614b437d3bdbc5f93d0193c782b1f8b76f3ae36534fcec477",
  "3.24": "ffe300faa4177f0ab380b7e3:a91ada5ed4515147bdb5d0a6c6a5be0c:91a9ba9687a4eaeae52a4c2f800c83e15714184ae5ba4925c6b2008ff9ddceb0c502c984fe3a5b88cb47078bee002d0fd1f975fab88dfc12f57ff1d51f1cd6528ea3acb4619cab6ba02b1b505592323898942d6d34313f92cac6380c61f032a6cc03cba20d050a934757500f15dcb3074545b52e98fcf9dd89c987985fee78c53ea1c6141d12f819b7444ea54c3e08",
  "3.25": "37701c6510cc179785534a88:29f91f2df0938c9c56a2be0904eb60f8:800e8a1350a7911904ef6722f389ec49ac1d3bf3d5bede83d8d7675bd91fbaa0658157fe8f224d65e9303b1cf449698b239745831adc938aca8d682de1d4f52cec81dcc69f3ee138ba5400a30a7a3801a649d8955571ef5ebe81a21164f19eb387bab74e3418a4f30ceb203c4408f37277e2f78e51156d20193a0889feb8d701b223b391e0e3ec7c9ecc319945c901e2bdc3587394ba29638fb93d38d4b958146a487550a98bf805e4ceabda92952abe406c8e9ee45e02c3038b0fdc6cb5b95a4b64a79f811af17e7b64eb1e9be3329bee82fdb799a7dae45a9d2ae4c826ffd564e41204bec8191748786b7541f83cc75a89907124102c9faa8230b5180dea0e4d53b133b38c806582569f45115c266c76c6e5047685c076a890225664414a1a3c87e7552d8d7e8caabd35a3a1826bf9",
  "3.26": "b4626ef0efd9b9bc9d922a85:2cc78bac5debae8e28b64a5e765d548d:653fb3b8934251eb8aabc970b5122103a9242900e28ee3efb8df5c2c70c3c6aff2759aee337103700b7b26678b931f06570aba234422c90a1f4a0eae07dc0be2266971caf7dab34b21e5322cf6a2bc5d2edf35639c34463d15ca585c04169f435d81ad7a6e887a44f433c809ceb7eab31fbd9cddbe4828238d89be07ebe60a7a4e49946d789a05b1b330ec90904cd08883325db690ac1944124a",
  "3.27": "184887ac5f14c8fda4620622:0992af519b457e0763c432df66602a6a:eb76a280098fb0c4a8b223be7f8adb0691badf4c62e9669bbe561efffb1aa6d6d06eddc4414f148cae8fdbdc609405735b32f953a4e4485487f1632b14445040c827954a8086f936137d420a1e7fc29bac25dad62c4aaf66b858bc52977ee4b70965722df934c4f9da005054b3696c33b4c8db0cc0101931572dc02e5c74ce208c09fd41de151cafef7f42a50501041ad0dd66aa630142d8821f491b8a12e894c4d4595e7ef5f5316b5b5f7cdf443b35c5d04213bc333306ac8c6154d06ccce22c2063c2fd8b694379e6e49b46903a47ca11c97a7d08fb3da812a9e9c513f731c260e75c8f8f57d602fe79c06f96a6eff55d1ea759b800bbf245024e14224479c0d53801879855231e39fa5cf9fcfcb1cf1e66fd122532e29426",
  "3.28": "0e64a666d53659dcbbe1ceef:de241c3a011123c66ad490beb74119ab:3a1ce9cc90913ca58fe9d1879d5031cab4e43b6834c9ee25ac6de36c442058182e02a90c3b092acfaa4367dd95198ad080e5ab386f0f2af1459ad03d8097007bbff8d60df69ca18779dcd2836800f361260800724bfd2d1968726b1c4f03b6a84244da300616923a335d65e14eaa249bb34e",
  "3.29": "0b893bf2ccfb7fd8bcd143fa:781f1318b04b8cff4ea3b8348d0ff683:f744cf327b709983a40d007b36b74812c0c8f5b95e9628a6fc2bd78239f9e25b427ab45a099552c52cc1c10d33411ed8844c70ccacd324143dc1c438dace0824f1ed4e21b6c0c0bd5d0b77a1da2f11267b5a5dfea2de13226c95302fd1b4c99008fdb1f17557a4628c0c96b7adae50fad608eb4356692853fe171443f76e86c0bb66567af9f4b9e5ee4a1fda67c57d35cac03afc76f7663c8a7ff168b8ec26ea3f97e102e4da5acedac3e34a9d2965955e5d34a8f53339e629968d2030c52f49c757e2e84acacf0b9f4174d6fb2870004cacb6dfd2133e0eca2b4f8235",
  "3.30": "80e46e65e57b096236a35f1b:42017fcaf65fd8f2e0d447643218e71f:79d8cb8834fb35ab5cdab6d8b76330d13fc69972314ab74507756a6d5d23c92a240f1ad979b05fcb5bf014c2d3e35f3454540cba9a062ed3b0b0f08a885746c18b5065b7dad7e1bb216e3f5151a5c47570fc4e000c553b97451423163e09c87cff92010755ad3f583bd5b811df9439252dac42dd003eda4ed7785139c58a2b5ea898549e7b43e6319ded25fcb8f0b39aba4bb5ce32",
  "3.31": "2ddf37879dd47e6782693a21:fabf0b7be8462cd63ec9c1cfa6e67353:02243254641f0d63554e914a448cd2c7a02953844cae0c7b156a6a77c9745dff76a95fb0f283cf1232f5c9211c6a3de25fb297eb23e4c1cdb69b675d270f5dd24129c3b9b9e04546763f900b2924005953e2c15b22d0096f29582fadc612a6afd6db46936a11be1ea68b8efad304a3b6e998a405b17effa555e58590b2b953cded86132e2b334c50b7497bc0d18c82589c2511550116c22854cee51386d34f64966008fc5fa4486cd9ebbfbaa54231e74a7a5dbdc665129cff2a21c486cf81048d49ab20332ebffda5f1c45bbd8197247ad33c4b5fe06ffd1d35654797eeca816bc0648fa830d37428db5f58aaa70b143401c123cc08a4ee64ac15ddadcc0ede19fddc75f1cb7dd87238f3cb3ead02c7d5f124f8ca3b3efd55b2361ba2efa446f4137700386ec74f2bdcc97d868a8d6fcbeb37a4f0df5cb78da5a22d4161eb9463cc21afc9c2feb748f2168d6ef95242dd",
  "3.32": "08866fb816eddeac8dc8f13b:b6db885d9ce6189e6e82c77dc5407f2a:ef0e4a1f8fe73849d9fc37e44515be64c9a6aee1925565fbb10036f5cc51b196a40c152daab0ed5c9499e6058acf086d9e4cf0f0309e28b2387087fcdebf8e0dafac062f1daa9cff2d6e96978e143e9c3f515c534d9774023787d75484ff3284d9473f21a60559606284288aec0aa4a2226c6bc3456fd0e4d4b6472d286413d1dc32721466b97eacbc0e5e1d171dba1f8612af98f0eaaab5b73c741caa2154042d833b81c4055578f49f6ed16945dd7cb1d4d66a7f672f61afc956293c2f4fe3435743686173c57872b3e50c5e0cfa8005b78cf527ea1220bce7997f7398bf1640a1af03f8dc476dffc2d99b44600ced1cdc6d13c5008137af9f483707a3aebea8bc6ef219442e8acfac5b47b46a48e82fe019bddf0b5032632bd89b1efad0ded409b62b34d8d41053dd1718cb89425820a83292870dcd24cdaa0c525366f1473cb09595f3e21d87e574580c6ffe4c7ce0f7321849360053634e1845d966aa560a5319a2fef4d65abb1bbd067c186678480410639d4713022f31a34e6a3a6af8d0a86a6a7b08c8dc8080572490feaa278da4bfb48582e5699dd0c9e022fd4da4d73cb94ce5de9295e88e5c251f81028d9b50c980130825eda7e5ecae53696f56ff4ec2bc005d0b5efec8a755475cce06370c6d8c715e995d400cfd0ae1ad236616f8c2a0606256e53fb5f58041f7661aad53ed35b7dc4d6b216ee34881ee15f7b9195e1c4273ae8e2319576042123d4bada09c0d8a7371c61da477",
  "4.1": "647ab6de288a04a1b33331d3:10bef5d1a9fe3018046064c0085f8917:e152e836417990a0822ee46393ed9f20775c4e5339ac739dbd1354572fcce35f35c91c7a75b7232cf4f66a32e92f543dc2c501b8b1c9e55c4e1aac454c6aa71da3e423e466e9a58ca26bceacc965f35533ab69",
  "4.2": "c38ef399b61c956826df55c9:bec7c797e81dbc6918ff0543b3ca2a4f:03bbf5b31e8ad6d7c0693f8f297b3aca877b670d87689d05e01224d85831a2b7a330f7c665b1cda498b7338bdbd98969fb479d971a1310277c03dd7ba72c5d9950115120c7addf73697bc940e1db20851ec37b31bfe90f16e6f3a66520ec3db722a652e4a893555bd6c3af32a9b5fc3aa9967f8fdf48aaf613bbca14b9a718c3a7832f89601683c766141647f2f0bcc278223bbf51e51a8273b3d389e540d7a8494658d2fd2b1a86cad87752",
  "4.3": "f615d326318360f594fbf41c:0c6d913135acb9e89d0d4912f40a770e:477ee4cf70ac1cdb8a7437670efc933f45d342a8e83537a2e8a8cad68da6f84a63dbacb88d75e67b32b9e2e59200af0fee8a19bb42942376884063c779a3a716882b23b4801bf0eda11f47247d7a5ceae6cba5d02db3f178ba00ca46aa6d34e1f2b00d22b507f9ddb4e6921d56f299db2d425a5bae75e4381cc2ae701e4d49816d7f297865dfb66b97a0c8eb04392db97a34007fa9080859ab5da90d435abf894cbc52b11fa7d2f7e0725bf9a1641e5540a6f08af6a52d20558a202e4bb0d3083d77c5d9e45a0d21de5e54bc0ae0b3d36832dc809968a5bef90dfeae4735cbf3ab3a297e4e29be62578c024868f81267942399276c43735a41b60a8e6218dc616f11cce08d6aa1b1abe749e413454bed6500e0378e5504a952139eab9dae592b1d864074e325bb9cb3281490c5293022",
  "4.4": "2ea4b695cce5eaf75d801437:13f213fdbb5c33dcecd487e3d15e3234:51890d17e0bb07a0a99b71021d32e009a0fc54b9ab2b759d7acca549b52296467dfbc6fd75ea2153a884d290c708da067280905aaa05e32bb2554204b487ca44eedefb887775e09e2c0a99f4074f8dac4b6e68eaeb47292caf60589bd5c880a4331a4972b008174c253cdc976843c61e33ee996761a6e77c141fabd4ba1ac90d17c8fbacf11141774696967fc24bc9f20347b60312f83943407b0b1f58d477af9c1d8148bd95df412d56aa4639681002bc1211aa65843097ae7cf80a99933342088c1328f34d7d279f46ddbda0e9fd3f5873fa33258f0334c8cdaa5c6213add37baf45a95e456027e074978f110008f884f9d2191006e70e439f173787865e0eccfcdc8fdc39439e0a9d7dc94b51fa1f2f69aef7bca011af9fe773eed1941c",
  "4.5": "cd79ef15a2dd3f55bebe11dd:572a7806b5d0cbae97938454920cf43c:4f7777350c596b5529a2b6555d48d079cd4a9edd7e90cd1b618c6ea83c786b7e84d14b9a9f23d3c56f6315aad7a22236375fa9ec0ea7d145c40b2f814696b6670dad9aefacc5d333086e3f06a4a5bfeed4a6eb1821edb72ed86443132369d372d3ba3b4eaa7ecf81a6cb4f308e0d59514b773cb8d1d909f1dd25a8f68bce835f7d88b71f59966430dbc4fa80917fa3a87aadba3106ef73a10ff416eac46fbdf53cf9c3e9534ccf80810c5de10f2d6994ebbf1afe8915b92de4c6616d13ba22b677a89f5d7e0373da3a33f98f5c218c9e5bc9dfc684155a8ef09c325bb9a09c606fe338665cd34096f453a2b14a590bceb75909453cf1e5d71a2e6731a66d5b2623b0812abe2328c6037a9e45351c8b616cd0524b47ccf2499478eebe825ec39df23d2f",
  "4.6": "29bca9e36f2a6de2e046c322:fcee53a8c3bcfff8d4b64bd21acea2e1:6b46e1da67184da5e87b122602f4ff196bbbabe3f2841c71e6715866b6730f9163b9ec581d1afe2fa2ce2ac7cb3d0fe2b54deeed4399f5311c0be737f047ddfbf9ca0797145046cc76a09f879c9d37c374288aeba4af36eadda790a351cdda8d",
  "4.7": "d4a5682fd3bfc5ab77779fe8:fa6e0d0ff918b622bc6d00096904deea:0cda34e25a8eda9286da496ab9269d779c5f07355e011f60d91c721be595162c29a645664a90644ca310f36867e0898c4bb239edfe8ae222c11f6cb3916965d2645661a42d262ecdb455bb4b0948947c6a8b2f9aa78f8d03b80919b553d3622d951cf117",
  "4.8": "92474e1f5252713b1aa646ef:6a234d8a6028ae4f5ccc5e86be7affa7:9748eaf82486064c84c72a4a733e99c0b0a60c56a8014f20285d54b20b344c7d7652dd9c7c4955d03d419c77aa4ee4a7409628ebd4f3a617cdadf3b3566e6b8211663f13f04921b450dd83ecdd192023738650260d5f4a8f8237042dff20340a109ccf7b3504f6acebd4bcf9386dd12a0a5ffe66c7f6dd7b83a58f4eb34bb25bee2b5ac60ff627ca270be2499f241983e2778deeeaa71c0dbd17267434c97c8abac80eb6068fcbaa5b24b75753dc646f555da0bfda21cfff68ffe108e925489acaffcef0f191785bb977adeb292ea1c40e811b22d01bb16d4a30ed1df86bd817b8c571fd2e106ac78b076c188d2f16ca44b6e61d5502c3a9d97c16eb6b61f2787ef6ab2a04c68574405fc5f50bcada24f9da3b49236112d9c847b3eb857dbb2bf8e1201de23ca7b7de5be51eee6b958e38cabf49c3a2c5b2732d429f3b80146200469bc925ade10dd598a115cedd3fabdf06aa2686611e8920060687dd440f9c87fd745d51ed43c12b30dd5129526b9307cc97c22461455e1fbe002288c7d0f92b2ae6ef954809b6b5957996dc4ad3db21c82c10f76e3afa454910733a27fa0883070d4cd9d53ba3446699fecd2b9bf5c1e78854ea4a6e1ebcaec92845a7bf6f8309a3ecc4439a06017957ac97a7ad495881",
  "4.9": "b4f8cb290f0c9c2d0781c36f:bba59b1b052310e2e704ee8821f68ec3:515d0a62fba78c0ab8cf7e656ce296d9f479ca45fa20be7142277ef022dbcf66cd61a895224eed4b638d2faa538fcb1392942ec40d4fa82e7380cac62851d4b09dc41cf0ebe2fe86b389d8bb1381c28a1843e3",
  "4.10": "2e40684d4f78276212205e22:5ffb6931d683406f30b6f9a1a964fc16:1ab38754fe1b1ed3ef710584f1050f70256c030105b1add13df3c5dd4be47179d6998f757433ae276c78df3a9c357c49425259b52a1bc1c820be1c621a12826be82d3567cd0144ee4ee04d0a615844f9e06a8015539de0cd923ec975ef06715e0970b6b159ae486b59e7c5bfa79b37c7529b022507655bd2d9caae5bf946738ba96509f37fb2fa49cb81cbb1737a5312b249c20f3230ce87b94b42641bb09da3f6173ed6e537de1263eda3e1799395aa10bc4bee4a341203fd7d25681749b65e0914f26b507a33",
  "4.11": "8cdfdd2db0ac2de1cb59d29c:7fde9b8eb54c23bba8998d61f69c9732:6cefc8f4ed8abad76d0cecf474d9753d6a38f7245475852f1a7756367831f081891bfce2e402841c4797ad63357438a299e1dec57c42ee2db12934da6e6150529c5c1f7b8b8e62837f2e5b3d596bfa109350c746deead147bb3a30b4e47c179f59a0e71eb592913abf781b0411d06f5aa3284597d696a810cc008fca6dfd6dadc52ba57ad2615bbd6893f630b76ff9805b7851533345a1dfd2d488244aa7a186d7b303be934f66ce0bad767bd1b79d7148ea755cc957c8bbea51382038ba398ca126a663f3d4125a41af254d88c9c4b67120c943e4fde26f80b93e606f1f275941ec99dd24365a5f50585843006433f1ad978371454a4230aeca94d93f2c1f1828ae6ed815fbe9ef09d966a8a1217c1a0d69f14cb7c8fa565e6eaec24264dc70deccec183cdb89fe1222a547913844f8ecea26fc66a982099156df4c1bd7f37bc47ddf18fba69f24ca3d93225ef72b48d2d6f95aac86b7209cde1bf9bf269684075173f92fd2318ad7475057a813b5318ff86173aee12170ef2fac22ced0bfaa7a61648d3954efcdd704f40587de0028135b1bbd5d428e42cf3d5751baa4620bc7d7c602cf5819ae75953c593fc2b5b22713902c0eeb9391191a5eee3664ea783482f750f950769d687e783ff37091a42cca8f457bd0d2b4caff9f3bff4077f78e0dad1d379e006cff540919a626017bfe58ef61514f66478710e384d380693f3d16ff0f8b4ac169d4b0f7a29307dc4818ac78643b29876668af4a106b13de4564",
  "4.12": "6a0bb65953f50863fbfab920:998c2a555a3a3a87b98732d2ffd7c5a1:e6b872de1e6d1878fafa0af91ea7eecf5f260c3f709ae349ed1dd295177500bcf55d80f5b5e4d56843813b37638f054fffb5854c2ce47298e54ccc07694ee6eed3ef5dcd207ecf3fb4882701002e43bd9359a3584fb8b56208bef956a4addc0b037eb959267cf3126fe1bf8e06f3634fe77f7fb6a156f2ad0a7f30bfb4fd52c5e99c7d6917ed45f3426d6d87bd20d1ce2c5cbf672ce9948ccf12bb171d6d29a2b9f5745f6827b07f5062a13019ade67e422876f87bec8d042aa714d2040d188aa3ed44991e898362f4e6dbe7ef76ddf66acaaf07d2fe65257f7ce732ddb55e32d9bebd33f8e7a38f00e2304b6a59050bdc51ceb9e95a0e9eacdf54c77442175ae0ab121a99",
  "4.13": "ba2c58e43fab22da803ed696:a4807478a972c03f1e0774950ccdccbe:6c52a6c57412c37aed3e1277f5583df97a351808da6c8439fda0ec4209a36b88f7f9faacb2d97f54a78046782b3a81a751b4178a89ef50a90dc3ad463eb3075bfe1202489d00f0e79ac4d7cc0d44b1fecba1642791cb4029418b1de3845cffeabee88fd58a396b1f7708fafa5f1536aa38989280afe6f86eb95fac78f24a3a301498e45974ed6489993c35628be74a6044a8ab19ac307720",
  "4.14": "cc9281adcab41baffbef7a69:ff020ac1cbe861b0181226136f57e12b:25fc52e1d6822760a697f0132365cf88c4fa354c10620720eabe2e9617832ac4bcb1f26fbe7ee7588e04b94d535d0be8e6f54ef9246adc6d9265f10f6c79fe21d63d836dfb1ffd889cd810e85eb966a941142b85b58d4a44fea6d598d8950c388543e5a0ce9a80eff6773a3062092e0998da23560b7d40a7647963e170c69d18b115ea7fe747e1b0f3b03418f073d3e2c976a3e118ea492647a2631ba5c39f6197acd9fdcd8bc0b28370345bd4dc760f68d93e8401ad5107306a12a31b103181df791521afc3f3d06072bd67f9a19106beda7db8937d204363f02eb50cee61773bdc552a92cb17d4a98109df5bccc0ed89dc827c56a0fcb9647f0b121862895cbe7904eff15c2febba0eca927a0cc10def07cc18b5e5286ef26dc1be4baaf237d6e7",
  "4.15": "65f02d4c4fec7e7bac3bd5fb:16556210730ef3ccec20c8a1d075f920:6e33be73e4302fa8d8df9ff4fce2c20617fe2b11533a8ed2666596cb2710fc3b2b4a9aa61c6808c81f1d5a7acca8869ea4ca853b92cee7591b400e98ef489f6fd211e7411698000f7297dc653d0937fb5ce9eea88a76ac30e5b90bede476e5aefb9c09ef442019427952ddfa40dc375157ef15c7f141fd96181420f3c5fa6f64af1cf275f6818f0b17d8062ac48f2987c519b0568a381dcc89c674f4a34cc13e54db1ed9e1efc6bf67674b5a7a815749a2fc103dc68963f78e722858c96ab2b27321baa1a279c3e103450dac3c6bc7c7b45810295189ad6bddef70a61ef75f6fd157a835b578920eceb4ace350615c71e78dc10fe6393006a16ed7a65fb3bbba562a9fa90427f0f941f3fca389744fbe338afcaddff1e9dac7c522f7d7f86ad4d363c25f84143e0d1a73bdad62dd079d6b3f470bb6c6e39e625c88eb07947dd6bb5b1bdf19e10fc7aa6123ff5ce44ba704674da3b07bc9986af19e883a1fc03b8919a5067c650cc631664aaf95c6bd6bf7194b3713c26f25fba27170a5d419c947d5ed6d472f61c2af0904d7fd3199f6a2710130184ad63daa2a0f27ece99dc5610c3943644d0912b2dfa75862df8534797daac0301fd75b974c1557ee1fb3cae7c87651654fb435a633f928add86a2dd01d63c0b71018912ce0967ffdfe6032b107d5bf64683e43e35b2045052c46439ab4e9b78d3240aa7f099130cf8011e1993e04b92d699ce7a41cae80a37a12465ad5794610b86f90daed4f47646fb12843df7759d0ada5b28f30d90d3622c2d443908e9f2bf8c994d4b675c2b8a92213d9d0e032d4a51ee9d2355c23133519db2704916795c7f43c143a9ecdaba1084ffa396735c79bd2fda489a1dd7f739bf140237a24dd6b786e63309f821c87ce7f3dc2cd12050076c0a2670826e2ae738355a86a6a004c409a0e3a029572aea2aabfa26bf9b5f1c49b8e624898d72ef867",
  "4.16": "988d973ae37bd0604cf1535c:4dfb54f55c211288fa6a3b11b1232997:64b7b2b3811ca311ff1d9110df1b6424f37a06974b4159e2f11c2462cc53c7ef2938262410050f12e6ae6cdbdc45a4bb3c5d8ab3f8452714404978e2bc0dd99d1874159f7f3b922ca9fc8a8a3ec345f4e46b06aa804a86685c2fb66e0f142b74848f2d4aa95d216d9d",
  "4.17": "85f1eaf6ce3ac42d1fd24d54:8440150a6748a8bd24da9573d561753f:9a29bb8bbbb962303e0950101367dab53c04e94bdfcefadcf1e6125f73b0e771980b849c060f108f31dcc4301a81e189fa2bc92b5654d0fab1899016a6b31c779f8721ffacbb0bd350ba16dab85b02e00eadc396a1c3f6767cfeb14a198ec0cddb6d04f4929a2eac4bdd8480b2b079495bda193f7c94bd65c90f7f779a859ce83b3b62fc10881b3b963eef706cded94e75e7dc9d9b1c6d7fe06a5b1b17fcdd33de749715457db74cf493c00cb865c788",
  "4.18": "0973664283585ca89916be6f:f93f9d73ee3305ca621a8c2cccb1c7bc:87c2bcd95fb13627b14deee5e101bef4c1d7c41c442e63ccd24142138ee826608d04fa84da947c9d38f2ad985b767b179a71c9c13efdf0ba6407dbfa2936fda77c9ac5790adc87e01c64dc0365cb38cb82277bc0ce498694450a929a868353fd401f5c23f5192d6e42251b939740b5c173ea98bd7aaf9a0760a4570fe7d36f9471ad18daf633b5f7fa5aa4450c89b34feafb28aefff9ba0a9f234f295f74e45566f42d528bed6fa5610993b5ecc23eff10a3cf991ef0cd2cadf34e82d5fe38a3682bbc3e593fdf5a02c67d95ed56924f45a9d567affab2f9d22d45a1914b52db89af36e1a2711352ac8e52393573de18c281519afb7d032f732eea92cb6185b111ec3404ef25ef421141a98f6541c3511c3cb5c25b12dce3ec1156143f898791b4028b74f312041273922f3a5823c0fc6021d9fdef5fa8b14e6d4c896f0aa71bc22b48d7bc41046fc70ef221c798401ffb0fdcf7dd538e4f89f3a4",
  "4.19": "847a68dca601b6effacce901:3817422dcd59d602f4ee157b2831fedd:bf0081fdedbbfd865123e2d16f4ff59578744141ce1d57aa7a83f363f411687f039fe33d72aca441f2a3c478f8bf86e6df60922ff1cca937c1c309e0eca7b8c01ab3b9d711bc475b0277ef0943",
  "4.20": "85ef438533ef02d8bdceb919:f40eb6ca797f0eb29201e3cca66e5efe:48033fe2751af0500453f255bea4b8276c518b81e0944fd8234a3e950545d49dc50f2b85814dd03a26cfc30a71be1f09cb6b4ab64dae36731ce61dfbee885e7544003a81796ac4b2b89bfd4e3234218abed35a7000f1fb8f2dc71a969a8b960925ef31351473cc401f0b980cdfb8f5a95e34284e60b52fd92d8d44e6fc88a5219920caabb13c49c8cf1d062023088e6506df6f402e98e9d03cfd920f148e76d80649b853afa87e6596f1dde3d136479f3e2a2b6685c4f5f2759481d1",
  "4.21": "7b407403b44a66c3eb25550d:dd4704b82e649ba2ae1e7aec97e874a2:2015fda0367792db7e0073f17cd4022ca181fea1eb682bdf2ac7200c6517770e8dcdb7ad4f2df52326710aa51ab545c110a9c1a2310959da2c67b4e41b7c5b884ea3872f31a6f756ac499464495187798f24013dfb43ebc2ebe6143cc2cb6c72cc57cfa31ea385ac1314ef0ada42e0f5962441b9ed9ffcb4b934ee139f6d153ce2533924b9e0ad4106e1660dac2a13f2ca7a4e7a9ae6be08c9e19ebb9b0c71812270144ed7c3801c007f0ab9c7648c8254b474aee93b00d44124a352949b7c3c7a384143937637f22ce24e971bf76637e471f2fd5c9674eb69d805dee9824999814485eaa0fe49c3f1e84b0cd24e7e0ba189cfc7524b641b494d48f0bcd6e5efc3bb643ba4b3680473504149a57d5b46b0da099aa7e83176008c188b4d136b673a85389325fe5cf0ce98c2ee593da989c535d37e6a6e80f52ba1fa72dae316bdf5591758878e4dbe691b",
  "4.22": "cfe45e9f121af78ec6a839da:c31e2f3b4535265bed20f2675f3aa7b7:f63cb9cee8f16027dbdd9bd235c2455808348ac8e7d6d16eb6c0cd82d5a0472d836a515d2c81f9f3f6bf257a4212c60890ec26df4f5f2d935fa0276826010d8810d6b7018b459481554929540b37e7804ff2314b9502c2e531813882d9c2ecce9759b88f1e3816f8f4a6057606360aff988fc76465db87395e911442c8a7004932077cf34499b43882bc756e984667e04dfd8a104e6e4ef53f5aae3c8d8e3347c298c750dd377c95c424cf16275cb621cac91c5af50513b77ddabf3133",
  "4.23": "c9fa97763e6a57ff149b2fa6:4e8b778a10711fb657654b76a31d24d3:da79bf93184a78a13fd9f265b06947b3a761db78fc568d3fd5ab83d0da1dcde0b4b0d917e46204c753ab7191122c49e0b3fb6f503656f13240e7943b55935dabdfa942a1d4db2f3996ce2b14ab53a78fb93b60b3bc46115143cdf70fb3e2050e37314018d02231ec43c09c36edef26cda2f47a162917641379fb494f17d216aa40b927d453d78d1e20e6d062a05201e9f8ac7c1a181df3f62886ff2a015d885c06747bbd35bfac6f29c147f5eaf5f284c12739d076b50781278be079cd1c290c4ce1b967544b1e0b59dec94e56c7e1261529418e3ac5c540dc61960198008bdc7aea91dea7e895d00643a3bfae3f77eae560bdc7dd5f07",
  "4.24": "1edc262a2c6b2849814fe7c2:807a9c86eb889cfa830451a4d26e9583:e426b63ae22f4c40ee9214806e9035b7b4fab645b66d88f27c0c1aca2836d3d3e8e13b9219e1da49f9c39600e915308026a2ed266451763cfc79cca5800a83364eb2c4255b4c614b4dec59c6e13a4c184d716ba80db91ad55b4d43234675bb791d26f5d8e9e9a04e9b5a5b22bd89bd9d4abb5b5f8126537d3e699cd4388c1ee90ac478d13996e2ed0a6bc9566df008fb8301252d300aa1d8aa2911a3c68eee627a02725364f540374dc1ae42fe0a8ffcc883f6fa1b5909e9ced3b797a87c70c25730c19b28e2725b860fad5e6081f2fe6f35518d01aed8bb067f78c9f5d3c51fa0521b469043d6c1d0f7154e44d711c047e3f15199c0570a10b4c35ab158be88bc51b67c36bc5f438c5989e54cf7306ab55419a98106786f7b6e0aa33db935116ce0868d3e25800aeed8959238051a425633c3bb",
  "4.25": "d460e72e520fe5cf3b555dc4:448f1bb48d8dd762d82e0fb4b2f187ff:f4a2b0b7e27b1ca2ec2d2747863fa14f9605e4401d438f4e04a8235032ea9ff10b231230a434413874598c02cd4f0b033e799be9b6705b3a61f0dc0de1e5183ebb8343902802df4d6ad5a4844cb6c49ef983678ef513b907e9d1171bdbfde629cc1b2337582a54bfafebe59835ba5accb25931baf522b9db8f5359d55ddcc6c8646f30ba3b8e506ee32d19ccc70deef977261fa4404c06090ece3a76ecec46def9320f33f2bc2285ed78ca890be1b5058a4e8150a66429b2e89661523d09",
  "4.26": "fc057736e42cc93f690bb7ea:3ddd8d36ac65b460041ad7be1422064d:eb3af6c386b0df00cc523e3d049fb5a3018c631bcc469021d95579c1d0a18953712d419b229f7100aa3d14c0d53c17548f55bd1e5b83e664dde3ab622ba1c05ff3af7f86004d0bd50491b7df9fca8b1666e91c4642fba07036d22ef7a2b8845055afb4545a84dc74790ff2ea4dac066325674dbb08ea25cb2b4796e4959aadee0ac3d9d8eaaebc9465eee675070e2c81b661a0bf2d1010bcd8e57e81000abbaf1f8ea2f43ae49bd05833bf2702f0f949700be4ab001dd6b7d27d9fe280dd28a7ed127478aa8c156fe5cb64dd0790bce98f6737f58656bb4abd29bdf56b30812648c96914c1fcd50cc286b4ae6ea6c2b187e180e6e9667149005f03379f793dd7dd7478f969df9245560c944aecb03b34ddf223cd6b5dad3fe331ce42fab5caba66619539d180f117c58ab2fcd2fb164029ffd5856fba7b65df4afb794fb5d31367ce9bf87478d2a735f0a5e2d6f1dfb3f39ca2434196af7ae09b51dc668b1ef384db4709c4328b5354909ea46724082d4a526d52e5e393abdf23ff97d593bfaeb8a88379d5aa8dc6eea52f11e384f394f4f0d586c442a5375b417ca57b15fa418456edf4606f96d8cbef554da3c107caf7740c29d6b4f2ab0a1b999cf0b4defcf6f493d26c4d6b102cdd261e7e023098b43966ae8c58bac2efd886d3fe1e4731bb4f38351d1406563f79d17a2002e132d63519228316de56662387ba8a4edfd24641e5ca7c9656e3ad0da257054938ffcdfbd51ed8a3a313e1562c854aa7f6a9c4b7b5c89d910b0464a772e52e7c24990dc97a248aad9e6062a37d56265c548b0330149042b1fb155d2158b02b11259c3ea830843a93b69d30259cba2cae4b6aacf6a0a2ab77972e61471bb6231e15c2155ed406552701bef0f08be093eec8",
  "4.27": "cb7dcb37db581de2546401ec:bcce331d83ebd8e04390b38f3fb796f5:d5c841783c4d73bd939572c8f2727cc9e275558b6980ac0d966bbc08eff18daa74a165f02668be8447adb237df4b8f1d9d26c3bf8be19e329adc1757433bb79611d24fef0475d53dfb96fa95c5895864d91c409caf7f51e8a40ce4483b1777447e296e70300d5ce02262a461f1ce7f598cd56e057250b34bf862d31754fb562253fcb0cd8489063dba9c8578c46b487ddd485bac40bfbb",
  "4.28": "c290f802344f0d19cd1b0115:fe4650b6410602db3ef9fba2c3a74656:19b70810e02c5ffb303e5d40397840424031f2f6ca26ec38af4c36bdb56a152124961336ee09e3c39e0bbc9c1a5af9437023e2e043ab63dcafaea888b7d1804e1695d7036a50dfef9b426f2039476f16a054f0be597cef1962486081b512d01aca3480abdfa8322cabf2db9f51dafc1ed51a4c791f6578ac35f04b1fe3f9a222d1c74f8d96f195d3cec25acf5baa850438fac67e25338afbfebd32fa495515809028464cfce0654cc62435592c9662ec98380eceec9faa35775ba31579d3c5c5c1d7689607514d16127e63013c7ff860d25cfbde6323159a2a83b38b5f012537ff18ff00a7c3011d56f0a1a19b348064e9035b9366063a00c4c5235a77e88ae2a645b350d1d15425b4fb34cb5136be7eea09d749e41ded2cb3f0552c15fb25bed601d25d4bf6c2433715d7d81bd2e436b0c90dfaec7f2c4c3fde793b51ef7789003b450219c30f0493780fff0548a384d9b1f674939ed4e41756eb66d306362476d8ca67c3807ce7227d0609d13d3ed9e605c198616a358e96a63f0f9b11644926ca374ca9556c16dbb8aa3de5085ca8e52e493f62c3052b44b778e86febd3d05e583bc65712e3bbb345e858aec097a58adc4e5e5dd82b4c88d0214134e378671148cc877fb1a9654b3048e9e7c903307c22f3fffd9d981c11dd8ce3b8af090b5ec7fc2390cf17b06b6321dd7f8badc9f123ccd62eb27e93df3b515618a1f7857a6d301b09eacfa6ee83ce56dbc0f2bc6081091126ffd8b30d9f7e23fae15ff46a16ec78f7037c531bb9a986c8ca50d0c1d7582ca5163df96a323e10053ef25a2f792f02489d1897e8896e300152393712009619dba744479aa17bf4fed885925edabf10e114421ddbde2e2fbc68c315f5620fee6a50dcfeb6144c3a748f9c70ef39e2fd08a28c6dfda276e792534566eede584c7696206652f60b1fadaaa66d06644c329dbaea737a2840ce7f9339b0cf7928ab1a1590c8c8d0a327a9a543dd3a6df670fc00021d35e5f7f5c3d1c9656b4e76da570433078c719165828f08f5056e5786639c4f198ff1391e6c1ab77c026c54f7dc4ec827a6d4935b614adf5f0c8a26a969667538faec9d57251ffdae4fc342",
  "4.29": "f10d37cc4570dd96fbd77ace:f2ba8b3e1e023532b73f768eeee43d8e:ed490071981e8b79eb066e8b64916813e89295e23e6ccccd10661c2a29dae9f95a94bf1a0ceeaf50c56b9bf2a712409bbfe06734872f89022ad5bf417ae99dcd99ff244a6ef5d8e985dda00959e8e80ab1306628960dcd486f526a8d08426963dd1ba21b2ded967f5316c0d4f6778fca1015dfb054446a2d06e6b26d89e4769d4b621c71969fc52d20fb71da2bd7da453e66a011fca03f0eb61f716b68da38fed136648f6022cc6b6afc35a06f5fa225130434bd79b047e14b72ffa1",
  "4.30": "53a098def3e68fd7ce495f46:873c7658d2626f54ec803778fa74043d:6ca1b63f8320476fd782b20435c512fef794bce9ecb05e0067e49654bc2b9ed0a8e9cd950d497286e3de5c0414d9490e4f9451d0eb0b21cd62066e926c7c3245c5a5a54205560b7de53d467e1985ae57c06cab1a53aeadef156c8fc5ff24d09635f33458cbeb362f8a86c31583223cef7edd8fa3f0a5ae056b9129eabb48600216610eae921c74b68917e11514e477a71a5f5373775b6ad9970f2f9dea2db41f786bd6ed63d5637810e189006036271e91fec6dbfc0c4c024b659bacbe7f4329692c0ad57856a8e0638311cfdb460ca00743e0fb789d10b9380cfd5b4fea7b25d3ad2ffbe6989893f3b2e4e2b6777d2fe0cc597aec1393be1cf5b72ebb40690130ccabce2fa845cf80cf82246f5ebdef0b5602240a5dcfa69c435f2a1546ea3a7d36899f87b4dc8c063d066d139144ef32e2d5c602a665e741167574b094ae61ec9faa92b4eda8c4ad86"
};
