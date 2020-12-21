import MaterialCommunityIconsI from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeI from "react-native-vector-icons/FontAwesome";
import IoniconsI from "react-native-vector-icons/Ionicons";
import FeatherI from "react-native-vector-icons/Feather";
import AntDesignI from "react-native-vector-icons/AntDesign";
import MaterialIconsI from "react-native-vector-icons/MaterialIcons";

import React from "react";

const MaterialCommunityIcons = props => <MaterialCommunityIconsI {...props} />;
const FontAwesome = props => <FontAwesomeI {...props} />;
const Ionicons = props => <IoniconsI {...props} />;
const Feather = props => <FeatherI {...props} />;
const AntDesign = props => <AntDesignI {...props} />;
const MaterialIcons = props => <MaterialIconsI {...props} />;

export default {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
};
