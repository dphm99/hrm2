import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from "./Breadcrumb.module.css"
function Breadcrumbs({ breadItem }) {

    return (
        <div className="container">
            <Breadcrumb>
                {breadItem.map((breadItem, index) => (
                    <Breadcrumb.Item
                        key={index}
                        href={breadItem.href}
                        active={breadItem.isActive}
                        className={breadItem.isActive ?`${styles.breadLink_active}`:`${styles.breadLink}`}
                    >
                        {breadItem.title}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    )
}
export default Breadcrumbs;