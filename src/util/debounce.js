export function debounce(func, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);

      timerId = null;
    }, delay);
  };
}
