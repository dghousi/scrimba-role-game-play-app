import characterData from '/data.js'
import Character from '/Character.js'


function attack()
{
    render();
}

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

document.getElementById('attack-button').addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()