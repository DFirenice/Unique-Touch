import { Heading } from "@app-ui/heading"
import { Button } from "@app-ui/button"
import BookNow from "@app-ui/book-now"

const Explore = () => {
    return (
         <section  data-aos="fade-up" className="mt-24 md:px-4 text-layer-dark">
            <div className="w-full md:container mx-auto">
                <div className="
                    flex justify-center items-center flex-col gap-6 min-h-[40vh] overflow-hidden md:rounded-4xl p-6 text-center
                    bg-[linear-gradient(to_top,rgba(114,91,75,0.87),rgba(114,91,75,0.87)),url('/images/about/towels_on_rack.jpg')] bg-center bg-cover bg-no-repeat
                ">
                    <div className="max-md:py-4">
                        <Heading size="4xl" className="mx-auto">
                            <span>Ready to</span>
                            <span className="text-text-accent"> Reconnect </span>
                            <span>Yourself?</span>
                        </Heading>
                        <p className="mx-auto max-w-sm mt-2 max-sm:my-4">Book your favorite treatment or consult our team for a personalized wellness plan made just for you.</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <BookNow variant="light" />
                        <Button variant="outline">Explore Packages</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore