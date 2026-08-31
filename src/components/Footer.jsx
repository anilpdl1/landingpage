
const Footer = () => {
    const date=new Date();
    const year=date.getFullYear()
  return (
    <footer className="flex items-center justify-center gap-2 border-t border-accent/10 px-6 py-6 text-sm text-foreground/60">
  <p>
    © {year} Chelsea Boots. All rights reserved.
  </p>
</footer>
  )
}

export default Footer;
