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
  capitalizeWordsInSentence
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

});
