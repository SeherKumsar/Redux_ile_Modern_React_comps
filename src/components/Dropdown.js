import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

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
      return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
    });

    return (
        <div className='w-48 relative'>
            {/* <div onClick={handleClick}>{content}</div> */}
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
                {value?.label || "Select..."}
                <GoChevronDown className='text-lg' />
            </div>
            {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
        // ilk parametre false ise ifadenin tamamı false
        // ikinci parametre true ise ifadenin tamamı true
    );
}

export default Dropdown;