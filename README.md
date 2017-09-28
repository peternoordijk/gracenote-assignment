# Gracenote Assignment

This assignment has been created for the job application at gracenote. It fetches JSON data and shows it in a simple table view, as requested. From this table you can navigate to detail pages to see who won the medals.

## Installation

First install dependencies

```sh
$ npm install
```

Start the application by running

```sh
$ npm start
```

## Technical choices

The assigment was to create a simple component. I made some choices to make this component simple while still featuring good software architecture.

### Data management

I made the choice to use classical flux as data management. I was also thinking of using a more advanced system like MobX or Redux, but I thought they were a little bit too heavy for such a simple component.

Another option would be to use the most simple kind of implementation, that is by using only ```setState```. I might have chosen this approach if this assignment was not a way for me to show off my mad React skills.

I chose to use flux so that the component would be quite efficient while still easy to expand upon.

### Other choices

I chose to use [create-react-app](https://github.com/facebookincubator/create-react-app) because it was frankly a very easy option to quickly setup Webpack, Babel and all that...

I didn't concern myself too much with React render optimizations. The ```Container.create``` function transforms the class into a [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent). Besides, this table doesn't look like it should update itself quite often. I might have changed the ```SportRowView``` into a pure component if that was the case.

As for unit testing I was a little bit too lazy to get that off the ground. I'll just be honest about that :)
