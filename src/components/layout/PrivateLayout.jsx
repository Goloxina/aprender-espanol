import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
    return (
        <div>
            <header>Private Header</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}