"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[510],{510:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});var i=t(43),n=t(624),c=t(579);class r extends i.Component{constructor(s){super(s),this.state={item:s.item}}componentDidMount(){}render(){return(0,c.jsxs)(c.Fragment,{children:["    ",(0,c.jsxs)("div",{className:"img-main",children:[(0,c.jsx)("img",{src:t(907)("./".concat(this.props.item.images[0])),alt:"Sea and mountain"}),(0,c.jsx)(n.A,{images:this.props.item.images})]})]})}}var a=t(910),l=t(101);t(555);class o extends i.Component{constructor(s){super(s),this.state={item:s.item,quantity:s.quantity,count:s.count,decresecount:s.decresecount,incresecount:s.incresecount,decresequantity:s.decresequantity,increasequantity:s.increasequantity}}render(){return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"item-details",children:[(0,c.jsx)("img",{src:t(907)("./".concat(this.props.item.brand)),alt:"Sea and mountain",width:"130px"}),(0,c.jsx)("div",{className:"item-name",children:this.props.item.name}),(0,c.jsx)("div",{className:"cat",children:this.props.item.cat}),(0,c.jsxs)("div",{className:"ratinh",children:[(0,c.jsx)(a.g,{icon:l.yy,style:{color:"FFC700CF"},className:"activerate"}),(0,c.jsx)(a.g,{icon:l.yy,style:{color:"FFC700CF"}}),(0,c.jsx)(a.g,{icon:l.yy,style:{color:"lightgray"}}),(0,c.jsx)(a.g,{icon:l.yy,style:{color:"lightgray"}}),(0,c.jsx)(a.g,{icon:l.yy,style:{color:"lightgray"}}),(0,c.jsxs)("span",{className:"ratenumber",children:[this.props.item.rating," of  5"]}),(0,c.jsxs)("span",{className:"vote-number",children:[this.props.item.numofvoting," Rates"]})]}),(0,c.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[(0,c.jsxs)("div",{className:"newprice",children:[" ",(0,c.jsx)("strong",{children:parseFloat(this.props.item.price.replace(/[^\d.-]/g,""))-parseFloat(this.props.item.price.replace(/[^\d.-]/g,""))*parseFloat(this.props.item.discount.replace(/[^\d.-]/g,""))/100}),(0,c.jsx)("small",{children:"LE"})]}),(0,c.jsxs)("s",{className:"lastprice",children:[this.props.item.price," ",(0,c.jsx)("small",{children:"LE"})]}),(0,c.jsx)("span",{className:"discount",children:this.props.item.discount})]})]}),(0,c.jsxs)("div",{style:{marginTop:"10px"},children:[(0,c.jsx)("h5",{style:{textAlign:"left",fontWeight:"bold"},children:"size"}),(0,c.jsxs)("div",{className:"size",children:[(0,c.jsx)("div",{children:"small"}),(0,c.jsx)("div",{children:"miduim"}),(0,c.jsx)("div",{children:"large"}),(0,c.jsx)("div",{children:"xlarge"}),(0,c.jsx)("div",{children:"xxlarge"})]})]}),(0,c.jsxs)("div",{className:"color",children:[(0,c.jsx)("h5",{style:{textAlign:"left",fontWeight:"bold"},children:"color"}),this.props.item.imagecolor.map(((s,e)=>(0,c.jsx)("div",{className:"img-colorcontainer",style:{width:"fit-content"},children:(0,c.jsx)("img",{src:t(907)("./".concat(s)),className:"img-color"})},e)))]}),(0,c.jsxs)("div",{className:"quantity",children:[(0,c.jsx)("button",{onClick:this.state.increasequantity,children:(0,c.jsx)(a.g,{icon:l.QLR})}),(0,c.jsx)("span",{children:this.props.quantity}),(0,c.jsx)("button",{disabled:"",onClick:this.state.decresequantity,children:(0,c.jsx)(a.g,{icon:l.EZy})})]}),(0,c.jsxs)("div",{className:"operation-card",children:[(0,c.jsx)("button",{className:"add ",onClick:this.state.incresecount,children:" add to cart"}),(0,c.jsx)("button",{className:"remove",onClick:this.state.decresecount,children:"pickup from store"})]})]})}}class d extends i.Component{constructor(s){super(s),this.state={item:s.item,count:s.count,decresecount:s.decresecount,quantity:s.quantity,incresecount:s.incresecount,decresequantity:s.decresequantity,increasequantity:s.increasequantity}}render(){return(0,c.jsxs)("div",{className:"product-container container",children:[(0,c.jsx)("div",{className:"left-details",style:{width:"50%"},children:(0,c.jsx)(r,{item:this.props.item})}),(0,c.jsx)("div",{className:"right-details",children:(0,c.jsx)(o,{decresequantity:this.props.decresequantity,increasequantity:this.props.increasequantity,quantity:this.props.quantity,item:this.props.item,count:this.props.count,data:this.state.data,decresecount:this.props.decresecount,incresecount:this.props.incresecount})})]})}}}}]);
//# sourceMappingURL=510.05ba20a2.chunk.js.map