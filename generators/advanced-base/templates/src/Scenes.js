// @flow
import React from 'react';
import { StackNavigator, TabNavigator, HeaderBackButton } from 'react-navigation';

import * as Pages from './pages';
import theme from 'theme';
import I18n from 'lib/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = props => <Icon color={props.tintColor} size={30} {...props} />;

const LandingStack = StackNavigator(
  {
    landing: {
      screen: Pages.Landing,
    },
    login: {
      screen: Pages.Login,
    },
  },
  {
    initialRouteName: 'landing',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  }
);

const SignUpStack = StackNavigator(
  {
    signup: {
      screen: Pages.Signup,
      navigationOptions: props => ({
        title: I18n.t('signup.title'),
        headerLeft: (
          <HeaderBackButton
            onPress={() => {
              props.navigation.goBack(null);
            }}
            tintColor={theme.colors.overPrimary}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'signup',
    navigationOptions: {
      headerTintColor: theme.colors.overPrimary,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
    },
  }
);

const DashboardTab = TabNavigator(
  {
    home: {
      screen: Pages.Home,
      navigationOptions: {
        title: I18n.t('home.title'),
        tabBarIcon: props => <TabIcon name="home" {...props} />,
      },
    },
    account: {
      screen: Pages.Account,
      navigationOptions: {
        title: I18n.t('account.title'),
        tabBarIcon: props => <TabIcon name="account" {...props} />,
      },
    },
  },
  {
    initialRouteName: 'home',
    animationEnabled: true,
    backBehavior: 'initialRoute',
    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      pressColor: theme.colors.grayLight,
      inactiveTintColor: theme.colors.gray,
      indicatorStyle: {
        backgroundColor: theme.colors.primary,
        height: 3,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

const DashboardStack = StackNavigator(
  {
    dashboardTabs: {
      screen: DashboardTab,
      navigationOptions: ({ navigationOptions }) => ({
        ...navigationOptions,
        headerStyle: {
          ...navigationOptions.headerStyle,
          elevation: 0,
        },
      }),
    },
  },
  {
    initialRouteName: 'dashboardTabs',
    navigationOptions: {
      headerTintColor: theme.colors.overPrimary,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
    },
  }
);

export const RootNavigator = StackNavigator(
  {
    landing: {
      screen: LandingStack,
    },
    signup: {
      screen: SignUpStack,
    },
    dashboard: {
      screen: DashboardStack,
    },
  },
  {
    initialRouteName: 'landing',
    headerMode: 'none',
  }
);

export default RootNavigator;
