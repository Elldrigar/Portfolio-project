import toFind from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import counter from "./count";

export default () => {
    let num = getNum();
    counter.init();
    while (num !== toFind) {
        info(num, toFind);
        num = getNum();
        counter.increment();
    }
    success(counter.result);
}
