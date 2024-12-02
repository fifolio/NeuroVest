// UI
import SetupFooter from "./SetupFooter";
import SetupNavbar from "./SetupNavbar";
import Stage from "./Stage";

export default function Setup() {

    return (
        <div className="flex sm:items-center items-start justify-center min-h-screen bg-[#2c2c2c]">
            <div className="rounded-lg shadow-lg bg-[white] sm:w-[550px] w-full mx-5 sm:mt-0 mt-10">
                <div>
                    <SetupNavbar />
                    <Stage />
                    <SetupFooter />
                </div>
            </div>
        </div>
    )
}
