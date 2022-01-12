const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;


async function fetchQuery() {
    
    let url:string;

    url = `${baseUrl}/beers`

    console.log(url)
     
    try{

    
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;

    }
    catch(error){
        console.log(error)
    }

}

export {baseUrl,fetchQuery}