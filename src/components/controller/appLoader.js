import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '331c4885400a407091a1921a3048e9e5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
