
// Creating tables
Table users {
  id int [pk ,not null, increment] // auto-increment
  userId varchar(100) [pk, not null]
  userPassword varchar(100) [not null]
  email varchar(30) [not null]
  userName varchar(30) [not null]
  userNickname varchar(30) [not null]
  level varchar(2) [not null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  cartist varchat(1000) [not null]
}

Table usercontents {
  id int [pk ,not null, increment] // auto-increment
  userId varchar(100) [pk, not null]
  orderId varchar(100) [null]
  contentId varchar(100) [null]
  paymentId varchar(100) [null]
  imageCount int(1) [not null]
  resultVideo varchar(100) [null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
}

Table notices {
  id int [pk ,not null, increment] // auto-increment
  category varchar(50) [not null]
  title varchar(100) [not null]
  content varchar(4000) [not null]
  author varchar(30) [not null]
  srcPath varchar(200)
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  thumbnail varchar(200)
  periodStart varchar(8)
  periodEnd varchar(8)
}

Table reviewcomments {
  id int [pk ,not null, increment] // auto-increment
  reviewId varchar(100)
  reviewKey varchar(100)
  title varchar(100) [not null]
  content varchar(2000) [not null]
  author varchar(30) [not null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
}

Table itemcontents {
  category varchar(50) [not null]
  title varchar(100) [not null]
  price int [not null]
  author varchar(30) [not null]
  srcPath varchar(200) [not null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  thumbnail varchar(200) [not null]
  content varchar(4000) [not null]
  discount int [not null]
  contentCode varchar(50) [not null]
  hashTag varchar(300) [not null]
  contentId varchar(32) [pk, not null]
}

Table itemorders {
  orderId varchar(36) [pk, not null]
  userId varchar(100)
  paymentStatus varchar(2) [not null]
  contentId varchar(100)
  itemCount varchar(100) [not null]
  dvdServ varchar(1) [not null]
  usbServ varchar(1) [not null]
  price int [not null]
  reviewStatus varchar(1) [not null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  paymentId varchar(100)
}

Table itemreviews {
  category varchar(50) [not null]
  title varchar(100) [not null]
  hashTag varchar(100) [not null]
  content varchar(2000) [not null]
  author varchar(30) [not null]
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  contentId varchar(100) [not null]
  orderId varchar(100)
  userId varchar(100) [not null]
  reviewId varchar(36) [pk, not null]
}

Table itemcarts {
  id int [pk, not null, increment]
  userId varchar(100) [not null]
  contentId varchar(100) [not null]
  category varchar(50) [not null]
  titile varchar(100) [not null]
  price int [not null]
  discount int [not null]
  thumbnail varchar(200) [not null]
  itemCount varchar(100) [not null]
  options varchar(100)
  createdAt datatime(6) [not null]
  updateedAt datatime(6) [not null]
  deletedAt datatime(6) [null]
  dvdServ varchar(1) [not null]
  usbServ varchar(1) [not null]
  }
//----------------------------------------------//