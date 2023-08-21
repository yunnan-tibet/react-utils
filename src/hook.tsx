import { useRef } from "react";

/**
 * 节流，先执行一次
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 
 */
export const useThrottle = (fn: Function, delay: number) => {
  const { current } = useRef<any>({});// 用于防止其他hook导致的重新渲染
  // @ts-ignore
  return (...args) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      fn(...args);
    }
  }
}

/**
 * 防抖，等待时间结束再执行
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 
 */
export const useDebounce = (fn: Function, delay: number) => {
  const { current } = useRef<any>({});
  // @ts-ignore
  return (...args) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.timer = null;
      fn(...args);
    }, delay)
  }
}

/**
 * 防抖，先执行一次
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 
 */
export const useDebounceAtOnce = (fn: Function, delay: number) => {
  const { current } = useRef<any>({});
  // @ts-ignore
  return (...args) => {
    if (!current.timer) {
      fn(...args);
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay)
    } else {
      clearTimeout(current.timer);
      current.timer = setTimeout(() => {
        current.timer = null;
        fn(...args);
      }, delay)
    }
  }
}