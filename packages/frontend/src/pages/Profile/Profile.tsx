import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { ROOMLIST_PATH } from '../../config/paths';
import type { Profile as ProfileInterface } from '../../types/user';
import {
  ProfileContainer,
} from './styles';

const Profile = () => {
  const params = useParams() as { id: number | undefined};
  const history = useHistory();

  const [profile, setProfile] = useState<ProfileInterface>();

  return (
    <ProfileContainer>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="h3">
            Name: {profile?.name}
            WIP
          </Typography>
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default React.memo(Profile);
