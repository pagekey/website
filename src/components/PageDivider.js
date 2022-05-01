import React from 'react'; 
import './PageDivider.css';

export default function PageDivider(props) {
    const text = props.text
    return (
        <div className="PageDivider">
            {text}
        </div>
    );
};