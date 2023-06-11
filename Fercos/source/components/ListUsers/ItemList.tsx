import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
              <Text style={ Styles.priceText }>{ this.props.user.login }</Text>
              {/* <TouchableHighlight
                  style={ Styles.linkButton }
                  onPress={ async () => {
                    const supported = await Linking.canOpenURL(this.props.data.linkUrl);
                    if (supported) {
                      await Linking.openURL(this.props.data.linkUrl);
                    }
                  }}
                >
                <Text style={ Styles.textLinkButton }>Ir para loja</Text>
              </TouchableHighlight> */}
            </View>
          </View>
        </View>
      )
    }
}

export default ItemList