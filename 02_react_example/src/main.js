import React from 'react';
import ReactDOM from 'react-dom';
import { CatList } from './cat-list';
import { cats } from './config';
import './style.scss';


ReactDOM.render(<CatList cats={cats} />, document.getElementById('root'));
