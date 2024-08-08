import React, {useState} from 'react';
import './Form.css';


const Form = () =>{
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeCountry = (e) =>{
        setCountry(e.target.value);
    }
    const onChangeStreet = (e) =>{
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Enter your details</h3>
            <input
                className={"input"}
                type="text"
                placeholder={'Country'}
                value ={country}
                onChange={onChangeCountry}
            />
            <input
                className={"input"}
                type="text"
                placeholder={'Street'}
                value ={street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Physical Entity</option>
                <option value={'legal'}>Legal Entity</option>
            </select>

        </div>
    );
};

export default Form;