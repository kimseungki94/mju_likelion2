import { odd, even } from './let';

function checkOddOrEven(num){
    if (num %2){
        //홀수면
        return odd;
    }
    return even;
}
export default checkOddOrEven;

