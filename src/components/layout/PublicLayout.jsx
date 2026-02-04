import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <div>
            <header>Public Header</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}