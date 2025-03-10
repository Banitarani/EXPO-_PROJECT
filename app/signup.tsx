import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '@/components/MyButton';
import { useRouter, Link } from 'expo-router';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';


const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
   
  const handleInputChange = (setter: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => (value: any) =>{
        setter(value);
        if(errorMessage){
          setErrorMessage(null)
        }
  }

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            setSentEmail(true);
            alert('Verification email sent! Please check your inbox.');
          })
          .catch((error) => {
            setErrorMessage('Error sending verification email');
          });
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        router.push('/login'); // Navigate to login page
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const onLogin = () => {
    router.push('/login'); // Navigate to login page
  };

  return (
        <LinearGradient
        colors={['#FFDAB9', '#FF7F50', '#FF4500']} // Savory Sunset Gradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 0 }}// Transition from top to bottom
      >
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>
        Create Your Own Account
      </Text>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={handleInputChange(setEmail)}
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
      />
      <View style={{ width: 280, marginBottom: 10 }}>
        <TextInput
          placeholder='Password'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handleInputChange(setPassword)}
          style={{
            width: '100%',
            height: 45,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            color: 'black',
            paddingRight: 45,
          }}
          maxLength={8}
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
          <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ width: 280, marginBottom: 10 }}>
        <TextInput
          placeholder='Confirm Password'
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={{
            width: '100%',
            height: 45,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            color: 'black',
            paddingRight: 45,
          }}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            justifyContent: 'center',
          }}
        >
          <Icon name={showConfirmPassword ? 'visibility-off' : 'visibility'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <MyButton title={'Signup'} onPress={handleSignup} />
      <Text style={{ color: 'black', fontSize: 17 }}>
        Already have an account?{' '}
        <Link
          href='/login'
          onPress={onLogin}
          style={{ textDecorationLine: 'underline', color: 'blue' }}
        >
          Login
        </Link>
      </Text>
      {errorMessage && (
        <Text style={{ color: 'red', fontSize: 14 }}>{errorMessage}</Text>
      )}
      {sentEmail && (
        <Text style={{ color: 'green', fontSize: 14 }}>Verification email sent! Please check your inbox.</Text>
      )}
    </View>
    </LinearGradient>
  );
};

export default Signup;
