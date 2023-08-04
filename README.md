# SOLID Principles Tutorial
Hi there! Welcome to the SOLID Principles Tutorial.

To prepare the development environment for creating the Book Management App with NodeJS and TypeScript, follow the steps below. After that, you can go back to the SOLID Principles Tutorial article (https://dev.to/ryosuke/solid-principles-tutorial-with-nodejs-1khf) and start learning and coding.

### Preparation

1. Install NodeJS and npm:
Ensure you have NodeJS and npm (Node Package Manager) installed on your system. You can download the latest version of NodeJS from the official website (https://nodejs.org/) and npm will be automatically installed with NodeJS.

2. Create a New Project Directory:
Create a new directory for your Book Management App project and navigate into it using the terminal or command prompt.

```
mkdir book-management-app
cd book-management-app
```

3. Directory Structure:
Your project directory should have the following structure:

```
book-management-app/
├── dist/
├── src/
│   ├── app.ts
│   ├── book.ts
│   ├── bookRepository.ts
│   ├── fictionBook.ts
│   ├── nonFictionBook.ts
│   └── bookRepositoryInterface.ts
└── tsconfig.json
```

4. Initialize a New Node.js Project:
Initialize a new Node.js project using npm's `init` command. This will create a `package.json` file that will hold project dependencies and configurations.

```
npm init -y
```

5. Install TypeScript and Required Packages:
Install TypeScript and other required packages using npm.

```
npm install typescript ts-node @types/node --save-dev
```

- `typescript`: The TypeScript compiler that will help transpile TypeScript code to JavaScript.
- `ts-node`: Allows you to run TypeScript files directly without transpiling them manually.
- `@types/node`: Provides type definitions for Node.js modules when working with TypeScript.

6. Create TypeScript Configuration (tsconfig.json):
Create a `tsconfig.json` file at the root of your project. This file will hold TypeScript compiler options and settings.

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*.ts"]
}
```

In this configuration, we set the target to ES6, the module system to CommonJS (required for NodeJS), the output directory to "dist" (where transpile JavaScript files will be placed), and the source directory to "src" (where TypeScript files are located). Adjust the paths according to your directory structure.

7. Write TypeScript Files:
Write the TypeScript files for your Book Management App, including `book.ts`, `bookRepository.ts`, `fictionBook.ts`, `nonFictionBook.ts`, `bookRepositoryInterface.ts`, and `app.ts`.

8. Run the Book Management App:
In your terminal or command prompt, run the following command to start the app:

```
npx ts-node src/app.ts
```

This will execute the `app.ts` file with "ts-node," and you should see the output of the Book Management App in the console.

```
// Output (After the implementation):

> start
> ts-node app.ts

[
  Book {
    name: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    year: 1925,
    price: 15
  },
  FictionBook {
    name: 'Harry Potter',
    authorName: 'J.K. Rowling',
    year: 1997,
    price: 20
  },
  NonFictionBook {
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    authorName: 'Héctor García and Francesc Miralles',
    year: 2016,
    price: 30
  }
]

```

Your development environment is now set up, and you can start building your Book Management App using NodeJS and TypeScript. Please go back to the tutorial (https://dev.to/ryosuke/solid-principles-tutorial-with-nodejs-1khf), and enjoy coding!