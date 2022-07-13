//Problem1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//1.1
const doubleObj = (obj) => {
  return obj.map((e) => {
    return { quantity: e.quantity * 2, price: e.price * 2 };
  });
};

console.log(
  "1.1. New array which doubles the quantity and price: \n",
  doubleObj(itemsObject)
);
//1.2
const filterObj = (obj) => {
  return obj.filter((e) => {
    return e.quantity > 2 && e.price > 300;
  });
};

console.log(
  "1.2. New array which contains item quantity > 2 and price > 300 only: \n",
  filterObj(itemsObject)
);
//1.3
const totalValue = (obj) => {
  return obj.reduce((total, e) => {
    return (total += e.quantity * e.price);
  }, 0);
};
console.log(
  "1.3. Calculate the total value of the items by implementing a function. Total value is:\n" +
    totalValue(itemsObject)
);
//Problem 2
const string = `Perhaps The Easiest-to-understand    Case    For Reduce Is    To Return The Sum Of   All The Elements In   An Array`;
/**Given the string, implement a function to remove all the non-alphabet characters and
extra space in the string and convert the string to all lowercase. */
const regex = /[^A-Za-z0-9]\s+/g;

const newStr = () => {
  return string.replace(regex, "").trim().toLowerCase();
};
console.log("2.New String: \n" + newStr());

//Problem 3
/**Implement a function to merge two arrays of objects on uuid, but first has uuid and
name, second has uuid and role. With the not existing property, fill with null. Sort
according to uuid after merge. */
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
newArr = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push({
      uuid: arr1[i].uuid,
      name: arr1[i].name,
      role: null,
    });
  }
  for (let i = 0; i < arr1.length; i++) {
    result.push({
      uuid: arr2[i].uuid,
      name: null,
      role: arr2[i].role,
    });
  }
  result.sort((a, b) => {
    return a.uuid - b.uuid;
  });

  return result;
};
console.log(`3.Merged and sorted string:`);
console.log(newArr(first, second));
