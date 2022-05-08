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
    
    </ul>

    <!-- Right navbar links -->
   
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4 .layout-fixed">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <i class = "fas fa-books"></i>
      <span class="brand-text font-weight-light"><strong>Library Management</strong></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-scrollbar-vertical-hidden ">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
     

      <!-- Sidebar Menu -->
      <nav class="mt-2" style = "text-align:left">
        <ul class = "nav nav-pills nav-sidebar flex-columns" data-widget="treeview" role = "menu" data-accordion = "false">
            <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Students
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Student List</p>
              </router-link>               
              </li>
              <li class="nav-item">
              <router-link to="/AddStudent" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
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
                  <i class="far fa-circle nav-icon"></i>
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
                  <i class="far fa-circle nav-icon"></i>
                  <p>Issue Book</p>
              </router-link>         
              </li>
              <li class="nav-item">
                <router-link to="/ReturnBook" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Return Book</p>
              </router-link>         
              </li>
              <li class="nav-item">
                <router-link to="/BookList" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Book List</p>
              </router-link>         
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Reports
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/BooksReport" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
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
export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>
