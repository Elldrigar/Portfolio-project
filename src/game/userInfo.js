import {tooLess, tooMuch} from "./constants";

export default (num, expected) => {
    if (num > expected) {
        alert(tooMuch);
    } else {
        alert(tooLess);
    }
}