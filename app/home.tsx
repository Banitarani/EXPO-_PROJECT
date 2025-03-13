import { Text, View, TouchableOpacity, TextInput, StyleSheet, useWindowDimensions, Image, ScrollView } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/FirebaseConfig';

const Home = () => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();
  const router = useRouter();
  
  // ScrollView reference
  const scrollViewRef = useRef(null);
  
  // Section references
  const lunchRef = useRef(null);
  const breakfastRef = useRef(null);
  const dinnerRef = useRef(null);

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

  const scrollToSection = (ref: React.MutableRefObject<null>) => {
    if (scrollViewRef.current && ref.current) {
      ref.current.measureLayout(scrollViewRef.current, (x: any, y: any) => {
        scrollViewRef.current.scrollTo({ y, animated: true });
      });
    }
  };

  const styles = StyleSheet.create({
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: 10 },
    welcomeText: { fontSize: 20, fontWeight: 'bold' },
    tagline: { fontSize: 29, fontWeight: 'bold', marginBottom: 20 },
    searchBarContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 25, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 20, width: width * 0.85 },
    searchIcon: { marginRight: 8 },
    searchInput: { flex: 1, fontSize: 18 },
    searchResultsText: { fontSize: 18, color: '#444' },
    imageRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    imageContainer: { alignItems: 'center', marginBottom: 20, width: width / 4 },
    imageStyle: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: 'black' },
    imageText: { marginTop: 5, fontSize: 15, color: 'black', textAlign: 'center', fontWeight: 'bold' },
    scrollPrompt: { fontSize: 16, color: 'blue', textAlign: 'right', marginTop: 10 },
    sectionContainer: { marginTop: 20 },
    sectionTitle: { fontWeight: 'bold', color: 'black', fontSize: 22, marginBottom: 10, textAlign: 'left' },
  });

  return (
    <LinearGradient colors={['#FFDAB9', '#FF7F50', '#FF4500']} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
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

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any recipe..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
        </View>

        {/* Search Results */}
        <Text style={styles.searchResultsText}>{searchQuery ? `Searching for: "${searchQuery}"` : ''}</Text>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageRow}>
          {[
            { label: 'Breakfast', source: require('../assets/images/breakfast.jpeg'),ref: breakfastRef },
            { label: 'Lunch', source: require('../assets/images/lunch.jpeg'), ref: lunchRef },
            { label: 'Dinner', source: require('../assets/images/dinner.jpeg'), ref:dinnerRef},
            { label: 'Dessert', source: require('../assets/images/desert.jpeg') },
            { label: 'Fast Food', source: require('../assets/images/fastfood.jpeg') },
            { label: 'Festive', source: require('../assets/images/festive.jpeg') },
            { label: 'Soup', source: require('../assets/images/soup.jpeg') },
            { label: 'Seafood', source: require('../assets/images/seafood.jpeg') },
            { label: 'Snacks', source: require('../assets/images/snacks.jpeg') },
            { label: 'Veg', source: require('../assets/images/veg.jpeg') },
            { label: 'Non-Veg', source: require('../assets/images/nonveg.jpeg') },
          ].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => item.ref && scrollToSection(item.ref)}>
              <View style={styles.imageContainer}>
                <Image source={item.source} style={styles.imageStyle} />
                <Text style={styles.imageText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.scrollPrompt}>Scroll it!</Text>

        {/* Breakfast Section */}
        <View style={styles.sectionContainer} ref={breakfastRef}>
          <Text style={styles.sectionTitle}>Breakfast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              {[
                { label: 'Pancakes', source: require('../assets/images/pancake.jpg') },
                { label: 'Omelette', source: require('../assets/images/omlete.jpg') },
                { label: 'Toast', source: require('../assets/images/toast.jpg') },
                { label: 'Smoothie', source: require('../assets/images/smoothie.jpg') },
                { label: 'Granola', source: require('../assets/images/granola.jpg') },
                { label: 'Egg Benedict', source: require('../assets/images/egg benidict.jpg') },
                { label: 'Avocado-toast', source: require('../assets/images/avocado.jpg') },
                { label: 'Bagels', source: require('../assets/images/bagels.jpg') },
              ].map((item, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={item.source} style={styles.imageStyle} />
                  <Text style={styles.imageText}>{item.label}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Lunch Section */}
        <View style={styles.sectionContainer} ref={lunchRef}>
          <Text style={styles.sectionTitle}>Lunch</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              {[
                { label: 'Salad', source: require('../assets/images/salad.jpg') },
                { label: 'Biryani', source: require('../assets/images/biriyani.jpg') },
                { label: 'Paneer Wrap', source: require('../assets/images/paneer -wrap.jpg') },
                { label: 'Biryani', source: require('../assets/images/biriyani.jpg') },
                { label: 'Tomato Soup', source: require('../assets/images/tomato-soup.jpg') },
                { label: 'Quinoa Salad', source: require('../assets/images/quno salad.jpg') },
                { label: 'Veggie Burger', source: require('../assets/images/veggie-burgur.jpg') },
                { label: 'veg-thali', source: require('../assets/images/veg-thali.jpg') },        
              ].map((item, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={item.source} style={styles.imageStyle} />
                  <Text style={styles.imageText}>{item.label}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Dinner Section */}
        <View style={styles.sectionContainer} ref={dinnerRef}>
          <Text style={styles.sectionTitle}>Dinner</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              {[
                { label: 'Salad', source: require('../assets/images/salad.jpg') },
                { label: 'Biryani', source: require('../assets/images/biriyani.jpg') },
                { label: 'Paneer Wrap', source: require('../assets/images/paneer -wrap.jpg') },
                { label: 'Biryani', source: require('../assets/images/biriyani.jpg') },
                { label: 'Tomato Soup', source: require('../assets/images/tomato-soup.jpg') },
                { label: 'Quinoa Salad', source: require('../assets/images/quno salad.jpg') },
                { label: 'Veggie Burger', source: require('../assets/images/veggie-burgur.jpg') },
                { label: 'veg-thali', source: require('../assets/images/veg-thali.jpg') },        
              ].map((item, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={item.source} style={styles.imageStyle} />
                  <Text style={styles.imageText}>{item.label}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;
