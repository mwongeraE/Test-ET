import { VueConstructor } from 'vue';
import { slugify, toFixed, unSlugify } from './';

export function registerGlobalFilter(Vue: VueConstructor) {
  // Slugify filter
  Vue.filter('slugify', function (value: string, obj: any, key?: string) {
    if (value) obj[key || 'slug'] = slugify(value);
  });
  // UnSlugify filter
  Vue.filter('unSlugify', function (value: string, separator: string, upperCase?: boolean) {
    if (value) return unSlugify(value, {separator, upperCase});
  });

  Vue.filter('redash', function (str: string) {
    return str ? str.replace('-', ' ') : '';
  });

  Vue.filter('date', function (str: string, sep: string = ' . ') {
    const d = new Date(str);
    const dtf = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'short', day: '2-digit'});
    const [{value: mo}, , {value: da}, , {value: ye}] = dtf.formatToParts(d);
    return `${da}${sep}${mo.toUpperCase()}${sep}${ye}`;
  });

  Vue.filter('truncate', function (text: string, max: number) {
    if (!text) return '';
    return (text.length > max) ? text.substr(0, max - 1) + '...' : text;
  });

  Vue.filter('price', function (amount: number, currency: string = 'KES') {
    if (typeof amount === 'undefined') return '';
    return Number(amount).toLocaleString('en', {currency, currencyDisplay: 'code', style: 'currency'});
  });

  Vue.filter('decimal', function (value: number | string, decimals: number = 2) {
    if (typeof value === 'number') {
      return value.toLocaleString('en-US', {minimumFractionDigits: decimals});
    }
    return value;
  });

  // Capitalize filter
  Vue.filter('capitalize', function (str: string) {
    return str ? str.charAt(0).toUpperCase() + (str.toLowerCase()).slice(1) : '';
  });

  Vue.filter('resizeId', function (str: string, length: number = 6) {
    return str ? str.substr(str.length - length) : '';
  });

  Vue.filter('truncate', function (text: string, max: number) {
    if (!text) return '';
    return (text.length > max) ? text.substr(0, max - 1) + '...' : text;
  });

  Vue.filter('shortAmt', function (num: number, digits: number) {
    if (!num) return num;
    const si = [
      {value: 1, symbol: ''},
      {value: 1E3, symbol: 'K'},
      {value: 1E6, symbol: 'M'},
      {value: 1E9, symbol: 'B'},
      {value: 1E12, symbol: 'T'}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return toFixed(num / si[i].value).replace(rx, '$1') + si[i].symbol;
  });

  Vue.filter('daysTo', function (start: string, end: string) {
    if (!start || !end) {
      return start;
    }
    let unitNum = 24 * 60 * 60 * 1000;

    const goalD = new Date(end);
    const startD = new Date(start);
    // @ts-ignore
    return Math.round(Math.abs((goalD - startD) / unitNum));
  });
}
