import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../colors';

function ActionButton({ name, icon, eventHandler, disabled, variant = "primary" }) {
  return (
    <TouchableOpacity
      onPress={eventHandler}
      disabled={disabled}
      style={[
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
        disabled && styles.buttonDisabled
      ]}
    >
      <Text style={[
        styles.buttonText,
        variant === "secondary" && styles.buttonTextSecondary,
        disabled && styles.buttonTextDisabled
      ]}>
        {name}
      </Text>
      <Feather 
        name={icon} 
        size={20} 
        color={variant === "secondary" ? colors.primary : colors.secondary}
        style={styles.icon} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    paddingHorizontal: 24,
    marginTop: 16,
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  buttonDisabled: {
    backgroundColor: colors.text.disabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 12,
  },
  buttonTextSecondary: {
    color: colors.primary,
  },
  buttonTextDisabled: {
    color: colors.secondary,
  },
  icon: {
    marginLeft: 4,
  }
});

export default ActionButton;