import React, { Component, Fragment } from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import ListItems from './components/ListItems';
import './App.css'

const client = new ApolloClient({
  uri:'http://127.0.0.1:8000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <ListItems />
        </Fragment>
      </ApolloProvider>
      );
    }
}
export default App;
