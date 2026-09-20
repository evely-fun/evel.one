type GlyphProps = {
  size?: number
  className?: string
}

function Glyph({ size = 20, className, children }: GlyphProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Glyph>
  )
}

export function ArrowDown(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </Glyph>
  )
}

export function Send(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M20.5 3.5 3.8 10.2c-.8.3-.8 1.4 0 1.7l6.1 2.2 2.2 6.1c.3.8 1.4.8 1.7 0z" />
      <path d="M20.5 3.5 9.9 14.1" />
    </Glyph>
  )
}

export function Check(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="m4.5 12.5 4.5 4.5 10.5-11" />
    </Glyph>
  )
}

export function Sun(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.6v2.1M12 19.3v2.1M21.4 12h-2.1M4.7 12H2.6M18.6 5.4l-1.5 1.5M6.9 17.1l-1.5 1.5M18.6 18.6l-1.5-1.5M6.9 6.9 5.4 5.4" />
    </Glyph>
  )
}

export function Moon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2" />
    </Glyph>
  )
}

export function Language(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.6h17.6M3.2 14.4h17.6" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
    </Glyph>
  )
}

export function Menu(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M4 7.5h16M4 12h16M4 16.5h16" />
    </Glyph>
  )
}

export function Close(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
    </Glyph>
  )
}
