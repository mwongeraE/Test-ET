export function toFixed(num: number, fixed: number = 0): string {
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return (num.toString().match(re) || [num.toString()])[0];
}

export const slugify = (value: string) => {
  return value.toLowerCase().replace(/ /g, '_').trim();
};

export const unSlugify = (value: string, {upperCase = false, separator = '_', join = ' '}: { upperCase?: boolean, separator?: string, join?: string } = {}) => {
  return value ? (value.split(separator)).map(x => upperCase ? x.toUpperCase() : capitalize(x)).join(join) : '';
};

/* tslint:disable:no-bitwise */
export const randomKeyGen = (count: number = 8): string => ('x'.repeat(count)).replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16));

export function sumBy(array: any[], iterator: (item: any) => any): number {
  let val = 0;
  array.forEach((item) => val += iterator(item));
  return val;
}

export function capitalize(str: string): string {
  return str ? str.charAt(0).toUpperCase() + (str.toLowerCase()).slice(1) : '';
}

const ObjectType = (obj: any) => Object.prototype.toString.call(obj);

export function isEmpty(obj: any) {
  if (!obj) {
    return true;
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return true;
  }

  if (ObjectType(obj) === '[object Object]') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
  } else {
    // By this point it's a valid string / number
    return false;
  }

  return true;
}
