import { createRouter, createWebHistory } from 'vue-router'

import StudentList from "../views/students/studentlist.vue"
import AddStudent from "../views/students/addstudent.vue"
import BooksReport from "../views/report/booksreport.vue"
import AddBook from "../views/books/addbook.vue"
import BookList from "../views/books/booklist.vue"
import IssueBook from "../views/books/issuebook.vue"
import ReturnBook from "../views/books/returnbook.vue"
import SignUp from "../components/SignUp.vue"
import LogIn from "../components/LogIn.vue"
import Home from "../views/HomeView.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/StudentList',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/AddStudent',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/BooksReport',
    name: 'BooksReport',
    component: BooksReport
  },
  {
    path: '/BookList',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/IssueBook',
    name: 'IssueBook',
    component: IssueBook
  },
  {
    path: '/ReturnBook',
    name: 'ReturnBook',
    component: ReturnBook
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
