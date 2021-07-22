interface PageLayoutProps {
  children: React.ReactChildren
}

export function PageLayout({ children }: PageLayoutProps): React.ReactElement {
  return <>{children}</>
}
