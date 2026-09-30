const milestones = [
  {
    year: "871",
    title: "A kingdom to defend.",
    text: "Alfred becomes king of Wessex as Viking armies threaten its survival.",
    source: "https://www.royal.uk/alfred-great-r-871-899",
    label: "Alfred’s reign — The Royal Family",
  },
  {
    year: "1066",
    title: "A conquest. A new order.",
    text: "The Norman Conquest changes England’s rulers and its balance of power.",
    source: "https://www.royal.uk/william-the-conqueror?page=1",
    label: "William’s reign — The Royal Family",
  },
  {
    year: "1215",
    title: "A king meets his limits.",
    text: "Magna Carta is agreed at Runnymede, confronting the exercise of royal power.",
    source:
      "https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/medieval/magna-carta/",
    label: "Magna Carta — The National Archives",
  },
  {
    year: "1485",
    title: "The road to Bosworth.",
    text: "Richard III falls at Bosworth. Henry Tudor’s victory opens a new chapter.",
    source: "https://www.royal.uk/richard-iii",
    label: "Bosworth — The Royal Family",
  },
];
export function HistoricalJourney() {
  return (
    <section className="section journey-section" id="journey">
      <div className="site-container">
        <div className="journey-heading" data-reveal>
          <p className="eyebrow">From Alfred to Bosworth · 871–1485</p>
          <h2>
            Six centuries.
            <br />
            <span>Countless stories.</span>
          </h2>
          <p>
            Not one year. A changing world of kingdoms, communities and
            connections.
          </p>
        </div>
        <ol className="journey-timeline" data-reveal>
          {milestones.map((milestone, index) => (
            <li
              key={milestone.year}
              style={
                { "--reveal-delay": `${index * 100}ms` } as React.CSSProperties
              }
              data-reveal
            >
              <span className="journey-year">{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
              <a
                className="milestone-source"
                href={milestone.source}
                aria-label={milestone.label}
              >
                Historical context <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
