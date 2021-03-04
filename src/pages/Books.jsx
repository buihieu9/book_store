import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import DetailBook from "./DetailBook";
Books.propTypes = {};

function Books(props) {
  return (
    <div>
      <Switch>
        <Route
          path="/books/:id"
          render={(props) => <DetailBook {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Books;
