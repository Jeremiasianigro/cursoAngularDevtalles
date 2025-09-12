export interface Passanger {
    name: string;
    children?: string[];
}   

const passanger1: Passanger = {
    name: "Jere"

};
const passanger2: Passanger = {
    name: "Silvana",
    children: ["Ciro", "Nina"]
};  


const ReturnChildrenNumber = (passanger: Passanger): number => {
     
    const howManyChildren = passanger.children?.length || 0;
    // const howManyChildren = passanger.children!.length
    console.log(passanger.name, howManyChildren);
    return howManyChildren;

};

ReturnChildrenNumber(passanger2);
