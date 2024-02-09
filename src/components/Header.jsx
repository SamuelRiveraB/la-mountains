import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="fixed z-10 w-full flex justify-center items-center bg-[rgba(0,0,0,0)]">
        <div className="w-[50%] flex flex-row justify-between items-center">
          <div className="">
            <Link href={"/"}>
              <img
                src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Logo"
                className="rounded-full w-10 h-10"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-10 ">
            <Link href={"/history"} className="text-cursive">
              01. HISTORY
            </Link>
            <Link href={"/team"}>02. TEAM</Link>
          </div>

          <div className="flex flex-col gap-1 md:hidden bg-white p-5">
            <Link href={"/history"} className="text-black">
              01. HISTORY
            </Link>
            <Link href={"/team"} className="text-black">
              02. TEAM
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
