import{j as N,o as u,c as h,a as t,t as y,d as M,q as G,x as W,f as g,y as F,z as T,F as S,A as U,B as H,n as B,C as K,e as f,D as z,E as J,b as k,h as V,v as C,g as Q,G as I}from"./index.f21c2865.js";import{g as X,u as Z,a as tt,b as et,d as st,e as lt}from"./db_api.8d8f5047.js";const at={class:"w-36 lg:w-72 h-screen","aria-label":"Sidebar"},nt={class:"overflow-hidden lg:w-fit h-full py-10 px-5 bg-white border-gray-300 shadow-lg border-2 rounded-sm"},ot={class:"space-y-4 flex h-full flex-col justify-between"},it={class:"flex flex-col justify-between"},rt={class:"text-2xl pb-5"},ct={class:"text-4xl"},dt=M(" Yo, "),ut={class:"text-red-600 font-semibold"},ht=M("! "),ft={class:"flex flex-col w-fit h-fit text-left mx-auto md:text-center lg:flex-row md:justify-evenly text-xl pb-6"},mt={class:"w-20"},xt={class:"w-20"},pt={class:"w-20"},_t=t("hr",{class:"flex border-slate-400 border-1 border-solid justify-end"},null,-1),vt=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-calendar"},null,-1),gt=t("span",{class:"hidden lg:block ml-3"},"Calendar",-1),yt=[vt,gt],wt=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-trophy"},null,-1),$t=t("span",{class:"hidden lg:block ml-3"},"Store",-1),bt=[wt,$t],kt=t("li",null,null,-1),Ct=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-briefcase"},null,-1),jt=t("span",{class:"hidden lg:block ml-3"},"Inventory",-1),St=[Ct,jt],Ut=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-user"},null,-1),Pt=t("span",{class:"hidden lg:block ml-3"},"Profile",-1),It=[Ut,Pt],Mt=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-gear"},null,-1),Vt=t("span",{class:"hidden lg:block ml-3"},"Settings",-1),Dt=[Mt,Vt],Nt={class:"flex flex-col justify-between"},Ot=t("hr",{class:"flex border-slate-400 border-1 border-solid justify-end"},null,-1),At={class:"pt-5"},Et=t("i",{class:"fa-fw text-2xl lg:text-xl fa-solid fa-arrow-right-from-bracket"},null,-1),Lt=t("span",{class:"hidden lg:block ml-3"},"Logout",-1),Ft=[Et,Lt],Tt={props:{username:String,icon:String,isLoggedIn:Boolean,balance:Array},setup(i){const s=i;let l=N();function n(){s.isLoggedIn&&G(l).then(()=>{W.push("/star-calendar/")})}return(a,e)=>(u(),h("aside",at,[t("div",nt,[t("div",ot,[t("ul",it,[t("li",null,[t("h1",rt,[t("span",ct,y(i.icon),1),dt,t("span",ut,y(i.username),1),ht]),t("h1",ft,[t("span",mt,"\u2B50"+y(i.balance[0]),1),t("span",xt,"\u{1F31F}"+y(i.balance[1]),1),t("span",pt,"\u2728"+y(i.balance[2]),1)])]),_t,t("li",null,[t("div",{onClick:e[0]||(e[0]=o=>a.$emit("update-page","Calendar")),class:"cursor-pointer mt-2 flex items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},yt)]),t("li",null,[t("div",{onClick:e[1]||(e[1]=o=>a.$emit("update-page","Store")),class:"cursor-pointer mt-2 flex items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},bt)]),kt,t("li",null,[t("div",{onClick:e[2]||(e[2]=o=>a.$emit("update-page","Inventory")),class:"cursor-pointer mt-2 flex items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},St)]),t("li",null,[t("div",{onClick:e[3]||(e[3]=o=>a.$emit("update-page","Profile")),class:"cursor-pointer mt-2 flex items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},It)]),t("li",null,[t("div",{onClick:e[4]||(e[4]=o=>a.$emit("update-page","Settings")),class:"cursor-pointer mt-2 flex items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},Dt)])]),t("div",Nt,[Ot,t("div",At,[t("a",{onClick:e[5]||(e[5]=o=>n()),class:"flex cursor-pointer items-center justify-center lg:justify-start p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"},Ft)])])])])]))}};var D=["January","February","March","April","May","June","July","August","September","October","November","December"];const Bt={class:"grid grid-cols-7 gap-2 md:gap-4"},zt=t("i",{class:"fa-solid fa-caret-left"},null,-1),Jt=[zt],Rt={class:"col-span-5 bg-transparent text-4xl text-gray-500"},Yt=["value"],qt=["value"],Gt=t("i",{class:"fa-solid fa-caret-right"},null,-1),Wt=[Gt],Ht=K('<p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Sunday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Monday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Tuesday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Wednesday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Thursday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Friday </p><p class="truncate col-span-1 text-center text-lg md:text-xl text-white"> Saturday </p>',7),Kt=["onClick"],Qt={class:"text-2xl drop-shadow-md md:text-4xl lg:text-5xl"},Xt={props:{data:Object,today:Object,full_month:String},setup(i){const s=i,l=n=>s.today.year==n.year&&s.today.month==n.month&&s.today.day==n.day+1;return(n,a)=>(u(),h("div",null,[t("div",Bt,[t("div",{onClick:a[0]||(a[0]=e=>n.$emit("prev-month")),class:"card select-none col-span-1 text-4xl text-gray-500"},Jt),t("p",Rt,[g(t("select",{name:"month",id:"month-input",class:"field p-2 mr-2 text-center-last","onUpdate:modelValue":a[1]||(a[1]=e=>T(full_month)?full_month.value=e:null),onChange:a[2]||(a[2]=e=>n.$emit("update-month",{month:i.full_month,year:i.data.year}))},[(u(!0),h(S,null,U(H(D),(e,o)=>(u(),h("option",{key:o,value:e},y(e),9,Yt))),128))],544),[[F,i.full_month]]),g(t("select",{name:"month",id:"month-input",class:"field p-2 ml-2 text-center-last","onUpdate:modelValue":a[3]||(a[3]=e=>i.data.year=e),onChange:a[4]||(a[4]=e=>n.$emit("update-month",{month:i.full_month,year:i.data.year}))},[(u(),h(S,null,U(4,e=>t("option",{key:e,value:e+2020},y(e+2020),9,qt)),64))],544),[[F,i.data.year]])]),t("div",{onClick:a[5]||(a[5]=e=>n.$emit("next-month")),class:"card select-none col-span-1 text-4xl text-gray-500"},Wt),Ht,(u(!0),h(S,null,U(i.data.days,(e,o)=>(u(),h("div",{class:"card select-none h-16 w-16 lg:h-32 lg:w-32 md:h-24 md:w-24 p-1 md:p-3 lg:p-4",key:o,onClick:_=>l({year:i.data.year,month:i.data.month,day:o})?n.$emit("today-clicked"):""},[t("p",{class:B(["text-left",l({year:i.data.year,month:i.data.month,day:o})?"text-sky-600 font-bold animate-bounce":""])},y(o+1),3),t("figure",Qt,y(e),1)],8,Kt))),128))])]))}},Zt={class:"container mx-auto"},te={class:"flex flex-col justify-center"},ee={class:"flex justify-center"},se={setup(i){const s=f(new Date);s.value={month:s.value.getMonth()+1,year:s.value.getFullYear(),day:s.value.getDate()};const l=f({month:s.value.month,year:s.value.year,days:[]}),n=f(0);let a=null;const e=f(null),o=f(null);let _;z(()=>{_=N(),J(_,async d=>{if(d){a=d.uid,e.value=await X(d.uid);let c=!1;for(let r in e.value.months){const v=e.value.months[r],m=v.month,$=v.year;s.value.month==m&&s.value.year==$&&(c=!0)}c||e.value.months.push(l.value),o.value=R(),n.value=o.value.length-1,l.value=o.value[n.value]}})});function b(d){for(let c in o.value){let r=o.value[c];r.month==q(d.month)&&r.year==d.year&&(n.value=c)}l.value=o.value[n.value]}function x(){n.value+1>o.value.length-1||(n.value++,l.value=o.value[n.value])}function p(){n.value-1<0||(n.value--,l.value=o.value[n.value])}async function w(){let d=e.value.months.find((m={month,year})=>m.month==s.value.month&&m.year==s.value.year);const c=e.value.months.indexOf(d),r=d.days.indexOf(s.value.day);r!=-1?(e.value.months[c].days.splice(r,1),l.value.days[s.value.day-1]=""):(e.value.months[c].days.push(s.value.day),P(l.value.days,s.value.day-1,0,3)?l.value.days[s.value.day-1]="\u2728":P(l.value.days,s.value.day-1,0,1)?l.value.days[s.value.day-1]="\u{1F31F}":l.value.days[s.value.day-1]="\u2B50"),await Z(a,e.value.months);let v=[0,0,0];for(let m in o.value)o.value[m].days.forEach(j=>{if(j!="")switch(j){case"\u2B50":v[0]++;break;case"\u{1F31F}":v[1]++;break;case"\u2728":v[2]++;break}});await tt(a,v)}function O(){return D[l.value.month-1]}function R(){let d=[];const c=e.value.months,r=c[0],v=c[c.length-1];let m=r.month,$=r.year;for(;$<=v.year&&!(m>v.month&&$>=v.year);){let j=[],E=c.find((L={month:m,year:$})=>L.month==m&&L.year==$);E?j=A(E):j=A({month:m,year:$,days:[]}),d.push({month:m,year:$,days:j}),m<12?m=m+1:($=$+1,m=1)}return d}function A(d){let c=[];for(let r=0;r<=Y(d);r++)d.days.includes(r)?c[r-1]="\u2B50":c[r-1]="";for(let r=1;r<=c.length;r++)c[r]&&(P(c,r,0,3)?c[r]="\u2728":P(c,r,0,1)&&(c[r]="\u{1F31F}"));return c}function P(d,c,r,v){let m=c-r-1;return r==v?!0:m<0||!d[m]?!1:P(d,c,r+1,v)}function Y(d){return new Date(d.year,d.month,0).getDate()}function q(d){return D.indexOf(d)+1}return(d,c)=>(u(),h("div",Zt,[t("div",te,[t("div",ee,[k(Xt,{data:l.value,today:s.value,full_month:O(),onUpdateMonth:b,onNextMonth:x,onPrevMonth:p,onTodayClicked:w},null,8,["data","today","full_month"])])])]))}},le={class:"w-3/4 mt-10 mx-auto text-white text-left"},ae=t("h1",{class:"text-4xl text-center text-medium"},"Store",-1),ne={class:"reward-container pt-5 w-fit mx-auto flex flex-wrap justify-center align-middle content-center text-gray-800"},oe={key:0},ie=t("i",{class:"w-20 h-20 text-7xl mx-auto text-sky-400 fa-solid fa-trophy"},null,-1),re={class:"flex flex-col p-2 justify-left align-middle"},ce=t("h1",{class:"text-lg"},"Cool Reward",-1),de={class:"text-lg"},ue={key:1},he=t("i",{class:"w-20 h-20 text-7xl mx-auto text-gray-300 fa-solid fa-circle-plus"},null,-1),fe=t("div",{class:"flex flex-col p-2"},[t("h1",{class:"text-lg"},"Add New"),t("h1",{class:"text-lg"},"Reward")],-1),me=[he,fe],xe={setup(i){const s=f(null);return s.value=[1,2,3,4,5,6],(l,n)=>(u(),h("div",le,[ae,t("div",ne,[(u(!0),h(S,null,U(s.value.length+1,a=>(u(),h("div",{class:"card w-52 m-2 text-center",key:a},[a<=s.value.length?(u(),h("div",oe,[ie,t("div",re,[ce,t("h1",de,"\u2B50"+y(a*10),1)])])):(u(),h("div",ue,me))]))),128))])]))}},pe={class:"w-3/4 mt-10 mx-auto text-white text-left"},_e=t("h1",{class:"text-4xl text-center text-medium"},"Inventory",-1),ve={class:"reward-container pt-5 w-fit mx-auto flex flex-wrap justify-center align-middle content-center text-gray-800"},ge={class:"w-fit h-fit text-7xl mx-auto text-sky-400"},ye={class:"flex justify-center items-center h-32 w-32"},we={class:"flex flex-col p-2 justify-left align-middle"},$e={class:"text-lg"},be={props:{items:Array},setup(i){return(s,l)=>(u(),h("div",pe,[_e,t("div",ve,[(u(!0),h(S,null,U(i.items,(n,a)=>(u(),h("div",{class:"card w-52 m-2 text-center",key:a},[t("div",ge,[t("div",ye,y(n.icon),1)]),t("div",we,[t("h1",$e,y(n.name),1)])]))),128))])]))}},ke={class:"w-[60%] absolute top-[60%] lg:top-1/2 left-[55%] -translate-x-1/2 -translate-y-2/3"},Ce=t("h1",{class:"absolute right-1 left-1 text-3xl font-medium text-center"}," Selecte Profile Icon ",-1),je=t("i",{class:"pt-2 pr-1 fa-solid fa-circle-xmark"},null,-1),Se=[je],Ue={class:"modal-card p-10 flex flex-wrap justify-center align-middle"},Pe=["onClick"],Ie={class:"self-center"},Me={props:{icon:String},emits:["closeIconPicker"],setup(i,{emit:s}){const l=["\u2B50","\u{1F422}","\u{1F987}","\u{1F382}","\u{1F339}","\u{1F335}","\u{1F920}","\u{1F921}","\u{1F47D}","\u{1F47B}","\u{1F916}","\u{1F47E}","\u{1F432}","\u{1F414}","\u{1F438}","\u{1F99D}","\u{1F43C}","\u{1F40A}","\u{1F40D}","\u{1F988}","\u{1F42C}","\u{1F419}","\u{1F990}","\u{1F577}","\u{1F997}","\u{1F9E0}"];f(null);const n=a=>{s("closeIconPicker",a)};return(a,e)=>(u(),h("div",ke,[Ce,t("div",{onClick:e[0]||(e[0]=o=>a.$emit("closeIconPicker")),class:"absolute z-10 right-1 cursor-pointer text-xl"},Se),t("div",Ue,[(u(),h(S,null,U(l,(o,_)=>t("span",{class:"icon-button flex text-center justify-center w-[80px] h-[80px] text-5xl m-2",onClick:b=>n(o),key:_},[t("span",Ie,y(o),1)],8,Pe)),64))])]))}},Ve={class:"w-1/2 mt-10 mx-auto text-white text-left"},De=t("h1",{class:"text-4xl text-center text-medium"},"Profile",-1),Ne={class:"pt-5 w-full mx-auto flex flex-wrap justify-evenly align-middle content-center text-gray-800"},Oe={class:"text-9xl w-[200px] h-[200px] text-center",style:{"line-height":"inherit"}},Ae={class:"grow sm:ml-0 lg:ml-10 flex flex-col"},Ee=t("h2",{class:"text-3xl text-center md:text-left text-white"}," Change Name ",-1),Le=t("button",{type:"submit",class:"btn mt-2 lg:mt-0 sm:ml-0 lg:ml-2 h-fit"}," Change ",-1),Fe={key:0,id:"overlay"},Te={props:{user_uid:String,user_name:String,icon:String},emits:["update-username","update-icon"],setup(i,{emit:s}){const l=f(!1),n=f(null),a=()=>{l.value=!0},e=async o=>{o&&(n.value=o,s("update-icon",o)),l.value=!1};return(o,_)=>(u(),h("div",null,[t("div",{class:B(l.value?"blur-sm":"")},[t("div",Ve,[De,t("div",Ne,[t("div",{onClick:a,class:"profile-icon w-fit h-fit p-5 flex justify-center align-middle content-center"},[t("span",Oe,y(n.value?n.value:i.icon),1)]),t("div",Ae,[Ee,t("form",{class:"flex flex-col lg:flex-row mt-2",onSubmit:_[1]||(_[1]=V(b=>o.$emit("update-username",i.user_name),["prevent"]))},[g(t("input",{type:"text",class:"field w-full","onUpdate:modelValue":_[0]||(_[0]=b=>T(user_name)?user_name.value=b:null)},null,512),[[C,i.user_name]]),Le],32)])])])],2),l.value?(u(),h("div",Fe,[k(Me,{onCloseIconPicker:e})])):Q("",!0)]))}},Be={class:"w-1/3 mt-10 mx-auto text-white text-left"},ze=t("h1",{class:"text-4xl text-center text-medium"},"Settings",-1),Je={class:"pt-5"},Re=t("h2",{class:"text-3xl text-white"},"Change Email",-1),Ye=t("div",{class:"flex justify-center mt-2"},[t("button",{type:"submit",class:"btn w-60"},"Change Email")],-1),qe={class:"pt-5"},Ge=["onSubmit"],We=t("h2",{class:"text-3xl text-white"},"Change Password",-1),He=t("div",{class:"flex justify-center mt-2"},[t("button",{type:"submit",class:"btn w-60"},"Change Password")],-1),Ke={setup(i){const s=f(""),l=f(""),n=f(""),a=f(""),e=f(""),o=f(""),_=()=>{console.log("change password")};return(b,x)=>(u(),h("div",Be,[ze,t("div",Je,[t("form",{class:"flex flex-col text-black",onSubmit:x[3]||(x[3]=V((...p)=>b.changeEmail&&b.changeEmail(...p),["prevent"]))},[Re,g(t("input",{type:"text",class:"field mt-2",placeholder:"New Email","onUpdate:modelValue":x[0]||(x[0]=p=>s.value=p)},null,512),[[C,s.value]]),g(t("input",{type:"password",class:"field mt-2",placeholder:"Password","onUpdate:modelValue":x[1]||(x[1]=p=>l.value=p)},null,512),[[C,l.value]]),g(t("input",{type:"password",class:"field mt-2",placeholder:"Confirm Password","onUpdate:modelValue":x[2]||(x[2]=p=>n.value=p)},null,512),[[C,n.value]]),Ye],32)]),t("div",qe,[t("form",{class:"flex flex-col text-black",onSubmit:V(_,["prevent"])},[We,g(t("input",{type:"password",class:"field mt-2",placeholder:"Current Password","onUpdate:modelValue":x[4]||(x[4]=p=>a.value=p)},null,512),[[C,a.value]]),g(t("input",{type:"password",class:"field mt-2",placeholder:"New Password","onUpdate:modelValue":x[5]||(x[5]=p=>e.value=p)},null,512),[[C,e.value]]),g(t("input",{type:"password",class:"field mt-2",placeholder:"Confirm New Password","onUpdate:modelValue":x[6]||(x[6]=p=>o.value=p)},null,512),[[C,o.value]]),He],40,Ge)])]))}},Qe={class:"pt-4"},Xe={props:{userdata:Object,current_page:String},emits:["update_name","update_icon"],setup(i,{emit:s}){const l=i,n=async e=>{await et(l.userdata.uid,e),s("update_name",e)},a=async e=>{await st(l.userdata.uid,e),s("update_icon",e)};return(e,o)=>(u(),h("div",Qe,[g(k(se,null,null,512),[[I,l.current_page=="Calendar"]]),g(k(xe,null,null,512),[[I,l.current_page=="Store"]]),g(k(be,{items:l.userdata.items},null,8,["items"]),[[I,l.current_page=="Inventory"]]),g(k(Te,{user_uid:l.userdata.uid,user_name:l.userdata.name,icon:l.userdata.icon,onUpdateUsername:n,onUpdateIcon:a},null,8,["user_uid","user_name","icon"]),[[I,l.current_page=="Profile"]]),g(k(Ke,null,null,512),[[I,l.current_page=="Settings"]])]))}},Ze={class:"flex"},ts={class:"container"},es=t("h1",{class:"text-2xl text-white align-middle"},[M(" star "),t("span",{class:"text-4xl star text-semibold"},"\u22C6"),M(" calendar ")],-1),as={setup(i){const s=f({}),l=f("Friend"),n=f("\u2B50"),a=f([]),e=f(!1);let o;z(()=>{o=N(),J(o,async w=>{w?(e.value=!0,s.value=await lt(w.uid),s.value.uid=w.uid,l.value=s.value.name,n.value=s.value.icon,a.value=s.value.balance):e.value=!1})});const _=f("Calendar"),b=w=>{_.value=w},x=w=>{l.value=w},p=w=>{n.value=w};return(w,O)=>(u(),h("div",Ze,[k(Tt,{onUpdatePage:b,username:l.value,icon:n.value,balance:a.value,isLoggedIn:e.value},null,8,["username","icon","balance","isLoggedIn"]),t("div",ts,[es,k(Xe,{onUpdate_name:x,onUpdate_icon:p,current_page:_.value,userdata:s.value},null,8,["current_page","userdata"])])]))}};export{as as default};
