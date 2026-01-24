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

const FANCY_PREFIXES = [
    'ya', 'ka', 'wtf', 'ro', 'big', 'ural', 'bro',
    'real', 'fsb', 'lol', 'tol', 'mega', 'bbs', 'gram'
];

const FANCY_SUFFIXES = [
    'master', 'pro', 'god', 'lord', 'king', 'boss', 'star',
    'spb', 'ded', 'voin', 'ninja', 'men', 'guru'
];

const COOL_WORDS = [
    'memnui', 'suhoi', 'majak', 'opel', 'lev', 'belui',
    'storm', 'black', 'ice', 'spel', 'light', 'ivo',
    'kiber', 'les', 'oki', 'quadro', 'shram'
];

const map = {
    а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z',
    и:'i', й:'y', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r',
    с:'s', т:'t', у:'u', ф:'f', х:'kh', ц:'ts', ч:'ch', ш:'sh', щ:'shch',
    ъ:'',  ы:'y',  ь:'', э:'e', ю:'yu', я:'ya'
};


export function generateRandomPhone() {
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
    const domain = RUS_DOMAINS[Math.floor(Math.random() * RUS_DOMAINS.length)];
    
    // Randomly choose one of several email patterns
    const pattern = Math.floor(Math.random() * 6);
    
    switch(pattern) {
        case 0:
            // Classic: firstname + 2 digits
            const digits = Math.floor(Math.random() * 90) + 10;
            return `${user}${digits}@${domain}`;
        
        case 1:
            // Prefix style: mr_firstname, super_firstname
            const prefix = FANCY_PREFIXES[Math.floor(Math.random() * FANCY_PREFIXES.length)];
            return `${prefix}_${user}@${domain}`;
        
        case 2:
            // Suffix style: firstname_master, firstname_pro
            const suffix = FANCY_SUFFIXES[Math.floor(Math.random() * FANCY_SUFFIXES.length)];
            return `${user}_${suffix}@${domain}`;
        
        case 3:
            // Cool word combo: firstname_dragon, firstname_cyber
            const word = COOL_WORDS[Math.floor(Math.random() * COOL_WORDS.length)];
            return `${user}_${word}@${domain}`;
        
        case 4:
            // Birth year style: firstname1985, firstname1999
            const year = Math.floor(Math.random() * 30) + 1980; // 1980-2009
            return `${user}${year}@${domain}`;
        
        case 5:
            // Combo: firstname + word + digits
            const coolWord = COOL_WORDS[Math.floor(Math.random() * COOL_WORDS.length)];
            const num = Math.floor(Math.random() * 100);
            return `${user}_${coolWord}${num}@${domain}`;
        
        default:
            return `${user}@${domain}`;
    }
}