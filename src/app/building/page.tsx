import TableThree from "@/src/components/Tables/TableThree";
import DefaultLayout from "@/src/components/Layouts/DefaultLaout";
import Breadcrumb from "@/src/components/Breadcrumbs/Breadcrumb";

const BuildingPage = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto w-full max-w-[1080px]">
                <Breadcrumb pageName="Building" />
            <TableThree />
            </div>

        </DefaultLayout>
    );
};

export default BuildingPage;