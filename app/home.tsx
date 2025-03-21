import { Text, View, TouchableOpacity, TextInput, StyleSheet, useWindowDimensions, Image, ScrollView } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/FirebaseConfig';
import { Modal } from 'react-native';

function setSelectedItem(item: any) {
  throw new Error('Function not implemented.');
}

function setModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}// create these function for model . and called in model section of each and every catagory . 

const Home = () => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useWindowDimensions();
  const [isPressed, setIsPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const router = useRouter();
  // ScrollView reference
  const scrollViewRef = useRef(null);
  // Section references
  const lunchRef = useRef(null);// using useRef we can directly go to specific section ,like link with products
  const breakfastRef = useRef(null);
  const dinnerRef = useRef(null);
  const dessertRef = useRef(null);
  const fastfoodRef = useRef(null);
  const festiveRef = useRef(null);
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email || '');
    }
  }, []);
  const handleSearch = () => {//it is use for search by using useref
    if (searchQuery.toLowerCase().includes('breakfast')){
      scrollToSection(breakfastRef);
    }
    else if (searchQuery.toLowerCase().includes('lunch')){
      scrollToSection(lunchRef);
    }
    else if(searchQuery.toLowerCase().includes('dinner')){
      scrollToSection(dinnerRef);
    }
    else if(searchQuery.toLowerCase().includes('dessert')){
      scrollToSection(dessertRef);
    }
    else if (searchQuery.toLowerCase().includes('fastfood')){
     scrollToSection(fastfoodRef);
    }
    else if (searchQuery.toLowerCase().includes('festive')){
      scrollToSection(festiveRef)
    }
    else{
    console.log(`Searching for: ${searchQuery}`);
    }
  };
  const Notification = () => {
    if (isPressed) {
      alert('Notification off!');
    } else {
      alert('Notification on!');
    }
    setIsPressed(!isPressed);
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
  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
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
    imageContainer: { alignItems: 'center', marginBottom: 20, width: width / 3.5 },
    imageStyle: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: 'white' },
    imageText: { marginTop: 5, fontSize: 15, color: 'black', textAlign: 'center', fontWeight: 'bold' },
    sectionContainer: { marginTop: 20 },
    sectionTitle: { fontWeight: 'bold', color: 'black', fontSize: 22, marginBottom: 10, textAlign: 'left' },
    priceText: { color: 'black', fontSize: 14, fontWeight: 'bold' },
    ratingText: { fontSize: 16, color: 'yellow' },
    modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
    modalImage: { width: 200, height: 200, borderRadius: 10 },
    modalText: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    closeButton: { marginTop: 10, backgroundColor: 'red', padding: 10, borderRadius: 5 },
    closeButtonText: { color: 'white', fontWeight: 'bold' },
    tagtext : {color:'black' , fontWeight:'bold',fontSize:25}
  });
  return (//savery sunset gradient color
    <LinearGradient colors={['#FFDAB9', '#FF7F50', '#FF4500']} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ padding: 20 }}>
    {/* Header */}
    <View style={styles.headerRow}>
    <TouchableOpacity onPress={goToIndex}>
    <Ionicons name="arrow-back-circle-outline" size={35} color="blue" />
    </TouchableOpacity>
    <TouchableOpacity onPress={Notification}>
        <Ionicons
          name={isPressed ? "notifications" : "notifications-outline"} // Full or empty bell
          size={35}
          color="blue"
        />
      </TouchableOpacity>
    </View>
    {/* Welcome Text */}
    <Text style={styles.welcomeText}>Hi {email}, welcome! {''} 😊..</Text>
    <Text style={styles.tagline}>
          Make your own food, stay at 
             {''} <Text style={{ color: 'red' }}>home</Text> {''}
           and enjoy <Text style={{ color: 'green' }}>20% OFF!</Text> 
        </Text>
        {''}
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
    <Text style={styles.tagtext}> What's on your mind !</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageRow}>
    {[
    { label: 'Breakfast', source: require('../assets/images/breakfast.jpeg'),ref: breakfastRef, },
    { label: 'Lunch', source: require('../assets/images/lunch.jpeg'), ref: lunchRef },
    { label: 'Dinner', source: require('../assets/images/dinner.jpeg'), ref:dinnerRef},
    { label: 'Dessert', source: require('../assets/images/desert.jpeg'), ref:dessertRef },
    { label: 'Fast Food', source: require('../assets/images/fastfood.jpeg'),ref:fastfoodRef },
    { label: 'Festive', source: require('../assets/images/festive.jpeg') , ref:festiveRef},
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
    </TouchableOpacity>//We use .map() to loop through an array and create dynamic components for each item efficiently
          ))}
    </ScrollView>
    
    {/* Breakfast Section */}
    <View style={styles.sectionContainer} ref={breakfastRef}>
    <Text style={styles.sectionTitle}>Breakfast</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.imageRow}>
    {[
    { label: 'Pancakes', source: require('../assets/images/pancake.jpg'), price:'$25',rating:4.5 },
    { label: 'Omelette', source: require('../assets/images/omlete.jpg'),price:'$15',rating:4.0  },
    { label: 'Toast', source: require('../assets/images/toast.jpg') ,price:'$10',rating:4.5 },
    { label: 'Smoothie', source: require('../assets/images/smoothie.jpg'),price:'$25',rating:3.5  },
    { label: 'Granola', source: require('../assets/images/granola.jpg'),price:'$55',rating:3  },
    { label: 'Egg Benedict', source: require('../assets/images/egg benidict.jpg'),price:'$50',rating:3.2  },
    { label: 'Avocado-toast', source: require('../assets/images/avocado.jpg'),price:'$20',rating:5.0  },
    { label: 'Bagels', source: require('../assets/images/bagels.jpg') ,price:'$50',rating:4.7 },
      ].map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.imageStyle} />
          <Text style={styles.imageText}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    ))}
    </View>
    </ScrollView>
    </View>

    <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <Image source={selectedItem.source} style={styles.modalImage} />
                  <Text style={styles.modalText}>{selectedItem.label}</Text>
                  <Text style={{ fontSize: 18 }}>Price: {selectedItem.price}</Text>
                  <Text style={{ fontSize: 16 }}>⭐ Rating: {selectedItem.rating}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>

    {/* Lunch Section */}
    <View style={styles.sectionContainer} ref={lunchRef}>    
    <Text style={styles.sectionTitle}>Lunch</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.imageRow}>
    {[
    { label: 'Salad', source: require('../assets/images/salad.jpg'),price:'$5',rating:4.2  },
    { label: 'Biryani', source: require('../assets/images/biriyani.jpg') ,price:'$15',rating:4.5 },
    { label: 'Paneer Wrap', source: require('../assets/images/paneer -wrap.jpg'),price:'$55',rating:4.7  },
    { label: 'Biryani', source: require('../assets/images/biriyani.jpg') ,price:'$45',rating:4.9 },
    { label: 'Tomato Soup', source: require('../assets/images/tomato-soup.jpg'),price:'$35',rating:4.5  },
    { label: 'Quinoa Salad', source: require('../assets/images/quno salad.jpg'),price:'$55',rating:4.8  },
    { label: 'Veggie Burger', source: require('../assets/images/veggie-burgur.jpg'),price:'$65',rating:4.4  },
    { label: 'veg-thali', source: require('../assets/images/veg-thali.jpg'),price:'$95',rating:4.1  },        
    ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.imageStyle} />
        <Text style={styles.imageText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
    </View>
    <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <Image source={selectedItem.source} style={styles.modalImage} />
                  <Text style={styles.modalText}>{selectedItem.label}</Text>
                  <Text style={{ fontSize: 18 }}>Price: {selectedItem.price}</Text>
                  <Text style={{ fontSize: 16 }}>⭐ Rating: {selectedItem.rating}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
    {/* Dinner Section */}
    <View style={styles.sectionContainer} ref={dinnerRef}>
    <Text style={styles.sectionTitle}>Dinner</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.imageRow}>
     {[
    { label: 'Garden Salad', source: require('../assets/images/green-salad.jpg'), price: '$25', rating: '3.0' },
    { label: 'Paneer Wrap', source: require('../assets/images/Paneer Wrap.jpg'), price: '$47', rating: '4.0' },
    { label: 'Quinoa Salad', source: require('../assets/images/Quinoa Salad.jpg'), price: '$20', rating: '2.0' },
    { label: 'Lemon Herb Quinoa', source: require('../assets/images/Lemon Herb Quinoa.jpg'), price: '$28', rating: '4.2' },
    { label: 'Pasta Alfredo', source: require('../assets/images/Pasta Alfredo.jpg'), price: '$33', rating: '4.3' },
    { label: 'Creamy Mushroom Soup', source: require('../assets/images/Creamy Mushroom Soup.jpg'), price: '$24', rating: '4.6' },
    { label: 'Cottage Cheese Wrap', source: require('../assets/images/Cottage Cheese Wrap.jpg'), price: '$29', rating: '3.9' },
    { label: 'Mac and Cheese', source: require('../assets/images/Mac and Cheese.jpg'), price: '$27', rating: '4.4' }
     ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.imageStyle} />
          <Text style={styles.imageText}>{item.label}</Text>
        </View>
      </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
      </View>
      <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <Image source={selectedItem.source} style={styles.modalImage} />
                  <Text style={styles.modalText}>{selectedItem.label}</Text>
                  <Text style={{ fontSize: 18 }}>Price: {selectedItem.price}</Text>
                  <Text style={{ fontSize: 16 }}>⭐ Rating: {selectedItem.rating}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
      {/*dessert section */}
      <View style={styles.sectionContainer} ref={dessertRef}>
    <Text style={styles.sectionTitle}>Dessert</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.imageRow}>
     {[
    { label: 'Chocolate Lava Cake', source: require('../assets/images/Chocolate Lava Cake.jpg'), price: '$15', rating: '4.8' },
    { label: 'Cheesecake', source: require('../assets/images/Cheesecake.jpg'), price: '$18', rating: '4.7' },
    { label: 'Fruit Tart', source: require('../assets/images/Fruit Tart.jpg'), price: '$12', rating: '4.5' },
    { label: 'Ice Cream Sundae', source: require('../assets/images/Ice Cream Sundae.jpg'), price: '$10', rating: '4.6' },
    { label: 'Tiramisu', source: require('../assets/images/Tiramisu.jpg'), price: '$20', rating: '4.9' },
    { label: 'Brownies', source: require('../assets/images/Brownies.jpg'), price: '$16', rating: '4.3' },
    { label: 'Gulab Jamun', source: require('../assets/images/Gulab Jamun.jpg'), price: '$14', rating: '4.7' },
    { label: 'Rasmalai', source: require('../assets/images/Rasmalai.jpg'), price: '$13', rating: '4.8' },
    { label: 'Apple Crumble', source: require('../assets/images/Apple Crumble.jpg'), price: '$17', rating: '4.4' }
     ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.imageStyle} />
          <Text style={styles.imageText}>{item.label}</Text>
        </View>
      </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
      </View>
      <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <Image source={selectedItem.source} style={styles.modalImage} />
                  <Text style={styles.modalText}>{selectedItem.label}</Text>
                  <Text style={{ fontSize: 18 }}>Price: {selectedItem.price}</Text>
                  <Text style={{ fontSize: 16 }}>⭐ Rating: {selectedItem.rating}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
        

      </ScrollView>
      </LinearGradient>
      
  );
};

export default Home;

