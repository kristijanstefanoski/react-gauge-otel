# Simple mathematical Calculator/Evaluator

## Running for development
```bash
npm run dev
```

## Build for production
```bash
npm run build
```

## Scanning and instrumenting with OpenTelemetry enabled
First build the application with:
```bash
npm run build
```
In order to run this demo, you need a valid Agent Token stored in a file ex. `sltoken.txt`.
Then you can proceed to run `slnodejs` config command to generate a new `build session id`:
```bash
npx slnodejs config --tokenfile sltoken.txt --appName "React Calculator" --branch "master" --build 1.0.0
```
If this command ran successfully you should have `buildSessionId` file in the same folder and can continue to scan the build:
```bash
npx slnodejs scan --workspacepath ./dist --tokenfile sltoken.txt --buildsessionidfile buildSessionId --scm none --instrumentForBrowsers --enableOpenTelemetry --outputpath "sl_web"
```
**IMPORTANT**: Make sure you are running `slnodejs >= 6.1.278` with `npx`, to clear cache use `npx clear-npx-cache`.

After a successful build can you should have a resulting `sl_web` folder.

**IMPORTANT:** Do not delete `sltoken.txt` of `buildSessionId` files after the build scan, they are used in the Gauge tests.

## Running gauge tests
Make sure you have [gauge](https://docs.gauge.org/getting_started/installing-gauge.html?os=linux&language=javascript&ide=vscode) installed
on your system.

```bash
npm run test
```