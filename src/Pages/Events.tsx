import { useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lanOpen, setLanOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openLan = () => {
    setLanOpen(!lanOpen);
  };
  return (
    <main className="w-full h-screen flex flex-col gap-4 bg-[#274d76]">
      <header className=" flex flex-col gap-10 px-4 mt-6">
        <div className="flex">
          {!menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
              className="bi bi-list justify-self-start"
              viewBox="0 0 16 16"
              onClick={openMenu}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
              className="bi bi-x"
              viewBox="0 0 16 16"
              onClick={openMenu}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          )}
          <h1 className="self-center text-lg text-[#fff] font-[700] leading-[21px]">
            Event Planner
          </h1>
        </div>
        <section className={menuOpen ? "flex flex-col gap-2" : "hidden"}>
          <button className="w-[343px] h-[50px] bg-[#fff] rounded-[10px] flex items-center justify-center text-base text-[#274d76] font-normal leading-[19px]">
            Profile
          </button>
          <button className="w-[343px] h-[50px] bg-[#fff] rounded-[10px] flex items-center justify-center text-base text-[#274d76] font-normal leading-[19px]">
            Log out
          </button>
          <div className="flex flex-col gap-[11px] mt-3">
            <h2 className="text-lg text-[#fff] font-normal leading-[21px]">
              Change language
            </h2>
            <button
              onClick={openLan}
              className="w-[343px] h-[50px] bg-[#fff] rounded-[10px] flex items-center justify-between text-base text-[#274d76] font-normal leading-[19px] px-4 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <img
                  src="/uk.png"
                  alt=""
                  className="w-[30px] h-[30px] rounded-full"
                />
                <span>English</span>
              </div>
              <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4.228 4.228L9.456 1"
                  stroke="#274d76"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <section
              className={
                lanOpen
                  ? "flex flex-col gap-[4.5px] w-[173px] p-4 bg-[#fff] rounded-[10px] self-end mt-[2px]"
                  : "hidden"
              }
            >
              <div className="flex items-center gap-5 cursor-pointer">
                <img
                  src="/geo.png"
                  alt="Georgian"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <span>Georgian</span>
              </div>
              <hr className="border-[#e0e0e0]" />
              <div className="flex items-center gap-5 cursor-pointer">
                <img
                  src="/german.png"
                  alt="German"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <span>German</span>
              </div>
            </section>
          </div>
        </section>
      </header>
      <section className="bg-[#fff] h-full min-h-[600px] flex flex-col justify-between rounded-t-3xl px-4 pb-10">
        {events.length == 0 ? (
          <div className="flex flex-col items-center mt-[226px]">
            <img src="/event.png" alt="" className="w-[300px] h-[200px]" />
            <span className="text-xl text-[#c4c4c4] font-[700] leading-[23px] mt-[-30px]">
              NO EVENTS YET
            </span>
          </div>
        ) : (
          <div>
            <h1>dd</h1>
          </div>
        )}
        <button className="w-[343px] h-[50px] bg-[#274d76] rounded-[10px] flex items-center justify-center text-base text-[#fff] font-normal leading-[19px]">
          Create new event
        </button>
      </section>
    </main>
  );
}

export default Events;
