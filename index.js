const driver = {
    name: "Sam"
}

function updateDriverWithKeyAndValue(obj, key, val) {
    let copyOfObj = {...obj};
    copyOfObj[key] = val;
    return copyOfObj;

}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj
}

function deleteFromDriverByKey(obj, key) {
    let copyofObj = {...obj};
    delete copyofObj[key];
    return copyofObj;
}


function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;

}




updateDriverWithKeyAndValue(driver, 'address', '11 broad')