import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance",
  "😏": "Smirking",
  "🤔": "Thinking",
  "🎉": "Party Popper",
  "🧮": "Abacus",
  "☢️": "Radioactive",
  "♨️": "Hot Springs"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside Outt</h1>
      <input onChange={emojiHandler} placeholder="Paste an emoji to know its name"></input>
      <h2><span id="blocky">{meaning}</span></h2>
      <h3> Emoji's we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span id="emo-span" key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/* Things to remember
1. class --> className
2. VISER --> View -> Interact -> State in Event handler
-> Render
3. style --> takes an object instead of ""
4. key in js
5. object access in jss
*/
