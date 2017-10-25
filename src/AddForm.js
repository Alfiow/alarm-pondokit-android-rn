import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Field, Button } from './component';
import { listAdd, listCreate } from './actions';

class AddForm extends Component {
    state = {
        date: '',
        date2: ''
    }

    onButtonPress() {
        const { label } = this.props;

        this.props.listCreate();
    }
    
    render() {
        const { container, styleButton, pickerStyle, wrapTextInput } = styles;
        return (
            <View style={container}>
                <Field 
                label="Label"
                placeholder="..."
                autoCorrect={true}
                onChangeText={value => this.props.listAdd({ prop: 'label', value })}
                value={this.props.label}
                />
                {/* tombol buat nambahin list */}
                <Button
                onPress={this.onButtonPress.bind(this)}
                >
                    Add
                </Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        // flexDirection: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapTextInput: {
       borderWidth: 1,
    },
    styleButton: {
        borderRadius: 5,
        padding: 3,
        alignItems: 'center',
        height: 30,
        width: 100,
        margin: 10
    },
    pickerStyle: {
        width: 80,
        height: 50,
    },
};

const mapStateToProps = (state) => {
    const { label } = state.addForm;

    return { label };  
}

export default connect(mapStateToProps, { listAdd, listCreate })(AddForm);
