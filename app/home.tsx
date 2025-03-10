import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/FirebaseConfig';

const Home = () => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions(); // Dynamically get the screen's width
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email || '');
    }
  }, []);

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const goToProfile = () => {
    router.push('/signup');
  };

  const goToIndex = () => {
    router.push('/');
  };

  // Define styles inside the component to access the `width` variable
  const styles = StyleSheet.create({
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    welcomeText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    tagline: {
      fontSize: 29,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 25,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 20,
      width: width * 0.85, // Dynamically set width
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 18,
    },
    searchResultsText: {
      fontSize: 18,
      color: '#444',
    },
    imageRow: {
      flexDirection: 'row', // Align images horizontally
      alignItems: 'center', // Vertically align items
      marginTop: 20,
    },
    imageContainer: {
      alignItems: 'center', // Center-align image and label
      marginHorizontal: 20, // Spacing between items horizontally
    },
    imageStyle: {
      width: 70, // Image width
      height: 70, // Image height
      borderRadius: 35, // Make it circular
      borderWidth: 2, // Add border
      borderColor: 'black', // Border 
    },
    imageText: {
      marginTop: 5, // Space between image and text
      fontSize: 15, // Smaller font size for labels
      color: 'black',
      textAlign: 'center', // Align text to the center
    },
  });

  return (
    <LinearGradient
      colors={['#FFDAB9', '#FF7F50', '#FF4500']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={goToProfile}>
            <Ionicons name="person-circle-outline" size={35} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToIndex}>
            <Ionicons name="arrow-back-circle-outline" size={35} color="blue" />
          </TouchableOpacity>
        </View>
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Hi {email}, welcome!</Text>
        <Text style={styles.tagline}>
          Make your own food, stay at <Text style={{ color: 'red' }}>home</Text>
        </Text>
        {/* Responsive Search Bar */}
        <View style={[styles.searchBarContainer]}>
          <Ionicons
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any recipe..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch}
          />
        </View>
        {/* Placeholder for Search Results */}
        <View>
          <Text style={styles.searchResultsText}>
            {searchQuery ? `Searching for: "${searchQuery}"` : ''}
          </Text>
        </View>
        {/* Horizontal Images with Labels */}
        <ScrollView horizontal={true} contentContainerStyle={styles.imageRow} showsHorizontalScrollIndicator={false}>
          {[
            { label: 'Breakfast', source: require('../assets/images/breakfast.jpeg') },
            { label: 'Lunch', source: require('../assets/images/lunch.jpeg') },
            { label: 'Dinner', source: require('../assets/images/dinner.jpeg') },
            { label: 'Dessert', source: require('../assets/images/desert.jpeg') },
            { label: 'Fast Food', source: require('../assets/images/fastfood.jpeg') },
            { label: 'Festive', source: require('../assets/images/festive.jpeg') },
            { label: 'Gluten Free', source: require('../assets/images/gluten free.jpeg') },
            { label: 'Keto', source: require('../assets/images/keto.jpeg') },
            { label: 'Soup', source: require('../assets/images/soup.jpeg') },
            { label: 'Pasta', source: require('../assets/images/pasta.jpeg') },
            { label: 'Seafood', source: require('../assets/images/seafood.jpeg') },
            { label: 'Snacks', source: require('../assets/images/snacks.jpeg') },
            { label: 'Veg', source: require('../assets/images/veg.jpeg') },
            { label: 'Non-Veg', source: require('../assets/images/nonveg.jpeg') },
          ].map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={item.source} style={styles.imageStyle} />
              <Text style={styles.imageText}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
