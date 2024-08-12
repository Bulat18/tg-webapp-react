import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        console.log("Данные для отправки:", data);
        const data = {
            country,
            street,
            subject
        }
        try {
            tg.sendData(JSON.stringify(data));
            console.log("Попытка закрытия Web App");
            tg.close();
        } catch (error) {
            console.error("Ошибка при закрытии Web App:", error);
        }
    }, [country, street, subject]);


    useEffect(() => {
        console.log("Регистрация обработчика mainButtonClicked");
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            console.log("Отмена регистрации обработчика mainButtonClicked");
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',


        })
    }, []);

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;