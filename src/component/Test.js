// // const output = pipe([reverse, toUpperCase, concatTo])("cat") > TACcat

import { useState } from "react";

// // function pipe(arr) {
// //     if(!Array.isArray(arr)) return false;
// //     //
// //     // let a = arr[0](v);
// //     // let b = arr[1](a);
// //     // let c = arr[2](c);
// //     return function(v) {
// //         let i = 0;
// //         let values;
// //         while(i < arr.length) {
// //             if(i==0) {
// //                 values = arr[i](v);
// //             } else {
// //                 values = arr[i](values);
// //             }
// //             i++;
// //         }
// //         return values;
// //     }
// //     [1,2,3,4,5].reduce((a,c)=> {
// //         return a+=c;
// //     })
// // }

// // interface obj {
    

// // }

// // const App = () => {

// //     return (
// //         <Button onclick></Button>
// //     )
// // }

// // Action
// // export default fetch (state= intitia,action) {
// //     const cloneState = [...state];
// //     switch(action)
// //         case("NAME")
// //             return state;
// // }

// ul {
//     // color:red;
//     li {
//         color:green;
//     }

// }

// // .div1 {
// //     color:red;
// // }
// ul>li{
//     color:green;
// }

const Test = () => {
    const [boxClass, setBoxclass] = useState('');
    return (
        <div className="grid">
            <div className="first" onClick={()=>setBoxclass('forthBox')}></div>
            <div className="second" onClick={()=>setBoxclass('thirdBox')}></div>
            <div className="main">
                <div className={`box ${boxClass}`}>{boxClass}</div>
            </div>
            <div className="third" onClick={()=>setBoxclass('firstBox')}></div>
            <div className="forth" onClick={()=>setBoxclass('secondBox')}></div>
        </div>
    )
}

export default Test;