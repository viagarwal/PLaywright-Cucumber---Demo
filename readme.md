npm init playwright@latest
npm install --save-dev @cucumber/cucumber ts-node
npx cucumber-js src/features/*.feature 

To select an environment file at run time, set `ENV_FILE` before starting Cucumber. Relative paths are resolved from the project root; the default is `./env/.env`.

PowerShell:
```powershell
$env:ENV_FILE = "./env/.env.UAT2"
npm run cucumber
```

Bash:
```bash
ENV_FILE=./env/.env.UAT2 npm run cucumber
```
Terminal:
```
$env:ENV_FILE = ".\env\.env.UAT2"; npm run cucumber smoke
```