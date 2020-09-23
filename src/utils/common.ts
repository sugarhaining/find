export const splitString = (str: string, maxLength: number, fix: string = '...'): string => {
    const len = str.length;
    return len > maxLength ? `${str.slice(0, maxLength)}${fix}` : str;
}