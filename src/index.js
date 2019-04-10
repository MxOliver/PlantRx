import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/index";
import PlantRx from './components/PlantRx.jsx';

render(
<Provider store={store}>
<PlantRx />
</Provider>
, document.getElementById('root')
);
