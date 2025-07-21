import NavHeader from "@/components/nav-header"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative max-w-full overflow-x-hidden">
            <NavHeader />
            { children }
        </main>
    )
}

export default AppLayout