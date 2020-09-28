## `React 2020`
React の環境構築と最新バージョンの React Router v6, Redux v4 を使います。また、Hooks, TypeScript でのコーディング、Storybook でのデザインガイドライン、jest で Unit Test を行います。

- React v16
- Redux v4
- React router v6 (new)
- TypeScript
- React Hooks
- storybook
- Material-UI v4
- jest


## `Create-react-app`
TypeScript を使用して、新しい Create React APP プロジェクトを始めます。

```
$ yarn create react-app my-app --template typescript
```

#### Create React App document
https://create-react-app.dev/docs/adding-typescript/

#### React で TypeScript を使うためのチートシート
https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets


## `Redux v4`
```
$ yarn add redux react-redux
```

#### React redux 7.2 Quick Start
https://react-redux.js.org/introduction/quick-start


## `React Router v6 new!!`

```
$ yarn add react-router@next react-router-dom@next history
```
※ 正式版が出た後は `@next` を削除してください。

#### バージョン6 の仕様以外の変更点

- コードベースが TypeScript によって書き直されました。
- バージョン5 までは純粋な JavaScript で型も DefinitelyTyped をインストールしていましたが、その必要もありません。
- IE 11 より以前のバージョンはサポートしません。
- React も Hooks が有効になった 16.8 より前のバージョンはサポートしません。

※ history パッケージが v6 では dependencies から外れているので入れる必要があります。正式版では変わる可能性はあります。

#### V6 Getting Started with React Router
https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md


## `Material UI v4`
```
yarn add @material-ui/core @material-ui/icons
```

#### Material UI Document
https://material-ui.com/ja/


## `Storybook v6`
Storybookが公式で出してるCLIを使えば簡単に作成することができます。--typeでcreate-react-app用に設定してくれます。

```
$ npx -p @storybook/cli sb init --type react_scripts
```

#### storybook-react
https://github.com/storybookjs/storybook/blob/master/app/react/README.md


## `Tools`
開発に便利なツールです。

### `React Developer Tools`
Chrome extension  
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

### `Redux DevTools`
Chrome extension  
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
