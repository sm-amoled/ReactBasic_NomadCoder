import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

import 'home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
          appBar: AppBar(
            leading: Row(
              children: [
                SizedBox(width: 16),
                Text(
                  '중앙동',
                  style: TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                    fontSize: 20,
                  ),
                ),
                Icon(
                  Icons.keyboard_arrow_down_rounded,
                  color: Colors.black,
                ),
              ],
            ),
            leadingWidth: 100,
            actions: [
              IconButton(
                onPressed: () {},
                icon: Icon(CupertinoIcons.search, color: Colors.black),
              ),
              IconButton(
                onPressed: () {},
                icon: Icon(Icons.menu_rounded, color: Colors.black),
              ),
              IconButton(
                onPressed: () {},
                icon: Icon(CupertinoIcons.bell, color: Colors.black),
              ),
            ],
            backgroundColor: Colors.white,
            elevation: 0.5,
          ),
          body: HomePage()),
    );
  }
}
