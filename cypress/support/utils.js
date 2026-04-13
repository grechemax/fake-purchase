const FIRST_NAMES = [
    // А–В
    'Александр', 'Алексей', 'Альберт', 'Анатолий', 'Андрей',
    'Антон', 'Аркадий', 'Артём', 'Артур', 'Архип',
    'Борис', 'Бронислав', 'Булат',
    'Вадим', 'Валентин', 'Валерий', 'Василий', 'Виктор',
    'Виталий', 'Владимир', 'Вячеслав',

    // Г–К
    'Геннадий', 'Георгий', 'Герман', 'Глеб', 'Григорий',
    'Гавриил', 'Давид', 'Даниил', 'Денис', 'Дмитрий',
    'Добрыня', 'Евгений', 'Евдоким', 'Егор', 'Елисей',
    'Емельян', 'Еремей', 'Ерофей', 'Ефим', 'Ефрем',
    'Иван', 'Игнатий', 'Игорь', 'Илья', 'Иннокентий',
    'Иосиф', 'Ираклий', 'Исидор', 'Казимир', 'Кирилл',
    'Клавдий', 'Клемент', 'Климент', 'Кондрат', 'Константин',
    'Корней', 'Кузьма',

    // Л–О
    'Лаврентий', 'Лаврин', 'Ладислав', 'Лев', 'Леонид',
    'Леонтий', 'Лукьян', 'Макар', 'Максим', 'Максимилиан',
    'Малахий', 'Манул', 'Мануил', 'Маркел', 'Марк',
    'Мартин', 'Матвей', 'Мефодий', 'Милий', 'Минай',
    'Миней', 'Миниан', 'Мирон', 'Мишка', 'Мстислав',
    'Михаил', 'Модест', 'Моисей', 'Монтан',
    'Натан', 'Наум', 'Нектарий', 'Никандр', 'Никита',
    'Никифор', 'Никодим', 'Николай', 'Никомед', 'Нил',
    'Нодар', 'Олег', 'Олимпий', 'Онуфрий', 'Орест',
    'Остап', 'Остромир',

    // П–Я
    'Павел', 'Панкрат', 'Панфил', 'Парамон', 'Патрикей',
    'Пахом', 'Пётр', 'Петр', 'Пимен', 'Платон',
    'Поликарп', 'Потап', 'Прокофий', 'Прохор', 'Пулхерий',
    'Радий', 'Радовид', 'Ради́мир', 'Райнер', 'Раймонд',
    'Рафаил', 'Рахим', 'Роберт', 'Рождествен', 'Роман',
    'Ростислав', 'Рубен', 'Рудольф', 'Рустам', 'Руфин',
    'Рюрик', 'Сава', 'Самойл', 'Сафрон', 'Светозар',
    'Сергей', 'Сергий', 'Сидор', 'Сила', 'Сильван',
    'Сильвест', 'Сильвестр', 'Симеон', 'Симон', 'Сиян',
    'Софрон', 'Софроний', 'Спартак', 'Спиридон', 'Степан',
    'Стефан', 'Стефаний', 'Стефен', 'Стоян',
    'Таврион', 'Талан', 'Тарас', 'Терентий', 'Теодор',
    'Теодосий', 'Теодул', 'Теон', 'Терилий', 'Тертий',
    'Тимофей', 'Тимур', 'Титус', 'Готан', 'Тихон',
    'Токтамыш', 'Трифиллий', 'Трифон', 'Трифонии',
    'Федор', 'Федоро', 'Федосей', 'Федосий', 'Федот',
    'Фелициан', 'Филарет', 'Филат', 'Филдемон', 'Филимон',
    'Филипп', 'Филит', 'Филолог', 'Филон', 'Философ',
    'Фирс', 'Флавиан', 'Флегонт', 'Флоренций', 'Флорентий',
    'Фока', 'Фокион', 'Фома', 'Фортунат', 'Франц',
    'Фрол', 'Фруктуоз', 'Фуад',
    'Харалампий', 'Харит', 'Харитон', 'Харламп',
    'Харлампиан', 'Харлампий', 'Харлампіј', 'Харлап',
    'Харп', 'Харпократ', 'Харфоломей', 'Хвалимир',
    'Хемий', 'Хизкия', 'Химн', 'Хинкиан', 'Хлодовиг',
    'Христор', 'Христофор', 'Хронии', 'Хрысанф',
    'Хромий', 'Хромовой', 'Худатой', 'Худофор',
    'Цезарь', 'Целестин', 'Целий', 'Целсо', 'Цельсий',
    'Ценджер', 'Центрипет', 'Цербер', 'Цецилий', 'Цимохой',
    'Цингалес', 'Цисий', 'Цисян', 'Цитус', 'Цуль',
    'Чаадаев', 'Человей', 'Человович', 'Чепургей',
    'Черниговец', 'Чернобай', 'Черномор', 'Чесмой',
    'Чехов', 'Чивсо', 'Чингис', 'Чинодий', 'Чирей',
    'Чир', 'Чирий', 'Числяв', 'Чистополь', 'Чистяй',
    'Чога', 'Чоколатов', 'Чопорной', 'Чох',
    'Юлиан', 'Юлий', 'Юпатерий', 'Юрий', 'Юросан',
    'Юстин', 'Юстиниан', 'Юстиниян',
    'Ядвига', 'Янв', 'Янислав', 'Янний', 'Январий',
    'Янус', 'Ярвой', 'Ярополк', 'Ярослав', 'Ярый'
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
    'super', 'mega', 'ultra', 'turbo', 'cyber', 'dark', 'wild',
    'true', 'real', 'big', 'night', 'iron', 'steel', 'golden',
    'silver', 'bear', 'wolf', 'eagle', 'storm', 'fire', 'ice'
];

const FANCY_SUFFIXES = [
    'master', 'pro', 'warrior', 'hero', 'knight', 'soldier', 'hunter',
    'king', 'lord', 'titan', 'sage', 'craft', 'smith', 'maker',
    'keeper', 'seeker', 'dragon', 'slayer', 'breaker', 'stone', 'steel'
];

const COOL_WORDS = [
    'groza', 'ogon', 'voda', 'gora', 'zima', 'leto', 'noc',
    'luna', 'zvezda', 'sila', 'dukh', 'pesnya', 'geroi', 'sud',
    'verus', 'vikont', 'pik', 'vorop', 'raven', 'sovas', 'volkov'
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