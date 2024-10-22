import React, { useState } from 'react';

const DropdownButton = ({ options, selectedOption = '', onSelectOption, buttonClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onSelectOption(option);
        setIsOpen(false);
    };

    return (
        <div className={`${buttonClass}-button-container`}>
            <button
                className={`${buttonClass}-button ${selectedOption ? selectedOption.toLowerCase() : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption || 'Select'}
            </button>
            {isOpen && (
                <div className={`${buttonClass}-dropdown`}>
                    {options.map((option) => (
                        <button
                            key={option}
                            className={`${buttonClass}-dropdown-item ${option === selectedOption ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const ButtonGroup = ({ selectedCategory, onSelectCategory, selectedCTA, onSelectCTA, selectedType, onSelectType }) => {
    return (
        <div className="button-group">
            <DropdownButton
                options={['Awareness', 'Services', 'Benefits', 'Testimonials']}
                selectedOption={selectedCategory}
                onSelectOption={onSelectCategory}
                buttonClass="category"
            />
            <DropdownButton
                options={['WhatsApp', 'Website', 'Email']}
                selectedOption={selectedCTA}
                onSelectOption={onSelectCTA}
                buttonClass="cta"
            />
            <DropdownButton
                options={['Post', 'Reel', 'Carousel']}
                selectedOption={selectedType}
                onSelectOption={onSelectType}
                buttonClass="type"
            />
        </div>
    );
};

export default ButtonGroup;
