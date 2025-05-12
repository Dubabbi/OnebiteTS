{/* 제네릭 클래스 */}

class NumberList{
    constructor(private list:number[]){}
    push(data:number){
        this.list.push(data);
    }
    pop(){
        return this.list.pop();
    }
    print(){
        console.log(this.list);
    }
}