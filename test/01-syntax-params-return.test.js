import { describe, it, expect } from "vitest";
import {
  simpleGreeting,
  calculateRectangleArea,
  addExpression,
  multiplyArrow,
  formatPriceCurrency,
  getUserRoleAccess,
  createConfigObject,
  sumAllArgs,
  formatFullName,
  clampNumber,
  repeatStringFunction,
  countVowelsInString,
  isPalindromeFunction,
  discountCalculator,
  isFunction,
  safeInvoke,
  createMathOperation,
  validatePasswordStrength,
  createMultiplier,
  flipArguments,
  extractWordsLongerThan,
  maskCreditCardFunction,
  countOccurrencesInArray,
  generateRangeArray,
  sumArrayElements,
  reverseArrayManual,
  findMaxInArray,
  filterEvenNumbers,
  formatListString,
  capitalizeWordsInSentence,
  formatCurrencyUAH,
  pluralizeUk,
  maskCreditCard,
  generateSlug,
  secondsToHms,
  calculateTaxDiscount,
  clampNumber,
  isPalindromeText,
  truncateWords,
  parseQueryString
} from "../src/01-syntax-params-return.js";

describe("Частина 1: Синтаксис функцій, параметри та повернення значень", () => {
  describe("1.1 simpleGreeting - Оголошення функції (Function Declaration): Привітання", () => {
    it("тест 1: simpleGreeting('Олена')", () => {
      expect(simpleGreeting('Олена')).toEqual("Привіт, Олена!");
    });
    it("тест 2: simpleGreeting('Тарас')", () => {
      expect(simpleGreeting('Тарас')).toEqual("Привіт, Тарас!");
    });
    it("тест 3: simpleGreeting('')", () => {
      expect(simpleGreeting('')).toEqual("Привіт, гостю!");
    });
    it("тест 4: simpleGreeting('   ')", () => {
      expect(simpleGreeting('   ')).toEqual("Привіт, гостю!");
    });
    it("тест 5: simpleGreeting(undefined)", () => {
      expect(simpleGreeting(undefined)).toEqual("Привіт, гостю!");
    });
  });

  describe("1.2 calculateRectangleArea - Обчислення площі прямокутника з валідацією", () => {
    it("тест 1: calculateRectangleArea(5, 10)", () => {
      expect(calculateRectangleArea(5, 10)).toEqual(50);
    });
    it("тест 2: calculateRectangleArea(7, 3)", () => {
      expect(calculateRectangleArea(7, 3)).toEqual(21);
    });
    it("тест 3: calculateRectangleArea(-5, 10)", () => {
      expect(calculateRectangleArea(-5, 10)).toEqual(0);
    });
    it("тест 4: calculateRectangleArea(5, 0)", () => {
      expect(calculateRectangleArea(5, 0)).toEqual(0);
    });
    it("тест 5: calculateRectangleArea('5', 10)", () => {
      expect(calculateRectangleArea('5', 10)).toEqual(0);
    });
  });

  describe("1.3 addExpression - Функціональний вираз (Function Expression)", () => {
    it("тест 1: addExpression(10, 20)", () => {
      expect(addExpression(10, 20)).toEqual(30);
    });
    it("тест 2: addExpression(5)", () => {
      expect(addExpression(5)).toEqual(5);
    });
    it("тест 3: addExpression()", () => {
      expect(addExpression()).toEqual(0);
    });
    it("тест 4: addExpression(-5, 5)", () => {
      expect(addExpression(-5, 5)).toEqual(0);
    });
  });

  describe("1.4 multiplyArrow - Стрілкова функція (Arrow Function) з неявним поверненням", () => {
    it("тест 1: multiplyArrow(4, 5)", () => {
      expect(multiplyArrow(4, 5)).toEqual(20);
    });
    it("тест 2: multiplyArrow(3, -2)", () => {
      expect(multiplyArrow(3, -2)).toEqual(-6);
    });
    it("тест 3: multiplyArrow(0, 100)", () => {
      expect(multiplyArrow(0, 100)).toEqual(0);
    });
  });

  describe("1.5 formatPriceCurrency - Форматування рядка валюти (Функції + Рядки)", () => {
    it("тест 1: formatPriceCurrency(150)", () => {
      expect(formatPriceCurrency(150)).toEqual("150.00 грн");
    });
    it("тест 2: formatPriceCurrency(49.9, '$')", () => {
      expect(formatPriceCurrency(49.9, '$')).toEqual("49.90 $");
    });
    it("тест 3: formatPriceCurrency(null)", () => {
      expect(formatPriceCurrency(null)).toEqual("0.00 грн");
    });
  });

  describe("1.6 getUserRoleAccess - Раннє повернення (Early Return / Guard Clauses)", () => {
    it("тест 1: getUserRoleAccess('admin')", () => {
      expect(getUserRoleAccess('admin')).toEqual("full");
    });
    it("тест 2: getUserRoleAccess('manager')", () => {
      expect(getUserRoleAccess('manager')).toEqual("limited");
    });
    it("тест 3: getUserRoleAccess('guest')", () => {
      expect(getUserRoleAccess('guest')).toEqual("read-only");
    });
    it("тест 4: getUserRoleAccess('hacker')", () => {
      expect(getUserRoleAccess('hacker')).toEqual("forbidden");
    });
    it("тест 5: getUserRoleAccess(null)", () => {
      expect(getUserRoleAccess(null)).toEqual("forbidden");
    });
  });

  describe("1.7 createConfigObject - Повернення об'єкта зі стрілкової функції: ({ ... })", () => {
    it("тест 1: createConfigObject('localhost', 3000)", () => {
      expect(createConfigObject('localhost', 3000)).toEqual({"host":"localhost","port":3000,"ssl":false,"url":"http://localhost:3000"});
    });
    it("тест 2: createConfigObject('supabase.co', 443, true)", () => {
      expect(createConfigObject('supabase.co', 443, true)).toEqual({"host":"supabase.co","port":443,"ssl":true,"url":"https://supabase.co:443"});
    });
  });

  describe("1.8 sumAllArgs - Залишок параметрів (Rest Parameters: ...numbers)", () => {
    it("тест 1: sumAllArgs(1, 2, 3, 4, 5)", () => {
      expect(sumAllArgs(1, 2, 3, 4, 5)).toEqual(15);
    });
    it("тест 2: sumAllArgs(10, -5, 20)", () => {
      expect(sumAllArgs(10, -5, 20)).toEqual(25);
    });
    it("тест 3: sumAllArgs()", () => {
      expect(sumAllArgs()).toEqual(0);
    });
    it("тест 4: sumAllArgs(10, 'invalid', null, 5)", () => {
      expect(sumAllArgs(10, 'invalid', null, 5)).toEqual(15);
    });
  });

  describe("1.9 formatFullName - Форматування ПІБ з параметрами за замовчуванням", () => {
    it("тест 1: formatFullName('Іван', 'Франко', 'Якович')", () => {
      expect(formatFullName('Іван', 'Франко', 'Якович')).toEqual("Іван Якович Франко");
    });
    it("тест 2: formatFullName('Тарас', 'Шевченко')", () => {
      expect(formatFullName('Тарас', 'Шевченко')).toEqual("Тарас Шевченко");
    });
    it("тест 3: formatFullName('')", () => {
      expect(formatFullName('')).toEqual("Анонім");
    });
  });

  describe("1.10 clampNumber - Обмеження числа в діапазоні (Clamp pattern)", () => {
    it("тест 1: clampNumber(15, 0, 10)", () => {
      expect(clampNumber(15, 0, 10)).toEqual(10);
    });
    it("тест 2: clampNumber(-5, 0, 10)", () => {
      expect(clampNumber(-5, 0, 10)).toEqual(0);
    });
    it("тест 3: clampNumber(7, 0, 10)", () => {
      expect(clampNumber(7, 0, 10)).toEqual(7);
    });
  });

  describe("1.11 repeatStringFunction - Повторення рядка через цикл у функції (Функції + Рядки + Цикли)", () => {
    it("тест 1: repeatStringFunction('JS', 3, '-')", () => {
      expect(repeatStringFunction('JS', 3, '-')).toEqual("JS-JS-JS");
    });
    it("тест 2: repeatStringFunction('code', 2)", () => {
      expect(repeatStringFunction('code', 2)).toEqual("codecode");
    });
    it("тест 3: repeatStringFunction('test', 0)", () => {
      expect(repeatStringFunction('test', 0)).toEqual("");
    });
  });

  describe("1.12 countVowelsInString - Підрахунок голосних літер (Функції + Цикл + Рядки)", () => {
    it("тест 1: countVowelsInString('JavaScript')", () => {
      expect(countVowelsInString('JavaScript')).toEqual(3);
    });
    it("тест 2: countVowelsInString('Київ')", () => {
      expect(countVowelsInString('Київ')).toEqual(2);
    });
    it("тест 3: countVowelsInString('sky')", () => {
      expect(countVowelsInString('sky')).toEqual(0);
    });
    it("тест 4: countVowelsInString('')", () => {
      expect(countVowelsInString('')).toEqual(0);
    });
  });

  describe("1.13 isPalindromeFunction - Перевірка паліндрому через функцію", () => {
    it("тест 1: isPalindromeFunction('Radar')", () => {
      expect(isPalindromeFunction('Radar')).toEqual(true);
    });
    it("тест 2: isPalindromeFunction('level')", () => {
      expect(isPalindromeFunction('level')).toEqual(true);
    });
    it("тест 3: isPalindromeFunction('supabase')", () => {
      expect(isPalindromeFunction('supabase')).toEqual(false);
    });
  });

  describe("1.14 discountCalculator - Калькулятор вартості зі знижкою та промокодом", () => {
    it("тест 1: discountCalculator(1000, 10)", () => {
      expect(discountCalculator(1000, 10)).toEqual(900);
    });
    it("тест 2: discountCalculator(1000, 10, 'SUPABASE')", () => {
      expect(discountCalculator(1000, 10, 'SUPABASE')).toEqual(800);
    });
    it("тест 3: discountCalculator(80, 0, 'SUPABASE')", () => {
      expect(discountCalculator(80, 0, 'SUPABASE')).toEqual(0);
    });
  });

  describe("1.15 isFunction - Перевірка чи значення є функцією: typeof === 'function'", () => {
    it("тест 1: isFunction(() => {})", () => {
      expect(isFunction(() => {})).toEqual(true);
    });
    it("тест 2: isFunction(function test() {})", () => {
      expect(isFunction(function test() {})).toEqual(true);
    });
    it("тест 3: isFunction('function')", () => {
      expect(isFunction('function')).toEqual(false);
    });
    it("тест 4: isFunction(null)", () => {
      expect(isFunction(null)).toEqual(false);
    });
  });

  describe("1.16 safeInvoke - Безпечний виклик функції (Safe Invocation)", () => {
    it("тест 1: safeInvoke((a, b) => a + b, 5, 7)", () => {
      expect(safeInvoke((a, b) => a + b, 5, 7)).toEqual(12);
    });
    it("тест 2: safeInvoke(x => x.toUpperCase(), 'supabase')", () => {
      expect(safeInvoke(x => x.toUpperCase(), 'supabase')).toEqual("SUPABASE");
    });
    it("тест 3: safeInvoke(null, 1, 2)", () => {
      expect(safeInvoke(null, 1, 2)).toEqual(null);
    });
  });

  describe("1.17 createMathOperation - Фабрика арифметичних операцій за типом", () => {
    it("тест 1: createMathOperation('add')(10, 5)", () => {
      expect(createMathOperation('add')(10, 5)).toEqual(15);
    });
    it("тест 2: createMathOperation('multiply')(4, 5)", () => {
      expect(createMathOperation('multiply')(4, 5)).toEqual(20);
    });
    it("тест 3: createMathOperation('divide')(20, 4)", () => {
      expect(createMathOperation('divide')(20, 4)).toEqual(5);
    });
    it("тест 4: createMathOperation('unknown')", () => {
      expect(createMathOperation('unknown')).toEqual(null);
    });
  });

  describe("1.18 validatePasswordStrength - Валідація пароля (Функція + Рядки + Регулярні вирази)", () => {
    it("тест 1: validatePasswordStrength('SuperPass2026')", () => {
      expect(validatePasswordStrength('SuperPass2026')).toEqual({"isValid":true,"errors":[]});
    });
    it("тест 2: validatePasswordStrength('short')", () => {
      expect(validatePasswordStrength('short')).toEqual({"isValid":false,"errors":["Мінімум 8 символів","Має містити хоча б одну цифру","Має містити хоча б одну велику літеру"]});
    });
  });

  describe("1.19 createMultiplier - Фабрика функцій-множників (Function returning function)", () => {
    it("тест 1: createMultiplier(3)(10)", () => {
      expect(createMultiplier(3)(10)).toEqual(30);
    });
    it("тест 2: createMultiplier(2)(7)", () => {
      expect(createMultiplier(2)(7)).toEqual(14);
    });
  });

  describe("1.20 flipArguments - Інверсія порядку аргументів (Flip pattern)", () => {
    it("тест 1: flipArguments((a, b) => a - b)(5, 20)", () => {
      expect(flipArguments((a, b) => a - b)(5, 20)).toEqual(15);
    });
    it("тест 2: flipArguments((a, b) => a / b)(2, 10)", () => {
      expect(flipArguments((a, b) => a / b)(2, 10)).toEqual(5);
    });
  });

  describe("1.21 extractWordsLongerThan - Фільтрація слів за довжиною (Функції + Рядки + Масиви)", () => {
    it("тест 1: extractWordsLongerThan('JavaScript is super fast and awesome', 4)", () => {
      expect(extractWordsLongerThan('JavaScript is super fast and awesome', 4)).toEqual(["JavaScript","super","awesome"]);
    });
    it("тест 2: extractWordsLongerThan('Short words only', 10)", () => {
      expect(extractWordsLongerThan('Short words only', 10)).toEqual([]);
    });
  });

  describe("1.22 maskCreditCardFunction - Маскування банківської картки всередині функції", () => {
    it("тест 1: maskCreditCardFunction('1234-5678-9012-3456')", () => {
      expect(maskCreditCardFunction('1234-5678-9012-3456')).toEqual("1234-****-****-3456");
    });
    it("тест 2: maskCreditCardFunction('1111222233334444')", () => {
      expect(maskCreditCardFunction('1111222233334444')).toEqual("1111-****-****-4444");
    });
    it("тест 3: maskCreditCardFunction('123')", () => {
      expect(maskCreditCardFunction('123')).toEqual("123");
    });
  });

  describe("1.23 countOccurrencesInArray - Підрахунок входжень елемента (Функції + Масиви + Цикли)", () => {
    it("тест 1: countOccurrencesInArray(['a', 'b', 'a', 'c', 'a'], 'a')", () => {
      expect(countOccurrencesInArray(['a', 'b', 'a', 'c', 'a'], 'a')).toEqual(3);
    });
    it("тест 2: countOccurrencesInArray([1, 2, 3, 2, 1], 2)", () => {
      expect(countOccurrencesInArray([1, 2, 3, 2, 1], 2)).toEqual(2);
    });
    it("тест 3: countOccurrencesInArray([1, 2, 3], 99)", () => {
      expect(countOccurrencesInArray([1, 2, 3], 99)).toEqual(0);
    });
  });

  describe("1.24 generateRangeArray - Генерація послідовності чисел циклом (Функція + Цикл + Масив)", () => {
    it("тест 1: generateRangeArray(1, 5)", () => {
      expect(generateRangeArray(1, 5)).toEqual([1,2,3,4,5]);
    });
    it("тест 2: generateRangeArray(0, 10, 2)", () => {
      expect(generateRangeArray(0, 10, 2)).toEqual([0,2,4,6,8,10]);
    });
    it("тест 3: generateRangeArray(5, 1)", () => {
      expect(generateRangeArray(5, 1)).toEqual([]);
    });
  });

  describe("1.25 sumArrayElements - Сума елементів масиву через функцію з циклом", () => {
    it("тест 1: sumArrayElements([10, 20, 30])", () => {
      expect(sumArrayElements([10, 20, 30])).toEqual(60);
    });
    it("тест 2: sumArrayElements([5, 'test', 15, null])", () => {
      expect(sumArrayElements([5, 'test', 15, null])).toEqual(20);
    });
    it("тест 3: sumArrayElements([])", () => {
      expect(sumArrayElements([])).toEqual(0);
    });
  });

  describe("1.26 reverseArrayManual - Реверс масиву вручну за допомогою циклу", () => {
    it("тест 1: reverseArrayManual([1, 2, 3, 4])", () => {
      expect(reverseArrayManual([1, 2, 3, 4])).toEqual([4,3,2,1]);
    });
    it("тест 2: reverseArrayManual(['a', 'b', 'c'])", () => {
      expect(reverseArrayManual(['a', 'b', 'c'])).toEqual(["c","b","a"]);
    });
    it("тест 3: reverseArrayManual([])", () => {
      expect(reverseArrayManual([])).toEqual([]);
    });
  });

  describe("1.27 findMaxInArray - Пошук максимуму в масиві через цикл у функції", () => {
    it("тест 1: findMaxInArray([3, 7, 2, 9, 4])", () => {
      expect(findMaxInArray([3, 7, 2, 9, 4])).toEqual(9);
    });
    it("тест 2: findMaxInArray([-10, -5, -20])", () => {
      expect(findMaxInArray([-10, -5, -20])).toEqual(-5);
    });
    it("тест 3: findMaxInArray([])", () => {
      expect(findMaxInArray([])).toEqual(null);
    });
  });

  describe("1.28 filterEvenNumbers - Фільтрація парних чисел циклом", () => {
    it("тест 1: filterEvenNumbers([1, 2, 3, 4, 5, 6])", () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2,4,6]);
    });
    it("тест 2: filterEvenNumbers([7, 9, 11])", () => {
      expect(filterEvenNumbers([7, 9, 11])).toEqual([]);
    });
  });

  describe("1.29 formatListString - Форматування масиву рядків у нумерований список", () => {
    it("тест 1: formatListString(['Auth', 'Database', 'Storage'])", () => {
      expect(formatListString(['Auth', 'Database', 'Storage'])).toEqual("1. Auth\n2. Database\n3. Storage");
    });
    it("тест 2: formatListString(['Single'])", () => {
      expect(formatListString(['Single'])).toEqual("1. Single");
    });
    it("тест 3: formatListString([])", () => {
      expect(formatListString([])).toEqual("");
    });
  });

  describe("1.30 capitalizeWordsInSentence - Капіталізація слів у реченні через функцію", () => {
    it("тест 1: capitalizeWordsInSentence('learn javascript functions')", () => {
      expect(capitalizeWordsInSentence('learn javascript functions')).toEqual("Learn Javascript Functions");
    });
    it("тест 2: capitalizeWordsInSentence('SUPABASE DATABASE')", () => {
      expect(capitalizeWordsInSentence('SUPABASE DATABASE')).toEqual("Supabase Database");
    });
  });

  describe("1.31 formatCurrencyUAH - Форматування грошової суми у гривнях (UAH)", () => {
    it("тест 1: formatCurrencyUAH(1250)", () => {
      expect(formatCurrencyUAH(1250)).toEqual("1 250.00 ₴");
    });
    it("тест 2: formatCurrencyUAH(99.5)", () => {
      expect(formatCurrencyUAH(99.5)).toEqual("99.50 ₴");
    });
    it("тест 3: formatCurrencyUAH(1000000)", () => {
      expect(formatCurrencyUAH(1000000)).toEqual("1 000 000.00 ₴");
    });
    it("тест 4: formatCurrencyUAH(null)", () => {
      expect(formatCurrencyUAH(null)).toEqual("0.00 ₴");
    });
  });

  describe("1.32 pluralizeUk - Відмінювання слів за числівниками (1 яблуко, 2 яблука, 5 яблук)", () => {
    it("тест 1: pluralizeUk(1, 'студент', 'студенти', 'студентів')", () => {
      expect(pluralizeUk(1, 'студент', 'студенти', 'студентів')).toEqual("студент");
    });
    it("тест 2: pluralizeUk(3, 'студент', 'студенти', 'студентів')", () => {
      expect(pluralizeUk(3, 'студент', 'студенти', 'студентів')).toEqual("студенти");
    });
    it("тест 3: pluralizeUk(5, 'студент', 'студенти', 'студентів')", () => {
      expect(pluralizeUk(5, 'студент', 'студенти', 'студентів')).toEqual("студентів");
    });
    it("тест 4: pluralizeUk(21, 'бал', 'бали', 'балів')", () => {
      expect(pluralizeUk(21, 'бал', 'бали', 'балів')).toEqual("бал");
    });
    it("тест 5: pluralizeUk(12, 'бал', 'бали', 'балів')", () => {
      expect(pluralizeUk(12, 'бал', 'бали', 'балів')).toEqual("балів");
    });
  });

  describe("1.33 maskCreditCard - Маскування номера банківської картки", () => {
    it("тест 1: maskCreditCard('4111-2222-3333-4444')", () => {
      expect(maskCreditCard('4111-2222-3333-4444')).toEqual("4111********4444");
    });
    it("тест 2: maskCreditCard('123456789012', '#')", () => {
      expect(maskCreditCard('123456789012', '#')).toEqual("1234####9012");
    });
    it("тест 3: maskCreditCard('12345')", () => {
      expect(maskCreditCard('12345')).toEqual("INVALID_CARD");
    });
  });

  describe("1.34 generateSlug - Генератор URL-slug із рядка заголовка", () => {
    it("тест 1: generateSlug('JavaScript & React Fundamentals 2026!')", () => {
      expect(generateSlug('JavaScript & React Fundamentals 2026!')).toEqual("javascript-react-fundamentals-2026");
    });
    it("тест 2: generateSlug('  Модуль 7: Функції в JS   ')", () => {
      expect(generateSlug('  Модуль 7: Функції в JS   ')).toEqual("модуль-7-функції-в-js");
    });
  });

  describe("1.35 secondsToHms - Конвертація секунд у читабельний час (HH:MM:SS)", () => {
    it("тест 1: secondsToHms(3665)", () => {
      expect(secondsToHms(3665)).toEqual("01:01:05");
    });
    it("тест 2: secondsToHms(45)", () => {
      expect(secondsToHms(45)).toEqual("00:00:45");
    });
    it("тест 3: secondsToHms(0)", () => {
      expect(secondsToHms(0)).toEqual("00:00:00");
    });
    it("тест 4: secondsToHms(7200)", () => {
      expect(secondsToHms(7200)).toEqual("02:00:00");
    });
  });

  describe("1.36 calculateTaxDiscount - Калькулятор знижки з урахуванням ПДВ", () => {
    it("тест 1: calculateTaxDiscount(100, 10, 20)", () => {
      expect(calculateTaxDiscount(100, 10, 20)).toEqual(108);
    });
    it("тест 2: calculateTaxDiscount(200, 0, 20)", () => {
      expect(calculateTaxDiscount(200, 0, 20)).toEqual(240);
    });
    it("тест 3: calculateTaxDiscount(50, 50, 0)", () => {
      expect(calculateTaxDiscount(50, 50, 0)).toEqual(25);
    });
  });

  describe("1.37 clampNumber - Обмеження числа в діапазоні (Clamp Helper)", () => {
    it("тест 1: clampNumber(15, 0, 10)", () => {
      expect(clampNumber(15, 0, 10)).toEqual(10);
    });
    it("тест 2: clampNumber(-5, 0, 10)", () => {
      expect(clampNumber(-5, 0, 10)).toEqual(0);
    });
    it("тест 3: clampNumber(7, 0, 10)", () => {
      expect(clampNumber(7, 0, 10)).toEqual(7);
    });
  });

  describe("1.38 isPalindromeText - Перевірка тексту на паліндром без урахування регістру й розділових знаків", () => {
    it("тест 1: isPalindromeText('А роза упала на лапу Азора')", () => {
      expect(isPalindromeText('А роза упала на лапу Азора')).toEqual(true);
    });
    it("тест 2: isPalindromeText('racecar')", () => {
      expect(isPalindromeText('racecar')).toEqual(true);
    });
    it("тест 3: isPalindromeText('hello world')", () => {
      expect(isPalindromeText('hello world')).toEqual(false);
    });
  });

  describe("1.39 truncateWords - Обрізання тексту за кількістю слів з трикрапкою", () => {
    it("тест 1: truncateWords('Один два три чотири пʼять шість сім', 4)", () => {
      expect(truncateWords('Один два три чотири пʼять шість сім', 4)).toEqual("Один два три чотири...");
    });
    it("тест 2: truncateWords('Короткий текст', 5)", () => {
      expect(truncateWords('Короткий текст', 5)).toEqual("Короткий текст");
    });
  });

  describe("1.40 parseQueryString - Парсинг URL Query String в об'єкт параметрів", () => {
    it("тест 1: parseQueryString('?page=2&sort=asc&tab=profile')", () => {
      expect(parseQueryString('?page=2&sort=asc&tab=profile')).toEqual({"page":"2","sort":"asc","tab":"profile"});
    });
    it("тест 2: parseQueryString('name=%D0%86%D0%B2%D0%B0%D0%BD&role=admin')", () => {
      expect(parseQueryString('name=%D0%86%D0%B2%D0%B0%D0%BD&role=admin')).toEqual({"name":"Іван","role":"admin"});
    });
    it("тест 3: parseQueryString('')", () => {
      expect(parseQueryString('')).toEqual({});
    });
  });

});
