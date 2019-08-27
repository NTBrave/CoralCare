<template>
    <div>
              <div class="banner" :style="imageUrl2">
                <div class="border">
                </div>
              </div>
    </div>
</template>
<script>
    export default {
   
        computed: {
      imageUrl2: function () 
        { 
          return "background-image: url(https://www.dive4love.org/wp-content/uploads/2018/11/6501400.jpg)"
        }
    }
    }
</script>
<style scoped>
html, body {
  height: 100%;
  margin: 0;
  font-size: 14px;

  text-align: center;
  font-weight: 400;
  line-height: 1.8em;
  color: #666;
}

.banner{
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}


.banner {
  min-height: 400px;
}

.border {
  position: absolute;
  /* top: 45%; */
  /* 这句话就可以居中了 */
  /* width: 95%; */
  color: #000;
  font-size: 27px;
  text-align: center;
  letter-spacing: 8px;
  text-transform: uppercase;
  padding: 20px;
}

.banner-text {
  padding: 25px 55px;
  background-color: black;
  color: #fff;
  letter-spacing: 20px;
}

.section {
  text-align: center;
  padding: 50px 60px;
}

footer {
  padding: 45px;
  background-color: #F5F5F5;
  font-size: 18px;
  font-family: 'Roboto', sans serif;
  font-weight: bold;
  color: #757575;
  text-align: center;
}

@media(max-width:568px) {
  .banner, .banner-2, .banner-3, .banner-4 {
  background-attachment: scroll;
  }
}
</style>



// WEBPACK FOOTER //
// src/components/parallax/parallax1.vue