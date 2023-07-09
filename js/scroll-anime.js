document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    function handleScroll() {
      const animetionMerge = 500;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollTop >= sectionTop - windowHeight * 0.8 && scrollTop + animetionMerge < sectionTop + sectionHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にもアクティブなセクションを設定する
  });