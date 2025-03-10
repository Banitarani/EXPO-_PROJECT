import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/FirebaseConfig';

const Home = () => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State for the search bar
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email || '');
    }
  }, []);

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`); // Replace this with your search functionality
  };

  const goToProfile = () => {
    router.push('/signup');
  };

  const goToIndex = () => {
    router.push('/');
  };

  return (
    <LinearGradient
      colors={['#FFDAB9', '#FF7F50', '#FF4500']} // Savory Sunset Gradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={{ flex: 1, padding: 35 }}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          {/* Profile Icon */}
          <TouchableOpacity onPress={goToProfile}>
            <Ionicons name="person-circle-outline" size={35} color="blue" />
          </TouchableOpacity>
          {/* Back to Index Icon */}
          <TouchableOpacity onPress={goToIndex}>
            <Ionicons name="arrow-back-circle-outline" size={35} color="blue" />
          </TouchableOpacity>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Hi {email}, welcome!</Text>
        <Text style={styles.tagline}>
          Make your own food, stay at <Text style={{ color: 'red' }}>home</Text>
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any recipe..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch} // Triggers search when the user presses Enter
          />
        </View>

        {/* Placeholder for Search Results */}
        <View>
          <Text style={styles.searchResultsText}>
            {searchQuery ? `Searching for: "${searchQuery}"` : ''}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;

// Styles
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
    paddingVertical: 5,// for text search any recipe
    marginBottom: 20,
    height:50,
    width:285
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
});
