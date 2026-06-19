import { getArt } from "@/lib/art";

/** Renders a project's illustration, with an optional real cover image layered on top. */
export default function ProjectArt({
  kind,
  cover,
  alt = "",
  className = "",
}: {
  kind: string;
  cover?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`ph art${className ? " " + className : ""}`}>
      <div className="shot-art" dangerouslySetInnerHTML={{ __html: getArt(kind) }} />
      {cover ? <img className="shot-img" alt={alt} src={cover} /> : null}
    </div>
  );
}
