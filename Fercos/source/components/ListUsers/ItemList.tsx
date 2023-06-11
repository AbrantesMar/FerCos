import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Linking } from 'react-native';
import Styles from '../../../assets/styles';

class ItemList extends Component {
    constructor(props) {
      super(props)
    }
    render(): React.ReactNode {
      return (
          <View style={ Styles.centeredView }>
          <View style={ Styles.cardView }>
            <View style={ Styles.descriptionText }>
              <Text style={ Styles.titleText }>{ this.props.user.name }</Text>
              <Text style={ Styles.titleText }>{ this.props.user.email }</Text>
              <Text style={ Styles.priceText }>{ this.props.user.login }</Text>
              <Text style={ Styles.titleText }>{ this.props.user.phone }</Text>
              <Text style={ Styles.titleText }>{ this.props.user.birthDate }</Text>
              <TouchableHighlight
                  style={ Styles.linkButton }
                  onPress={this.props.onPress}
                >
                <Text style={ Styles.textLinkButton }>Deletar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      )
    }
}

export default ItemList