import { StyleSheet, View, Text } from 'react-native';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>Calc App</Text>
      <Button
        title="1"
        buttonStyle={{ width: 100, height: 100 }}
        onPressBtn={() => {
          console.log('touch1');
        }}
      />
      <Button
        title="2"
        buttonStyle={{ width: 100, height: 200 }}
        onPressBtn={() => {
          console.log('touch2');
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
  },
  error: {
    color: 'red',
  },
});

export default App;
