import React from 'react';
// import MainHeader from './MainHeader';
// import MainFooter from './MainFooter';
import { ChildrenProps } from '../types/article-types';

const MainLayout = ({ children }: ChildrenProps) => (
  <>
    {children}
  </>
);

export default MainLayout;