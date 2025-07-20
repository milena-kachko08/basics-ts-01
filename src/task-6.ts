function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// Коректні виклики з явним дженериком:
const num = getFirstElement<number>([1, 2, 3]);           // number
const str = getFirstElement<string>(["a", "b", "c"]);     // string
const bool = getFirstElement<boolean>([true, false]);     // boolean

const mixed = getFirstElement<number | string | boolean>([1, "a", true]); 

