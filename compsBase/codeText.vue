<template>
    <div>
        <pre class="code pd20 bg-g mlra">
const initialTime = new Date();
let counter = 0;
let waitTime = 0;

const checkOpen = setInterval(() => {
   count++;
   waitTime = new Date() - initialTime;

   if (waitTime > 2500) {
      clearInterval(checkOpen);
      cb();
   }

   if (counter < 100) return;

   clearInterval(checkOpen);

   const hide = document.hidden || document.webkitHidden|| document.webkitHidden|| document.webkitHidden|| document.webkitHidden|| document.webkitHidden|| document.webkitHidden;

   if (!hide) {
      cb(); // 唤端失败的回调函数
   }
}, 20);
        </pre>
    </div>
</template>

<script>
export default {}
</script>

<style>
.code {
  width: 300px;
  overflow-x: auto;
}
</style>
