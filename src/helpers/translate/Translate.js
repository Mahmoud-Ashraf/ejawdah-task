import { useSelector } from 'react-redux'

export const Translate = (props) => {
    const translation = useSelector(state => {
        return state.translation
    });
    let translatedText = { ...translation };
    const objDirArr = props.text.split('.');
    objDirArr.forEach(dir => {
        translatedText = translatedText[dir];
    });
    return translatedText;
}