import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Chris Machado</h1>
        <h2>@chrismachado</h2>

        <p>Studying web development</p>

        <ul>
          <li>
            <LocationIcon />
            Ceara, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de dezembro de 1997
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>150</strong>
          </span>
          <span>
            <strong>97 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
