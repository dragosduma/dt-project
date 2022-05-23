<template>
  <div>

    <div class="wrapper">

      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          <button v-on:click="logout" onclick="document.location.reload(true)">Logout</button>
        </ul>

        <!-- Right navbar links -->

      </nav>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
        <!-- Brand Logo -->
        <a href="/" class="brand-link">
          <i class="fas fa-books"></i>
          <span class="brand-text font-weight-light"><strong>Library Management</strong></span>
        </a>

        <!-- Sidebar -->
        <div
          class="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-scrollbar-vertical-hidden ">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">

            </div>
            <div id="app">
              <h2 :for="name" style="color:#6a75bd;">Hello {{name}}</h2>
            </div>
          </div>

          <!-- SidebarSearch Form -->


          <!-- Sidebar Menu -->
          <nav class="mt-2" style="text-align:left">
            <ul class="nav nav-pills nav-sidebar flex-columns" data-widget="treeview" role="menu"
              data-accordion="false">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-users"></i>
                  <p>
                    Students
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/StudentList" class="nav-link">
                      <i class="fa fa-user-friends nav-icon"></i>
                      <p>Student List</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/AddStudent" class="nav-link">
                      <i class="fas fa-user-plus nav-icon"></i>
                      <p>Add Student</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-book"></i>
                  <p>
                    Books
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/AddBook" class="nav-link">
                      <i class="fas fa-plus nav-icon"></i>
                      <p>Add Book</p>
                    </router-link>
                  </li>
                  <!--
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Remove Book</p>
              </router-link>         
              </li>
              -->
                  <li class="nav-item">
                    <router-link to="/IssueBook" class="nav-link">
                      <i class="fas fa-edit nav-icon"></i>
                      <p>Issue Book</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/ReturnBook" class="nav-link">
                      <i class="fas fa-eraser nav-icon"></i>
                      <p>Return Book</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/BookList" class="nav-link">
                      <i class="fas fa-list nav-icon"></i>
                      <p>Book List</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-chart-bar"></i>
                  <p>
                    Reports
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/BooksReport" class="nav-link">
                      <i class="fa fa-chart-pie nav-icon"></i>
                      <p>Books Report</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper p-3 ">
        <!-- Content Header (Page header) -->
        <div class="card">
          <router-view></router-view>
        </div>
      </div>
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
        <div class="p-3">
          <h5>Title</h5>
          <p>Sidebar content</p>
        </div>
      </aside>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <footer class="main-footer">
        <!-- To the right -->
        <div class="float-right d-none d-sm-inline">
          Anything you want
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>
    </div>
    <!-- ./wrapper -->

  </div>
</template>

<script>
//import Home from "./views/HomeView.vue"
export default {
  data() {
    return {
      name: '',
    }
  },
  components: {

  },
  methods: {
    logout() {
      localStorage.clear();
      console.warn("message")
      this.$router.push({ name: "LogIn" })
    }
  },
  mounted() {
    if (localStorage.getItem('user-info')) {
      this.name = JSON.parse(localStorage.getItem('user-info')).name;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  }
}

</script>

