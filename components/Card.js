import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../colors';

function Card({ text, icon, onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
        <Feather
          style={styles.icon}
          name={icon}
          size={24}
          color={colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 16,
    shadowColor: colors.text.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  icon: {
    marginLeft: 16,
  }
});

export { Card };