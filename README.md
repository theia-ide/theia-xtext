# Theia & Xtext Example

A Theia Application with an Xtext-based Language Server extension.

## Build and Run

Build the language server
```
  cd xtext-dsl-language-server &&
  ./gradlew shadowJar &&
  cd ..
```

Build and start Theia
```
   yarn install &&
   cd app &&
   yarn start
```
