import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './src/Main'
import AddForm from './src/AddForm';
import List from './src/List';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="main" component={List} title="Alarm" initial />
                <Scene key="add" component={AddForm} title="tambah alarm" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
