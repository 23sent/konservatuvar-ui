import React, { useEffect } from 'react';
import './Theme.scss';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from './routes';
import { LocalStorageKeys } from './Constants/localStorageKeys';
import { signInData } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from './Context/AuthContext';

function App() {
  const keys = Object.keys(routes);

  // const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  // useEffect(() => {
  //   const userJson = localStorage.getItem(LocalStorageKeys.USER_INFO);
  //   const user = JSON.parse(userJson);
  //   const token = JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN));
  //   if (token && user?.id) {
  //     dispatch(signInData(user, token));
  //   }
  // }, []);

  const token = localStorage.getItem(LocalStorageKeys.TOKEN);

  return (
    <>
      <AuthContext.Provider value={token}>
        <Router>
          <Routes>
            {keys.map((layoutName) => {
              let layout = routes[layoutName];
              return routes[layoutName].children.map((route, index) => {
                return (
                  <Route element={<route.routeLayout />}>
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.path}
                      element={
                        <layout.component>
                          <route.component />
                        </layout.component>
                      }
                    />
                  </Route>
                );
              });
            })}
            <Route path="*" children={() => <>Not Found</>} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
