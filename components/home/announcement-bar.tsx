export function AnnouncementBar() {
    return (
        <div className="bg-primary px-4 py-2 text-primary-foreground text-center text-sm font-medium">
            <p>
                <span className="opacity-75">New: Delphina v2.0 is now available. </span>
                <a href="#" className="underline hover:text-white transition-colors">
                    Read the release notes &rarr;
                </a>
            </p>
        </div>
    )
}
