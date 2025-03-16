import Section from "../Section";
import TabButtonListItem from "./TabButtonListItem";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Tabs from "../Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // function name can be clickHandler
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            {["Components", "JSX", "Props", "State"].map((button) => (
              <TabButtonListItem
                onClick={() => handleSelect(button.toLowerCase())}
                isSelected={selectedTopic === button.toLowerCase()}
              >
                {button}
              </TabButtonListItem>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
