import { useState } from 'react';

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        // setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON??
        console.log(option);
    };


    const renderedOptions = options.map((option) => {
      return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
    });

    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
        // ilk parametre false ise ifadenin tamamı false
        // ikinci parametre true ise ifadenin tamamı true
    );
}

export default Dropdown;