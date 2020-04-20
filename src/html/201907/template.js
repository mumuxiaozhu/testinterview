
/**
 * 1.js 语句；js计算值，变量； 变量中有html？；
 */

var templatestr = `
<ul>
  <% for(var i=0;i<data.length;i++){ %>
    <% if(i==0){%>
      <li><%= "special:"+'data[i]' %></li>
      <%} else{%>
        <li><span>cuow d </span><%= "bigger:"+data[i] %></li>
    <%}%>
  <%}%>
</ul>`;
/**
 * html 合成str
 * 目标：
 *  ''
 *
 */
var template = function(str) {
  let code = "var tl= '";
  //匹配任何字符，+ 匹配一个或多个 ，? 重复零次或一次； +?重复1次或多次，但尽可能少重复
  //\s是指空白,包括空格、换行、tab缩进等所有的空白,而\S刚好相反,非空白 ;
  //[]这个符号，表示在它里面包含的单个字符不限顺序的出现
  // [\s\S]所有的字符,完全的,一字不漏的
  let evalExpr = /<%=([\s\S]+?)%>/g;
  let expr = /<%([\s\S]+?)%>/g;
 
  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g
  function compile(str) {

    code += str.replace(escapeRegExp,"").replace(evalExpr, function(match, p1, offset, string) {
      // match 匹配子串；p1,p2 正则式中多个括号子串()匹配内容，offset 子字符串在原字符串中的偏移量；string 被匹配的原字符串

      console.log(arguments);

      return "'+" + p1 + "+'";
    }).replace(expr, function(match, p1, offset, string) {
      // match 匹配子串；p1,p2 正则式中多个括号子串()匹配内容，offset 子字符串在原字符串中的偏移量；string 被匹配的原字符串

      console.log(arguments);

      return   "';" + p1+" tl+='" ;
    });
  }
  compile(str);

  code+="'; return tl;"
  console.log("code==",code)
 return new Function('data', code);
};
var parse = template(templatestr);
 var cc = parse(['第一个','第二个','第三个']);
 console.log("cc=",cc);
