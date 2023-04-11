import React from 'react';


function SButton({ content, onClick, style = {} }) {
    return (
        <button
            onClick={onClick}
            style={style}
            className='rounded-lg py-2 px-7 text-white hover:bg-deeppurple border hover:scale-110'
        >
            {content}
        </button>
    );
}

export default SButton;
