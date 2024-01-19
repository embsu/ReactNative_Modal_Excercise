import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.centeredView}>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible} // tallettaa modalVisible-muuttujan arvon, joka tässä hetkessä false

        onRequestClose={() => { // Funktio ANDROIDIN takaisin-napille, joka sulkee modalin
          Alert.alert('Modal has been closed.'); // samalla tulee myös Alert
          setModalVisible(!modalVisible);  // muuttaa modalVisiblen staten arvon takaisin falseksi
        }}>

        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            {/* modalin näkyvä sisältö tässä */}
            <Text style={styles.modalText}>Modal auki!</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            {/* modalin sisältö loppuu tähän */}

          </View>
        </View>
      </Modal>

      {/* tämä on se nappi joka näkyy kun modal on kiinni ja jota klikkaamalla voi avata modalin */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}

        // kun painetaan show modal, asettaa modalVisible-muuttujan arvon trueksi, jolloin modal aukeaa
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#3E093B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 30, // vähän box shadowin tyylinen, näyttää kun button leijuis
  },
  buttonOpen: {
    backgroundColor: '#C393DC',
  },
  buttonClose: {
    backgroundColor: '#191E54',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;