const Base_URL = "http://localhost:3001";


const fetcher = async(url) =>{
    let resObject ={errorMessage: '', data:[] };
    try{
    const response = await fetch(Base_URL + url);
const responseData = await response.json();
resObject.errorMessage = '';
resObject.data = responseData;

    }
    catch(err){
resObject.errorMessage = err.message
    }
    return resObject;
}

export const getCategories = () =>{
    return fetcher ('/categories')
}

export const getProducts= id =>{
    return fetcher ('/products?catId=' + id);
}