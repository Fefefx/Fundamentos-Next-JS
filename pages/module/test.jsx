import Pattern, { Comp1 as Blabla, Comp2, Comp4, Comp5, Comp6 } from "../../components/module/functional";

export default function Test(){
    return (
        <div>
            <Blabla></Blabla>
            <Comp2></Comp2>
            <Pattern></Pattern>
            <Comp4></Comp4>
            <Comp5></Comp5>
            <Comp6 msg="Legal !!!!"></Comp6>
        </div>
    )
}