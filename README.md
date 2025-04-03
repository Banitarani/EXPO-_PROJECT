# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Expo is a framework of react native.
React native is developed by facebook for building mobile application . the main purpose is write once use both ios and android os.
<View> it is behave like div container in html.
<Text> it is use for write some text .
//  flex: 1 = by these cover total backround color without these it look like color as per writen text.work as span tag.
stack router means behave like anchor tag ,just click your link and go to another page.<Link href="/about">go to link </Link>
##                                                           (Documents of Khana khazana Project)
Index.tsx = welcome page 
This is a React Native component built using Expo and expo-router for navigation. Let's break it down:
1. Imports
import { View, Text, TouchableOpacity, Image } from 'react-native'; 
import React from 'react'; 
import { useRouter } from 'expo-router'; 
import { LinearGradient } from 'expo-linear-gradient';
View, Text, TouchableOpacity, Image → Standard React Native components for UI layout.

React → Required for using functional components.
useRouter (from expo-router) → Used for navigation between screens.
LinearGradient (from expo-linear-gradient) → Used to create a smooth gradient background.
2. Navigation Setup
const router = useRouter();  
const handleLogin = () => {     
  router.push('/login');   
};  
useRouter() → Retrieves the router object to navigate between screens.
handleLogin() → Pushes the user to the /login route when the button is clicked.
3. UI Structure
<LinearGradient       
  colors={['#FFDAB9', '#FF7F50', '#FF4500']} // Savory Sunset Gradient       
  style={{ flex: 1 }}       
  start={{ x: 0, y: 0}}       
  end={{ x: 1, y: 0 }}
>
LinearGradient creates a background with a warm gradient from Peach to Coral to Orange Red.
style={{ flex: 1 }} → Ensures the gradient covers the full screen.
start & end → Defines the direction of the gradient from left to right.
4. Centered Content Layout
<View
  style={{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  }}
>
justifyContent: 'center' → Centers content vertically.
alignItems: 'center' → Centers content horizontally.
flex: 1 → Takes up the full screen.
gap: 10 → Adds spacing between child elements.
5. Logo Image
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
source → Loads an image from local assets.
width & height → Sets image size to 200x200 px.
borderRadius: 160 → Makes the image fully rounded.
borderWidth: 3, borderColor: 'black' → Adds a black border around the image.
6. App Slogan
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
>A World of Flavors at Your Fingertips – {'\n'}Khana-Bawarchi Awaits You!
</Text>
Text component displays an app slogan.
fontSize: 18, fontWeight: 'bold' → Adjusts text styling.
color: '#FFF' → Sets text color to white.
textAlign: 'center' → Centers text.
'\n' → Adds a line break.
7. "Explore Now" Button
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
TouchableOpacity → A pressable button.
backgroundColor: '#FFF' → White button background.
borderRadius: 15 → Rounds the button corners.
shadowColor, shadowOpacity, shadowRadius, shadowOffset → Adds a subtle shadow effect.
onPress={handleLogin} → Navigates to the login page when pressed.
Text inside the button → "Explore Now" in Times New Roman font.
8.  Exporting the Component
export default Index;
export default Index → Makes the component available for import in other files.
Final Thoughts
This is a welcome screen for a food-related app, featuring: 
✅ A gradient background
✅ A rounded logo image
✅ A slogan
✅ A call-to-action button
When users press "Explore Now", they are navigated to the Login page.

##                                                                  (Login page )
This is a React Native login screen that allows users to enter their email and password to sign in using Firebase Authentication. It includes: ✅ Email and password inputs
✅ Password visibility toggle
✅ Error handling for authentication
✅ Navigation to the home screen upon successful login
✅ Links to Sign Up and Home Page
1. Imports
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '@/components/MyButton';
import { useRouter, Link } from 'expo-router';
import { auth } from '@/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
React Native Components → View, Text, TextInput, TouchableOpacity, Image for UI.
State Management → useState to store email, password, and error message.
Vector Icons → react-native-vector-icons/MaterialIcons to display password visibility toggle.
Firebase Authentication → signInWithEmailAndPassword(auth, email, password).
Expo Router → useRouter and Link for navigation.
2. State Management
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState(null);
const [showPassword, setShowPassword] = useState(false);
Stores:
email (User input)
password (User input)
errorMessage (Displays authentication errors)
showPassword (Toggles password visibility)
3. Login Function
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
Attempts login using Firebase.
If successful:
Shows an alert.
Navigates to /home, passing the user's email as a parameter.
Clears the input fields.
If an error occurs:
Displays an error message.
4. UI Design
<LinearGradient
  colors={['#FFDAB9', '#FF7F50', '#FF4500']} 
  style={{ flex: 1 }}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
Adds a gradient background from peach to coral to orange-red.
5. Input Fields
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
Email Input Field with:
Border styling.
Auto lowercase conversion.
Updates email state on change.
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
    paddingRight: 45, // Prevent text overlap with icon
  }}
  onChangeText={(text) => setPassword(text)}
/>
Password Input Field with:
secureTextEntry={!showPassword} (Toggles visibility).
paddingRight: 45 (Prevents text overlap with icon).
6. Password Visibility Toggle
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
Clicking the eye icon toggles showPassword, changing the icon between "visibility" (show password) and "visibility-off" (hide password).
7. Error Message Handling
{errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
Displays the error message if Firebase authentication fails.
8. Login Button
<MyButton title='Login' onPress={handleLogin} />
Custom button component MyButton triggers handleLogin().
9. Navigation Links
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
> 
  Back to home
</Link>
Sign-up link → Redirects to /signup.
Home link → Redirects to /.
Final Thoughts
This login screen:
Uses Firebase Authentication to log users in.
Includes a gradient background.
Has input validation and error handling.
Provides navigation links for sign-up and home.
##                                                                  (SignUp-page)
This React Native signup screen allows users to create an account using Firebase authentication. Here's a breakdown of the main features:
User Input Fields:
TextInput for email, password, and confirm password.
Visibility toggle for passwords using react-native-vector-icons/MaterialIcons.
Validation:
Ensures that password and confirm password match before proceeding.
Displays error messages when needed.
Firebase Integration:
Uses createUserWithEmailAndPassword to register users.
Sends an email verification upon successful registration.
Navigation:
Uses expo-router for navigation to login after signup.
Provides a link for users to log in if they already have an account.
UI Enhancements:
Uses expo-linear-gradient for a gradient background.
Styled buttons and text fields for a clean design.
##                                                                  (Home-page)
This is a React Native app using Expo to build a food ordering or recipe browsing app. 

1. Imports & Setup
The app imports several libraries and components:
React Native components (View, Text, TouchableOpacity, TextInput, etc.) for UI building.
Expo libraries:
expo-router for navigation.
expo-linear-gradient for background color gradient.
Ionicons (icon set) from @expo/vector-icons.
Firebase Authentication (auth) to fetch the logged-in user's email.
React Hooks:
useState: Manages component states (e.g., search input, modal visibility).
useEffect: Runs code when the component mounts (used to fetch the email).
useRef: Allows direct interaction with UI elements (scrolling to specific sections).

2. State Variables
The component Home maintains several states:
Variable	Purpose
email	Stores the logged-in user's email.
searchQuery	Stores the text entered in the search bar.
isPressed	Controls the notification toggle.
modalVisible	Shows/hides the modal when an item is clicked.
selectedItem	Stores the currently selected food item for the modal.
faqVisible	Tracks which FAQ item is expanded.
3. Searching & Scrolling
The search bar allows users to enter a category like Breakfast or Lunch.
The handleSearch() function checks the query and scrolls to the respective section.
It uses useRef to track different sections (breakfastRef, lunchRef, etc.).
scrollToSection(ref) moves the view to the selected section.
4. Notifications
When the notification icon is tapped, Notification() toggles an alert:
"Notification on!" or "Notification off!" based on isPressed.
5. Navigation
goToIndex() navigates to the homepage using Expo Router (router.push('/')).
The back arrow button triggers this function.
6. Categories & Food Items
A horizontal ScrollView displays food categories.
Clicking a category scrolls to its respective section.
Food Sections:
Each category (Breakfast, Lunch, etc.) is a section containing a horizontal ScrollView of food items.
Clicking an item:
Calls handleItemPress(item), storing the selected item.
Opens a modal displaying item details (image, price, rating).
A Close button hides the modal.
7. FAQs Section
A list of common questions.
Clicking a question toggles its answer visibility (toggleFAQ()).
8. Styles
StyleSheet.create() defines styles for layout, buttons, text, modals, etc.
Uses a gradient background with colors: #FFDAB9 (light peach) → #FF7F50 (coral) → #FF4500 (orange-red).
Key Features:
✅ Firebase Authentication – Displays user's email.
✅ Search & Scroll – Users can search and jump to specific sections.
✅ Image-Based Categories – Users can browse through food types.
✅ Modals – Clicking a food item shows a pop-up with details.
✅ Notification Toggle – Users can enable/disable notifications.
✅ FAQs – Provides answers to common questions.
Improvements:
🔹 The setSelectedItem() and setModalVisible() functions are initially unimplemented and should be removed or properly defined.
🔹 Repeated <Modal> components can be simplified into a single reusable modal component.
🔹 Navigation to another page (router.push('/')) should be dynamic for better user flow.
##                                                                    (layout-page)
This code defines a tab-based navigation structure in a React Native application using the Expo Router library, along with custom icons from Ionicons for each tab. Here's a breakdown of the code:
Key Components
Tabs Component
The main container for the tab layout.
screenOptions={{ headerShown: false }} hides the header for all screens in the tab navigator.
Individual Tab Screens
Four screens are defined: home, index, login, and signup.
Each screen is configured with a custom icon from Ionicons.
Explanation of Tab Configuration
Tabs.Screen
name: Specifies the name of each screen. This matches the route file names in your project (e.g., a file named home.js will be loaded for the home tab).
options: Used to customize the behavior and appearance of each tab.
tabBarIcon: A function that renders a custom icon for the tab.
Icon Properties:
name: Determines the icon style (e.g., "home", "list", "log-in", "person-add-outline").
color: Sets the color of the icon (blue in this case).
size: Defines the size of the icon (24 pixels in this case).
Example Behavior
When this code is executed:
A tab bar will appear at the bottom of your app.
Each tab will display a different screen (home, index, login, or signup) when selected.
Each tab will have an icon representing its purpose:
home: A home icon.
index: A list icon.
login: A log-in icon.
signup: A person-add icon.
What You Can Do Next
You can:
Customize each screen further by adding content in corresponding files (e.g., home.js, index.js).
Style the tab navigator or modify colors and sizes of the icons.
Add functionality for each tab, such as forms, lists, or other user interfaces.
##                                                                    (firebase.js)
This code initializes a Firebase app within a JavaScript/React Native project and sets up Firebase Authentication. Here's a breakdown of what each part does:
1. Import Statements
javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
initializeApp: This function initializes your Firebase app with the specified configuration details.
getAuth: This retrieves the Firebase Authentication service for use within your app.
2. Firebase Configuration
javascript
const firebaseConfig = { ... }
This firebaseConfig object contains the Firebase project-specific settings. These are required to connect your app to your Firebase project. Here's what each key-value pair represents:
apiKey: A unique key to authenticate requests to your Firebase project.
authDomain: The domain for Firebase Authentication (used in web applications for sign-in).
projectId: Your Firebase project ID, which identifies your project.
storageBucket: The Cloud Storage bucket associated with your Firebase project (used for storing files).
messagingSenderId: Sender ID for Firebase Cloud Messaging, used for push notifications.
appId: A unique identifier for this Firebase app instance.
3. Initializing the Firebase App
javascript
const app = initializeApp(firebaseConfig);
This initializes a Firebase app instance using the firebaseConfig object.
The initialized app connects your project to Firebase services.
4. Exporting Authentication Service
javascript
export const auth = getAuth(app);
Retrieves the Firebase Authentication service linked to the initialized app.
Exports it as auth, allowing you to use it throughout your project for user authentication (e.g., signing up, logging in, password resets).
Use Case
After this setup, you can use auth to handle user authentication in your app. Examples include:
Signing in a user with email/password.
Signing out a user.
Implementing third-party sign-in providers like Google or Facebook.
##                                                                 (Moral of Project)
The moral or lesson of this project is about enhancing user experience through accessibility, efficiency, and engagement in a food-related app. Here are the key takeaways:
1. User-Centric Design 
The app prioritizes ease of use, allowing users to quickly find and access meal categories.
Features like search functionality, scrolling to sections, and FAQ improve accessibility.
2. Enhancing Engagement 
Visually appealing UI (images, gradient backgrounds, and modals) makes the app more engaging.
The use of modals for item details keeps users interacting without leaving the main screen.
3. Convenience & Personalization 
Users can search for meals instead of scrolling endlessly.
Notifications allow users to stay updated on offers or recommendations.
Displaying the logged-in user’s email personalizes the experience.
4. Technology & Efficiency 
The app utilizes Firebase Authentication, improving security and usability.
React Native & Expo provide a seamless mobile experience with smooth navigation and animations.
5. Problem-Solving Approach 
Instead of overwhelming users with all food options at once, the app organizes them into categories for better navigation.
FAQs proactively address common user concerns, reducing confusion.
Final Lesson:
This project teaches that a well-structured, visually appealing, and user-friendly app can significantly improve how people interact with digital platforms—making everyday tasks (like ordering food or finding recipes) more seamless and enjoyable.