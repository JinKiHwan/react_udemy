import CoreConcept from './CoreConcept';
import Section from './Section';
import { contents } from '../../data';

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {contents.map((content, index) => (
                    <CoreConcept {...content} key={index} />
                ))}
            </ul>
        </Section>
    );
}
