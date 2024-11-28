import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const AboutScreen = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.textHead}>incredible-todolist</Text>
        <Text style={styles.textBody}>Jerry Xia</Text>
        <Text style={styles.textBody}>November 28, 2024</Text>
      </View>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  textHead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textBody: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

});

export default AboutScreen