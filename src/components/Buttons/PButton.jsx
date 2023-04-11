import React from 'react';


function PButton({ content, onClick, style = {} }) {
    return (
        <button
            onClick={onClick}
            style={style}
            className='rounded-lg py-2 px-7 text-white hover:bg-deeppurple border border-white hover:border-transparent'
        >
            {content}
        </button>
    );
}

export default PButton;
