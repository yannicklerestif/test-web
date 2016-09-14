update [WIDGET_DB].[dbo].[Content_Layout]
set metadata = '{"MarkupName":0,"Navigation":0,"ProductCount":2,"ProductColumns":0,"ProductRows":0,"ProductPages":0,"LogoSize":null,"ProductViewSize":{"Width":0,"Height":0},"Title":{"CharactersCount":100},"Description":{"CharactersCount":5000},"Price":{"CharactersCount":-1},"RetailPrice":null,"Discount":null,"Headline":{"CharactersCount":70},"SubDescription":null,"SubTitle":null,"PriceGuide":null,"AdditionalPriceGuide":null,"TermsAndConditions":null,"BrandingMessage":null,"ProductImage":{"Width":600,"Height":600},"OnImageBadge":null,"StarRating":null,"SecondaryBadge":null,"TelcoInternet":null,"TelcoTexts":null,"TelcoMinutes":null,"BrandingImage":null,"Cta":{"CharactersCount":-1}}',
content = '<div id=""content"" style="overflow: hidden">
   <div id="cto_banner_content">
      <style>
  * {
  margin: 0;
  padding: 0;
  }
  #cto_banner_content {
  font-family: ''Helvetica Neue'', Arial, sans-serif;
  font-size: 0;
  width: 303px;
                    height: 510px;
  border: 1px #c3c4ca solid;
  box-sizing: border-box;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
    overflow:hidden;
    background:#f6f8f9;
  }
  .cto_bannerContent {
                    width: 514px;
                    height: 470px;
    border-bottom:1px solid #dce0e4;
  padding: 10px 0 0 10px;
  box-sizing: border-box;
    background:#fff;
  }
  .header {
  height: 40px;
  width: 281px;
  overflow: hidden;
  }
  .logo {
  width: 40px;
  height: 40px;
  display: inline-block;
  box-sizing: border-box;
  *display: inline;
  background: url(''https://static.criteo.net/images/centralfeed/logo_facebook.jpg'') no-repeat;
  border: 1px solid #d8d8d8;
  margin-right: 8px;
  }
  .titleholder {
  height: 40px;
  width: 223px;
  display: inline-block;
  *display: inline;
  vertical-align: top;
  }
  .fanPageName a {
  color: #000;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 6px;
  display: block;
  text-overflow: ellipsis;
  width: 233px;
  white-space: nowrap;
  overflow: hidden;
  }
  .sponsored span {
  color: rgb(153, 153, 153);
  font-size: 12px;
  line-height: 15px;
  }
  .message {
  color: #000;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  overflow: hidden;
  margin-top: 15px;
  height: 56px;
    width:281px;
  }
  .content {
  display:inline-block;
                    width: 240px;
                    height: 314px;
    margin-top:10px;
  margin-right:10px;
  background: #f6f8f9;
  border: 1px solid #dcdcdd;
  overflow: hidden;
  -webkit-box-shadow: 1px 1px 1px 0px rgba(199,199,199,0.78);
  -moz-box-shadow: 1px 1px 1px 0px rgba(199,199,199,0.78);
  box-shadow: 1px 1px 1px 0px rgba(199,199,199,0.78);
  *display:inline;
  }
  .content a {
  text-decoration: none;
  }
  .imgholder {
  display: block;
                    width: 240px;
                    height: 240px;
  overflow: hidden;
  background: white;
  text-align: center;
  }
  .imgholder a {
  text-decoration: none;
  }
  .imgholder img {
  max-width: 240px;
  max-height: 240px;
  *height: expression(this.width < this.height ? "240px": "auto");
  *width: expression(this.width >=this.height ? "240px": "auto");
  display: block;
  margin: auto;
  border: none;
  }
  .descContainer {
  width:233px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  height: 50px;
  border-top:1px solid #e7e9e8;
  box-sizing:border-box;
  }
  .descContainer a {
  color: #000;
  }
  .title {
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  text-decoration: none;
  height:40px;
  overflow:hidden;
  }
  .title:hover {
  text-decoration: none;
  }
  .desc{
  color : #515a69;
  font-size : 15px;
  }
  .buttons{
    width:100%;
    height:38px;
    font-size:12px;
    color:#5e5e5e;
    font-weight:bold;
    text-align:center;
  }
  .like_button{
    width:150px;
    border-right:1px solid #dce0e4;
    height:100%;
    float:left;
  }
  .like_button img{
    margin:8px 4px 0 0;
  }
  .comment_button{
    width:150px;
    height:100%;
    float:left;
  }
  .comment_button img{
    margin:10px 4px 0 0;
  }
  .buttons span{
    vertical-align:top;
    margin-top:10px;
    display:inline-block;
  }
</style>
      <div id="cto_bannerContent" class="cto_bannerContent">
         <div class="header">
            <div class="logo"></div>
            <div class="titleholder">
               <h5 class="fanPageName">
                  <a href="(|Link|)" target="_blank">(|FanPageName|)</a>
               </h5>
               <div class="sponsored">
                  <span>Sponsored</span>
               </div>
            </div>
         </div>
         <div class="message"(|multilineEllipsis()|)>
          (|Message|)
         </div>
         (|for index, product in products:
         <div class="content">
            <div class="imgholder">
               <a href="(|product.link|)" target="_blank">
                  <img src="(|product.image|)" alt="img" />
               </a>
            </div>
            <div class="descContainer">
               <a href="(|product.link|)" target="_blank">
                  <div class="title"(|multilineEllipsis()|)>(|product.title|)</div>
                  <div class="desc">(|product.description|)</div>
               </a>
            </div>
         </div>
         |)
      </div>
      <div class="buttons">
        <div class="like_button">
          <img src="https://static.criteo.net/images/centralfeed/thumbup.png">
          <span>Like</span>
        </div>
        <div class="comment_button">
          <img src="https://static.criteo.net/images/centralfeed/comment.png">
          <span>Comment</span>
        </div>
      </div>
   </div>
</div>
<script type="text/javascript">
  (function() {
      var arrayEquals = function(a, b) {
          if (a.length != b.length) return false;
          a = a.sort();
          b = b.sort();
          for (var i = 0; i < a.length; ++i) {
              if (a[i] != b[i]) return false;
          }
          return true;
      };
      var arrayIterate = function(a, fct) {
          var len = a.length;
          for (var i = 0; i < len; ++i) {
              fct(a[i], i);
          }
      };
      var arrayWhere = function(a, fct) {
          b = [];
          arrayIterate(a, function(elt, index) {
              if (fct(elt, index)) b.push(elt);
          });
          return b;
      };
      var arrayMap = function(a, fct) {
          b = [];
          arrayIterate(a, function(elt, index) {
              b[index] = fct(elt, index);
          });
          return b;
      };
      var multilineEllipsis = function(div) {
          var t = div.textContent || div.innerText;
          var d = document.createElement(''div'');
          var i = 0;
          d.style.width = div.offsetWidth + ''px'';
          d.style.visibility = "hidden";
          div.appendChild(d);
          while (d.offsetHeight <= div.offsetHeight && i < t.length) {
              d.textContent = d.innerText = t.substr(0, i) + ''...'';
              ++i;
          }
          div.removeChild(d);
          if (i != t.length) div.textContent = div.innerText = t.substr(0, i - 2) + ''...'';
      };
      (function() {
          var c = document.getElementById(''cto_bannerContent'');
          var isMultilineEllipsis = function(elt) {
              return elt.getAttribute(''data-ellipsis'') == ''multiline'';
          };
          arrayIterate(arrayWhere(c.getElementsByTagName(''*''), isMultilineEllipsis), multilineEllipsis);
      })();
  })();
</script>'
where LayoutFamilyId = 1006307 and FormatId = 70
