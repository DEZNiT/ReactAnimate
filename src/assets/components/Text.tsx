import React from 'react';
import {Text as RnText, StyleSheet} from 'react-native';
import {Color, Font} from '../variables';
type Props = {
  children?: React.ReactNode;
  fontColor?:
    | 'white'
    | 'muted'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning';
  fontFamily?: 'light' | 'medium' | 'regular' | 'bold';
  size?: 's' | 'm' | 'l';
  textStyle?: Object;
};

const Text = ({
  children,
  fontColor = 'default',
  fontFamily = 'regular',
  size = 'm',
  textStyle,
}: Props) => {
  // font style
  const textColor = fontColor && Color[fontColor];
  const textType = fontFamily && styles[fontFamily];
  const textSize = size && styles[size];
  // flattening
  let combinedStyle = [
    {color: textColor},
    textType,
    styles.defaultText,
    textSize,
    textStyle,
  ];

  return <RnText style={combinedStyle}>{children}</RnText>;
};

export default Text;

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    // lineHeight: 18,
    letterSpacing: 1.1,
  },
  s: {
    letterSpacing: 1,
    fontSize: 14,
  },
  m: {
    letterSpacing: 1,
    fontSize: 16,
  },
  l: {
    letterSpacing: 1.2,
    fontSize: 18,
  },

  light: {
    fontFamily: Font.fontLight,
  },
  medium: {
    fontFamily: Font.fontMedium,
  },
  regular: {
    fontFamily: Font.fontRegular,
  },
  bold: {
    fontFamily: Font.fontBold,
  },
});
