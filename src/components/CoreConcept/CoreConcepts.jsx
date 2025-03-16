import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";
import ConceptListItem from "./ConceptListItem";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <ConceptListItem
            key={index}
            title={concept.title}
            description={concept.description}
            image={concept.image}
          />
        ))}
      </ul>
    </Section>
  );
}
