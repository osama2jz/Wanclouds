import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {Routes as Switch, Route, Navigate } from "react-router-dom";
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import { loadPosts } from "../store/posts";

function Routes(props) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadPosts());
  }, [dispatch]);

    return (
        <Switch>
          <Route path="" element={<Navigate to="/table"/>} />
          <Route path="/table" element={<Page1/>} />
          <Route path="/cards" element={<Page2/>} />
        </Switch>
    );
}

export default Routes;