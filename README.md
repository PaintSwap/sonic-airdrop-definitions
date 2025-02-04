# Sonic Airdrop Types & Constants (sonic-airdrop-definitions)

Sonic Airdrop `types` and `constants` available for
[<img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/JavaScript.svg" height="15"/> Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript),

[<img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" height="15"/> TypeScript](https://www.npmjs.com/package/typescript), and
[ <img src="https://avatars1.githubusercontent.com/u/28916798?s=15" height="15"/> AssemblyScript / <img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/WebAssembly.svg" height="15"/> WebAssembly](https://www.npmjs.com/package/assemblyscript).

The items in this library will allow you to interact with Sonic Airdrop via:

- Vanilla JS applications
- React, Angular, and other frontend frameworks
- NodeJS / Typescript back end services
- AssemblyScript / WebAssembly for use with [The Graph Protocol](https://github.com/graphprotocol/graph-node)'s web3 indexing


[NPMJS Package](https://www.npmjs.com/package/@paintswap/sonic-airdrop-definitions)


## Usage

If using a private repo, you may need to login first:

```shell
npm login
```

To use Sonic Airdrop types and constants in your project, first import the dev dependency:

```shell
npm install -D @paintswap/sonic-airdrop-definitions
```

```shell
yarn add -D @paintswap/sonic-airdrop-definitions
```

Once installed, the `SonicAirdropConstants`, `SonicAirdropTypes`, and `NONE` type will be exposed. You can then access the individual types from their parent.

```ts
import { SonicAirdropConstants, SonicAirdropTypes, NONE } from '@paintswap/sonic-airdrop-definitions'
const { Order, PriceLevel } = SonicAirdropTypes
```


It is also possible to import specific items directly.

```ts
import { Order, PriceLevel } from '@paintswap/sonic-airdrop-definitions/types'
```


## Development

### Build

```shell
npm run build
```

```shell
yarn build
```

### Use Locally

#### NPM

From library root:

```shell
npm link
```

From project root:

```shell
npm link @paintswap/sonic-airdrop-definitions
```


#### Yarn

From library root:

```shell
yarn link
```

From project root:

```shell
yarn link @paintswap/sonic-airdrop-definitions
```


#### Yalc

Install `yalc`

```shell
npm install -g yalc@latest
```

```shell
yarn add -g yalc@latest
```

From library root:

```shell
yalc publish
```

From project root:

```shell
yalc add @paintswap/sonic-airdrop-definitions
```


Use newly published updates to local yalc repository.

```shell
yalc update
```

Revert to NPM Repository

```shell
yalc remove @paintswap/sonic-airdrop-definitions
yarn add @paintswap/sonic-airdrop-definitions
```


### Manual Publish to NPM (--access=public needed the first time)

```shell
npm publish
```

```shell
yarn publish
```

### Via github CI

1. Push any changes to github
2. Create a new release version with `yarn version`
3. It will tag and push to Github which will trigger the CI to publish to NPM
