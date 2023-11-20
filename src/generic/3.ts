/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
) {
  return Object.assign(objA, objB);
}

merge({ cake: "eclair" }, { price: 15 });
export {};
