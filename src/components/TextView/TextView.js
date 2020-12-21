import React from 'react';

import { View,Text } from "react-native";
import styles from "./style";

export const Header = (props)=>{
return(
<View>
    <Text style={styles.header}>
    {props.value}
    </Text>
</View>
);
}


export const SubHeader = (props)=>{
    return(
        <View>
            <Text style={styles.subheader}>
            {props.value}
            </Text>
        </View>
        );
}


export const NormalText = (props)=>{
    return(
        <View>
            <Text style={styles.normaltext}>
            {props.value}
            </Text>
        </View>
        );
}

export const ErrorText = (props)=>{
    if(!props.show){
    return(
        <View>
            <Text style={styles.error}>
            {props.value}
            </Text>
        </View>
        );
    }
    else{
        return null;
    }
}

