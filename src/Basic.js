import { StyleSheet, Text, View } from 'react-native';

const Basic = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>기본</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
  },
  text: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

export default Basic;
