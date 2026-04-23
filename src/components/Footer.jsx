export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Aman Sharma</p>
            <p className="mt-2 text-sm text-gray-600">
                Junior Unity Developer | Multiplayer & AR Specialist
            </p>
        </footer>
    )
}