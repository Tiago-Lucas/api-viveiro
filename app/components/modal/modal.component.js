import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import {Button, TextButtonAdd,TextButtonSave, ButtonAdd, Input, ModalTitle} from './modal-styles' 


const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <ModalTitle>Cadastrar Planta</ModalTitle>
                <Input placeholderTextColor="#000" placeholder="Nome da Planta"/>
                <Input placeholderTextColor="#000" placeholder="Catergoria"/>
                <Input placeholderTextColor="#000" placeholder="Valor"/>
                <Input placeholderTextColor="#000" placeholder="Quantidade"/>

            <Button onPress={()=> {
                alert('Planta Adicionada')
                setModalVisible(!modalVisible)
                }} >
                <TextButtonSave>Salvar</TextButtonSave>
            </Button>
          </View>
        </View>
      </Modal>

      <ButtonAdd onPress={()=> {setModalVisible(true)}} >
            <TextButtonAdd>+</TextButtonAdd>
        </ButtonAdd>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default MyModal;