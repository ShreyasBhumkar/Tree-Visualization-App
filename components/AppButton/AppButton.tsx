import { Fonts } from '@/constants/theme';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { IconSymbol } from '../ui/icon-symbol';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';
export type IconPosition = 'left' | 'right';

export interface AppButtonProps {
  // Content
  title?: string;
  icon?: string;
  iconPosition?: IconPosition;
  
  // Behavior
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  showLoadingSpinner?: boolean;
  
  // Styling
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  
  // Custom styles
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
  
  // Loading spinner customization
  spinnerColor?: string;
  spinnerSize?: 'small' | 'large';
}

export function AppButton({
  // Content
  title = 'Button',
  icon,
  iconPosition = 'right',
  
  // Behavior
  onPress,
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  showLoadingSpinner = true,
  
  // Styling
  variant = 'contained',
  size = 'medium',
  color = '#007AFF',
  textColor,
  borderColor,
  backgroundColor,
  
  // Custom styles
  style,
  textStyle,
  iconStyle,
  
  // Loading spinner customization
  spinnerColor,
  spinnerSize = 'small',
}: AppButtonProps) {
  // Determine if button should be disabled
  const isDisabled = disabled || loading;
  
  // Get variant-specific colors
  const getVariantColors = () => {
    if (variant === 'outlined') {
      return {
        backgroundColor: backgroundColor || 'transparent',
        borderColor: borderColor || color,
        textColor: textColor || color,
        iconColor: color,
      };
    } else {
      return {
        backgroundColor: backgroundColor || color,
        borderColor: borderColor || color,
        textColor: textColor || '#FFFFFF',
        iconColor: '#FFFFFF',
      };
    }
  };
  
  const variantColors = getVariantColors();
  
  // Get size-specific styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: 12,
          paddingVertical: 8,
          fontSize: 14,
          minHeight: 36,
        };
      case 'large':
        return {
          paddingHorizontal: 24,
          paddingVertical: 16,
          fontSize: 18,
          minHeight: 56,
        };
      default: // medium
        return {
          paddingHorizontal: 16,
          paddingVertical: 12,
          fontSize: 16,
          minHeight: 48,
        };
    }
  };
  
  const sizeStyles = getSizeStyles();
  
  // Render content based on loading state
  const renderContent = () => {
    if (loading) {
      // Show only spinner
      if (!title && !loadingText) {
        return (
          <ActivityIndicator
            size={spinnerSize}
            color={spinnerColor || variantColors.iconColor}
          />
        );
      }
      
      // Show loading text only
      if (!showLoadingSpinner) {
        return (
          <Text style={[
            styles.text,
            {
              fontSize: sizeStyles.fontSize,
              color: variantColors.textColor,
              opacity: isDisabled ? 0.6 : 1,
            },
            textStyle
          ]}>
            {loadingText}
          </Text>
        );
      }
      
      // Show text with spinner
      return (
        <View style={styles.contentContainer}>
          {iconPosition === 'left' && (
            <ActivityIndicator
              size={spinnerSize}
              color={spinnerColor || variantColors.iconColor}
              style={[styles.icon, iconStyle as ViewStyle]}
            />
          )}
          <Text style={[
            styles.text,
            {
              fontSize: sizeStyles.fontSize,
              color: variantColors.textColor,
              opacity: isDisabled ? 0.6 : 1,
            },
            textStyle
          ]}>
            {loadingText || title}
          </Text>
          {iconPosition === 'right' && (
            <ActivityIndicator
              size={spinnerSize}
              color={spinnerColor || variantColors.iconColor}
              style={[styles.icon, iconStyle as ViewStyle]}
            />
          )}
        </View>
      );
    }
    
    // Normal state - show text and optional icon
    return (
      <View style={styles.contentContainer}>
        {icon && iconPosition === 'left' && (
          <IconSymbol
            name={icon}
            size={sizeStyles.fontSize}
            color={variantColors.iconColor}
            style={[styles.icon, iconStyle]}
          />
        )}
        <Text style={[
          styles.text,
          {
            fontSize: sizeStyles.fontSize,
            color: variantColors.textColor,
            opacity: isDisabled ? 0.6 : 1,
          },
          textStyle
        ]}>
          {title}
        </Text>
        {icon && iconPosition === 'right' && (
          <IconSymbol
            name={icon}
            size={sizeStyles.fontSize}
            color={variantColors.iconColor}
            style={[styles.icon, iconStyle]}
          />
        )}
      </View>
    );
  };
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: variantColors.backgroundColor,
          borderColor: variantColors.borderColor,
          paddingHorizontal: sizeStyles.paddingHorizontal,
          paddingVertical: sizeStyles.paddingVertical,
          minHeight: sizeStyles.minHeight,
          opacity: isDisabled ? 0.6 : 1,
        },
        variant === 'outlined' && styles.outlined,
        variant === 'contained' && styles.contained,
        style
      ]}
      onPress={isDisabled ? undefined : onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: Fonts.regular,
    // Shadow for contained variant
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  outlined: {
    elevation: 1,
    shadowOpacity: 0.05,
  },
  contained: {
    elevation: 3,
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
});
