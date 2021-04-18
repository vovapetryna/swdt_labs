function getIndex(lang) {
    if (lang === 'ru') {
        return 'https://www.epam-group.ru/';
    } else if (lang === 'en') {
        return 'https://www.epam.com/';
    } else if (lang === 'ua') {
        return 'https://careers.epam.ua/';
    } else {
        return 'https://www.epam.com/';
    }
}

module.exports.getIndex = getIndex