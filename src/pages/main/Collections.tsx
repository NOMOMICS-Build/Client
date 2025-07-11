import { Breadcrumb, Void } from "@/components/ui"
import { MainLayout } from "@/layouts"

const Collections = () => {
    return (
        <MainLayout>
            <div className="main py-10">
                <Breadcrumb title="Collections" link="/collections" previous="Creator" />
            </div>

            <Void/>
        </MainLayout>
  )
}

export default Collections