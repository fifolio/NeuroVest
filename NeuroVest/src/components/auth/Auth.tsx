import Navbar from "../common/Navbar";

export default function Auth() {
  return (
    <>
    {/* NAVBAR */}
      <Navbar breadcrumb={false} currentPage="" predictionBtn={false} dropdownMenu={false} />

      {/* AUTH */}
      <div className="container flex mx-auto">
        <div className="">1</div>
        <div className="">2</div>
      </div>
    </>
  )
}
