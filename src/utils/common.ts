import Taro from '@tarojs/taro'
import { get } from 'lodash'
import { BASEURL } from './CONSTANT'

type FetchType = 'GET' | 'POST' | 'PUT'

export const splitString = (str: string, maxLength: number, fix: string = '...'): string => {
    const len = str.length;
    return len > maxLength ? `${str.slice(0, maxLength)}${fix}` : str;
}

export const wrapFetch = async <T>(path: string, type: FetchType, payload?: {}) => {
    let err;
    let res;

    try {
        res = await Taro.request<T>({
            url: `${BASEURL}${path}`,
            method: type,
            data: payload
        }).then((res): T => get(res, ['data', 'data']))
    } catch (e) {
        err = e
    }
    return {err, res}
}

export const utf16toEntities = (str: string): string => {
    const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    str = str.replace(patt, (char) => {
        let H;
        let L;
        let code;
        let s;

        if (char.length === 2) {
            H = char.charCodeAt(0); // 取出高位
            L = char.charCodeAt(1); // 取出低位
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
            s = `&#${code};`;
        } else {
            s = char;
        }

        return s;
    });

    return str;
}

export const entitiestoUtf16 = (strObj: string): string => {
    const patt = /&#\d+;/g;
    const arr = strObj.match(patt) || [];

    let H;
    let L;
    let code;

    for (let i = 0; i < arr.length; i += 1) {
        code = arr[i];
        code = code.replace('&#', '').replace(';', '');
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
        // 低位
        L = ((code - 0x10000) % 0x400) + 0xDC00;
        code = `&#${code};`;
        const s = String.fromCharCode(H, L);
        strObj = strObj.replace(code, s);
    }
    return strObj;
}
