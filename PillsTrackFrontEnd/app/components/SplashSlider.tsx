import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const { width } = Dimensions.get('window');

interface Slide {
  key: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    key: '1',
    title: 'Welcome to MyApp',
    text: 'This is a brief introduction to our app.',
    image: require('./../../assets/images/intro1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Track Your Progress',
    text: 'Monitor your daily activities and progress.',
    image: require('./../../assets/images/intro2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Stay Connected',
    text: 'Keep in touch with your friends and family.',
    image: require('./../../assets/images/intro3.png'),
    backgroundColor: '#22bcb5',
  },
];

const SplashSlider: React.FC = () => {
  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const onDone = () => {
    console.log('Intro finished.');
    // Navigate to the main app screen or perform another action
  };

  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onDone}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: width * 0.8,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default SplashSlider;
