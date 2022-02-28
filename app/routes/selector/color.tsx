import { Group } from "@mantine/core";
import { Link, NavLink, Outlet, useOutletContext } from "remix";
import type { ContextType } from '../selector';

export default function ColorRoute() {
    const { selectedColor } = useOutletContext<ContextType>();

    return (
        <div>
            <div>Some test text --- { selectedColor ?? "no color selected"}!</div>
            <Group>
                <NavLink to="circle">circle</NavLink>
                <Link to="square">square</Link>
                <Link to="rectangle">rectangle</Link>
            </Group>
            <Outlet />
        </div>
    )
}