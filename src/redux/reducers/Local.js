export const Local = (key) => {
    try{
       const get = localStorage.getItem(key)

       if (get===null){
           return []
       }

      const final = JSON.parse(get)
      return final
    }
    catch{
        return []
    }
}