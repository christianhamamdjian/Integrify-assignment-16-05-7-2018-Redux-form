import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewPost from "./NewPost";
import SinglePost from "./SinglePost";
import PostList from "./PostList";
import EditPost from "./EditPost";

import "./App.css";

const NotFound = () => {
  return <PostList />;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="my-blog">
            <Switch>
              <Route exact strict path="/" render={props => <PostList />} />
              <Route
                exact
                strict
                path="/new-post"
                render={props => (
                  <NewPost
                    onSubmit={values => {
                      console.log("values", values);
                    }}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                strict
                path="/posts/:postId"
                render={props => (
                  <SinglePost {...props} myId={props.match.params.postId} />
                )}
              />
              <Route
                exact
                strict
                path="/posts/edit/:postId"
                render={props => (
                  <EditPost {...props} myId={props.match.params.postId} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
