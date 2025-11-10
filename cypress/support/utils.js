const FIRST_NAMES = [
    // А–В
    'Александр', 'Алексей', 'Андрей', 'Артём', 'Борис',
    'Вадим', 'Валерий', 'Василий', 'Виктор', 'Виталий',
    'Владимир',

    // Г–К
    'Георгий', 'Григорий', 'Денис', 'Дмитрий', 'Евгений',
    'Егор', 'Иван', 'Игорь', 'Кирилл', 'Константин',

    // Л–О
    'Леонид', 'Максим', 'Михаил', 'Никита', 'Николай',
    'Олег',

    // П–Я
    'Павел', 'Руслан', 'Роман', 'Сергей', 'Степан',
    'Фёдор', 'Юрий', 'Ярослав'
];

const RUS_DOMAINS = [
    'mail.ru',
    'bk.ru',
    'inbox.ru',
    'list.ru',
    'internet.ru',
    'yandex.ru',
    'yandex.by',
    'vk.com',
    'gmail.com',
    'yandex.com',
    'mail.ru',
];

const map = {
    а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z',
    и:'i', й:'y', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r',
    с:'s', т:'t', у:'u', ф:'f', х:'kh', ц:'ts', ч:'ch', ш:'sh', щ:'shch',
    ъ:'',  ы:'y',  ь:'', э:'e', ю:'yu', я:'ya'
};


export function generateRandomRussianPhone() {
    const prefix = '+79';
    const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
    return prefix + randomDigits;
}

export function generateRandomName() {
    return FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
}

function transliterate(text) {
    return text.toLowerCase()
        .split('')
        .map(ch => map[ch] ?? ch)   // keep non-Cyrillic chars as-is
        .join('');
}

export function generateRandomEmail(firstName) {
    const user   = transliterate(firstName);
    const digits = Math.floor(Math.random() * 90) + 10;      // 10-99

    const domain = RUS_DOMAINS[Math.floor(Math.random() * RUS_DOMAINS.length)];

    return `${user}${digits}@${domain}`;
}