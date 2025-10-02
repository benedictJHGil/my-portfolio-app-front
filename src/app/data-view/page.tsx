// interface MyData {
//     id: number;
//     name_kr: string;
//     [key: string]: any;
// }

// async function getData(): Promise<MyData> {
//     const url = "http://172.30.1.35:8080/api/about/1"

//     try {
//         const response = await fetch(url, {cache: "no-cache"});

//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }

//         return await response.json();
//     } catch (error) {
//         console.log(error);
//         throw new Error("error");
//     }
// }

export default async function DataViewPage() {
    // try {
    //     const data = await getData();

    //     return (
    //         <div>
    //             <h1>Data View</h1>
    //             <pre>ID : {data.id}</pre>
    //             <pre>한글이름 : {data.name_kr}</pre>
    //             <pre>영문이름 : {data.name_en}</pre>
    //             <pre>닉네임 : {data.nickname}</pre>
    //         </div>
    //     )

    // } catch (error) {
    //     const errorMessage = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.';
    //     return (
    //         <h1>{errorMessage}</h1>
    //     )
    // }
}