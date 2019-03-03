import React from 'react';
import Loader from 'react-bulma-components/lib/components/loader';
import './page-loader.scss'

const PageLoader = () => (
  <div className="page-loader">
    <Loader color="primary" style={{ width: '6rem', height: '6rem', margin: '2rem auto'}} />
  </div>
)

export default PageLoader;
