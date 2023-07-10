var posts=["posts/undefined.html","posts/b96d.html","posts/38e9.html","posts/c437.html","posts/943e.html","posts/a2cc.html","posts/bfb3.html","posts/ac0b.html","posts/1ec2.html","posts/536e.html","posts/cd7c.html","posts/de31.html","posts/b206.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"屑殇","hundredSuffix":"","link":"https://jinghuashang.cn/","avatar":"https://jinghuashang.cn/img/acc.jpg","descr":"咸鱼"},{"name":"俊晗博客","link":"https://jun.pw/","avatar":"https://picbed-local-01.ymzsl.com/allimgs/2023/06/10/648425dc45ac3.png","descr":"俊晗的个人博客，俊晗是一个热爱计算机与篮球的男孩子，博客里会分享一些生活琐事"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://img01.anheyu.com/useruploads/151/2023/05/12/645dac23c60a2.jpg","descr":"顺其自然，持之以恒"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };