export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            <div className="container mx-auto w4/5">
                {children}
            </div>
        </section>
    )
  }