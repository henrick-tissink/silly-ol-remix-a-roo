import { Button, Group } from "@mantine/core";
import { useState } from "react";
import { Outlet, useParams } from "remix";

type ColorSelection = undefined | "RED" | "BLUE" | "GREEN"
export type ContextType = {
  selectedColor: ColorSelection
}

export default function Index() {
    const [selectedColor, setSelectedColor] = useState<ColorSelection>()
    const context: ContextType = { selectedColor }
    const params = useParams()

    return (
    <div className="home-page">
        <div className="route-selector">
            <Group className="color-selection">
                <Button className="red-button" onClick={() => setSelectedColor("RED")}>Red</Button>
                <Button className="green-button" onClick={() => setSelectedColor("GREEN")}>Green</Button>
                <Button className="blue-button" onClick={() => setSelectedColor("BLUE")}>Blue</Button>
            </Group>
            <Outlet context={context}/>
        </div>
    </div>
    )
}