import { v4 as uuid } from 'uuid';

const uuidRandom = (value?:string) =>{    
    const uuidRandom: string = `${uuid()}${value??''}`;
    return uuidRandom;      
}

export default uuidRandom;