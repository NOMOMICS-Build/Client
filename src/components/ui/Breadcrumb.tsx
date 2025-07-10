import { Link } from "react-router-dom"

interface BreadcrumbProps {
    title: string
    link: string
}

const Breadcrumb = ({title, link}: BreadcrumbProps) => {
  return (
    <div>
        <div className="flex items-center gap-1 font-semibold">
            <Link to="/" className="text-muted">Home</Link>
            <span>/</span>
            <Link to={link} className="text-main">{title}</Link>
        </div>
    </div>
  )
}

export default Breadcrumb