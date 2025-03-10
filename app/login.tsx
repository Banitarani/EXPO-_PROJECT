import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '@/components/MyButton';
import { useRouter, Link } from 'expo-router';
import { auth } from '@/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('User logged in successfully!');

        // Navigate to home page
        router.push({
          pathname: '/home',
          params: { email: user.email },
        });

        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <LinearGradient
    colors={['#FFDAB9', '#FF7F50', '#FF4500']} // Savory Sunset Gradient
    style={{ flex: 1 }}
    start={{ x: 0, y: 0}}
    end={{ x: 1, y: 0 }} // Transition from top to bottom
  >
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
      }}
    >
      {/* <Image source={require('../assets/images/')} 
      style={{ width: 120, height: 120, marginBottom: 10,  borderRadius:65,borderWidth:4,borderColor:"orange",}} /> */}
      <Text style={{color:"black", fontSize:30,fontWeight: 'bold', marginBottom: 10 }}>User Login</Text>
      <TextInput
        placeholder='Enter Email Address'
        value={email}
        style={{
          width: 280,
          height: 45,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
          marginBottom: 10,
          color: 'black',
        }}
        autoCapitalize='none'
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <View style={{ width: 280, marginBottom: 20 }}>
        <TextInput
          placeholder='Enter Password'
          secureTextEntry={!showPassword}
          value={password}
          style={{
            width: '100%',
            height: 45,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            color: 'black',
            paddingRight: 45, // Add padding to avoid text overlap with icon
          }}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            justifyContent: 'center',
          }}
        >
          <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={26} color="black" />
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <MyButton title='Login' onPress={handleLogin} />
      <Text style={{ fontSize: 17, color: 'black' }}>
        If you are new here, do register{' '}
        <Link
          href='/signup'
          style={{ textDecorationLine: 'underline', fontSize: 15, color: 'blue' }}
        >
          Sign Up
        </Link>
      </Text>
        <Link
          href='/'
          style={{ textDecorationLine: 'underline', fontSize: 15, color: 'blue' }}
        > Back to home
          
        </Link>
      
    </View>
    </LinearGradient>
  );
};

export default Login;
