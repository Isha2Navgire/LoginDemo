import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/commonStyle';
import {
  Header,
  SubHeader,
  NormalText,
} from '../../components/TextView/TextView';

var details = {};
export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);

    details = props.navigation.state.params.user_data;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_view}>
          <Header value={'DashBoard'} />
          <View style={styles.divider_style} />
        </View>

        <SubHeader value={`Welcome ${details.username}`} />
        <NormalText value={`Your Registered EmailId is - ${details.email}`} />
        <NormalText
          value={`Your Registered Phone Number is -  ${details.phone_no}`}
        />
      </View>
    );
  }

  componentWillUnmount() {
      
  }
}
