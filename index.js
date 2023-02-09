// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercents(percent, number) {
	return number / 100 * percent;
}

//Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения.
//  Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

export function repeatWord(word, count) {
	let words = '';
  for (let i = 1; i <= count; ++i) {
  	words += word + i + ', ';
  }
  return words;
}

// Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название.
//  Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

export function getMonth(n) {
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
  return 'неизвестно';
}
