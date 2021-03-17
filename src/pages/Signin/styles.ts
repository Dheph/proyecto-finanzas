import styled from 'styled-components/native';

 export const Background = styled.View`
 flex:1;
 background-color: #1d3557;
 `;
 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;
 export const Logo = styled.Image`
 bottom: 5%;
 `;
 export const AreaInput = styled.View`
 flex-direction: row;
 `;
 export const Input = styled.TextInput.attrs({
     placeholderTextColor: '#a8dadc'
 })`
 background: #457b9d ;
 width: 90%;
 font-size: 17px;
 color: #f1faee;
 margin-bottom: 20px;
 padding: 10px;
 border-radius: 7px;
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #e63946;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #f1faee;
`;

export const Link = styled.TouchableOpacity`
    top: 5%;
    /* margin-bottom: 3px; */
`;

export const LinkText = styled.Text`
    color: #f1faee;
    font-size:15px;
`;