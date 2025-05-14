import { StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../colors';

const InputBar = ({ 
  value, 
  onChangeText, 
  placeholder, 
  width, 
  editable = true,
  multiline = false,
  dataType = 'text'
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { width: width || '100%' },
          multiline && styles.multiline,
          !editable && styles.disabled
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.secondary}
        editable={editable}
        multiline={multiline}
        keyboardType={dataType === 'number' ? 'decimal-pad' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    backgroundColor: colors.surface,
    color: colors.text.primary,
    fontSize: 16,
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  multiline: {
    height: 100,
    paddingTop: 12,
    paddingBottom: 12,
    textAlignVertical: 'top',
  },
  disabled: {
    backgroundColor: colors.surface,
    color: colors.text.disabled,
  }
});

export default InputBar;