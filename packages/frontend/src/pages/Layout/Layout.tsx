import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUserState, verifyToken } from '../../reducers/user';
import {
  ROOMLIST_PATH, ROOM_PATH,
  LOGIN_PATH, PROFILE_PATH,
} from '../../config/paths';
import { ACCESS_TOKEN } from '../../config/localStorage';
import RoomList from '../RoomList';
import Room from '../Room';
import Profile from '../Profile';
import {
  HeaderAccountCircle as AccountCircle,
  Header,
  FlexContainer,
  ContentContainer,
  HeaderProfileContainer,
  HeaderToolbar as Toolbar,
  HeaderIconButton as IconButton,
  HeaderMenu,
  HeaderMenuItem,
} from './styles';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useAppSelector(selectUserState);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    history.push(`${PROFILE_PATH}/${user.id}`);
  };

  const logout = () => {
    setAnchorEl(null);
    localStorage.removeItem(ACCESS_TOKEN);
    history.push(LOGIN_PATH);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
      history.push(LOGIN_PATH);
    } else {
      dispatch(verifyToken());
    }
  }, []);

  return (
    <>
      <Header>
        <Toolbar>
          <HeaderProfileContainer>
            <IconButton
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <HeaderMenu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleProfileMenuClose}
            >
              <HeaderMenuItem onClick={goToProfile}>My profile</HeaderMenuItem>
              <HeaderMenuItem onClick={logout}>Log out</HeaderMenuItem>
            </HeaderMenu>
          </HeaderProfileContainer>
        </Toolbar>
      </Header>

      <FlexContainer>
        <ContentContainer>
          <Switch>
            <Route path={`${ROOM_PATH}/:id`} component={Room} />
            <Route path={ROOMLIST_PATH} component={RoomList} />
            <Route path={`${PROFILE_PATH}/:id`} component={Profile} />
            <Route path="/*">
              <Redirect to={ROOMLIST_PATH} />
            </Route>
          </Switch>
        </ContentContainer>

      </FlexContainer>
    </>
  );
};

export default React.memo(Dashboard);
