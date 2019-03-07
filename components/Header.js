import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.texto}
                    placeholder="Coloca la tarea aqui..."
                    onChangeText={this.props.cambiarTexto}
                    onSubmitEditing={this.props.agregar}
                    value={this.props.texto}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fffddb',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  }
});

export default Header;
