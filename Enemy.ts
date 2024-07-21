export interface EnemyInterface{
    Name: string;
    Lvl: number;
    Attack: number;
    Life: number;
    speed: number;
    
    GetEnemy(): void;
    Damage(): void;
}

export class Enemy implements EnemyInterface{
    Name: string;
    Lvl: number;
    Life: number;
    Attack: number;
    speed: number;
    constructor(Name: string,Lvl: number, Attack: number, Life: number, speed: number){
        this.Attack = Attack;
        this.Life = Life;
        this.Lvl = Lvl;
        this.Name = Name;
        this.speed = speed;
    }
    GetEnemy(): void {
        
    }
    Damage(): void {
        
    }

}
