


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import FlatScreen from "./src/screens/FlatScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorCounter from "./src/screens/ColorCounter";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import Flex from "./src/screens/Flex";
const navigator = createStackNavigator(
{
	Home: HomeScreen,
	Component: ComponentScreen,
	Flat: FlatScreen,
	Counter: CounterScreen,
	Color: ColorCounter,
	Square: SquareScreen,
	Text: TextScreen,
	flex: Flex
},
{
	initialRouteName: "Home",
	defaultNavigationOptions:{
		title:"App"
	}
}
);
export default createAppContainer(navigator);