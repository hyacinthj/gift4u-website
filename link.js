const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const Shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container');
const button=document.querySelector('.button');
click.addEventListener('click',()=>{
    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        Shadow.classList.add('active')
        giftContainer.classList.add('active')
        button.classList.add('active')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        button.classList.remove('active')
    }
}
)