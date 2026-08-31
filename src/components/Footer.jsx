import { ArrowUp } from "lucide-react";
const Footer = () => {
    const date=new Date();
    const year=date.getFullYear()
  return (
    <footer className="flex items-center justify-center gap-10 border-t border-accent/10 px-6 py-6 text-sm text-foreground/60">
        
  <p>
    © {year} Chelsea Boots. All rights reserved.
  </p>
   <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 text-xs text-black/50 transition hover:text-black "
          >
            Back to top

            <span className="rounded-full border border-black/10 p-2 transition group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </span>
          </button>
</footer>
  )
}

export default Footer;
