# Multiplayer-spil med p5.js og socket.io

## Installation af diverse udviklingsværktøjer
1. Download og installér [Visual Studio Code](https://code.visualstudio.com/). Tilføj evt. følgende plugins:
   - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
   - [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode).
2. Download og installér [git](https://git-scm.com/downloads). 
   - Når du har downloadet og installeret `git`, da følger en ny terminal med, som kaldes `git bash`.  
   - Det kan være en fordel at benytte `git bash` i Visual Studio Code i stedet for `powershell` eller `cmd` (Kommandopromt). Man vælger `git bash` ved at trykke `Ctrl+Shift+P` og herefter søge efter `Terminal: Select Default Shell`.
3. Download og installér [node.js](https://nodejs.org/en/). Afprøv herefter installationen:
   - Åbn Visual Studio Code.
   - Vælg fanen *Terminal*.
   - Klik på *New Terminal*.
   - Skriv følgende kommando i terminal-vinduet: `node --version`. Nu skulle versionsnummeret af node.js gerne blive udskrevet i terminal-vinduet.
   - Afprøv også følgende kommando: `npm --version`. npm er node.js' package manager.
4. Installér `nodemon` med kommandoen `npm install -g nodemon`.
5. Et nyttigt værktøj til at se og redigere md-filer (Markdown) med er `grip`. 
   - Installér det med følgende kommando: `pip install grip`. Dette forudsætter, at du har `python` og `pip` installeret.
   - Afprøv `grip` med kommandoen `grip -b README.md`.

## Download dette projekt
Da du læser denne README.md, har du allerede downloadet projektet :-).

## Opsætning af dette projekt
1. Benyt nu kommandoen `cd` i terminal-vinduet til at stille dig i roden af projekt-mappen.
2. Skriv kommandoen `npm install`. Nu bliver alle afhængigheder hentet ned og sat op.

## Afprøv dette projekt
Man kan starte webserveren med kommandoen `node index.js`.



