// tady je místo pro náš program
/*1. Vytvoř program, který se zeptá uživatele ("vstup"), na jeho Jméno, Příjmení a rok narození. Na výstupu vypiš jeho Jméno Příjmení a Věk. 
Filip Procházka 30 - ukázkový výstup
2. Přidej do programu "vstup" uživatele s jeho oblíbenou barvou ("anglicky") s tím, že celý výpis s úkolu č.1. obarvíš danou barvou, ze vstupu uživatele.*/

//Vypracování bodu 1:

let vypisUdaje = document.querySelector('.vypisUdaje')
let jmenoPrijmeni = prompt('Zadej své jméno a příjmení: ')
let today = new Date()
let rokNarozeni = today.getFullYear() - Number(prompt('Zadej svůj rok narození: '))

vypisUdaje.innerHTML = 'Zadané údaje: ' + jmenoPrijmeni + ' ' + rokNarozeni + 'let'

//Vypracování bodu 2:

let zadejBarvu = prompt('Zadej svoji oblíbenou barvu anglicky (vyber pouze základní barvy): ')
//console.log(zadejBarvu)

vypisUdaje.style.color = zadejBarvu


