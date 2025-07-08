import React, {useState, useEffect} from "react";

function Navbar() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <nav className="bg-white">
            <div className="navbar px-10 py-4 flex justify-between items-center">
                <div className="logo-breadcrumb">
                    <img className="w-[15rem]" src="./plm-logo.png" alt="plm-logo"/>

                </div>
                <div className="date-time flex flex-col text-right uppercase">
                    <span className="text-black font-medium text-base">
                        {dateState.toLocaleDateString('en-PH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                    <span className="text-black font-regular text-small">
                        {dateState.toLocaleString('en-PH', {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit'
                        })}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;