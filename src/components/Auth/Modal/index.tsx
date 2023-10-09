import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {useModal} from '../../../contexts/modalContext';
import {DoestHaveAccMessage} from './components/doestHaveAcc';
import {HaveAccountMessage} from './components/haveAccount';
import {useAuth} from '../../../contexts/authContext';

interface AuthModalProps {
  isVisible: boolean;
  dataResponse: any;
}

export function AuthModal({isVisible, dataResponse}: AuthModalProps) {
  const {toggleModal} = useModal();
  const {setIsLogged} = useAuth();

  const handleCloseModal = () => {
    toggleModal({
      Auth: {
        isOpen: false,
      },
    });
  };

  const handleAcc = () => {
    setIsLogged(true);
    handleCloseModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0}
      onBackdropPress={handleCloseModal}
      style={{margin: 0}}>
      <View style={{flex: 1}}>
        <BlurView style={{flex: 1}} blurType="light">
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            {dataResponse === false && (
              <DoestHaveAccMessage onPress={handleCloseModal} />
            )}
            {dataResponse === true && (
              <HaveAccountMessage onPress={handleAcc} />
            )}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
}
