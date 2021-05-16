const bcrypt = require("bcrypt");
var values = [];
for (let i = 1; i < 17; i++) {
  const time1 = new Date();
  bcrypt.hashSync(btoa(Math.random()), i);

  values.push({
    Time: new Date() - time1 + " ms",
  });
}
console.table(values);
