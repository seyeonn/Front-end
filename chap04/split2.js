let s = "one, two,three  four";
let a = s.split(/[\t ,]+/);      //여러 개

for (let i = 0; i < a.length; ++i)
  console.log(a[i]);

