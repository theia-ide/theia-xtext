# Theia & Xtext Example

A Theia Application with an Xtext-based Language Server extension.

## Development

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/theia-ide/theia-xtext)

... or check it out locally:

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
