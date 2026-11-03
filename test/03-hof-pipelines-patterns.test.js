import { describe, it, expect } from "vitest";
import {
  customMap,
  customFilter,
  customReduce,
  pipe,
  compose,
  curryTwo,
  memoizeUnary,
  factorialRecursive,
  fibonacciRecursive,
  deepFlattenRecursive,
  sumNestedTree,
  findInObjectRecursive,
  groupByKey,
  partitionArray,
  curryDynamic,
  mapObjectValues,
  filterObjectEntries,
  partialApply,
  groupAnagramsFunction,
  zipWith,
  cleanAndSortWordsFunction,
  formatAsciiTableFunction,
  binarySearchFunction,
  createBatchTransformer,
  createMiddlewarePipeline,
  measureExecutionTime,
  createObservableValue,
  createSafeFallback,
  createLazyEvaluator,
  trampoline,
  createCircuitBreaker,
  createPluginManager,
  createDebounce,
  createThrottle,
  deepCloneObject,
  findFileInTree,
  zipArraysWith,
  createPriorityQueue,
  createEventBus,
  flattenDeepArray,
  asyncTaskWaterfall,
  createLazyRange
} from "../src/03-hof-pipelines-patterns.js";

describe("Частина 3: Функції вищого порядку, пайплайни та бойові алгоритми", () => {
  describe("3.1 customMap - Поліфіл map через функцію вищого порядку (Функції + Масиви)", () => {
    it("тест 1: customMap([1, 2, 3], x => x * 10)", () => {
      expect(customMap([1, 2, 3], x => x * 10)).toEqual([10,20,30]);
    });
    it("тест 2: customMap(['a', 'b'], (ch, idx) => `${idx}:${ch}`)", () => {
      expect(customMap(['a', 'b'], (ch, idx) => `${idx}:${ch}`)).toEqual(["0:a","1:b"]);
    });
    it("тест 3: customMap([], x => x)", () => {
      expect(customMap([], x => x)).toEqual([]);
    });
  });

  describe("3.2 customFilter - Поліфіл filter через функцію вищого порядку", () => {
    it("тест 1: customFilter([1, 2, 3, 4, 5], x => x % 2 === 0)", () => {
      expect(customFilter([1, 2, 3, 4, 5], x => x % 2 === 0)).toEqual([2,4]);
    });
    it("тест 2: customFilter(['cat', 'elephant', 'dog'], s => s.length > 3)", () => {
      expect(customFilter(['cat', 'elephant', 'dog'], s => s.length > 3)).toEqual(["elephant"]);
    });
  });

  describe("3.3 customReduce - Поліфіл reduce через функцію вищого порядку", () => {
    it("тест 1: customReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)", () => {
      expect(customReduce([1, 2, 3, 4], (sum, n) => sum + n, 0)).toEqual(10);
    });
    it("тест 2: customReduce([2, 3, 4], (prod, n) => prod * n)", () => {
      expect(customReduce([2, 3, 4], (prod, n) => prod * n)).toEqual(24);
    });
  });

  describe("3.4 pipe - Функціональний конвеєр: pipe(fn1, fn2, ...)(val)", () => {
    it("тест 1: pipe(x => x + 2, x => x * 3, x => `Result: ${x}`)(4)", () => {
      expect(pipe(x => x + 2, x => x * 3, x => `Result: ${x}`)(4)).toEqual("Result: 18");
    });
    it("тест 2: pipe(s => s.trim(), s => s.toLowerCase(), s => s.replace(/\s+/g, '-'))('  Learn JS Functions  ')", () => {
      expect(pipe(s => s.trim(), s => s.toLowerCase(), s => s.replace(/\s+/g, '-'))('  Learn JS Functions  ')).toEqual("learn-js-functions");
    });
    it("тест 3: pipe()(42)", () => {
      expect(pipe()(42)).toEqual(42);
    });
  });

  describe("3.5 compose - Математична композиція: compose(f, g, h)(x)", () => {
    it("тест 1: compose(x => `Value: ${x}`, x => x * 2, x => x + 5)(10)", () => {
      expect(compose(x => `Value: ${x}`, x => x * 2, x => x + 5)(10)).toEqual("Value: 30");
    });
  });

  describe("3.6 curryTwo - Каррінг для бінарної функції (Curry Binary)", () => {
    it("тест 1: curryTwo((a, b) => a + b)(10)(25)", () => {
      expect(curryTwo((a, b) => a + b)(10)(25)).toEqual(35);
    });
    it("тест 2: curryTwo((a, b) => a * b)(7)(6)", () => {
      expect(curryTwo((a, b) => a * b)(7)(6)).toEqual(42);
    });
  });

  describe("3.7 memoizeUnary - Мемоізація функції одного аргументу (Кешування)", () => {
    it("тест 1: (() => { let count = 0; const square = memoizeUnary(x => { count++; return x * x; }); const r1 = square(5); const r2 = square(5); return [r1, r2, count]; })()", () => {
      expect((() => { let count = 0; const square = memoizeUnary(x => { count++; return x * x; }); const r1 = square(5); const r2 = square(5); return [r1, r2, count]; })()).toEqual([25,25,1]);
    });
  });

  describe("3.8 factorialRecursive - Обчислення факторіалу рекурсивно", () => {
    it("тест 1: factorialRecursive(5)", () => {
      expect(factorialRecursive(5)).toEqual(120);
    });
    it("тест 2: factorialRecursive(0)", () => {
      expect(factorialRecursive(0)).toEqual(1);
    });
    it("тест 3: factorialRecursive(1)", () => {
      expect(factorialRecursive(1)).toEqual(1);
    });
    it("тест 4: factorialRecursive(-3)", () => {
      expect(factorialRecursive(-3)).toEqual(null);
    });
  });

  describe("3.9 fibonacciRecursive - Числа Фібоначчі рекурсивно", () => {
    it("тест 1: fibonacciRecursive(0)", () => {
      expect(fibonacciRecursive(0)).toEqual(0);
    });
    it("тест 2: fibonacciRecursive(1)", () => {
      expect(fibonacciRecursive(1)).toEqual(1);
    });
    it("тест 3: fibonacciRecursive(6)", () => {
      expect(fibonacciRecursive(6)).toEqual(8);
    });
    it("тест 4: fibonacciRecursive(10)", () => {
      expect(fibonacciRecursive(10)).toEqual(55);
    });
  });

  describe("3.10 deepFlattenRecursive - Рекурсивне вирівнювання глибоких масивів", () => {
    it("тест 1: deepFlattenRecursive([1, [2, [3, [4]], 5]])", () => {
      expect(deepFlattenRecursive([1, [2, [3, [4]], 5]])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: deepFlattenRecursive([[1, 2], [3, 4]])", () => {
      expect(deepFlattenRecursive([[1, 2], [3, 4]])).toEqual([1,2,3,4]);
    });
    it("тест 3: deepFlattenRecursive([])", () => {
      expect(deepFlattenRecursive([])).toEqual([]);
    });
  });

  describe("3.11 sumNestedTree - Рекурсивний підрахунок суми дерева об'єктів", () => {
    it("тест 1: sumNestedTree({ value: 10, children: [{ value: 5, children: [] }, { value: 15, children: [{ value: 20 }] }] })", () => {
      expect(sumNestedTree({ value: 10, children: [{ value: 5, children: [] }, { value: 15, children: [{ value: 20 }] }] })).toEqual(50);
    });
    it("тест 2: sumNestedTree(null)", () => {
      expect(sumNestedTree(null)).toEqual(0);
    });
  });

  describe("3.12 findInObjectRecursive - Рекурсивний пошук ключа у глибокому об'єкті", () => {
    it("тест 1: findInObjectRecursive({ a: 1, b: { c: 2, d: { secret: 'supabase_key' } } }, 'secret')", () => {
      expect(findInObjectRecursive({ a: 1, b: { c: 2, d: { secret: 'supabase_key' } } }, 'secret')).toEqual("supabase_key");
    });
    it("тест 2: findInObjectRecursive({ user: { id: 101 } }, 'id')", () => {
      expect(findInObjectRecursive({ user: { id: 101 } }, 'id')).toEqual(101);
    });
    it("тест 3: findInObjectRecursive({ a: 1 }, 'missing')", () => {
      expect(findInObjectRecursive({ a: 1 }, 'missing')).toEqual(undefined);
    });
  });

  describe("3.13 groupByKey - Групування елементів за ключем селектора (Функції + Масиви)", () => {
    it("тест 1: groupByKey(['one', 'two', 'three', 'four'], s => s.length)", () => {
      expect(groupByKey(['one', 'two', 'three', 'four'], s => s.length)).toEqual({"3":["one","two"],"4":["four"],"5":["three"]});
    });
    it("тест 2: groupByKey([{ role: 'admin', name: 'A' }, { role: 'user', name: 'B' }, { role: 'admin', name: 'C' }], u => u.role)", () => {
      expect(groupByKey([{ role: 'admin', name: 'A' }, { role: 'user', name: 'B' }, { role: 'admin', name: 'C' }], u => u.role)).toEqual({"admin":[{"role":"admin","name":"A"},{"role":"admin","name":"C"}],"user":[{"role":"user","name":"B"}]});
    });
  });

  describe("3.14 partitionArray - Розбиття масиву за предикатом: [pass, fail]", () => {
    it("тест 1: partitionArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0)", () => {
      expect(partitionArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0)).toEqual([[2,4,6],[1,3,5]]);
    });
    it("тест 2: partitionArray(['cat', 'elephant', 'dog'], s => s.length > 3)", () => {
      expect(partitionArray(['cat', 'elephant', 'dog'], s => s.length > 3)).toEqual([["elephant"],["cat","dog"]]);
    });
  });

  describe("3.15 curryDynamic - Універсальний авто-каррінг за арністю функції", () => {
    it("тест 1: curryDynamic((a, b, c) => a + b + c)(1)(2)(3)", () => {
      expect(curryDynamic((a, b, c) => a + b + c)(1)(2)(3)).toEqual(6);
    });
    it("тест 2: curryDynamic((a, b, c) => a + b + c)(1, 2)(3)", () => {
      expect(curryDynamic((a, b, c) => a + b + c)(1, 2)(3)).toEqual(6);
    });
    it("тест 3: curryDynamic((a, b, c) => a + b + c)(1, 2, 3)", () => {
      expect(curryDynamic((a, b, c) => a + b + c)(1, 2, 3)).toEqual(6);
    });
  });

  describe("3.16 mapObjectValues - Трансформація значень об'єкта через колбек", () => {
    it("тест 1: mapObjectValues({ a: 1, b: 2, c: 3 }, x => x * 10)", () => {
      expect(mapObjectValues({ a: 1, b: 2, c: 3 }, x => x * 10)).toEqual({"a":10,"b":20,"c":30});
    });
    it("тест 2: mapObjectValues({ name: 'supabase' }, s => s.toUpperCase())", () => {
      expect(mapObjectValues({ name: 'supabase' }, s => s.toUpperCase())).toEqual({"name":"SUPABASE"});
    });
  });

  describe("3.17 filterObjectEntries - Фільтрація полів об'єкта за предикатом", () => {
    it("тест 1: filterObjectEntries({ a: 10, b: 5, c: 20 }, v => v >= 10)", () => {
      expect(filterObjectEntries({ a: 10, b: 5, c: 20 }, v => v >= 10)).toEqual({"a":10,"c":20});
    });
    it("тест 2: filterObjectEntries({ id: 1, _secret: 'x' }, (v, k) => !k.startsWith('_'))", () => {
      expect(filterObjectEntries({ id: 1, _secret: 'x' }, (v, k) => !k.startsWith('_'))).toEqual({"id":1});
    });
  });

  describe("3.18 partialApply - Часткове застосування аргументів (Partial Application)", () => {
    it("тест 1: partialApply((a, b, c) => a + b + c, 10, 20)(30)", () => {
      expect(partialApply((a, b, c) => a + b + c, 10, 20)(30)).toEqual(60);
    });
    it("тест 2: partialApply((prefix, str) => `${prefix}: ${str}`, 'LOG')('Error found')", () => {
      expect(partialApply((prefix, str) => `${prefix}: ${str}`, 'LOG')('Error found')).toEqual("LOG: Error found");
    });
  });

  describe("3.19 groupAnagramsFunction - Групування анаграм (Функції + Рядки + Масиви + Цикли)", () => {
    it("тест 1: groupAnagramsFunction(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])", () => {
      expect(groupAnagramsFunction(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
    });
    it("тест 2: groupAnagramsFunction(['listen', 'silent', 'hello'])", () => {
      expect(groupAnagramsFunction(['listen', 'silent', 'hello'])).toEqual([["listen","silent"],["hello"]]);
    });
  });

  describe("3.20 zipWith - Функціональне зшивання масивів: zipWith(fn, arr1, arr2)", () => {
    it("тест 1: zipWith((a, b) => a + b, [1, 2, 3], [10, 20, 30, 40])", () => {
      expect(zipWith((a, b) => a + b, [1, 2, 3], [10, 20, 30, 40])).toEqual([11,22,33]);
    });
    it("тест 2: zipWith((k, v) => `${k}=${v}`, ['name', 'age'], ['Alex', 25])", () => {
      expect(zipWith((k, v) => `${k}=${v}`, ['name', 'age'], ['Alex', 25])).toEqual(["name=Alex","age=25"]);
    });
  });

  describe("3.21 cleanAndSortWordsFunction - Очищення та алфавітне сортування слів у реченні", () => {
    it("тест 1: cleanAndSortWordsFunction('Banana, apple, banana! Cherry, apple.')", () => {
      expect(cleanAndSortWordsFunction('Banana, apple, banana! Cherry, apple.')).toEqual(["apple","banana","cherry"]);
    });
    it("тест 2: cleanAndSortWordsFunction('zebra ant lion ant')", () => {
      expect(cleanAndSortWordsFunction('zebra ant lion ant')).toEqual(["ant","lion","zebra"]);
    });
  });

  describe("3.22 formatAsciiTableFunction - Побудова ASCII-таблиці з масиву рядків (Функція + Рядки + Цикли)", () => {
    it("тест 1: formatAsciiTableFunction(['ID', 'Name'], [[1, 'Alex'], [2, 'Olena']])", () => {
      expect(formatAsciiTableFunction(['ID', 'Name'], [[1, 'Alex'], [2, 'Olena']])).toEqual("| ID | Name  |\n|----|-------|\n| 1  | Alex  |\n| 2  | Olena |");
    });
    it("тест 2: formatAsciiTableFunction(['Code'], [['JS'], ['TS']])", () => {
      expect(formatAsciiTableFunction(['Code'], [['JS'], ['TS']])).toEqual("| Code |\n|------|\n| JS   |\n| TS   |");
    });
  });

  describe("3.23 binarySearchFunction - Бінарний пошук у відсортованому масиві (Binary Search)", () => {
    it("тест 1: binarySearchFunction([10, 20, 30, 40, 50, 60], 40)", () => {
      expect(binarySearchFunction([10, 20, 30, 40, 50, 60], 40)).toEqual(3);
    });
    it("тест 2: binarySearchFunction([1, 3, 5, 7, 9], 1)", () => {
      expect(binarySearchFunction([1, 3, 5, 7, 9], 1)).toEqual(0);
    });
    it("тест 3: binarySearchFunction([2, 4, 6], 5)", () => {
      expect(binarySearchFunction([2, 4, 6], 5)).toEqual(-1);
    });
  });

  describe("3.24 createBatchTransformer - Пакетне перетворення колекції за ланцюжком правил", () => {
    it("тест 1: createBatchTransformer(x => x.trim(), x => x.toUpperCase(), x => `[${x}]`)(['  alex  ', '  olena '])", () => {
      expect(createBatchTransformer(x => x.trim(), x => x.toUpperCase(), x => `[${x}]`)(['  alex  ', '  olena '])).toEqual(["[ALEX]","[OLENA]"]);
    });
  });

  describe("3.25 createMiddlewarePipeline - Пайплайн проміжних обробників (Middleware Pattern)", () => {
    it("тест 1: (() => { const p = createMiddlewarePipeline(); p.use((ctx, next) => { ctx.a = 1; next(); }); p.use((ctx, next) => { ctx.b = ctx.a + 2; next(); }); return p.run({}); })()", () => {
      expect((() => { const p = createMiddlewarePipeline(); p.use((ctx, next) => { ctx.a = 1; next(); }); p.use((ctx, next) => { ctx.b = ctx.a + 2; next(); }); return p.run({}); })()).toEqual({"a":1,"b":3});
    });
  });

  describe("3.26 measureExecutionTime - Профілювання часу виконання функції", () => {
    it("тест 1: (() => { const r = measureExecutionTime((a, b) => a + b, 10, 20); return [r.result, typeof r.durationMs === 'number']; })()", () => {
      expect((() => { const r = measureExecutionTime((a, b) => a + b, 10, 20); return [r.result, typeof r.durationMs === 'number']; })()).toEqual([30,true]);
    });
  });

  describe("3.27 createObservableValue - Реактивна змінна з відслідковуванням змін", () => {
    it("тест 1: (() => { const obs = createObservableValue(100); const changes = []; obs.watch((next, prev) => changes.push(`${prev}->${next}`)); obs.set(150); obs.set(150); obs.set(200); return changes; })()", () => {
      expect((() => { const obs = createObservableValue(100); const changes = []; obs.watch((next, prev) => changes.push(`${prev}->${next}`)); obs.set(150); obs.set(150); obs.set(200); return changes; })()).toEqual(["100->150","150->200"]);
    });
  });

  describe("3.28 createSafeFallback - Патерн Fallback (Безпечне резервне значення при винятку)", () => {
    it("тест 1: createSafeFallback(str => JSON.parse(str), {})('{\"valid\":true}')", () => {
      expect(createSafeFallback(str => JSON.parse(str), {})('{"valid":true}')).toEqual({"valid":true});
    });
    it("тест 2: createSafeFallback(str => JSON.parse(str), { error: true })('invalid_json')", () => {
      expect(createSafeFallback(str => JSON.parse(str), { error: true })('invalid_json')).toEqual({"error":true});
    });
  });

  describe("3.29 createLazyEvaluator - Ледаче обчислення (Lazy Evaluation)", () => {
    it("тест 1: (() => { let runs = 0; const lazy = createLazyEvaluator(() => { runs++; return 999; }); const b = lazy.isEvaluated(); const v1 = lazy.value(); const v2 = lazy.value(); return [b, v1, v2, lazy.isEvaluated(), runs]; })()", () => {
      expect((() => { let runs = 0; const lazy = createLazyEvaluator(() => { runs++; return 999; }); const b = lazy.isEvaluated(); const v1 = lazy.value(); const v2 = lazy.value(); return [b, v1, v2, lazy.isEvaluated(), runs]; })()).toEqual([false,999,999,true,1]);
    });
  });

  describe("3.30 trampoline - Уникнення переповнення стека: Трамплін (Trampoline Pattern)", () => {
    it("тест 1: (() => { const countDec = trampoline((n, sum = 0) => n <= 0 ? sum : () => countDec(n - 1, sum + n)); return countDec(100); })()", () => {
      expect((() => { const countDec = trampoline((n, sum = 0) => n <= 0 ? sum : () => countDec(n - 1, sum + n)); return countDec(100); })()).toEqual(5050);
    });
  });

  describe("3.31 createCircuitBreaker - Патерн Circuit Breaker (Автоматичний запобіжник збоїв)", () => {
    it("тест 1: (() => { const failing = () => { throw new Error('fail'); }; const cb = createCircuitBreaker(failing, 2); const r1 = cb(); const r2 = cb(); const r3 = cb(); return [r1, r2, r3]; })()", () => {
      expect((() => { const failing = () => { throw new Error('fail'); }; const cb = createCircuitBreaker(failing, 2); const r1 = cb(); const r2 = cb(); const r3 = cb(); return [r1, r2, r3]; })()).toEqual(["Execution Failed","Execution Failed","Circuit Open: Service Unavailable"]);
    });
  });

  describe("3.32 createPluginManager - Модульна система плагінів (Micro-kernel architecture)", () => {
    it("тест 1: (() => { const pm = createPluginManager(); pm.registerPlugin({ name: 'uppercase', install: m => m.addHook('format', s => s.toUpperCase()) }); pm.registerPlugin({ name: 'tag', install: m => m.addHook('format', s => `<tag>${s}</tag>`) }); return pm.triggerHook('format', 'supabase'); })()", () => {
      expect((() => { const pm = createPluginManager(); pm.registerPlugin({ name: 'uppercase', install: m => m.addHook('format', s => s.toUpperCase()) }); pm.registerPlugin({ name: 'tag', install: m => m.addHook('format', s => `<tag>${s}</tag>`) }); return pm.triggerHook('format', 'supabase'); })()).toEqual("<tag>SUPABASE</tag>");
    });
  });

  describe("3.33 createDebounce - HOF: Декоратор Debounce (Відкладення виконання)", () => {
    it("тест 1: (() => { let called = 0; const debounced = createDebounce(() => { called++; }, 50); debounced(); debounced(); return typeof debounced === 'function'; })()", () => {
      expect((() => { let called = 0; const debounced = createDebounce(() => { called++; }, 50); debounced(); debounced(); return typeof debounced === 'function'; })()).toEqual(true);
    });
  });

  describe("3.34 createThrottle - HOF: Декоратор Throttle (Обмеження частоти викликів)", () => {
    it("тест 1: (() => { let count = 0; const throttled = createThrottle(() => ++count, 100); const r1 = throttled(); const r2 = throttled(); return [r1, r2, count]; })()", () => {
      expect((() => { let count = 0; const throttled = createThrottle(() => ++count, 100); const r1 = throttled(); const r2 = throttled(); return [r1, r2, count]; })()).toEqual([1,null,1]);
    });
  });

  describe("3.35 deepCloneObject - Рекурсія: Глибоке клонування об'єкта (Deep Clone)", () => {
    it("тест 1: (() => { const original = { a: 1, b: { c: [2, 3] } }; const copy = deepCloneObject(original); copy.b.c.push(4); return { origLen: original.b.c.length, copyLen: copy.b.c.length }; })()", () => {
      expect((() => { const original = { a: 1, b: { c: [2, 3] } }; const copy = deepCloneObject(original); copy.b.c.push(4); return { origLen: original.b.c.length, copyLen: copy.b.c.length }; })()).toEqual({"origLen":2,"copyLen":3});
    });
  });

  describe("3.36 findFileInTree - Рекурсія: Пошук файлу у файловій системі (Tree Search)", () => {
    it("тест 1: findFileInTree({ name: 'root', type: 'dir', children: [{ name: 'app.js', type: 'file' }, { name: 'src', type: 'dir', children: [{ name: 'index.html', type: 'file' }] }] }, 'index.html')", () => {
      expect(findFileInTree({ name: 'root', type: 'dir', children: [{ name: 'app.js', type: 'file' }, { name: 'src', type: 'dir', children: [{ name: 'index.html', type: 'file' }] }] }, 'index.html')).toEqual("root/src/index.html");
    });
    it("тест 2: findFileInTree({ name: 'root', type: 'dir', children: [] }, 'missing.txt')", () => {
      expect(findFileInTree({ name: 'root', type: 'dir', children: [] }, 'missing.txt')).toEqual(null);
    });
  });

  describe("3.37 zipArraysWith - HOF: Попарне об'єднання масивів за функцією (zipWith)", () => {
    it("тест 1: zipArraysWith([1, 2, 3], [10, 20, 30], (a, b) => a + b)", () => {
      expect(zipArraysWith([1, 2, 3], [10, 20, 30], (a, b) => a + b)).toEqual([11,22,33]);
    });
    it("тест 2: zipArraysWith(['Олена', 'Тарас'], [95, 88], (n, s) => `${n}: ${s}`)", () => {
      expect(zipArraysWith(['Олена', 'Тарас'], [95, 88], (n, s) => `${n}: ${s}`)).toEqual(["Олена: 95","Тарас: 88"]);
    });
  });

  describe("3.38 createPriorityQueue - Патерни: Черга з пріоритетами (Priority Queue)", () => {
    it("тест 1: (() => { const pq = createPriorityQueue(); pq.enqueue('task_low', 10); pq.enqueue('task_urgent', 1); pq.enqueue('task_med', 5); return [pq.dequeue(), pq.dequeue(), pq.dequeue()]; })()", () => {
      expect((() => { const pq = createPriorityQueue(); pq.enqueue('task_low', 10); pq.enqueue('task_urgent', 1); pq.enqueue('task_med', 5); return [pq.dequeue(), pq.dequeue(), pq.dequeue()]; })()).toEqual(["task_urgent","task_med","task_low"]);
    });
  });

  describe("3.39 createEventBus - Патерни: Шина подій з підтримкою once (одноразові підписки)", () => {
    it("тест 1: (() => { const bus = createEventBus(); let count = 0; bus.once('greet', () => { count++; }); bus.emit('greet'); bus.emit('greet'); return count; })()", () => {
      expect((() => { const bus = createEventBus(); let count = 0; bus.once('greet', () => { count++; }); bus.emit('greet'); bus.emit('greet'); return count; })()).toEqual(1);
    });
  });

  describe("3.40 flattenDeepArray - Рекурсія: Глибоке розгортання вкладених масивів (Flat Polyfill)", () => {
    it("тест 1: flattenDeepArray([1, [2, [3, [4, 5]]]])", () => {
      expect(flattenDeepArray([1, [2, [3, [4, 5]]]])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: flattenDeepArray([[1], [[2]], [[[3]]]])", () => {
      expect(flattenDeepArray([[1], [[2]], [[[3]]]])).toEqual([1,2,3]);
    });
  });

  describe("3.41 asyncTaskWaterfall - Патерни: Послідовне виконання синхронних задач (Waterfall Runner)", () => {
    it("тест 1: asyncTaskWaterfall(5, [x => x * 2, x => x + 10, x => `${x} грн`])", () => {
      expect(asyncTaskWaterfall(5, [x => x * 2, x => x + 10, x => `${x} грн`])).toEqual("20 грн");
    });
  });

  describe("3.42 createLazyRange - Генераторні функції / Ітератори: Лінивий генератор діапазону (Lazy Range)", () => {
    it("тест 1: (() => { const range = createLazyRange(1, 5, 2); return [range.next(), range.next(), range.next(), range.next()]; })()", () => {
      expect((() => { const range = createLazyRange(1, 5, 2); return [range.next(), range.next(), range.next(), range.next()]; })()).toEqual([{"value":1,"done":false},{"value":3,"done":false},{"value":5,"done":false},{"done":true}]);
    });
  });

});
