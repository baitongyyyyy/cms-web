import Breadcrumb from "@/src/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/src/components/Layouts/DefaultLaout";
import ProfileBox from "@/src/components/ProfileBox";

export const metadata: Metadata = {
    title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[970px]">
                <Breadcrumb pageName="Profile" />

                <ProfileBox />
            </div>
        </DefaultLayout>
    );
};

export default Profile;