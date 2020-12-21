import React from "react";
import { Text } from "react-native";
import { ErrorText } from "../TextView/TextView";


export function validateEmail(emailiD) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(emailiD) === false) {
      return <ErrorText value={`Invalid EmailId`}/>;
    } else {
      return null;
    }
  }


export function show_helper_error(textinput_value,fieldname){
  if(textinput_value=="" ){
   return  <ErrorText value={`${fieldname} is mandatory`}/>
}
}


export function password_length_error(length,textinput_value)
{
  if((length>=0 && length<8) || textinput_value=='')
  return  <ErrorText value={'Password min length must be atleast 8 characters'}/>

}

export function password_match(textinput_value,textinput2_value){
if(textinput_value!=textinput2_value)
return  <ErrorText value={'Password Mismatch'}/>
}


