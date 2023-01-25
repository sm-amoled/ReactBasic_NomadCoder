class Book {
  String id;
  String title;
  List authors;
  String publishedDate;
  String thumbnail;
  String previewLink;

  Book({
    required this.id,
    required this.title,
    required this.authors,
    required this.publishedDate,
    required this.thumbnail,
    required this.previewLink,
  });

  Map toJson() {
    return {
      "id": id,
      "title": title,
      "authors": authors,
      "publishedDate": publishedDate,
      "thumbnail": thumbnail,
      "previewLink": previewLink,
    };
  }

  factory Book.fromJson(json) {
    return Book(
        id: json['id'],
        title: json['title'],
        authors: json['authors'],
        publishedDate: json['publishedDate'],
        thumbnail: json['thumbnail'],
        previewLink: json['previewLink']);
  }
}
