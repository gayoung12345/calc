import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ title, buttonStyle, onPressBtn }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: 'red' },
        buttonStyle,
      ]}
      onPress={onPressBtn}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  onPressBtn: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#717171',
  },
  title: { color: 'white', fontSize: 50 },
});

export default Button;
