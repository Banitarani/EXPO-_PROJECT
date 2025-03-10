import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Index = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <LinearGradient
      colors={['#FFDAB9', '#FF7F50', '#FF4500']} // Savory Sunset Gradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 0 }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          gap: 10,
        }}
      >
        <Image 
          source={require('../assets/images/download (5).jpeg')} 
          style={{
            width: 200,
            height: 200,
            marginBottom: 10,
            borderRadius: 160,
            borderWidth: 3,
            borderColor: 'black',
          }} 
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#FFF',
            fontFamily: 'Calibri',
            textAlign: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          A World of Flavors at Your Fingertips –
           {'\n'}Khana-Bawarchi Awaits You! 
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 15,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
            borderWidth: 2,
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              color: '#FF4500',
              fontSize: 18,
              fontFamily: 'Times New Roman',
              fontWeight: 'bold',
            }}
          >
            Explore Now
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Index;
