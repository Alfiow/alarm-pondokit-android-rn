import React, { Component } from 'react';
import { View,  Picker } from 'react-native';
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
        const { container, styleButton, pickerStyle, wrapPicker } = styles;
        return (
            <View style={container}>
                <View>
                    <Field 
                    label="Label"
                    placeholder="..."
                    autoCorrect={true}
                    onChangeText={value => this.props.listAdd({ prop: 'label', value })}
                    value={this.props.label}
                    />
                </View>

                <View style={wrapPicker}>
                    <Picker
                    selectedValue={this.state.date}
                    onValueChange={date => this.setState({ date })}
                    style={pickerStyle}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                    <Picker
                    selectedValue={this.state.date2}
                    onValueChange={date2 => this.setState({ date2 })}
                    style={pickerStyle}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                </View>
                {/* tombol buat nambahin list */}
                <Button
                onPress={this.onButtonPress.bind(this)}
                styleButton={styleButton}
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
    wrapPicker: {
        flexDirection: 'row',
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
