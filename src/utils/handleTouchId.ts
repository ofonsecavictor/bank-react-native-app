import {useState} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useAuth} from '../contexts/authContext';

const useBiometricAuthentication = () => {
  const {isLogged, setIsLogged} = useAuth();
  const [biometricFailed, setBiometricFailed] = useState(false);

  const authenticateWithBiometrics = ({
    promptMessage = 'Autenticar com biometria',
    cancelButtonText = 'Cancelar',
  } = {}) => {
    const rnBiometrics = new ReactNativeBiometrics();

    return new Promise((resolve, reject) => {
      rnBiometrics
        .simplePrompt({
          promptMessage,
          cancelButtonText,
        })
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            setIsLogged(true);
            resolve({success: true});
          } else {
            setBiometricFailed(true);
            reject({success: false, error: 'CANCELADO PELO USUÁRIO'});
          }
        })
        .catch(error => {
          setBiometricFailed(true);
          reject({success: false, error: 'BIOMETRIA FALHOU', rawError: error});
        });
    });
  };

  return {
    isLogged,
    biometricFailed,
    authenticateWithBiometrics,
    setBiometricFailed,
  };
};

export default useBiometricAuthentication;
