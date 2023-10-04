import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestauranteDetalhes from "../RestauranteDetalhes/RestauranteDetalhes";

// ROTAS
import Restaurantes from "../Restaurantes/Restaurantes";

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Restaurantes">
        <Stack.Screen name="Restaurantes" component={Restaurantes} /> 
         <Stack.Screen name="RestauranteDetalhes" component={RestauranteDetalhes} />   
         {/* <Stack.Screen name="" component={} />   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}