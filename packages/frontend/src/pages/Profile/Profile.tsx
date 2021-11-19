import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { ROOMLIST_PATH } from '../../config/paths';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectUserState } from '../../reducers/user';
import type { Profile as ProfileInterface } from '../../types/user';
import {
  ProfileContainer,
} from './styles';

const Profile = () => {
  const params = useParams() as { id: number | undefined};
  const history = useHistory();
  const user = useAppSelector(selectUserState);

  const [profile, setProfile] = useState<ProfileInterface>();

  return (
    <ProfileContainer>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="h3">
            Name: {user?.name}
          </Typography>
          <Typography component="h3">
            WIP
          </Typography>
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default React.memo(Profile);
