let products = [
    { product: 'Gummy Worms', price: 5.79 },
    { product: 'Plain M&Ms', price: 2.89 },
    { product: 'Peanut M&Ms', price: 2.89 },
    { product: 'Swedish Fish', price: 3.79 },
    { product: 'Jelly Beans', price: 3.5 },
    { product: 'Candy Corn', price: 2.5 },
    { product: 'Sour Patch Kids', price: 4.19 },
    { product: 'Lollipops', price: 0.99 },
    { product: 'Mazapan', price: 1.49 },
    { product: 'Hersheys', price: 1.99 },
  ];
  
  let cheapCandiesUnder4 = products.filter(candy => candy.price < 4);
  console.log('Cheap candies less than $4:');
  console.table(cheapCandiesUnder4);
  
  let mmCandies = products.filter(candy => candy.product.includes('M&M'));
  console.log('Candies that have "M&M" in their name:');
  console.table(mmCandies);
  
  let carriesSwedishFish = products.filter(candy => candy.product === 'Swedish Fish');
  console.log('Do we carry "Swedish Fish"?', carriesSwedishFish ? 'Yes' : 'No');
  