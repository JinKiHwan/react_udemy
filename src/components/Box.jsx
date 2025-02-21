import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import TabButton from './TabButton.jsx';

export default function Box() {
    console.log('Box Update');
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <menu>
                {Object.keys(EXAMPLES).map((key, index) => (
                    <TabButton key={index} isSelected={selectedTopic === key} onSelect={() => handleSelect(key)}>
                        {EXAMPLES[key].title}
                    </TabButton>
                ))}
            </menu>
            {tabContent}
        </div>
    );
}
