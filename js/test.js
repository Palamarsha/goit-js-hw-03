function checkStorage(storage, item) {
  let message = "";
   correctItem = item.toLowerCase; 
  if (storage.includes(correctItem)){
    message = "${item} is available to order!";
  } else {
    message = "Sorry! We are out of stock!";
  }
    return message

}
checkStorage(["apple", "plum", "pear"], "plum");
checkStorage(["apple", "plum", "pear"], "pLuM");
checkStorage(["apple", "plum", "pear"], "pear");
checkStorage(["apple", "plum", "pear"], "pEAr");
checkStorage(["apple", "plum", "pear"], "orange");
checkStorage(["apple", "plum", "pear"], "carrot");
console.log(message);