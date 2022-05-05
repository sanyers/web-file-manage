// 防抖
export const debounce = (fn, delay = 300) => {
  //默认300毫秒
  let timer;
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 节流
export const throttle = (fn, delay) => {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
};
