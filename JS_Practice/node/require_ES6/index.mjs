import { odd, even } from './let';
import checkNumber from './func';

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        //홀수면
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

//파일 확장자 mjs
// 실행시 node --experimental-modules index.mjs