

document.addEventListener('DOMContentLoaded', () => {
    let back = document.getElementById("back");
    let character = document.getElementById("Character");
    let Enemy1 = document.getElementById("Enemy1");
    let attack = document.getElementById("Attack")
    let speed = 10;
    let PlayerX = 0;
    let PlayerY = 0;
    
    let IsMovingLeft = false;
    let IsMovingRight = false;
    let IsJumping = false;
    
    let jumpHeight = 18;
    let Gravity = 1;
    let distance = 0;
    let SpeedY = 0;

    let health = 3;
    let PlayerDirection = 1;
    let canAttack = true;
    let WaitAttack = 1000;

    let enemyX = 0;
    let enemyDirection = 1; // 1 para direita, -1 para esquerda
    const enemySpeed = 2;
    const enemyRange = 100;

    function GameLoop() {
        

     
       
        if (IsJumping) {
            SpeedY -= Gravity;
            PlayerY += SpeedY;
            if (PlayerY <= 0) {
                PlayerY = 0;
                IsJumping = false;
                SpeedY = 0;
            }
        } else {

            if (PlayerY < 0) {
                SpeedY += Gravity;
                PlayerY += SpeedY;
            }
        }
        
    
        const CenterX = back.clientWidth / 2 - (character.clientWidth / 2);
        character.style.left = `${CenterX}px`;
        character.style.bottom = `${PlayerY}px`;


        back.style.backgroundPosition = `${-distance}px 0`;
        Enemy1.style.left = `${-distance}px`
        if (IsMovingLeft) {
            distance -= speed;
        }
        if (IsMovingRight) {
            distance += speed;
        }
        requestAnimationFrame(GameLoop);
    }
    
    GameLoop();

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                IsMovingLeft = true;
                PlayerDirection = -1;
                break;
            case 'ArrowRight':
                IsMovingRight = true;
                PlayerDirection = 1
                break;
            case 'ArrowUp':
                if (!IsJumping) {
                    IsJumping = true;
                    SpeedY = jumpHeight; 
                }
                break;
                case 'x':
                    case 'X':
                        if(canAttack){
                            canAttack = false
                        const CenterX = back.clientWidth / 2 - (character.clientWidth / 2);
                        attack.style.display = 'block'; 
                        attack.style.left = PlayerDirection === 1 ? `${CenterX + character.clientWidth}px` : `${CenterX - attack.clientWidth}px`;
                        attack.style.bottom = `${PlayerY}px`;
                        console.log("Ataque");
                        getCollisionNeuroneo();
                        setTimeout(() => {
                            attack.style.display = 'none'; 
                        }, 100);
                    setTimeout(() => {canAttack = true;},WaitAttack)}
                        break;
                }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                IsMovingLeft = false;
                break;
            case 'ArrowRight':
                IsMovingRight = false;
                break;
        }
    });



    function getCollisionNeuroneo(){
        let attackborder = attack.getBoundingClientRect();
        let EnemyLimit = Enemy1.getBoundingClientRect();

        if(!(attackborder.right < EnemyLimit.left|| 
            attackborder.left > EnemyLimit.right || 
            attackborder.bottom < EnemyLimit.top || 
            attackborder.top > EnemyLimit.bottom)){
                console.log("TOCOU!")
                Enemy1.style.display = 'none';
            }else{console.log("nao tocou!")}
    }
});