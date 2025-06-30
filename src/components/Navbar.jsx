function Navbar() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <nav className="bg-white">
            <div className="navbar px-14 py-3 flex justify-between items-center">
                {/* PLM Logo */}
                <img className="w-[300px]" src="./plm-logo.png" alt="plm-logo" />
                {/* Formatted Date today */}
                <span className="text-black font-bold text-lg">
                    {formattedDate}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;