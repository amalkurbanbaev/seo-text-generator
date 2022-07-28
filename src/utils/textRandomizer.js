import lodash from 'lodash';

// Делает рандомизацию строки по синтаксису 'Привет, [[value1 | value2 | value3]]'
const textRandomizer = (text) => {
    let result = '';

    for (let i = 0; i < text.length; i = +1) {
        let paramsStr = '';

        if (text[i] === '[' && text[i + 1] === '[') {
            i = +1;
            while (
                i < text.length - 1 &&
                text[i] !== ']' &&
                text[i + 1] !== ']'
            ) {
                i = +1;
                paramsStr += text[i];
            }
            i += 2;
        } else {
            result += text[i];
        }

        const paramsArr = paramsStr.split('|').map((str) => str.trim());
        paramsStr = '';

        const randomItem = paramsArr[lodash.random(0, paramsArr.length - 1)];
        result += randomItem;
    }

    return result;
};

export default textRandomizer;
