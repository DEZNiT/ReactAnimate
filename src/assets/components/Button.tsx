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

// device dimensions
const width = Math.round(Dimensions.get('window').width);

// prop types
type ButtonProps = {
  onPress?: Function;
  title?: string;
  buttonViewStyle?: object;
  buttonTextStyle?: object;
  iconButton?: boolean; //if its an icon button
  disabled?: boolean;
  children?: React.ReactNode;
  size?: 's' | 'm' | 'l';
  type?: 'rounded' | 'square'; // square for single icon button
  shadow?: boolean;
  color?:
    | 'white'
    | 'muted'
    | 'default'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning';
  Component?: any;
};
const Button = ({
  onPress,
  title,
  buttonViewStyle,
  buttonTextStyle,
  disabled,
  children,
  color,
  size = 'l',
  shadow = true,
  type = 'rounded',
  iconButton = false,
  Component = onPress ? TouchableOpacity : View,
}: ButtonProps) => {
  // const buttonStyle = iconButton && styles['square'];
  // Checking size/type/color
  const buttonColor = color && Color[color];
  const buttonSize = size && styles[size];
  const buttonShadow = shadow && [
    {shadowColor: buttonColor},
    styles.shadowStyle,
  ];
  const combinedStyles = [
    {backgroundColor: buttonColor},
    buttonShadow,
    styles.defaultButtonStyles,
    buttonSize,
    buttonViewStyle,
  ];

  const ButtonContent = () => {
    if (iconButton) {
      return (
        <>
          <Text size={size} fontColor="white" textStyle={buttonTextStyle}>
            {title}
          </Text>
          {children}
        </>
      );
    } else {
      return (
        <>
          <Text size={size} fontColor="white" textStyle={buttonTextStyle}>
            {title}
          </Text>
        </>
      );
    }
  };

  return (
    <Component activeOpacity={1} onPress={onPress} style={combinedStyles}>
      <ButtonContent></ButtonContent>
    </Component>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },

  shadowStyle: {
    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 6.5,
    shadowOffset: {width: 1, height: 5},
  },

  s: {paddingVertical: 10, borderRadius: 10, paddingHorizontal: 12},
  m: {paddingVertical: 18, borderRadius: 15, paddingHorizontal: 20},
  l: {paddingVertical: 20, width: width * 0.85, borderRadius: 20},
});

export default Button;
