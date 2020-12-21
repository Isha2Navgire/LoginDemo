import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import styles from '../../styles/commonStyle';
import {Header, SubHeader, ErrorText} from '../../components/TextView/TextView';
import Input from '../../components/InputText/Input';
import Button from '../../components/Button/Button';
import {getData} from '../../helper/utils';
import {colors} from '../../styles';
import Icon from '../../styles/Icon';
import {SCALE_4, SCALE_8} from '../../styles/spacing';
import App_String from '../../helper/constants';

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hidepassword: false,
      isloading: false,
      validate_creds: true,
      userdata: {},
    };
  }

  async componentDidMount() {
    await getData()
      .then((user_details) => {
         
        this.setState({userdata: JSON.parse(user_details)});
      })
      .catch((error) => {});
  }

  login = async() => {
    const {username, password, userdata} = this.state;
    if (!username || !password) {
      this.setState({validate_creds: false});
    } else if (userdata!=null) {
      this.validate(username,password,userdata);
    }
    else{
        await getData()
        .then((user_details) => {
          this.setState({userdata: JSON.parse(user_details)},()=>{
            this.validate(username,password,userdata);
          });
        })
        .catch((error) => {});
    }
  };

  validate=(username,password,userdata)=>{
    if (
        (username == userdata.username && password == userdata.password) ||
        (username == userdata.phone_no && password == userdata.password)
      ) {
        this.props.navigation.navigate('Dashboard', {user_data:userdata});
      } else {
        this.setState({validate_creds: false});
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_view}>
          <Header value={'Login'} />
          <View style={styles.divider_style} />
        </View>

        <ErrorText
          value={App_String.error_text}
          show={this.state.validate_creds}
        />

        <View style={styles.input_view}>
          <Input
            value={this.state.username}
            placeholder={'Username / Phone Number*'}
            onChangeText={(username) => this.setState({username})}
          />
        </View>

        <View style={styles.input_border}>
          <TextInput
            style={styles.password_input}
            selectionColor={colors.ALERT}
            value={this.state.password}
            placeholder={'Password*'}
            secureTextEntry={this.state.hidepassword}
            onChangeText={(password) => this.setState({password})}
          />
          <Icon.FontAwesome
            name={'eye'}
            size={23}
            style={{padding: SCALE_4}}
            color="grey"
            onPress={() =>
              this.setState({hidePassword: !this.state.hidePassword})
            }
          />
        </View>

        <View style={styles.input_view}>
          <Button text={'LOGIN'} action={this.login} />
        </View>

        <TouchableOpacity
          style={styles.input_view}
          onPress={() => this.props.navigation.navigate('Register')}>
          {this.state.userdata == null ? (
            <SubHeader value={'New User ? Register Here'} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  componentWillUnmount() {}
}
