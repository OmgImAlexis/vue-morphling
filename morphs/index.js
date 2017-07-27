import capitalize from './capitalize';
import chop from './chop';
import currency from './currency';
import date from './date';
import json from './json';
import lowercase from './lowercase';
import reverse from './reverse';
import sandwich from './sandwich';
import uppercase from './uppercase';

export default (Vue) => {
    capitalize(Vue);
    chop(Vue);
    currency(Vue);
    date(Vue);
    json(Vue);
    lowercase(Vue);
    reverse(Vue);
    sandwich(Vue);
    uppercase(Vue);
};