# React Redux Saga Architecture Sample

Opinionated React redux saga architecture sample project (In progress)


## How to run this project

1. Fork/clone this repo to your local machine
   
2. Use yarn to install dependencies
   
   `yarn install`
   
3. Start the development server

   `yarn start`


## Design Patterns

### TODO: Flux architecture
### Container-View Pattern
The Container-View pattern or Container-Presentational is useful design pattern that can help structure
out React application as it will help divide responsibilities with ease. Although this pattern should not
be strictly enforced, it will be the basic design concept to take into account when adding new features/components.

For this project we should mainly consider _Container_ components those under the `src/pages` directory, and _View_
components all the _Container's_ children component. This is not a strict rule as you can have a _page's_ components
sub-component be a _Container_ component.

The idea is simple:

Parent/Container components will:
 - Be connected to redux.
 - Have data fetching logic (Through Redux when possible).
 - Run any complex logic needed.
 - Contain multiple _View_ components that will actually present information

Child/View components will:
 - Receive information from their parent.
 - Render information properly.
 - (Optional) have local state that can help the presentation process.

### TODO: Atomic design


## TODO: Directory/Folder structure [E]
## TODO: Routing [E]
## TODO: I18N [E]
## TODO: Services [E]
## TODO: Redux + Saga [E]

## Ant Design
Ant design is component library developed by Alibaba full of out-of-the-box, easy-to-use 
[components](https://ant.design/components/overview/) for every need. It is used in this project mainly for an 
author's preference to quickly implement UI functionality.

### Advantages
- **Accessibility/Time**: Less time worring about low-level HTML components (Buttons, select inputs, Modals, Cards, etc)
- **Breadth of components**: After installing Antd, there's no need for extra component libraries for specific use cases
  (Modals, Notifications, Grid system, Date/Time picker, etc). Antd has everything needed for an
  enterprise-level application
- **Documentation**: Ant design documentation is one of the most thorough documentations I've seen, with variety of examples
  and use cases.
- **Easy to customize (sort of)**: After the correct setup, it's so easy to override antd [default variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).
  This will create a sense of consistent style throughout the application. Everything else can be overriden through css.
  

It's possible to [customize Antd theme](https://ant.design/docs/react/customize-theme) through Webpack's less-loader.
That's the main reason to use [react-app-rewired](https://www.npmjs.com/package/react-app-rewired), so that we can make
some webpack overrides without the need of [ejecting the application](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)

## Multi Env Setup - Build
To ensure we can have multiple environments for our application, a multi-environment setup approach was considered.
With the help of [env-cmd](https://www.npmjs.com/package/env-cmd) we can use multiple `.env` files, mainly for the building 
process.

To run an environment build just run `yarn build:<environment>` for example `yarn build:staging` will look for the
`.env.staging` file to configure the build.


## Technologies
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
- [Ant Design](https://ant.design/)
- [Sass](https://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)