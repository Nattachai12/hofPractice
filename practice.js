// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
/*
  input: number array
  output: number (the count of elements that are multile of 5)

  strategy
  1. create count var.
  1. use _.each to loop through the array
  2. use if condition for element%5 === 0
  3. count ++
  4. return count
*/
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function (element) {
    if (element % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(eachFruit) {
    return eachFruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(eachFruit) {
    var fruitFirstLetter = eachFruit[0];
    return fruitFirstLetter === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return desserts.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
/*
input: array of object with price property
output: sum of prices

strategy
1. loop into product
2. create an array of prices
3. use reduce

*/
var sumTotal = function(products) {
  var prices = _.map(products, function (product) {
    return product.price;
  });
  return _.reduce(prices, function(sum, price) {
    return sum + price;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
/*
input: array of objects with type property name.
output: an obj with dessert type name as a key and count how
many of each type (value)

strategy
1. use map to get obj.type (string) in an array
2. use reduce
*/
var dessertCategories = function(desserts) {
  var types = _.map(desserts, function (dessert) {
    return dessert.type;
  });
  return _.reduce(types, function (obj, type) {
    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
    return obj;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
/*
input: an obj (movies) array with release year property (number)
output: an array containing all movie names (movie.title)
that were release between 1990 -2000

strategy
1. use reduce
How does reduce works?
  The accumulator (unique movie) starts with empty array
  if the array doesn't contain this movie title and if the movie isn't released
    in the 90s then push that movie into the array
  return uniqueMovie signify end of that iteration
*/
var ninetiesKid = function(movies) {
  return _.reduce(movies, function (uniqueMovie, movie) {
    if (!uniqueMovie.includes(movie.title) && (movie.releaseYear >= 1990
      && movie.releaseYear <= 2000)) {
      uniqueMovie.push(movie.title);
    }
    return uniqueMovie;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
/*
input: movie(obj) array and run time (number)
output: true if there is a movie with a shorter runtime
false if vice versa

strategy:
1. use reduce
How reduce works?
1. The accumulator (shortestTime) starts with false.
1st iteration: will skip the if statement because it starts with false
  then it will return comparison between current movie runtime with the timeLimit
if it's true
  2nd iteration will go into if statement and will return true from there on
if it's false
  will repeat what 1st iteration did and keep repeat until either it found a shorter
  run time or there is no shorter run time.
*/
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(shortestTime, movie) {
    if (shortestTime) {
      return true;
    }
    return movie.runtime < timeLimit;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to two places.
/* example output:
  var salePrices = applyCoupon(grocery, 0.20);
  [
    {
      id: 1,
      product: 'Pork - Loin, Boneless',
      price: 8.63
      salePrice: 6
    }
  ];
*/
/*
input: a product (obj with properties) array and a coupon in decimals (percentage) (2 decimals)
output: array of items with a new property salePrice
strategy:
  round coupon decimals to 2 places
  use _.map to iterate over array
  add new property
*/
var applyCoupon = function(grocery, coupon) {
  var discount = 1 - coupon.toFixed(2);
  return _.map(grocery, function (item) {
    item['salePrice'] = Math.floor(item.price * discount);
    return item;
  });
};

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
/*
input:  an array of fruits (string)
output: a new array with all cap fruits string
strategy
_.map to upper
*/
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function (fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
/*
input: an array of object desserts.
output: a new array of object desserts with added property (gluenFree)
any item with flour is not gluten free

strategy
1. use _.map to loop for outer array
2. if item.ingredients.includes('flour') return item[glutenfree] = false
3. otherwise true
*/
var glutenFree = function(desserts) {
  return _.map(desserts, function (item) {
    if (item.ingredients.includes('flour')) {
      item.glutenFree = false;
    } else { item.glutenFree = true; }
    return item;
  });
};