import { Outlet } from "remix";

export default function ShapeRoute() {
    return (
        <div>
            <div>Shape things</div>
            <Outlet />
        </div>
    )
}