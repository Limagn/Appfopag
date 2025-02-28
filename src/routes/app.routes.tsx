import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Create } from "../pages/Create";
import { List } from "../pages/List";
import { Search } from "../pages/Search";
import { Total } from "../pages/Total";
import { TabIcon } from "../components/ui/TabIcon";
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  return(
    <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FFFFFF',
      tabBarInactiveTintColor: '#A8A29E',
      tabBarShowLabel: false,
      tabBarStyle: {  height: '10%', backgroundColor: '#000' },
      tabBarItemStyle: { paddingTop: 15 },
      tabBarLabelStyle: {
        marginTop: 10,
        fontSize: 11, 
      },
    }}
    >
      <Screen 
        name="Create"
        component={Create}
        options={{
          tabBarLabel: 'Cadastro de Funcionários',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome6} 
              name="add" 
              color={color} 
              focused={focused} 
              size={26}
            />
          )
        }}
      />
      <Screen 
        name="List"
        component={List}
        options={{
          tabBarLabel: 'Listar',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome5} 
              name="list-ul" 
              color={color} 
              focused={focused} 
              size={30}
            />
          ),
        }}
      />
      <Screen 
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome} 
              name="search" 
              color={color} 
              focused={focused} 
              size={24}
            />
          ),
        }}
      />
      <Screen 
        name="Total"
        component={Total}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome} 
              name="chart-pie" 
              color={color} 
              focused={focused} 
              size={24}
            />
          ),
        }}
      />
    </Navigator>
  )
}