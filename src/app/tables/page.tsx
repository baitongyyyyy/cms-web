import Breadcrumb from "@/src/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/src/components/Tables/TableOne";
import TableThree from "@/src/components/Tables/TableThree";
import TableTwo from "@/src/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/src/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
    title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Tables" />

            <div className="flex flex-col gap-10">
                <TableOne />
                <TableTwo />
                <TableThree />
            </div>
        </DefaultLayout>
    );
};

export default TablesPage;