let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown;
let callback = (a: number): number => {
  return 100 + a;
};

export { age, name, toggle, empty, notInitialize, callback };
