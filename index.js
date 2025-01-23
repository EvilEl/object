/*
Поведение объекта с числовыми ключами
*/

const obj = {};

obj["1"] = "1";
obj["0"] = "0";

/*
 Ожидаешь:
 {
  1:"1",
  0:"0"
 }
 то увы это не так, под капотом выполняется
 The abstract operation OrdinaryOwnPropertyKeys позаимствовал из ECMASCRIPT
 1. Let keys be a new empty List. // Создаёт список ключей.
 2. For each own property key P of O such that P is an array index, in ascending numeric index order, do
   a. Append P to keys. // Добавляет ключи, которые являются индексами массива (числовые ключи), в порядке возрастания
 3. For each own property key P of O such that P is a String and P is not an array index, in ascending chronological order of property creation, do
   a. Append P to keys. // Добавляет строковые ключи (не числовые), в порядке их создания.
 4. For each own property key P of O such that P is a Symbol, in ascending chronological order of property creation, do
   a. Append P to keys. // Добавляет ключи-символы в порядке их создания.
 5. Return keys.

 array index - An integer index is a property name n such that CanonicalNumericIndexString(n)
 returns an integral Number in the inclusive interval from +0𝔽 to 𝔽(2**53 - 1).
 An array index is an integer index n such that CanonicalNumericIndexString(n)
 returns an integral Number in the inclusive interval from +0𝔽 to 𝔽(2**32 - 2).

 Ключи "1" и "0" могут быть приведены к числу, поэтому они считаются индексами массива.
 JavaScript упорядочивает их как 0, 1. Это скрытая логика, основанная на проверке:
 - Если ключ можно преобразовать к числу и обратно к строке без изменений, он считается индексом массива.

  Результат:
  {
    0:"0",
    1:"1"
  }
*/
