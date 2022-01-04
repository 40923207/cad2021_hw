var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40923207 \n 網站倉儲:  https://github.com/40923207/cad2021_hw \n 網站連結:  https://40923207.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '期末考1', 'text': "AutoCAD尺寸檔案 \n Inventor零件檔 \n stl檔 \n 程式控制Jansen's linkage影片(youtubr) \n \n 程式控制Jansen's linkage影片(wink ) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n 馬達驅動 Jansen's linkage影片(youtubr) \n \n 馬達驅動 Jansen's linkage影片(wink ) \n \n \n \n \n   \n \n \n \n \n \n 期末考1個人網頁", 'tags': '', 'url': '期末考1.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '老師提供的方法: \n # 將資料存入 gist, 取其 url\nurl = "https://gist.githubusercontent.com/mdecourse/b11a88a98655d41055c47f08fe94788f/raw/82a92c65a44df7631a2346c16aab1b228639fd88/2b_w2_stud_list.txt"\n# 利用 open() 開啟 url 後, 以 readlines() 讀取後可納入數列\ndata = open(url).readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\nnum_github = data[i]\nnum = num_github.split("\\t")[0]\naccount = num_github.split("\\t")[1]\nif account == "":\naccount = num\nprint("<a href=\'https://" + str(account) + ".github.io/cad2021_hw\'>"+ str(num) + "</a>")\n \n \n 我的解決方法： \n 先將老師 統計好的GitHub帳號 整理至excel，再使用hyperlink函數快速完成全班的GitHub pages和GitHub warehousing然後完成網站 \n 操作步驟： \n 1.先在要產生網址的地方輸入函數=HYPERLINK（“https:// “&C2&”.github .io/cad2021_hw/”) \n 2.其中&C2&是指那個位置要輸入C2那格的內容，且C2前後要加“&” \n \n 3.輸入完“https://“&C2&”.github .io/cad2021_hw/”後，如果想讓顯 示的網址名稱不是整段網址，可在最後面/和”中間打上 ,想要的名稱 （可輸入表格位置表示以那個位置名稱顯示出超連結） \n \n 4.再將有進行函式的格子向下拉皆套入公式 5.再將excel內容複製貼上網頁 \n cad2021 2b \n \n \n \n cad2b w2 \n \n github account \n \n github pages \n github warehousing \n \n \n 40723126 \n \n 40723126 \n \n \n 40723126 \n \n 40723126 \n \n \n 40723135 \n \n 40723135 \n \n \n 40723135 \n \n 40723135 \n \n \n 40723217 \n \n 40723217 \n \n \n 40723217 \n \n 40723217 \n \n \n 40732331 \n \n 40732331 \n \n \n 40732331 \n \n 40732331 \n \n \n 40823114 \n \n 40823114 \n \n \n 40823114 \n \n 40823114 \n \n \n 40823115 \n \n 40823115 \n \n \n 40823115 \n \n 40823115 \n \n \n 40823117 \n \n pyc40823117 \n \n 40823117 \n \n 40823117 \n \n \n 40823119 \n \n 40823119 \n \n \n 40823119 \n \n 40823119 \n \n \n 40823122 \n \n 40823122 \n \n \n 40823122 \n \n 40823122 \n \n \n 40823127 \n \n 40823127 \n \n \n 40823127 \n \n 40823127 \n \n \n 40823146 \n \n 40823146 \n \n \n 40823146 \n \n 40823146 \n \n \n 40823148 \n \n 40823148 \n \n \n 40823148 \n \n 40823148 \n \n \n 40823215 \n \n 40823215 \n \n \n 40823215 \n \n 40823215 \n \n \n 40871106 \n \n 40871106 \n \n \n 40871106 \n \n 40871106 \n \n \n 40923201 \n \n 40923201 \n \n \n 40923201 \n \n 40923201 \n \n \n 40923203 \n \n youshin40923203 \n \n 40923203 \n \n 40923203 \n \n \n 40923204 \n \n 40923204 \n \n \n 40923204 \n \n 40923204 \n \n \n 40923205 \n \n 40923205 \n \n \n 40923205 \n \n 40923205 \n \n \n 40923206 \n \n 40923206-1 \n \n 40923206 \n \n 40923206 \n \n \n 40923207 \n \n 40923207 \n \n \n 40923207 \n \n 40923207 \n \n \n 40923208 \n \n nfu40923208 \n \n 40923208 \n \n 40923208 \n \n \n 40923209 \n \n nfu40923209 \n \n 40923209 \n \n 40923209 \n \n \n 40923210 \n \n 40923210 \n \n \n 40923210 \n \n 40923210 \n \n \n 40923211 \n \n a40923211 \n \n \n 40923211 \n \n 40923211 \n \n \n 40923212 \n \n 40923212 \n \n \n 40923212 \n \n 40923212 \n \n \n 40923213 \n \n 40923213 \n \n \n 40923213 \n \n 40923213 \n \n \n 40923214 \n \n 40923214 \n \n \n 40923214 \n \n 40923214 \n \n \n 40923216 \n \n 40923216 \n \n \n 40923216 \n \n 40923216 \n \n \n 40923217 \n \n 40923217 \n \n \n 40923217 \n \n 40923217 \n \n \n 40923218 \n \n 40923218 \n \n \n 40923218 \n \n 40923218 \n \n \n 40923219 \n \n nfu40923219 \n \n 40923219 \n \n 40923219 \n \n \n 40923220 \n \n 40923220 \n \n \n 40923220 \n \n 40923220 \n \n \n 40923221 \n \n 40923221 \n \n \n 40923221 \n \n 40923221 \n \n \n 40923223 \n \n 40923223 \n \n \n 40923223 \n \n 40923223 \n \n \n 40923224 \n \n s40923224 \n \n \n 40923224 \n \n 40923224 \n \n \n 40923225 \n \n 40923225 \n \n \n 40923225 \n \n 40923225 \n \n \n 40923226 \n \n 40923226 \n \n \n 40923226 \n \n 40923226 \n \n \n 40923227 \n \n 40923227 \n \n \n 40923227 \n \n 40923227 \n \n \n 40923228 \n \n 40923228 \n \n \n 40923228 \n \n 40923228 \n \n \n 40923229 \n \n 40923229 \n \n \n 40923229 \n \n 40923229 \n \n \n 40923230 \n \n 40923230 \n \n \n 40923230 \n \n 40923230 \n \n \n 40923231 \n \n 40923231 \n \n \n 40923231 \n \n 40923231 \n \n \n 40923232 \n \n 40923232 \n \n \n 40923232 \n \n 40923232 \n \n \n 40923233 \n \n 40923233 \n \n \n 40923233 \n \n 40923233 \n \n \n 40923234 \n \n 40923234 \n \n \n 40923234 \n \n 40923234 \n \n \n 40923235 \n \n 40923235 \n \n \n 40923235 \n \n 40923235 \n \n \n 40923236 \n \n 40923236 \n \n \n 40923236 \n \n 40923236 \n \n \n 40923237 \n \n 40923237 \n \n \n 40923237 \n \n 40923237 \n \n \n 40923238 \n \n 40923238 \n \n \n 40923238 \n \n 40923238 \n \n \n 40923239 \n \n 40923239 \n \n \n 40923239 \n \n 40923239 \n \n \n 40923240 \n \n 40923240 \n \n \n 40923240 \n \n 40923240 \n \n \n 40923241 \n \n 40923241 \n \n \n 40923241 \n \n 40923241 \n \n \n 40923242 \n \n 40923242 \n \n \n 40923242 \n \n 40923242 \n \n \n 40923243 \n \n 40923243 \n \n \n 40923243 \n \n 40923243 \n \n \n 40923244 \n \n 40923244 \n \n \n 40923244 \n \n 40923244 \n \n \n 40923245 \n \n 40923245-1 \n \n 40923245 \n \n 40923245 \n \n \n 40923246 \n \n 40923246 \n \n \n 40923246 \n \n 40923246 \n \n \n 40923247 \n \n 40923247 \n \n \n 40923247 \n \n 40923247 \n \n \n 40923248 \n \n 40923248 \n \n \n 40923248 \n \n 40923248 \n \n \n 40923249 \n \n 40923249-1 \n \n 40923249 \n \n 40923249 \n \n \n 40923250 \n \n 40923250 \n \n \n 40923250 \n \n 40923250 \n \n \n 40923251 \n \n 40923251 \n \n \n 40923251 \n \n 40923251 \n \n \n 40923252 \n \n 40923252 \n \n \n 40923252 \n \n 40923252 \n \n \n 40923253 \n \n 40923253 \n \n \n 40923253 \n \n 40923253 \n \n \n 40971220 \n \n 40971220 \n \n \n 40971220 \n \n 40971220 \n \n \n 40971227 \n \n 40971227 \n \n \n 40971227 \n \n 40971227 \n \n \n \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Inventor繪圖', 'text': 'Inventor 緣起說明與介紹: \n Inventor這套軟體是美國AutoDesk公司在1999年推出的一款三維可視化實體模擬軟件Autodesk Inventor Professional（AIP），目前已推出最新版本AIP2022。 加入了用於纜線和束線設計、管道設計及PCB IDF文件輸入的專業功能模塊，並加入了由業界領先的ANSYS技術支持的FEA功能，可以直接在Autodesk Inventor軟件中進行應力分析。在此基礎上，集成的數據管理軟件Autodesk Vault-用於安全地管理進展中的設計數據。使用戶能夠在產品正式生產前，驗證和調整產品的屬性，且具備不同CAD檔案的轉檔能力，方便軟體間互相傳遞修改。 \n Inventor功能: \n 1.建模 \n 利用三維設計減少了對二維圖形的需求。 \n 2.易修改部件和圖形 \n 縮短從設計到製造的時間。 \n 3.AnyCAD \n 與使用不同 CAD 系統的供應商或其他部門協同合作，無需轉換文件。 \n 4.向後兼容性 \n 最新版本能打開舊版檔案 \n \n \n \n 6.一個測量命令 \n 可單擊一個按鈕或使用鍵盤快捷鍵，即可測量距離、角度、周長和面積。 \n \n \n \n \n 7.共享視圖 \n 在線協作縮短審閱周期，可直接在產品內接收注釋和反饋。 \n \n \n \n \n \n', 'tags': '', 'url': 'Inventor繪圖.html'}, {'title': 'Inventor 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n Inventor  套件下載安裝與配置 \n \n \n \n \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n \n \n \n', 'tags': '', 'url': 'Inventor 安裝配置.html'}, {'title': 'Inventor 操作流程', 'text': 'Inventor  零組件繪圖操作流程影片 (Youtube): \n \n Inventor  零組件繪圖教學影片 (Wink) \n \n', 'tags': '', 'url': 'Inventor 操作流程.html'}, {'title': 'NX12\xa0繪圖', 'text': 'NX12 緣起說明與介紹 \n 1960: McDonnell Douglas Automation\xa0公司成立。 \n 1976 :收購了Unigraphics CAD/CAE/CAM系統的開發商——United Computing公司，UG的雛形問世。 \n 1983: UG正式 上市。 \n \n 1995.\xa0 發布Windows NT版本。 \n 2000.\xa0 發布UG17 \n 2001.\xa0 發布UG18 \n 2002.\xa0 發布UG NX1.0 \n 2003.\xa0 發布UG NX2.0 \n 2004 .\xa0發布UG NX3.0 \n 2005. 發布UG NX4.0 \n 2007.\xa0 發布UG NX5.0 \n 2008.6.\xa0 發布UG NX 6.0 2009.10.\xa0 發布 UG NX7.0 \n 2010.5.\xa0 發布 UG NX7.5 \n 2012.10.   發布 UG NX 8.5 \n 2013.10.\xa0 發布 UG NX 9.0 \n 2014.8.   發布 UG NX 10.0 \n 2016.8. \xa0 發布 UG NX 11.0 \n 2017.10.   發布 UG NX 12.0 \n \n', 'tags': '', 'url': 'NX12\xa0繪圖.html'}, {'title': 'NX12 安裝配置', 'text': 'NXN12 套件下載安裝與配置: \n \n \n', 'tags': '', 'url': 'NX12 安裝配置.html'}, {'title': 'NX12 操作流程', 'text': 'NX12\xa0零組件繪圖操作流程影片 (Youtube): \n \n NX12 零組件繪圖教學影片 (Wink) \n \n', 'tags': '', 'url': 'NX12 操作流程.html'}, {'title': '運動場景', 'text': 'Inventor \n Inventor零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n \n Inventor零件轉入 CoppeliaSim 教學影片 (Wink) \n \n NX12.0 \n NX12.0零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n \n \n NX12.0\xa0零件轉入 CoppeliaSim 教學影片 (Wink) \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'W13', 'text': 'meArmUPV Robot組合影片(Youtube) \n \n \n 請建立一個 Wink 檔案說明截至目前所完成的兩套 CAD 零組件繪圖進度 (30%). 已將所有零件使用抽到的繪圖軟體(Inventor、NX12)獨立繪製完成\n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 請建立一個 Wink 檔案, 將 1. 已經完成的 meArm 機械手臂第一軸, 加入 https://www.coppeliarobotics.com/helpFiles/en/simUI-widgets.htm slider, 可以在執行時, 利用滑鼠拖動旋轉 360 度 (30%).\n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 請建立一個 Wink 檔案, 將 1. 已經完成的 meArm 機械手臂其中的 1 ~ 3 軸 (夾爪除外), 加入 UI 介面 slider, 可以在執行時, 利用滑鼠拖動在各軸的極限位置旋轉 (40%). \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'H2', 'text': '零件檔案: \n 零件尺寸圖(AutoCAD): https://drive.google.com/file/d/1daBWTroMIu8U3RAGIqZ3z-GmdWa-Jj1t/view?usp=sharing \n 3D 零件檔案(Inventor): https://drive.google.com/file/d/1Wh_Jhk3KuGmaJoGq6h_fDb1xprDB-dJQ/view?usp=sharing \n 3D 零件檔案(NX12.0): https://drive.google.com/file/d/1vhLJqmwbz3oZrNxqB2nM_yDv4OcFgHmD/view?usp=sharing \n \n 影片: \n Inventor繪製過程(youtube): \n \n -------------------- \n Inventor繪製過程(wink): \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n -------------------- \n NX12.0繪製過程(youtube): \n \n -------------------- \n NX12.0繪製過程(wink): \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n -------------------- \n Coppeliasim組裝過程(youtube): \n \n -------------------- \n Coppeliasim組裝 過程 (wink): \n \n \n \n   \n \n \n \n \n \n \n \n \n \n -------------------- \n', 'tags': '', 'url': 'H2.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'wink', 'text': 'wink加入網頁步驟: \n 先到 老師的網站 複製原始碼 \n \n \n 複製第143-164行 \n 複製到Source code並更改以下內容: \n <script> var winkVideoData = {  dataVersion: 1,  frameRate: 20,  buttonFrameLength: 10,  buttonFrameOffset: 5,  frameStops: {  }, }; </script> <div class="winkVideoContainerClass"><video class="winkVideoClass" data-dirname=" ./../cmsimde /static" data-varname="winkVideoData"  height="712" width="1138" > <source src="./../downloads/ wink/meArm_robot_wink .mp4" type="video/mp4"/></video> <div class="winkVideoOverlayClass"></div> <div class="winkVideoControlBarClass"><button class="winkVideoControlBarPlayButtonClass"></button> <button class="winkVideoControlBarPauseButtonClass"></button> <div class="winkVideoControlBarProgressLeftClass"></div> <div class="winkVideoControlBarProgressEmptyMiddleClass"></div> <div class="winkVideoControlBarProgressRightClass"></div> <div class="winkVideoControlBarProgressFilledMiddleClass"></div> <div class="winkVideoControlBarProgressThumbClass"></div> </div> <div class="winkVideoPlayOverlayClass"></div> </div> \n 1.刪除「 ./../cmsimde 」 \n \xa0 ex: dirname=" /static" \n 2.改成自己wink影片的尺寸「 height="712" width="1138" 」 \n \xa0 ex: height="800" width="1200" \n 3.改成自己影片的路徑及名稱「 wink/meArm_robot_wink 」 \n \xa0 ex: <source src="./../downloads/ test .mp4" \xa0 \n \n 改好後會像圖片這樣，紅色框的內容可避免wink影片重疊，分別加在wink影片原始碼前後 \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'wink.html'}]};