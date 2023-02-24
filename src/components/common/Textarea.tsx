import React from 'react';
interface TextareaType {
    name: string;
    id: string;
    placeholder: string;
    onChange: () => void;
}

const Textarea: React.FC<TextareaType> = ({ name, id, placeholder, onChange }) => {
    return (
        <div className='bg-background p-px rounded-[10px]'>
            <textarea
                className='w-full h-[100px] bg-background text-lg text-darkFont leading-normal rounded-[10px] py-[10.5px] px-5 resize-y'
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default Textarea;
