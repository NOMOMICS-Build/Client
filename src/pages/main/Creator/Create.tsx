import { Breadcrumb } from "@/components/ui"
import { MainLayout } from "@/layouts"

const Create = () => {
  return (
    <>
    
    <MainLayout>
        <div className="main">
            <Breadcrumb title="Create Comic" link="/creator/create" previous="Creator" previousLink="/creator" />
        </div>
        <div className="layout">
            <h1 className="text-2xl font-bold">Create Comic</h1>
        </div>
    </MainLayout>
    </>
  )
}

export default Create