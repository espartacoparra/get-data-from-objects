<h3 align="center">
  get-data-from-objects
   <br>
</h3>

<p align="center">you can get objects, arrays and primitive values from javascript objects</p>

## Table of Contents

- [Installing](#installing)
  - [Package manager](#package-manager)

## Installing

### Package manager

Using npm:

```bash
$ npm i get-data-from-objects
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { findObject } from "get-data-from-objects";
```

console.log(findObject(jsObject,"key-to-find"));

````
## Example


```js
import { findObject } from "get-data-from-objects";

const passenger = {
  name: "Espartaco",
  age: 25,
  address: { city: "Caracas", country: "Venezuela" },
};

console.log(findObject(passenger, "address"));
//result [{ city: "Caracas", country: "Venezuela" }]
```


You also can get element which share the same key

```js
import { findObject } from "get-data-from-objects";

const data = {
  passengers: [
    [
      {
        name: "Espartaco",
        age: 25,
        address: { city: "Caracas", country: "Venezuela" },
      },
      {
        name: "Carlos",
        age: 23,
        address: { city: "Santa cruz", country: "Bolivia" },
      },
    ],
  ],
};

console.log(findObject(passenger, "address"));
//result [{ city: "Caracas", country: "Venezuela" },{ city: "Santa cruz", country: "Bolivia" }]
```
````
