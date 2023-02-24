import React from 'react';

interface InputType {
    type: string;
    placeholder: string;
    onChange: () => void;
}

const Input: React.FC<InputType> = ({ type, placeholder, onChange }) => {
    return (
        <div className='bg-background p-px rounded-[10px]'>
            <input
                type={type}
                className='w-full bg-background text-lg text-darkFont leading-normal rounded-[10px] py-[10.5px] px-5'
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
