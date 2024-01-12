export function parseStringToObj(target:any) {
  let a:any;
  if (typeof target === "object" && target !== null) {
    Reflect.ownKeys(target).forEach((key) => {
      target[key] = parseStringToObj(target[key]);
    });
  }
  if (Array.isArray(target)) {
    target.forEach((item, index) => {
      target[index] = parseStringToObj(item);
    });
  }
  try {
    a = JSON.parse(target);
    // console.log("🚀 ~ file: index1.html:16 ~ parseStringToObj ~ a:", a)
    if (typeof a === "object" && a !== null) {
      Reflect.ownKeys(a).forEach((key) => {
        a[key] = parseStringToObj(a[key]);
      });
    }

    if (Array.isArray(a)) {
      a.forEach((item, index) => {
        a[index] = parseStringToObj(item);
      });
    }
  } catch (e) {
    a = target;
    // console.log("🚀 ~ file: index1.html:24 ~ parseStringToObj ~ a:", a)
  }
  return a;
}