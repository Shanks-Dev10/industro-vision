import { Button } from "../ui/button"

const NewsLetter=()=>{
    return(
              <section className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-2xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Stay tuned for more updates
          </h2>
          <div className="mx-auto mt-8 flex max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-l-full bg-primary-foreground/10 px-6 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
            />
            <Button variant="gold" className="rounded-r-full px-8 py-[26px]">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/50">
            By signing up, you agree to the Privacy Policy.
          </p>
        </div>
      </section>
    )
}
export default NewsLetter