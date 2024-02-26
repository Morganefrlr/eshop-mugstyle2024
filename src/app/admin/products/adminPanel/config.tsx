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



export const formCatConfig = [
    {
        label:"Mug Type",
        type:"text"
    },
    {
        label:"Material",
        type:"text"
    },
    {
        label:"Color",
        type:"text"
    },
    {
        label:"Capacity",
        type:"number"
    },
    {
        label:"Height(ml)",
        type:"number"
    },
    {
        label:"Width(cm)",
        type:"number"
    },
]