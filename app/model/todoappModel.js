const { initilizeFirbase } = require("../../lib/firebase");
const {
    getFirestore,
    doc,
    setDoc,
    collection,
    query,
    getDocs,
    where
} = require("firebase/firestore");

const dbCon = initilizeFirbase();

async function todoSet (data) {
    try {
        const firbaseDB = getFirestore(dbCon);
        const setData = doc(firbaseDB, "todo", getTimeEpoch());
        data.uniqid = getTimeEpoch();
        const setDataRes = await setDoc(setData, data);
        return { success: true, message: "Data inserted successfully" };
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function getTodoData () {
    const finalData = [];
    const firbaseDB = getFirestore(dbCon);
    const cityRef = collection(firbaseDB, "todo");
    const que = query(cityRef);
    const getData = await getDocs(que);
    getData.forEach((data) => {
        finalData.push(data.data());
    });
    return finalData;
}

async function getTodoDataBySearch (data) {
    const finalData = [];
    const firbaseDB = getFirestore(dbCon);
    const cityRef = collection(firbaseDB, "todo");
    const que = query(cityRef);
    const getData = await getDocs(que, where("uniqid") == data.uniqid);
    getData.forEach((data) => {
        finalData.push(data.data());
    });
    return finalData;
}

const getTimeEpoch = () => {
    return new Date().getTime().toString();
};

module.exports = { todoSet, getTodoData, getTodoDataBySearch };
