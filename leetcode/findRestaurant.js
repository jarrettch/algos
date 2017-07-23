// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];

let list1 = ["Shogun", "KFC", "Tapioca Express", "Burger King"];
let list2 = ["KFC", "Shogun", "Burger King"];

let findRestaurant = function(list1, list2) {
  let matchIndex;
  let restaurants = [];
  let winners = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        let restaurant = list1[i];
        let restaurantIndex = list1.indexOf(list1[i]) + list2.indexOf(list1[i]);
        restaurants.push({restaurant: restaurant, indexTotal: restaurantIndex});
      }
    }
  }
  restaurants.sort(function(a, b) {
    return a.indexTotal - b.indexTotal;
  });
  winners.push(restaurants[0].restaurant);
  for (let k = 1; k < restaurants.length; k++) {
    if (restaurants[0].indexTotal === restaurants[k].indexTotal) {
      winners.push(restaurants[k].restaurant);
    }
  }
  console.log(winners);
  return winners;
};

findRestaurant(list1, list2);