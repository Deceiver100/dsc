import Axios from "axios"
export default function ajax(url = "", params = {}, type = "get") {
    let promise
    return new Promise((resolve, reject) => {
        if (type == "get") {
            let oparams = "";
            for (var key in params) {
                oparams += key + "=" + params[key] + "&"
            }
            if (oparams !== "") {
                oparams = oparams.substring(0, oparams.length - 1)
            }
            url = url + "?" + oparams;
            promise = Axios.get(url)
        } else if (type === "post") {
            promise = Axios.post(url, params)
        }
        promise.then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}