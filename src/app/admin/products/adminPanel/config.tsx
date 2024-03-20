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
        name:"mugType",
    },
    {
        label:"Material",
        type:"text",
        value:material,
        name:"material",
    },
    {
        label:"Color",
        type:"text",
        value:color,
        name:"color",
    },
    {
        label:"Capacity",
        type:"number",
        value:capacity,
        name:"capacity",
    },
    {
        label:"Height(ml)",
        type:"number",
        value:height,
        name:"height",
    },
    {
        label:"Width(cm)",
        type:"number",
        value:width,
        name:"width",
    },
]