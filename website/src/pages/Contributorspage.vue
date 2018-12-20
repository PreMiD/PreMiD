<template>
  <div class="credits_container" id="content">
    <div id="loader" style="text-align:center;width:100vw;"><div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>
    <!--<profile username="Timeraa" />
    <img src="../assets/images/Timeraa.png">-->
  </div>
</template>

<script>
import Profile from '../components/ContributorProfile'

export default {
  name: 'Contributors',
  components: {Profile},
  head: {
    title: {inner: "Contributors"}
  },
  mounted(){
    let scr = document.createElement('script');
    /* classic = "<h2 style=\'color:"+d[i].roleColor+";\'>"+d[i].name+"</h2><p>"+d[i].role+"</p><img src=\'"+d[i].avatar+"\' style=\'width:150px;border-radius:1rem;\'>" */
    /* new = "<div class=\'usercard\' style=\'--hoverColor: "+d[i].roleColor+"\'>
        <div>
          <div class=\'credits_avatar\'>
            <img draggable=\'false\' src=\'"+d[i].avatar+"\'>
          </div>
          <div class=\'credits_text\'>
            <h6>"+d[i].name+"</h6>
            <p>"+d[i].role+"</p>
          </div>
        </div>
      </div>" */
    scr.innerHTML = '$.getJSON("https://api.premid.app/credits", function(d){d.sort(function(a, b){return b.rolePosition - a.rolePosition});for(i = 0;i < d.length; i++){$("#content").append("<div data-v-9be4daaa class=\'usercard\' style=\'--hoverColor: "+d[i].roleColor+"\'><div data-v-9be4daaa><div data-v-9be4daaa class=\'credits_avatar\'><img data-v-9be4daaa src=\'"+d[i].avatar+"\'></div><div data-v-9be4daaa class=\'credits_text\'><h6 data-v-9be4daaa>"+d[i].name+"</h6><p data-v-9be4daaa>"+d[i].role+"</p></div></div>")}$("#loader").remove();});';
    document.head.appendChild(scr);
  }
}
</script>

<style scoped>
#content {
  text-align: center;
}

// taken from extension

#credits table tr{
    border:none;
}
#credits table tr td{
    width:50%;
}
.credits_text h6{
    font-size:22px;
    margin-bottom:4px;
}
.usercard:hover {
    color:rgba(255,255,255,0.8) !important
}
.credits_text p{
    font-size:20px;
    font-weight:600;
    margin:0;
}
.credits_container{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-flow:row wrap;
    flex-flow:row wrap;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    margin-bottom:5px;
}
.usercard{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    background:#fff;
    -webkit-box-shadow:0px 3px 14px rgba(0,0,0,0.15);
    box-shadow:0px 3px 14px rgba(0,0,0,0.15);
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    -ms-flex:1 0;
    flex:1 0;
    float:left;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    margin:10px;
    padding-top:15px;
    text-align:center;
    border-radius:4px;
    width:50%;
    -webkit-transition:all 150ms ease-out;
    transition:all 150ms ease-out;
    min-width:150px;
    min-height:200px;
    color:#666;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
}
.dark .usercard{
  background:#2f2f2f;
  color:#fff;
}

.usercard .credits_text *{
    overflow:hidden;
}
.usercard .credits_avatar img{
    width:100px;
    border-radius:50%;
}
.usercard div{
    top:-4px;
    position:relative;
}
.usercard:hover{
    background-color:var(--hoverColor);
    -webkit-transform:scale(1.025);
    transform:scale(1.025);
}

p, h6{color:#fff;}
</style>
