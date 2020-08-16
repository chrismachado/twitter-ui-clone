import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon className="top" />
        Voce retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong> <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete nao tem re</Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              15
            </Status>
            <Status>
              <RetweetIcon className="bottom" />
              23
            </Status>
            <Status>
              <LikeIcon />
              15
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
