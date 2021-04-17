# techtest-dng

CLI to output duplicate letters as JSON

## Running

Once built and installed (see below) you can run the cli as follows:
```
Usage:  dng-test [options] <input...>

CLI to count the duplicate letters in an input string

Arguments:
  input

Options:
  -i, --ignore-case        Ignore case of the input string
  -w, --ignore-whitespace  Ignore whitespace of the input string
  -nb, --no-banner         Suppress banner
  -V, --version            output the version number
  -h, --help               display help for command
```
## Development
### Setup

1) clone repository
```
git clone https://github.com/jcbdev/techtest-dng
```

2) install dependencies
```
yarn install
```

### Run tests

After installing dependencies you can run the tests
```
yarn test
```

### Build and install

Build the project as follows
```
yarn build
```

and install the cli globally
```
yarn add --global .
```

### Run locally

run the project locally with the following command
```
yarn start
```

example execution:
```
❯ yarn start "hello world"
yarn run v1.22.10
$ ts-node src/dng-test.ts 'hello world'
  ____   ___    ____   _____         _   _____         _   
 |  _ \ ( _ )  / ___| |_   _|__  ___| |_|_   _|__  ___| |_ 
 | | | |/ _ \/\ |  _    | |/ _ \/ __| '_ \| |/ _ \/ __| __|
 | |_| | (_>  < |_| |   | |  __/ (__| | | | |  __/\__ \ |_ 
 |____/ \___/\/\____|   |_|\___|\___|_| |_|_|\___||___/\__|
                                                           
{
  "l": 3,
  "o": 2
}
✨  Done in 1.79s.
```

### Other

run linting
```
yarn lint
```

