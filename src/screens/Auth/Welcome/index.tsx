/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {logo2} from '../../../theme/theme';
import {Button} from '../../../components';
import * as S from './styled';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AuthStackProps} from '../../../routes/AuthStack';
import {RFValue} from 'react-native-responsive-fontsize';

interface Slide {
  key: string;
  mainText: string;
  image: number;
  highlightedText?: string;
  additionalText?: string;
  emphasizedText?: string;
  extraText?: string;
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
      mainText:
        'Olá, se você está buscando alugar um imóvel e não tem fiador, conheça a nossa ',
      highlightedText: 'Carta Fiança Locatícia',
      additionalText: '.',
      image: require('../../../assets/1.png'),
    },
    {
      key: 'two',
      mainText: 'O Mauá se responsabiliza pela ',
      highlightedText: 'fiança e caução',
      additionalText: ' do imóvel que você alugar, ',
      emphasizedText: 'sem burocracias',
      extraText: '!',
      image: require('../../../assets/2.png'),
    },
    {
      key: 'three',
      mainText: 'E o melhor, até ',
      highlightedText: '70% mais barato ',
      additionalText: 'que as outras ofertas do mercado!',
      image: require('../../../assets/3.png'),
    },
    {
      key: 'four',
      mainText: '',
      emphasizedText: 'Faça a cotação agora! ',
      extraText:
        'É rápido, fácil e confira na hora quanto fica o valor para o seu imóvel!',
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
  const isLastSlide = showStartButton && slides.length > 0;
  const renderSlide = ({item, index}: {item: Slide; index: number}) => {
    return (
      <S.SlideContainer>
        <S.Slide>
          <S.SlideImage source={item.image} />
          <View>
            <Text style={{textAlign: 'center', fontSize: RFValue(25)}}>
              {item.mainText}
              <Text style={{fontWeight: 'bold', fontSize: RFValue(25)}}>
                {item.highlightedText}
              </Text>
              {item.additionalText}
              <Text style={{fontWeight: 'bold', fontSize: RFValue(25)}}>
                {item.emphasizedText}
              </Text>
              {item.extraText}
            </Text>
          </View>
        </S.Slide>
        <S.DotTextContainer>
          <S.DotIndicators>
            {slides.map((_, i) => (
              <S.Dot key={i} active={i === index} />
            ))}
          </S.DotIndicators>
        </S.DotTextContainer>
      </S.SlideContainer>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Image
        source={logo2}
        resizeMode="contain"
        style={{alignSelf: 'center', paddingTop: 150}}
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
      <View style={{alignItems: 'center', width: '100%', bottom: '10%'}}>
        {isLastSlide && showStartButton && (
          <Button
            primary
            title="Cotar meu afiançamento"
            width="90%"
            fontWeight="600"
            onPress={handleStartButtonPress}
          />
        )}
      </View>
      <S.SkipButton onPress={handleStartButtonPress}>
        <S.SkipText>Pular para o login ou abertura de conta</S.SkipText>
      </S.SkipButton>
    </SafeAreaView>
  );
}
