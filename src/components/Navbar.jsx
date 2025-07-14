import React, {useState, useEffect} from "react";

function Navbar() {
    const [dateState, setDateState] = useState(new Date());
    const screenWidth = window.innerWidth;

    useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <nav className="bg-white">
            <div className="navbar px-[1rem] max-tablet:px-[1rem] py-[0.6rem] flex justify-between items-center">
                <div className="logo-breadcrumb flex flex-row">
                    {/* add overflow for logo */}
                    {/* address squishing issue */}
                    {screenWidth < 800 ? 
                        <div className="logo-breadcrumb-desk flex flex-row">
                            <img className="w-[3.5rem] object-cover text-nowrap" src="./plm-logo.png" alt="plm-logo"/>
                            <span className="title px-[0.5rem] flex items-center text-plmRed text-sm text-medium">Manual Receipt Generation</span>
                        </div> : 
                        <div className="logo-breadcrumb-tab flex flex-row">
                            <img className="w-[15rem] object-cover text-nowrap" src="./plm-logo-wtext.png" alt="plm-logo"/>
                            <span className="title px-[1rem] flex items-center text-plmRed text-sm text-nowrap text-medium">Manual Receipt Generation</span>
                        </div>
                    }
                </div>
                <div className="time-user flex flex-row">
                    <div className="date-time flex flex-col text-right uppercase text-nowrap pr-[0.5rem]">
                        <span className="text-black font-medium text-sm">
                            {dateState.toLocaleDateString('en-PH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        <span className="text-black font-regular text-xs text-nowrap">
                            {dateState.toLocaleString('en-PH', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            })}
                        </span>
                    </div>
                    <div className="title-name flex-nowrap flex-col text-left pl-[0.5rem] border-l-2 border-plmWhite">
                        <span className="title flex items-center font-medium text-sm text-nowrap">Officer Name</span>
                        <span className="title flex items-center text-xs text-nowrap">Collecting Officer</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;