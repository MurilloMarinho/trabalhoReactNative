import styled from 'styled-components';

export const ContainerScroll = styled.ScrollView.attrs({
    vertical: true,
    showsVerticalScrollIndicator: false
})`
flex: 1;
padding-bottom: 20px;
`;

export const Container = styled.View`
height: 550px;
padding-bottom: 20px;
`;

export const ContainerHeader = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
`;

export const ContainerItemStory = styled.View`
justify-content: center;
align-items: center;
flex-direction : row;
`;
export const ContainerFoto = styled.View`
background-color: #F89B3B;
width: 30px;
height: 30px;
justify-content: center;
align-items: center;
border-radius: 15px;
`;
export const Foto = styled.Image.attrs({
    resizeMode: 'cover'
})`
height: 28px;
width: 28px;
border-radius: 28px;
border-width: 1px;
border-color: #fff;
`;
export const PostFoto = styled.Image.attrs({
    resizeMode: 'cover'
})`
flex: 1;
margin: 20px;
border-radius: 8px;
`;
export const Nome = styled.Text`
height: 20px;
font-size: 12px;
padding: 5px;`;

export const ContainerActions = styled.View`
padding: 10px 20px;
`;
export const ContainerActionsIcons = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 20px;
`;
export const GroupIcons = styled.View`
flex-direction: row;
`;

export const Label = styled.Text`
padding: 5px 0px;
font-size: 12px;
`;