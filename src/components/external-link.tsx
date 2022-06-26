export function ExternalLink({
  children,
  ...attrs
}: {
  children: any
} & JSX.IntrinsicElements['a']) {
  return (
    <a {...attrs} rel="noopener noreferrer" target="blank">
      {children}
    </a>
  )
}
