"use client";

import { useState } from "react";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

const people = [
  {
    id: "alfred",
    name: "Alfred",
    dates: "849–899",
    role: "King of the West Saxons, 871–899",
    note: "Alfred’s marriage connected West Saxon kingship to a Mercian family. His children would exercise power from different centres.",
    relationships: ["Husband of Ealhswith", "Father of Edward and Æthelflæd"],
    className: "royal-node-alfred",
  },
  {
    id: "ealhswith",
    name: "Ealhswith",
    dates: "d. 902",
    role: "Royal consort in Wessex",
    note: "Ealhswith came from a Mercian family. Her household and patronage connected West Saxon kingship with Mercian society.",
    relationships: ["Wife of Alfred", "Mother of Edward and Æthelflæd"],
    className: "royal-node-ealhswith",
  },
  {
    id: "edward",
    name: "Edward",
    dates: "c. 874–924",
    role: "King of the Anglo-Saxons, 899–924",
    note: "Edward succeeded Alfred in Wessex and worked alongside his sister Æthelflæd, who held authority in Mercia.",
    relationships: ["Son of Alfred and Ealhswith", "Brother of Æthelflæd", "Uncle of Ælfwynn"],
    className: "royal-node-edward",
  },
  {
    id: "aethelflaed",
    name: "Æthelflæd",
    dates: "c. 870–918",
    role: "Lady of the Mercians, 911–918",
    note: "Æthelflæd ruled in Mercia after her husband’s death. Her cooperation with Edward joined two centres of power without making them one court.",
    relationships: ["Daughter of Alfred and Ealhswith", "Sister of Edward", "Wife of Æthelred", "Mother of Ælfwynn"],
    className: "royal-node-aethelflaed",
  },
  {
    id: "aethelred",
    name: "Æthelred",
    dates: "d. 911",
    role: "Lord of the Mercians, c. 883–911",
    note: "Æthelred governed Mercia with Æthelflæd and worked with Alfred. Cooperation did not erase Mercian institutions or interests.",
    relationships: ["Husband of Æthelflæd", "Father of Ælfwynn"],
    className: "royal-node-aethelred",
  },
  {
    id: "aelfwynn",
    name: "Ælfwynn",
    dates: "fl. 918",
    role: "Ruler in Mercia, 918",
    note: "Ælfwynn briefly exercised authority after her mother’s death. Edward removed his niece from power in late 918; the record does not securely establish her later life.",
    relationships: ["Daughter of Æthelflæd and Æthelred", "Niece of Edward"],
    className: "royal-node-aelfwynn",
  },
];

export function RoyalRelationshipExplorer() {
  const [selectedId, setSelectedId] = useState("aethelflaed");
  const selected = people.find((person) => person.id === selectedId) ?? people[0];

  return (
    <div className="relationship-explorer">
      <div className="royal-graph" role="group" aria-label="Alfred’s immediate royal family">
        <svg aria-hidden="true" viewBox="0 0 900 470">
          <path d="M160 72H740" />
          <path d="M450 72V165M160 165H450M160 165V228M450 165V228" />
          <path d="M450 248H740M595 248V356M595 356H740" />
        </svg>
        {people.map((person) => (
          <button
            aria-pressed={person.id === selectedId}
            className={`royal-node ${person.className}`}
            key={person.id}
            onClick={() => setSelectedId(person.id)}
            type="button"
          >
            <span>{person.name.slice(0, 1)}</span>
            <strong>{person.name}</strong>
            <small>{person.dates}</small>
          </button>
        ))}
        <span className="relation-label relation-label-marriage">marriage</span>
        <span className="relation-label relation-label-descent">descent</span>
        <span className="relation-label relation-label-succession">succession dispute</span>
      </div>

      <div className="royal-detail" aria-live="polite">
        <p className="eyebrow">Selected person</p>
        <h3>{selected.name}</h3>
        <p className="royal-role">{selected.role}</p>
        <p>{selected.note}</p>
        <ul>
          {selected.relationships.map((relationship) => (
            <li key={relationship}>{relationship}</li>
          ))}
        </ul>
        <a href={ENGLAND_871_APP_STORE_URL}>
          Follow the complete Alfred series <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="relationship-sources">
        <span>Sources:</span>
        <a href="https://www.royal.uk/alfred-great-r-871-899">The Royal Household</a>
        <a href="https://www.gutenberg.org/cache/epub/657/pg657-images.html">The Anglo-Saxon Chronicle</a>
      </div>
    </div>
  );
}
