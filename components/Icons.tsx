import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  );
}

export function Sliders(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" {...props}>
      <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0M16 18h0" />
      <circle cx="16" cy="6" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="18" r="2" />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function GitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18.6 5 19.6 5.3 19.6 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

export function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8.5h3V19zM6.5 7.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM19 19h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8.5h3v1.4c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" />
    </svg>
  );
}

export function Behance(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.3 9.6c.5-.4.8-1 .8-1.8 0-.5-.1-.9-.2-1.2-.2-.3-.4-.6-.7-.8a3 3 0 0 0-1-.4 6 6 0 0 0-1.3-.1H2v11h5c.5 0 1-.1 1.4-.2.5-.1.9-.3 1.2-.6.3-.2.6-.6.8-1 .2-.4.3-.9.3-1.4 0-.7-.2-1.3-.5-1.7-.3-.5-.8-.8-1.4-1zM4.4 7.3h2c.2 0 .4 0 .6.1l.5.2c.1.1.2.2.3.4 0 .2.1.3.1.5 0 .4-.1.7-.4.9-.2.2-.6.3-1 .3H4.4V7.3zm3.4 6.4c-.1.2-.2.3-.4.4-.1.1-.3.2-.5.2-.2 0-.4.1-.6.1H4.4v-2.7h2.4c.5 0 .9.1 1.1.3.3.2.4.6.4 1 0 .3 0 .5-.1.7zM22 9.6c-.3-.6-.7-1-1.2-1.4-.5-.4-1-.6-1.6-.8a6 6 0 0 0-3.6 0c-.6.2-1.1.5-1.6.9s-.8.9-1 1.5c-.3.6-.4 1.3-.4 2s.1 1.4.4 2c.2.6.6 1.1 1 1.5s1 .7 1.6.9a6 6 0 0 0 2 .3c1 0 1.9-.2 2.6-.7.7-.5 1.3-1.2 1.6-2.3h-2.2c-.1.3-.3.5-.6.7-.3.2-.7.3-1.2.3-.7 0-1.2-.2-1.5-.5-.4-.4-.6-1-.6-1.6h6.2c0-.7 0-1.4-.2-2-.1-.6-.4-1.1-.7-1.5zm-5.3 1.8c0-.2.1-.4.2-.6.1-.2.2-.4.4-.5.2-.1.4-.2.6-.3.2-.1.5-.1.7-.1.5 0 .9.1 1.2.4.3.3.4.7.5 1.2h-3.6zM15 6.7h4.5V5.5H15v1.2z" />
    </svg>
  );
}
