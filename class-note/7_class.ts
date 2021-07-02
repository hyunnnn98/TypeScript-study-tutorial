class Person {
    // 클래스 안에서만 사용하려면 "private"
    private name: string;
    // 기본적으로 public, protected
    public age: number;
    // 읽기 전용
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}