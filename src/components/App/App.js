import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import BookTree from '../BookTree/BookTree';
import RecipeBook from '../RecipeBook/RecipeBook';
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import AddRecipe from '../AddRecipe/AddRecipe';
// const client  = new ApolloClient({// uri:'your graphQL route'})

const App = () => {
  return (
    // <ApolloProvider client={/* should be 'client', no quotes */}>
    // changed 'body' back to div due to console error. unable to have a body tag as a child of a div.
    // There seem to be two routes to the same location.
    <div className='App'>
      <Switch>
        <Route
          path='/recipe-book/:bookId'
          render={({ match }) => {
            return <RecipeBook />;
          }}
        />
        <Route
          path='/add-recipe/:bookId'
          render={({ match }) => {
            return <AddRecipe />;
          }}
        />
        <Route
          path='/single-recipe/:recipeId'
          render={({ match }) => {
            return <SingleRecipe />;
          }}
        />
        <Route path='/' component={BookTree} />
      </Switch>
      <Nav />
    </div>
    // </ApolloProvider>
  );
};

export default App;
