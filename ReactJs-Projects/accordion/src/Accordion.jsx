import React, { useState } from 'react';

    const AccordionItem = ({ title, content, isOpen, onToggle }) => (
    <div className="accordion-item">
        <div className="accordion-header" onClick={onToggle}>
        {title}
        </div>
        {isOpen && (
        <div className="accordion-content">
            {content}
        </div>
        )}
    </div>
    );

    // Accordion Component
    const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const expandAll = () => {
        setOpenIndex('all');
    };

    const collapseAll = () => {
        setOpenIndex(null);
    };

    return (
        <div className="accordion">
        
        {items.map((item, index) => (
            <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index || openIndex === 'all'}
            onToggle={() => handleToggle(index)}
            />
        ))}
        <button onClick={expandAll}>Expand All</button>
        <button onClick={collapseAll}>Collapse All</button>
        </div>
    );
    };

    export default Accordion;
