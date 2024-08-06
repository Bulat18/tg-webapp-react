import React from 'react';
import {useTelegram} from '/Users/bulath/PycharmProjects/FrontEnd/TG-webapp-market/tg-react/src/components/hooks/usetelegram';


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