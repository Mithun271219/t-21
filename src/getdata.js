import Pricelist from './listing'

function GetJsonData(){
    let data=[
        {
            'id':'FREE',
            'preice':'0',
            'user': 'Single User',
            'storage': '5GB Storage',
            'publicproj': 'Unlimited Public Projects',
            'acess':'Community Access',
            'privateproj': 'Unlimited Private Projects',
            'support':'Dedicated Phone Support',
            'domain':'Free Subdomain',
            'status':'Monthly Status Reports'
        },
        {
            'id':'PLUS',
            'preice':'9',
            'user': '5 User',
            'storage': '50GB Storage',
            'publicproj': 'Unlimited Public Projects',
            'acess':'Community Access',
            'privateproj': 'Unlimited Private Projects',
            'support':'Dedicated Phone Support',
            'domain':'Free Subdomain',
            'status':'Monthly Status Reports'
        },
        {
            'id':'PRO',
            'preice':'49',
            'user': 'Unlimited User',
            'storage': '150GB Storage',
            'publicproj': 'Unlimited Public Projects',
            'acess':'Community Access',
            'privateproj': 'Unlimited Private Projects',
            'support':'Dedicated Phone Support',
            'domain':'UNLIMITED Free Subdomain',
            'status':'Monthly Status Reports'
        }
    ]
    return(
        data.map((jdata)=>{
            return(
               <Pricelist key={jdata.id} {...jdata} />
            )
        })
    )
}
export default GetJsonData;

