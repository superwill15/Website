interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{
      padding: '20px 0',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: '14px',
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && (
              <span style={{ color: 'var(--text-light)' }}>/</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                style={{
                  color: 'var(--accent-blue)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ color: 'var(--text-dark)', fontWeight: 600 }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
