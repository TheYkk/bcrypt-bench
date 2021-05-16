# Bcrypt hash time benchmark
This benchmark shows how much time cost per salt round.
## Test
```
yarn install

node index.js
```

## Result
CPU: AMD Ryzen™ 5 1600 3.4GHz
>Results may change depends on cpu.
```js
┌─────────┬───────────┐
│ (index) │   Time    │
├─────────┼───────────┤
│    1    │  '1 ms'   │
│    2    │  '1 ms'   │
│    3    │  '1 ms'   │
│    4    │  '1 ms'   │
│    5    │  '2 ms'   │
│    6    │  '4 ms'   │
│    7    │  '7 ms'   │
│    8    │  '15 ms'  │
│    9    │  '29 ms'  │
│   10    │  '58 ms'  │
│   11    │ '116 ms'  │
│   12    │ '234 ms'  │
│   13    │ '466 ms'  │
│   14    │ '950 ms'  │
│   15    │ '1911 ms' │
│   16    │ '3821 ms' │
└─────────┴───────────┘
```