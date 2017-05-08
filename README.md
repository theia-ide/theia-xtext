# Theia & Xtext Example

A Theia Application with an Xtext-based Language Server extension.

## Build and Run

_The build scripts assume the Theia repo checked out next to this repo_

### Build language server
```
cd io.typefox.xtext.langserver.example.parent/ 
  && ./gradlew shadowJar 
  && cd ..
```

### Build theia-extension
```
cd theia-dsl-extension/ 
  && npm install
  && cd ..
```
### Build Theia App
```
cd theia-app/
  && npm install
```  
### Run The App
```
npm run cold:start:web
```
