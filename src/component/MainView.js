
import ListBook from "./ListBook";

import FormInputBook from "./FormInputBook";
import UserInfo from "./UserInfo";
import Home from "./Home";
import BookList from "../model/Book";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ThongKe from "./ThongKe";
import NavigationBar from "./NavigationBar"
import FormUpdateBook from "./Bookupdate"
import UserInfoUpdate from "./UserInfoupdate"


const book = [
  new BookList("Sach van", "Nguyen Van A", "Kim dong"),
  new BookList("Sach toan", "Nguyen Van B", "Kim dong"),
  new BookList("Truyen cuoi", "Nguyen Van C", "Kim dong"),
  new BookList("Truyen ngu ngon", "Nguyen Van D", "Kim dong"),
  new BookList("Truyen doremon", "Nguyen Van E", "Kim dong"),
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
  new BookList("Sach su", "Nguyen Van I", "Kim dong"),
  new BookList("Sach ly", "Nguyen Van K", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van L", "Kim dong"),
  new BookList("Truyen tranh", "Nguyen Van M", "Kim dong"),
];
const book1 = [
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
  new BookList("Sach su", "Nguyen Van I", "Kim dong"),
  new BookList("Sach ly", "Nguyen Van K", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van L", "Kim dong"),
  new BookList("Truyen tranh", "Nguyen Van M", "Kim dong"),
];
const book2 = [
  new BookList("Sach van", "Nguyen Van A", "Kim dong"),
  new BookList("Sach toan", "Nguyen Van B", "Kim dong"),
  new BookList("Truyen cuoi", "Nguyen Van C", "Kim dong"),
  new BookList("Truyen ngu ngon", "Nguyen Van D", "Kim dong"),
  new BookList("Truyen doremon", "Nguyen Van E", "Kim dong"),
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
];
export default class MainView extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/thongke">
            <ThongKe/>
          </Route>
          <Route path="/giosach">
            <ListBook listBooks={book1} />
          </Route>
          <Route path="/quanly/themsach">
            <FormInputBook />
          </Route>
          <Route path="/quanly/UserInfoUpdate">
            <UserInfoUpdate />
          </Route>
          <Route path="/quanly/suasach">
            <FormUpdateBook />
          </Route>
          <Route path="/quanly/danhsach">
            <ListBook listBooks={book} />
            <Route path="/quanly/update"><FormInputBook/></Route>
          </Route>

          <Route path="/user/info">
            <UserInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
       
      </Router>
    );
  }
}
