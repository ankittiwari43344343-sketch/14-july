const wishes = [
"🎉 Happy Birthday! Wishing you happiness, good health and endless success.",
"❤️ Happy Birthday! Remember, today you are loved and celebrated by the 14 July community.",
"🌸 May your birthday be filled with joy, laughter and unforgettable memories.",
"🎂 Wishing you a wonderful year full of dreams, achievements and happiness.",
"🌍 Happy Birthday! You are never alone. People around the world celebrate with you today.",
"✨ Every birthday is a new beginning. Keep smiling and keep believing in yourself.",
"💙 May your heart be filled with hope, peace and endless happiness. Happy Birthday!",
"🎈 Another year, another chance to make beautiful memories. Have an amazing birthday!",
"🥳 Today is your day! Smile, celebrate and enjoy every moment. Happy Birthday!",
"🎁 From everyone at 14 July: Happy Birthday! We wish you love, success and a beautiful future."
];

const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

document.getElementById("birthdayWish").innerText = randomWish;
