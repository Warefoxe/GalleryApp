import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator';
import DetailPage from './src/pages/DetailPage';
import ImagePage from './src/pages/ImagePage';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import AppNavigator from './src/navigation/AppNavigator';
// import DetailPage from './src/pages/DetailPage';
// import ImagePage from './src/pages/ImagePage';

// const App = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
//       )
//       .then(({data}) => {
//         setPhotos(data);
//       });
//   }, []);

//   return <ImagePage photos={photos} />;
// };

// const AppNavigator = createStackNavigator(
//   {
//     Images: {
//       screen: ImagePage,
//     },
//   },
//   {
//     initialRouteName: 'Images',
//   },
// );

// const RootContainer = createAppContainer(AppNavigator);

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Images">
          <Stack.Screen name="Detail" component={DetailPage} />
          <Stack.Screen name="Images" component={ImagePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
