import { useState } from 'react';

function Dropdown({ options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        // setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON??
        onChange(option);
    };


    const renderedOptions = options.map((option) => {
      return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
    });

    return (
        <div>
            {/* <div onClick={handleClick}>{content}</div> */}
            <div onClick={handleClick}>{value?.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
        // ilk parametre false ise ifadenin tamamı false
        // ikinci parametre true ise ifadenin tamamı true
    );
}

export default Dropdown;