import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 영화 제목, 사진 데이터
    List<Map<String, dynamic>> dataList = [
      {
        "category": "탑건: 매버릭",
        "imgUrl": "https://i.ibb.co/sR32PN3/topgun.jpg",
      },
      {
        "category": "마녀2",
        "imgUrl": "https://i.ibb.co/CKMrv91/The-Witch.jpg",
      },
      {
        "category": "범죄도시2",
        "imgUrl": "https://i.ibb.co/2czdVdm/The-Outlaws.jpg",
      },
      {
        "category": "헤어질 결심",
        "imgUrl": "https://i.ibb.co/gM394CV/Decision-to-Leave.jpg",
      },
      {
        "category": "브로커",
        "imgUrl": "https://i.ibb.co/MSy1XNB/broker.jpg",
      },
      {
        "category": "문폴",
        "imgUrl": "https://i.ibb.co/4JYHHtc/Moonfall.jpg",
      },
    ];

    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          appBar: AppBar(
            iconTheme: IconThemeData(color: Colors.black),
            centerTitle: false,
            actions: [
              IconButton(
                onPressed: () {},
                icon: Icon(Icons.person_outline),
              )
            ],
            title: Column(
              children: [
                Row(
                  children: [
                    Text(
                      "Movie Reviews",
                      style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.w600,
                          color: Colors.black),
                    ),
                  ],
                ),
              ],
            ),
            backgroundColor: Colors.white,
            shadowColor: Colors.transparent,
          ),
          body: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextField(
                    decoration: InputDecoration(
                        labelText: "영화 제목을 검색해주세요.",
                        border: OutlineInputBorder(
                            borderSide: BorderSide(color: Colors.black)),
                        suffixIcon: Icon(Icons.search))),
              ),
              Expanded(
                child: ListView.builder(
                    itemCount: dataList.length,
                    itemBuilder: (BuildContext ctx, int idx) {
                      return Container(
                        width: double.infinity,
                        height: 200,
                        alignment: Alignment.center,
                        margin: EdgeInsets.all(8.0),
                        child: Stack(alignment: Alignment.center, children: [
                          Image.network(dataList[idx]["imgUrl"],
                              fit: BoxFit.cover,
                              width: double.infinity,
                              height: 200),
                          Container(
                            width: double.infinity,
                            height: 200,
                            color: Colors.black.withOpacity(0.5),
                          ),
                          Text(
                            dataList[idx]["category"],
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 36,
                              fontWeight: FontWeight.w500,
                            ),
                            textAlign: TextAlign.center,
                          )
                        ]),
                      );
                    }),
              )
            ],
          ),
        ));
  }
}
