      <script>
      $(document).ready(function(){document.querySelector('meta[name="og:title"]').content = document.title.replace(' - PreMiD', '');
      var footer = document.createElement('div');
      footer.innerHTML = '<div style="height:fit-content;width:100vw;"><div style="margin-left:2rem;"><div class="switch"> <label> Dark Mode<input type="checkbox" id="darkmode" class="togglePresence"><span class="lever" onclick="darkToggle();"></span> </label> </div></div></div>';
      document.querySelector('#content').appendChild(footer);});
      </script>