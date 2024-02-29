import AddForm from "./AddForm"
import EditForm from "./EditForm"




export const adminPanelConfig = [
    {
        index:'edit',
        label:'Edit Product',
        Content: <EditForm />,
    },
    {
        index:'add',
        label:'Add New Product',
        Content:<AddForm /> ,
    },
]

type Props = {
    capacity: number,
    width: number,
    height: number,
    material: string,
    color: string,
    mugType: string, 
}

export const formCatConfig = ({capacity, width, height, material, color, mugType} : Props) => [
    {
        label:"Mug Type",
        type:"text",
        value:mugType,
    },
    {
        label:"Material",
        type:"text",
        value:material,
    },
    {
        label:"Color",
        type:"text",
        value:color,
    },
    {
        label:"Capacity",
        type:"number",
        value:capacity,
    },
    {
        label:"Height(ml)",
        type:"number",
        value:height,
    },
    {
        label:"Width(cm)",
        type:"number",
        value:width,
    },
]