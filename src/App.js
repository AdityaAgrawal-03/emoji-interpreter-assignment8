import React, { useState } from "react";
import "./styles.css";
import emojiDatabase from "./database";

const foodEmojiDatabase = {
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box"
};

const fruitEmojiDatabase = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato"
};

const drinkEmojiDatabase = {
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": " Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Beverage Box"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var fruitsEmoji = Object.keys(fruitEmojiDatabase);
  var drinksEmoji = Object.keys(drinkEmojiDatabase);
  var foodEmoji = Object.keys(foodEmojiDatabase);

  function ChangeHandler(event) {
    // from database
    var inputEmoji = event.target.value;
    var meaning = emojiDatabase[inputEmoji];

    if (/^[a-zA-Z]+$/.test(inputEmoji)) {
      alert("Only emoji inputs are allowed!");
    } else if (/^\d+$/.test(inputEmoji)) {
      alert("Only emoji inputs are allowed!");
    } else if (meaning === undefined) {
      meaning = `Sorry, we don't have ${inputEmoji} emoji in our database`;
    }

    setMeaning(meaning);
  }

  function fruitClickHandler(item) {
    //from fruit emoji database
    var meaning = fruitEmojiDatabase[item];

    setMeaning(meaning);
  }

  function drinkClickHandler(item) {
    // from drink emoji database
    var meaning = drinkEmojiDatabase[item];

    setMeaning(meaning);
  }

  function foodClickHandler(item) {
    // from food emoji database
    var meaning = foodEmojiDatabase[item];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food and Drink Emoji Interpreter</h1>
      <h1>Enter an emoji or select one from below </h1>

      <input placeholder="Please enter an emoji" onChange={ChangeHandler} />

      <h2>Meaning : {meaning}</h2>

      <div className="emoji-section fruits-emoji-section">
        <h3>Fruits </h3>
        {fruitsEmoji.map((item) => {
          return (
            <span
              className="emoji-style"
              key={item}
              onClick={() => fruitClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="emoji-section">
        <h3>Drinks</h3>

        {drinksEmoji.map((item) => {
          return (
            <span
              className="emoji-style"
              key={item}
              onClick={() => drinkClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="emoji-section">
        <h3>Foods</h3>

        {foodEmoji.map((item) => {
          return (
            <span
              className="emoji-style"
              key={item}
              onClick={() => foodClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
