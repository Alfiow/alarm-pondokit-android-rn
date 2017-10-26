import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { listFetch } from './actions';
import ListItem from './ListItem';
import Main from './Main';

class List extends Component {
    componentWillMount() {
        this.props.listFetch();

        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ admin }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(admin);
    }

    renderRow(adm) {
        return <ListItem adm={adm} />
    }
        render(){
            const { story, storyTextt } = styles;
            return (
                <View style={story}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />

                    <View>
                        <Main />
                    </View>
                </View>
        );
    }
}

const styles = {
    story: {
        flex: 1,
        padding: 10,
        paddingRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    storyText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'black',
        fontSize: 18
    },
};

const mapStateToProps = state => {
    const admin = _.map(state.admin, (val) => {
        return {...val};
    })

    return { admin };
}

export default connect(mapStateToProps, {listFetch})(List);
