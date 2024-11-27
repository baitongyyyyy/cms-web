import { Metadata } from "next";
import DefaultLayout from "@/src/components/Layouts/DefaultLaout";
import Breadcrumb from "@/src/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/src/components/CalenderBox";

export const metadata: Metadata = {
    title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
    description:
        "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
    // other metadata
};

const CalendarPage = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-7xl">
                <Breadcrumb pageName="Calendar" />

                <CalendarBox />
            </div>
        </DefaultLayout>
    );
};

export default CalendarPage;