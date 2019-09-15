
      function openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
      }

      function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
      }
      page.base('/basic');

            page('/', index);
            page('/about', about);
            page('/contact', contact);
            page('/contact/:contactName', contact);
            page();

            function index() {
              document.querySelector('p')
                .textContent = 'viewing index';
            }

            function about() {
              document.querySelector('p')
                .textContent = 'viewing about';
            }

            function contact(ctx) {
              document.querySelector('p')
                .textContent = 'viewing contact ' + (ctx.params.contactName || '');
            }
