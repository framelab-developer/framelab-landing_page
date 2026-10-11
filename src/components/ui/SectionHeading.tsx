export function SectionHeading({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>
        {title}
        <br />
        <span className="muted-heading">{accent}</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
