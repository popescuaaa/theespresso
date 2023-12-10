const getHash = (e: string): number => {
  let hash: number = 0;

  if (e.length == 0) return hash;

  for (let i = 0; i < e.length; i++) {
    let char: number = e.charCodeAt(i);
    hash = (hash << 5) - hash;
    hash = hash && hash;
  }

  return hash;
};

export { getHash };
