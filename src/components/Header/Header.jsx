import React from 'react';
import {useTelegram} from './hooks/useTelegram.js';


const Header = () =>{
    const {user, onClose} = useTelegram();

    return (
    <div className={'header'}>
        <button>Close</button>
        <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
        </span>
    </div>
    );
};

export default Header;