/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colors} from '../../../theme/theme';

export function InitSlider() {
  const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../../../assets/1.png'),
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../../assets/1.png'),
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../../../assets/1.png'),
    },
  ];

  const [showStartButton, setShowStartButton] = useState(false);

  const renderSlide = ({item, index}: any) => {
    const isLastSlide = index === slides.length - 1;

    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
        <View style={styles.dotTextContainer}>
          <View style={styles.dotIndicators}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === index
                    ? {backgroundColor: colors.secondary}
                    : {backgroundColor: colors.tertiary, opacity: 0.3},
                ]}
              />
            ))}
          </View>
          {isLastSlide && showStartButton && (
            <TouchableOpacity style={styles.startButton} onPress={() => {}}>
              <Text style={styles.startButtonText}>Começar</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.skipText}>
            Pular para o login ou abertura de conta
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppIntroSlider
        data={slides}
        renderItem={renderSlide}
        onSlideChange={index => {
          setShowStartButton(index === slides.length - 1);
        }}
        dotStyle={{backgroundColor: 'transparent', opacity: 0.4}}
        activeDotStyle={{backgroundColor: 'transparent', opacity: 0.4}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  dotTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  dotIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 5,
  },
  skipText: {
    fontSize: 16,
    color: colors.primary,
    bottom: 0,
  },
});
