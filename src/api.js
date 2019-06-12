const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]

import axios from 'axios';

export default () => {
    // return function(dispatch) {
    //     return axios.get("https://api.myjson.com/bins/19dtxc").then(({ data }) => {console.log("aszfxsf",data)});
    // };

    return new Promise((resolve, reject) => {
        axios.get(" https://api.github.com/users/supreetsingh247/repos")
            .then(({ data }) => {
                return resolve(data)
            });
    })
}