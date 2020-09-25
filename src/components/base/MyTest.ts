
export default class MyTest<T>{

    instance: T
}

type label = {
    name: number,
    id: string,
    route: string
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}

let test = new MyTest<Partial<label>>()
test.instance.name



let keys: keyof Map<string, number>
keys = "entries"



interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity



type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;  // type可以用于联合类型
function getName(n: NameOrResolver): Name {

    if (typeof n == "string") {
        return n
    }
    else {
        return n();
    }
}



interface Bird {
    fly()
    layEggs()
}
interface Fish {
    swim()
    layEggs()
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

let bird:Bird ={
    layEggs(){

    },
    fly(){

    }
}

let isit =  isFish(bird)

type MYENUMS = "LIST" | "ARRAY" | "STRING" | "BOOLEAN"
