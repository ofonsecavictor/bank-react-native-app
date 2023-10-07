/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {logo2} from '../../../theme/theme';
import {Button} from '../../../components';
import * as S from './styled';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AuthStackProps} from '../../../routes/AuthStack';

interface Slide {
  key: string;
  text: string;
  image: number;
}
type NavigationParam = NativeStackNavigationProp<
  AuthStackProps,
  'AuthOrSignScreen'
>;

export function InitSlider() {
  const navigation = useNavigation<NavigationParam>();
  const slides: Slide[] = [
    {
      key: 'one',
      text: 'Olá, se você está buscando alugar um imóvel e não tem fiador, conheça a nossa Carta Fiança Locatícia.',
      image: require('../../../assets/1.png'),
    },
    {
      key: 'two',
      text: 'O Mauá se responsabiliza pela fiança e caução do imóvel que você alugar, sem burocracias!',
      image: require('../../../assets/2.png'),
    },
    {
      key: 'three',
      text: 'E o melhor, até  70% mais barato que as outras ofertas do mercado!',
      image: require('../../../assets/3.png'),
    },
    {
      key: 'four',
      text: 'Faça a cotação agora! É rápido, fácil e confira na hora quanto fica o valor para o seu imóvel!',
      image: require('../../../assets/4.png'),
    },
  ];
  const handleStartButtonPress = async () => {
    try {
      await AsyncStorage.setItem('hasSeenIntro', 'true');
      navigation.navigate('AuthOrSignScreen');
    } catch (e) {
      console.log(e);
    }
  };
  const [showStartButton, setShowStartButton] = useState(false);

  const renderSlide = ({item, index}: {item: Slide; index: number}) => {
    const isLastSlide = index === slides.length - 1;
    return (
      <S.SlideContainer>
        <S.Slide>
          <S.SlideImage source={item.image} />
          <S.SlideText>{item.text}</S.SlideText>
        </S.Slide>
        <S.DotTextContainer>
          <S.DotIndicators>
            {slides.map((_, i) => (
              <S.Dot key={i} active={i === index} />
            ))}
          </S.DotIndicators>
          {isLastSlide && showStartButton && (
            <Button
              primary
              title="Cotar meu afiançamento"
              width="90%"
              fontWeight="600"
              bottom="30px"
              onPress={handleStartButtonPress}
            />
          )}
        </S.DotTextContainer>
      </S.SlideContainer>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
      }}>
      <Image
        source={logo2}
        resizeMode="contain"
        style={{alignSelf: 'center'}}
      />
      <AppIntroSlider
        data={slides}
        showDoneButton={false}
        renderItem={renderSlide}
        showNextButton={false}
        showSkipButton={false}
        showPrevButton={false}
        onSlideChange={index => {
          setShowStartButton(index === slides.length - 1);
        }}
        dotStyle={{backgroundColor: 'transparent', opacity: 0.4}}
        activeDotStyle={{backgroundColor: 'transparent', opacity: 0.4}}
      />
      <S.SkipButton onPress={handleStartButtonPress}>
        <S.SkipText>Pular para o login ou abertura de conta</S.SkipText>
      </S.SkipButton>
    </SafeAreaView>
  );
}
