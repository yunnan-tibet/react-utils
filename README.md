# szsk前端react函数库
目前主要用于集中记录项目中使用到的hook

## 使用范围
react > 16.9.0

## 使用方式
npm i @szsk/react-utils

import { hookUtils } from '@szsk/react-utils';

ts使用
```
  // tsconfig.json
  "compilerOptions": {
    "typeRoots": [
      // 加入这个进行自动提示
      "node_modules/@szsk",
    ]
  },
```

### hook
```
/**
 * 节流，hook下写法（因为作用域变更导致普通节流失效）
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 
 */
export const useThrottle = (fn: Function, delay: number)
```