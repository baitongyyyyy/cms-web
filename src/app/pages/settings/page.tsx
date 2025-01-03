import Breadcrumb from "@/src/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/src/components/Layouts/DefaultLaout";
import SettingBoxes from "@/src/components/SettingBoxes";

export const metadata: Metadata = {
    title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
    description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Settings" />

                <SettingBoxes />
            </div>
        </DefaultLayout>
    );
};

export default Settings;