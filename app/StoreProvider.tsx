'use client'
import { Provider } from 'react-redux';
import store from '../redux/store';
import './globals.css';

function StoreProvider({ children }: any) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default StoreProvider;
