import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Text from './Text';
import {Color, Font} from '../variables';
import Components from 'src/screens/Component/Components';

// device dimensions
const width = Math.round(Dimensions.get('window').width);

// prop types
type BadgeProps = {
  onPress?: Function;
  title?: string;
  buttonViewStyle?: object;
  buttonTextStyle?: object;
  iconBadge?: boolean; //if its an icon button
  disabled?: boolean;
  children?: React.ReactNode;
  size?: 's' | 'm' | 'l';
  type?: 'rounded' | 'square'; // square for single icon button
  color?:
    | 'white'
    | 'muted'
    | 'default'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning';
  Component?: any;
  iconFamily?: string;
  iconName?: string;
};
const Badge = ({
  onPress,
  title,
  buttonViewStyle,
  buttonTextStyle,
  disabled,
  children,
  color,
  size = 'l',
  type = 'rounded',
  iconBadge = false,
  Component = onPress ? TouchableOpacity : View,
}: BadgeProps) => {
  // const buttonStyle = iconBadge && styles['square'];
  // Checking size/type/color
  const buttonColor = color && Color[color];
  const buttonSize = size && styles[size];
  const combinedStyles = [
    {backgroundColor: buttonColor},
    styles.defaultBadgeStyles,
    buttonSize,
    buttonViewStyle,
  ];

  return (
    <Component onPress={onPress} style={combinedStyles}>
      <Text size={size} fontColor="white" textStyle={buttonTextStyle}>
        {children}
        {title}
      </Text>
    </Component>
  );
};

const styles = StyleSheet.create({
  defaultBadgeStyles: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginVertical: 5,

    // shadow

    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 6.5,
    shadowOffset: {width: 1, height: 5},
  },

  s: {paddingVertical: 10, borderRadius: 10, paddingHorizontal: 10},
  m: {paddingVertical: 18, borderRadius: 15, paddingHorizontal: 20},
  l: {paddingVertical: 20, width: width * 0.85, borderRadius: 20},
});

export default Badge;
