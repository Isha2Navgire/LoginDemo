import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/commonStyle';
import {
  Header,
  SubHeader,
  NormalText,
} from '../../components/TextView/TextView';
import Input from '../../components/InputText/Input';
import Button from '../../components/Button/Button';
import {savedata} from '../../helper/utils';
import {
  password_length_error,
  password_match,
  show_helper_error,
  validateEmail,
} from '../../components/Error/Error';

export default class Registration extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verify_password: '',
      email: '',
      phone_no: '',
      isloading: false,
    };
  }

  register = () => {
    let entered_details = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      phone_no: this.state.phone_no,
    };
    savedata(entered_details, this.props.navigation);
  };

  render() {
    const {
      username,
      phone_no,
      password,
      verify_password,
      email,
      isloading,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.input_view}>
          <Header value={'Registration'} />
          <View style={styles.divider_style} />
        </View>
        <View style={styles.input_view}>
          <Input
            value={username}
            placeholder={'Username*'}
            onChangeText={(username) => this.setState({username})}
            type={'default'}
          />
        </View>

        <View style={styles.input_view}>
          <Input
            value={phone_no}
            placeholder={'Phone No.*'}
            onChangeText={(phone_no) => this.setState({phone_no})}
            type={'phone-pad'}
            length={10}
          />
        </View>

        <View style={styles.input_view}>
          <Input
            value={email}
            placeholder={'Email*'}
            onChangeText={(email) => this.setState({email})}
            type={'email-address'}
          />
          {email !== '' ? validateEmail(email) : null}
        </View>

        <View style={styles.input_view}>
          <Input
            value={password}
            placeholder={'Password*'}
            onChangeText={(password) => this.setState({password})}
            type={'visible-password'}
          />
          {password?password_length_error(password.length,password):null}
        </View>

        <View style={styles.input_view}>
          <Input
            value={verify_password}
            placeholder={'Re-Enter Password*'}
            onChangeText={(verify_password) => this.setState({verify_password})}
            type={'visible-password'}
          />
          {password_match(password, verify_password)}
        </View>

        <View style={styles.input_view}>
          <Button text={'REGISTER'} action={this.register} />
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      password: '',
      verify_password: '',
      email: '',
      phone_no: '',
    });
  }
}
