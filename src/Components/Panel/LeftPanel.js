import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '../../store/actions';
import { Card, ListGroup, Nav, ProgressBar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getRandomPastelColor } from '../../Helpers/colors';
import { useAuth } from '../../Context/AuthContext';

function LeftPanel({ ...props }) {
  const categories = useSelector((state) => state.categoriesReducer?.categories);
  const dispatch = useDispatch();

  const color = getRandomPastelColor();

  const isAuth = useAuth();
  const user = useSelector((state) => state.userReducer.user);

  useLayoutEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesRequest());
    }
  }, []);

  return (
    <div
      className="bg-light shadow border-right-nc d-none d-sm-block"
      style={{ width: '300px', minWidth: '300px', borderColor: `${color}` }}
    >
      <div className="h-100 w-100">
        {isAuth && (
          <>
            <div className="h4 px-3 py-2 text-light" style={{ backgroundColor: `${color}` }}>
              İlerlemem
            </div>
            <div className="px-3 mb-4">
              <div className="fs-5 py-2 ps-2 text-center ">{user.name}</div>
              {user.answer_count > 0 ? (
                <>
                  <div className="py-2">
                    <ProgressBar className="w-100" now={(user.accuracy / user.answer_count) * 100} />
                  </div>
                  <div>
                    Doğruluk Oranım: <b>{(user.accuracy / user.answer_count).toFixed()} %</b>
                  </div>
                  <div>
                    Cevapladığım Soru Sayısı: <b>{user.answer_count}</b>
                  </div>
                </>
              ) : (
                <>
                  <div>Henüz hiçbir alıştırma yapmamışsınız.</div>
                </>
              )}
            </div>
          </>
        )}
        <div className="h4 px-3 py-2 text-light" style={{ backgroundColor: `${color}` }}>
          Kategoriler
        </div>
        <div className="left-panel-links  px-3 py-1 ">
          {categories?.length > 1 &&
            categories.map((category, index) => (
              <Nav.Item key={index} className="fs-5 py-2 ps-2">
                <Nav.Link as={NavLink} to={`/app/category/${category.id}`}>
                  {category.title}
                </Nav.Link>
              </Nav.Item>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
