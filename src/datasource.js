
export const userRows=[
    {
        id:1,
        nom:'gps1',
        img:"nemo/src/pages/R.jpeg",
        valeur:45,
        Modification:'15/5/2005',
        emplacement:'left',
        Responsable:'editor',
        status:'allume'
    },
    {
        id:1,
        nom:'gps1',
        img:"nemo/src/pages/R.jpeg",
        valeur:45,
        Modification:'15/5/2005',
        emplacement:'left',
        Responsable:'',
        status:'allume'
    },
    {
        id:1,
        nom:'gps1',
        img:"nemo/src/pages/R.jpeg",
        valeur:45,
        Modification:'15/5/2005',
        emplacement:'left',
        Responsable:'editor',
        status:'allume'
    },
    {
        id:1,
        nom:'gps1',
        img:"nemo/src/pages/R.jpeg",
        valeur:45,
        Modification:'15/5/2005',
        emplacement:'left',
        Responsable:'editor',
        status:'allume'
    },
]
export const userColumns = [{field:'id',headerName:'ID',width:100},
    {
        field:'nom',headerName:"Name",width:170,renderCell:(params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:'valeur',headerName:'Valeurs en temps reel',width:120
    },
    {
        field:'Modification',headerName:'Date de derniere modification',width:200
    },
    {
        field:'emplacement',headerName:'Emplacement',width:90
    },
    {
        field:'Responsable',headerName:'Responsable',width:150
    },
    
    {
        field:'status',headerName:'Status',width:90,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
]