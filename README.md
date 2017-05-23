# Theia & Xtext Example

A Theia Application with an Xtext-based Language Server extension.

![Theia DSL Application](https://cloud.githubusercontent.com/assets/372735/25801334/6098cda2-33ed-11e7-8013-412a689edabe.png)

## Build and Run

_The build scripts assume the Theia repo checked out next to this repo_

### Build language server
```
cd io.typefox.xtext.langserver.example.parent/ &&
   ./gradlew shadowJar &&
   cd ..
```

### Build theia-extension
```
cd theia-dsl-extension/ && 
   npm install &&
   cd ..
```
### Build Theia App
```
cd theia-app/ &&
   npm install
```  
### Run The App
```
npm run start
```
