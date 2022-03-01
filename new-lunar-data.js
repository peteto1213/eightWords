
function CalConv(M)
 {
 
 FIRSTYEAR = 1936;
 LASTYEAR = 2031;

 LunarCal = [
  new tagLunarCal(23, 3, 2, 17, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), /* 1936 */ 
  new tagLunarCal( 41, 0, 4, 23, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), 
  new tagLunarCal( 30, 7, 5, 28, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 49, 0, 6, 33, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 38, 0, 0, 38, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 1940 */ 
  new tagLunarCal( 26, 6, 2, 44, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 45, 0, 3, 49, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 35, 0, 4, 54, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 24, 4, 5, 59, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1944 */ 
  new tagLunarCal( 43, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 32, 0, 1, 10, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 21, 2, 2, 15, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 40, 0, 3, 20, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), /* 1948 */ 
  new tagLunarCal( 28, 7, 5, 26, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 47, 0, 6, 31, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 36, 0, 0, 36, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 26, 5, 1, 41, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ), /* 1952 */ 
  new tagLunarCal( 44, 0, 3, 47, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 33, 0, 4, 52, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), 
  new tagLunarCal( 23, 3, 5, 57, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 42, 0, 6, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), /* 1956 */ 
  new tagLunarCal( 30, 8, 1, 8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 48, 0, 2, 13, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 38, 0, 3, 18, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 27, 6, 4, 23, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 1960 */ 
  new tagLunarCal( 45, 0, 6, 29, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 35, 0, 0, 34, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 24, 4, 1, 39, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 43, 0, 2, 44, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), /* 1964 */ 
  new tagLunarCal( 32, 0, 4, 50, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 20, 3, 5, 55, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), 
  new tagLunarCal( 39, 0, 6, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 29, 7, 0, 5, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 1968 */ 
  new tagLunarCal( 47, 0, 2, 11, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 36, 0, 3, 16, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
  new tagLunarCal( 26, 5, 4, 21, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ), 
  new tagLunarCal( 45, 0, 5, 26, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1972 */ 
  new tagLunarCal( 33, 0, 0, 32, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 22, 4, 1, 37, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 41, 0, 2, 42, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 30, 8, 3, 47, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ), /* 1976 */ 
  new tagLunarCal( 48, 0, 5, 53, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ), 
  new tagLunarCal( 37, 0, 6, 58, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 27, 6, 0, 3, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
  new tagLunarCal( 46, 0, 1, 8, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 1980 */ 
  new tagLunarCal( 35, 0, 3, 14, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 24, 4, 4, 19, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 43, 0, 5, 24, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 32, 10, 6, 29, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), /* 1984 */ 
  new tagLunarCal( 50, 0, 1, 35, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 39, 0, 2, 40, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1 ), 
  new tagLunarCal( 28, 6, 3, 45, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0 ), 
  new tagLunarCal( 47, 0, 4, 50, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 1988 */ 
  new tagLunarCal( 36, 0, 6, 56, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 26, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1 ), 
  new tagLunarCal( 45, 0, 1, 6, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 34, 0, 2, 11, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0 ), /* 1992 */ 
  new tagLunarCal( 22, 3, 4, 17, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 40, 0, 5, 22, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 30, 8, 6, 27, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1 ), 
  new tagLunarCal( 49, 0, 0, 32, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1 ), /* 1996 */ 
  new tagLunarCal( 37, 0, 2, 38, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 46,  0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), /* 1999 */
  new tagLunarCal( 35,  0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), /* 2000 */
  new tagLunarCal( 23,  4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 42,  0, 1,  4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 31,  0, 2,  9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 21,  2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 2004 */
  new tagLunarCal( 39,  0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 28,  7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ),
  new tagLunarCal( 48,  0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ),
  new tagLunarCal( 37,  0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 2008 */
  new tagLunarCal( 25,  5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
  new tagLunarCal( 44,  0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
  new tagLunarCal( 33,  0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 22,  4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 2012 */
  new tagLunarCal( 40,  0, 1,  2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 30,  9, 2,  7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 49,  0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 38,  0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 2016 */
  new tagLunarCal( 27,  6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ),
  new tagLunarCal( 46,  0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ),
  new tagLunarCal( 35,  0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ),
  new tagLunarCal( 24,  4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 2020 */
  new tagLunarCal( 42,  0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 31,  0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 21,  2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 40,  0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 2024 */
  new tagLunarCal( 28,  6, 2,  5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ),
  new tagLunarCal( 47,  0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1 ),
  new tagLunarCal( 36,  0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ),
  new tagLunarCal( 25,  5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), /* 2028 */
  new tagLunarCal( 43,  0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ),
  new tagLunarCal( 32,  0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0 ),
  new tagLunarCal( 22,  3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ) ];


 /* 西曆年每月之日數 */
 SolarCal = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

 /* 西曆年每月之累積日數, 平年與閏年 */
 SolarDays = [
  0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396,
  0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397 ];

 AnimalIdx = ["馬 ", "羊 ", "猴 ", "雞 ", "狗 ", "豬 ", "鼠 ", "牛 ", "虎 ", "兔 ", "龍 ", "蛇 " ];
 LocationIdx = [ "南", "東", "北", "西" ];
 
 
if (M==0) {  //陽曆到陰曆
if (!IsInteger(form_jisuan.yyear.value) || !IsInteger(form_jisuan.ymonth.value) || !IsInteger(form_jisuan.yday.value)) return alert("請輸入合法陽曆年月日數值");   
 SolarYear = parseInt(form_jisuan.yyear.value);
 SolarMonth = parseInt(form_jisuan.ymonth.value);
 SolarDate = parseInt(form_jisuan.yday.value);


 if ( SolarYear <= FIRSTYEAR || SolarYear > LASTYEAR ) return alert("請輸入1936-2031有效年份"); 

 sm = SolarMonth - 1;
 
 if ( sm < 0 || sm > 11 ) return alert(請輸入有效月份);
 
 leap = GetLeap( SolarYear );

 if ( sm == 1 )
  d = leap + 28;
 else
  d = SolarCal[sm];

 if ( SolarDate < 1 || SolarDate > d ) return 3;

 y = SolarYear - FIRSTYEAR;
 acc = SolarDays[ leap*14 + sm ] + SolarDate;
 kc = acc + LunarCal[y].BaseKanChih;
 Kan = kc % 10;
 Chih = kc % 12;
 Location = LocationIdx[kc % 4];
 Age = kc % 60;
 if ( Age < 22 )
  Age = 22 - Age;
 else
  Age = 82 - Age;

 Age =Age + 3;

if (Age < 10)
  Age=Age+60;

 Animal = AnimalIdx[ Chih ];

 if ( acc <= LunarCal[y].BaseDays ) {
  y--;
  LunarYear = SolarYear - 1;
  leap = GetLeap( LunarYear );
  sm += 12;
  acc = SolarDays[leap*14 + sm] + SolarDate;
  }
 else
  LunarYear = SolarYear;
  
 l1 = LunarCal[y].BaseDays;
 for ( i=0; i<13; i++ ) {
  l2 = l1 + LunarCal[y].MonthDays[i] + 29;
  if ( acc <= l2 ) break;
  l1 = l2;
  }

 LunarMonth = i + 1;
 LunarDate = acc - l1;
 im = LunarCal[y].Intercalation;

 if ( im != 0 && LunarMonth > im ) {
  LunarMonth--;
  if ( LunarMonth == im ) LunarMonth = -im;
  }

 if ( LunarMonth > 12 ) LunarMonth -= 12;

	//alert("農曆為："+ LunarYear + "年" + LunarMonth + "月 " + LunarDate + "日 " );
	var showgn = 0;
	showgn = "<font color=green>公曆"+ SolarYear + "年" + SolarMonth + "月" + SolarDate + "日</font> <strong>轉換為</strong> <font color=red>農曆"+ LunarYear + "年" + LunarMonth + "月 " + LunarDate + "日</font>";
	//document.form_jisuan.g2y.value=showgn;
	document.getElementById("g2y").innerHTML = showgn;
                
            //form_jisuan.yyear.value = "";
            //form_jisuan.ymonth.value = "";
            //form_jisuan.yday.value = ""; 
 return 0;
 }

 else /* 陰曆轉陽曆 */ 
 { 
   if (!IsInteger(form_jisuan.nyear.value) || !IsInteger(form_jisuan.nmonth.value) || !IsInteger(form_jisuan.nday.value)) return alert("請輸入合法農曆年月日數值");   
   LunarYear = parseInt(form_jisuan.nyear.value);
   LunarMonth = parseInt(form_jisuan.nmonth.value);
   LunarDate = parseInt(form_jisuan.nday.value);

        if ( LunarYear < FIRSTYEAR || LunarYear >= LASTYEAR ) return alert("請輸入1936-2031有效年份");   
          
        y = LunarYear - FIRSTYEAR ; 
        im = LunarCal[y].Intercalation; 
        lm = LunarMonth; 
          
        if ( lm < 0 ) 
        { 
            if ( lm != -im ) 
                return alert(請輸入有效月份);   
        } 
        else if ( lm < 1 || lm > 12 ) return alert(請輸入有效月份);   
        
        if ( im != 0 ) 
        { 
            if ( lm > im ) 
                lm++; 
            else if ( lm == -im ) 
                lm = im + 1; 
        } 
        lm--; 

        if ( LunarDate > LunarCal[y].MonthDays[lm] + 29 ) 
            return alert("農曆日期不正確");
           
        
        acc = 0;
        for ( i=0; i < lm;i++) {

         acc+= LunarCal[y].MonthDays[i] + 29;
          
         
       }
       
        acc +=LunarCal[y].BaseDays + LunarDate;
           
        
             
            leap = GetLeap( LunarYear ); 
            
            
        for ( i=13; i>=0; i-- ) {
        
            if ( acc > SolarDays[leap*14+i] ) 
                break; 
        }       
             SolarDate = acc - SolarDays[leap*14 + i]  ;
            
            
           
            if ( i <= 11 ) 
            { 
              
                SolarYear = LunarYear; 
                SolarMonth = i + 1; 
            } 
            else 
            { 
                
                SolarYear = LunarYear + 1; 
                SolarMonth = i - 11; 
            } 
             
         
            leap = GetLeap( SolarYear ); 
            y = SolarYear - FIRSTYEAR; 
            
            //acc = SolarDays[leap][SolarMonth-1] + SolarDate; 
            acc = SolarDays[leap*14 + SolarMonth-1] + SolarDate;
            
            weekday = ( acc + LunarCal[y].BaseWeekday ) % 7; 
            kc = acc + LunarCal[y].BaseKanChih; 
            kan = kc % 10; 
            chih = kc % 12; 
           
        //alert("陽曆為："+ SolarYear + "年" + SolarMonth + "月" + SolarDate + "日 " );   
	var showng = 0;
	showng = "<font color=green>農曆（陰曆）"+ LunarYear +"年" + LunarMonth + "月" + LunarDate + "日</font> <strong>轉換為</strong> <font color=blue>公曆（陽曆）"+ SolarYear + "年" + SolarMonth + "月" + SolarDate + "日</font>";
	document.getElementById("y2g").innerHTML = showng;

 
            //form_jisuan.nyear.value = "";
            //form_jisuan.nmonth.value = "";
            //form_jisuan.nday.value = "";            
            return 0;
 }//else結束
 
 }

 /* 閏年, 返回 0 平年, 1 閏年 */
function GetLeap( year )
 {
   if ( year % 400 == 0 )
     return 1;
   else if ( year % 100 == 0 )
     return 0;
   else if ( year % 4 == 0 )
     return 1;
   else
     return 0;
 }

function tagLunarCal( d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
 this.BaseDays = d;         /* 1 月 1 日到正月初一的累計日 */
 this.Intercalation = i;    /* 閏月月份. 0==此年沒有閏月 */
 this.BaseWeekday = w;      /* 此年 1 月 1 日為星期減 1 */
 this.BaseKanChih = k;      /* 此年 1 月 1 日之幹支序號減 1 */
 this.MonthDays = [ m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 ]; /* 此農曆年每月之大小, 0==小月(29日), 1==大月(30日) */
}





function OpenWin( url ) { 
 return window.open( url, 'coop', 'width=320,height=350,toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=0,resizable=1' ); 
} 


function IsInteger(string ,sign) 
{  
  var integer; 
  if ((sign!=null) && (sign!='-') && (sign!='+')) 
  { 
   alert('IsInter(string,sign)的參數出錯：nsign為null或"-"或"+"'); 
   return false; 
  } 
  integer = parseInt(string); 
  if (isNaN(integer)) 
  { 
   return false; 
  } 
  else if (integer.toString().length==string.length) 
  {  
   if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0)) 
   { 
     return true; 
   } 
   else 
     return false;  
  } 
  else 
   return false; 
} 

