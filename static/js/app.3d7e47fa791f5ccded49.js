webpackJsonp([8],{102:function(t,e,n){"use strict";function r(t,e){if(!i(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function i(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function s(t,e,n){return e="data-"+e,n?t.setAttribute(e,n):t.getAttribute(e)}function a(t){return!1!==o&&("standard"===o?t:o+t.charAt(0).toUpperCase()+t.substr(1))}e.c=r,e.b=s,e.a=a;var c=document.createElement("div").style,o=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==c[t[e]])return e;return!1}()},103:function(t,e,n){"use strict";function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function i(t){for(var e=t.slice(),n=0;n<e.length;n++){var i=r(0,n),s=e[n];e[n]=e[i],e[i]=s}return e}function s(t,e){var n=void 0;return function(){for(var r=this,i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];console.log(s),n&&clearTimeout(n),n=setTimeout(function(){t.apply(r,s)},e)}}e.a=i,e.b=s},104:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d});var r="SET_SINGER",i="SET_PLAYING_STATE",s="SET_FULL_SCREEN",a="SET_PLAY_LIST",c="SET_SEQUENCE_LIST",o="SET_PLAY_MODE",l="SET_CURRENT_INDEX",u="SET_TOP_LIST",d="SET_DISC"},136:function(t,e,n){"use strict";var r=n(62),i=n(411);r.a.use(i.a);var s=function(t){n.e(4).then(n.bind(null,418)).then(function(e){t(e)})},a=function(t){n.e(5).then(n.bind(null,421)).then(function(e){t(e)})},c=function(t){n.e(0).then(n.bind(null,419)).then(function(e){t(e)})},o=function(t){n.e(6).then(n.bind(null,417)).then(function(e){t(e)})},l=function(t){n.e(2).then(n.bind(null,420)).then(function(e){t(e)})},u=function(t){n.e(1).then(n.bind(null,422)).then(function(e){t(e)})},d=function(t){n.e(3).then(n.bind(null,416)).then(function(e){t(e)})};e.a=new i.a({base:"/fun-music/",routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"Recommend",component:s,children:[{path:":id",component:d}]},{path:"/singer",name:"Singer",component:a,children:[{path:":id",component:l}]},{path:"/search",name:"Search",component:c,children:[{path:":id",component:l}]},{path:"/rank",name:"Rank",component:o,children:[{path:":id",component:u}]}]})},137:function(t,e,n){"use strict";var r=n(62),i=n(97),s=n(172),a=n(173),c=n(175),o=n(174),l=n(413);n.n(l);r.a.use(i.c);e.a=new i.c.Store({actions:s,getters:a,state:c.a,mutations:o.a,strict:!1,plugins:[]})},139:function(t,e){},141:function(t,e){t.exports="data:image/png;base64,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"},143:function(t,e,n){n(380);var r=n(31)(n(164),n(409),"data-v-73b00972",null);t.exports=r.exports},161:function(t,e,n){n(381);var r=n(31)(n(167),n(410),"data-v-c46eaa8a",null);t.exports=r.exports},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(401),i=n.n(r),s=n(402),a=n.n(s),c=n(403),o=n.n(c);e.default={components:{MHeader:i.a,Tab:o.a,player:a.a}}},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(102),i=n.i(r.a)("transform");e.default={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this._offset(n)}},progressTouchEnd:function(t){this.touch.initiated=!1,this._triggerPercent()},progressClick:function(t){var e=this.$refs.progressBar.getBoundingClientRect(),n=t.pageX-e.left;this._offset(n),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[i]="translate3d("+t+"px,0,0)"}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this._offset(n)}}}}},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{radius:{type:Number,default:32},percent:{type:Number,default:0}},data:function(){return{dashArray:100*Math.PI}},computed:{dashOffset:function(){return(1-this.percent)*this.dashArray}}}},167:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(163),i=n.n(r);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}}},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(149),i=n.n(r),s=n(97),a=n(370),c=n.n(a),o=n(102),l=n(66),u=n(103),d=n(399),f=n.n(d),h=n(400),p=n.n(h),v=n(394),g=n.n(v),m=n(161),y=n.n(m),A=n.i(o.a)("transform"),S=n.i(o.a)("transitionDuration");e.default={data:function(){return{songReady:!1,currentTime:0,radius:32,currentLyric:null,currentLineNum:0,currentShow:"cd",playingLyric:""}},created:function(){this.touch={}},computed:i()({cdCls:function(){return this.playing?"play":"play pause"},playIcon:function(){return this.playing?"icon-pause":"icon-play"},iconMode:function(){return this.mode===l.a.sequence?"icon-sequence":this.mode===l.a.loop?"icon-loop":"icon-random"},miniIcon:function(){return this.playing?"icon-pause-mini":"icon-play-mini"},disableCls:function(){return this.songReady?"":"disable"},percent:function(){return this.currentTime/this.currentSong.duration}},n.i(s.a)(["fullScreen","playList","currentSong","playing","currentIndex","mode","sequenceList"])),methods:i()({back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},enter:function(t,e){var n=this._getPosAndScale,r=n.x,i=n.y,s=n.scale,a={0:{transform:"translate3d("+r+"px, "+i+"px, 0) scale("+s+")"},60:{transform:"translate3d(0, 0, 0) scale(1.1)"},100:{transform:"translate3d(0, 0, 0) scale(1)"}};c.a.registerAnimation({name:"move",animation:a,presets:{duration:400,easing:"linear"}}),c.a.runAnimation(this.$refs.cdWrapper,"move",e)},afterEnter:function(){c.a.unregisterAnimation("move"),this.$refs.cdWrapper.style.animation=""},leave:function(t,e){this.$refs.cdWrapper.style.transition="all 0.4s";var n=this._getPosAndScale(),r=n.x,i=n.y,s=n.scale;this.$refs.cdWrapper.style[A]="translate3d("+r+"px, "+i+"px, 0) scale("+s+")",this.$refs.cdWrapper.addEventListener("transitionend",e)},afterLeave:function(){this.$refs.cdWrapper.style.transition="",this.$refs.cdWrapper.style[A]=""},togglePlaying:function(){this.songReady&&(this.setPlayingStae(!this.playing),this.currentLyric&&this.currentLyric.togglePlay())},end:function(){this.mode===l.a.loop?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.currentLyric&&this.currentLyric.seek(0)},next:function(){if(this.songReady){if(1===this.playList.length)this.loop();else{var t=this.currentIndex+1;t===this.playList.length&&(t=0),this.setCurrentIndex(t),this.play||this.togglePlaying()}this.songReady=!1}},prev:function(){if(this.songReady){if(1===this.playList.length)this.loop();else{var t=this.currentIndex-1;-1===t&&(t=this.playList.length-1),this.setCurrentIndex(t),this.play||this.togglePlaying()}this.songReady=!1}},ready:function(){this.songReady=!0},error:function(t){console.log(t),alert("sorry,找不到歌曲!"),this.songReady=!0},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){t|=0;var e=t/60|0,n=t%60;return this._pad(e)+":"+this._pad(n)},onProgressBarChange:function(t){var e=this.currentSong.duration*t;this.$refs.audio.currentTime=e,this.playing||this.togglePlaying(),this.currentLyric&&this.currentLyric.seek(1e3*e)},changeMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var e=null;e=t===l.a.random?n.i(u.a)(this.sequenceList):this.sequenceList,this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.setCurrentIndex(n)},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(e){t.currentSong.lyric===e&&(t.currentLyric=new g.a(e,t.handleLyric),t.playing&&t.currentLyric.play())}).catch(function(){t.currentLyric=null,t.playingLyric="",t.currentLineNum=0})},handleLyric:function(t){var e=t.lineNum,n=t.txt;if(this.currentLineNum=e,e>5){var r=this.$refs.lyricLine[e-5];this.$refs.lyricList.scrollToElement(r,1e3)}else this.$refs.lyricList.scrollToElement(0,0,1e3);this.playingLyric=n},middleTouchStart:function(t){this.touch.initited=!0;var e=t.touches[0];this.touch.startX=e.pageX,this.touch.startY=e.pageY},middleTouchMove:function(t){if(this.touch.initited){var e=t.touches[0],n=e.pageX-this.touch.startX,r=e.pageY-this.touch.startY;if(!(Math.abs(r)>Math.abs(n))){var i="cd"===this.currentShow?0:-window.innerWidth,s=Math.min(0,Math.max(-window.innerWidth,i+n));this.touch.percent=Math.abs(s/window.innerWidth),this.$refs.lyricList.$el.style[A]="translate3d("+s+"px, 0, 0)",this.$refs.lyricList.$el.style[S]=0,this.$refs.middleL.style.opacity=1-this.touch.percent,this.$refs.middleL.style[S]=0}}},middleTouchEnd:function(t){var e=void 0,n=void 0;"cd"===this.currentShow?this.touch.percent>.1?(e=-window.innerWidth,this.currentShow="lyric",n=0):(e=0,n=1):this.touch.percent<.9?(e=0,this.currentShow="cd",n=1):(e=-window.innerWidth,n=0);this.$refs.lyricList.$el.style[A]="translate3d("+e+"px, 0, 0)",this.$refs.lyricList.$el.style[S]="300ms",this.$refs.middleL.style.opacity=n,this.$refs.middleL.style[S]="300ms"},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t},_getPosAndScale:function(){var t=.8*window.innerWidth,e=40/t;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-t/2-30,scale:e}}},n.i(s.b)({setFullScreen:"SET_FULL_SCREEN",setPlayingStae:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlayList:"SET_PLAY_LIST"})),watch:{currentSong:function(t,e){var n=this;t.id!==e.id&&(this.currentLyric&&this.currentLyric.stop(),clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audio.play(),n.getLyric()},1e3))},playing:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})}},components:{ProgressBar:f.a,ProgressCircle:p.a,Scroll:y.a}}},170:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(138),i=(n.n(r),n(62)),s=n(143),a=n.n(s),c=n(136),o=n(137),l=n(140),u=n.n(l),d=n(142),f=n.n(d),h=n(139);n.n(h);u.a.attach(document.body),i.a.use(f.a,{loading:n(141)}),i.a.config.productionTip=!1,new i.a({el:"#app",router:c.a,store:o.a,render:function(t){return t(a.a)}})},172:function(t,e,n){"use strict";function r(t,e){return t.findIndex(function(t){return t.id===e.id})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"selectPlay",function(){return c}),n.d(e,"randomPlay",function(){return o}),n.d(e,"insertSong",function(){return l});var i=n(104),s=n(66),a=n(103),c=function(t,e){var c=t.commit,o=t.state,l=e.list,u=e.index;if(c(i.e,l),o.mode===s.a.random){var d=n.i(a.a)(l);c(i.d,d),u=r(d,l[u])}else c(i.d,l);c(i.g,u),c(i.c,!0),c(i.b,!0)},o=function(t,e){var r=t.commit,c=e.list;r(i.f,s.a.random),r(i.e,c);var o=n.i(a.a)(c);r(i.d,o),r(i.g,0),r(i.c,!0),r(i.b,!0)},l=function(t,e){var n=t.commit,s=t.state,a=s.playList.slice(),c=s.sequenceList.slice(),o=s.currentIndex,l=a[o],u=r(a,e);o++,a.splice(o,0,e),u>-1&&(o>u?(a.splice(u,1),o--):a.splice(u+1,1));var d=r(c,l)+1,f=r(c,e);c.splice(d,0,e),f>-1&&(d>f?c.splice(f,1):c.splice(f+1,1)),n(i.d,a),n(i.e,c),n(i.g,o),n(i.c,!0),n(i.b,!0)}},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return r}),n.d(e,"playing",function(){return i}),n.d(e,"fullScreen",function(){return s}),n.d(e,"playList",function(){return a}),n.d(e,"sequenceList",function(){return c}),n.d(e,"mode",function(){return o}),n.d(e,"currentIndex",function(){return l}),n.d(e,"currentSong",function(){return u}),n.d(e,"topList",function(){return d}),n.d(e,"disc",function(){return f});var r=function(t){return t.singer},i=function(t){return t.playing},s=function(t){return t.fullScreen},a=function(t){return t.playList},c=function(t){return t.sequenceList},o=function(t){return t.mode},l=function(t){return t.currentIndex},u=function(t){return t.playList[t.currentIndex]||{}},d=function(t){return t.topList},f=function(t){return t.disc}},174:function(t,e,n){"use strict";var r,i=n(176),s=n.n(i),a=n(104),c=(r={},s()(r,a.a,function(t,e){t.singer=e}),s()(r,a.b,function(t,e){t.playing=e}),s()(r,a.c,function(t,e){t.fullScreen=e}),s()(r,a.d,function(t,e){t.playList=e}),s()(r,a.e,function(t,e){t.sequenceList=e}),s()(r,a.f,function(t,e){t.mode=e}),s()(r,a.g,function(t,e){t.currentIndex=e}),s()(r,a.h,function(t,e){t.topList=e}),s()(r,a.i,function(t,e){t.disc=e}),r);e.a=c},175:function(t,e,n){"use strict";var r=n(66),i={singer:{},playing:!1,fullScreen:!1,playList:[],sequenceList:[],mode:r.a.sequence,currentIndex:-1,disc:{},topList:{}};e.a=i},375:function(t,e){},376:function(t,e){},377:function(t,e){},378:function(t,e){},379:function(t,e){},380:function(t,e){},381:function(t,e){},399:function(t,e,n){n(376);var r=n(31)(n(165),n(405),"data-v-429160fb",null);t.exports=r.exports},400:function(t,e,n){n(378);var r=n(31)(n(166),n(407),"data-v-5a1ec93d",null);t.exports=r.exports},401:function(t,e,n){n(377);var r=n(31)(n(168),n(406),"data-v-56a58140",null);t.exports=r.exports},402:function(t,e,n){n(375);var r=n(31)(n(169),n(404),"data-v-3015abc0",null);t.exports=r.exports},403:function(t,e,n){n(379);var r=n(31)(n(170),n(408),"data-v-6919f4cc",null);t.exports=r.exports},404:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length>0"}],staticClass:"player"},[n("transition",{attrs:{name:"normal"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{attrs:{width:"100%",height:"100%",src:t.currentSong.image,alt:""}})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"middle",on:{touchstart:function(e){e.preventDefault(),t.middleTouchStart(e)},touchmove:function(e){e.preventDefault(),t.middleTouchMove(e)},touchend:t.middleTouchEnd}},[n("div",{ref:"middleL",staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{staticClass:"cd",class:t.cdCls},[n("img",{staticClass:"image",attrs:{src:t.currentSong.image}})])]),t._v(" "),n("div",{staticClass:"playing-lyric-wrapper"},[n("div",{staticClass:"playing-lyric"},[t._v(t._s(t.playingLyric))])])]),t._v(" "),n("scroll",{ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(e,r){return n("p",{ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===r}},[t._v(t._s(e.txt))])})):t._e()])])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"dot-wrapper"},[n("span",{staticClass:"dot",class:{active:"cd"===t.currentShow}}),t._v(" "),n("span",{staticClass:"dot",class:{active:"lyric"===t.currentShow}})]),t._v(" "),n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[n("div",{staticClass:"icon i-left",on:{click:t.changeMode}},[n("i",{class:t.iconMode})]),t._v(" "),n("div",{staticClass:"icon i-left",class:t.disableCls},[n("i",{staticClass:"icon-prev",on:{click:t.prev}})]),t._v(" "),n("div",{staticClass:"icon i-center",class:t.disableCls},[n("i",{class:t.playIcon,on:{click:t.togglePlaying}})]),t._v(" "),n("div",{staticClass:"icon i-right",class:t.disableCls},[n("i",{staticClass:"icon-next",on:{click:t.next}})]),t._v(" "),n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon icon-not-favorite"})])])])])]),t._v(" "),n("transition",{attrs:{name:"mini"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"icon"},[n("img",{class:t.cdCls,attrs:{width:"40",height:"40",src:t.currentSong.image,alt:""}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"control"},[n("progress-circle",{attrs:{radius:t.radius,percent:t.percent}},[n("i",{staticClass:"icon-mini",class:t.miniIcon,on:{click:function(e){e.stopPropagation(),t.togglePlaying(e)}}})])],1),t._v(" "),n("div",{staticClass:"control"},[n("i",{staticClass:"icon-playlist"})])])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{play:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.end}})],1)},staticRenderFns:[]}},405:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){e.preventDefault(),t.progressTouchMove(e)},touchend:t.progressTouchEnd}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},406:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("QQ Music")])])}]}},407:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-circle"},[n("svg",{attrs:{width:t.radius,height:t.radius,viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent"}}),t._v(" "),n("circle",{staticClass:"progress-bar",attrs:{r:"50",cx:"50",cy:"50",fill:"transparent","stroke-dasharray":t.dashArray,"stroke-dashoffset":t.dashOffset}})]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},408:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行\n    ")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},409:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("player")],1)},staticRenderFns:[]}},410:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},66:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={sequence:0,loop:1,random:2}}},[171]);
//# sourceMappingURL=app.3d7e47fa791f5ccded49.js.map