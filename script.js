const recipes = [
  'Spaghetti Aglio e Olio 🍝',
  'Paneer Butter Masala 🧈',
  'Chicken Biryani 🍗',
  'Veggie Stir Fry 🥦',
  'Tacos 🌮',
  'Pancakes 🥞',
  'Sushi 🍣',
  'Grilled Cheese Sandwich 🧀',
  'Chole Bhature 🍛',
  'Ramen 🍜',
  'Homemade Pizza 🍕',
  'Chocolate Brownies 🍫'
];

function suggestRecipe() {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  document.getElementById('suggestion').textContent = random;
}

function resetSuggestion() {
  document.getElementById('suggestion').textContent = "Tap the button below 👇";
}
