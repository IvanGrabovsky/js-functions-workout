import { describe, it, expect } from "vitest";
import {
  safeJsonParse,
  validatePositiveNumber,
  safeDivision,
  extractErrorInfo,
  validateUserAge,
  safeUriDecode,
  executeWithCleanup,
  validateStringLength,
  createCustomError,
  createValidationErrorClass,
  parseUserRecord,
  safeArrayAccess,
  rethrowSpecific,
  batchProcessWithErrors,
  safeMathEvaluate,
  runWithLoadingState,
  retryOperation,
  validateEmail,
  assertCondition,
  formatErrorLog,
  safeDeepProperty,
  createHttpErrorClass,
  filterValidEntries,
  chainWithCatch,
  safeArrayTransform,
  validateMatrixSquare,
  createSafeHandler,
  parseConfigFile,
  wrapExceptionWithCause,
  createBaseCustomError
} from "../src/04-exceptions-error-handling.js";

describe("Частина 4: Винятки та обробка помилок (try...catch...finally, throw)", () => {
  describe("4.1 safeJsonParse - Безпечний парсинг JSON (try...catch): fallback значення", () => {
    it("тест 1: safeJsonParse('{\"name\":\"Анна\",\"age\":22}')", () => {
      expect(safeJsonParse('{"name":"Анна","age":22}')).toEqual({"name":"Анна","age":22});
    });
    it("тест 2: safeJsonParse('[1, 2, 3]')", () => {
      expect(safeJsonParse('[1, 2, 3]')).toEqual([1,2,3]);
    });
    it("тест 3: safeJsonParse('{invalid_json}', {})", () => {
      expect(safeJsonParse('{invalid_json}', {})).toEqual({});
    });
    it("тест 4: safeJsonParse('undefined', 'DEFAULT')", () => {
      expect(safeJsonParse('undefined', 'DEFAULT')).toEqual("DEFAULT");
    });
    it("тест 5: safeJsonParse('true')", () => {
      expect(safeJsonParse('true')).toEqual(true);
    });
  });

  describe("4.2 validatePositiveNumber - Генерація винятку: оператор throw та TypeError", () => {
    it("тест 1: validatePositiveNumber(42)", () => {
      expect(validatePositiveNumber(42)).toEqual(42);
    });
    it("тест 2: validatePositiveNumber(3.14)", () => {
      expect(validatePositiveNumber(3.14)).toEqual(3.14);
    });
    it("тест 3: (() => { try { validatePositiveNumber(-5); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()", () => {
      expect((() => { try { validatePositiveNumber(-5); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()).toEqual("Значення має бути додатним числом");
    });
    it("тест 4: (() => { try { validatePositiveNumber('10'); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()", () => {
      expect((() => { try { validatePositiveNumber('10'); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()).toEqual("Значення має бути додатним числом");
    });
    it("тест 5: (() => { try { validatePositiveNumber(0); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()", () => {
      expect((() => { try { validatePositiveNumber(0); return 'NO_THROW'; } catch(e) { return e instanceof TypeError ? e.message : 'WRONG_TYPE'; } })()).toEqual("Значення має бути додатним числом");
    });
  });

  describe("4.3 safeDivision - Ділення з генерацією RangeError при діленні на нуль", () => {
    it("тест 1: safeDivision(10, 2)", () => {
      expect(safeDivision(10, 2)).toEqual(5);
    });
    it("тест 2: safeDivision(9, 3)", () => {
      expect(safeDivision(9, 3)).toEqual(3);
    });
    it("тест 3: (() => { try { safeDivision(10, 0); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()", () => {
      expect((() => { try { safeDivision(10, 0); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()).toEqual({"name":"RangeError","msg":"Ділення на нуль неможливе"});
    });
    it("тест 4: (() => { try { safeDivision('10', 2); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()", () => {
      expect((() => { try { safeDivision('10', 2); return 'NO_ERROR'; } catch(e) { return { name: e.name, msg: e.message }; } })()).toEqual({"name":"TypeError","msg":"Обидва аргументи мають бути числами"});
    });
  });

  describe("4.4 extractErrorInfo - Анатомія об'єкта помилки (Error Object: name, message, stack)", () => {
    it("тест 1: extractErrorInfo(() => 100 * 2)", () => {
      expect(extractErrorInfo(() => 100 * 2)).toEqual({"success":true,"result":200});
    });
    it("тест 2: extractErrorInfo(() => { throw new TypeError('Невірний тип!'); })", () => {
      expect(extractErrorInfo(() => { throw new TypeError('Невірний тип!'); })).toEqual({"success":false,"name":"TypeError","message":"Невірний тип!","hasStack":true});
    });
    it("тест 3: extractErrorInfo(() => { throw new RangeError('Поза межами!'); })", () => {
      expect(extractErrorInfo(() => { throw new RangeError('Поза межами!'); })).toEqual({"success":false,"name":"RangeError","message":"Поза межами!","hasStack":true});
    });
  });

  describe("4.5 validateUserAge - Комплексна валідація віку: диференціація TypeError та RangeError", () => {
    it("тест 1: validateUserAge(25)", () => {
      expect(validateUserAge(25)).toEqual(25);
    });
    it("тест 2: validateUserAge(0)", () => {
      expect(validateUserAge(0)).toEqual(0);
    });
    it("тест 3: validateUserAge(130)", () => {
      expect(validateUserAge(130)).toEqual(130);
    });
    it("тест 4: (() => { try { validateUserAge(25.5); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateUserAge(25.5); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
    it("тест 5: (() => { try { validateUserAge(-1); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateUserAge(-1); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 6: (() => { try { validateUserAge(131); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateUserAge(131); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 7: (() => { try { validateUserAge('20'); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateUserAge('20'); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
  });

  describe("4.6 safeUriDecode - Обробка вбудованої помилки URIError", () => {
    it("тест 1: safeUriDecode('Hello%20World%21')", () => {
      expect(safeUriDecode('Hello%20World%21')).toEqual("Hello World!");
    });
    it("тест 2: safeUriDecode('%D0%9A%D0%B8%D1%97%D0%B2')", () => {
      expect(safeUriDecode('%D0%9A%D0%B8%D1%97%D0%B2')).toEqual("Київ");
    });
    it("тест 3: safeUriDecode('%E0%A4%A')", () => {
      expect(safeUriDecode('%E0%A4%A')).toEqual("INVALID_URI");
    });
    it("тест 4: safeUriDecode('%')", () => {
      expect(safeUriDecode('%')).toEqual("INVALID_URI");
    });
  });

  describe("4.7 executeWithCleanup - Блок finally: Гарантоване виконання очищення ресурсів", () => {
    it("тест 1: (() => { let cleaned = false; const res = executeWithCleanup(() => 42, () => { cleaned = true; }); return { res, cleaned }; })()", () => {
      expect((() => { let cleaned = false; const res = executeWithCleanup(() => 42, () => { cleaned = true; }); return { res, cleaned }; })()).toEqual({"res":42,"cleaned":true});
    });
    it("тест 2: (() => { let cleaned = false; let errorCaught = false; try { executeWithCleanup(() => { throw new Error('fail'); }, () => { cleaned = true; }); } catch(e) { errorCaught = true; } return { cleaned, errorCaught }; })()", () => {
      expect((() => { let cleaned = false; let errorCaught = false; try { executeWithCleanup(() => { throw new Error('fail'); }, () => { cleaned = true; }); } catch(e) { errorCaught = true; } return { cleaned, errorCaught }; })()).toEqual({"cleaned":true,"errorCaught":true});
    });
  });

  describe("4.8 validateStringLength - Контракт функції: Захисне програмування рядків (Defensive Programming)", () => {
    it("тест 1: validateStringLength('   admin   ', 3, 10)", () => {
      expect(validateStringLength('   admin   ', 3, 10)).toEqual("admin");
    });
    it("тест 2: (() => { try { validateStringLength(12345, 1, 10); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateStringLength(12345, 1, 10); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
    it("тест 3: (() => { try { validateStringLength('ab', 5, 10); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateStringLength('ab', 5, 10); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 4: (() => { try { validateStringLength('hello', 10, 5); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateStringLength('hello', 10, 5); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
  });

  describe("4.9 createCustomError - Створення спеціалізованого об'єкта помилки з метаданими", () => {
    it("тест 1: (() => { const e = createCustomError('DatabaseError', 'Connection timeout', 504); return { isError: e instanceof Error, name: e.name, msg: e.message, code: e.code }; })()", () => {
      expect((() => { const e = createCustomError('DatabaseError', 'Connection timeout', 504); return { isError: e instanceof Error, name: e.name, msg: e.message, code: e.code }; })()).toEqual({"isError":true,"name":"DatabaseError","msg":"Connection timeout","code":504});
    });
  });

  describe("4.10 createValidationErrorClass - Кастомний клас помилки: Наслідування від Error (class ValidationError)", () => {
    it("тест 1: (() => { const Cls = createValidationErrorClass(); const err = new Cls('Імʼя занадто коротке', 'username'); return { isErr: err instanceof Error, isCustom: err instanceof Cls, name: err.name, msg: err.message, field: err.field }; })()", () => {
      expect((() => { const Cls = createValidationErrorClass(); const err = new Cls('Імʼя занадто коротке', 'username'); return { isErr: err instanceof Error, isCustom: err instanceof Cls, name: err.name, msg: err.message, field: err.field }; })()).toEqual({"isErr":true,"isCustom":true,"name":"ValidationError","msg":"Імʼя занадто коротке","field":"username"});
    });
  });

  describe("4.11 parseUserRecord - Синтез: Рядки + Винятки. Парсинг рядка користувача з валідацією", () => {
    it("тест 1: parseUserRecord('101,Олена,admin')", () => {
      expect(parseUserRecord('101,Олена,admin')).toEqual({"id":101,"name":"Олена","role":"admin"});
    });
    it("тест 2: parseUserRecord(' 202 ,  Максим  , user ')", () => {
      expect(parseUserRecord(' 202 ,  Максим  , user ')).toEqual({"id":202,"name":"Максим","role":"user"});
    });
    it("тест 3: (() => { try { parseUserRecord('bad,record'); return 'OK'; } catch(e) { return e.message; } })()", () => {
      expect((() => { try { parseUserRecord('bad,record'); return 'OK'; } catch(e) { return e.message; } })()).toEqual("Невірний формат запису: очікується id,name,role");
    });
    it("тест 4: (() => { try { parseUserRecord('abc,Олег,moderator'); return 'OK'; } catch(e) { return e.message; } })()", () => {
      expect((() => { try { parseUserRecord('abc,Олег,moderator'); return 'OK'; } catch(e) { return e.message; } })()).toEqual("Невірний id: очікується число");
    });
  });

  describe("4.12 safeArrayAccess - Синтез: Масиви + RangeError. Безпечний доступ за індексом", () => {
    it("тест 1: safeArrayAccess(['яблуко', 'банан', 'груша'], 1)", () => {
      expect(safeArrayAccess(['яблуко', 'банан', 'груша'], 1)).toEqual("банан");
    });
    it("тест 2: safeArrayAccess([10, 20, 30], 0)", () => {
      expect(safeArrayAccess([10, 20, 30], 0)).toEqual(10);
    });
    it("тест 3: (() => { try { safeArrayAccess([1, 2], 5); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { safeArrayAccess([1, 2], 5); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 4: (() => { try { safeArrayAccess('not-array', 0); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { safeArrayAccess('not-array', 0); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
  });

  describe("4.13 rethrowSpecific - Патерн Re-throwing: Вибіркове перехоплення та прокидання винятків", () => {
    it("тест 1: rethrowSpecific(() => 'all good')", () => {
      expect(rethrowSpecific(() => 'all good')).toEqual("all good");
    });
    it("тест 2: rethrowSpecific(() => { throw new TypeError('Wrong argument'); })", () => {
      expect(rethrowSpecific(() => { throw new TypeError('Wrong argument'); })).toEqual("HANDLED_TYPE_ERROR: Wrong argument");
    });
    it("тест 3: (() => { try { rethrowSpecific(() => { throw new RangeError('Out of bounds'); }); return 'FAIL'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { rethrowSpecific(() => { throw new RangeError('Out of bounds'); }); return 'FAIL'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
  });

  describe("4.14 batchProcessWithErrors - Синтез: Цикли + Масиви + Винятки. Пакетна обробка без зупинки", () => {
    it("тест 1: batchProcessWithErrors([2, -4, 6, 0, -8], n => { if (n < 0) throw new Error('Відʼємне число!'); return n * 10; })", () => {
      expect(batchProcessWithErrors([2, -4, 6, 0, -8], n => { if (n < 0) throw new Error('Відʼємне число!'); return n * 10; })).toEqual({"successes":[20,60,0],"errors":[{"item":-4,"error":"Відʼємне число!"},{"item":-8,"error":"Відʼємне число!"}]});
    });
  });

  describe("4.15 safeMathEvaluate - Безпечний мікро-калькулятор рядкових виразів", () => {
    it("тест 1: safeMathEvaluate('12 + 8')", () => {
      expect(safeMathEvaluate('12 + 8')).toEqual(20);
    });
    it("тест 2: safeMathEvaluate('50 - 15')", () => {
      expect(safeMathEvaluate('50 - 15')).toEqual(35);
    });
    it("тест 3: safeMathEvaluate('6 * 7')", () => {
      expect(safeMathEvaluate('6 * 7')).toEqual(42);
    });
    it("тест 4: safeMathEvaluate('100 / 4')", () => {
      expect(safeMathEvaluate('100 / 4')).toEqual(25);
    });
    it("тест 5: (() => { try { safeMathEvaluate('10 / 0'); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { safeMathEvaluate('10 / 0'); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 6: (() => { try { safeMathEvaluate('invalid string'); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { safeMathEvaluate('invalid string'); return 'OK'; } catch(e) { return e.name; } })()).toEqual("SyntaxError");
    });
  });

  describe("4.16 runWithLoadingState - Патерн керування станом (Loading Flag) з блоком finally", () => {
    it("тест 1: (() => { const state = { isLoading: false }; const val = runWithLoadingState(state, () => { if (!state.isLoading) throw new Error('Not loading!'); return 777; }); return { val, finalLoading: state.isLoading }; })()", () => {
      expect((() => { const state = { isLoading: false }; const val = runWithLoadingState(state, () => { if (!state.isLoading) throw new Error('Not loading!'); return 777; }); return { val, finalLoading: state.isLoading }; })()).toEqual({"val":777,"finalLoading":false});
    });
    it("тест 2: (() => { const state = { isLoading: false }; let errCaught = false; try { runWithLoadingState(state, () => { throw new Error('fail'); }); } catch(e) { errCaught = true; } return { errCaught, finalLoading: state.isLoading }; })()", () => {
      expect((() => { const state = { isLoading: false }; let errCaught = false; try { runWithLoadingState(state, () => { throw new Error('fail'); }); } catch(e) { errCaught = true; } return { errCaught, finalLoading: state.isLoading }; })()).toEqual({"errCaught":true,"finalLoading":false});
    });
  });

  describe("4.17 retryOperation - Патерн повторних спроб (Retry Pattern з лічильником)", () => {
    it("тест 1: (() => { let attempts = 0; const res = retryOperation(() => { attempts++; if (attempts < 3) throw new Error('Temporary failure'); return 'Success on attempt ' + attempts; }, 5); return { res, attempts }; })()", () => {
      expect((() => { let attempts = 0; const res = retryOperation(() => { attempts++; if (attempts < 3) throw new Error('Temporary failure'); return 'Success on attempt ' + attempts; }, 5); return { res, attempts }; })()).toEqual({"res":"Success on attempt 3","attempts":3});
    });
    it("тест 2: (() => { try { retryOperation(() => { throw new Error('Permanent crash'); }, 3); return 'NO_THROW'; } catch(e) { return e.message; } })()", () => {
      expect((() => { try { retryOperation(() => { throw new Error('Permanent crash'); }, 3); return 'NO_THROW'; } catch(e) { return e.message; } })()).toEqual("Permanent crash");
    });
  });

  describe("4.18 validateEmail - Синтез: Рядки + Валідація email з генерацією винятків", () => {
    it("тест 1: validateEmail('  STUDENT@Camp.edu.ua  ')", () => {
      expect(validateEmail('  STUDENT@Camp.edu.ua  ')).toEqual("student@camp.edu.ua");
    });
    it("тест 2: validateEmail('test.dev@company.com')", () => {
      expect(validateEmail('test.dev@company.com')).toEqual("test.dev@company.com");
    });
    it("тест 3: (() => { try { validateEmail('plainaddress'); return 'OK'; } catch(e) { return e.message; } })()", () => {
      expect((() => { try { validateEmail('plainaddress'); return 'OK'; } catch(e) { return e.message; } })()).toEqual("Некоректний формат email");
    });
    it("тест 4: (() => { try { validateEmail(12345); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateEmail(12345); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
  });

  describe("4.19 assertCondition - Універсальна функція перевірки тверджень (Assert Helper)", () => {
    it("тест 1: assertCondition(5 > 2)", () => {
      expect(assertCondition(5 > 2)).toEqual(true);
    });
    it("тест 2: (() => { try { assertCondition(false, 'Дані відсутні', TypeError); return 'NO_THROW'; } catch(e) { return { name: e.name, msg: e.message }; } })()", () => {
      expect((() => { try { assertCondition(false, 'Дані відсутні', TypeError); return 'NO_THROW'; } catch(e) { return { name: e.name, msg: e.message }; } })()).toEqual({"name":"TypeError","msg":"Дані відсутні"});
    });
  });

  describe("4.20 formatErrorLog - Форматування діагностичного логу помилки у рядок", () => {
    it("тест 1: formatErrorLog(new TypeError('Invalid token'), 'Auth')", () => {
      expect(formatErrorLog(new TypeError('Invalid token'), 'Auth')).toEqual("[ERROR:Auth] TypeError: Invalid token");
    });
    it("тест 2: formatErrorLog(new RangeError('Out of bounds'), 'DataGrid')", () => {
      expect(formatErrorLog(new RangeError('Out of bounds'), 'DataGrid')).toEqual("[ERROR:DataGrid] RangeError: Out of bounds");
    });
    it("тест 3: formatErrorLog('Plain text crash')", () => {
      expect(formatErrorLog('Plain text crash')).toEqual("[ERROR:Core] UnknownError: Plain text crash");
    });
  });

  describe("4.21 safeDeepProperty - Безпечний доступ до глибоких властивостей об'єкта (Optional Chaining polyfill)", () => {
    it("тест 1: safeDeepProperty({ user: { profile: { name: 'Дарина' } } }, 'user.profile.name')", () => {
      expect(safeDeepProperty({ user: { profile: { name: 'Дарина' } } }, 'user.profile.name')).toEqual("Дарина");
    });
    it("тест 2: safeDeepProperty({ user: null }, 'user.profile.name', 'NO_PROFILE')", () => {
      expect(safeDeepProperty({ user: null }, 'user.profile.name', 'NO_PROFILE')).toEqual("NO_PROFILE");
    });
    it("тест 3: safeDeepProperty({}, 'a.b.c.d', 'N/A')", () => {
      expect(safeDeepProperty({}, 'a.b.c.d', 'N/A')).toEqual("N/A");
    });
    it("тест 4: safeDeepProperty(null, 'foo.bar', 0)", () => {
      expect(safeDeepProperty(null, 'foo.bar', 0)).toEqual(0);
    });
  });

  describe("4.22 createHttpErrorClass - Кастомний клас HttpError зі статус-кодом", () => {
    it("тест 1: (() => { const HttpError = createHttpErrorClass(); const err = new HttpError(404, 'Користувача не знайдено'); return { isErr: err instanceof Error, name: err.name, code: err.statusCode, msg: err.message }; })()", () => {
      expect((() => { const HttpError = createHttpErrorClass(); const err = new HttpError(404, 'Користувача не знайдено'); return { isErr: err instanceof Error, name: err.name, code: err.statusCode, msg: err.message }; })()).toEqual({"isErr":true,"name":"HttpError","code":404,"msg":"Користувача не знайдено"});
    });
    it("тест 2: (() => { const HttpError = createHttpErrorClass(); const err = new HttpError(500, 'Внутрішня помилка сервера'); return err.statusCode; })()", () => {
      expect((() => { const HttpError = createHttpErrorClass(); const err = new HttpError(500, 'Внутрішня помилка сервера'); return err.statusCode; })()).toEqual(500);
    });
  });

  describe("4.23 filterValidEntries - Синтез: Масиви + Валідатор. Фільтрація елементів за безпечним предикатом", () => {
    it("тест 1: filterValidEntries(['hello', '', 'world', 123, 'supabase'], val => { if (typeof val !== 'string') throw new TypeError('not string'); if (!val.length) throw new Error('empty'); return true; })", () => {
      expect(filterValidEntries(['hello', '', 'world', 123, 'supabase'], val => { if (typeof val !== 'string') throw new TypeError('not string'); if (!val.length) throw new Error('empty'); return true; })).toEqual(["hello","world","supabase"]);
    });
  });

  describe("4.24 chainWithCatch - Конвеєр функцій із фіксацією кроку аварії (Pipelines with error tracing)", () => {
    it("тест 1: chainWithCatch(10, x => x + 5, x => x * 2, x => x - 10)", () => {
      expect(chainWithCatch(10, x => x + 5, x => x * 2, x => x - 10)).toEqual({"success":true,"value":20});
    });
    it("тест 2: chainWithCatch('test', s => s.toUpperCase(), s => { throw new Error('Format failed'); }, s => s + '!')", () => {
      expect(chainWithCatch('test', s => s.toUpperCase(), s => { throw new Error('Format failed'); }, s => s + '!')).toEqual({"success":false,"failedAtStep":1,"error":"Format failed"});
    });
  });

  describe("4.25 safeArrayTransform - Синтез: Масиви + Цикли. Трансформація з заміщенням збійних елементів", () => {
    it("тест 1: safeArrayTransform(['10', '20', 'invalid', '40'], s => { const n = Number(s); if (Number.isNaN(n) || s === 'invalid') throw new Error('NaN'); return n; }, 0)", () => {
      expect(safeArrayTransform(['10', '20', 'invalid', '40'], s => { const n = Number(s); if (Number.isNaN(n) || s === 'invalid') throw new Error('NaN'); return n; }, 0)).toEqual([10,20,0,40]);
    });
  });

  describe("4.26 validateMatrixSquare - Синтез: 2D Матриці + Вкладені цикли + Винятки", () => {
    it("тест 1: validateMatrixSquare([[1, 2], [3, 4]])", () => {
      expect(validateMatrixSquare([[1, 2], [3, 4]])).toEqual(2);
    });
    it("тест 2: validateMatrixSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(validateMatrixSquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(3);
    });
    it("тест 3: (() => { try { validateMatrixSquare([[1, 2, 3], [4, 5]]); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateMatrixSquare([[1, 2, 3], [4, 5]]); return 'OK'; } catch(e) { return e.name; } })()).toEqual("RangeError");
    });
    it("тест 4: (() => { try { validateMatrixSquare([[1, 'bad'], [3, 4]]); return 'OK'; } catch(e) { return e.name; } })()", () => {
      expect((() => { try { validateMatrixSquare([[1, 'bad'], [3, 4]]); return 'OK'; } catch(e) { return e.name; } })()).toEqual("TypeError");
    });
  });

  describe("4.27 createSafeHandler - Патерн Golang/Rust: Кортежне повернення результату [data, error]", () => {
    it("тест 1: (() => { const safeDiv = createSafeHandler((a, b) => { if (b === 0) throw new Error('Zero division'); return a / b; }); const [d1, e1] = safeDiv(10, 2); const [d2, e2] = safeDiv(10, 0); return { s1: d1, err1: e1, s2: d2, err2Msg: e2.message }; })()", () => {
      expect((() => { const safeDiv = createSafeHandler((a, b) => { if (b === 0) throw new Error('Zero division'); return a / b; }); const [d1, e1] = safeDiv(10, 2); const [d2, e2] = safeDiv(10, 0); return { s1: d1, err1: e1, s2: d2, err2Msg: e2.message }; })()).toEqual({"s1":5,"err1":null,"s2":null,"err2Msg":"Zero division"});
    });
  });

  describe("4.28 parseConfigFile - Комплексний парсер конфігураційних рядків із зазначенням рядка збою", () => {
    it("тест 1: parseConfigFile('# Коментар\nHOST=localhost\nPORT=8080\n\nDEBUG=true')", () => {
      expect(parseConfigFile('# Коментар\nHOST=localhost\nPORT=8080\n\nDEBUG=true')).toEqual({"HOST":"localhost","PORT":"8080","DEBUG":"true"});
    });
    it("тест 2: (() => { try { parseConfigFile('VALID=true\nBROKEN_LINE\nOTHER=1'); return 'OK'; } catch(e) { return { name: e.name, msg: e.message }; } })()", () => {
      expect((() => { try { parseConfigFile('VALID=true\nBROKEN_LINE\nOTHER=1'); return 'OK'; } catch(e) { return { name: e.name, msg: e.message }; } })()).toEqual({"name":"SyntaxError","msg":"Помилка синтаксису в рядку 2: відсутній знак '='"});
    });
  });

  describe("4.29 wrapExceptionWithCause - Патерн обгортання винятків (Exception Wrapping з властивістю cause)", () => {
    it("тест 1: (() => { class ReadError extends Error {}; try { wrapExceptionWithCause(() => { JSON.parse('{bad json}'); }, ReadError, 'Не вдалося прочитати конфігурацію'); return 'NO_THROW'; } catch(e) { return { isReadError: e instanceof ReadError, msg: e.message, hasCause: Boolean(e.cause), causeName: e.cause ? e.cause.name : null }; } })()", () => {
      expect((() => { class ReadError extends Error {}; try { wrapExceptionWithCause(() => { JSON.parse('{bad json}'); }, ReadError, 'Не вдалося прочитати конфігурацію'); return 'NO_THROW'; } catch(e) { return { isReadError: e instanceof ReadError, msg: e.message, hasCause: Boolean(e.cause), causeName: e.cause ? e.cause.name : null }; } })()).toEqual({"isReadError":true,"msg":"Не вдалося прочитати конфігурацію","hasCause":true,"causeName":"SyntaxError"});
    });
  });

  describe("4.30 createBaseCustomError - Динамічний базовий клас помилок (this.constructor.name та поліморфізм)", () => {
    it("тест 1: (() => { const Base = createBaseCustomError(); class NetworkTimeoutError extends Base {} const err = new NetworkTimeoutError('Сервер не відповідає', { code: 504, cause: new Error('Socket closed') }); return { isBase: err instanceof Base, isError: err instanceof Error, isChild: err instanceof NetworkTimeoutError, name: err.name, msg: err.message, code: err.code, causeMsg: err.cause.message }; })()", () => {
      expect((() => { const Base = createBaseCustomError(); class NetworkTimeoutError extends Base {} const err = new NetworkTimeoutError('Сервер не відповідає', { code: 504, cause: new Error('Socket closed') }); return { isBase: err instanceof Base, isError: err instanceof Error, isChild: err instanceof NetworkTimeoutError, name: err.name, msg: err.message, code: err.code, causeMsg: err.cause.message }; })()).toEqual({"isBase":true,"isError":true,"isChild":true,"name":"NetworkTimeoutError","msg":"Сервер не відповідає","code":504,"causeMsg":"Socket closed"});
    });
  });

});
