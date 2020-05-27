export const Header=()=>{
    let user=JSON.parse(localStorage.getItem("CurrentUser"));
    if(user&& user.token)
    {
        return {"x-auth-token":user.token};
    }
    else{
        return {};
    }
}