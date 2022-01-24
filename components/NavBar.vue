<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Панель навигации</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" exact aria-current="page" href="#">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Жанры</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Онгоинги</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">2022</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Топы</a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
        <button class="btn btn-outline-success" type="submit">Поиск</button>
      </form>
    </div>
  </div>
</nav>
</template>