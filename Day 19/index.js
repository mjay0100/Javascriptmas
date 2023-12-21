const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    // Your code here
const onlySanta = arr.map((santa) => {
    if (Array.isArray(santa)) {
      return saveSanta(santa);
    } else {
      return santa === "🎅" ? santa : null;
    }
  }).filter((santa) => santa !== null); 
  return onlySanta
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))