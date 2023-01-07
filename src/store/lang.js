import { createStore } from 'redux';

const rootEle = document.getElementById('root-html');
const lang = localStorage.getItem('lang');
let translation = require(`../assets/json/lang/en.json`);
if (lang === 'ar') {
    translation = require(`../assets/json/lang/ar.json`);
    rootEle.setAttribute('dir', 'rtl')
    rootEle.setAttribute('lang', 'ar');
}
const langReducer = (state = { globalLang: lang || 'en', translation: translation}, action) => {
    if (action.type === 'ar' || action.type === 'en') {
        if (action.type === 'ar') {
            rootEle.setAttribute('dir', 'rtl')
        }
        if (action.type === 'en') {
            rootEle.removeAttribute('dir')
        }
        rootEle.setAttribute('lang', action.type);
        localStorage.setItem('lang', action.type);
        return {
            globalLang: action.type,
            translation: require(`../assets/json/lang/${action.type}.json`)
        }
    }
    return state;
}

const store = createStore(langReducer);

export default store;