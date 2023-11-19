const getHash = (str: string): number => {
    return str.split("").reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
}

export default getHash;