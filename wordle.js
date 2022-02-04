var keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];
var d = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot;
for (var i = 0; i < 5; i++) {
    var s = JSON.parse(window.localStorage.gameState).solution[i];
    if (keyboard[0].indexOf(s) != -1) d.querySelector("#keyboard > div:nth-child(1)").children[keyboard[0].indexOf(s)].click();
    if (keyboard[1].indexOf(s) != -1) d.querySelector("#keyboard > div:nth-child(2)").children[keyboard[1].indexOf(s) + 1].click();
    if (keyboard[2].indexOf(s) != -1) d.querySelector("#keyboard > div:nth-child(3)").children[keyboard[2].indexOf(s) + 1].click();
}
d.querySelector("#keyboard > div:nth-child(3)").children[0].click();
