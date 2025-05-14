import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../colors';
import CustomButton from '../components/CustomButton';
import InputBar from '../components/InputBar';
import { addData } from './dbfunctions';

const HomeScreen = ({ navigation }) => {
  const [station, setStation] = useState('');
  const [traverseCount, setTraverseCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [description_1, setDescription_1] = useState('');
  const [description_2, setDescription_2] = useState('');
  const [bearingLL1, setBearingLL1] = useState('');
  const [bearingLL2, setBearingLL2] = useState('');
  const [bearingRR1, setBearingRR1] = useState('');
  const [bearingRR2, setBearingRR2] = useState('');

  const clearFields = () => {
    setDescription_1('');
    setDescription_2('');
    setBearingLL1('');
    setBearingLL2('');
    setBearingRR1('');
    setBearingRR2('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Traverse</Text>
        <Text style={styles.subtitle}>Sheet {pageNumber}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Instrument Station</Text>
          <InputBar
            placeholder="Enter station name"
            value={station}
            onChangeText={setStation}
            width="100%"
          />
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.col}>
              <InputBar
                placeholder="Description 1"
                value={description_1}
                multiline={true}
                onChangeText={setDescription_1}
              />
            </View>
            <View style={styles.bearingCol}>
              <Text style={styles.bearingLabel}>LL</Text>
              <InputBar
                placeholder="000 00 00"
                dataType="number"
                value={bearingLL1}
                onChangeText={setBearingLL1}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <InputBar
                placeholder="Description 2"
                value={description_2}
                multiline={true}
                onChangeText={setDescription_2}
              />
            </View>
            <View style={styles.bearingCol}>
              <Text style={styles.bearingLabel}>LL</Text>
              <InputBar
                placeholder="000 00 00"
                dataType="number"
                value={bearingLL2}
                onChangeText={setBearingLL2}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <InputBar
                placeholder="Description 2"
                value={description_2}
                multiline={true}
                editable={false}
              />
            </View>
            <View style={styles.bearingCol}>
              <Text style={styles.bearingLabel}>RR</Text>
              <InputBar
                placeholder="000 00 00"
                dataType="number"
                value={bearingRR1}
                onChangeText={setBearingRR1}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <InputBar
                placeholder="Description 1"
                value={description_1}
                multiline={true}
                editable={false}
              />
            </View>
            <View style={styles.bearingCol}>
              <Text style={styles.bearingLabel}>RR</Text>
              <InputBar
                placeholder="000 00 00"
                dataType="number"
                value={bearingRR2}
                onChangeText={setBearingRR2}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <CustomButton
            color={colors.primary}
            type="outline"
            text="Back"
            width="30%"
            onclick={() => setPageNumber(prev => prev - 1)}
            disabled={pageNumber === 1}
          />
          <CustomButton
            color={colors.primary}
            type="outline"
            text="Clear"
            width="30%"
            onclick={clearFields}
          />
          <CustomButton
            color={colors.primary}
            type="outline"
            text="Next"
            width="30%"
            onclick={() => {
              setTraverseCount(prev => prev + 1);
              setPageNumber(prev => prev + 1);
              setStation('');
              clearFields();
            }}
          />
        </View>

        <CustomButton
          color={colors.primary}
          text="Done"
          width="100%"
          onclick={() => navigation.navigate('TraverseAction')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text.secondary,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  col: {
    flex: 2,
  },
  bearingCol: {
    flex: 1,
  },
  bearingLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
    marginBottom: 4,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});

export default HomeScreen;