export default function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '300px', borderRight: '1px solid #ddd' }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
