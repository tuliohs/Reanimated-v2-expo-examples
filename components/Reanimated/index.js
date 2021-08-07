import React from 'react';
import { FlatList, StyleSheet, Text, View, LogBox } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import AnimatedStyleUpdateExample from './AnimatedStyleUpdateExample';
import AnimatedTabBarExample from './AnimatedTabBarExample';
import ScrollExample from './AnimatedScrollExample';

import ExtrapolationExample from './ExtrapolationExample';
//import WobbleExample from './WobbleExample';
import DragAndSnapExample from './DragAndSnapExample';
import ScrollEventExample from './ScrollEventExample';
import ChatHeadsExample from './ChatHeadsExample';
import MeasureExample from './MeasureExample';
import SwipeableListExample from './SwipeableListExample';
import ScrollableViewExample from './ScrollableViewExample';
import ScrollToExample from './ScrollToExample';
import LightboxExample from './LightboxExample';
//import LiquidSwipe from './LiquidSwipe';
LogBox.ignoreLogs(['Calling `getNode()`']);

const SCREENS = {
    //  DefaultAnimations: {
    //    screen: DefaultAnimations,
    //    title: '🆕 Default layout animations',
    //  },
    //  KeyframeAnimation: {
    //    screen: KeyframeAnimation,
    //    title: '🆕 Keyframe animation',
    //  },
    //  OlympicAnimation: {
    //    screen: OlympicAnimation,
    //    title: '🆕 Olympic animation'
    //  },
    //  CustomLayoutAnimation: {
    //    screen: CustomLayoutAnimationScreen,
    //    title: '🆕 Custom layout animation',
    //  },
    //  ModalNewAPI: {
    //    title: '🆕 ModalNewAPI',
    //    screen: ModalNewAPI,
    //  },
    //  SpringLayoutAnimation: {
    //    title: '🆕 Spring Layout Animation',
    //    screen: SpringLayoutAnimation,
    //  },
    //  MountingUnmounting: {
    //    title: '🆕 Mounting Unmounting',
    //    screen: MountingUnmounting,
    //  },
    //  SwipeableList: {
    //    title: '🆕 Swipeable list',
    //    screen: SwipeableList,
    //  },
    //  Modal: {
    //    title: '🆕 Modal',
    //    screen: Modal,
    //  },
    //  Carousel: {
    //    title: '🆕 Carousel',
    //    screen: Carousel,
    //  },
    AnimatedStyleUpdate: {
        screen: AnimatedStyleUpdateExample,
        title: 'Animated Style Update',
    },
    //WobbleExample: {
    //    screen: WobbleExample,
    //    title: 'Animation Modifiers (Wobble Effect)',
    //},
    DragAndSnapExample: {
        screen: DragAndSnapExample,
        title: 'Drag and Snap',
    },
    MeasureExample: {
        screen: MeasureExample,
        title: 'Synchronous Measure',
    },
    ScrollEventExample: {
        screen: ScrollEventExample,
        title: 'Scroll Events',
    },
    ChatHeadsExample: {
        screen: ChatHeadsExample,
        title: 'Chat Heads',
    },
    ScrollableToExample: {
        screen: ScrollToExample,
        title: 'scrollTo',
    },
    SwipeableListExample: {
        screen: SwipeableListExample,
        title: '(advanced) Swipeable List',
    },
    LightboxExample: {
        screen: LightboxExample,
        title: '(advanced) Lightbox',
    },
    ScrollableViewExample: {
        screen: ScrollableViewExample,
        title: '(advanced) ScrollView imitation',
    },
    AnimatedTabBarExample: {
        screen: AnimatedTabBarExample,
        title: '(advanced) Tab Bar Example',
    },
    //  LiquidSwipe: {
    //    screen: LiquidSwipe,
    //    title: 'Liquid Swipe Example',
    //  },
    ExtrapolationExample: {
        screen: ExtrapolationExample,
        title: 'Extrapolation Example',
    },
    ScrollExample: {
        screen: ScrollExample,
        title: 'Scroll Example',
    },
};

function MainScreen({ navigation }) {
    const data = Object.keys(SCREENS).map((key) => ({ key }));
    return (
        <FlatList
            style={styles.list}
            data={data}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={(props) => (
                <MainScreenItem
                    {...props}
                    screens={SCREENS}
                    onPressItem={({ key }) => navigation.navigate(key)}
                />
            )}
            renderScrollComponent={(props) => <ScrollView {...props} />}
        //ListFooterComponent={() => <LaunchReanimated1 setUseRea2={setUseRea2} />}
        />
    );
}

export function ItemSeparator() {
    return <View style={styles.separator} />;
}

export function MainScreenItem({
    item,
    onPressItem,
    screens,
}) {
    const { key } = item;
    return (
        <RectButton style={styles.button} onPress={() => onPressItem(item)}>
            <Text style={styles.buttonText}>{screens[key].title || key}</Text>
        </RectButton>
    );
}

function LaunchReanimated1(
    setUseRea2
) {
    return (
        <>
            <ItemSeparator />
            <RectButton style={styles.button} onPress={() => setUseRea2?.(false)}>
                <Text style={styles.buttonText}>👵 Reanimated 1.x Examples</Text>
            </RectButton>
        </>
    );
}

const Stack = createStackNavigator();

const Reanimated2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{ title: '🎬 Reanimated 2.x Examples' }}
                children={(props) => <MainScreen {...props} />}
            />
            {Object.keys(SCREENS).map((name) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    getComponent={() => SCREENS[name].screen}
                    options={{ title: SCREENS[name].title || name }}
                />
            ))}
        </Stack.Navigator>
    )
}

function Reanimated() {

    return (
        <NavigationContainer>
            <Reanimated2 />
            {/*<AnimatedTabBarExample />*/}
            {/*<ScrollExample />*/}
            {/*<AnimatedStyleUpdateExample />*/}
            {/*<ExtrapolationExample />*/}
            {/*<DragAndSnapExample />*/}
            {/*<ScrollEventExample/>*/}
            {/*<ChatHeadsExample />*/}
            {/*<MeasureExample />*/}
            {/*<SwipeableListExample />*/}
            {/*<ScrollableViewExample />*/}
            {/*<ScrollToExample />*/}
            {/*<LightboxExample/>*/}
            {/*<LiquidSwipe />*/}
        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    list: {
        backgroundColor: '#008001',
    },
    separator: {
        height: 1,
        backgroundColor: '#DBDBE0',
    },
    buttonText: {
        backgroundColor: 'transparent',
    },
    button: {
        flex: 1,
        height: 60,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#008001',
    },
});

export default Reanimated
