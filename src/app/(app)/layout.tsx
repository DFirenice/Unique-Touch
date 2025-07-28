import NavHeader from "@/components/nav-header"
import Footer from "@/components/sections/footer"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-light max-w-full overflow-x-hidden">
            <NavHeader />
            { children }
            <Footer />
        </main>
    )
}

export default AppLayout