export default function CoreConcept({ title, img, desc }) {
    return (
        <li>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </li>
    );
}
