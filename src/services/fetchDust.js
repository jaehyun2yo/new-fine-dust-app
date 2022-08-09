import axios from "axios";

const fetchDust = async (setdata, selectedSido) => {
  // const sidoSelect = selectedSido ? selectedSido : "전국";
  const getParameters = {
    serviceKey:
      "l0nbWhpAc7sw9na%2FgOkvDeOrTARupcnTfitwtAWSw8KJmxr2ctqYlb4EMTWt5VH9iG4IoBG%2Fxm0gOFXLQKmCIg%3D%3D",
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    sidoName: selectedSido ? selectedSido : "전국",
    ver: "1.0",
  };

  const response = await axios.get(
    `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
  );

  setdata(() => {
    return response.data["response"]["body"]["items"]
  });
};

export { fetchDust };
