<template>
  <h1>制作物</h1>
  <div class="product">
    <div class="program">
      <img src="../assets/restaurant-finder-app/index.png" alt="プログラムの写真">
      <p>
        大学の授業で作成したホットペッパーAPIを使用したcgiプログラム
      </p>
    </div>
    <div class="program">
      <img src="../assets/restaurant-finder-app/index.png" alt="プログラムの写真">
      <p>
        大学の授業で作成したホットペッパーAPIを使用したcgiプログラム
      </p>
    </div>
    <div class="program">
      <img src="../assets/restaurant-finder-app/index.png" alt="プログラムの写真">
      <p>
        大学の授業で作成したホットペッパーAPIを使用したcgiプログラム
      </p>
    </div>
  </div>
</template>

<style>

.product {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left:10%;
  padding-right: 10%;
}

.product div{
  width:49%;
  min-width: 21rem;
  margin:3px;
	background: #FFF;
}

.product div:hover {
  transition: 0.5s ;
  transform: translateY(-10px);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
}

.product p{
  text-align: left;
  padding: 10px;
}

img{
  max-width: 100%;
}
</style>
