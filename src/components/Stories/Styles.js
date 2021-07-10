import styled from 'styled-components';

export const Container = styled.View`
padding: 10px
`;

export const ContainerHeader = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const GroupLabel = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Label = styled.Text`
font-size: 14px;
padding 5px;
`;

export const ContainerScrollStory = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`

`;
export const ContainerItemStory = styled.View`
width: 80px;
height: 80px;
justify-content: center;
align-items: flex-start;
margin-top: 10px;
margin-right: 15px;
`;
export const ContainerFoto = styled.View`
background-color: #F89B3B;
width: 60px;
height: 60px;
justify-content: center;
align-items: center;
border-radius: 28px;
`;
export const Foto = styled.Image.attrs({
    resizeMode: 'cover'
})`
height: 56px;
width: 56px;
border-radius: 28px;
border-width: 2px;
border-color: #fff;
`;
export const Nome = styled.Text`
height: 20px;
font-size: 12px;
padding: 5px;`;