import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.add({ adm: this.props.adm });
  }

  render() {
    const { label, hours, minute } = this.props.adm;

    return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <View> 
            <Text style={styles.titleStyle}>
              {hours}
            </Text>

            <Text style={styles.titleStyle}>
              {minute}
            </Text>
          </View>
            <Text style={styles.titleStyle}>
              {label}
            </Text>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;