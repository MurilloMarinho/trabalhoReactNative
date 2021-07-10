import React, {useState} from 'react';
import {
  ContainerScroll,
  Container,
  ContainerHeader,
  ContainerItemStory,
  ContainerFoto,
  Foto,
  PostFoto,
  Nome,
  ContainerActions,
  ContainerActionsIcons,
  GroupIcons,
  Label,
} from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import posts from './Fotos.json';

const Post = () => {
  const [iconsConfigure] = useState({
    color: '#333',
    size: 20,
    style: {
      paddingRight: 15
    }
  });

  return (
      <ContainerScroll>
    {posts &&
    posts.map((post, index) => (
      <Container key={index}>
        <ContainerHeader>
          <ContainerItemStory>
            <ContainerFoto>
              <Foto source={{uri: post.perfil.foto}} />
            </ContainerFoto>
            <Nome>{post.perfil.nome}</Nome>
          </ContainerItemStory>
          <Icon name="ellipsis-h" size={14} color="#888" />
        </ContainerHeader>
        <PostFoto source={{uri: post.postFoto}} />
        <ContainerActions>
          <ContainerActionsIcons>
            <GroupIcons>
              <Icon name="heart" {...iconsConfigure} />
              <Icon name="circle" {...iconsConfigure} />
              <Icon name="paper-plane" {...iconsConfigure} />
            </GroupIcons>
            <Icon name="bookmark" {...iconsConfigure} />
          </ContainerActionsIcons>
          <Label>9.624 Likes</Label>
          <Label>Marta  Eu sirvo o Deus dono de todas as coisas dono do ouro e da prata! E voce?</Label>
        </ContainerActions>
      </Container>
    ))}
    </ContainerScroll>
  );
};

export default Post;
