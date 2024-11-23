document.addEventListener("astro:page-load", () => {
    document.querySelector('.hamburger')?.addEventListener('click', () => {
        const navLinks = document.querySelector(".nav-links")
        navLinks?.classList.toggle('expanded');
        const isExpanded = navLinks?.classList.contains('expanded')
        
        document.querySelectorAll('.hamburger .line').forEach(line => {
            (line as HTMLElement).style.marginBottom = isExpanded ? '2px' : '10px';
        })
    });
})