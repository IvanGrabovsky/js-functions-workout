import { describe, it, expect } from "vitest";
import {
  createCounter,
  createBankAccount,
  createUniqueIdGenerator,
  createListStore,
  createAccumulator,
  createToggle,
  createLimitedCaller,
  createEventTracker,
  createRateLimiter,
  createStackWithClosure,
  createQueueWithClosure,
  createIdFilter,
  createCounterWithLimit,
  createSessionTimer,
  matrixRowSumFunction,
  findMatrixMaxCoordinates,
  countWordsFrequencyFunction,
  filterAndSumTransactions,
  chunkArrayFunction,
  removeDuplicatesWithLoop,
  findCommonElements,
  buildHtmlListFunction,
  compressStringRLEFunction,
  parseCsvRowsFunction,
  generatePrimesUpTo,
  countTargetInNestedArray,
  sortWordsByLengthFunction,
  calculateCartTotalFunction,
  findIndexOfElementFunction,
  cleanAndJoinWordsFunction
} from "../src/02-scope-hoisting-closures.js";

describe("Частина 2: Області видимості, Hoisting та Замикання (з циклами й масивами)", () => {
  describe("2.1 createCounter - Класичне замикання (Closure): Незалежний лічильник", () => {
    it("тест 1: (() => { const c = createCounter(0); return [c(), c(), c()]; })()", () => {
      expect((() => { const c = createCounter(0); return [c(), c(), c()]; })()).toEqual([1,2,3]);
    });
    it("тест 2: (() => { const c1 = createCounter(10); const c2 = createCounter(100); return [c1(), c2(), c1()]; })()", () => {
      expect((() => { const c1 = createCounter(10); const c2 = createCounter(100); return [c1(), c2(), c1()]; })()).toEqual([11,101,12]);
    });
  });

  describe("2.2 createBankAccount - Приватний стан банківського рахунку (Private State)", () => {
    it("тест 1: (() => { const acc = createBankAccount(100); acc.deposit(50); const w1 = acc.withdraw(30); const w2 = acc.withdraw(200); return [acc.getBalance(), w1, w2]; })()", () => {
      expect((() => { const acc = createBankAccount(100); acc.deposit(50); const w1 = acc.withdraw(30); const w2 = acc.withdraw(200); return [acc.getBalance(), w1, w2]; })()).toEqual([120,true,false]);
    });
  });

  describe("2.3 createUniqueIdGenerator - Генератор послідовних ID з префіксом", () => {
    it("тест 1: (() => { const gen = createUniqueIdGenerator('user_'); return [gen(), gen(), gen()]; })()", () => {
      expect((() => { const gen = createUniqueIdGenerator('user_'); return [gen(), gen(), gen()]; })()).toEqual(["user_1","user_2","user_3"]);
    });
  });

  describe("2.4 createListStore - Реактивне сховище списку (Замикання + Масиви)", () => {
    it("тест 1: (() => { const s = createListStore(['apple', 'banana']); s.add('cherry'); s.remove('banana'); return [s.getAll(), s.count()]; })()", () => {
      expect((() => { const s = createListStore(['apple', 'banana']); s.add('cherry'); s.remove('banana'); return [s.getAll(), s.count()]; })()).toEqual([["apple","cherry"],2]);
    });
  });

  describe("2.5 createAccumulator - Акумулятор значень через замикання", () => {
    it("тест 1: (() => { const acc = createAccumulator(5); return [acc(10), acc(20), acc(-5)]; })()", () => {
      expect((() => { const acc = createAccumulator(5); return [acc(10), acc(20), acc(-5)]; })()).toEqual([15,35,30]);
    });
  });

  describe("2.6 createToggle - Двопозиційний перемикач (Toggle closure)", () => {
    it("тест 1: (() => { const t = createToggle(false); return [t(), t(), t(), t()]; })()", () => {
      expect((() => { const t = createToggle(false); return [t(), t(), t(), t()]; })()).toEqual([true,false,true,false]);
    });
  });

  describe("2.7 createLimitedCaller - Обмеження кількості викликів (Call Limiter)", () => {
    it("тест 1: (() => { const l = createLimitedCaller(x => x * 2, 2); return [l(5), l(10), l(15)]; })()", () => {
      expect((() => { const l = createLimitedCaller(x => x * 2, 2); return [l(5), l(10), l(15)]; })()).toEqual([10,20,"Call limit reached"]);
    });
  });

  describe("2.8 createEventTracker - Трекер подій з історією у замиканні (Замикання + Масиви)", () => {
    it("тест 1: (() => { const t = createEventTracker(); t.track('click', { btn: 'save' }); t.track('submit'); return t.getHistory(); })()", () => {
      expect((() => { const t = createEventTracker(); t.track('click', { btn: 'save' }); t.track('submit'); return t.getHistory(); })()).toEqual([{"eventName":"click","data":{"btn":"save"},"order":1},{"eventName":"submit","data":null,"order":2}]);
    });
  });

  describe("2.9 createRateLimiter - Rate Limiter запитів з методом скидання", () => {
    it("тест 1: (() => { const r = createRateLimiter(2); const res = [r(), r(), r()]; r.reset(); res.push(r()); return res; })()", () => {
      expect((() => { const r = createRateLimiter(2); const res = [r(), r(), r()]; r.reset(); res.push(r()); return res; })()).toEqual([true,true,false,true]);
    });
  });

  describe("2.10 createStackWithClosure - Стек (LIFO) на замиканнях", () => {
    it("тест 1: (() => { const s = createStackWithClosure(); s.push(10); s.push(20); const top = s.peek(); const p1 = s.pop(); return [top, p1, s.size(), s.isEmpty()]; })()", () => {
      expect((() => { const s = createStackWithClosure(); s.push(10); s.push(20); const top = s.peek(); const p1 = s.pop(); return [top, p1, s.size(), s.isEmpty()]; })()).toEqual([20,20,1,false]);
    });
  });

  describe("2.11 createQueueWithClosure - Черга (FIFO) на замиканнях", () => {
    it("тест 1: (() => { const q = createQueueWithClosure(); q.enqueue('A'); q.enqueue('B'); return [q.dequeue(), q.peek(), q.size()]; })()", () => {
      expect((() => { const q = createQueueWithClosure(); q.enqueue('A'); q.enqueue('B'); return [q.dequeue(), q.peek(), q.size()]; })()).toEqual(["A","B",1]);
    });
  });

  describe("2.12 createIdFilter - Фільтр відкидання повторних ідентифікаторів (Дедуплікація)", () => {
    it("тест 1: (() => { const filter = createIdFilter(); return [filter('a'), filter('b'), filter('a'), filter('c')]; })()", () => {
      expect((() => { const filter = createIdFilter(); return [filter('a'), filter('b'), filter('a'), filter('c')]; })()).toEqual([true,true,false,true]);
    });
  });

  describe("2.13 createCounterWithLimit - Лічильник з діапазонними межами [min, max]", () => {
    it("тест 1: (() => { const c = createCounterWithLimit(0, 3, 2); return [c.inc(), c.inc(), c.dec(), c.dec(), c.dec()]; })()", () => {
      expect((() => { const c = createCounterWithLimit(0, 3, 2); return [c.inc(), c.inc(), c.dec(), c.dec(), c.dec()]; })()).toEqual([3,3,2,1,0]);
    });
  });

  describe("2.14 createSessionTimer - Форматування часу сесії HH:MM:SS через замикання", () => {
    it("тест 1: (() => { const timer = createSessionTimer(); timer.tick(3665); return timer.getFormattedTime(); })()", () => {
      expect((() => { const timer = createSessionTimer(); timer.tick(3665); return timer.getFormattedTime(); })()).toEqual("01:01:05");
    });
    it("тест 2: (() => { const timer = createSessionTimer(); timer.tick(75); return timer.getFormattedTime(); })()", () => {
      expect((() => { const timer = createSessionTimer(); timer.tick(75); return timer.getFormattedTime(); })()).toEqual("00:01:15");
    });
  });

  describe("2.15 matrixRowSumFunction - Підрахунок сум рядків двовимірної матриці (Функція + Вкладені цикли)", () => {
    it("тест 1: matrixRowSumFunction([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(matrixRowSumFunction([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([6,15,24]);
    });
    it("тест 2: matrixRowSumFunction([[10], [20, 30]])", () => {
      expect(matrixRowSumFunction([[10], [20, 30]])).toEqual([10,50]);
    });
    it("тест 3: matrixRowSumFunction([])", () => {
      expect(matrixRowSumFunction([])).toEqual([]);
    });
  });

  describe("2.16 findMatrixMaxCoordinates - Пошук координат максимуму в матриці", () => {
    it("тест 1: findMatrixMaxCoordinates([[1, 5, 2], [8, 3, 4]])", () => {
      expect(findMatrixMaxCoordinates([[1, 5, 2], [8, 3, 4]])).toEqual({"maxVal":8,"row":1,"col":0});
    });
    it("тест 2: findMatrixMaxCoordinates([[10, 20], [40, 30]])", () => {
      expect(findMatrixMaxCoordinates([[10, 20], [40, 30]])).toEqual({"maxVal":40,"row":1,"col":0});
    });
    it("тест 3: findMatrixMaxCoordinates([])", () => {
      expect(findMatrixMaxCoordinates([])).toEqual(null);
    });
  });

  describe("2.17 countWordsFrequencyFunction - Частотний словник слів через функцію (Функції + Рядки + Цикл)", () => {
    it("тест 1: countWordsFrequencyFunction('Supabase is great, supabase is fast')", () => {
      expect(countWordsFrequencyFunction('Supabase is great, supabase is fast')).toEqual({"supabase":2,"is":2,"great":1,"fast":1});
    });
    it("тест 2: countWordsFrequencyFunction('Code, code, CODE!')", () => {
      expect(countWordsFrequencyFunction('Code, code, CODE!')).toEqual({"code":3});
    });
  });

  describe("2.18 filterAndSumTransactions - Фільтрація та підсумок транзакцій за типом", () => {
    it("тест 1: filterAndSumTransactions([{ type: 'income', amount: 1000 }, { type: 'expense', amount: 200 }, { type: 'income', amount: 500 }], 'income')", () => {
      expect(filterAndSumTransactions([{ type: 'income', amount: 1000 }, { type: 'expense', amount: 200 }, { type: 'income', amount: 500 }], 'income')).toEqual(1500);
    });
    it("тест 2: filterAndSumTransactions([{ type: 'expense', amount: 50 }, { type: 'expense', amount: 150 }], 'expense')", () => {
      expect(filterAndSumTransactions([{ type: 'expense', amount: 50 }, { type: 'expense', amount: 150 }], 'expense')).toEqual(200);
    });
    it("тест 3: filterAndSumTransactions([], 'income')", () => {
      expect(filterAndSumTransactions([], 'income')).toEqual(0);
    });
  });

  describe("2.19 chunkArrayFunction - Розбиття масиву на чанки (Пагінація через функцію)", () => {
    it("тест 1: chunkArrayFunction([1, 2, 3, 4, 5], 2)", () => {
      expect(chunkArrayFunction([1, 2, 3, 4, 5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    it("тест 2: chunkArrayFunction(['a', 'b', 'c'], 1)", () => {
      expect(chunkArrayFunction(['a', 'b', 'c'], 1)).toEqual([["a"],["b"],["c"]]);
    });
    it("тест 3: chunkArrayFunction([1, 2], 5)", () => {
      expect(chunkArrayFunction([1, 2], 5)).toEqual([[1,2]]);
    });
    it("тест 4: chunkArrayFunction([], 3)", () => {
      expect(chunkArrayFunction([], 3)).toEqual([]);
    });
  });

  describe("2.20 removeDuplicatesWithLoop - Видалення дублікатів з масиву через цикл у функції", () => {
    it("тест 1: removeDuplicatesWithLoop([1, 2, 2, 3, 4, 4, 5])", () => {
      expect(removeDuplicatesWithLoop([1, 2, 2, 3, 4, 4, 5])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: removeDuplicatesWithLoop(['a', 'b', 'a', 'c'])", () => {
      expect(removeDuplicatesWithLoop(['a', 'b', 'a', 'c'])).toEqual(["a","b","c"]);
    });
  });

  describe("2.21 findCommonElements - Перетин двох масивів (Intersection via loops)", () => {
    it("тест 1: findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])", () => {
      expect(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3,4]);
    });
    it("тест 2: findCommonElements(['a', 'b'], ['c', 'd'])", () => {
      expect(findCommonElements(['a', 'b'], ['c', 'd'])).toEqual([]);
    });
  });

  describe("2.22 buildHtmlListFunction - Генерація HTML-списку з масиву рядків", () => {
    it("тест 1: buildHtmlListFunction(['Home', 'About'])", () => {
      expect(buildHtmlListFunction(['Home', 'About'])).toEqual("<ul>\n  <li>Home</li>\n  <li>About</li>\n</ul>");
    });
    it("тест 2: buildHtmlListFunction(['Step 1'], 'ol')", () => {
      expect(buildHtmlListFunction(['Step 1'], 'ol')).toEqual("<ol>\n  <li>Step 1</li>\n</ol>");
    });
    it("тест 3: buildHtmlListFunction([], 'ul')", () => {
      expect(buildHtmlListFunction([], 'ul')).toEqual("<ul></ul>");
    });
  });

  describe("2.23 compressStringRLEFunction - Стиснення рядка RLE через функцію з циклом", () => {
    it("тест 1: compressStringRLEFunction('aaabbc')", () => {
      expect(compressStringRLEFunction('aaabbc')).toEqual("a3b2c1");
    });
    it("тест 2: compressStringRLEFunction('wwwwww')", () => {
      expect(compressStringRLEFunction('wwwwww')).toEqual("w6");
    });
    it("тест 3: compressStringRLEFunction('')", () => {
      expect(compressStringRLEFunction('')).toEqual("");
    });
  });

  describe("2.24 parseCsvRowsFunction - Парсинг CSV-рядків у масив об'єктів (Функції + Рядки + Масиви)", () => {
    it("тест 1: parseCsvRowsFunction('name,role\nAlex,admin\nOlena,user')", () => {
      expect(parseCsvRowsFunction('name,role\nAlex,admin\nOlena,user')).toEqual([{"name":"Alex","role":"admin"},{"name":"Olena","role":"user"}]);
    });
    it("тест 2: parseCsvRowsFunction('')", () => {
      expect(parseCsvRowsFunction('')).toEqual([]);
    });
  });

  describe("2.25 generatePrimesUpTo - Пошук простих чисел до N (Функції + Вкладені цикли)", () => {
    it("тест 1: generatePrimesUpTo(10)", () => {
      expect(generatePrimesUpTo(10)).toEqual([2,3,5,7]);
    });
    it("тест 2: generatePrimesUpTo(20)", () => {
      expect(generatePrimesUpTo(20)).toEqual([2,3,5,7,11,13,17,19]);
    });
    it("тест 3: generatePrimesUpTo(1)", () => {
      expect(generatePrimesUpTo(1)).toEqual([]);
    });
  });

  describe("2.26 countTargetInNestedArray - Підрахунок елементів у вкладеному 2D масиві", () => {
    it("тест 1: countTargetInNestedArray([[1, 2], [2, 3], [2, 2]], 2)", () => {
      expect(countTargetInNestedArray([[1, 2], [2, 3], [2, 2]], 2)).toEqual(4);
    });
    it("тест 2: countTargetInNestedArray([['a', 'b'], ['c', 'd']], 'z')", () => {
      expect(countTargetInNestedArray([['a', 'b'], ['c', 'd']], 'z')).toEqual(0);
    });
  });

  describe("2.27 sortWordsByLengthFunction - Сортування слів за довжиною (Функції + Рядки + Масиви)", () => {
    it("тест 1: sortWordsByLengthFunction(['elephant', 'cat', 'dog', 'hi'])", () => {
      expect(sortWordsByLengthFunction(['elephant', 'cat', 'dog', 'hi'])).toEqual(["hi","cat","dog","elephant"]);
    });
    it("тест 2: sortWordsByLengthFunction(['a', 'bbb', 'cc'])", () => {
      expect(sortWordsByLengthFunction(['a', 'bbb', 'cc'])).toEqual(["a","cc","bbb"]);
    });
  });

  describe("2.28 calculateCartTotalFunction - Розрахунок вартості кошика покупок через функцію", () => {
    it("тест 1: calculateCartTotalFunction([{ name: 'item1', price: 100, qty: 2 }, { name: 'item2', price: 50, qty: 1 }], 0.2)", () => {
      expect(calculateCartTotalFunction([{ name: 'item1', price: 100, qty: 2 }, { name: 'item2', price: 50, qty: 1 }], 0.2)).toEqual(300);
    });
    it("тест 2: calculateCartTotalFunction([{ price: 45.5, qty: 2 }], 0)", () => {
      expect(calculateCartTotalFunction([{ price: 45.5, qty: 2 }], 0)).toEqual(91);
    });
    it("тест 3: calculateCartTotalFunction([])", () => {
      expect(calculateCartTotalFunction([])).toEqual(0);
    });
  });

  describe("2.29 findIndexOfElementFunction - Власний алгоритм indexOf через цикл у функції", () => {
    it("тест 1: findIndexOfElementFunction(['a', 'b', 'c'], 'b')", () => {
      expect(findIndexOfElementFunction(['a', 'b', 'c'], 'b')).toEqual(1);
    });
    it("тест 2: findIndexOfElementFunction([10, 20, 30], 40)", () => {
      expect(findIndexOfElementFunction([10, 20, 30], 40)).toEqual(-1);
    });
  });

  describe("2.30 cleanAndJoinWordsFunction - Очищення та склеювання масиву слів у рядок", () => {
    it("тест 1: cleanAndJoinWordsFunction(['  Auth  ', '', '  Database  ', 'Storage  '])", () => {
      expect(cleanAndJoinWordsFunction(['  Auth  ', '', '  Database  ', 'Storage  '])).toEqual("Auth - Database - Storage");
    });
    it("тест 2: cleanAndJoinWordsFunction(['One', 'Two'], '/')", () => {
      expect(cleanAndJoinWordsFunction(['One', 'Two'], '/')).toEqual("One/Two");
    });
  });

});
