import { Fragment } from "react/cjs/react.production.min";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            {/* Since we use the Layout component as wrapper around the Switch within App, we can just use props.children as content to be inserted */}
            <main className={styles.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout;