import React from 'react';
import {Container, ContainerHeader, GroupLabel, Label, ContainerScrollStory, ContainerItemStory, ContainerFoto, Foto, Nome} from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Content from './Content.json';

const Stories = () => {

    return (
        <Container>
            <ContainerHeader>
                <Label>Stories</Label>
                <GroupLabel>
                    <Icon name="arrow-right" size={20} />
                    <Label>Ver todos</Label>
                </GroupLabel>
            </ContainerHeader>

            <ContainerScrollStory>
                {Content && Content.map((content, index) => (
                    <ContainerItemStory key={index}>
                    <ContainerFoto>
                        <Foto source={{ uri: content.foto }} />
                    </ContainerFoto>
                    <Nome>{content.nome}</Nome>
                </ContainerItemStory>
                ))}
                
            </ContainerScrollStory>

        </Container>
    );
};

export default Stories;