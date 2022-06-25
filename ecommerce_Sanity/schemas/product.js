export default{
    name:"product",
    title:"product",
    type:"document",
    fields:[
        {
            name:"image",
            title:"image",
            type:"array",
            of:[{type:"string"}],
            options:{
                hotspot:true,
            }
        },
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxlength:"90"
            }
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            name:"details",
            title:"Details",
            type:"string"
        },
        {
            name:"genres",
            title:"genres",
            type:"array",
            of:[{type:'string'}]
        },
    ]
}